import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.meta.requiresAuth && !sessionStorage.getItem('token')) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
