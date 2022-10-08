<template>

    <div class="modal fade" :id="transaction.id" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-user-color">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Информация о транзакции {{transaction.blockNumber}}</h5>
                </div>
                <div class="modal-body">
                    <p class="user-name-text text-break" >Отправитель: {{transaction.from}}</p>
                    <!-- Тут нужно сделать функцию, котоаря будет перед открытием модаля получать информацию
                    о пользователе по его кошельку -->
                    <p class="user-name-text text-break" >Получатель: {{transaction.to}}</p>
                    <!-- Тут нужно сделать функцию, котоаря будет перед открытием модаля получать информацию
                    о пользователе по его кошельку -->
                    <p class="user-name-text text-break" >Количество: {{transaction.value}}</p>
                    <p class="text-break user-name-text text-break" >Токен: {{transaction.tokenSymbol}}</p>
                </div>
                <div class="modal-footer justify-content-end py-3">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="closeModal()">Закрыть</button>                 
                </div>
            </div>
        </div>
    </div>

    <tbody @click="showUserInfo()">
        <tr>
            <th class="ps-3 ms-0 user-name-text">
                {{transaction.blockNumber}}
            </th>
            <td class="user-name-text text-break">
                {{transaction.from}}
            </td>
            <td class="user-name-text text-break">
                {{transaction.to}}
            </td>
            <td class="user-name-text">
                {{transaction.value}}
            </td>
            <td class="user-name-text">
                {{transaction.tokenSymbol}}
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
        props: ['transaction'],
        methods: {
            showUserInfo(){
                if (!this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.transaction.id), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.show();
                    this.isModalOpen = true;
                }
            },
            closeModal(){
                if (this.isModalOpen) {
                    let myModal = new bootstrap.Modal(document.getElementById(this.transaction.id), {
                        keyboard: false,
                        focus: true
                    });
                    myModal.hide();
                    this.isModalOpen = false;
                }
            }
        },
        components: {
        },
    }
</script>

<style scoped>
    .btn-danger {
        background-color: #ffffff;
        border-color: #00aaff;
        color: black;
    }
    .btn-danger:hover {
        background-color: #ffffff;
        border-color: #00aaff;
        box-shadow: 0px 0px 15px #00aaff;
        color: black;
    }
</style>