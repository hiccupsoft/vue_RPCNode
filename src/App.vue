<template>
  <div id="app" class="d-flex justify-content-center align-items-center">
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
