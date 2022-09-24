<template>
  <div class="news">
      <div v-if="small === false" >
        <NavBar/>
        <News/>
      </div>
      <div v-else>
        <News/>
        <MobileNavBar/>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '../components/MobileNavBar.vue'
import News from '@/components/News.vue';

export default {
  name: 'SWapView',
  components: {
    NavBar,
    MobileNavBar,
    News
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
