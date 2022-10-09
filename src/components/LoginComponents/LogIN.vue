<template>
  <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
  <div class="container-xl container-fluid pt-0 my-4 text-left">
    <CustomHeader title="Вход"/>
      <div class="row justify-content-center mt-4">
        <form class="col-11 col-sm-8 col-md-6 col-xl-5 form-block mt-5 test">
          <div class="row justify-content-center mt-4">
            <div class="col-11">
              <h5 class="default-text disabled">Адрес эл. почты</h5>
            </div>
          </div>
          <div class="row justify-content-center mt-1">
            <div class="col-11 input-field">
              <img src="@/assets/person-circle.png" class="py-3"/>
              <input v-model="userLogin" type="text" class="input-text w-75 w-sm-85 h-100 mx-3"/>
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-11">
              <h5 class="default-text disabled">Пароль</h5>
            </div>
          </div>
          <div class="row justify-content-center mt-1">
            <div class="col-11 input-field">
              <img src="@/assets/key.png" class="py-3"/>
              <input v-model="userPassword" type="password" class="input-text w-75 w-sm-85 h-100 mx-3"/>
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-11">
              <a href="" class="forgot">Забыли адрес электронной почты или пароль?</a>
            </div>
          </div>
          <div class="row mt-1 mb-4">
            <div class="d-grid col-11 mx-auto px-1">
              <button class="btn default-text button-hover-color" type="button" @click="loginUser()">Войти</button>
            </div>
          </div>
        </form>
      </div>
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
  </div>
  <!-- ---Духно Михаил--- -->
</template>

<script>

  import CustomHeader from '@/components/CustomHeader.vue';
  import axios from 'axios';

  export default {
    name: 'SignInComp',
    data(){
      return{
          baseUrl: 'http://127.0.0.1:5000',
          userLogin: undefined,
          userPassword: undefined,
        }
    },
    components: {
      CustomHeader
    },
    methods:{
      autorization(data){
        console.log(data);
        if (data !== undefined){
          localStorage.setItem('registredStatus', data.resp.user_id);
          localStorage.setItem('token', data.resp.hash);
          this.$router.push('/news');
        }
      },
      async loginUser(){
        try {
          const params = {
            'login': this.userLogin,
            'password': this.userPassword,
          };
          console.log(params);
          axios.post(this.baseUrl + '/api/login', params).then(response => (this.autorization(response.data)))
        } catch (error) {
        }

      }
    }
  }
</script>


<style scoped>

  .input-field{
    background-color: #007DFF;
    border-radius: 16px;
  }
  .input-text{
    background-color: #007DFF;
    border: 0px;
  }
  .input-text:focus{
    outline: none;
  }
  .w-sm-85{
    width:85%;
  }
  .w-75{
    width:75%;
  }
  .forgot{
    color: #00AAFF;
    text-decoration-line: none;
  }
  button{
    padding-top: .75rem;
    padding-bottom: .75rem;
  }
  a{
    font-size: 14px;
  }
  h5{
    font-size: 14px;
  }
</style>

<style>
  .form-block{
    background-color: #FFFFFF;
    border-radius: 16px;
  }
  .default-text{
      color: #000;
      text-decoration: none;
  }
  .default-text{
        color: #000;
        text-decoration: none;
  }
</style>