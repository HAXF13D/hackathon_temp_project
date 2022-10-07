<template>
    <CustomHeader title="Редактировать каталог" class="pt-0 my-4" />
    <div id="filter" class="container-fluid justify-content-center">

        <Filter/>
        <div class="row">

            <div class="col-lg-4 col-sm-6 col-12 mt-4 px-2 align-items-stretch">
                <div class="card test">
                    
                    <div class="card-body px-5 py-3">
                        <h5 class="card-title pt-0 pb-3 mb-0 item-name default-text disabled">dfgdfg</h5>
                        <div class="row pb-3">
                            <p class="card-text col-6 text-start mb-0 item-price default-text disabled">Цена</p>
                            <p class="card-text col-6 text-end mb-0 item-price default-text disabled">D</p>
                        </div>
                        <div class="row pt-0">
                            <a class="btn btn-danger col-12 buy-button-text default-text">Удалить</a>
                        </div>
                    </div>
                </div>
            </div>

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

export default {
    name: 'Catalog',
    data: () => ({
        itemsArray: [
            {title: "Наименование услуги/товара", image: "item.png", price: 255.5}, 
            {title: "Наименование услуги/товара", image: "item.png", price: 255.5}, 
            {title: "Наименование услуги/товара", image: "item.png", price: 255.5}
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