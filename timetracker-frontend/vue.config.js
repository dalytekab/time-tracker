const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        port:  443 ,
      },
    },
  },
  transpileDependencies: true,

})
