import { createApp } from 'vue'
import { createStore } from 'vuex'
import { store } from './store/store'
import App from './App.vue'

// console.log(store);

const app = createApp(App).mount('#app');
const vuestore = createStore(store);
app.use(vuestore);