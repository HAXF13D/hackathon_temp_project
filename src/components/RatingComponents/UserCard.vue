<template >

    <div class="modal fade" :id="user.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о пользователе  {{user.last_name}} {{ user.first_name }} {{user.middle_name}}</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled" >Информация о пользователе: {{user.about}}</p>
                    <p class="default-text disabled" >Баланс: {{user.user_balance}} D</p>
                    <p class="default-text disabled text-break" >Адрес кошелька: {{user.wallet_addres}}</p>
                </div>
                <div class="modal-footer justify-content-end py-3">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="sendMoney()"><i class="bi bi-cash-coin"></i> Отправить деньги</button>                   
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" :id="`sendMoney-${user.id}`" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о пользователе  {{user.last_name}} {{ user.first_name }} {{user.middle_name}}</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled text-break" >Адрес кошелька: {{user.wallet_addres}}</p>
                    <form>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Сумма:</label>
                            <input type="number" class="form-control text-start" id="message-text" v-model="amountToSend">
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-end">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="sendMoneyFinal()">Отправить</button>
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
                        <p class="disabled header-text user-card-text">{{user.last_name}} {{user.first_name}} {{user.middle_name}}</p>
                        <p class="disabled header-text user-card-text">{{user.shorten_wallet_addres}}</p>
                    </div>
                </div>
            </th>
            <td>
                <div class="row pe-2">
                    <div class="col-12">
                        <p class="align-middle text-end pt-3 disabled header-text user-card-text">{{user.user_balance}} D</p>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import axios from 'axios';
    import { useToast } from "vue-toastification";

    export default {
        name: "userCard",
        data: () => ({
            isModalOpen: false,
            amountToSend: undefined,
            baseUrl: 'http://127.0.0.1:5000',
        }),
        setup(){
            const toast = useToast();
            return { toast }
        },
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
            sendToast(response){
                console.log(response.data.transactionHash);
                this.toast.success(`Деньги отправлены!\n${response.data.transactionHash}`, {
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
            },  
            async sendMoneyFinal(){
                let sendMoneyModal = new bootstrap.Modal(document.getElementById(`sendMoney-${this.user.id}`), {
                    keyboard: false,
                });
                try{
                    let baseUrl = 'http://127.0.0.1:5000';
                    const params = {
                        sender_id: localStorage.getItem('registredStatus'),
                        recipient_id: this.user.id,
                        amount: this.amountToSend
                    };
                    console.log(params);
                    this.toast.info("Отправляем траназакцию!", {
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
                    await axios.post(baseUrl + '/api/send/ruble', params).then(response => this.sendToast(response));
                }
                catch(error){
                    console.log(error);
                    this.toast.error("Произошла ошибка!", {
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
                };
                sendMoneyModal.hide();
                console.log(this.amountToSend);
                this.isModalOpen = false;
            }
        },
        beforeMount(){
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