import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/Home/index.vue"),
    meta: {
      title: "博客首页",
    },
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () => import("@/views/Blog/index.vue"),
    meta: {
      title: "博文",
    },
  },
  {
    path: "/ToDoList",
    name: "ToDoList",
    component: () => import("@/views/ToDoList/index.vue"),
    meta: {
      title: "ToDo列表",
    },
  },
  {
    path: "/BlogEditor",
    name: "BlogEditor",
    component: () => import("@/views/BlogEditor/index.vue"),
    meta: {
      title: "博文编辑",
    },
  },
  {
    path: "/Sharing",
    name: "Sharing",
    component: () => import("@/views/Sharing/index.vue"),
    meta: {
      title: "资源分享",
    },
  },
  {
    path: "/BackStage",
    name: "BackStage",
    component: () => import("@/views/BackStage/index.vue"),
    meta: {
      title: "博客管理后台",
    },
    children: [
      {
        path: "/BackStage/BlogList",
        name: "BlogList",
        component: () => import("@/views/BackStage/BlogManager/index.vue"),
        meta: {
          title: "博文列表",
        },
      },
      {
        path: "/BackStage/CommentList",
        name: "CommentList",
        component: () => import("@/views/BackStage/CommentManager/index.vue"),
        meta: {
          title: "评论列表",
        },
      },
      {
        path: "/BackStage/ShareList",
        name: "ShareList",
        component: () => import("@/views/BackStage/ShareManager/index.vue"),
        meta: {
          title: "分享列表",
        },
      },
      {
        path: "/BackStage/UserList",
        name: "UserList",
        component: () => import("@/views/BackStage/UserManager/index.vue"),
        meta: {
          title: "用户列表",
        },
      },
      {
        path: "/BackStage/LogList",
        name: "LogList",
        component: () => import("@/views/BackStage/LogManager/index.vue"),
        meta: {
          title: "日志列表",
        },
      },
      {
        path: "/BackStage/LikeList",
        name: "LikeList",
        component: () => import("@/views/BackStage/LikeManager/index.vue"),
        meta: {
          title: "你的喜欢",
        },
      },
      {
        path: "/BackStage/UserConfig",
        name: "UserConfig",
        component: () => import("@/views/BackStage/UserInfo/index.vue"),
        meta: {
          title: "个人资料",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
