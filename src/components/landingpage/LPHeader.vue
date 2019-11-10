<template>
  <div id="header">
    <a id="logo" href="/">HRM</a>
    <ul id="nav">
      <li>
        <a class="toggle-nav-link" data-toggle="modal" data-target="#loginModal">Login</a>
      </li>
      <li>
        <a class="toggle-nav-link" data-toggle="modal" data-target="#registerModal">Register</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LPHeader',
}
</script>

<style scoped>
  div#header{
    position: relative;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin: 10px 30px;
  }
  a#logo{
    line-height: 40px;
    font-size: 20px;
    display: inline-block;
    color: black;
  }
  ul#nav{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  ul#nav h5{
    padding: 0 10px 0 10px;
  }
  ul#nav li{
    list-style-type: none;
  }
  ul#nav>li{
    display: inline-block !important;
    margin: 0 10px
  }
  .left-round-pre-input-1{
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-right: none;
    color:rgb(210, 214, 222);
    font-size: 12px;
    height: 25px;
  }
  .right-round-late-input-1{
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-left: none;
    color:rgb(210, 214, 222);
    font-size: 12px;
    height: 25px;
  }
  .ignore-focus:focus{
    border-color: rgb(210, 214, 222)
  }
  .input-custom-1{
    border-left: 0;
    border-right: 0;
    padding: 3px 3px 3px 0;
    font-size: 13px;
    height: 25px;
  }
  a.toggle-nav-link{
    cursor: pointer;
    color: black;
  }
  .text-custom-1{
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: bold;
  }


  li.dropdown{
    display: inline-block;
  }  
  li.dropdown:hover ul.dropdown-menu{
    display: block;
  }
  ul.dropdown-menu{
    padding: 10px 0;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }
  ul.dropdown-menu ul{
    padding: 0;
  }
  ul.dropdown-menu a{
    padding-left: 20px;
  }
  li.li-custom-1{
    display: block !important;
  }
  .a-custom-1{
    color: black;
    display: block;
  }
  .a-custom-1:hover{
    color: #34c25a;
    background-color: inherit;
  }

</style>