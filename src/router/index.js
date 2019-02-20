import Vue from 'vue'
import Router from 'vue-router'
import home from './home/home'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
			path: '/',
			meta: {
				index: 0,
				title: "系统"
			},
			redirect: '/index'
		},
    {
      path:'/index',
      name:'系统',
      component:()=>import("@/view/index"),
      children:[
        home.encrypt,
        home.vuex,
        home.Verification
      ]
    },
    {
      path:"*",
      name:"404",
      component:()=>import(/* webpackChunkName: 'not-found' */"@/view/404.vue"),
    }
  ]
})
