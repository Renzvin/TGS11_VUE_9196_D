import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () => import( /* webpackChunkName: "dashboard" */ '../components/DashboardLayout.vue')
const LoginLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/LoginLayout.vue') 
function loadView(view) {
    return () => import(
        /* webpackChunkName: "view-[request]" */
        `../components//${view}.vue`)
}
const routes = [{
    path: '/dashboard',
    component: DashboardLayout,
    children: [{
        name: 'UserController',
        path: '/User',
        component: loadView('UserController')
    },
    { 
        name: 'ServiceController', 
        path: '/Service', 
        component: loadView('ServiceController') 
    } ,]
},
{
    path: '/',
    component: LoginLayout,
    name: 'LoginLayout'
}]
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes
})
export default router