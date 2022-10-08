<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <nav class="navbar navbar-inverse fixed-bottom mob-custom-border">
        <div class="container-fluid">
            <div class="container-fluid">
                <transition name="bounce">
                    <div v-show="open">
                        <div class="row default-text mb-2">
                            <div class="mb-1">
                                <ul class="navbar-nav">
                                <li class="nav-item pb-2">
                                    <router-link to="/news" class="default-text" active-class="active">НОВОСТИ</router-link>
                                </li>
                                <li class="nav-item pb-2">
                                    <router-link to="/events" class="default-text" active-class="active">МЕРОПРИЯТИЯ</router-link>
                                </li>
                                <li class="nav-item pb-2">
                                    <router-link to="/achievements" class="default-text" active-class="active">ДОСТИЖЕНИЯ</router-link>
                                </li>
                                <li class="nav-item pb-2">
                                    <router-link to="/catalog" class="default-text" active-class="active">КАТАЛОГ</router-link>
                                </li>
                                <li class="nav-item pb-2">
                                    <router-link to="/swap" class="default-text" active-class="active">ОБМЕН</router-link>
                                </li>
                                <li class="nav-item pb-2">
                                    <router-link to="/rating" class="default-text" active-class="active">РЕЙТИНГ</router-link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </transition>
                <div v-if="registredStatus === 'false'">
                    <div class="row">
                        <div v-if="day_mode" class="col-2 d-flex justify-content-end">
                            <i class="bi bi-brightness-high default-text" style="font-size: 32px;" @click="changeMode()"></i>
                        </div>
                        <div v-else class="col-2 d-flex justify-content-end">
                            <i class="bi bi-moon default-text" style="font-size: 32px;" @click="changeMode()"></i>
                        </div>
                        <div class="col-2 d-flex justify-content-center"></div>
                        <div class="col-4 d-flex justify-content-center"></div>
                        <div class="col-2 d-flex justify-content-start"></div>
                        <div class="col-2 d-flex justify-content-center">
                            <router-link to="/login" class="default-text" active-class="active">
                                <i class="bi bi-box-arrow-in-right" style="font-size: 32px;"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="row d-flex justify-content-between">
                        <div v-if="!open" class="col-3 d-flex justify-content-center">
                            <i class="bi bi-chevron-double-up default-text align-self-center" style="font-size: 32px;" @click="openNavBar()"></i>
                        </div>
                        <div v-else class="col-3 d-flex justify-content-center">
                            <i class="bi bi-chevron-down  default-tex " style="font-size: 32px;" @click="openNavBar()"></i>
                        </div>
                        <div v-if="day_mode" class="col-3 d-flex justify-content-center">
                            <i class="bi bi-brightness-high default-text" style="font-size: 32px;" @click="changeMode()"></i>
                        </div>
                        <div v-else class="col-3 d-flex justify-content-center">
                            <i class="bi bi-moon default-text" style="font-size: 32px;" @click="changeMode()"></i>
                        </div>
                        <div class="col-3 d-flex justify-content-center">
                             <i class="bi bi-bell default-text" style="font-size: 32px;"></i>
                        </div>
                        <div class="col-3 d-flex justify-content-center">
                            <router-link to="/profile" class="default-text" active-class="active">
                                <i class="bi bi-person-circle default-text" style="font-size: 32px;"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
  data: () => ({
    open: false,
    day_mode: true
  }),
  props: ['registredStatus', 'token'],
  mounted(){
    let activeTheme = localStorage.getItem('day_mode');
    if(activeTheme === null || activeTheme === 'true') {
        this.day_mode = true;
        this._removeDarkTheme();
    } else if (activeTheme === 'false') {
        this.day_mode = false;
        this._removeDarkTheme();
        this._addDarkTheme();
    }
  },
  methods: {
    openNavBar() {
        this.open = !this.open;
        console.log(this.open)
    },
    _addDarkTheme() {
            let darkThemeLinkEl = document.createElement("link");
            darkThemeLinkEl.setAttribute("rel", "stylesheet");
            darkThemeLinkEl.setAttribute("href", "/darktheme.css");
            darkThemeLinkEl.setAttribute("id", "dark-theme-style");
            localStorage.setItem('day_mode', 'false');
            this.day_mode = false;
            let docHead = document.querySelector("head");
            docHead.append(darkThemeLinkEl);
        },
        _removeDarkTheme() {
            try {
                this.day_mode = true;
                let darkThemeLinkEl = document.querySelector("#dark-theme-style");
                let parentNode = darkThemeLinkEl.parentNode;
                localStorage.setItem('day_mode', 'true');
                
                parentNode.removeChild(darkThemeLinkEl);
            }catch(e){}
        },
        changeMode(){            
            let activeTheme = localStorage.getItem('day_mode');
            if(activeTheme === null || activeTheme === 'true')
            { 
                this.day_mode = true;
                this._addDarkTheme();
                
            } else if (activeTheme === 'false')
            {
                this.day_mode = false;
                this._removeDarkTheme();
            }
        }
    }
}
</script>

<style scoped>
    .active{
        color: #00AAFF;
    }
    .mob-placement {
        overflow: hidden;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>

<style>

    .mob-custom-border{
        border-top: #00AAFF;
        border-bottom: #fff;
        border-top-style: solid;
        border-width: 3px;
        background-color: #FFFFFF;
        padding-bottom: 25px;
        margin-bottom: 0px;
    }
    .default-text{
        color: #000;
        text-decoration: none;
    }

    .default-text:hover{
        color: #00AAFF;
    }

    .disabled:hover{
        color: #000;
    }

    .active{
        color: #00AAFF;
    }
    .bounce-enter-active {
    animation: bounce-in .2s;
    }
    .bounce-leave-active {
    animation: bounce-in .2s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
    }
</style>
<!-- ---Шальнев Владимир--- -->