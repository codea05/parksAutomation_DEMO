import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import ReservationConfirmation from '@/components/ReservationConfirmation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/reservation/confirm',
      name: 'reservationConfirmation',
      component: ReservationConfirmation
    }
  ]
})

export default router
