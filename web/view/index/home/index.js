import React from 'react'
import { Link } from 'react-router'
import App from 'hyper-app'
import {
  Button
} from 'antd'
import css from './index.css'
import Store from './index.st'
import Hello from 'component/Hello'

const app = new App()

app.mixin(Store, css)

export default app.render(({}, { store }) => {
  return (
    <div clazz='main'>
      <h2>Home</h2>
      <p>Hello World. <Link key={'about'} to={'about'}>About</Link></p>
      <Button type='primary' onClick={store.increase}>Add</Button>
      <p>users: {store.users}</p>
      <Hello home={store} />
    </div>
  )
})
