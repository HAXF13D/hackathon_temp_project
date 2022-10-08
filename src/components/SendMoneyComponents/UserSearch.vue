<template>
    <div class="col-12 mt-1">
        <div class="col-12 search p-0 m-0">
            <div class="input-group mt-3">
                <button class="btn btn-outline-secondary search py-1 selected-text" type="button" id="search-btn"><i class="bi bi-search me-1 selected-text" style="font-size: 18px;"></i></button>
                <input @change="searchUser()" type="text" class="form-control search text-start ps-2 selected-text" placeholder="Поиск по имени" aria-describedby="search-btn" v-model="searchParameter">                
            </div>
        </div>
    </div>
</template>


<script>
    
    export default {
        name: "app",
        data: () => ({
            
        }),
        methods: {
            searchUser(){
                console.log(this.searchParameter);
            }
        },
        components: {
        },
    }

</script>

<style scoped>
    .search{
        border-radius: 16px;
        background-color: #00AAFF;
        border-width: 0px;
    }
</style>