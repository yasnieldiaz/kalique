module.exports = {
  apps: [
    {
      name: 'kalique',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3003',
      cwd: '/var/www/kalique',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      }
    }
  ]
};
