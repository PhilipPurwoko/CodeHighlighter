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
    header{
        text-align: center;
        background-color: cadetblue;
        color: azure;
    }
</style>