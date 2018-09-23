import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/views/Index'
import Product from '@/views/Product'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: indexView },
    { path: '/products/:id', component: Product }
  ]
})

export default router