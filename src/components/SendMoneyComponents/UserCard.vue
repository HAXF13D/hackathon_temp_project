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
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="sendMoney()">Наградить пользователя</button>
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
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
                                <label class="form-check-label sex-checkbox header-text" for="inlineRadio1">NFT достижение</label>
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
                            <select class="form-select text-start" aria-label="Default select example">
                                <option selected>Выберете достижение:</option>
                                <option v-for="achievement in allAchievements"  value="{{ achievement.id }}">
                                    {{achievement.header}}
                                </option>

                            </select>
                        </div>
                        <div v-else class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Сумма:</label>
                            <input type="number" class="form-control text-start" id="message-text" v-model="amountToSend">
                        </div>

                    </form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="sendMoneyFinal()">Отправить</button>
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
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
            allAchievements: [
                {
                    id:"1",
                    header: "Достижение 1"
                },
                {
                    id:"2",
                    header: "Достижение 2"
                },
                {
                    id:"3",
                    header: "Достижение 3"
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
                sendMoneyModal.hide();
                console.log(this.amountToSend);
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
        background-color: #dc3545;
    }
    .btn-success {
        background-color: #4caf50;
    }
</style>

<style>
    .modal-user-color{
        background-color: white !important; 
    }
</style>