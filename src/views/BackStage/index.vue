<template>
  <el-container style="min-height: 600px">
    <el-aside style="width: 200px;">
      <SideBar style="width: 100%; height: 100%"></SideBar>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>

  <Footer></Footer>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/layout/Header.vue";
import SideBar from "./SideBar.vue";
import { Options, Vue } from "vue-class-component";
import { ElContainer, ElAside, ElMain } from "element-plus";
@Options({
  components: { Footer, Header, SideBar, ElContainer, ElAside, ElMain },
})
export default class index extends Vue {}
</script>
<style lang="scss" scoped></style>
