<template>
    <CustomHeader title="Редактировать каталог" class="pt-0 my-4" />
    <div id="filter" class="container-fluid justify-content-center">
        <Filter/>
        <div class="row">
            <Item 
                v-for="items in itemsArray"
                v-bind:key="items.id"
                v-bind:items="items"
            ></Item>
        </div>
        <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
    </div>
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue';
import Filter from './Filter.vue';
import Item from './Item.vue';

export default {
    name: 'Catalog',
    data: () => ({
        itemsArray: [
            {id:"1", title: "Наименование услуги/товара", image: "item.png", price: 255.5}, 
            {id:"2", title: "Наименование услуги/товара", image: "item.png", price: 255.5}, 
            {id:"3", title: "Наименование услуги/товара", image: "item.png", price: 255.5}
        ]
  }),
    components: {
    CustomHeader,
    Filter,
    Item
},
    methods: {
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
    .card{
        border-radius: 16px;
    }
</style>

<style>

</style>