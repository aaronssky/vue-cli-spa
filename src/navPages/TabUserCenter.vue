<template>
  <div class="tab-page">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <h1>{{ msg }}</h1>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import BottomNav from './../components/BottomNav'
export default {
  components: {TopFloating, BottomNav},
  data () {
    return {
      msg: '这是用户中心',
      topFloatingSettings: {
        title: '用户中心',
        hiddenBackArrow: true
      }
    }
  },
  mounted () {
    console.log('钩子事件：mounted - ' + this.$router.history.current.fullPath)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
