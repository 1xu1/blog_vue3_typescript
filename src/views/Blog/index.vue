<template>
  <div>
    <div style="margin-top: -22px">
      <BlogHead :blog_id="blog_id" :blog="blog" :loading="loading"></BlogHead>
    </div>
    <div class="container">
      <div class="left">
        <div class="button-list">
          <LikeButton
            class="like-button"
            @clickLike="clickLike()"
            :blog_id="blog_id"
            :blog="blog"
          ></LikeButton>
        </div>
      </div>
      <div class="center">
        <!-- <BlogContent
            :text="blog.blog_content"
            :loading="loading"
          ></BlogContent> -->
        <v-md-preview
          :text="blog.blog_content"
          mode="preview"
          ref="preview"
        ></v-md-preview>
        <Comment
          :blog_id="blog_id"
          style="background-color: #fff; margin-top: 10px"
        ></Comment>
      </div>
      <div class="right">
        <div class="blog-menu">
          <el-scrollbar max-height="500px">
            <blog-menu
              :titles="titles"
              @handleAnchorClick="handleAnchorClick"
            ></blog-menu>
          </el-scrollbar>
        </div>
        <ScrollToTop></ScrollToTop>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Header from "@/layout/Header.vue";
import LikeButton from "@/components/LikeButton.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

import BlogContent from "./BlogContent.vue";
import Comment from "./Comment.vue";
import BlogHead from "./BlogHead.vue";
import BlogMenu from "./BlogMenu.vue";

import { ElScrollbar } from "element-plus";

// VMdEditor相关
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";
VMdPreview.use(vuepressTheme, {
  Prism,
});

import axios from "axios";
@Options({
  components: {
    Footer,
    Header,
    BlogContent,
    Comment,
    LikeButton,
    BlogHead,
    ScrollToTop,
    VMdPreview,
    BlogMenu,
    ElScrollbar,
  },
  mounted() {
    this.blog_id = this.$route.query.blog_id;
    this.getData();
    this.addBlogRead();
    window.addEventListener("scroll", this.scrollEvent());
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollEvent);
  },
  watch: {
    blog(newVal, oldVal) {
      if (!newVal) return;
      this.$nextTick(() => {
        const anchors =
          this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");

        this.changeBlog(newVal, anchors);
      });
    },
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
        });
    }
  }
  // 目录生成相关
  public titles: unknown[] = [];
  // 等待博文加载完毕
  public changeBlog(text: string, anchors: NodeList): void {
    if (text.length != 0) {
      this.getMenuDate(anchors);
    }
  }
  // 获取目录数据
  public getMenuDate(anchors: NodeList): void {
    const titles = Array.from(anchors);
    // 无标题处理
    if (!titles.length) {
      this.titles = [];
      return;
    }
    // 提取标签名
    const hTags = Array.from(
      new Set(titles.map((title: any) => title.tagName))
    ).sort();
    // console.log(hTags);
    // 返回titles数组
    this.titles = titles.map((el: any) => ({
      title: el.innerText,
      lineIndex: el.getAttribute("data-v-md-line"),
      indent: hTags.indexOf(el.tagName),
      key: Symbol(),
    }));
    // console.log(this.titles);
  }
  // 点击目录滚动到对应位置
  public handleAnchorClick(lineIndex: string): void {
    const preview: any = this.$refs.preview;
    const heading = preview.$el.querySelector(
      `[data-v-md-line="${lineIndex}"]`
    );
    if (heading) {
      preview.scrollToTarget({
        target: heading,
        scrollContainer: window,
        top: 60,
        behavior: "smooth",
      });
    }
  }
  // 监听页面滚动事件
  public scrollEvent(): void {
    console.log(document.documentElement.scrollTop);
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.center {
  // flex: 1 1000px 800px;
  width: 800px;
  padding-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  position: relative;
}
.left {
  position: relative;
  width: 200px;
  flex: 1;
}
.right {
  position: relative;
  width: 200px;
  flex: 1;
}
.blog-menu {
  margin: 10px;
  left: 20px;
  position: sticky;
  top: 20px;
  background: #fff;
  border: 1px solid #ebeef5;
  padding: 5px 10px;
}
.like-button {
  margin: 10px;
  position: sticky;
  right: 20px;
  top: 20px;
  margin-right: 30px;
}
.button-list {
  position: sticky;
  top: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
