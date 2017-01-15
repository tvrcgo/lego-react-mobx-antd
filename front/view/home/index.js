import {
  React,
  Link,
  mixin
} from '@lib/vk'
import {
  Button,
  Row,
  Col
} from 'antd'
import Store from './index.store'
import Hello from '@component/Hello'

const homeView = ({ store }) => {
  return (
    <div>
      <Row>
        <Col>Hello World~</Col>
        <Col><Button type='primary' onClick={store.increase}>Go</Button></Col>
        <Link key={'about'} to={'about'}>About</Link>
        <p>users: {store.users}</p>
        <Hello store={store} />
      </Row>
    </div>
  )
}

export default mixin(homeView, Store)
