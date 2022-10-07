<template>
    <CustomHeader title="О нас" class="pt-0 my-4"/>
    <template>
    <CustomHeader title="О нас" class="pt-0 my-4"/>
    <div id="filter" class="container-fluid">
        <div class="row mt-4 mb-3">
            <div class="col-12 text-center">
                <h4 class="header">ВЫХОД ЕСТЬ</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-sm-2 mx-2 team-card">
                <div>
                    <img src="@/assets/egor.png" class="col-6 h-50 my-3 mx-auto"/>
                </div>
                <div class="text-center">
                    <h5 class="header">Выходцев Егор</h5>
                </div>
                <div class="text-center">
                    <p>Backend разработчик</p>
                </div>
            </div>
            <div class="col-12 col-sm-2 mx-2 team-card">
                <div>
                    <img src="@/assets/misha.jpg" class="col-12 h-50 my-3"/>
                </div>
                <div class="text-center">
                    <h5 class="header">Духно Михаил</h5>
                </div>
                <div class="text-center">
                    <p>Fullstack разработчик</p>
                </div>
            </div>
            <div class="col-12 col-sm-2 mx-2 team-card">
                <div>
                    <img src="@/assets/sonya.jpg" class="col-12 h-50 my-3"/>
                </div>
                <div class="text-center">
                    <h5 class="header">Гробова Софья</h5>
                </div>
                <div class="text-center">
                    <p>Дизайнер и аналитик</p>
                </div>
            </div>
            <div class="col-12 col-sm-2 mx-2 team-card">
                <div >
                    <img src="@/assets/vova.jpg" class="col-12 h-50 my-3"/>
                </div>
                <div class="text-center">
                    <h5 class="header">Шальнев Владимир</h5>
                </div>
                <div class="text-center">
                    <p>Frontend разработчик</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomHeader from '../CustomHeader.vue';


    export default {
        name: 'Start',
        data(){
            return{
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
    img{
        height: 50%;
        border-radius: 360px;
    }
    .img{
        margin: auto;
    }
    .header{
        font-weight: bold;
    }
    .team-card{
        background-color: #FFFFFF;
        border-radius: 16px;
    }
</style>