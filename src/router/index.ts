import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/header/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/header/Contact.vue')
  },
  {
    path: '/dominican',
    name: 'dominican',
    component: () => import('../views/header/Dominican.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/loginregister/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/loginregister/Register.vue')
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/header/Reservas.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/hotels/Hotel.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/experience/Experience.vue')
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/restaurant/Restaurant.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/user/Profile.vue')
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import('../views/reservationsList/reservationList.vue')
  },

  {
    path: '/addhotel',
    name: 'FormHotel',
    component: () => import('../views/hotels/Form.vue')
  },
  {
    path: '/formItineraries',
    name: 'formItineraries',
    component: () => import('../views/reservationsList/Itinerario.vue')
  },
  {
<<<<<<< HEAD
    path: '/itineraries',
    name: 'Itineraries',
    component: () => import('../views/itinerario/itinerario.vue')
  },
 
=======
    path: '/formDestination',
    name: 'formDestination',
    component: () => import('../views/touristDestination/formDestination.vue')
  },
>>>>>>> bfc4bed7979ed13b185b234c416fa66987a2b3b9
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
