export const CounterRoutes = [
    {
        path: '/example/counter',
        name: 'counter',
        component: () =>
            import(/* webpackChunkName: "counter" */ './Counter.vue').then(
                (m: any) => m.default,
            ),
    },
];
