<template>
  <div>
    <Header></Header>
    <div style="margin-top: -22px">
      <BlogHead :blog_id="blog_id" :blog="blog" :loading="loading"></BlogHead>
    </div>
    <div class="container">
      <div>
        <div class="content_block">
          <BlogContent
            :text="blog.blog_content"
            :loading="loading"
          ></BlogContent>
          <div style="position: relative; left: 90%">
            <LikeButton
              @clickLike="clickLike()"
              :blog_id="blog_id"
              :blog="blog"
            ></LikeButton>
          </div>
        </div>
        <Comment
          :blog_id="blog_id"
          style="background-color: #fff; margin-top: 10px"
        ></Comment>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import LikeButton from "@/components/LikeButton.vue";

import BlogContent from "./BlogContent.vue";
import Comment from "./Comment.vue";
import BlogHead from "./BlogHead.vue";

import axios from "axios";
@Options({
  components: { Footer, Header, BlogContent, Comment, LikeButton, BlogHead },
  mounted() {
    this.blog_id = this.$route.query.blog_id;
    this.getData();
    this.addBlogRead();
  },
})
export default class Blog extends Vue {
  public blog_id = "";
  public blog = {
    blog_like: 0,
  };
  public loading = true;
  public clickLike(): void {
    axios
      .post("/api/addBlogLike", {
        blog_id: this.blog_id,
      })
      .then((res) => {
        this.blog.blog_like++;
      });
  }
  //读取博文数据
  getData(): void {
    axios
      .get("/api/getBlogById", {
        params: {
          blog_id: this.blog_id,
        },
      })
      .then((res) => {
        this.blog = res.data.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log("诶呀，博文读取失败");
        console.log(err);
      });
  }
  //博文阅读量加一
  addBlogRead(): void {
    if (sessionStorage.read != this.blog_id) {
      axios
        .post("/api/addBlogRead", {
          blog_id: this.blog_id,
        })
        .then((res) => {
          sessionStorage.read = this.blog_id;
          console.log(res);
        });
    }
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.content_block {
  width: 800px;
  padding-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  position: relative;
}
</style>
