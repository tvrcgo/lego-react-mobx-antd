import React from 'react'
import { Link } from 'react-router'
import { mixin } from 'lib/mixin'
import {
  Button
} from 'antd'
import css from './index.css'
import Store from './index.store'
import Hello from 'component/Hello'

const homeView = ({ store }) => {
  return (
    <div className={css.main}>
      <h2>Home</h2>
      <p>Hello World. <Link key={'about'} to={'about'}>About</Link></p>
      <Button type='primary' onClick={store.increase}>Add</Button>
      <p>users: {store.users}</p>
      <Hello home={store} />
    </div>
  )
}

export default mixin(homeView, Store)
