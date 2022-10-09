<template>

    <div class="col-lg-4 col-sm-6 col-12 mt-4 px-2 align-items-stretch">
        <div class="card test nft-body">
            <div class="row px-4 justify-content-start py-2">
                <div class="col-2 align-self-start">
                    <img src="https://via.placeholder.com/75" class="mx-auto nft-picture" alt="...">
                </div>
                <div class="col-2"></div>
                <div class="col-7 align-self-start mt-3">
                    <h5 class="card-title item-name default-text disabled text-start">{{nft.header}}</h5>
                </div>
            </div>            
        </div>
    </div>

</template>

<script>
    export default {
        name: "item-list",
        props: ['nft'],
        beforeCreate(){

        },
        methods:{
            sellItem(){
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
            closeAndSell(){
                let myModal = new bootstrap.Modal(document.getElementById(this.items.id), {
                    keyboard: false,

                });
                //Тут будет покупка
                myModal.hide();
                this.isModalOpen = false;                
            },

        }
    }
</script>

<style scoped>
    .nft-picture{
        border-radius: 100px;
    }
    .nft-body{
        border-radius: 16px;
        border-color: transparent;
    }
</style>

<style>

</style>