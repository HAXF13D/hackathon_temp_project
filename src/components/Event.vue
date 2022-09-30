<template>
    <div class="row justify-content-center mt-5">
        <div class="col-11 col-sm-8 col-xl-9 px-4 news-post test">
            <div class="row mt-3">
                <div class="col-12">
                <h2 class="default-text disabled">{{event.header}}</h2>
                </div>
            </div>
            <div class="row mt-3" v-if="event.img != ''">
                <div class="col-12">
                <img :src="require('@/assets/' + event.img)"/>
                </div>
            </div>
            <div class="row mt-3 pb-5">
                <div class="col-12 post-descr">
                <p class="default-text disabled">{{event.descr}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "events",
        props: ['event']
    }
</script>

<style scoped>
    .news-post img{
        width: 100%;
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
    .news-post{
      border-radius: 16px;
      background-color: #FFF;
    }
</style>