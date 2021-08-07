import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';

import 'mavon-editor/dist/css/index.css'

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App).use(store).use(router).mount("#app");

//全局引入组件
import mavonEditor from 'mavon-editor'
import pagination from '@/components/things/LoadingIcon.vue'
//引入自定义指令


//设置axios基础地址
function setIpAdress() {
    if (
        window.location.origin === "file://" ||
        window.location.origin === "http://localhost:8080"
    ) {
        axios.defaults.baseURL = "http://42.192.211.76:8083";
    } else {
        axios.defaults.baseURL = window.location.origin + ":8083";
    }
}
setIpAdress();