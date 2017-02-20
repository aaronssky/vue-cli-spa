import Vue from 'vue'
import Router from 'vue-router'
import Index from 'navPages/Index'
import TabHome from 'navPages/TabHome'
import TabFound from 'navPages/TabFound'
import TabUserCenter from 'navPages/TabUserCenter'
import Hello2 from 'subPages/Hello2'
import Hello3 from 'subPages/Hello3'

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  console.info('----------------------------------≈')
  console.log(savedPosition)
  console.info('----------------------------------≈')
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // new navigation.
    // scroll to anchor
    if (to.hash) {
      return { anchor: true }
    }
    // explicitly control scroll position
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      return { x: 0, y: 0 }
    }
  }
}

Vue.use(Router)

export default new Router({
  scrollBehavior,
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/TabHome',
      children: [
        {
          path: '/TabHome',
          components: {
            TabHome: TabHome
          }
        },
        {
          path: '/TabFound',
          components: {
            TabFound: TabFound
          }
        },
        {
          path: '/TabUserCenter',
          components: {
            TabUserCenter: TabUserCenter
          }
        }
      ]
    }, {
      path: '/Hello2',
      name: 'Hello2',
      component: Hello2,
      children: [
        {
          path: '/test',
          components: {
            H2: Hello2,
            Hello3: Hello3
          }
        }
      ]
    }, {
      path: '/Hello3',
      name: 'Hello3',
      component: Hello3
    }, {
      path: '/lib',
      components: {
        Hello2: Hello2,
        Hello3: Hello3
      }
    }
  ],
  mode: 'history'
})
