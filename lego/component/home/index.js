import {
  Button,
  Row,
  Col
} from 'antd'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col>Hello World~</Col>
          <Col><Button type='primary'>Go</Button></Col>
        </Row>
      </div>
    )
  }
}
