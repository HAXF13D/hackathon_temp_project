<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <div class="achievement">
      <div v-if="small === false" >
        <NavBar/>
        <Achievements/>
      </div>
      <div v-else>
        <Achievements/>
        <MobileNavBar/>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import Achievements from '@/components/Achievements.vue';
  
  export default {
    name: 'achievementView',
    components: {
      NavBar,
      MobileNavBar,
      Achievements
    },
    data: () => ({
      small: true,
      registredStatus: null
    }),
    created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
      let registredStatus = localStorage.getItem('registred');
      if(registredStatus === null || registredStatus === "true"){
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
  <!-- ---Шальнев Владимир--- -->