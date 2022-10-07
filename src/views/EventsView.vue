<template>
    <div class="news">
      <div v-if="registredStatus === 'false'">
        <!-- Тут будет компонет 404 -->
        <PageNotFoundComponent />
      </div>
      <div v-else>
        <div v-if="small === false" >
          <NavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus"/>
          <Events/>
        </div>
        <div v-else>
          <Events/>
          <MobileNavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus"/>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import Events from '@/components/EventsComponents/Events.vue';
  import PageNotFoundComponent from '@/components/PageNotFoundComponent.vue';
  
  export default {
    name: 'SWapView',
    components: {
      NavBar,
      MobileNavBar,
      Events,
      PageNotFoundComponent
    },
    data: () => ({
      small: true,
      registredStatus: null,
      hashedStatus: null
    }),
    created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();

      let Status = localStorage.getItem('registredStatus');
      this.hashedStatus = localStorage.getItem('token');

      if(Status === "false" || Status === null){
        this.registredStatus = 'false';
      }
      else{
          this.registredStatus = Status;
      }
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
  