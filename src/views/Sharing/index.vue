<template>
  <Header></Header>
  <div class="card-contanier">
    <ShareCard
      class="item"
      v-for="item in shareList"
      :key="item.share_id"
      :title="item.share_title"
      :desc="item.share_desc"
      :label="item.share_label"
      :url="item.share_url"
    ></ShareCard>
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

import ShareCard from "./ShareCard.vue";

import { getShareList } from "@/api/share";
@Options({
  components: { Footer, Header, Pagination, ShareCard },
  mounted() {
    this.getData();
  },
})
export default class index extends Vue {
  public page = 1;
  public limit = 10;
  public shareList = [];
  public getData(): void {
    const params = {
      page: this.page,
      limit: this.limit,
    };
    getShareList(params).then((res: { data: never[] }) => {
      this.shareList = res.data;
    });
  }
}
</script>
<style lang="scss" scoped>
.card-contanier {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    margin: 10px;
  }
}
</style>
