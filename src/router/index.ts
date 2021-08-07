import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//引入页面级组件
import Home from '@/views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '博客首页'
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
