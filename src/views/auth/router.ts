export const AuthRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('./Login.vue').then((m: any) => m.default),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./Register.vue').then((m: any) => m.default),
    },
];
