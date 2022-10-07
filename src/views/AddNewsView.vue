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
          <AddNews/>
        </div>
        <div v-else>
          <AddNews/>
          <MobileNavBar :registredStatus="this.registredStatus" />
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import AddNews from '@/components/AddNewsComponents/AddNews.vue';
  import PageNotFoundComponent from '@/components/PageNotFoundComponent.vue';
  
  export default {
    name: 'achievementView',
    components: {
      NavBar,
      MobileNavBar,
      AddNews,
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