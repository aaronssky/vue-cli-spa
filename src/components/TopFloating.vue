<template>
  <div class="Component-TopFloating nav-top">
    <div class="top-floating">
      <i class="iconfont icon-arrow-back" @click="goBackPage" v-if="!settings.hiddenBackArrow"></i>
      {{settings.title}}
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
    console.log('初始化组件-TopFloating')
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
$topFloatingHeight: 0.9375rem;
$topBackgroundColor: red;
.Component-TopFloating {
  height: $topFloatingHeight;
  
  .icon-arrow-back{
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: $topFloatingHeight;
    font-size: 0.5rem;
  }
  .top-floating{
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    background-color: $topBackgroundColor;
    line-height: $topFloatingHeight;
    color: #fff;
    height: $topFloatingHeight;
    z-index: 9999;
  }
}


</style>
