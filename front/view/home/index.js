import {
  React,
  Link,
  mixin
} from '@lib/vk'
import {
  Button
} from 'antd'
import Store from './index.store'
import Hello from '@component/Hello'

const homeView = ({ store }) => {
  return (
    <div>
      <h2>Home</h2>
      <p>Hello World. <Link key={'about'} to={'about'}>About</Link></p>
      <Button type='primary' onClick={store.increase}>Add</Button>
      <p>users: {store.users}</p>
      <Hello home={store} />
    </div>
  )
}

export default mixin(homeView, Store)
