<template>
  <div id="app">
    <transition :name="tName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['tName']
}
</script>

<style lang="scss">
@import "./../static/css/iconfont.css";
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}
$slideDuration: .3s;

*{
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body{
  margin: 0;
  overflow-x:hidden;
  font-size: 0.4rem;
  font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfont{
  font-size: 0.5rem;
}

.projection{
  text-shadow: 2px 2px 2px #757070;
}

#app {
  
  color: #2c3e50;
  overflow: hidden;
  width: 100%;
}

.page{
  position: absolute;
  width: 100%;
  min-height: 100%;
  @include prefix(transition, all $slideDuration cubic-bezier(1.0, 0.5, 0.8, 1.0))
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-next-enter-active {
  @include prefix(transition, all $slideDuration cubic-bezier(1.0, 0.5, 0.8, 1.0))
  /*transition: all 1s ease;*/
  /*background-color: green;*/
}
.slide-next-leave-active {
  @include prefix(transition, all $slideDuration cubic-bezier(1.0, 0.5, 0.8, 1.0))
  /*background-color: red;*/
}
.slide-next-enter
/* .slide-fade-leave-active for <2.1.8 */ {
  @include prefix(transform, translateX(100%))
  opacity: 0;
}
.slide-next-leave-to{
  @include prefix(transform, translateX(-100%))
  opacity: 0;
}

.slide-prev-enter-active {
  @include prefix(transition, all $slideDuration cubic-bezier(1.0, 0.5, 0.8, 1.0))
  /*transition: all 1s ease;*/
  /*background-color: green;*/
}
.slide-prev-leave-active {
  @include prefix(transition, all $slideDuration cubic-bezier(1.0, 0.5, 0.8, 1.0))
  /*background-color: red;*/
}
.slide-prev-enter
/* .slide-fade-leave-active for <2.1.8 */ {
  @include prefix(transform, translateX(-100%))
  opacity: 0;
}
.slide-prev-leave-to{
  @include prefix(transform, translateX(100%))
  opacity: 0;
}
</style>
