module.exports = function(opts, app) {
  // resolve webpack assets
  const resolve = require('path').resolve
  const lib = require(resolve(process.cwd(), 'dist/lib-assets.json'))
  const entry = require(resolve(process.cwd(), 'dist/app-assets.json'))
  app.context.assets = Object.assign(entry, lib)
}