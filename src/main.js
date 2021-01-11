import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | modules`;
  let role = sessionStorage.getItem('userlogin');
  if (!role && to.meta.permission) {
    next('/');
  }else{
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
