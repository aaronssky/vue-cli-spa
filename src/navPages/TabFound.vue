<template>
  <div class="tab-page Page-Found">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <FoundLooper></FoundLooper>
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
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import FoundLooper from './../components/FoundLooper'
export default {
  components: {TopFloating, FoundLooper},
  data () {
    return {
      msg: '这是发现',
      topFloatingSettings: {
        title: '发现',
        isNavPages: true
        // componentHide: true
      }
    }
  },
  mounted () {
    console.log('初始化页面-TabFound')
  }
}
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
