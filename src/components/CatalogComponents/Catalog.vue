<template>
    <CustomHeader title="Каталог" class="pt-0 my-4" />
    <div id="filter" class="container-fluid justify-content-center">

        <Filter v-on:getData="getDataFromServer()"/>
        <div class="row">
            <Item 
                v-for="items in itemsArray"
                v-bind:key="items.id"
                v-bind:items="items"
            ></Item>
        </div>
        <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
    </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue';
import Filter from './Filter.vue';
import Item from './Item.vue';
import axios from 'axios';

export default {
    name: 'Catalog',
    data: () => ({
        itemsArray: [
            {id:"1", name: "Наименование услуги/товара", image: "item.png", price: 255.5}, 
            {id:"2", name: "Наименование услуги/товара", image: "item.png", price: 255.5}, 
            {id:"3", name: "Наименование услуги/товара", image: "item.png", price: 255.5}
        ],
        baseUrl: 'http://127.0.0.1:5000',
    }),
    components: {
    CustomHeader,
    Filter,
    Item
},
    methods: {
        getDataFromServer(params){
            try{
                axios.get(this.baseUrl + '/api/filter', params).then(response(this.itemsArray = response.data.resp));
            }
            catch(error){
                console.log(error);
            };
        },
        handleresponse(data){
            console.log(data);
            this.itemsArray = data.resp;
        }
    },
    created:
        async function(){
            try{
                const params = {
                    popularSort: 'INCREASE',
                    priceSort: 'NO',
                    newnessSort: 'NO',
                    Amount: 'false'
                };
                axios.post(this.baseUrl + '/api/filter',
                params,
                {headers: {'Content-Type': 'application/json'}
                }).then(response => (this.handleresponse(response.data)));
            }
            catch(error){
                console.log(error);
            };
            try{

            }
            catch(error){
                console.log(error);
            };
        }
}
</script>

<style scoped>
    @media screen and (min-width: 576px) {
        #filter {
            padding-right: 3rem;
            padding-left: 5rem;
        }
    }

    @media screen and (min-width: 768px) {
        #filter {
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }

    @media screen and (min-width: 1200px) {
        #filter {
            padding-right: .5rem;
            padding-left: 1rem;
            width: 1100px;
        }
    }
</style>

<style>

</style>