import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import { store } from './store';
import '../src/assets/tailwind.css';

createApp(App).use(store).use(router).mount('#app');
