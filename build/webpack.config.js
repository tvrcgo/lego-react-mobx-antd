'use strict'

const webpack = require('webpack')
const path = require('path')

const ROOT = process.cwd()

const entry = (name) => {
  return path.resolve(ROOT, 'lego/view/', name, 'index.js')
}

module.exports = {
  entry: {
    index: entry('index')
  },
  output: {
    path: 'app/public/bundle',
    filename: '[name].js'
  },
  resolve: {
    root: [
      path.resolve(ROOT, 'lego')
    ],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      '@component': path.resolve(ROOT, 'lego/component')
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
          plugins: [['import', { "libraryName": "antd", "style": "css" }]]
        },
        include: [
          path.resolve(ROOT, 'lego'),
        ],
        exclude: ['node_modules']
      },
      {
        test: /\.css/,
        loader: 'style!css!postcss'
      }
    ],
  },
  postcss: function () {
    return [
      require('postcss-nested'),
      require('autoprefixer')
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
