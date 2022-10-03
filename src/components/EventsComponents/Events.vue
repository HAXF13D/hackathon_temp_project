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
  
  export default {
    name: 'NewsComp',
    data: () => ({
      news_arr: [
        {header: 'Пример заголовка мероприятия', img: 'image_ex.png', descr: 'Это пример описания для мероприятия. Здесь будет распологаться какое-то мероприятие'},
        {header: 'Пример заголовка мероприятия', img: '', descr: 'Это пример описания для мероприятия. Здесь будет распологаться какое-то мероприятие'},
        {header: 'Пример заголовка мероприятия', img: 'image_ex.png', descr: 'Это пример описания для мероприятия. Здесь будет распологаться какое-то мероприятие'}
      ]
    }),
    components: {
      CustomHeader,
      ContentCard
  },
    methods:{
    }
  }
  </script>
  