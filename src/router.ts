import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { CounterRoutes } from './views/counter/routes';
import { AuthRoutes } from './views/auth/router';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    ...CounterRoutes,
    ...AuthRoutes,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
