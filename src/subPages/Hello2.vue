<template>
  <!-- 这是 Hello2.vue -->
  <div class="page">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <h1>{{ msg }}</h1>
    <router-link to="/Hello3">to page3</router-link>
    <router-view name="H2"></router-view>
    <router-view name="Hello3"></router-view>
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
export default {
  components: {TopFloating},
  data () {
    return {
      msg: 'hello page2222',
      topFloatingSettings: {
        title: 'page2'
      }
    }
  },
  mounted () {
    console.log(333)
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$aColor: #42b983;
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
  color: $aColor;
}
</style>
