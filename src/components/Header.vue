<template>
    <header>
        <h1 @mouseover="toogleToast" @mouseleave="toogleToast" class="title center">{{ getTitle }}</h1>
        <article class="toast center monospace" v-bind:class="{hovering:hovering}">
            <strong>Get your code highlighted instantly</strong>
            <p>Simply select your programming language then copy and paste your code here</p>
        </article>
    </header>
</template>

<script>
    // Using vuex getters
    import { mapGetters } from 'vuex';
    export default {
        data(){
            return{
                hovering:false
            }
        },
        computed:{
            ...mapGetters([
                'getTitle'
            ])
        },
        methods:{
            toogleToast(){
                this.hovering = !this.hovering;
            }
        }
    };
</script>

<style scoped>

    header{
        text-align: center;
    }

    .center{
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto;
    }

    .title{
        width: 300px;
        border-radius: 15px;
        background-color: #006a71;
        color: azure;
        font-family: 'Righteous', cursive;
        padding: 10px;
    }
    
    .toast{
        z-index: -1;
        padding: 10px;
        border-radius: 3px;
        background-color: rgb(250, 250, 250);
        color: #333;
        width: 300px;
        position: absolute;
        margin-top: -10px;
        transition: all 0.3s;
        opacity: 0;
    }

    .hovering{
        z-index: 1;
        opacity: 0.95;
    }

</style>