<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <div class="swap">
      <div v-if="registredStatus === 'false'">
        <!-- Тут будет компонет 404 -->
        <PageNotFoundComponent />
      </div>
      <div v-else>
        <div v-if="small === false" >
            <NavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus"/>
            <EditCatalog/>
        </div>
        <div v-else>
            <EditCatalog/>
            <MobileNavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus"/>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import MobileNavBar from '../components/MobileNavBar.vue'
  import EditCatalog from '../components/EditCatalogComponent/EditCatalog.vue'
  import PageNotFoundComponent from '@/components/PageNotFoundComponent.vue';
  
  export default {
    name: 'CatalogView',
    components: {
      NavBar,
      MobileNavBar,
      EditCatalog,
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
   <!-- ---Шальнев Владимир--- -->