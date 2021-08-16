<template>
  <div>
    <div class="row"><el-input></el-input><el-button>筛选</el-button></div>
    <br />
    <el-table :data="blog">
      <el-table-column prop="blog_id" label="ID"> </el-table-column>
      <el-table-column prop="blog_title" label="标题"> </el-table-column>
      <el-table-column prop="blog_writer" label="作者"> </el-table-column>
      <el-table-column prop="blog_label" label="标签"> </el-table-column>
      <el-table-column prop="blog_time" label="日期"> </el-table-column>
      <el-table-column prop="blog_like" label="喜欢"> </el-table-column>
      <el-table-column prop="blog_read" label="阅读量"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template v-slot="scope">
          <el-button type="text" size="small" @click="jumpToBlog(scope.$index)"
            >查看</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="jumpToEditor(scope.$index)"
            >编辑</el-button
          >
          <el-button
            v-if="blog[scope.$index].blog_visibility == 1"
            type="text"
            size="small"
            @click="visBlog(scope.$index, 0)"
            >隐藏</el-button
          >
          <el-button
            v-else
            type="text"
            size="small"
            @click="visBlog(scope.$index, 1)"
            >显示</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <PagesButton :pageNum="page" :pages="pageTotal" @change=""></PagesButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PagesButton from "@/components/Pagination.vue";
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElMessage,
  ElInput,
} from "element-plus";
import axios from "axios";
@Options({
  components: { PagesButton, ElTable, ElTableColumn, ElButton, ElInput },
  mounted() {
    if (this.$route.query.page != undefined) {
      this.page = this.$route.query.page;
    }
    if (this.$route.query.limit != undefined) {
      this.limit = this.$route.query.limit;
    }
    if (!sessionStorage.login_stat) {
      alert("登录状态异常，跳转回首页！");
      this.rou.replace("/");
    } else {
      this.getData();
    }
  },
})
export default class list extends Vue {
  //博文列表
  public blog = [{ blog_id: "", blog_visibility: 0 }];
  public page = 1;
  public pageTotal = 1;
  public limit = 20;
  //查看
  jumpToBlog(index: never): void {
    const blog_id = this.blog[index].blog_id;
    window.location.href = "/blog?blog_id=" + blog_id;
  }
  //编辑
  jumpToEditor(index: never): void {
    window.location.href = "/blogEditor?blog_id=" + this.blog[index].blog_id;
  }
  //读取全部的博文数据
  getData(): void {
    axios
      .get("/api/admin/getAllBlog", {
        params: {
          start: this.page,
          limit: this.limit,
        },
        headers: {
          Token: sessionStorage.login_stat,
        },
      })
      .then((res) => {
        this.blog = res.data.data.list;
        this.page = res.data.data.pageNum;
        this.pageTotal = res.data.data.pages;
      })
      .catch((err) => {
        ElMessage.error("获取失败");
        console.log(err);
      });
  }
  //隐藏/显示博文
  visBlog(index: never, vis: number): void {
    let curBlog = this.blog[index];
    axios
      .post(
        "/api/admin/editBlogVis",
        {
          blog_id: curBlog.blog_id,
          blog_visibility: vis,
        },
        {
          headers: {
            Token: sessionStorage.login_stat,
          },
        }
      )
      .then((res) => {
        curBlog.blog_visibility = Number(vis);
        ElMessage.success("调整成功");
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("调整失败");
      });
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
</style>
