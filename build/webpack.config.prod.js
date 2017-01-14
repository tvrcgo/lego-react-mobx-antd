const webpack = require('webpack')
const config = require('./webpack.config.base')
const { assign } = Object

config.output = assign(config.output, {
  filename: '[name].[hash:8].js'
})

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    minimize: true,
    output: {
      comments: false
    }
  })
])

module.exports = config