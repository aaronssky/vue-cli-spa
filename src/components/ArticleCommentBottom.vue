<template>
  <div class="Component-ArticleCommentBottom nav-bottom">
    <div class="bottom-floating">
      <i class="iconfont icon-arrow-back" @click="goBackPage" v-if="!settings.hiddenBackArrow"></i>
      {{settings.title}}
      <span class="text"><i class="iconfont icon-dianping"></i>写点评</span>
    </div>
  </div>
</template>

<script>
/**
 * 组件传入参数说明
 * settings = {
 *   title: '标题',
 *   isNavPages: false, //默认不传递，导航页面传递:true，隐藏返回按钮
 *   hiddenBackArrow: false //默认不传递，导航页面传递:true,隐藏返回箭头
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
    console.log('初始化组件-ArticleCommentBottom')
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
$bottomHeight: 0.9375rem;
.Component-ArticleCommentBottom {
  height: $bottomHeight;
  line-height: $bottomHeight;
  width: 100%;

  .bottom-floating{
    position: fixed;
    height: $bottomHeight;
    line-height: $bottomHeight;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #3c3c3c;
    color: #cacaca;
    text-align: center;
  }

  .icon-arrow-back{
    width: 1.35rem;
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 0;
  }

  .icon-arrow-back:after{
    content: "";
    height: 100%;
    display: inline-block;
    width: 1px;
    background-color: #3c3c3c;
    position: absolute;
    right: 0;
    top: 0;
  }

  .text{
    font-size: 0.32rem;
  }
  .text .iconfont{
    font-size: 0.32rem;
    margin-right: 0.05rem;
    vertical-align: 0.02rem;
  }
}


</style>
