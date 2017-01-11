import Loader from '@lib/loader'
import '@style/index.css'

const loader = new Loader()

loader.router([
  { path: '/', view: 'home' },
  { path: 'about', view: 'about' }
])

loader.run(document.getElementById('app'))
