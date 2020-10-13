<template>
    <footer>
        <article>
            <p>&copy Lisensi {{ getCopyright.license }}, author {{ getCopyright.author }}, <a target="_blank" v-bind:href="getCopyright.repository">open source repository</a></p>
        </article>
    </footer>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        computed:{
            ...mapGetters([
                'getCopyright'
            ])
        }
    };
</script>

<style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
</style>
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