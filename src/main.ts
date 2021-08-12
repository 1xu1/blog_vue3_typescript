import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';

// VMdEditor相关
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// fontAwesomeIcon相关
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'



import Prism from 'prismjs';

VMdEditor.use(vuepressTheme, {
    Prism,
});

const app = createApp(App).use(store).use(router)

// 全局组件引入
app.use(VMdEditor)
// app.use(VMdPreviewHtml)
//import pagination from '@/components/things/pa'

//载入自定义指令
import directives from "@/directives/index"


directives(app)

app.mount('#app')