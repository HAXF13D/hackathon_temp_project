<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
  <div class="swap">
    <div v-if="small === false" >
      <NavBar/>
      <Swap/>
    </div>
    <div v-else>
      <Swap/>
      <MobileNavBar/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '../components/MobileNavBar.vue'
import Swap from '@/components/Swap.vue';

export default {
  name: 'SWapView',
  components: {
    NavBar,
    MobileNavBar,
    Swap
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