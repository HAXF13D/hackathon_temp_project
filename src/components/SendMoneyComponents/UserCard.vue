<template >

    <div class="modal fade" :id="user.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о пользователе {{user.lastName}} {{ user.firstName }} {{user.middleName}}</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled" >Информация о пользователе: {{user.about}}</p>
                    <p class="default-text disabled" >Баланс: {{user.moneyAmount}} D</p>
                    <p class="default-text disabled text-break" >Адрес кошелька: {{user.walletAdress}}</p>
                </div>
                <div class="modal-footer justify-content-end">
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="sendMoney()">Наградить пользователя</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" :id="`addnft-${user.id}`" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Создание нового NFT</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Название:</label>
                            <input required type="text" class="form-control text-start" id="message-text" v-model="nftName">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Описание:</label>
                            <input type="text" class="form-control text-start" id="message-text" v-model="nftDescription">
                        </div>
                        <div class="mb-3">
                            <label for="formFileSm" class="form-label label-text default-text disabled">Изображение:</label>
                            <input required class="form-control form-control-sm" id="formFileSm" type="file">
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-end">
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="createAndSendNFT()">Добавить</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" :id="`sendMoney-${user.id}`" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Наградить пользователя {{user.lastName}} {{ user.firstName }} {{user.middleName}}</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled text-break" >Адрес кошелька: {{user.walletAdress}}</p>
                    <form>
                        <label for="inputSex" class="form-label label-text mt-4 d-flex header-text">Тип награды</label>
                        <div @change="selectUserInput()" class="d-flex justify-content-start mt-3">
                            <div class="form-check form-check-inline me-md-2">
                                <input 
                                    required class="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inputNFT" 
                                    value="NFT"
                                    v-model="AwardType"
                                >
                                <label class="form-check-label sex-checkbox header-text" for="inlineRadio1">NFT</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    checked
                                    required class="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inputDigitalActive" 
                                    value="DIGITAL"
                                    v-model="AwardType"
                                >
                                <label class="form-check-label sex-checkbox header-text" for="inlineRadio2">Цифровые активы</label>
                            </div>
                        </div>

                        <div v-if="isNft" class="mb-3 mt-4">
                            <select v-model="NFTtype" class="form-select text-start" aria-label="Default select example">
                                <option selected >Выберете NFT:</option>
                                <option v-for="nft in allNFTs"  :value="`${nft.id}`">
                                    {{nft.header}}
                                </option>

                            </select>
                        </div>
                        <div v-else class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Сумма:</label>
                            <input type="number" class="form-control text-start" id="message-text" v-model="amountToSend">
                        </div>

                    </form>
                </div>
                <div class="modal-footer justify-content-end">
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="sendMoneyFinal()">Отправить</button>
                </div>
            </div>
        </div>
    </div>

    <tbody @click="showUserInfo()">
        <tr>
            <th>
                <div class="row ps-2">
                    <div class="col-lg-2 pe-0">
                        <img class="picture d-none d-lg-block" src="https://via.placeholder.com/70" alt=""/>
                    </div>
                    <div class="col-lg-9 ms-1">
                        <p class="disabled header-text user-card-text">{{user.lastName}} {{user.firstName}} {{user.middleName}}</p>
                        <p class="disabled header-text user-card-text">{{user.shortenWalletAdress}}</p>
                    </div>
                </div>
            </th>
            <td>
                <div class="row pe-2">
                    <div class="col-12">
                        <p class="align-middle text-end pt-3 disabled header-text user-card-text">{{user.moneyAmount}} D</p>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    
    export default {
        name: "userCard",
        data: () => ({
            isModalOpen: false,
            isNft: false,
            allNFTs: [
                {
                    id: "-1",
                    header: "Создать новую NFT"
                },
                {
                    id:"1",
                    header: "NFT 1"
                },
                {
                    id:"2",
                    header: "NFT 2"
                },
                {
                    id:"3",
                    header: "NFT 3"
                },
            ]
        }),
        props: ['user'],
        methods: {
            showUserInfo(){
                if (!this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.user.id), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.show();
                    this.isModalOpen = true;
                }
            },
            closeModal(){
                let myModal = new bootstrap.Modal(document.getElementById(this.user.id), {
                    keyboard: false,

                });
                myModal.hide();
                this.isModalOpen = false;
                
            },
            sendMoney(){
                let myModal = new bootstrap.Modal(document.getElementById(this.user.id), {
                    keyboard: false,
                });
                let sendMoneyModal = new bootstrap.Modal(document.getElementById(`sendMoney-${this.user.id}`), {
                    keyboard: false,
                });
                myModal.hide();
                sendMoneyModal.show();
                
            },
            sendMoneyFinal(){
                let sendMoneyModal = new bootstrap.Modal(document.getElementById(`sendMoney-${this.user.id}`), {
                    keyboard: false,
                });
                let adNFTModal = new bootstrap.Modal(document.getElementById(`addnft-${this.user.id}`),{
                    keyboard: false,
                });
                console.log(this.NFTtype);
                if (this.NFTtype == -1){
                    sendMoneyModal.hide();
                    adNFTModal.show();
                }

                this.isModalOpen = false;
            },
            selectUserInput(){
                console.log(this.AwardType);
                if (this.AwardType === "DIGITAL"){
                    this.isNft = false;
                }
                else{
                    this.isNft = true;
                }
            },
            createAndSendNFT(){
                let adNFTModal = new bootstrap.Modal(document.getElementById(`addnft-${this.user.id}`),{
                    keyboard: false,
                });
                console.log(this.nftName);
                console.log(this.nftDescription);
            },
            async checkForm(event){
                this.toast.info("Инициализируем процесс\nдобавления пользователя", {
                    position: "bottom-right",
                    timeout: 3000,
                    closeOnClick: true,
                    pauseOnFocusLoss: false,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: true,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
                this.toast.success("Пользователь добавлен!", {
                    position: "bottom-right",
                    timeout: 3000,
                    closeOnClick: true,
                    pauseOnFocusLoss: false,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: true,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            }
        },
        components: {
        },
    }

</script>

<style scoped>
    .picture{
        border-radius: 100px;
    }
    .user-card-text{
        font-weight: 1rem;
        font-weight: 400;
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
    .modal-user-color{
        background-color: white !important; 
    }
</style>