<template>
    <div class="news">
      <div v-if="registredStatus === true">
        <div v-if="small === false" >
          <NavBar :registredStatus="this.registredStatus" />
          <Events/>
        </div>
        <div v-else>
          <Events/>
          <MobileNavBar :registredStatus="this.registredStatus" />
        </div>
      </div>
      <div v-else>
        <!-- Тут будет компонет 404 -->
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import Events from '@/components/EventsComponents/Events.vue';
  
  export default {
    name: 'SWapView',
    components: {
      NavBar,
      MobileNavBar,
      Events
    },
    data: () => ({
      small: true,
      registredStatus: null
    }),
    created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
      let Status = localStorage.getItem('registredStatus');
      if(Status === "true"){
          this.registredStatus = true;
      }
      else{
          this.registredStatus = false;
      }
      console.log(this.registredStatus, 228);
    },
    destroyed() {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      onResize() {
          this.small = window.innerWidth < 576;
      }
    }
  }
  </script>
  