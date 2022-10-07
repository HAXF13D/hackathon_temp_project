<template>
    <div clas="">
        <div class="error pos-class ms-5">404</div>
        <div class="error-text ms-5">Страница не найдена!</div>
    </div>
</template>
  

  <script>
  // @ is an alias to /src
  
  export default {
    name: 'pageNotFoundComponent',
    components: {
    }
  }
  </script>

  <style>
    .error {
        color: #00AAFF;
        font-size: 128px;
    }
    .error-text{
        color: #00AAFF;
        font-size: 64px;
    }
    .pos-class{
        margin-top: calc(50vh - 192px);        
    }
  </style>
  