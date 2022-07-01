import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import { store } from './store';
import '../src/assets/tailwind.css';
import { initHttpService } from './services/HttpService/HttpService';

initHttpService(store, router);

createApp(App).use(store).use(router).mount('#app');
