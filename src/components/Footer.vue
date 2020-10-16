<template>
    <footer>
        <p>Lisensi {{ getCopyright.license }}, author {{ getCopyright.author }}, <a target="_blank" v-bind:href="getCopyright.repository">open source repository</a></p>
    </footer>
</template>

<script>
    // Using vuex getters
    import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters([
                'getCopyright'
            ])
        }
    };
</script>

<style scoped>

    footer{
        text-align: center;
        font-family: 'Share Tech Mono', monospace;
        color: rgb(0,50,60);
    }

    a{
        text-decoration: underline;
        color: rgb(0,50,60);
    }

</style>