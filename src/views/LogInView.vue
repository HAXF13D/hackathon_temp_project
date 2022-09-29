<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
  <div class="sign-in">
    <div v-if="registredStatus === true">
      <div v-if="small === false" >
        <NavBar :registredStatus="this.registredStatus" />
        <LogIN/>
      </div>
      <div v-else>
        <LogIN/>
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
import LogIN from '@/components/LogIN.vue';

export default {
  name: 'SignInView',
  components: {
    NavBar,
    MobileNavBar,
    LogIN
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