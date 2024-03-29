/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor";
declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module "prismjs";
declare module "@fortawesome/fontawesome";
declare module "@/assets/js/utils";
declare module "@/api/request";
declare module "@/api/share";
declare module "@/api/user";
declare module "@/api/comment";
declare module "@/api/log";
declare module "@/api/blog";
declare module "@/utils/utils";
