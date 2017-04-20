import React from 'react'
import App from 'hyper-app'

const app = new App()

app.mixin({
  msg: 'hi'
})

export default app.render(({ home }, { store }) => {
  return (
    <div>{ store.msg }. { home.users }</div>
  )
})
