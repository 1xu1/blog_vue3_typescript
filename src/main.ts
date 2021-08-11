import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';

import 'mavon-editor/dist/css/index.css'

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App).use(store).use(router).use(mavonEditor)

//全局引入组件
import mavonEditor from 'mavon-editor'
//import pagination from '@/components/things/pa'

//载入自定义指令
import directives from "@/directives/index"
directives(app)

app.mount('#app')