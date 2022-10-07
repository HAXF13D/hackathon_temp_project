<!-- +++ Шальнев Владимир vovik0312@gmail.com +++ -->
<template>
    <div class="Navigation">
        <div>
            <nav class="navbar navbar-expand-xl d-none d-xl-block custom-border">
                <div class="container justify-content-center">
                    <div class="con-hight">
                        <div class="row">
                            <div class="logo-margin col">
                                <a class="navbar-brand" href="/">
                                    <img class="" src="@/assets/VTB_logo.svg" alt="" width="92" height="32"/>
                                </a>
                            </div>
                            <div class="col">
                                <div v-if="registredStatus === 'false'">
                                    <div class="void"></div>
                                </div>
                                <div v-else>
                                    <div class="first-word-margin">
                                        <router-link to="/news" class="default-text text-margin" active-class="active">НОВОСТИ</router-link>
                                        <router-link to="/events" class="default-text text-margin" active-class="active">МЕРОПРИЯТИЯ</router-link>
                                        <router-link to="/achievements" class="default-text text-margin" active-class="active">ДОСТИЖЕНИЯ</router-link>
                                        <router-link to="/catalog" class="default-text text-margin" active-class="active">КАТАЛОГ</router-link>
                                        <router-link to="/swap" class="default-text text-margin" active-class="active">ОБМЕН</router-link>
                                        <router-link to="/rating" class="default-text text-margin" active-class="active" style="margin-right: 0px;">РЕЙТИНГ</router-link>
                                    </div>
                                </div>                                
                            </div>
                            <div class="col">
                                <div class=" icons-margin-top">
                                    <div v-if="registredStatus === 'false'">
                                        <ul class="navbar-nav">
                                            <div v-if="day_mode">
                                                <li class="nav-item"> 
                                                    <i class="bi bi-brightness-high default-text disabled" style="font-size: 24px; margin-right: 24px; margin-left: 112px;" @click="changeMode()"></i>
                                                </li>
                                            </div>
                                            <div v-else>
                                                <li class="nav-item">
                                                    <i class="bi bi-moon default-text disabled" style="font-size: 24px;  margin-right: 24px; margin-left: 112px;" @click="changeMode()"></i>
                                                </li>
                                            </div>
                                            <li class="nav-item">
                                                <router-link to="/login" class="default-text" active-class="active">
                                                    <i class="bi bi-box-arrow-in-right default-text bell-profile-margin" style="font-size: 24px; margin-right: 2px;"></i>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-else>
                                        <ul class="navbar-nav">
                                            <div v-if="day_mode">
                                                <li class="nav-item"> 
                                                    <i class="bi bi-brightness-high default-text disabled" style="font-size: 24px; margin-left: 64px;" @click="changeMode()"></i>
                                                </li>
                                            </div>
                                            <div v-else>
                                                <li class="nav-item">
                                                    <i class="bi bi-moon default-text disabled" style="font-size: 24px;  margin-left: 64px;" @click="changeMode()"></i>
                                                </li>
                                            </div>
                                            <li class="nav-item">
                                                <i 
                                                class="bi bi-bell default-text" style="font-size: 24px; margin-right: 24px; margin-left: 24px;"></i>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/profile" class="default-text" active-class="active">
                                                    <i class="bi bi-person-circle default-text bell-profile-margin" style="font-size: 24px; margin-right: 2px;"></i>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
            </nav>
        </div>
        
        <nav class="mob-custom-border navbar navbar-expand-xl d-none d-sm-block d-md-block d-lg-block d-xl-none">
            <div class="container-fluid">
                <div class="container-fluid">
                    <div v-if="registredStatus === 'false'">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-6">
                                <a class="navbar-brand" href="/">
                                    <img src="VTB_logo.svg" alt="" width="92" height="32"/>
                                </a>
                            </div>
                            <div class="col-2"></div>
                            <div v-if="day_mode" class="col-1">
                                <i class="bi bi-brightness-high default-text" style="font-size: 24px;" @click="changeMode()"></i>
                            </div>
                            <div v-else class="col-1">
                                <i class="bi bi-moon default-text" style="font-size: 24px;" @click="changeMode()"></i>
                            </div>
                            <div class="col-1">
                                <router-link to="/login" class="default-text" active-class="active">
                                    <i class="bi bi-box-arrow-in-right default-text bell-profile-margin" style="font-size: 24px;"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-6">
                                <a class="navbar-brand" href="/">
                                    <img src="VTB_logo.svg" alt="" width="92" height="32"/>
                                </a>
                            </div>
                            <div v-if="day_mode" class="col-1">
                                <i class="bi bi-brightness-high default-text" style="font-size: 24px;" @click="changeMode()"></i>
                            </div>
                            <div v-else class="col-1">
                                <i class="bi bi-moon default-text" style="font-size: 24px;" @click="changeMode()"></i>
                            </div>
                            <div class="col-1">
                                <i class="bi bi-bell default-text" style="font-size: 24px;"></i>
                            </div>
                            <div class="col-1">
                                <router-link to="/profile" class="default-text" active-class="active">
                                    <i class="bi bi-person-circle default-text bell-profile-margin" style="font-size: 24px;"></i>
                                </router-link>
                            </div>
                            <div class="col-2">
                                <button class="navbar-toggler default-text" @click="openNavBar()" type="button">
                                    <i class="bi bi-list" style="font-size: 24px;"></i>                         
                                </button>
                            </div>
                        </div>
                    </div>
                    <transition name="bounce">
                        <div v-show="open">
                            <div class="row default-text mt-3">
                                <div class="mt-2">
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
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    day_mode: true
  }),
  props: ['registredStatus', 'hashedStatus'],
  mounted(){
    console.log(this.registredStatus, 1);
    let activeTheme = localStorage.getItem('day_mode');
    if(activeTheme === null || activeTheme === 'true') {
        this.day_mode = true;
        this._removeDarkTheme();
    } else if (activeTheme === 'false') {
        this.day_mode = false;
        this._removeDarkTheme();
        this._addDarkTheme();
    }
    console.log(this.registredStatus, 1337);
  },
  methods: {
    openNavBar() {
        this.open = !this.open;
    },
    _addDarkTheme() {
        let darkThemeLinkEl = document.createElement("link");
        darkThemeLinkEl.setAttribute("rel", "stylesheet");
        darkThemeLinkEl.setAttribute("href", "/darktheme.css");
        darkThemeLinkEl.setAttribute("id", "dark-theme-style");
        let docHead = document.querySelector("head");
        docHead.append(darkThemeLinkEl);
        localStorage.setItem('day_mode', 'false');
        this.day_mode = false;
    },
    _removeDarkTheme() {
        try {
            
            let darkThemeLinkEl = document.querySelector("#dark-theme-style");
            let parentNode = darkThemeLinkEl.parentNode;
            parentNode.removeChild(darkThemeLinkEl);
            localStorage.setItem('day_mode', 'true');
            this.day_mode = true;
            console.log('uiu');
        }catch(e){}
    },
    changeMode(){  
        let activeTheme = localStorage.getItem('day_mode');
        console.log(activeTheme);
        if(activeTheme === null || activeTheme === 'true')
        { 
            this.day_mode = true;
            this._addDarkTheme();
            
        } else if (activeTheme === 'false')
        {
            console.log('test');
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
    .void{
        margin-left: 721.96px;
        padding: 0px;
    }
</style>

<style>
    
    .bounce-enter-active {
        animation: bounce-in .4s;
    }
    .bounce-leave-active {
        animation: bounce-in .4s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .bell-profile-margin{
        margin-top: 19px;
        margin-bottom: 16px;
    }

    .icons-margin-top{
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .first-word-margin{
        margin-left: 26px;
        margin-top: 23px;
        margin-bottom: 23px;
    }

    .text-margin{
        margin-right: 38px;
    }

    .logo-margin{
        margin-top: 15px;
    }

    .con-hight{
        height: 80px;
    }

    .mob-custom-border{
        border-bottom: #00AAFF;
        border-bottom-style: solid;
        border-width: 2px;
    }

    .custom-border{
        border-bottom: #00AAFF;
        border-bottom-style: solid;
        border-width: 2px;
        padding: 0px;
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

    .Navigation{
        background-color: #FFFFFF;
    }
</style>
<!-- ---Шальнев Владимир--- -->