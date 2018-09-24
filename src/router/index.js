import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/views/Index'
import ProductView from '@/views/Product'
import SearchView from '@/views/Search'

Vue.use(Router)

var router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: indexView },
    { path: '/products/:id', component: ProductView },
    { path: '/search', component: SearchView },
  ]
})

export default router