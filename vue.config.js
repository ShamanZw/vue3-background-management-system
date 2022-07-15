const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      // 当地址中包含/api时，触发代理
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true
      }
    }
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // 新增规则，处理element-plus2的错误
    config.module
      .rule('element-plus-2')
      .test(/\.mjs$/)
      // https://webpack.docschina.org/configuration/module/#ruletype
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()
  }
}
