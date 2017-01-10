'use strict'

exports.code404 = (ctx, next) => {
  ctx.throw(404)
}
