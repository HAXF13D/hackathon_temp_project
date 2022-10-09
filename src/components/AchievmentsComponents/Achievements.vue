<template>
  <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
  <div class="container-xl container-fluid pt-0 my-4">
    <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
    <CustomHeader v-show="userAchievmentsExist" title="Мои достижения"/>
    <!-- ---Шальнев Владимир--- -->
    <div class="row justify-content-center" :class="{'mb-5': userAchievmentsExist}">
      <div class="col-12 col-sm-10 col-xl-12 col-xxl-10">
        <div class="row gy-3 gx-2">
          <div class="col-12 col-md-6 col-xl-4" v-for="user_achiev in user_achiev_list" v-bind:key="user_achiev">
            <div id="achiev" class="test">
              <div class="row">
                <div class="col-3 my-auto achiev-image">
                  <img src="https://via.placeholder.com/200x200" class="p-1"/>
                </div>
                <div class="col-8 default-text disabled pt-2">
                  <h5 class="mb-1">{{user_achiev.header}}</h5>
                  <p class="mb-2">{{user_achiev.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
    <div>
      <CustomHeader title="Все достижения"/>
    </div>
    <!-- ---Шальнев Владимир--- -->
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-xl-12 col-xxl-10">
        <div class="row gy-3 gx-2">
          <div class="col-12 col-md-6 col-xl-4" v-for="achiev in achiev_list" v-bind:key="achiev.name">
            <div id="achiev" class="test">
              <div class="row">
                <div class="col-3 my-auto achiev-image">
                  <img src="https://via.placeholder.com/200x200" class="p-1"/>
                </div>
                <div class="col-8 default-text disabled pt-2">
                  <h5 class="mb-1">{{achiev.header}}</h5>
                  <p class="mb-2">{{achiev.description}}</p>
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

import CustomHeader from '@/components/CustomHeader.vue';
import axios from 'axios';

export default {
  name: 'AchievementsComp',
  data(){
    return{
      user_achiev_list: [],
      achiev_list: [],
      userAchievmentsExist: false,
      baseUrl: 'http://127.0.0.1:5000',
    }
  },
  components: {
    CustomHeader
  },
  methods:{
    writeUserAchievments(data){
      this.user_achiev_list = data['users_achievments'];
      if (this.user_achiev_list > 0){
        this.userAchievmentsExist = true;
      };
      this.achiev_list = data['all_achievments'];
    },
    async getDataFromServer(){
      try{
          let baseUrl = 'http://127.0.0.1:5000';
          let params = {
              userId: localStorage.getItem("registredStatus"),
          };
          let data = []
          await axios.post(this.baseUrl + '/api/get/achievments/user', params).then(response => (data = response.data.resp));
          this.achiev_list = data.all_achievments;
          this.user_achiev_list = data.user_achievments
          console.log(data);
          }
          catch(error){
          console.log(error);
      }
    }

  },
  created:
    async function(){
      this.getDataFromServer();
    },

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