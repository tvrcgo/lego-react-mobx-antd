import {
  React,
  observer,
  mixin
} from '@lib/vk'

export default mixin(({ store }) => {
  return (
    <div>Hello Component. {store.users}</div>
  )
}, {})
