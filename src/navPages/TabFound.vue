<template>
  <div class="tab-page Page-Found">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <FoundLooper v-bind:settings="foundLooperSettings"></FoundLooper>
    <div class="item-list">
      <div class="item">
        <div class="title">
          在法国，有这样一座并没有玫瑰的「玫瑰之城」
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/9fed068fd899857e94404e132f1c006c.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          王健林叫板迪士尼，但主题乐园这门生意首富也玩不转
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/2356657ef32e5e42b507eec7a50b6e24.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          身为化妆品研发，告诉你高档产品与平价产品的差别在哪里
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/d1534cfd94269ea31f2e1451e18d5e9e.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          杨永信的「电疗法」和临床电刺激有什么区别？
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/ca2fbcfb21f888457d99a61fd214c2ce.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          在法国，有这样一座并没有玫瑰的「玫瑰之城」
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/9fed068fd899857e94404e132f1c006c.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          王健林叫板迪士尼，但主题乐园这门生意首富也玩不转
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/2356657ef32e5e42b507eec7a50b6e24.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          身为化妆品研发，告诉你高档产品与平价产品的差别在哪里
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/d1534cfd94269ea31f2e1451e18d5e9e.jpg"/>
        </div>
      </div>
      <div class="item">
        <div class="title">
          杨永信的「电疗法」和临床电刺激有什么区别？
        </div>
        <div class="pic">
          <img src="http://iusystem.bj.bcebos.com/ca2fbcfb21f888457d99a61fd214c2ce.jpg"/>
        </div>
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
      topFloatingSettings: {
        title: '发现',
        isNavPages: true
        // componentHide: true
      },
      foundLooperSettings: {
        title: '11'
      }
    }
  },
  mounted () {
    console.log(this.foundLooperSettings)
    console.info('初始化页面-TabFound')
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
  }

}
compnnentData = pageExtend.extendPageAutoScroll(compnnentData)

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
