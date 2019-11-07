<template>
  <div>
    <!-- landing page -->
    <LPLayout></LPLayout>
    
    <!-- layout -->
    <Header v-if="false"></Header>
    <Sidebar v-if="false"></Sidebar>
    <Content v-if="false"></Content>
    <Footer v-if="false"></Footer>
    <ControlSideBar v-if="false"></ControlSideBar>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Sidebar from './components/layouts/Sidebar.vue';
import Content from './components/layouts/Content.vue';
import Footer from './components/layouts/Footer.vue';
import ControlSideBar from './components/layouts/ControlSideBar.vue';
import LPLayout from './components/landingpage/LPLayout.vue';

export default {
  name: 'app',
  components: {
    LPLayout,
    Header,
    Sidebar,
    Content,
    Footer,
    ControlSideBar,
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
