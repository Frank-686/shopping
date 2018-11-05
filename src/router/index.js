import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/views/Index'
import ProductView from '@/views/Product'
import SearchView from '@/views/Search'
import NotFound from '@/views/NotFound'
import SiftView from '@/views/Sift'

Vue.use(Router)

var router = new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    // mode: 'history',
    base: '/dist/',
    routes: [
        { path: '/', name: 'index', component: indexView },
        { path: '/detail', component: ProductView },
        { path: '/search', component: SearchView },
        { path: '/sift', component: SiftView },
        { path: '*', component: NotFound }
    ]
})

export default router