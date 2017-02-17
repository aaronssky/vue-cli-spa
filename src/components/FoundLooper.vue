<template>
  <div class="swiper-container Component-FoundLooper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/beb2f8b480b756843016eb9b4987ce5c.jpg"/>
        </div>
        <div class="info">
          <p class="title projection">
            市值超过 Twitter，微博抓住了年轻人、娱乐化和更多玩法
          </p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/51ea01f826dcac52c7e53926a6ee6489.jpg"/>
        </div>
        <div class="info">
          <p class="title projection">
            为何没多少人买，星巴克还在卖依云？
          </p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/d54d9543778b4fb5599dc4276e5e88eb.jpg"/>
        </div>
        <div class="info">
          <p class="title projection">
            「老板，来一打爱，我抑郁了」
          </p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/3f9e5c82e571804a7fa7c50f4ddc4701.jpg"/>
        </div>
        <div class="info">
          <p class="title projection">
            常和数据打交道，一定知道做好「数据清洗」有多重要
          </p>
        </div>
      </div>
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
    }
  },
  mounted () {
    console.log('初始化组件-FoundLooper')
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      autoplay: 3000, // 可选选项，自动滑动
      loop: true,
      autoplayDisableOnInteraction: false
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
