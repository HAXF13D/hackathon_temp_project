<template>
    <div class="modal fade" :id="event.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content test">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Записаться на {{ event.header.toLowerCase() }}?</h5>
            </div>
            <div class="modal-body">
                <p class="default-text disabled" >Мероприятие пройдет: {{ event.date_time }} </p>
                <p class="default-text disabled" >Награда за мероприятие: {{ event.award }} </p>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-success default-text" data-bs-dismiss="modal" @click="registerToEvent()">Записаться</button>
                <button type="button" class="btn btn-danger default-text" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>
            </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center mt-5">
        <div class="col-11 col-sm-8 col-xl-9 px-4 news-post test cursor-pointer" @click="showEventSignUP">
            <div class="row mt-3">
                <div class="col-12">
                <h2 class="default-text disabled">{{event.header}}</h2>
                </div>
            </div>
            <div class="row mt-3" v-if="event.img != ''">
                <div class="col-12">
                <img :src="require('@/assets/' + event.img)"/>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 post-descr">
                <p class="default-text disabled">{{event.descr}}</p>
                </div>
            </div>
            <div v-if="event.award" class="row mt-3">
                <div class="col-6 align-middle">
                    <p class="text-start fw-bold align-top default-text disabled">Дата проведения: {{event.date_time}}</p>
                </div>
                <div class="col-6 align-middle">
                    <p class="text-end fw-bold align-top default-text disabled">Награда: {{event.award}}</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    import { useToast } from "vue-toastification";

    export default {
        name: "events",
        setup(){
            const toast = useToast();
            return { toast }
        },
        data: () => ({
            isModalOpen: false,
        }),
        props: ['event'],
        methods: {
            showEventSignUP(){
                if (this.event.award){
                    if (!this.isModalOpen) {
                        let myModal = new bootstrap.Modal(document.getElementById(this.event.id), {
                            keyboard: false,
                            focus: true
                        });
                        myModal.show();
                        this.isModalOpen = true;
                    }
                }
            },
            closeModal(){
                let myModal = new bootstrap.Modal(document.getElementById(this.event.id), {
                    keyboard: false,

                });
                myModal.hide();
                this.isModalOpen = false;
                
            },
            registerToEvent(){
                console.log(1);
                let myModal = new bootstrap.Modal(document.getElementById(this.event.id), {
                    keyboard: false,

                });
                myModal.hide();
                this.isModalOpen = false;
                //this.toast.info("I'm an info toast!");
                // Обработка записи
                this.toast.success("Запись прошла успешно!", {
                    position: "bottom-right",
                    timeout: 2970,
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
        beforeCreate(){
            if (this.event.award){
                let pointerBoxLink = document.createElement("link");
                pointerBoxLink.setAttribute("rel", "stylesheet");
                pointerBoxLink.setAttribute("href", "/pointer.css");
                pointerBoxLink.setAttribute("id", "event-pointer-style");
                let docHead = document.querySelector("head");
                docHead.append(pointerBoxLink);
            }
        },
        beforeUnmount(){
            try {
                let pointerBoxLink = document.querySelector("#event-pointer-style");
                let parentNode = pointerBoxLink.parentNode;                
                parentNode.removeChild(pointerBoxLink);
            }catch(e){}
        }
    }
</script>

<style scoped>
    .btn-danger {
        background-color: #dc3545;
    }
    .btn-success {
        background-color: #4caf50;
    }
    .news-post img{
        width: 100%;
    }
    .post-descr{
        font-weight: lighter;
    }
</style>

<style>
    .default-text{
        color: #000;
        text-decoration: none;
    }
    .default-text{
          color: #000;
          text-decoration: none;
    }
    .news-post{
      border-radius: 16px;
      background-color: #FFF;
    }
</style>