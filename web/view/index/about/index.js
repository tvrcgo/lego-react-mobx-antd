import React from 'react'
import { Link } from 'react-router'
import App from 'hyper-app'

const app = new App()

export default app.render(({}) => {
  return (
    <div>
      <h2>about</h2>
      <Link key={'home'} to={'/'}>Back to Home</Link>
    </div>
  )
})
