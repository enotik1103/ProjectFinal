import  { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router.js";
import store from './store/index.js';


const app = createApp(App)

app
    .use(store)
    .use(router)
    .mount('#app')
