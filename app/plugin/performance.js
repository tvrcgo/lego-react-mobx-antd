module.exports = function(opts, app) {
  // performance middleware
  return (ctx, next) => {
    const start = +new Date
    return next().then(() => {
      console.log(ctx.method, ctx.status, ctx.request.href)
      if (ctx.status === 404) {
        return ctx.throw(404)
      }
      ctx.set('X-Duration', +new Date - start)
    }).catch(err => {
      console.error(ctx.method, ctx.status, ctx.request.href, err.message)
    })
  }
}
