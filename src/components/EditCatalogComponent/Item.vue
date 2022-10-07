<template>
    <div class="col-lg-4 col-sm-6 col-12 mt-4 px-2 align-items-stretch">
        <div class="card test">
            <img :src="require('@/assets/' + items.image)" class="card-img-top px-5 pt-3" alt="...">
            <div class="card-body px-5 py-3">
                <h5 class="card-title pt-0 pb-3 mb-0 item-name default-text disabled">{{ items.title }}</h5>
                <div class="row pb-3">
                    <p class="card-text col-6 text-start mb-0 item-price default-text disabled">Цена</p>
                    <p class="card-text col-6 text-end mb-0 item-price default-text disabled">{{ items.price }}D</p>
                </div>
                <div class="row pt-0">
                    <a class="btn btn-danger col-12 buy-button-text default-text">Удалить</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-list",
        props: ['items']
    }
</script>

<style scoped>
    .card{
        border-radius: 16px;
    }
    .item-name{
        font-size: 1rem;
        font-weight: 700;
    }
    .item-price{
        font-size: 1rem;
        font-weight: 400;
    }
    .buy-button-text{
        font-size: 18px;
        font-weight: 600;
    }
    .btn-danger {
        background-color: #dc3545;
    }
</style>

<style>

</style>