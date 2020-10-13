<template>
    <header>
        <h1>{{ getTitle }}</h1>
    </header>
</template>

<script>
    
    import { mapGetters } from 'vuex';

    export default {
        computed:{
            ...mapGetters([
                'getTitle'
            ])
        }
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    header{
        text-align: center;
        font-family: 'Righteous', cursive;
        background-color: #006a71;
        width: 300px;
        margin: auto;
        border-radius: 15px;
    }
    h1{
        padding: 10px;
        color: azure;
    }
</style>