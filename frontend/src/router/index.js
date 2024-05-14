import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/extrenal/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
