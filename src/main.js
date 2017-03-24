// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import aVueTouch from './../static/js/lib/aVueTouch'
import AlloyFinger from './../static/js/lib/alloy_finger'
let [routerHistory, appVue] = [[]]
let vueData = {
  el: '#app',
  router,
  data: {
    tName: 'slide-next'
  },
  template: '<App v-bind:tName="tName"/>',
  components: { App },
  mounted () {
  }
}
router.beforeEach((to, from, next) => {
  let index = routerHistory.indexOf(to.fullPath)
  console.log(from)
  console.log(to)
  // if (to.path === '/') {
  //   next('/TabHome')
  //   return false
  // }
  // if (to.path === '/') {
  //   routerHistory = []
  // }
  if (index !== -1) {
    routerHistory = routerHistory.slice(0, index + 1)
    console.log('后')
    appVue.tName = 'slide-prev'
  } else {
    routerHistory.push(to.fullPath)
    console.log('前进')
    if (appVue) {
      appVue.tName = 'slide-next'
    }
  }
  global.routerHistory = routerHistory
  console.log(routerHistory)
  next()
})

Vue.use(VueResource)
Vue.use(aVueTouch, {AlloyFinger: AlloyFinger})

/* eslint-disable no-new */
appVue = new Vue(vueData)
global.appVue = appVue
