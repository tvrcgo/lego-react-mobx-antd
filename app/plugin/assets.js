module.exports = function(opts, app) {
  // resolve webpack assets
  const resolve = require('path').resolve
  const assets = require(resolve(process.cwd(), 'webpack-assets.json'))
  app.context.assets = assets
}