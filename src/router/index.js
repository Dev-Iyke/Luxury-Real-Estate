import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import VillasPage from '../views/VillasPage.vue'
import ContactPage from '../views/ContactPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/villas',
    name: 'villas',
    component: VillasPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
