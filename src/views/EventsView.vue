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
  import axios from 'axios';
  
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
      hashedStatus: null,
      baseUrl: 'http://127.0.0.1:5000',
    }),
    created() {
      this.validateUser();
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
      },
      checkValid(data){
        if (data.is_valid === false) {
          this.$router.push('/login');
        }     
      },
      async validateUser(){
        try{
          let params = {
            user_id: localStorage.getItem('registredStatus'),
            token: localStorage.getItem('token'),
          };
          await axios.post(this.baseUrl + '/api/validation', params).then(response => (this.checkValid(response.data)));
          console.log(this.usersArray)
        }
        catch(error){
          console.log(error);
        }
      }
    },
  }
  </script>
  