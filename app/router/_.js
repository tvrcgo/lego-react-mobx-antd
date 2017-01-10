
module.exports = (router, $) => {
  router
    .get('/', $.home.default)

  // exception
  router
    .all('*', $.error.code404)
}
