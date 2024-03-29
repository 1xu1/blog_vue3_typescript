<template>
  <div>
    <div class="container">
      <div class="middle">
        <BlogList
          :page="page"
          :limit="limit"
          :blog="blogSorted"
          :loading="loading"
          style="margin-top: 20px"
        ></BlogList>
        <Pagination
          :pageNum="page"
          :pages="pageTotal"
          @pageTrans="refresh"
        ></Pagination>
      </div>
      <div class="left">
        <LabelCloudCard @change="refresh" style="width: 250px"></LabelCloudCard>
        <LatestCommentCard style="width: 250px"></LatestCommentCard>
      </div>
      <div class="right">
        <PersonalCard></PersonalCard>
        <scroll-to-top></scroll-to-top>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import Header from "@/layout/Header.vue";
import Footer from "@/components/Footer.vue";
import BlogList from "@/views/Home/BlogList.vue";
import Pagination from "@/components/Pagination.vue";
import LabelCloudCard from "./LabelCloudCard.vue";
import PersonalCard from "./PersonalCard.vue";
import LatestCommentCard from "./LatestCommentCard.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

import { getBlogList } from "@/api/blog";

@Options({
  components: {
    Header,
    Footer,
    BlogList,
    Pagination,
    LabelCloudCard,
    LatestCommentCard,
    PersonalCard,
    ScrollToTop,
  },
  mounted() {
    this.page = this.$route.query.page;
    this.limit = this.$route.query.limit;
    this.blog_label = this.$route.query.label;
    this.getData();
  },
  watch: {
    $route(to, from) {
      this.page = this.$route.query.page;
      this.limit = this.$route.query.limit;
      this.blog_label = this.$route.query.label;
      this.getData();
    },
  },
})
export default class Home extends Vue {
  public page = 1;
  public limit = 20;
  public blog = [];
  public loading = false;
  public pageTotal = 0;
  public blog_label = "";
  //博文列表排序
  public get blogSorted(): any {
    return this.blog.sort((a: { blog_time: Date }, b: { blog_time: Date }) => {
      let t1 = new Date(a.blog_time).getTime();
      let t2 = new Date(b.blog_time).getTime();
      return t2 - t1;
    });
  }
  //读取全部的博文数据
  public getData(): void {
    const params = {
      start: this.page,
      limit: this.limit,
      label: this.blog_label,
    };
    getBlogList(params)
      .then((res: any) => {
        this.blog = res.data.list;
        this.pageTotal = res.data.pages;
        this.loading = false;
      })
      .catch((err: never) => {
        console.log(err);
      });
  }
  //分页跳转刷新博文列表
  public refresh(page: number, limit: number, blog_label: string): void {
    if (page) this.page = page;
    if (limit) this.limit = limit;
    if (blog_label || blog_label === "") this.blog_label = blog_label;
    this.loading = true;
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
@media screen and (max-width: 1000px) {
  .container {
    background-color: lightblue;
    padding: 0 10px;
  }
  .left {
    display: none;
  }
  .right {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .container {
    overflow: hidden;
    padding: 0 300px;
  }
}

.container > div {
  float: left;
}

.middle {
  width: 100%;
}

.left {
  width: 300px;
  margin-left: -100%;
  position: relative;
  left: -300px;
}

.right {
  width: 250px;
  margin-left: -250px;
  position: relative;
  right: -250px;
}

.home-card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
