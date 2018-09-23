import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/',
      component: MenuView,
      children: [
        { path: 'product2s', name: 'product2s', component: product2sView },
        { path: 'product2', name: 'product2_new', component: product2NewView },
        { path: 'product2s/:id', name: 'product2', component: product2ShowView },
        { path: 'product2s/:id/edit', name: 'product2_edit', component: product2EditView },

        { path: 'regions', name: 'regions', component: regionsView },
        { path: 'region', name: 'region_new', component: regionNewView },
        { path: 'regions/:id', name: 'region', component: regionShowView },
        { path: 'regions/:id/edit', name: 'region_edit', component: regionEditView },

        { path: 'dashboard', name: 'dashboard', component: DashboardView },
        { path: 'settings', name: 'settings', component: SettingsView },
        { path: 'admins', name: 'admins', component: AdminsView },
        { path: 'admin/:id', name: 'admin', component: AdminShowView }
      ]
    },
    { path: '*', component: NotFoundView }
  ]
})

export default router