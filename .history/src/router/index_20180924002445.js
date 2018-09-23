import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/views/index'
import Product from '@/views/index'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: indexView },
    { path: '/products/:id', component: indexView }
  ]
})

export default router