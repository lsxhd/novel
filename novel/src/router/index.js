import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Info from '@/view/book/Index'
import Index from '@/view/index/Index'
import Read from '@/view/readNovel/Index'
import Lesson4 from '@/view/lesson4/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/info/:novelId',
      name: 'info',
      component: Info
    },
    {
      path: '/read/:novelId',
      name: 'read',
      component: Read
    },
    {
      path: '/dashboard',
      name: 'lesson4',
      component: Lesson4
    },
    {
      path: '/index',
      name: 'helloWorld',
      component: HelloWorld
    }
  ]
})
