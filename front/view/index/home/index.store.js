import { observable, computed, action } from 'mobx-react'

export default class Store {
  @observable count = 0

  constructor (props) {
    this.count = 2
  }

  @computed
  get users () {
    return this.count
  }

  @action.bound
  increase() {
    this.count++
  }
}
