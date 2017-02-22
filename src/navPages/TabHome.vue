<template>
  <div class="tab-page" id="PageHome">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <div class="page-content">
      <h1 @click="show1">{{ msg }}</h1>
      <h1 @click="hide1">{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ msg }}</h1>
      <router-link to="/Hello2?id=1">路由跳转到Hello2</router-link>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import BottomNav from './../components/BottomNav'
import Hello2 from './../subPages/Hello2'
import pageExtend from './../../static/js/lib/pageExtend.js'

let compnnentData = {
  components: {TopFloating, BottomNav, Hello2},
  data () {
    return {
      msg: '这是首页',
      topFloatingSettings: {
        title: '首页标题',
        isNavPages: true
      },
      show: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  mounted () {
    console.log('钩子事件：mounted - ' + this.$router.history.current.fullPath)
  },
  methods: {
    show1 () {
      this.show = true
    },
    hide1 () {
      this.show = false
    }
  }
}

compnnentData = pageExtend.extendPageAutoScroll(compnnentData)
compnnentData = pageExtend.extendAreaAutoScroll(compnnentData, {
  el: '#PageHome .page-content',
  setElHeight: function () {
    let $$ = selector => {
      let o = document.querySelectorAll(selector)
      if (o && o.length >= 1) {
        return o[0]
      }
      return o
    }

    function getPageContH () {
      let topH = $$('#PageHome .Component-TopFloating').offsetHeight
      let navH = $$('#PageHome .nav-bottom').offsetHeight
      let winH = document.documentElement.clientHeight
      return winH - topH - navH - 1
    }

    return getPageContH() + 'px'
  }
})

export default compnnentData
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.tab-page{

}

</style>
