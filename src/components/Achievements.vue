<template>
  <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
  <div class="container-xl container-fluid pt-0 my-4">
    <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
    <CustomHeader title="Мои достижения"/>
    <!-- ---Шальнев Владимир--- -->
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-xl-12 col-xxl-10">
        <div class="row gy-3 gx-2">
          <div class="col-12 col-md-6 col-xl-4" v-for="user_achiev in user_achiev_list" v-bind:key="user_achiev">
            <div id="achiev" class="test">
              <div class="row">
                <div class="col-3 my-auto achiev-image">
                  <img :src="require('@/assets/' + user_achiev.img)" class="p-1"/>
                </div>
                <div class="col-8 default-text disabled pt-2">
                  <h5 class="mb-1">{{user_achiev.name}}</h5>
                  <p class="mb-2">{{user_achiev.descr}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
    <div class="mt-5">
      <CustomHeader title="Все достижения"/>
    </div>
    <!-- ---Шальнев Владимир--- -->
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-xl-12 col-xxl-10">
        <div class="row gy-3 gx-2">
          <div class="col-12 col-md-6 col-xl-4" v-for="achiev in achiev_list" v-bind:key="achiev">
            <div id="achiev" class="test">
              <div class="row">
                <div class="col-3 my-auto achiev-image">
                  <img :src="require('@/assets/' + achiev.img)" class="p-1"/>
                </div>
                <div class="col-8 default-text disabled pt-2">
                  <h5 class="mb-1">{{achiev.name}}</h5>
                  <p class="mb-2">{{achiev.descr}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
  </div>
  <!-- ---Духно Михаил--- -->
</template>

<script>

import CustomHeader from './CustomHeader.vue';

export default {
  name: 'AchievementsComp',
  data(){
    return{
      user_achiev_list: [{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"}],
      achiev_list: [{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение так что как-то так"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"},{img: "vtb_logo_icon.png", name: "Имя достижения", descr: "Здесь будет написано описание за что получено достижение"}],
    }
  },
  components: {
    CustomHeader
  },
  methods:{
    makeListAchiev(data){
      this.achiev_list = data["list"];
    },
    makeListUserAchiev(data){
      this.user_achiev_list = data["list"];
    },
  },
  created(){
    //axios.get("http://192.168.0.108:8080/api/get_achievements").then(response => (this.makeListAchiev(response.data)));
    //axios.get("http://192.168.0.108:8080/api/get_user_achiev").then(response => (this.makeListUserAchiev(response.data)));
  }

}
</script>


<style scoped>
  .container{
    text-align: left;
  }

  #achiev img{
    width:100%;
    border-radius:180px;
  }
  .achiev-image{
    margin-left:  .7rem;
  }
</style>

<style>
  .default-text{
      color: #000;
      text-decoration: none;
  }
  #achiev{
    background-color: #FFFFFF;
    border-radius: 16px;
  }
  .default-text{
        color: #000;
        text-decoration: none;
  }
</style>