const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    port: 4001,
    proxy: {  //配置跨域
      '/api': {
        target: 'http://localhost:8084/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true,  //允许跨域
      },
    }
  },
})
