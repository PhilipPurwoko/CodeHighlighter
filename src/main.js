import { createApp } from 'vue'
import { store } from './store/store'
import App from './App.vue'

// Create vue instance
const app = createApp(App);

// Install the plugin first
app.use(store);

// Mount your app
app.mount('#app');