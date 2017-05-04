import Vue from 'vue'
import Router from 'vue-router'
import h from '@/views/homeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: h
    }
  ]
})
