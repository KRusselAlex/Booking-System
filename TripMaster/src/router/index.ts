import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SplashScreen from '@/views/SplashScreen.vue'
import BookingHotel from '@/views/BookingHotel.vue'
import HotelView from '@/views/Hotel/HotelView.vue'
import DetailHotel from '@/views/Hotel/DetailHotel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'splash',
      component: SplashScreen,
    },
    {
      path: '/hotels',
      name: 'hotel',
      component: HotelView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingHotel,
    },
    {
      path: '/details/:id',
      name: 'booking',
      component: DetailHotel,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
