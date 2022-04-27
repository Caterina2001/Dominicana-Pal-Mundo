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

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
