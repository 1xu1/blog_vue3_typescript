<template>
  <div>
    <ShareList :formData="formData"></ShareList>
    <PagesButton
      :pageNum="page"
      :pages="pageTotal"
      @pageTrans="refresh"
    ></PagesButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ShareList from "./list.vue";
import { getAllLog } from "@/api/log";
import { ElMessage, ElDialog, ElButton } from "element-plus";
import PagesButton from "@/components/Pagination.vue";
import EditShareDialog from "@/views/Sharing/EditShareDialog.vue";

@Options({
  components: {
    ShareList,
    PagesButton,
    ElMessage,
    ElDialog,
    EditShareDialog,
    ElButton,
  },
  mounted() {
    if (this.$route.query.page != undefined) {
      this.page = this.$route.query.page;
    }
    if (this.$route.query.limit != undefined) {
      this.limit = this.$route.query.limit;
    }
    if (!sessionStorage.login_stat) {
      alert("登录状态异常，跳转回首页！");
      this.$router.replace("/");
    } else {
      this.getData();
    }
  },
})
export default class index extends Vue {
  // 数据列表
  public formData = [];
  public page = 1;
  public pageTotal = 1;
  public limit = 20;

  // 分页跳转刷新数据
  public refresh(page: number, limit: number): void {
    if (page) this.page = page;
    if (limit) this.limit = limit;
    this.getData();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }
  // 读取分页数据
  getData(): void {
    const param = {
      start: this.page,
      limit: this.limit,
    };
    getAllLog(param)
      .then((res: any) => {
        this.formData = res.data.list;
        this.pageTotal = res.data.pages;
      })
      .catch((err: any) => {
        ElMessage.error("获取失败");
        console.log(err);
      });
  }
}
</script>
<style lang="scss" scoped></style>
