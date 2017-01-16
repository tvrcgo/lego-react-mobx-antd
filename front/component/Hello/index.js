import {
  React,
  mixin,
  computed
} from '@lib/vk'

const store = {
  msg: 'hi'
}

export default mixin(({ home, store }) => {
  return (
    <div>{ store.msg }. { home.users }</div>
  )
}, { store })
