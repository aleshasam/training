import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/extrenal/Login.vue'
import RegistrationView from '../views/extrenal/Registration.vue'
import TrainingView from '../views/internal/Training.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
      meta: {
        layout: 'external'
      }
    },
    {
      path: '/reg',
      name: 'Registration',
      component: RegistrationView,
      meta: {
        layout: 'external'
      }
    },
    {
      path: '/training',
      name: 'Training',
      component: TrainingView,
      meta: {
        layout: 'internal'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
