const webpack = require('webpack')
const assetsPlugin = require('assets-webpack-plugin')
const { join } = require('path')
const root = process.cwd()
const front = join(root, 'front')
const pkg = require(join(root, 'package.json'))

const entry = (name) => {
  return join(front, 'view', name, 'index.js')
}

module.exports = {
  entry: {
    index: [ entry('index') ]
  },
  output: {
    path: 'app/public/bundle',
    publicPath: 'app/public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '$view': join(front, 'view'),
      '$component': join(front, 'component'),
      '$lib': join(front, 'lib')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            "transform-decorators-legacy",
            ['import', { "libraryName": "antd", "style": true }]
          ]
        },
        include: [ front ],
        exclude: [ /node_modules/ ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:8]!postcss'
      },
      {
        test: /\.less/,
        loader: `style!css!less?{modifyVars:${JSON.stringify(pkg.config.antd.theme)}}`
      }
    ]
  },
  postcss: function () {
    return [
      require('postcss-nested')
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
        manifest: require('../dist/lib-manifest.json'),
        context: root
    }),
    new assetsPlugin({
      fullPath: false,
      path: join(root, 'dist'),
      filename: 'app-assets.json'
    })
  ]
}
