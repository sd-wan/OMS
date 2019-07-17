<template>
  <div id="app">    
    <Framework msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Framework from './components/Framework.vue'

export default {
  name: 'app',
  components: {
    Framework
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
