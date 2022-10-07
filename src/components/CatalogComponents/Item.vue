<template>
    <div class="col-lg-4 col-sm-6 col-12 mt-4 px-2">
        <div class="card test">
            <img :src="require('@/assets/' + items.image)" class="card-img-top px-5 pt-3" alt="...">
            <div class="card-body px-5 py-3">
                <h5 class="card-title pt-0 pb-3 mb-0 item-name default-text disabled">{{ items.title }}</h5>
                <div class="row pb-3">
                    <p class="card-text col-6 text-start mb-0 item-price default-text disabled">Цена</p>
                    <p class="card-text col-6 text-end mb-0 item-price default-text disabled">{{ items.price }}D</p>
                </div>
                <div class="row pt-0">
                    <a class="btn btn-primary col-12 buy-button-text default-text" @click="buyItem()" >Купить</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" :id="items.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о товаре</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled" >Информация о товаре: {{items.title}}</p>
                    <p class="default-text disabled" >Цена: {{items.price}} D</p>
                    <p class="default-text disabled text-break" >Текущий баланс: </p>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="closeAndBuy()">Купить</button>
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
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
            buyItem(){
                if (!this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.items.id), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.show();
                    this.isModalOpen = true;
                }
            },
            closeModal(){
                let myModal = new bootstrap.Modal(document.getElementById(this.items.id), {
                    keyboard: false,

                });
                myModal.hide();
                this.isModalOpen = false;
                
            },
            closeAndBuy(){
                let myModal = new bootstrap.Modal(document.getElementById(this.items.id), {
                    keyboard: false,

                });
                myModal.hide();
                this.isModalOpen = false;                
            },

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
        background-color: #dc3545;
    }
    .btn-success {
        background-color: #4caf50;
    }
</style>

<style>
</style>