<template>
    <div class="d-none d-md-block px-2">
        <div class="border row my-1 py-2 px-3">
            <div class="col-lg-6 col-md-9 my-auto">
                <div class="d-flex flex-sm-row flex-column text-left">
                    <p class="filter mb-0 ms-sm-0 me-sm-3 text-nowrap default-text disabled">Сортировать по:</p>
                    <p class="filter mb-0 choose-text default-text" @click="sortPopular()">Популярности</p>
                    <p class="filter mb-0 mx-sm-4 choose-text default-text" @click="sortPrice()">Цене</p>
                    <p class="filter mb-0 me-2 choose-text default-text" @click="sortNew()">Новизне</p>
                </div>
            </div>
            <div class="col-lg-3 d-md-none d-lg-block"></div>
            <div class="col-lg-3 col-md-3 search p-0 m-0">
                <div class="input-group">
                    <input type="text" class="form-control search text-start py-1 selected-text" placeholder="Поиск" aria-describedby="search-btn">
                    <button class="btn btn-outline-secondary search py-1 selected-text" type="button" id="search-btn"><i class="bi bi-search me-1 selected-text" style="font-size: 18px;"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="d-md-none px-2">
        <div class="border row my-1 py-2 px-3">
            <div class="col-sm-7 col-2">
                <i class="bi bi-funnel choose-text default-text" @click="openFilter()" style="font-size: 24px;"></i>
            </div>
            <div class="col-4 d-block d-sm-none"></div>
            <div class="col-sm-5 col-6 search p-0 m-0">
                <div class="input-group">
                    <input type="text" class="form-control search text-start py-1 selected-text" placeholder="Поиск" aria-describedby="search-btn">
                    <button class="btn btn-outline-secondary search py-1 selected-text" type="button" id="search-btn"><i class="bi bi-search me-1 selected-text" style="font-size: 18px;"></i></button>
                </div>
            </div>
            <transition name="bounce">
                <div v-show="isFilterOpen">
                    <div class="row default-text ps-2">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <p class="default-text mb-1 choose-text default-text" @click="sortPopular()">Популярности</p >
                            </li>
                            <li class="nav-item">
                                <p class="default-text mb-1 choose-text default-text" @click="sortPrice()">Цене</p >
                            </li>
                            <li class="nav-item">
                                <p class="default-text mb-1 choose-text default-text" @click="sortNew()">Новизне</p >
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name:'search',
        data() {
            return {
                isFilterOpen: false
            }
        },
        methods: {
            sortPopular(){
                console.log("sort_popular");
            },
            sortPrice(){
                console.log("sort_price");
            },
            sortNew(){
                console.log("sort_new");
            },
            openFilter(){
                this.isFilterOpen = !this.isFilterOpen;
            }
        }
    }
</script>

<style scoped>
    .search{
        border-radius: 16px;
        background-color: #00AAFF;
        border-width: 0px;
    }
    .filter {
        font-size: 14px;
    }
</style>

<style>
    .form-control::-webkit-input-placeholder {
        color: #000;
    }
    .border {
        background-color: #FFF;
        border-radius: 16px;
        border-width: 0px !important;
    }
    .selected-text{
        color:#000
    }
    .default-text:hover{
        color: #000;
    }
    .choose-text:hover{
        color: #00AAFF;
    }
</style>