import Vue from 'vue'
import Router from 'vue-router'
import Index from 'navPages/Index'
import TabHome from 'navPages/TabHome'
import TabFound from 'navPages/TabFound'
import TabUserCenter from 'navPages/TabUserCenter'
import Hello2 from 'subPages/Hello2'
import Hello3 from 'subPages/Hello3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/TabHome',
      children: [
        {
          path: '/TabHome',
          components: {
            TabView: TabHome
          }
        },
        {
          path: '/TabFound',
          components: {
            TabView: TabFound
          }
        },
        {
          path: '/TabUserCenter',
          components: {
            TabView: TabUserCenter
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
  history: true
})
