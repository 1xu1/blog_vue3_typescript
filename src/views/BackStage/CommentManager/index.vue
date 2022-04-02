<template>
  <div>
    <ShareList :formData="formData" @remove="remove()"></ShareList>
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
import { getAllComment, deleteComment } from "@/api/comment";
import { ElMessage, ElDialog } from "element-plus";
import PagesButton from "@/components/Pagination.vue";
import EditShareDialog from "@/views/Sharing/EditShareDialog.vue";

@Options({
  components: { ShareList, PagesButton, ElMessage, ElDialog, EditShareDialog },
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

  public share = {
    share_title: "",
    share_label: "",
    img_url: "",
    share_desc: "",
    share_url: "",
    share_id: 0,
  };

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
    getAllComment(param)
      .then((res: { data: { list: never[] } }) => {
        this.formData = res.data.list;
      })
      .catch((err: any) => {
        ElMessage.error("获取失败");
        console.log(err);
      });
  }
  // 删除评论操作
  remove(id: number): void {
    const param = {
      comment_id: id,
    };
    deleteComment(param)
      .then(() => {
        ElMessage.success("删除成功");
        this.getData();
      })
      .catch((err: any) => {
        console.log(err);
        ElMessage.error("删除失败");
      });
  }
}
</script>
<style lang="scss" scoped></style>
