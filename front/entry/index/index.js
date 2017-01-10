import Loader from '@lib/loader'

const loader = new Loader()

loader.router([
  { path: '/', view: 'home' },
  { path: 'about', view: 'about' }
])

loader.run(document.getElementById('app'))
