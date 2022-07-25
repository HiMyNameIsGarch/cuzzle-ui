import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import '../src/assets/tailwind.css';
import { initHttpService } from './services/HttpService/HttpService';
import { createPinia } from 'pinia';

const pinia = createPinia();

initHttpService(pinia, router);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
