import Vuex from 'vuex';

export const store = new Vuex.Store({
	strict:true,
	state:{
		title: 'Code Highlighter',
		copyright:{
			license : 'MIT',
			author : 'Philip Purwoko',
			repository : 'https://github.com/PhilipPurwoko/CodeHighlighter'
		},
		api: "https://highlight-code-api.jefrydco.vercel.app/api",
		langAPI: "https://highlight-code-api.jefrydco.vercel.app/api/options",
	},
	getters:{
		getTitle:state=>{
			return state.title;
		},
		getCopyright:state=>{
			return state.copyright;
		},
		getAPI:state=>{
			return state.api;
		},
		getLangAPI:state=>{
			return state.langAPI;
		}
    }
});