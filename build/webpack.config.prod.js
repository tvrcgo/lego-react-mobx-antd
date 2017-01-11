const webpack = require('webpack')
const config = require('./webpack.config')

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
])

config.output = {
  path: 'app/public/bundle',
  filename: '[name]-[hash:8].bundle.js'
}

module.exports = config