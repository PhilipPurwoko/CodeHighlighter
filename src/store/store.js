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
			repository : 'https://github.com/PhilipPurwoko'
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
	},
	mutations:{
		applyDiskon:state=>{
			state.jasa.filter(item=>item.diskon).forEach(item=>{item.harga = 80 / 100 * item.harga});
		}
	},
	actions:{
		applyDiskon:context=>{
			setTimeout(function(){
				context.commit('applyDiskon')
			},2000);
		}
	}
})