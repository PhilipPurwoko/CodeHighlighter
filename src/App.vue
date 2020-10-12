<template>
    <main>
        <app-header></app-header>
        <code-block></code-block>
        <app-footer></app-footer>
    </main>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import CodeBlock from "./components/CodeBlock.vue"

export default {
    components:{
        'app-header':Header,
        'code-block':CodeBlock,
        'app-footer':Footer
    }
};
</script>

<style scoped>

</style>