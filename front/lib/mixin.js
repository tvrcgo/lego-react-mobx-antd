import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

// mix view component and stores
const mixin = (View, Store) => {
  return observer(class ViewComponent extends Component {
    constructor (props) {
      super(props)
      // init store with props
      this.store = typeof Store === 'function' ? new Store(this.props) : observable(Store)
    }
    render () {
      const ObView = observer(View)
      return (
        <ObView {...this.props} store={this.store} />
      )
    }
  })
}

export {
  mixin
}