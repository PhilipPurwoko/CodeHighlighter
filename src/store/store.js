import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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

	// mutations:{
	// 	changeLang:(state,newLang)=>{
	// 		state.lang = newLang;
	// 		console.log('Change lang');
	// 	},
	// 	changeCode:(state,raw)=>{
	// 		state.code = raw;
	// 		console.log('Change code');
	// 	},
	// 	changeFormated:(state,formated)=>{
	// 		state.formated = formated;
	// 		console.log('Change formated');
	// 	}
	// },
	// actions:{
	// 	changeLang:context=>{
	// 		setTimeout(function(){
	// 			context.commit('changeLang');
	// 		},200);
	// 	},
	// 	changeCode:(context,raw)=>{
	// 		setTimeout(function(){
	// 			context.commit('changeCode',raw);
	// 		},200);
	// 	},
	// 	changeFormated:(context,formated)=>{
	// 		setTimeout(function(){
	// 			context.commit('changeFormated',formated);
	// 		},200);
	// 	}
	// }
})