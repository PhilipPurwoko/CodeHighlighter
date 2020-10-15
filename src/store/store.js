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
		langs: ["javascript", "python"]
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
		getLangs:state=>{
			return state.langs;
		}
    }
});