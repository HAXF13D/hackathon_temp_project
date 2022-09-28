<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
  <div class="sign-in">
    <div v-if="small === false" >
      <NavBar/>
      <SignIn/>
    </div>
    <div v-else>
      <SignIn/>
      <MobileNavBar/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '../components/MobileNavBar.vue'
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'SignInView',
  components: {
    NavBar,
    MobileNavBar,
    SignIn
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