<template>
  <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
  <div class="container-xl container-fluid pt-0 my-4">
    <CustomHeader title="Новости"/>
    <ContentCard
      v-for="event in news_arr"
      v-bind:key="event.id"
      v-bind:event="event"
    ></ContentCard>
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
      {header: 'Пример заголовка новости', img: 'image_ex.png', descr: 'Это пример описания для новости. Здесь будет распологаться какая-то новость'},
      {header: 'Пример заголовка новости', img: '', descr: 'Это пример описания для новости. Здесь будет распологаться какая-то новость'},
      {header: 'Пример заголовка новости', img: 'image_ex.png', descr: 'Это пример описания для новости. Здесь будет распологаться какая-то новость'}
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
