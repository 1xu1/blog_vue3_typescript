<template>
  <div>
    <Header></Header>
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
        <blog-menu
          class="blog-menu"
          :titles="titles"
          @handleAnchorClick="handleAnchorClick"
        ></blog-menu>
        <ScrollToTop></ScrollToTop>
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
import ScrollToTop from "@/components/ScrollToTop.vue";

import BlogContent from "./BlogContent.vue";
import Comment from "./Comment.vue";
import BlogHead from "./BlogHead.vue";
import BlogMenu from "./BlogMenu.vue";

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
  },
  mounted() {
    this.blog_id = this.$route.query.blog_id;
    this.getData();
    this.addBlogRead();
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
    // 提取所有标题节点
    // 转化为数组，因为querySelectorAll提取出来的是NodeList类型
    // console.log(anchors);
    // const titles = Array.from(anchors).filter((title: any) => {
    //   // console.log(title.innerText)
    //   !!title.innerText.trim();
    // }) as HTMLElement[];
    const titles = Array.from(anchors);
    // console.log("titles");
    // console.log(titles);
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
  public handleAnchorClick(lineIndex: string): void {
    const preview: any = this.$refs.preview;
    console.log(lineIndex);
    const heading = preview.$el.querySelector(
      `[data-v-md-line="${lineIndex}"]`
    );
    console.log(heading);
    console.log("!");
    if (heading) {
      console.log(heading);
      console.log("!");
      preview.scrollToTarget({
        target: heading,
        scrollContainer: window,
        top: 60,
        behavior: "smooth",
      });
    }
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
  max-width: 800px;
  padding-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  position: relative;
  flex: 1;
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
  width: 100%;
  position: sticky;
  top: 20px;
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
