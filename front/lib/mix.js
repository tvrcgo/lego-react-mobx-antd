import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'
import { observable, computed, action } from 'mobx'

// mix view component and stores
const mixin = (View, Store) => {
  return observer(class ViewComponent extends Component {
    constructor (props) {
      super(props)
      // init store with props
      this.store = typeof Store === 'function' ? Store(this.props) : Store
    }
    render () {
      View = observer(View)
      return (
        <View {...this.props} {...this.store} />
      )
    }
  })
}

// export view kits
export {
  // react
  React,
  Component,
  PropTypes,
  // react-router
  Link,
  // mobx-react
  mixin,
  // mobx
  observable,
  computed,
  action
}