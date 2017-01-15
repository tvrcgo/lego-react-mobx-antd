import {
  observable,
  computed,
  action
} from '@lib/vk'

class HomeStore {
  @observable count = 0

  constructor (props) {
    this.count = 2
  }

  @computed
  get users () {
    return this.count
  }

  @action
  increase = () => {
    this.count++
  }
}

// stores entry
export default (props) => {
  // init stores with props
  const store = new HomeStore(props)
  // return stores
  return {
    store
  }
}