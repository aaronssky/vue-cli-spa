<template>
  <div class="page">
    <router-view name="TabView"></router-view>
    <div class="nav-bottom">
      <div class="tab">
        <div class="tab-item"><router-link to="/TabHome">首页</router-link></div>
        <div class="tab-item"><router-link to="/TabFound">发现</router-link></div>
        <div class="tab-item"><router-link to="/TabUserCenter">我的</router-link></div>
      </div>
    </div>
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
<style scoped lang="scss">
$bottomHeight: 1.25rem;
.nav-bottom{
  height: $bottomHeight;
}

.tab{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  line-height: $bottomHeight;
  font-size: 0;
  height: $bottomHeight;
  background-color: red;
}

.tab .tab-item{
  display: inline-block;
  width: 33.33%;
  font-size: 0.5rem;
  text-align: center;
  color: #fff;
  font-weight: bold;
}

.tab .tab-item.active{
  background-color: green;
}

.tab .tab-item a{
  color: #fff;
  text-decoration: none;
  width: 100%;
  display: inline-block;
}

.router-link-active{
  background-color: green;
}
</style>
