<template>
  <div class="tab-page Page-Found" id="PageFound">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <div class="page-content">
      <FoundLooper v-bind:settings="foundLooperSettings"></FoundLooper>
      <div class="item-list">
        <template v-for="item in itemList">
        <div class="item" :id="item.articleId" @click="toPageArticalDetail(item)">
          <div class="title">
            {{item.title}}
          </div>
          <div class="pic">
            <img :src="item.imgUrl"/>
          </div>
        </div>
        </template>
      </div>
    </div>
    <BottomNav></BottomNav>

  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import BottomNav from './../components/BottomNav'
import FoundLooper from './../components/FoundLooper'
import pageExtend from './../../static/js/lib/pageExtend.js'

let compnnentData = {
  components: {TopFloating, BottomNav, FoundLooper},
  data () {
    return {
      msg: '这是发现',
      itemList: [], // 文章列表数据
      topFloatingSettings: {
        title: '发现',
        isNavPages: true
        // componentHide: true
      },
      foundLooperSettings: {
        title: '11',
        itemList: []
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(this)
  },
  beforeRouteEnter (to, from, next) {
    // 页面切换时候导致swiper自动轮播失效，曲线救国方案，使用全局保存页面swiper对象，
    if (global.foundSwiper) {
      setTimeout(() => {
        let len = global.foundSwiper.slides.length - 2
        global.foundSwiper.slideTo(global.foundSwiper.activeIndex % len + 1)
      }, 3000)
    }
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  mounted () {
    console.log('钩子事件：mounted - ' + this.$router.history.current.fullPath)
    this.initArticles()
  },
  methods: {
    initArticles () {
      let ajaxSuccess = (res) => {
        window.jsonpData = res
        console.log(res.data)
        let itemList = res.data.content
        this.foundLooperSettings.itemList = itemList
        this.itemList = itemList
      }

      let ajaxError = (res) => {
        console.error('获取文章列表接口返回有误')
      }

      // 用以缓存数据
      if (typeof window.jsonpData === 'object') {
        ajaxSuccess(window.jsonpData)
        return false
      }

      let apiHost = '//aaronssky.duapp.com/transfer/getUrl.php'
      let dataUrl = 'http://aaronssky.duapp.com/mySpa/static/dataBase/articleList.json'
      if (location.host.indexOf('aaronssky.duapp.com') !== -1) {
        // 线上环境
        // this.$http.jsonp('//aaronssky.duapp.com/transfer/getUrl.php?url=http://aaronssky.duapp.com/mySpa/static/dataBase/articleList.json&callback=cb').then(ajaxSuccess, ajaxError)
      } else {
        // 本地环境
        apiHost = 'http://' + '192.168.11.192' + '/bae/transfer/getUrl.php'
        dataUrl = 'http://' + location.host + '/static/dataBase/articleList.json'
        // this.$http({
        //   url: 'static/dataBase/articleList.json',
        //   method: 'GET',
        //   data: {
        //     id: 1
        //   },
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        //   }
        // }).then(ajaxSuccess, ajaxError)
      }

      let jsonpUrl = apiHost + '?url=' + dataUrl

      this.$http.jsonp(jsonpUrl).then(ajaxSuccess, ajaxError)

      // this.$http.get('static/dataBase/articleList.json').then(ajaxSuccess, ajaxError)
    },
    toPageArticalDetail (item) {
      // this.$router.push('/Hello2?id=1')
      this.$router.push({name: 'ArticleDetail', query: { id: item.articleId }})
      console.log(this.$router.params)
    }
  }

}
compnnentData = pageExtend.extendPageAutoScroll(compnnentData)
compnnentData = pageExtend.extendAreaAutoScroll(compnnentData, {
  el: '#PageFound .page-content',
  setElHeight: function () {
    let $$ = selector => {
      let o = document.querySelectorAll(selector)
      if (o && o.length >= 1) {
        return o[0]
      }
      return o
    }

    function getPageContH () {
      let topH = $$('#PageFound .Component-TopFloating').offsetHeight
      let navH = $$('#PageFound .nav-bottom').offsetHeight
      let winH = document.documentElement.clientHeight
      return winH - topH - navH - 1
    }

    return getPageContH() + 'px'
  }
})

export default compnnentData
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/*scss 不知为何会删掉 -webkit-box-orient 样式*/
@mixin maxLines($count){
    display: -webkit-box;
    -webkit-line-clamp: $count;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}

$lineColor:#dedede;
.Page-Found{
  .Component-TopFloating{
    height: 0;
  }
  .Component-TopFloating .top-floating{
    background-color: rgba(0,0,0,0.5);
  }

  .item-list{
    position: relative;
    padding: 0 0.25rem;

    .item{
      padding: 0.25rem 0;
      position: relative;
      height: 2.3rem;
      padding-right: 2.75rem;
      

      .title{
        color: #000;
        @include maxLines(3)
      }

      .pic{
        position: absolute;
        width: 2.5rem;
        height: 1.8rem;
        right: 0;
        top: 0.25rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

    .item:after{
      content: "";
      height: 1px;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: $lineColor;
      @include prefix(transform, scaleY(0.5));
    }
  }
}

</style>
