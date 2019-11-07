<template>
  <div>
    <LPHeader></LPHeader>
    <LPHero></LPHero>
    <LPWhy></LPWhy>
    <LPFooter></LPFooter>
  </div>
</template>

<script>
import LPHeader from './LPHeader.vue';
import LPHero from './LPHero.vue';
import LPWhy from './LPWhy.vue';
import LPFooter from './LPFooter.vue';
export default {
  name: 'LPLayout',
  components: {
    LPHeader,
    LPHero,
    LPWhy,
    LPFooter,
  }
}
</script>