import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Info from '@/view/book/Index'
import Index from '@/view/index/Index'
import Read from '@/view/readNovel/Index'
import Upload from '@/components/Upload'
import UserInfo from '@/view/user/Index'
import UserManagement from '@/view/user/UserManagement'
import SearchBookList from '@/components/SearchBookList'
import BBS from '@/view/BBS/Index'
import Post from '@/view/BBS/reply/Index'
import AllBook from '@/view/like/AllBook'
import LikeBook from '@/view/like/LikeBook'
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
      path: '/index',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/user',
      name: 'User',
      component: UserManagement
    },
    {
      path: '/SearchBookList',
      name: 'SearchBookList',
      component: SearchBookList
    },
    {
      path: '/BBS/:novelId',
      name: 'BBS',
      component: BBS
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: Post
    },
    {
      path: '/allbook',
      name: 'allbook',
      component: AllBook
    },
    {
      path: '/likebook',
      name: 'LikeBook',
      component: LikeBook
    }
  ]
})
