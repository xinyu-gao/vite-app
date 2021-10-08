import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('../views/HelloWorld.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/:path(.*)',
    component: () => import('../views/NotFound.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
