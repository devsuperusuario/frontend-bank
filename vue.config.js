const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-bank/'  // Cambia 'frontend-bank' al nombre de tu repositorio
    : '/'
})
