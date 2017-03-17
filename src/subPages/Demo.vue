<template>
  <!-- 这是 ArticleComment.vue -->
  <div class="page Page-ArticleComment" id="ArticleComment">
    <div class="page-content">
    1
    </div>
  </div>
</template>

<script>
import pageExtend from './../../static/js/lib/pageExtend.js'

let compnnentData = {
  components: {},
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    console.log('钩子事件：mounted - ' + this.$router.history.current.fullPath)
  },
  beforeRouteUpdate (to, from, next) {
    // 用以同一个路由，但动态参数或者query参数修改刷新组件
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.queryId = to.query.id
    next() // 注：若去掉会导致url上切换其他id值，再切回当前记录的id值，会不触发该事件
  },
  activated () {
    // 用以keep-alive的组件刷新事件
    this.queryId = this.$router.history.current.query.id
    console.log('钩子事件：activated - ' + this.$router.history.current.fullPath)
  },
  deactivated () {
    // keep-alive 组件停用时调用。
    console.log('钩子事件：deactivated - ' + this.$router.history.current.fullPath)
  },
  methods: {
  }
}

compnnentData = pageExtend.extendAreaAutoScroll(compnnentData, {
  el: '#ArticleComment .page-content',
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
    let topH = $$('#ArticleComment .Component-TopFloating').offsetHeight
    let winH = document.documentElement.clientHeight
    let bottomH = $$('#ArticleComment .Component-ArticleDetailBottom').offsetHeight
    return (winH - (topH || 0) - (bottomH || 0) - 1) + 'px'
  }
})
export default compnnentData
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}
.Page-ArticleComment{

}
</style>
