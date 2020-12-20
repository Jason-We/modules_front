import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        meta: { title: '关于' },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/hello',
        name: 'Hello',
        component: () => import('../components/HelloWorld.vue'),
        meta: { title: 'Hello' },
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('../views/Info.vue'),
        meta: { title: 'Info' },
      },
    ]
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/pages/Dashboard.vue'),
    meta: { title: 'Dashboard' }
  },

  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue'),
    meta: { title: '注册' }
  },
  {
    path: '*',
    component: () => import('../components/pages/404.vue'),
    meta: { title: '404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
