<template>
  <div class="tab-page">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
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
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <router-link to="/Hello2?id=1">路由跳转到Hello2</router-link>
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import pageExtend from './../../static/js/lib/pageExtend.js'
let compnnentData = {
  components: {TopFloating},
  data () {
    return {
      msg: '这是首页',
      topFloatingSettings: {
        title: '首页标题',
        isNavPages: true
      }
    }
  },
  mounted () {
    console.log('初始化页面-TabHome')
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteEnter (to, from, next) {
    console.info('111211111111111111111')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.error(this.msg)
    next()
  }
}

compnnentData = pageExtend.extendPageAutoScroll(compnnentData)

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
</style>
