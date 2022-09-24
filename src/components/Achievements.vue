<template>
  <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
  <div class="container pt-0">
    <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
    <CustomHeader title="Мои достижения" class="my-4"/>
    <!-- ---Шальнев Владимир--- -->
    <div class="row gy-3 gx-2">
      <div class="col-12 col-md-6 col-xl-4" v-for="user_achiev in user_achiev_list" v-bind:key="user_achiev">
        <div id="achiev" class="test">
          <div class="row">
            <div class="col-3">
              <img :src="user_achiev.img" class="p-2"/>
            </div>
            <div class="col-9 default-text disabled">
              <h5>{{user_achiev.name}}</h5>
              <p>{{user_achiev.descr}}</p>
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
    <div class="row gy-3 gx-2">
      <div class="col-12 col-md-6 col-xl-4" v-for="achiev in achiev_list" v-bind:key="achiev">
        <div id="achiev" class="">
          <div class="row">
            <div class="col-3">
              <img :src="achiev.img" class="p-2"/>
            </div>
            <div class="col-9 default-text disabled">
              <h5>{{achiev.name}}</h5>
              <p>{{achiev.descr}}</p>
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
</style>

<style>
  .default-text{
      color: #000;
      text-decoration: none;
  }

  .default-text:hover{
      color: #00AAFF;
  }

  .disabled:hover{
      color: #000;
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