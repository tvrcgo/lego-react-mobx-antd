import Loader from '$lib/loader'

const loader = new Loader()

loader.router([
  { path: '/', view: 'index/home' },
  { path: 'about', view: 'index/about' }
])

loader.run(document.getElementById('app'))
