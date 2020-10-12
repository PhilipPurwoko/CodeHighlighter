<template>
    <div>
    	<strong>Select Language</strong>
    	<select v-model="lang" required>
    		<option v-for="lan in langs">{{ lan }}</option>
    	</select>
    	<section class="code-container">
    		<textarea class="code-block" v-model="code"></textarea>
    		<div class="code-block formated" id="ta" v-html="formated"></div>
    	</section>
    	<button @click="submit">Submit</button>
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
        	submit(){
        		axios.post(`https://highlight-code-api.jefrydco.vercel.app/api?lang=${this.lang}`,{
        			code:this.code
        		}).then(res=>{
        			console.log(res);
        			this.formated = res.data.data;
        		});
        	}
        }
    };
</script>

<style scoped>
	.shiki__meta{
		color: red;
	}
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
	}
	.formated{
		background-color: rgb(0,50,60);
	}
	@media (max-width: 800px) {
	  .code-container {
	    flex-direction: column;
	  }
	}

</style>