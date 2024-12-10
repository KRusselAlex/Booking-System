import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SplashScreen from '@/views/SplashScreen.vue'
import BookingHotel from '@/views/BookingHotel.vue'
import HotelView from '@/views/Hotel/HotelView.vue'
import DetailHotel from '@/views/Hotel/DetailHotel.vue'
import RoomsDetails from '@/views/Rooms/RoomsDetails.vue'
import RoomsView from '@/views/Rooms/RoomsView.vue'

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
      path: '/bookings',
      name: 'bookings',
      component: BookingHotel,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailHotel,
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView,
    },

    {
      path: '/detailsrooms/:id',
      name: 'detailrooms',
      component: RoomsDetails,
    },

  ],
})

export default router
