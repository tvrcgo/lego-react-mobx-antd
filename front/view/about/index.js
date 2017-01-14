import React from 'react'
import { Link } from 'react-router'

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
