module.exports = {
  apps: [
    {
      name: 'twins-frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3005',
      cwd: './frontend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3005
      }
    },
    {
      name: 'twins-backend',
      script: 'server.js',
      cwd: './backend',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 5050
      }
    }
  ]
};
