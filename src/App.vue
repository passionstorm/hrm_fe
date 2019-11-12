<template>
  <div>
    <!-- landing page -->
    <LPLayout 
      v-if="isLandingPage"
      :apiServer="apiServer"
      :apiLogin="apiLogin"
    ></LPLayout>
    
    <!-- layout -->
    <Header v-if="!isLandingPage"></Header>
    <Sidebar v-if="!isLandingPage"></Sidebar>
    <Content v-if="!isLandingPage"></Content>
    <Footer v-if="!isLandingPage"></Footer>
    <ControlSideBar v-if="!isLandingPage"></ControlSideBar>
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
  },
  data: function(){
    return {
      isLandingPage: false,
      apiServer: 'http://localhost:8080/hrm/public/',
      apiLogin: 'api/login',
    }
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
