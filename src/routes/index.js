export const routes = [
    {
        path: '/',
        component: () => import('./views/HelloWorld.vue'),
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        meta: { title: 'About' },
        component: () => import('./views/About.vue'),
    },
    {
        path: '/:path(.*)',
        component: () => import('./views/About.vue')
    },
]