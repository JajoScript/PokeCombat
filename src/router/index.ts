import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'teams',
      component: () => import('@/views/TeamsView.vue')
    },
    {
      path: '/combat',
      name: 'combat',
      component: () => import('@/views/CombatView.vue')
    }
  ]
})

export default router
