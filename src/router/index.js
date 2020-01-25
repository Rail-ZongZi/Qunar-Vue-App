import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seller/index.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods/index.vue')
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ratings/index.vue')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
