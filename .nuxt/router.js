import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7deb79d7 = () => interopDefault(import('../pages/color.vue' /* webpackChunkName: "pages/color" */))
const _4190195e = () => interopDefault(import('../pages/example.vue' /* webpackChunkName: "pages/example" */))
const _5091b874 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/color",
    component: _7deb79d7,
    name: "color"
  }, {
    path: "/example",
    component: _4190195e,
    name: "example"
  }, {
    path: "/",
    component: _5091b874,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
