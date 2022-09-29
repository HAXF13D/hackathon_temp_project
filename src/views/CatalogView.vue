<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <div class="swap">
      <div v-if="registredStatus === true">
        <div v-if="small === false" >
            <NavBar :registredStatus="this.registredStatus" />
            <Catalog/>
        </div>
        <div v-else>
            <Catalog/>
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
  import Catalog from '../components/Catalog.vue'
  
  export default {
    name: 'CatalogView',
    components: {
      NavBar,
      MobileNavBar,
      Catalog
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
   <!-- ---Шальнев Владимир--- -->