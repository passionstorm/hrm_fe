<template>
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Sidebar from './components/layouts/Sidebar.vue';


export default {
  name: 'app',
  components: {
    Header,
    Sidebar
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
  margin-top: 60px;
}
</style>
