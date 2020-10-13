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
		instagram:{
			username:'philippurwoko',
			link:`https://instagram.com/philippurwoko`,
			target:'_blank'
		}
	},
	getters:{
		getTitle:state=>{
			return state.title;
		},
		getCopyright:state=>{
			return state.copyright;
		},
		getInsta:state=>{
			return state.instagram;
		}
	}
})