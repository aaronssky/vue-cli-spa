<template>
  <!-- 这是 Hello2.vue -->
  <div class="page" id="PageHello2">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <div class="page-content">
      {{id}}
      <h1>{{ msg }}</h1>
      <router-link to="/Hello3">to page3</router-link>
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
      <h1>1</h1>

    <router-view name="H2"></router-view>
    <router-view name="Hello3"></router-view>
    </div>
    
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import pageExtend from './../../static/js/lib/pageExtend.js'

let compnnentData = {
  components: {TopFloating},
  data () {
    return {
      msg: 'hello page2222',
      id: '',
      topFloatingSettings: {
        title: 'page2'
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 用以同一个路由，但动态参数或者query参数修改刷新组件
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.id = to.query.id
    console.error(to)
  },
  mounted () {
    console.log('钩子事件：mounted - ' + this.$router.history.current.fullPath)
    // $$('#PageHello2 .page-content').style.height = (winH - topH) + 'px'
  },
  activated () {
    // 用以keep-alive的组件刷新事件
    console.log(this.$router.history.current.query)
    this.id = this.$router.history.current.query.id
    console.log('钩子事件：activated - ' + this.$router.history.current.fullPath)
    console.error(111111111111111)
  },
  deactivated () {
    // keep-alive 组件停用时调用。
    console.log('钩子事件：deactivated - ' + this.$router.history.current.fullPath)
  }
}

compnnentData = pageExtend.extendAreaAutoScroll(compnnentData, {
  el: '#PageHello2 .page-content',
  setElHeight: function () {
    // 注意此处若用箭头函数，会导致this指向组件data变量
    console.warn(this)
    let $$ = selector => {
      let o = document.querySelectorAll(selector)
      if (o && o.length >= 1) {
        return o[0]
      }
      return o
    }
    let topH = $$('.Component-TopFloating').offsetHeight
    let winH = document.documentElement.clientHeight
    return (winH - topH) + 'px'
  }
})
export default compnnentData
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$aColor: #42b983;
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
  color: $aColor;
}
</style>
