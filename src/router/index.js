import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import WeChat from '@/components/WeChat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/WeChat',
      name: 'WeChat',
      component: WeChat
    }
  ]
})
