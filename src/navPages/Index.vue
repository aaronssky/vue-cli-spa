<template>
  <div class="page">
    <keep-alive>
      <router-view name="TabHome"></router-view>
    </keep-alive>
    <keep-alive>
      <router-view name="TabFound"></router-view>
    </keep-alive>
    <keep-alive>
      <router-view name="TabUserCenter"></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是首页1'
    }
  },
  mounted () {
    console.log('初始化Index页面')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

</style>
