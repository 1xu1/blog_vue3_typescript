<template>
  <div>
    <ShareList
      :formData="formData"
      @add="add()"
      @edit="edit()"
      @remove="remove()"
    ></ShareList>
    <PagesButton
      :pageNum="page"
      :pages="pageTotal"
      @pageTrans="refresh"
    ></PagesButton>
  </div>
  <el-dialog v-model="addShareDialog" title="添加新分享">
    <slot><EditShareDialog :share="share"></EditShareDialog></slot>
    <template #footer>
      <span>
        <el-button @click="addShareDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddShare()">添加</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="editShareDialog" title="编辑分享">
    <slot><EditShareDialog :share="share"></EditShareDialog></slot>
    <template #footer>
      <span>
        <el-button @click="editShareDialog = false">取消</el-button>
        <el-button type="primary" @click="handleEdit()">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ShareList from "./list.vue";
import { getShareList, updateShare, addShare, deleteShare } from "@/api/share";
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
    getShareList(param)
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
  public handleAddShare(): void {
    this.share = {
      share_title: "",
      share_label: "",
      img_url: "",
      share_desc: "",
      share_url: "",
      share_id: 0,
    };
    addShare(this.share)
      .then(() => {
        ElMessage.success("添加成功");
        this.addShareDialog = false;
        this.getData();
      })
      .catch((err: any) => {
        console.log(err);
        ElMessage.error("添加失败");
      });
  }
  public remove(id: number): void {
    const param = {
      share_id: id,
    };
    deleteShare(param)
      .then(() => {
        ElMessage.success("删除成功");
        this.getData();
      })
      .catch((err: any) => {
        console.log(err);
        ElMessage.error("删除失败");
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
