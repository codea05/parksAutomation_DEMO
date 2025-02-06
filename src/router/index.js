import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import ReservationConfirmation from '@/views/ReservationConfirmation.vue'
import ReservationDetails from '@/views/ReservationDetails.vue'

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
      component: ReservationConfirmation,
    },
    {
      path: '/reservation/:id',
      name: 'reservationDetails',
      component: ReservationDetails,
    },
  ],
})

export default router
