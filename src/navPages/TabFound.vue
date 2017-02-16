<template>
  <div class="tab-page">
    <TopFloating v-bind:settings="topFloatingSettings"></TopFloating>
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
export default {
  components: {TopFloating},
  data () {
    return {
      msg: '这是发现',
      topFloatingSettings: {
        title: '发现',
        isNavPages: true
      }
    }
  },
  mounted () {
    console.log('初始化页面-TabFound')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
