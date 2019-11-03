<template>
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
    <Content></Content>
    <Footer></Footer>
    <ControlSideBar></ControlSideBar>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Sidebar from './components/layouts/Sidebar.vue';
import Content from './components/layouts/Content.vue';
import Footer from './components/layouts/Footer.vue';
import ControlSideBar from './components/layouts/ControlSideBar.vue';


export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Content,
    Footer,
    ControlSideBar
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
