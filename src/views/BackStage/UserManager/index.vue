<template>
  <div>
    <ShareList
      :formData="formData"
      @add="handleUnblock"
      @remove="handleBlock"
    ></ShareList>
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
import { updateShare } from "@/api/share";
import { getAllUsers, blockUser, unblockUser } from "@/api/user";
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

  public share = {
    share_title: "",
    share_label: "",
    img_url: "",
    share_desc: "",
    share_url: "",
    share_id: 0,
  };

  public editShareDialog = false;
  public addShareDialog = false;
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
    getAllUsers(param)
      .then((res: { data: { list: never[] } }) => {
        this.formData = res.data.list;
      })
      .catch((err: any) => {
        ElMessage.error("获取失败");
        console.log(err);
      });
  }
  public add(): void {
    this.addShareDialog = true;
  }
  public handleUnblock(id: number): void {
    const param = {
      user_id: id,
    };
    blockUser(param)
      .then(() => {
        ElMessage.success("解封成功");
        this.addShareDialog = false;
        this.getData();
      })
      .catch((err: any) => {
        ElMessage.error("解封失败");
        ElMessage.error(err);
      });
  }
  public handleBlock(id: number): void {
    const param = {
      user_id: id,
    };
    unblockUser(param)
      .then(() => {
        ElMessage.success("封禁成功");
        this.getData();
      })
      .catch((err: any) => {
        ElMessage.error("封禁失败");
        ElMessage.error(err);
      });
  }
  public edit(share: never): void {
    this.editShareDialog = true;
    this.share = share;
  }
  public handleEdit(): void {
    const param = this.share;
    updateShare(param)
      .then(() => {
        ElMessage.success("编辑成功");
        this.share = {
          share_title: "",
          share_label: "",
          img_url: "",
          share_desc: "",
          share_url: "",
          share_id: 0,
        };
        this.editShareDialog = false;
        this.getData();
      })
      .catch((err: any) => {
        console.log(err);
        ElMessage.error("编辑失败");
      });
  }
}
</script>
<style lang="scss" scoped></style>
