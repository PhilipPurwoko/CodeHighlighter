<template>
    <div>
        <form>
            <strong class="monospace">Select Language</strong>
            <select v-model="lang" @change="highlight">
                <option selected disabled>Choose Language</option>
                <option v-bind:key="lan" v-for="lan in getLangs">{{ lan }}</option>
            </select>
        </form>
        <main class="code-container">
            <textarea class="code-block" v-model="raw" @input="highlight" ></textarea>
            <div class="code-block formated" v-html="formated"></div>
        </main>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapGetters  } from 'vuex';

    export default {
        data() {
            return {
                lang: "",
                languages:[],
                raw: "",
                formated: ""
            };
        },
        computed:{
            // Using vuex getters
            ...mapGetters([
                'getAPI',
                'getLangAPI'
            ]),
            getLangs(){
                return this.languages
            }
        },
        created(){
            // Get list of programming languages on created
            axios.get(this.getLangAPI).then(res=>{
                res.data.data.languages.forEach(lang=>{
                    this.languages.push(lang);
                })
            });
        },
        methods: {
            highlight() {
                // If code is empty, replace with space
                if (this.raw == "") {
                    this.raw = " ";
                }
                // If there is no language selected
                if (this.lang != "") {
                    axios
                        .post(this.getAPI + `?lang=${this.lang}`,{code: this.raw})
                        .then(res => {this.formated = res.data.data;});
                } else {
                    this.formated = "<p class='monospace' style='color:azure;'>No language selected. Please select a language</p>";
                }
            }
        }
    };
</script>

<style scoped>

    .code-container {
        display: flex;
        flex-direction: row;
        height: 400px;
    }

    .code-block {
        flex: 50%;
        overflow: scroll;
        text-overflow: scroll;
        border: 2px solid black;
        padding: 10px;
    }

    textarea {
        resize: none;
    }

    .code-block:focus {
        outline: none !important;
        border: 2px solid darkorange;
    }

    .formated {
        background-color: rgb(0, 50, 60);
    }

    /* Flexbox Code Block */
    @media (max-width: 800px) {
        .code-container {
            flex-direction: column;
        }
    }

    select {
        border-radius: 5px;
        padding: 4px;
        margin-bottom: 20px;
        margin-top: 5px;
        font-family: "Share Tech Mono", monospace;
    }

    select:focus {
        background-color: #eee;
    }

    form {
        width: 250px;
        margin: auto;
        text-align: center;
    }

    /* Scrollbar CSS */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: none;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    ::-webkit-scrollbar-corner {
        background: none;
    }

</style>
