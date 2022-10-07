<template>
    <div>
        <PageNotFoundComponent />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import PageNotFoundComponent from '@/components/PageNotFoundComponent.vue';

  
  export default {
    name: 'emptyPage',
    components: {
        PageNotFoundComponent,
    },
   
  }
  </script>
  