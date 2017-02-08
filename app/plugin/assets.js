module.exports = function(opts, app) {
  // resolve webpack assets
  const resolve = require('path').resolve
  const lib = require(resolve(process.cwd(), 'run/lib-assets.json'))
  const entry = require(resolve(process.cwd(), 'run/app-assets.json'))
  app.context.assets = Object.assign(entry, lib)
}