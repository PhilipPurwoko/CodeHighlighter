import { createApp } from 'vue'
import { store } from './store/store'
import App from './App.vue'

// Create vue instance
const app = createApp(App);

// Install the vuex plugin first
app.use(store);

// Mount app
app.mount('#app');