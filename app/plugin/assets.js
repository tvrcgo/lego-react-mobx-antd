module.exports = function(opts, app) {
  // resolve webpack assets
  const resolve = require('path').resolve
  const lib = require(resolve(process.cwd(), 'run/lib_assets.json'))
  const entry = require(resolve(process.cwd(), 'run/app_assets.json'))
  app.context.assets = Object.assign(entry, lib)
}