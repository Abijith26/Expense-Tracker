import App from '@/App.vue'
import LoginPage from '@/views/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // Redirected to show the login page by default
      redirect: { path: '/login' },
      name: 'app',
      component: App
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router
