<template>
  <Header></Header>
  <div>
    <el-card></el-card>
  </div>
  <Pagination
    :pageNum="page"
    :pages="pageTotal"
    @pageTrans="refresh"
  ></Pagination>
  <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Pagination from "@/components/Pagination.vue";
import { ElCard } from "element-plus";
@Options({
  components: { Footer, Header, Pagination, ElCard },
})
export default class index extends Vue {
  public page = 1;
  public limit = 12;
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
</style>
