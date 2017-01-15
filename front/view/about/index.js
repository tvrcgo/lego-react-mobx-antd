import {
  React,
  Link
} from '@lib/vk'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <p>here is about page.</p>
        <Link key={'home'} to={'/'}>back to Home</Link>
      </div>
    )
  }
}
