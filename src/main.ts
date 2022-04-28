import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

// fontAwesomeIcon相关
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

// element-plus相关
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App).use(store).use(router);

// 全局组件引入
// app.use(VMdEditor)
// import '@/components/things'

// 载入自定义指令
import directives from "@/directives/index";

// 载入mockjs
// require("./mock");

directives(app);

app.mount("#app");

// axios默认url配置
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (typeof to.meta.title == "string") {
    document.title = to.meta.title;
  }
  next();
});
