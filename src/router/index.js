import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "Recommend" */ '../views/Recommend/recommend.vue')
const Singer = () => import(/* webpackChunkName: "Singer" */ '../views/Singer/singer.vue')
const Rank = () => import(/* webpackChunkName: "Rank" */ '../views/Rank/rank.vue')
const Search = () => import(/* webpackChunkName: "Search" */ '../views/Search/search.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    meta: {
      title: '推荐',
    },
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer,
    meta: {
      title: '歌手',
    },
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank,
    meta: {
      title: '排行',
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: '搜索',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `炸鸡音乐 - ${to.meta.title}`
  next()
})

export default router
