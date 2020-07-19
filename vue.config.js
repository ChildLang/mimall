module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    // 反向代理
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        pathRewrite: { '^/api': '' },
        secure: true,
        changeOrigin: true
      }
    }
  }
}