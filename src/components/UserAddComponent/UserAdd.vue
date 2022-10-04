<template>
    <CustomHeader title="Добавление нового пользователя" class="pt-0 my-4" />
    <div id="useraddblock"  class="container-fluid justify-content-center">

        <div class="row mt-sm-5">
            <div class="col-xl-3"></div>
            <div class="col-xl-6 mt-5 user-add-border">
                <form class="row g-3" @submit.prevent="checkForm">
                    <div class="col-md-6 pe-md-3 ps-md-4">
                        <label for="inputName" class="form-label label-text mt-4">Имя</label>
                        <input 
                            required type="text" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputName" 
                            placeholder="Иван"
                            name="inputName"
                        >
                    </div>
                    <div class="col-md-6 ps-md-3 pe-md-4">
                        <label for="inputSurname" class="form-label label-text mt-4">Фамилия</label>
                        <input 
                            required type="text" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputSurname" 
                            placeholder="Иванов"
                            name="inputSurname"
                        >
                    </div>
                    <div class="col-md-6 pe-md-3 ps-md-4 mt-0">
                        <label for="inputBirthYear" class="form-label label-text mt-4">Дата рождения</label>
                        <input 
                            required type="date" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputBirthYear"
                            name="inputBirthYear"
                        >
                    </div>
                    <div class="col-md-6 ps-md-3 pe-md-4 mt-0">
                        <label for="inputSex" class="form-label label-text mt-4 d-flex">Пол</label>
                        <div class="d-flex justify-content-start mt-3">
                            <div class="form-check form-check-inline me-md-2">
                                <input 
                                    required class="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inputSex1" 
                                    value="male"
                                >
                                <label class="form-check-label sex-checkbox" for="inlineRadio1">Мужской</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input 
                                    required class="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inputSex2" 
                                    value="famale"
                                >
                                <label class="form-check-label sex-checkbox" for="inlineRadio2">Женский</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 pe-md-3 ps-md-4 mt-0">
                        <label for="inputEmail" class="form-label label-text mt-4">Эл. адрес</label>
                        <input 
                            type="email" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputEmail" 
                            name="inputEmail"
                            placeholder="example@mail.com"
                        >
                    </div>
                    <div class="col-md-6 ps-md-3 pe-md-4 mt-0">
                        <label for="inputTelephoneNumber" class="form-label label-text mt-4">Номер телефона</label>
                        <input 
                            type="tel" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputTelephoneNumber"
                            name="inputTelephoneNumber" 
                            pattern="^\8\d{10}$" 
                            placeholder="81234567890"
                        >
                    </div>
                    <div class="d-grid col-12 mx-auto px-md-4 py-4">
                        <button class="btn btn-primary">Сгенерировать пароль</button>
                    </div>
                </form>
            </div>
            <div class="col-xl-3"></div>
        </div>
        <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
    </div>
</template>

<script>

    import CustomHeader from '@/components/CustomHeader.vue';

    export default{
        name: 'useradd',
        data(){
            return {
                form: {
                    inputName: '',
                    inputSurname: '',
                    inputBirthYear: '',
                    inlineRadioOptions: '',
                    inputEmail: '',
                    inputTelephoneNumber: ''
                }
            }
        },
        components: {
            CustomHeader
        },
        methods:{
            addUser(event){
                event.preventDefault();
                console.log(this.inputName);
            },
            checkForm(event){
                console.log("JOPA")
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 576px) {
        #useraddblock {
            padding-right: 3rem;
            padding-left: 5rem;
        }
    }

    @media screen and (min-width: 768px) {
        #useraddblock {
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }

    @media screen and (min-width: 1200px) {
        #useraddblock {
            padding-right: .5rem;
            padding-left: 1rem;
            width: 1100px;
        }
    }
</style>

<style>
    .user-add-border {
        background-color: #FFF;
        border-radius: 16px;
        border-width: 0px !important;
    }
    .label-text{
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
    }
    .input-form{
        border-radius: 16px;
        border-width: 0px !important;
        background-color: #007DFF;
    }
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        padding-right: 5%;
    }
    .sex-checkbox{
        font-weight: 300;
        font-size: 16px;
        line-height: 18px;
    }
</style>