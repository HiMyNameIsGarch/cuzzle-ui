import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import '../src/assets/tailwind.css';
import { initHttpService } from './services/HttpService/HttpService';
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/auth/index';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

const auth = useAuthStore();

initHttpService(auth, router);

router.beforeEach((to, _from, next) => {
    console.log('auth status:', auth.isAuthenticated);
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (auth.isAuthenticated) {
            next();
            return;
        } else {
            next('/login');
            return;
        }
    }
    next();
});

app.use(router);
app.mount('#app');
