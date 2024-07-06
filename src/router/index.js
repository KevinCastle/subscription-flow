import { createRouter, createWebHistory } from 'vue-router'
import SubscriptionView from '@/views/SubscriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'subscription',
      component: SubscriptionView
    },
  ]
})

export default router
