<template>
  <div id="app" class="d-flex justify-content-center align-items-center">
     <!-- <img src="./assets/logo.png"> -->
     <!-- <ul>
       <li><router-link to="/" exact>Home</router-link></li>
       <li><router-link to="/topics">Topics</router-link></li>
       <li><router-link to="/counter">Counter</router-link></li>
       <li><router-link to="/about">About</router-link></li>
     </ul> -->
     <router-view class="view"></router-view>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
    background-color: #00000a !important;
  }
  #app {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .router-link-active{
    color: red ;
  }
</style>
