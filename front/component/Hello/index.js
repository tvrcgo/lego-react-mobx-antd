import React from 'react'
import { mixin } from 'lib/mixin'

const store = {
  msg: 'hi'
}

export default mixin(({ home, store }) => {
  return (
    <div>{ store.msg }. { home.users }</div>
  )
}, store)
