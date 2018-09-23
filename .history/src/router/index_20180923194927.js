import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/views/index'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/',
      component: indexView,
      children: [
      ]
    },
    { path: '*', component: NotFoundView }
  ]
})

export default router