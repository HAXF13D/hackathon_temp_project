<template>
    <!-- +++ Духно Михаил misha.duhno@mail.ru +++ -->
    <div class="container-xl container-fluid justify-content-center my-4">
        <!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
        <CustomHeader title='Обмен'/>
        <!-- ---Шальнев Владимир--- -->
        <div class="row justify-content-center my-5">
            <div id="main_div" class="col-11 col-md-7 col-xl-4 pt-5 pb-5">
                <div class="row mb-3 justify-content-center pb-2">
                    <div id="input" class="col-10">
                        <div class="row">
                            <div id="balance" class="col-12 mt-1 ">
                                <p class="m-0 default-text disabled">Баланс: {{balance1.toFixed(2)}}</p>
                            </div>
                        </div>
                        <div class="row pb-4 ml-1">
                            <div class="col-8 col-md-7 col-xl-7">
                                <div class="row m-0">
                                    <div id="valute_sign" class="col-2 col-sm-4 col-md-3 col-xl-4 mt-1 p-0">
                                        <img :src="icon1" class=""/>
                                    </div>
                                    <div id="val_name" class="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <p class="mb-0 mt-1 default-text disabled">{{valute1}}</p>
                                    </div>
                                    <div id="full" class="col-4 col-sm-3 col-md-4 col-lg-3 col-xl-3 mt-2">
                                        <p class="mt-1 mb-1 default-text">Макс.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-md-5 col-xl-5 default-text">
                                <input class="default-text" type="number"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mb-3" >
                    <div class="col-2 col-sm-1 justify-content-center p-1" v-on:click="replaceValutes()">
                        <img id="change" class="default-text disabled" src="@/assets/arrow-down-up.png"/>
                    </div>
                </div>
                <div class="row mb-3 justify-content-center pb-2">
                    <div id="input" class="col-10">
                        <div class="row">
                            <div id="balance" class="col-12 mt-1">
                                <p class="m-0 default-text disabled">Баланс: {{balance2.toFixed(2)}}</p>
                            </div>
                        </div>
                        <div class="row pb-4 ml-1">
                            <div class="col-8 col-md-7 col-xl-7">
                                <div class="row m-0">
                                    <div id="valute_sign" class="col-2 col-sm-4 col-md-3 col-xl-4 mt-1 p-0">
                                        <img :src="icon2" class=""/>
                                    </div>
                                    <div id="val_name" class="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <p class="mb-0 mt-1 default-text disabled">{{valute2}}</p>
                                    </div>
                                    <div id="full" class="col-4 col-sm-3 col-md-4 col-lg-3 col-xl-3 mt-2">
                                        <p class="mt-1 mb-1 default-text">Макс.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-md-5 col-xl-5">
                                <input class="default-text" type="number"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="d-grid gap-2 col-10 mx-auto p-1 button_change">
                        <button class="btn btn-primary p-3 default-text button-hover-color" type="button">Обмен</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ---Духно Михаил--- -->
</template>


<script>
  import CustomHeader from '@/components/CustomHeader.vue';
  export default {
    name: 'ChangerComp',
    data(){
      return{
        balance1: 500,
        valute1: 'RUB',
        icon1: require('@/assets/analog.png'),
        balance2: 3234,
        valute2: 'DRB',
        icon2: require('@/assets/digital.png'),
    }
    },
    components: {
        CustomHeader
    },
    methods:{
        replaceValutes(){
            let balance = this.balance1;
            let valute = this.valute1;
            let icon = this.icon1;
            this.balance1 = this.balance2;
            this.valute1 = this.valute2;
            this.icon1 = this.icon2;
            this.balance2 = balance;
            this.valute2 = valute;
            this.icon2 = icon;
        },
    }
  
  }
</script>
  
<style>
.button-hover-color:hover{
    background-color:#007DFF;
}
.container{
    text-align: left;
}
#input{
    background-color:#007DFF;
    border-radius:16px;
}
#input input{
    width: 100%;
    height:100%;
    background-color:#007DFF;
    border: 0px;
}
#change{
    background-color:#00AAFF;
    border-radius:180px;
    padding:30%;
}
#change:active{
    background-color:#006ea5;
}
#balance{
    text-align: right;
    font-family: Ubuntu;
    font-weight: lighter;
    font-size: 12px;
    padding-right: 8%
}
.balance p{
    font-size: 12;
}
#valute{
    text-align:center;
}
#val_name{
    border-right:1px solid #000000;
    text-align: right;
    font-size:20px;
}
#main_div{
    background-color:#FFFFFF;
    border-radius: 16px;
}
.btn{
    background-color: #00AAFF;
    color: #000000;
    border-radius: 16px;
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 16px;
}
.btn:active{
    background-color: #006ea5;
}
#full{
    background-color: #00AAFF;
    border-radius:5px;
    height:23px;
    margin-left:5%;
    text-align: center;
}
#full:active{
    background-color: #006ea5;
}
#full p{
   font-size: 10px; 
}
input{
    text-align: right;
}
@media screen and (min-width: 576px){
    #valute_sign img{
        margin-left: 60%;
    }
    
}
@media screen and (min-width: 768px){
    #valute_sign img{
        margin-left: 15%;
    }
}
@media screen and (min-width: 1200px){
    #valute_sign img{
        margin-left: 60%;
    }
    #val_name{
        padding-right: 5%;
    }
}
.default-text{
        color: #000;
        text-decoration: none;
}
</style>