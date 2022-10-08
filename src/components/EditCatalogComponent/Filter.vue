<template>

    <div class="modal fade" id="additem" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content test">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Добавить новый товар</h5>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label default-text disabled">Название:</label>
                        <input type="text" class="form-control text-start" id="message-text" v-model="itemName">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label default-text disabled">Цена:</label>
                        <input type="number" class="form-control text-start" id="message-text" v-model="itemPrice">
                    </div>
                    <div class="mb-3">
                        <label for="formFileSm" class="form-label label-text default-text disabled">Фото товара:</label>
                        <input class="form-control form-control-sm" id="formFileSm" type="file" @change="handleFileUpload()"/>
                    </div>
                </form>
            </div>
            <div class="modal-footer justify-content-end">
                <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="addItem()">Добавить</button>
            </div>
            </div>
        </div>
    </div>



    <div class="border row my-1 py-2 px-3">
        <div class="col-lg-3 col-md-5 col-12 my-auto p-0 m-0">
            <div class="d-flex flex-sm-row flex-column text-left">
                    <a @click="showAddModal()" class="btn btn-danger col-12 buy-button-text default-text">Добавить</a>
            </div>
        </div>
        <div class="col-lg-6 d-md-none d-lg-block"></div>
        <div class="d-md-none mt-3" ></div>
        <div class="d-lg-none col-md-2" ></div>
        <div class="col-lg-3 col-md-5 col-12 search p-0 m-0">
            <div class="input-group">
                <input v-model="searchParameter" type="text" class="form-control search text-start py-1 selected-text" placeholder="Поиск" aria-describedby="search-btn">
                <button @click="searchUser()" class="btn btn-outline-secondary search py-1 selected-text" type="button" id="search-btn"><i class="bi bi-search me-1 selected-text" style="font-size: 18px;"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'search',
        data() {
            return {
                isModalOpen: false,
                itemName: '',
                itemPrice: '',
                file: '',
                searchParameter: undefined,
            }
        },
        methods: {
            showAddModal(){
                if (!this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById("additem"), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.show();
                    this.isModalOpen = true;
                }
            },
            closeModal(){
                let myModal = new bootstrap.Modal(document.getElementById("additem"), {
                    keyboard: false,

                });
                myModal.hide();
                this.isModalOpen = false;
                
            },
            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            addItem(){
                console.log(this.file);
            },
            getDataFromServer(){
                this.$emit({itemName: this.itemName, itemPrice: this.itemPrice, file: this.file, })
            }
        }
    }
</script>

<style scoped>
    .search{
        border-radius: 16px;
        background-color: #00AAFF;
        border-width: 0px;
    }
    .filter {
        font-size: 14px;
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
</style>

<style>
    .form-control::-webkit-input-placeholder {
        color: #000;
    }
    .border {
        background-color: #FFF;
        border-radius: 16px;
        border-width: 0px !important;
    }
    .selected-text{
        color:#000
    }
    .default-text:hover{
        color: #000;
    }
    .choose-text:hover{
        color: #00AAFF;
    }
    .sort-choosed{
        color: #00AAFF;
    }
</style>