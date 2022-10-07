<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <div class="achievement">
      <div v-if="registredStatus === 'false'">
      <!-- Тут будет компонет 404 -->
        <PageNotFoundComponent />
      </div>
      <div v-else>
        <div v-if="small === false" >
          <NavBar :registredStatus="this.registredStatus" />
          <Achievements/>
        </div>
        <div v-else>
          <Achievements/>
          <MobileNavBar :registredStatus="this.registredStatus" />
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import Achievements from '@/components/AchievmentsComponents/Achievements.vue';
  import PageNotFoundComponent from '@/components/PageNotFoundComponent.vue';
  
  export default {
    name: 'achievementView',
    components: {
      NavBar,
      MobileNavBar,
      Achievements,
      PageNotFoundComponent
    },
    data: () => ({
      small: true,
      registredStatus: null
    }),
    created() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
      let Status = localStorage.getItem('registredStatus');
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
  <!-- ---Шальнев Владимир--- -->