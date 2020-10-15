<template>
    <main>
        <app-header></app-header>
        <code-block></code-block>
        <app-footer></app-footer>
    </main>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CodeBlock from "./components/CodeBlock.vue";

export default {
    components: {
        "app-header": Header,
        "code-block": CodeBlock,
        "app-footer": Footer,
    },
};
</script>

<style type="text/css">
    @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

    .shiki__meta {
        display: none;
    }
    ::-webkit-scrollbar-corner {
        background: none;
    }
    .monospace {
        font-family: "Share Tech Mono", monospace;
    }
    body {
        background-color: #f2dea7;
    }
    ::-moz-selection {
        color: white;
        background: darkorange;
    }
    ::selection {
        color: white;
        background: darkorange;
    }
</style>
