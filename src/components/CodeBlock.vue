<template>
    <div>
        <form>
    	<strong class="monospace">Select Language</strong>
    	<select v-model="lang" @change="highlight">
            <option selected disabled>Choose Language</option>
    		<option v-for="lan in langs">{{ lan }}</option>
    	</select>
        </form>
    	<section class="code-container">
    		<textarea class="code-block" v-model="code" @input="highlight"></textarea>
    		<div class="code-block formated" id="ta" v-html="formated"></div>
    	</section> 
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data:function() {
            return {
            	api:'https://highlight-code-api.jefrydco.vercel.app/api',
            	langs:['javascript','python'],
                lang:"",
                code:"",
                formated:""
            };
        },
        methods:{
        	highlight(){
                if (this.code == ""){
                    this.code = " "
                };
                if (this.lang != ""){
            		axios.post(`https://highlight-code-api.jefrydco.vercel.app/api?lang=${this.lang}`,{
            			code:this.code
            		}).then(res=>{
            			this.formated = res.data.data;
            		});
                } else {
                    this.formated = "<p class='monospace' style='color:azure;'>No language selected. Please select a language</p>"
                }
        	}
        }
    };
</script>

<style type="text/css">
    .shiki__meta{
        display: none;
    }
    ::-webkit-scrollbar-corner{
        background: none;
    }
    .monospace{
        font-family: 'Share Tech Mono', monospace;
    }
</style>
<style scoped>
	.code-container{
		display: flex;
		flex-direction: row;
		height: 400px;
	}
	.code-block{
		flex: 50%;
		overflow: scroll;
		text-overflow: scroll;
		border: 2px solid black;
        padding: 10px;
	}
    textarea{
        resize: none;
    }
    .code-block:focus{
        outline: none !important;
        border: 2px solid darkorange;
    }
	.formated{
		background-color: rgb(0,50,60);
	}
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
        font-family: 'Share Tech Mono', monospace;
    }
    select:focus{
        background-color: #eee;
    }
    form{
        width: 250px;
        margin: auto;
        text-align: center;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background: none;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
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