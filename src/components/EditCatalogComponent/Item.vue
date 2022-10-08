<template>

    <div class="modal fade" :id="items.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content test">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Удалить товар {{items.title}}?</h5>
            </div>
                <div class="modal-footer justify-content-end">
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="closeModal()">Отмена</button>
                    <button type="button" class="btn btn-info default-text" data-bs-dismiss="modal" @click="deleteItem()">Удалить</button>
                </div>
            </div>
        </div>
    </div>


    <div class="col-lg-4 col-sm-6 col-12 mt-4 px-2 align-items-stretch">
        <div class="card test">
            <img :src="require('@/assets/' + items.image)" class="px-5 pt-3" alt="...">
            <div class="card-body px-5 py-3">
                <h5 class="card-title pt-0 pb-3 mb-0 item-name default-text disabled">{{ items.title }}</h5>
                <div class="row pb-3">
                    <p class="card-text col-6 text-start mb-0 item-price default-text disabled">Цена</p>
                    <p class="card-text col-6 text-end mb-0 item-price default-text disabled">{{ items.price }}D</p>
                </div>
                <div class="row pt-0">
                    <a class="btn btn-info col-12 buy-button-text default-text" @click="openDeleteWindow()">Удалить</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-list",
        props: ['items'],
        methods:{
            openDeleteWindow(){
                if (!this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.items.id), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.show();
                    this.isModalOpen = true;
                }
            },
            deleteItem(){
                if (this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.items.id), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.hide();
                    this.isModalOpen = false;
                }
            },
            closeModal(){
                if (this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.transaction.blockNumber), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.hide();
                    this.isModalOpen = false;
                }
            }
        }
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
        background-color: #ffffff;
        border-color: #00aaff;
        color: black;
    }
    .btn-success {
        background-color: #00aaff;
        border-color: #00aaff;
        color: black;
    }
    .btn-success:hover {
        background-color: #00aaff;
        border-color: #00aaff;
        box-shadow: 0px 0px 15px #00aaff;
        color: black;
    }
    .btn-danger:hover {
        background-color: #ffffff;
        border-color: #00aaff;
        box-shadow: 0px 0px 15px #00aaff;
        color: black;
    }

    .btn-info{
        background-color: #db3646;
        border-color: #db3646;
    }
    .btn-info:focus{
        background-color: #db3646;
        border-color: #db3646;
        box-shadow: none;
    }
    .btn-info:hover{
        background-color: #db3646;
        border-color: #db3646;
    }

</style>

<style>

</style>