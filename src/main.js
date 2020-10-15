import { createApp } from 'vue'
import { createStore } from 'vuex'
import { store } from './store/store'
import App from './App.vue'

createApp(App).mount('#app');
createStore({store:store});