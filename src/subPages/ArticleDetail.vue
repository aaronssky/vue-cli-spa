<template>
  <!-- 这是 Hello2.vue -->
  <div class="page" id="ArticleDetail">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <div class="page-content">
      <transition name="fade">
        <h1 v-show="switchFlag">{{ itemData.title }}</h1>
      </transition>
        {{queryId}}
      <router-link to="/Hello3">to page3</router-link>
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
      itemData: {},
      topFloatingSettings: {
        title: '文章标题'
      },
      switchFlag: true
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
    this.initDetail(this.queryId)
    next() // 注：若去掉会导致url上切换其他id值，再切回当前记录的id值，会不触发该事件
  },
  activated () {
    // 用以keep-alive的组件刷新事件
    this.queryId = this.$router.history.current.query.id
    console.log('钩子事件：activated - ' + this.$router.history.current.fullPath)
    this.initDetail(this.queryId)
  },
  deactivated () {
    // keep-alive 组件停用时调用。
    console.log('钩子事件：deactivated - ' + this.$router.history.current.fullPath)
  },
  methods: {
    initDetail (articleId) {
      this.switchFlag = false
      let ajaxSuccess = (res) => {
        let itemList = res.data
        for (let value of itemList) {
          if (value['articleId'] === articleId) {
            this.renderPageData(value)
            break
          }
        }
      }

      let ajaxError = (res) => {
        console.error('获取文章列表接口返回有误')
      }

      this.$http.get('static/dataBase/articleList.json').then(ajaxSuccess, ajaxError)
    },
    renderPageData (itemData = {}) {
      this.switchFlag = true
      this.itemData = itemData
      console.log(itemData)
    }
  }
}

compnnentData = pageExtend.extendAreaAutoScroll(compnnentData, {
  el: '#ArticleDetail .page-content',
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
    let topH = $$('#ArticleDetail .Component-TopFloating').offsetHeight
    let winH = document.documentElement.clientHeight
    return (winH - topH - 1) + 'px'
  }
})
export default compnnentData
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active{
  transition: all 10.5s ease;
}
.fade-enter, .fade-leave-active{
  opacity: 0
}
</style>
