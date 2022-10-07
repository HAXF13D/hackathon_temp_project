<template>

</template>

<script>
    export default {
        name: 'Start',
        data(){
            return{
            }
        },
        components: {
        },
        methods:{
        },
        created:
            function(){
                if (localStorage.getItem('registredStatus') !== 'false'){
                    this.$router.push('/news');
                }
                else{
                    this.$router.push('/login');
                }
            }
    }
</script>

<style scoped>
</style>
