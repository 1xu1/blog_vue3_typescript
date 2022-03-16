<template>
  <div class="card-container">
    <div v-if="permission.user_permission == 'admin'" class="menu-icon">
      <el-dropdown trigger="click">
        <span class="fas fa-ellipsis-v" style="font-size: 20px"></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="editShareDialog = !editShareDialog"
              >添加分享资源</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <ShareCard
      class="item"
      v-for="item in shareList"
      :key="item.share_id"
      :title="item.share_title"
      :desc="item.share_desc"
      :label="item.share_label"
      :url="item.share_url"
      :img="item.imgUrl"
    ></ShareCard>
  </div>
  <Pagination
    :pageNum="page"
    :pages="pageTotal"
    @pageTrans="refresh"
  ></Pagination>
  <Footer></Footer>
  <el-dialog v-model="editShareDialog" title="添加新分享">
    <slot><EditShareDialog :share="share"></EditShareDialog></slot>
    <template #footer>
      <span>
        <el-button @click="editShareDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddShare()">添加</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Header from "@/layout/Header.vue";
import Pagination from "@/components/Pagination.vue";
import { addShare } from "@/api/share";

import EditShareDialog from "./EditShareDialog.vue";
import ShareCard from "./ShareCard.vue";

import { getShareList } from "@/api/share";

import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDialog,
  ElInput,
  ElMessage,
  ElButton,
} from "element-plus";

@Options({
  components: {
    Footer,
    Header,
    Pagination,
    ShareCard,
    ElDropdown,
    ElDropdownItem,
    ElDialog,
    ElInput,
    EditShareDialog,
    ElMessage,
    ElButton,
    ElDropdownMenu,
  },
  mounted() {
    this.getData();
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      this.permission = JSON.parse(userInfo);
    }
  },
})
export default class index extends Vue {
  // 编辑分享弹窗
  public editShareDialog = false;
  public page = 1;
  public limit = 10;
  public pageTotal = 10;
  public shareList = [];
  public label = "";
  public permission = "";
  public share = {
    share_title: "",
    share_label: "",
    img_url: "",
    share_desc: "",
    share_url: "",
  };
  public getData(): void {
    const params = {
      start: this.page,
      limit: this.limit,
      label: this.label,
    };
    getShareList(params).then(
      (res: { data: { list: never[]; pages: number } }) => {
        this.shareList = res.data.list;
        this.pageTotal = res.data.pages;
      }
    );
  }
  public refresh(page: number, limit: number, label: string): void {
    if (page != null) this.page = page;
    if (!limit != null) this.limit = limit;
    if (!label != null) this.label = label;
    this.getData();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }
  public handleAddShare(): void {
    addShare(this.share)
      .then(() => {
        ElMessage.success("添加成功");
      })
      .catch((err: any) => {
        console.log(err);
        ElMessage.error("添加失败");
      });
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid $DIVIDER-COLOR;
  padding: 20px;
  margin-top: 20px;
  margin-left: 20px;
  justify-content: flex-start;
  max-width: 1200px;
  .item {
    margin: 10px;
  }
}
.menu-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
@media screen {
}
</style>
