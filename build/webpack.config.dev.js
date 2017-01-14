const webpack = require('webpack')
const config = require('./webpack.config.base')
const { assign } = Object

config.output = assign(config.output, {
  filename: '[name].js'
})

module.exports = config