<template>
  <div>
    <LPHeader></LPHeader>
    <LPHero></LPHero>
    <LPWhy></LPWhy>
    <LPFooter></LPFooter>
    <LPLogin></LPLogin>
    <LPRegister></LPRegister>
  </div>
</template>

<script>
import LPHeader from './LPHeader.vue';
import LPHero from './LPHero.vue';
import LPWhy from './LPWhy.vue';
import LPFooter from './LPFooter.vue';
import LPLogin from './LPLogin.vue';
import LPRegister from './LPRegister.vue';
export default {
  name: 'LPLayout',
  components: {
    LPHeader,
    LPHero,
    LPWhy,
    LPFooter,
    LPLogin,
    LPRegister,
  }
}
</script>