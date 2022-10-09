<template>
    <CustomHeader title="Профиль" class="pt-0 my-4"/>
    <div id="profile" class="container-fluid my-4">
        <div class="row mx-1">
            <!-- Админ -->
            <div v-show="user.user_role === 'admin' " class="col-12 profile-block-background mb-3 py-2">
                <div class="row justify-content-between">
                    <div class="col-md-3 col-12 d-grid ps-md-4">
                        <button @click="relocateToUserAdd()" class="btn btn-primary header-text">Добавить пользователя</button>   
                    </div>
                    <div class="mt-3 d-md-none"></div>
                    <div class="col-md-4 col-12 d-grid pe-md-4">
                        <button @click="relocateToAddBalnce()" class="btn btn-primary header-text">Пополнить баланс пользователя</button>   
                    </div>
                    <div class="mt-3 d-md-none"></div>
                    <div class="col-md-3 col-12 d-grid pe-md-4">
                        <button @click="relocateToEditCatalog()" class="btn btn-primary header-text">Редактировать каталог</button>  
                    </div>
                </div>
            </div>

            <!-- Руководитель -->
            <div v-show="user.user_role === 'supervisor' " class="col-12 profile-block-background mb-3 py-2">
                <div class="row">
                    <div class="d-md-none"></div>
                    <div class="col-md-12 col-12 d-grid px-md-4">
                        <button @click="relocateToAwardUser()" class="btn btn-primary header-text">Наградить пользователя</button>   
                    </div>
                </div>
            </div>

            <!-- Редактор -->
            <div v-show="user.user_role === 'editor' " class="col-12 profile-block-background mb-3 py-2">
                <div class="row">
                    <div class="col-md-5 col-12 d-grid ps-md-4">
                        <button @click="relocateToAddNews()" class="btn btn-primary header-text">Добавить новость</button>  
                    </div>
                    <div class="mt-3 d-md-none"></div>
                    <div class="col-2"></div>
                    <div class="col-md-5 col-12 d-grid pe-md-4">
                        <button @click="relocateToAddEvent()" class="btn btn-primary header-text">Добавить мероприятие</button> 
                    </div>
                </div>
            </div>


            <div class="col-lg-3 align-items-stretch profile-block-background">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center">
                        <img src="https://via.placeholder.com/150" alt="" class="profile-picture mx-auto mt-3" />
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-1">
                        <p class="user-name-text text-left mb-0">{{user.last_name}} {{user.first_name}}</p>
                    </div>
                    <div  v-if="user.middle_name != '' " class="col-12 d-flex justify-content-center">
                        <p class="user-name-text text-left mb-0 text-break">{{user.middle_name}}</p>
                    </div>
                    <div class="col-12 mt-1 mb-2">
                        <p class="user-emal-text text-center mb-0 text-break">{{user.email}}</p>
                    </div>
                    <div v-if="user.about != ''" class="col-12 mt-2 px-md-4">
                        <p class="about-header-text text-left mb-0 px-1 text-break">Обо мне:</p>
                    </div>
                    <div class="col-12 mt-1 px-md-4">
                        <p class="about-text text-left mb-0 px-1 text-break mb-3">{{user.about}}</p>
                    </div>
                    <div class="col-12 mt-2 px-md-4">
                        <p class="about-header-text text-left mb-0 text-break">Адрес кошелька:</p>
                    </div>
                    <div class="col-12 mt-1 mb-3 px-md-4">
                        <a @click="redirectToHistory()" class="user-wallet-text text-left mb-0 text-break link-info">{{user.wallet_addres}}</a>
                    </div>
                    <div class="col-12 mt-2 px-md-4">
                        <p class="about-header-text text-left mb-0 text-break">Баланс:</p>
                    </div>
                    <div class="col-12 mt-1 mb-3 px-md-4">
                        <!-- Тут надо вывести баланс -->
                        <p class="user-wallet-text text-left mb-0 text-break">{{user.coinsAmount}}D</p>
                    </div>
                </div>
            </div>
            <div class="d-lg-none mb-4"></div>
            <div class="col-lg-8 ms-auto align-items-stretch profile-block-background">
                <form class="row g-3" @submit.prevent="checkForm">
                    <div class="col-md-6 pe-md-3 ps-md-4">
                        <label for="inputName" class="form-label label-text mt-4 header-text">Имя</label>
                        <input
                            type="text" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputName" 
                            placeholder="Введите имя"
                            name="inputName"
                            v-model="inputName"
                            
                        >
                    </div>
                    <div class="col-md-6 ps-md-3 pe-md-4">
                        <label for="inputSurname" class="form-label label-text mt-4 header-text">Фамилия</label>
                        <input 
                            type="text" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputSurname" 
                            placeholder="Введите фамилию"
                            name="inputSurname"
                            v-model="inputSurname"
                        >
                    </div>
                    <div class="col-md-6 pe-md-3 ps-md-4 mt-0">
                        <label for="inputSurname" class="form-label label-text mt-4 header-text">Отчество</label>
                        <input 
                            type="text" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputMiddleName" 
                            placeholder="Введите отчество"
                            name="inputMiddleName"
                            v-model="inputMiddleName"
                        >
                    </div>
                    <div class="col-md-6 pe-md-4 ps-md-3 mt-0">
                        <label for="inputEmail" class="form-label label-text mt-4 header-text">Эл. почта</label>
                        <input 
                            type="email" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputEmail" 
                            name="inputEmail"
                            placeholder="Введите эл. почту"
                            v-model="inputEmail"
                        >
                    </div>
                    <div class="col-md-6 pe-md-3 ps-md-4 mt-0">
                        <label for="inputBirthYear" class="form-label label-text mt-4 header-text">Дата рождения</label>
                        <input
                            type="date" 
                            class="form-control input-form text-start py-2 me-3 pe-0 header-text" 
                            id="inputBirthYear"
                            name="inputBirthYear"
                            v-model="inputBirthYear"
                        >
                    </div>
                    <div class="col-md-6 pe-md-3 ps-md-4 mt-0">
                        <label for="inputTelephoneNumber" class="form-label label-text mt-4 header-text">Номер телефона</label>
                        <input 
                            type="tel" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputTelephoneNumber"
                            name="inputTelephoneNumber" 
                            pattern="^\8\d{10}$" 
                            placeholder="81234567890"
                            v-model="inputTelephoneNumber"
                        >
                    </div>
                    <div class="d-md-none pt-2"></div>
                    <div class="d-none d-lg-block col-md-6"></div>
                    <div class="d-grid col-md-6 col-12 mx-auto pe-md-4 ps-md-3 py-md-4 pb-4">
                        <button class="btn btn-primary header-text" @click="checkForm()">Сохранить</button>
                    </div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-12 d-none d-lg-block"></div>
                    <div class="col-lg-6 d-none d-lg-block"></div>
                    <div class="col-lg-6 d-grid align-self-end mb-4">
                        <button @click="logout()" class="btn btn-info header-text">Выйти</button>
                    </div>
                </form>
            </div>
            <div class="d-lg-none mb-4"></div>
        </div>
        <div class="row">
            <nftCard 
                v-for="nft in userNFTs"
                v-bind:key="nft.id"
                v-bind:nft="nft"
            ></nftCard>
        </div>
        
    </div>
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
</template>

<script>
    import CustomHeader from '@/components/CustomHeader.vue';
    import nftCard from '@/components/ProfileComponents/nftCard.vue';
    import axios from 'axios';

    export default{
        name: 'ProfileMainComponent',
        components: {
            CustomHeader,
            nftCard
        },
        data: () => ({
            user: [],
            //userNFTs Получаем запросом на клиенте, по адрессу кошелька, полученному с сервера
            inputName: undefined,
            inputSurname: undefined,
            inputMiddleName: undefined,
            inputEmail: undefined,
            inputBirthYear: undefined,
            inputTelephoneNumber: undefined,
            baseUrl: 'http://127.0.0.1:5000',
            userNFTs: []
        }),
        methods: {
            relocateToEditCatalog(){                     
                this.$router.push("/editcatalog");
            },
            relocateToUserAdd(){
                this.$router.push("/useradd");
            },
            relocateToAddBalnce(){
                this.$router.push("/addbalnce");
            },
            relocateToAwardUser(){
                this.$router.push("/awarduser");
            },
            relocateToAddNews(){
                this.$router.push("/addnews");
            },
            relocateToAddEvent(){
                this.$router.push("/addevent");
            },
            logout(){
                localStorage.setItem('registredStatus', 'false');
                localStorage.setItem('token', '');
                this.$router.push("/");
            },
            redirectToHistory(){
                localStorage.setItem('public_key', this.user.wallet_addres);
                this.$router.push("/history");
            },
            putDataUser(){
                try{
                    const params = {
                        inputName: this.inputName,
                        inputSurname: this.inputSurname,
                        inputMiddleName: this.inputMiddleName,
                        inputEmail: this.inputEmail,
                        inputBirthYear: this.inputBirthYear,
                        inputTelephoneNumber: this.inputTelephoneNumber
                    };
                    axios.get(this.baseUrl + '/api/', params).then(response => (console.log(response.data)));
                }
                catch(error){
                    console.log(error);
                }
            },
            writeNFTS(data){
                let temp = [];
                const balance = data.balance;
                balance.forEach(function(item, i, balance) {
                    //console.log(item.tokens, i, balance);
                    temp = temp.concat(item.tokens);
                });
                this.userNFTs = temp;
            },
        },
        created:
            async function(){
                const user_id = localStorage.getItem('registredStatus');
                try{
                    
                    let params = {"user_id": user_id};
                    await axios.post(this.baseUrl + '/api/user/info', params).then(response => (this.user = response.data.resp[0]));
                    console.log(this.user);
                }
                catch(error){
                    console.log(error);
                }
                let url = `https://hackathon.lsp.team/hk/v1/wallets/${this.user.wallet_addres}/nft/balance`
                try{
                    await axios.get(url).then(response => (this.writeNFTS(response.data)));
                }
                catch(error){
                    console.log(error);
                };
                try{
                    let baseUrl = 'http://127.0.0.1:5000';
                    let data = []
                    await axios.get(baseUrl + '/api/get/nfts').then(response => (data = response.data.resp));
                    console.log(data);
                    this.userNFTs = data;
                
                }
                    catch(error){
                    console.log(error);
                };
                
            }
    }
</script>

<style scoped>
    @media screen and (min-width: 576px) {
        #profile {
            padding-right: 3rem;
            padding-left: 5rem;
        }
    }
  
    @media screen and (min-width: 768px) {
        #profile {
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }
  
    @media screen and (min-width: 1200px) {
        #profile {
            padding-right: .5rem;
            padding-left: 1rem;
            width: 1100px;
        }
    }
    .profile-picture{
        border-radius: 100px;
    }
    .user-name-text{
        font-size: 18px;
        font-weight: 400;
    }
    .user-emal-text{
        font-size: 16px;
        font-weight: 400;
    }
    .about-header-text{
        font-size: 18px;
        font-weight: 600;
    }
    .about-text{
        font-size: 14px;
        font-weight: 400;
    }
    .user-wallet-text{
        font-size: 14px;
        font-weight: 400;
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
    .profile-block-background{
        background-color: white;
        border-radius: 16px;
    }
  </style>