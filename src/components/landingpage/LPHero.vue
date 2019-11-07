<template>
  <div id="hero" class="container">
    <img src="images/logo.ico" alt="logo">
    <div class="right-section">
      <h1>Human Resource Manager</h1>
      <div class="ctn-c-1">
        <a href="#" class="start">GET STARTED</a>
        <a href="https://github.com/passionstorm/hrm" class="git"><i class='fab fa-github git-icon'></i>GITHUB</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPHero',
}
</script>

<style scoped>
  div#hero{
    display: flex;
    justify-content: center;
  }
  div.right-section{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  a.start{
    border: 2px solid #3bb6db;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    display: inline-block;
    color: #3bb6db;
    font-weight: 600;
    margin-right: 20px;
  }
  a.git{
    border: 2px solid #737270;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    padding: 0 20px 0 50px;
    display: inline-block;
    color: #737270;
    font-weight: 600;
    position: relative;
  }
  .git-icon{
    font-size: 27px;
    position: absolute;
    top: 5px;
    left: 20px;
  }
  div.ctn-c-1{
    display: flex;
    justify-content: center;
  }
</style>

