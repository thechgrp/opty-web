module.exports = {
  apps: [
    {
      name: 'opty-web',
      script: 'server.js',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      // max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
      },
    }
  ]
};
