import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//引入页面级组件
import Home from '@/views/Home/Home.vue'
import Blog from '@/views/Blog/Blog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '博客首页'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: '博文'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
