import Loader from '$lib/loader'
import '$style/index.css'

const loader = new Loader()

loader.router([
  { path: '/', view: 'index/home' },
  { path: 'about', view: 'index/about' }
])

loader.run(document.getElementById('app'))
