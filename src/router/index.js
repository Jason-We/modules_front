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
    component: () => import('../views/signin/Dashboard.vue'),
    meta: { title: 'Dashboard' ,permission: true},
    redirect:'/panel',
    children:[
      {
        path:'/panel',
        name:'Panel',
        component: () => import('../views/signin/Panel.vue'),
        meta:{title:'Panel' , permission:true}
      },
      {
        path:'/personal',
        name:'Personal',
        component: () => import('../views/signin/Personal.vue'),
        meta:{title:'Personal' , permission:true}
      },
      {
        path:'/career',
        name:'Career',
        component: () => import('../views/signin/Career.vue'),
        meta:{title:'Career' , permission:true}
      },
      {
        path:'/jobs',
        name:'Jobs',
        component: () => import('../views/signin/Jobs.vue'),
        meta:{title:'Jobs' , permission:true}
      },
      {
        path:'/personality',
        name:'personality',
        component: () => import('../views/signin/Personality.vue'),
        meta:{title:'Personality' , permission:true}
      },
      {
        path: '/admin',
        component: () => import(/* webpackChunkName: "login" */ '../views/signin/Admin.vue'),
        meta: { title: '权限管理' ,permission:true }
      }
    ]
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
    path:'/forgetPass',
    component : () => import('../views/ForgetPass.vue'),
    meta:{title :'忘记密码'}
  },
  {
    path:'/resetPass',
    component : () => import('../views/ResetPass.vue'),
    meta:{title :'重置密码'}
  },
  {
    path:'/laws',
    component : () => import('../views/Laws.vue'),
    meta : {title :'服务条款'}
  },
  {
    path: '/403',
    component: () => import(/* webpackChunkName: "403" */ '../components/pages/403.vue'),
    meta: { title: '403' }
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
