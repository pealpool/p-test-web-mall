const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211'
        // target: 'http://82.156.11.187/'
      }
    }
  }
})
//todo 登录注册