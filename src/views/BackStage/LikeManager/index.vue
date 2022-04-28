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
import { getUserLikeBlogs } from "@/api/user";
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
    this.getData();
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
    const userinfo = sessionStorage.getItem("userInfo");
    let user;
    if (userinfo) {
      user = JSON.parse(userinfo);
    } else {
      ElMessage.error("登录状态有误");
      return;
    }
    const param = {
      start: this.page,
      limit: this.limit,
      user_id: user.user_id,
    };
    getUserLikeBlogs(param)
      .then((res: { data: { list: never[] } }) => {
        this.formData = res.data.list;
      })
      .catch((err: any) => {
        ElMessage.error("获取失败");
        console.log(err);
      });
  }
}
</script>
<style lang="scss" scoped></style>
