<template>
  <div id="footer">
      <div>
        <i class='fab fa-github git-icon f-s-18'></i>
      </div>
      <p class="">Copyright © 2019{{now}} Passion Storm</p>
  </div>
</template>

<script>
export default {
  name: 'LPFooter',
  data: function(){
      return{
          now: (new Date()).getFullYear() != 2019 ? '-'+(new Date()).getFullYear() : '',
      }
  }
}
</script>

<style scoped>
    div#footer{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px 0;
      background-color: #3bb6db;
      color: white;
      margin-top: 40px;
    }
    div#footer p{
      margin: 0;
    }
</style>