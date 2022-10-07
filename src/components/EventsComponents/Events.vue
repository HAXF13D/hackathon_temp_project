<template>
    <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
    <div class="container-xl container-fluid pt-0 my-4">
      <CustomHeader title="Мероприятия"/>
      <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
      <ContentCard
        v-for="event in news_arr"
        v-bind:key="event.id"
        v-bind:event="event"
      ></ContentCard>
      <!-- --- Шальнев Владимир vovik0312@gmail.com --- -->
      <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
    </div>
    <!-- ---Духно Михаил--- -->
  </template>
  
  <script>
  
  import CustomHeader from '@/components/CustomHeader.vue';
  import ContentCard from '../ContentCard.vue';
  import axios from 'axios';
  
  export default {
    name: 'NewsComp',
    data: () => ({
      news_arr: [],
      base_url: 'http://127.0.0.1:5000',
    }),
    components: {
      CustomHeader,
      ContentCard
  },
    methods:{
    },
  created:
    function (){
      try{
        axios.get(this.base_url + '/api/get/news').then(response => (this.news_arr = response.data.resp));
      }
      catch(error){
        console.log(error);
      }
    }
  }
  </script>