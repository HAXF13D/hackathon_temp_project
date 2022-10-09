<template >

    <div class="modal fade" :id="user.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о пользователе {{user.last_name}} {{ user.first_name }} {{user.middle_name}}</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled" >Информация о пользователе: {{user.about}}</p>
                    <p class="default-text disabled" >Баланс: {{user.user_balance}} D</p>
                    <p class="default-text disabled text-break" >Адрес кошелька: {{user.wallet_addres}}</p>
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
                            <label for="formFileSm" class="form-label label-text default-text disabled" >Изображение:</label>
                            <input required class="form-control form-control-sm" id="formFileSm" type="file"  @change="handleFileUpload()" ref="nftImage">
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

    <div class="modal fade" :id="`addachievement-${user.id}`" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Создание нового Достижения</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Название:</label>
                            <input required type="text" class="form-control text-start" id="message-text" v-model="achievementName">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label default-text disabled">Описание:</label>
                            <input required type="text" class="form-control text-start" id="message-text" v-model="achievementDescription">
                        </div>
                        <div class="mb-3">
                            <label for="formFileSm" class="form-label label-text default-text disabled">Изображение:</label>
                            <input required class="form-control form-control-sm" id="formFileSm" type="file"  @change="handleFileUpload()"  ref="achievementImage">
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-end">
                    <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
                    <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="createAndSendaAhievement()">Добавить</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" :id="`sendMoney-${user.id}`" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Наградить пользователя {{user.last_name}} {{ user.first_name }} {{user.middle_name}}</h5>
                </div>
                <div class="modal-body">
                    <p class="default-text disabled text-break" >Адрес кошелька: {{user.wallet_addres}}</p>
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
                                <label class="form-check-label sex-checkbox header-text" for="inlineRadio2">DRUB</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    required class="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inputDigitalActive" 
                                    value="ACHIEVEMENT"
                                    v-model="AwardType"
                                >
                                <label class="form-check-label sex-checkbox header-text" for="inlineRadio2">достижение</label>
                            </div>
                        </div>

                        <div v-if="isNft" class="mb-3 mt-4">
                            <select v-model="NFTtype" class="form-select text-start" aria-label="Default select example">
                                <option selected >Выберете NFT:</option>
                                <option v-for="nft in allNFTs"  :key="nft.header" :value="`${nft.id}`">
                                    {{nft.header}}
                                </option>

                            </select>
                        </div>
                        <div v-else-if="isAchievement" class="mb-3 mt-4">
                            <select v-model="AchievementType" class="form-select text-start" aria-label="Default select example">
                                <option selected >Выберете достижение:</option>
                                <option v-for="achievement in allAchievements"  :key="achievement.header" :value="`${achievement.id}`">
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
            isNft: false,
            isAchievement: false,
            amountToSend: undefined,
            nftName: undefined,
            NFTtype: undefined,
            AchievementType: undefined,
            achievementName: undefined,
            fileNFTImage: undefined,
            fileachievementImage: undefined,
            achievementDescription: undefined,
            achivment_id: undefined,
            allNFTs: [
                {
                    id: "-1",
                    header: "Создать новую NFT"
                },
            ],
            allAchievements: [
                {
                    id: "-1",
                    header: "Создать новое достижение"
                }
            ],
            baseUrl: 'http://127.0.0.1:5000',
        }),
        setup(){
            const toast = useToast();
            return { toast }
        },
        props: ['user'],
        methods: {
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
            sendAchievmentToast(response){
                console.log(response.data.transactionHash);
                this.toast.success(`Достижение выдано!`, {
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
            sendNFTToast(response){
                console.log(response.data.transactionHash);
                this.toast.success(`NFT выдана!`, {
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
            async sendMoneyFinal(){
                let sendMoneyModal = new bootstrap.Modal(document.getElementById(`sendMoney-${this.user.id}`), {
                    keyboard: false,
                });
                let adNFTModal = new bootstrap.Modal(document.getElementById(`addnft-${this.user.id}`),{
                    keyboard: false,
                });
                let adachievementModal = new bootstrap.Modal(document.getElementById(`addachievement-${this.user.id}`),{
                    keyboard: false,
                });
                console.log(this.NFTtype);
                if (this.NFTtype == -1 && this.AwardType === "NFT"){



                    sendMoneyModal.hide();
                    adNFTModal.show();
                }
                else if (this.AwardType == "NFT"){

                    try{
                        const params = {
                            user_id: this.user.id,
                            nft_id: this.NFTtype,
                        };
                        let baseUrl = 'http://127.0.0.1:5000';
                        await axios.post(baseUrl + '/api/generate/nft', params).then(response => this.sendNFTToast(response));
                    }catch(error){}
                    sendMoneyModal.hide();
                }
                else if (this.AchievementType == -1 && this.AwardType === "ACHIEVEMENT"){
                    sendMoneyModal.hide();
                    adachievementModal.show();
                }
                else if(this.AwardType === "ACHIEVEMENT"){
                    const params = {
                        user_id: this.user.id,
                        achievement_id: this.AchievementType,
                    };
                    let baseUrl = 'http://127.0.0.1:5000';
                    await axios.post(baseUrl + '/api/reward/user', params).then(response => this.sendAchievmentToast(response));
                    sendMoneyModal.hide();
                }
                else{
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
                }

                this.isModalOpen = false;
            },
            selectUserInput(){
                console.log(this.AwardType);
                if (this.AwardType === "DIGITAL"){
                    this.isNft = false;
                    this.isAchievement = false;
                }
                else if (this.AwardType === "NFT"){
                    this.isNft = true;
                    this.isAchievement = false;
                }
                else{
                    this.isNft = false;
                    this.isAchievement = true;
                }
            },
            async createAndSendNFT(){
                let adNFTModal = new bootstrap.Modal(document.getElementById(`addnft-${this.user.id}`),{
                    keyboard: false,
                });

                let baseUrl = 'http://127.0.0.1:5000';                   
                    try{
                        const params1 = {
                            header: this.nftName,
                            description: 'biliberda',
                        };
                        console.log(params1);
                        baseUrl = 'http://127.0.0.1:5000';
                        await axios.post(baseUrl + '/api/create/nft', params1).then(response => (this.NFTtype = response.data.achievement_id));
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
                    try{
                        const params = {
                            user_id: this.user.id,
                            nft_id: this.NFTtype,
                        };
                        let baseUrl = 'http://127.0.0.1:5000';
                        await axios.post(baseUrl + '/api/generate/nft', params).then(response => this.sendNFTToast(response));
                    }catch(error){}

                console.log(this.nftName);
                adNFTModal.hide();
            },
            async createAndSendaAhievement(){
                let adachievementModal = new bootstrap.Modal(document.getElementById(`addachievement-${this.user.id}`),{
                    keyboard: false,
                });
                let baseUrl = 'http://127.0.0.1:5000';
                console.log(this.achievementName);
                console.log(this.fileachievementImage);
                console.log(1);                    
                    try{
                        const params1 = {
                            header: this.achievementName,
                            description: this.achievementDescription,
                            image: 'text'
                        };
                        console.log(params1);
                        baseUrl = 'http://127.0.0.1:5000';
                        let achivment_id = ''
                        await axios.post(baseUrl + '/api/add/achievement', params1).then(response => (this.achivment_id = response.data.achievement_id));
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
                    const params2 = {
                        user_id: this.user.id,
                        achievement_id: this.achivment_id,
                    };
                    baseUrl = 'http://127.0.0.1:5000';
                    await axios.post(baseUrl + '/api/reward/user', params2).then(response => this.sendAchievmentToast(response));
                adachievementModal.hide();
            },
            handleFileUpload(){
                this.fileNFTImage = this.$refs.achievementImage.files[0];
                this.fileachievementImage = this.$refs.nftImage.files[0];
            },
            async checkForm(){
            },
            async getDataFromServer(){
            try{
                let baseUrl = 'http://127.0.0.1:5000';
                let params = {
                    userId: localStorage.getItem("registredStatus"),
                };
                let data = []
                await axios.post(this.baseUrl + '/api/get/achievments/user', params).then(response => (data = response.data.resp.all_achievments));
                data === undefined ? this.allAchievements = this.allAchievements : this.allAchievements = this.allAchievements.concat(data);
                console.log(data);
                }
                catch(error){
                console.log(error);
            }
            try{
                let baseUrl = 'http://127.0.0.1:5000';
                let data = []
                await axios.get(this.baseUrl + '/api/get/nfts').then(response => (data = response.data.resp));
                console.log(data);
                data === undefined ? this.allNFTs = this.allNFTs : this.allNFTs = this.allNFTs.concat(data);
                
                }
                catch(error){
                console.log(error);
            }
        }
        },
        created:
            async function(){
                this.getDataFromServer();
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