<template>
    <div class="d-none d-md-block px-2">
        <div class="border row my-1 py-2 px-3">
            <div class="col-lg-6 col-md-9 my-auto">
                <div class="d-flex flex-sm-row flex-column text-left">
                    <p class="filter mb-0 ms-sm-0 me-sm-3 text-nowrap default-text disabled">Сортировать по:</p>

                    <p v-if="popularSort === 'INCRESE' " class="filter mb-0 choose-text default-text sort-choosed" @click="sortPopular()">Популярности <i class="bi bi-sort-up ps-1"></i></p>
                    <p v-else-if="popularSort === 'DECRESE' " class="filter mb-0 choose-text default-text sort-choosed" @click="sortPopular()">Популярности <i class="bi bi-sort-down ps-1"></i></p>
                    <p v-else class="filter mb-0 choose-text default-text" @click="sortPopular()">Популярности</p>

                    <p v-if="priceSort === 'INCRESE' " class="filter mb-0 mx-sm-4 choose-text default-text sort-choosed" @click="sortPrice()">Цене <i class="bi bi-sort-up ps-1"></i></p>
                    <p v-else-if="priceSort  === 'DECRESE' " class="filter mb-0 mx-sm-4 choose-text default-text sort-choosed" @click="sortPrice()">Цене <i class="bi bi-sort-down ps-1"></i></p>
                    <p v-else class="filter mb-0 mx-sm-4 choose-text default-text" @click="sortPrice()">Цене</p>

                    <p v-if="newnessSort === 'INCRESE' " class="filter mb-0 me-2 choose-text default-text sort-choosed" @click="sortNewness()">Новизне <i class="bi bi-sort-up ps-1"></i></p>
                    <p v-else-if="newnessSort  === 'DECRESE' " class="filter mb-0 me-2 choose-text default-text sort-choosed" @click="sortNewness()">Новизне <i class="bi bi-sort-down ps-1"></i></p>
                    <p v-else class="filter mb-0 me-2 choose-text default-text" @click="sortNewness()">Новизне</p>
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
                                <p v-if="popularSort === 'INCRESE' " class="default-text mb-1 choose-text default-text sort-choosed" @click="sortPopular()">Популярности <i class="bi bi-sort-up ps-1"></i></p >
                                <p v-else-if="popularSort === 'DECRESE' " class="default-text mb-1 choose-text default-text sort-choosed" @click="sortPopular()">Популярности <i class="bi bi-sort-down ps-1"></i></p >
                                <p v-else class="default-text mb-1 choose-text default-text" @click="sortPopular()">Популярности</p >
                            </li>
                            <li class="nav-item">
                                <p v-if="priceSort === 'INCRESE' " class="default-text mb-1 choose-text default-text sort-choosed" @click="sortPrice()">Цене <i class="bi bi-sort-up ps-1"></i></p >
                                <p v-else-if="priceSort === 'DECRESE' " class="default-text mb-1 choose-text default-text sort-choosed" @click="sortPrice()">Цене <i class="bi bi-sort-down ps-1"></i></p >
                                <p v-else class="default-text mb-1 choose-text default-text" @click="sortPrice()">Цене</p >
                            </li>
                            <li class="nav-item">
                                <p v-if="newnessSort === 'INCRESE' " class="default-text mb-1 choose-text default-text sort-choosed" @click="sortNewness()">Новизне <i class="bi bi-sort-up ps-1"></i></p >
                                <p v-else-if="newnessSort === 'DECRESE' " class="default-text mb-1 choose-text default-text sort-choosed" @click="sortNewness()">Новизне <i class="bi bi-sort-down ps-1"></i></p >
                                <p v-else class="default-text mb-1 choose-text default-text" @click="sortNewness()">Новизне</p >
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
                isFilterOpen: "NO",
                popularSort: "INCRESE",
                priceSort: "NO",
                newnessSort: "NO",
            }
        },
        methods: {
            sortPopular(){
                if (this.popularSort === "INCRESE") {
                    this.popularSort = "DECRESE";
                }
                else if (this.popularSort === "DECRESE") {
                    this.popularSort = "INCRESE";
                }
                else{
                    this.popularSort = "DECRESE";
                    this.newnessSort = "NO";
                    this.priceSort = "NO";
                }
                this.$emit('getData', {popularSort: this.popularSort, priceSort: this.priceSort, newnessSort: this.newnessSort, amount: false})
            },
            sortPrice(){
                if (this.priceSort === "INCRESE") {
                    this.priceSort = "DECRESE";
                }
                else if (this.priceSort === "DECRESE") {
                    this.priceSort = "INCRESE";
                }
                else{
                    this.priceSort = "DECRESE";
                    this.newnessSort = "NO";
                    this.popularSort = "NO";
                }
                this.$emit('getData', {popularSort: this.popularSort, priceSort: this.priceSort, newnessSort: this.newnessSort, amount: false})
            },
            sortNewness(){
                if (this.newnessSort === "INCRESE") {
                    this.newnessSort = "DECRESE";
                }
                else if (this.newnessSort === "DECRESE") {
                    this.newnessSort = "INCRESE";
                }
                else{
                    this.newnessSort = "DECRESE";
                    this.popularSort = "NO";
                    this.priceSort = "NO";
                }
                this.$emit('getData', {popularSort: this.popularSort, priceSort: this.priceSort, newnessSort: this.newnessSort, amount: false})
            },
            openFilter(){
                this.isFilterOpen = !this.isFilterOpen;
            }
        },
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
    .sort-choosed{
        color: #00AAFF;
    }
</style>