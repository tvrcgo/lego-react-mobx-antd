
// 加载的插件
exports.plugin = {
  view: {
    enable: true,
    package: 'lego-render',
    ext: 'html'
  },
  static: {
    enable: true,
    package: 'lego-static'
  },
  performance: {}
}

// 加载的agent
exports.agent = {
  livereload: {
    package: 'lego-livereload'
  }
}
