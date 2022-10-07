<template>
    <div class="news">
        <div v-if="small === false" >
            <NavBar :registredStatus="this.registredStatus"  :hashedStatus="this.hashedStatus"/>
            <Start/>
        </div>
        <div v-else>
            <Start/>
            <MobileNavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus" />
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import Start from '@/components/StartComponents/Start.vue';
  
  export default {
    name: 'StartView',
    components: {
      NavBar,
      MobileNavBar,
      Start
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
  