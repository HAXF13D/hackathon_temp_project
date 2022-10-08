<template>
    <div class="col-lg-4 col-sm-6 col-12 mt-4 px-2 align-items-stretch">
        <div class="card test">
            <img :src="require('@/assets/' + items.image)" class="px-5 pt-3" alt="...">
            <div class="card-body px-5 py-3">
                <h5 class="card-title pt-0 pb-3 mb-0 item-name default-text disabled">{{ items.title }}</h5>
                <div class="row pt-0">
                    <a class="btn btn-info col-12 buy-button-text default-text" @click="openDeleteWindow()">Удалить</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>

<style>

</style>