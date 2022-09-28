<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
  <div class="sign-in">
    <div v-if="small === false" >
      <NavBar/>
      <LogIN/>
    </div>
    <div v-else>
      <LogIN/>
      <MobileNavBar/>
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
    small: true
  }),
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
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