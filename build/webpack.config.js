'use strict'

const webpack = require('webpack')
const path = require('path')
const assetsPlugin = require('assets-webpack-plugin')
const ROOT = path.resolve(process.cwd(), 'front')
const entry = (name) => {
  return path.resolve(ROOT, 'entry', name, 'index.js')
}
// ant design custom theme
const theme = require(path.resolve(ROOT, 'style/antd-theme.js'))

module.exports = {
  entry: {
    index: entry('index')
  },
  output: {
    path: 'app/public/bundle',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      '@view': path.resolve(ROOT, 'view'),
      '@component': path.resolve(ROOT, 'component'),
      '@style': path.resolve(ROOT, 'style'),
      '@lib': path.resolve(ROOT, 'lib')
    }
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [['import', { "libraryName": "antd", "style": true }]]
        },
        exclude: ['node_modules']
      },
      {
        test: /\.css/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.less/,
        loader: `style!css!postcss!less?{modifyVars:${JSON.stringify(theme)}}`
      }
    ]
  },
  postcss: function () {
    return [
      require('postcss-nested'),
      require('autoprefixer')
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  plugins: [
    new assetsPlugin({
      fullPath: false
    })
  ]
}
