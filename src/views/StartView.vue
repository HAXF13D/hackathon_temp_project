<template>
    <div class="news">
        <div v-if="small === false" >
            <NavBar :registredStatus="this.registredStatus"  />
            <Start />
        </div>
        <div v-else>
            <Start/>
            <MobileNavBar :registredStatus="this.registredStatus"  />
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
  