<template>
  <div class="page">
    <h1>{{ msg }}</h1>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello page3333333333'
    }
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
