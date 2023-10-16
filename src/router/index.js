import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchImages from '../views/SearchImages'
import HomeView from '../views/HomeView'
import SellerView from '../views/SellerView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/search',
    name: 'searchImages',
    component: SearchImages
  },
  {
    path: '/sellers',
    name: 'SellerView',
    component: SellerView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
