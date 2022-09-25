<template>
  <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
  <div class="container-xl container-fluid pt-0 my-4">
    <CustomHeader title="Новости"/>
    <div class="row justify-content-center mt-5" v-for="news in news_arr" v-bind:key="news">
      <div class="col-11 col-sm-8 col-xl-9 px-4 news-post">
        <div class="row mt-3">
          <div class="col-12">
            <h2>{{news.header}}</h2>
          </div>
        </div>
        <div class="row mt-3" v-if="news.img != ''">
          <div class="col-12">
            <img :src="require('@/assets/' + news.img)"/>
          </div>
        </div>
        <div class="row mt-3 pb-5">
          <div class="col-12 post-descr">
            <p>{{news.descr}}</p>
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
  name: 'NewsComp',
  data(){
    return{
      news_arr: [{header: 'Пример заголовка новости', img: 'image_ex.png', descr: 'Это пример описания для новости. Здесь будет распологаться какая-то новость'},
       {header: 'Пример заголовка новости', img: '', descr: 'Это пример описания для новости. Здесь будет распологаться какая-то новость'},
        {header: 'Пример заголовка новости', img: 'image_ex.png', descr: 'Это пример описания для новости. Здесь будет распологаться какая-то новость'}]
      }
  },
  components: {
    CustomHeader
  },
  methods:{
  }
}
</script>


<style scoped>
  .container{
    text-align: left;
  }
  .news-post img{
    width: 100%;
  }
  .news-post{
    background-color: #FFFFFF;
    border-radius: 16px;
  }
  .post-descr{
    font-weight: lighter;
  }
</style>

<style>
  .default-text{
      color: #000;
      text-decoration: none;
  }
  .default-text{
        color: #000;
        text-decoration: none;
  }
</style>