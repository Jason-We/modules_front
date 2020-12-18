import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | modules`;
  let role = sessionStorage.getItem('username');
  if (!role && to.path !== '/login') {
    next('/login');
  }else{
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
