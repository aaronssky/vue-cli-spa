<template>
  <div class="Component-ArticleDetailContent">
    <div class="swiper-slide">
      <div class="pic">
        <img :src="settings.imgUrl"/>
      </div>
      <div class="info">
        <p class="title projection">
          {{ settings.title }}
        </p>
      </div>
    </div>
    <div class="answer">
      <div class="user-info">
        <img class="avatar" :src="settings.avatar">
        <span class="author">{{settings.author}}， </span>
        <span class="author-motto">{{settings.authorMotto}}</span>
      </div>
      <div class="content" v-html="settings.content">
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 组件传入参数说明
 * settings = {
 *   title: '标题',
 *   isNavPages: false, //默认不传递，导航页面传递:true，隐藏返回按钮
 *   componentHide: false //默认不传递，导航页面传递:true,隐藏顶部导航
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
    console.log('初始化组件-ArticleDetailContent')
  },
  methods: {
    goBackPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}

$pagePadding: 0.25rem;
.Component-ArticleDetailContent {
  max-width: 100%;
  overflow: hidden;

  .swiper-slide{
    position: relative;
    height: 5rem;
    overflow: hidden;

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
  }
  
  

  .answer{
    padding: $pagePadding;
    padding-top: 0.5rem;
  }

  .user-info{
    .avatar{
      display: inline-block;
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 0.1rem;
      vertical-align: -0.1rem;
    }

    .author{}

    .author-motto{
      color: #b8b8b8;
    }
  }

  .content{
    width: 100%;
    color: #444;
    line-height: 0.6rem;
  }


}

</style>
