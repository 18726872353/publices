// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
// 样式初始表
import './assets/css/base.css'
// 全局引入iview以及样式
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// 封装的设置Cookie
import cookie from '@/plugins/cookie.js';
// 语言类型
import VueI18n from 'vue-i18n';


import axios from '@/plugins/http.js'
// Ajax
Vue.use({
	install (vue, options) {
		vue.prototype.$axios = axios;
  	}
});

// 公用方法
import { publicJS } from './commons/function.js'
Vue.prototype.publicJS = publicJS

Vue.config.productionTip = false

// 路由拦截器
router.beforeEach((to,from,next)=>{
  // console.log(to)
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
