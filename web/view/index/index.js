import App from 'hyper-app'

const app = new App()

app.router([
  { path: '/', view: require('./home/index') },
  { path: 'about', view: require('./about/index') }
])

app.run('#app')
