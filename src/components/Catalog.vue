<template>
    <CustomHeader title="Каталог" class="pt-0 my-4"/>
    <div id="filter" class="container-fluid py">
        <div class="row border px-4">
            <div class="col-2 my-2 py-1 default-text">
                <p class="filter mb-0 m-0 p-0">Сортировать по:</p>
            </div>
            <div class="col-2 my-2 py-1 px-0 default-text">
                <p class="filter mb-0">Популярности</p>
            </div>
            <div class="col-2 my-2 py-1 px-0 default-text">
                <p class="filter mb-0">Цене</p>
            </div>
            <div class="col-2 my-2 py-1 px-0 default-text">
                <p class="filter mb-0">Новизне</p>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomHeader from './CustomHeader.vue';


    export default {
        name: 'Catalog',
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
    .border {
        background-color: #FFF;
        border-radius: 16px;
    }
    .sort-by {
        width: 111px;
    }
    .popular{
        width: 95px;
    }
    .price{
        width: 34px;
    }
    
    @media screen and (min-width: 576px){
        #filter{
            padding-right: 3rem;
            padding-left: 5rem;
        }
    }
    @media screen and (min-width: 768px){
        #filter{
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }
    @media screen and (min-width: 1200px){
        #filter{
            padding-right: .5rem;
            padding-left: 1rem;
            width:1100px;
        }
    }
    .filter{
        font-size: 14px;
    }
</style>