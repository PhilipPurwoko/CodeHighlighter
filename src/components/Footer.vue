<template>
    <footer>
        <article>
            <p>Lisensi : {{ getCopyright.license }}</p>
            <p>Author : {{ getCopyright.author }}</p>
            <p>Repositori : {{ getCopyright.repository }}</p>
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

<style scoped>
    footer{
        text-align: center;
        background-color:azure;
        color: cadetblue;
    }
</style>