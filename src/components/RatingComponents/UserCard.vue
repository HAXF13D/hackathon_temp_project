<template >

    <div class="modal fade" :id="user.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content modal-user-color">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Информация о пользователе  {{user.lastName}} {{ user.firstName }} {{user.middleName}}</h5>
            </div>
            <div class="modal-body">
                <p class="default-text disabled" >Информация о пользователе: {{user.about}}</p>
                <p class="default-text disabled" >Баланс: {{user.moneyAmount}} D</p>
                <p class="default-text disabled text-break" >Адрес кошелька: {{user.walletAdress}}</p>
            </div>
            <div class="modal-footer justify-content-between">
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
</style>

<style>
    .modal-user-color{
        background-color: white !important; 
    }
</style>