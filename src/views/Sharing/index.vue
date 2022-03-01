<template>
  <Header></Header>
  <div class="card-contanier">
    <div class="menu-icon" v-if="sessionStorage.login_stat">
      <el-dropdown trigger="click">
        <span class="fas fa-ellipsis-v"></span>
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
  <el-dialog v-model="editShareDialog">
    <EditShareDialog></EditShareDialog>
  </el-dialog>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Pagination from "@/components/Pagination.vue";

import editShareDialog from "./EditShareDialog.vue";
import ShareCard from "./ShareCard.vue";

import { getShareList } from "@/api/share";

import { ElDropdown, ElDropdownItem, ElDialog, ElInput } from "element-plus";

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
    editShareDialog,
  },
  mounted() {
    this.getData();
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
}
</script>

<style lang="scss" scoped>
.card-contanier {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid $DIVIDER-COLOR;
  padding: 20px;
  margin-top: 20px;
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
