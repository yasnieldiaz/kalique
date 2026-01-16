#!/bin/bash

# XNETIK Hungary (Kalique) Deployment Script
# Domain: kalique.esix.online

set -e

APP_NAME="kalique"
APP_DIR="/var/www/kalique"
REPO_URL="https://github.com/yasnieldiaz/kalique.git"
DOMAIN="kalique.esix.online"

echo "========================================="
echo "  Deploying $APP_NAME to $DOMAIN"
echo "========================================="

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    echo "Please run with sudo: sudo bash deploy.sh"
    exit 1
fi

# Create app directory
echo "[1/8] Creating application directory..."
mkdir -p $APP_DIR
cd $APP_DIR

# Clone or pull repository
echo "[2/8] Fetching latest code..."
if [ -d ".git" ]; then
    git pull origin main
else
    git clone $REPO_URL .
fi

# Install dependencies
echo "[3/8] Installing dependencies..."
npm ci --production=false

# Build the application
echo "[4/8] Building application..."
npm run build

# Setup Nginx configuration
echo "[5/8] Configuring Nginx..."
cat > /etc/nginx/sites-available/$DOMAIN << 'NGINX_EOF'
server {
    listen 80;
    server_name kalique.esix.online;

    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }

    location /_next/static {
        proxy_pass http://127.0.0.1:3003;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, immutable, max-age=31536000";
    }

    location /images {
        proxy_pass http://127.0.0.1:3003;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=86400";
    }
}
NGINX_EOF

# Enable site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Test Nginx config
nginx -t

# Reload Nginx
systemctl reload nginx

# Setup PM2
echo "[6/8] Starting application with PM2..."
cd $APP_DIR
pm2 delete $APP_NAME 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save

# Setup SSL with Certbot
echo "[7/8] Setting up SSL certificate..."
certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@esix.online --redirect || echo "SSL setup may require manual intervention"

# Final status
echo "[8/8] Deployment complete!"
echo ""
echo "========================================="
echo "  Deployment Summary"
echo "========================================="
echo "  App Name: $APP_NAME"
echo "  Domain: https://$DOMAIN"
echo "  Port: 3003"
echo "  Directory: $APP_DIR"
echo ""
echo "  PM2 Commands:"
echo "    pm2 status"
echo "    pm2 logs $APP_NAME"
echo "    pm2 restart $APP_NAME"
echo "========================================="

pm2 status
