//用于管理全局组件注册
import Pagination from "./Pagination.vue";

const pagination = {
  install(vue) {
    vue.component("Pagination", Pagination);
  },
};

export default pagination;
