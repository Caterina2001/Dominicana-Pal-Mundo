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
    path: '/itineraries',
    name: 'profile',
    component: () => import('../views/user/Profile.vue')
  },


 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
