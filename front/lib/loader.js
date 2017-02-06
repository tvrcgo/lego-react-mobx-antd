import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

export default class Loader {

  constructor (config) {
    this.$config = config
  }

  router (routes) {
    const loop = (route) => {
      const view = require(`$view/${route.view}/index`)
      return {
        path: route.path,
        component: route.component || view.default,
        childRoutes: route.children && route.children.map(route => loop(route))
      }
    }
    const $routes = (routes || this.$config.routes || []).map(route => loop(route))
    this.$router = (
      <Router history={hashHistory} routes={$routes} />
    )
  }

  run (container) {
    if (!this.$router) {
      this.router()
    }
    render(this.$router, container)
  }
}