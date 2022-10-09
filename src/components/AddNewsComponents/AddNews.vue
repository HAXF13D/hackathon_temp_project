<template>
    <CustomHeader title="Добавить новость" class="pt-0 mt-4" />
    <div id="add-news" class="container-fluid">
        <div class="row">
            <div class="col-xl-3"></div>
            <div class="col-xl-6 mt-4 add-news" id="main_div">
                <form class="row g-3" @submit.prevent="checkForm">
                    <div class="col-12 px-4">
                        <label for="inputName" class="form-label label-text mt-4 header-text">Заголовок новости</label>
                        <input
                            required 
                            type="text" 
                            class="form-control input-form text-start py-2 me-3 pe-0" 
                            id="inputName"
                            name="inputName"
                            placeholder="Заголовок новости"
                            v-model="inputHeader"
                            
                        >
                    </div>
                    <div class="col-12 px-4 mt-3">
                        <label for="inputSurname" class="form-label label-text mt-0 header-text">Текст новости</label>
                        <textarea
                            required 
                            type="text"
                            rows="10"
                            class="form-control input-form text-start" 
                            id="inputSurname" 
                            placeholder="Текст новости"
                            name="inputSurname"
                            v-model="inputNewsText"
                        ></textarea>
                    </div>
                    <div class="mb-3 px-4 mb-0">
                        <label for="formFileSm" class="form-label label-text header-text">Фото для новости</label>
                        <input class="form-control form-control-sm" id="formFileSm" type="file" ref="newsImage" @change="handleFileUpload()">
                    </div>
                    <div class="d-grid col-12 mx-auto px-4 pb-4">
                        <button class="btn btn-primary header-text" @click="addNews()">Добавить новость</button>
                    </div>
                </form>
            </div>
            <div class="col-xl-3"></div>
        </div>
    </div>
    <div class=".d-block .d-sm-none" style="margin-bottom: 100px;"></div>
</template>

<script>

    import CustomHeader from '@/components/CustomHeader.vue';
    import axios from 'axios';
    import { useToast } from "vue-toastification";

    export default {
        name: 'addnews',
        components: {
            CustomHeader
        },
        data: () => ({
            inputHeader: undefined,
            inputNewsText: undefined,
            file: undefined,
            baseUrl: 'http://127.0.0.1:5000',
        }),
        setup(){
            const toast = useToast();
            return { toast }
        },
        methods: {
            handleFileUpload(){
                this.file = this.$refs.newsImage.files[0];
            },
            addNews(){
                console.log(this.file);
                this.putDataNews();
            },
            putDataNews(){
                try{
                    const params = {
                        header: this.inputHeader,
                        description: this.inputNewsText,
                        image: this.file === undefined ? '' : "text",
                    };
                    axios.post(this.baseUrl + '/api/add/news', params).then(response => (console.log(response.data)));
                    this.toast.success(`Мероприятие добавлено!`, {
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
                catch(error){
                    console.log(error);
                };
            },
        }
  }
</script>
    
<style scoped>
   @media screen and (min-width: 576px) {
        #add-news {
            padding-right: 3rem;
            padding-left: 5rem;
        }
    }
  
    @media screen and (min-width: 768px) {
        #add-news {
            padding-right: 7rem;
            padding-left: 7rem;
        }
    }
  
    @media screen and (min-width: 1200px) {
        #add-news {
            padding-right: .5rem;
            padding-left: 1rem;
            width: 1100px;
        }
    } 
</style>

<style>
    .add-news{
        background-color: white;
    }
    .input-form{
        background: rgba(0, 125, 254, 0.6);
    }
</style>