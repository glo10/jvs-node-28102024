import HomeView from '@/views/HomeView.vue'
import { menu } from './menu'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...menu,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/authentification/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not.found',
    component: () => import('@/views/default/404NotFoundView.vue')
  }
]