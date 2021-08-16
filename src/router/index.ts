import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
//引入页面级组件
import Home from '@/views/Home/Home.vue'
import Blog from '@/views/Blog/Blog.vue'
import ToDoList from '@/views/ToDoList/index.vue'
import BackStage from '@/views/BackStage/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '博客首页'
    }
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: '博文'
    }
  }
  ,
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: ToDoList,
    meta: {
      title: 'ToDo列表'
    }
  },
  {
    path: '/BlogEditor',
    name: 'BlogEditor',
    component: () => import("@/views/BlogEditor/BlogEditor.vue"),
    meta: {
      title: '博文编辑'
    }
  },

  {
    path: '/BackStage',
    name: 'BackStage',
    component: BackStage,
    meta: {
      title: '博客管理后台'
    },
    children: [
      {
        path: '/BackStage/BlogList',
        name: 'BlogList',
        component: () => import("@/views/BackStage/BlogManager/index.vue"),
        meta: {
          title: '博文列表'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
