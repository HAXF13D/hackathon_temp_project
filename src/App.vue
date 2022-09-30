<template>
  <div>
    <router-view></router-view>
  </div>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Ubuntu" />
</template>

<script>
  import HomeView from '@/views/HomeView.vue'
  import SwapView from '@/views/SwapView.vue'

  export default {
    name: 'Main',
    components: {
    HomeView,
    SwapView,
    HomeView
}
  }
</script>

<style>
  *{    
    font-family: 'Ubuntu';
    -webkit-font-smoothing: antialiased;
  }
  body{
    background-color: #F3F7FA;
  }
  #app{
    font-family: Ubuntu;
    font-weight: bold;
  }
  
</style>
