import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueResource from 'vue-resource'

export const bus = new Vue();
Vue.use(VueResource);

new Vue({
	store:store,
	el: '#app',
	render: h => h(App)
})
