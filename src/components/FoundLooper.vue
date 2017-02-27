<template>
  <div class="swiper-container Component-FoundLooper">
    <div class="swiper-wrapper">
      <template v-for="item in settings.itemList">
        <div class="swiper-slide" @click="toPageArticalDetail(item)">
          <div class="pic">
            <img :src="item.imgUrl"/>
          </div>
          <div class="info">
            <p class="title projection">
              {{item.title}}
            </p>
          </div>
        </div>
      </template>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from './../../static/js/plugins/swiper.min.js'
/**
 * 组件传入参数说明
 * settings = {
 *   title: '标题',
 *   isNavPages: false //默认不传递，导航页面传递:true，隐藏返回按钮
 * }
 */
export default {
  props: {settings: {
    default: () => ({})
  }},
  data () {
    return {
      foundSwiper: {}
    }
  },
  mounted () {
    console.log('初始化组件-FoundLooper')
    let timer = setInterval(() => {
      if (this.settings.itemList.length > 0) {
        this.initComponent()
        clearInterval(timer)
      }
    }, 100)
  },
  methods: {
    initComponent () {
      /* eslint-disable no-new */
      this.settings.swiper = global.foundSwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 3000, // 可选选项，自动滑动
        loop: true,
        autoplayDisableOnInteraction: false
      })
    },
    toPageArticalDetail (item) {
      this.$router.push({name: 'ArticleDetail', query: { id: item.articleId }})
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(333333333333)
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
/*使用scss编译，无法引用外链CSS，估计存在加载先后问题*/
/*@import "https://qiniu-cdn7.jinxidao.com/style/swiper.min.css";*/
@import "./../../static/css/swiper.min.css";
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}
.Component-FoundLooper{
  .swiper-slide{
    position: relative;
    height: 5rem;
  }
  
  .pic{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    @include prefix(transform, translateY(-50%))
  }
  
  .pic img{
    width: 100%;
  }
  
  .info{
    position: absolute;
    width: 100%;
    z-index: 1;
    color: #fff;
    bottom: 0;
    padding: 0.25rem;
    .title{
      font-size: 0.4375rem;
      color: #fff;
    }
  }

  .swiper-pagination-bullet{
    width: 0.1562rem;
    height: 0.1562rem;
  }

  .swiper-container-horizontal>.swiper-pagination{
    bottom: 0.1562rem;
  }
  
  .swiper-pagination-bullet-active{
    background-color: #fff;
  }
}

</style>
