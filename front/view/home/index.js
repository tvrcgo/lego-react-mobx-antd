import React from 'react'
import { Link } from 'react-router'
import {
  Button,
  Row,
  Col
} from 'antd'
import Hello from '@component/Hello'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col>Hello World~</Col>
          <Col><Button type='primary'>Go</Button></Col>
          <Link key={'about'} to={'about'}>About</Link>
          <Hello />
          {this.props.children}
        </Row>
      </div>
    )
  }
}
