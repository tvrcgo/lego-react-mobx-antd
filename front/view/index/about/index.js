import React from 'react'
import { Link } from 'react-router'
import { mixin } from 'lib/mixin'

const aboutView = ({}) => {
  return (
    <div>
      <h2>about</h2>
      <Link key={'home'} to={'/'}>Back to Home</Link>
    </div>
  )
}

export default mixin(aboutView)
