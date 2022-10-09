<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
      <div class="Login">
        <div v-if="valid === false">
          <div v-if="small === false" >
              <NavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus"/>
              <LogIN />
          </div>
          <div v-else>
              <LogIN/>
              <MobileNavBar :registredStatus="this.registredStatus" :hashedStatus="this.hashedStatus"/>
          </div>
        </div>
        <div v-else>
        <!-- Тут будет компонет 404 -->
        <PageNotFoundComponent />
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '../components/MobileNavBar.vue'
import LogIN from '@/components/LoginComponents/LogIN.vue';
import PageNotFoundComponent from '@/components/PageNotFoundComponent.vue';
import axios from 'axios';

export default {
  name: 'SignInView',
  components: {
    NavBar,
    MobileNavBar,
    LogIN,
    PageNotFoundComponent
  },
  data: () => ({
    small: true,
    registredStatus: null,
      hashedStatus: null,
      valid: false,
      baseUrl: 'http://127.0.0.1:5000',
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
    },
  }
}
</script>
 <!-- ---Шальнев Владимир--- -->