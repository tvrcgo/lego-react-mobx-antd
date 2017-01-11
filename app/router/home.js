
exports.default = (ctx, next) => {
  ctx.render('index', {
    assets: ctx.assets
  })
}
