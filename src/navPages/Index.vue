<template>
  <div class="page">
    <router-view name="TabView"></router-view>
    <div class="nav-bottom">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/TabHome">
            <div class="router-text">
              <i class="iconfont icon-home"></i>
              <span>首页</span>
            </div>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/TabFound">
            <div class="router-text">
              <i class="iconfont icon-faxian"></i>
              <span>发现</span>
            </div>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/TabUserCenter">
            <div class="router-text">
              <i class="iconfont icon-my"></i>
              <span>我的</span>
            </div>
          </router-link>
        </div>
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
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}

$bottomHeight: 1.25rem;
$bottomDefColor: #dadada;
$bottomActiveColor: green;
.nav-bottom{
  height: $bottomHeight;
}

.tab{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: -1px;
  font-size: 0;
  height: $bottomHeight;
  background-color: rgba(255,255,255,1);
  border-top: 0.0156rem solid $bottomDefColor;
}

.tab .tab-item{
  display: inline-block;
  width: 33.33%;
  font-size: 0.25rem;
  text-align: center;
  color: $bottomDefColor;
  height: $bottomHeight;
}

.tab .tab-item .router-text{
  position: absolute;
  left: 50%;
  top: 50%;
  @include prefix(transform, translate(-50%,-50%))
}

.tab .tab-item a{
  color: $bottomDefColor;
  text-decoration: none;
  width: 100%;
  display: inline-block;
  height: $bottomHeight;
  position: relative;

}

.tab .tab-item a span{
  display: block;
}

.tab .tab-item .iconfont{
  font-size: 0.5rem;
}

.router-link-active{
}
.tab a.router-link-active{
  color: $bottomActiveColor;
}

/*icon 样式覆盖*/
.tab .tab-item .iconfont.icon-yingsaitong{
}
</style>
