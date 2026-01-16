#!/bin/bash

# XNETIK Hungary (Kalique) Update Script
# Use this to update the site after making changes

set -e

APP_NAME="kalique"
APP_DIR="/var/www/kalique"

echo "========================================="
echo "  Updating $APP_NAME"
echo "========================================="

cd $APP_DIR

# Pull latest changes
echo "[1/4] Pulling latest code..."
git pull origin main

# Install any new dependencies
echo "[2/4] Updating dependencies..."
npm ci --production=false

# Rebuild
echo "[3/4] Building application..."
npm run build

# Restart PM2
echo "[4/4] Restarting application..."
pm2 restart $APP_NAME

echo ""
echo "========================================="
echo "  Update complete!"
echo "========================================="
pm2 status
