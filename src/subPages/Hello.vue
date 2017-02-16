<template>
  <div class="page">
    <h1>{{ msg }}</h1>
    <router-link to="/Hello2?id=1">路由跳转到Hello2</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '这是首页'
    }
  },
  mounted () {
    console.log(3)
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
