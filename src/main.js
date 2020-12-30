import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import SlideVerify from 'vue-monoplasty-slide-verify'
import VueMetaInfo from 'vue-meta-info'
import Loading from '@/components/Loading/index.js'
import { Button, Icon , Modal , message , Layout, Menu,Avatar} from 'ant-design-vue';
import './assets/css/reset.scss'
import 'ant-design-vue/dist/antd.css'

Vue.use(VueAxios, axios);

Vue.use(Button);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(VueMetaInfo);
Vue.use(Loading);
Vue.use(SlideVerify);
Vue.use(Avatar);
Vue.prototype.$message = message;
Vue.config.productionTip = false;

const whiteList = ['/login','/']

console.log(store);

router.beforeEach((to, from, next) => {
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息

        store.dispatch('GetInfo').then(res => { // 拉取info
          const roles = res.data.role;
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(err => {
          console.log(err);
        });
      } else {
        next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')