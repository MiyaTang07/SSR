// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'

Vue.config.productionTip = false

let router = createRouter()

/**
 * 改造成->返回vue实例的方法
*/
export function createApp(){
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}
