<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <div id="header" class="row mx-auto ">
      <div class="col-12 p-0 default-text disabled">
        <h2>{{ title }}</h2>
      </div>
    </div>
</template>

<script>
  export default {
    name: "CustomHeader",
    props: ['title'],
  }
</script>

<style scoped>
  #header h2{
    border-bottom: 1px solid #00AAFF;
    margin-bottom: 2%;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 24px;
  }
  
  @media screen and (min-width: 576px){
    #header{
        padding-right: 3rem;
        padding-left: 5rem;
    }
  }
  @media screen and (min-width: 768px){
    #header{
        padding-right: 7rem;
        padding-left: 7rem;
    }
  }
  @media screen and (min-width: 1200px){
      #header{
          padding-right: .5rem;
          padding-left:1rem;
          width:1100px;
      }
  }
  .disabled:hover{
      color: #000;
  }
</style>
<!-- ---Шальнев Владимир--- -->
