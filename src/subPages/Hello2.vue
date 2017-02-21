<template>
  <!-- 这是 Hello2.vue -->
  <div class="page" id="PageHello2">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <div class="page-content">
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
      topFloatingSettings: {
        title: 'page2'
      }
    }
  },
  mounted () {
    console.log(this)
    console.log('初始化页面-Hello2')
    // $$('#PageHello2 .page-content').style.height = (winH - topH) + 'px'
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
