<template>
  <!--博文内容块-->
  <div>
    <div v-show="loading">
      <div class="loading">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>

    <!--博文内容-->
    <div v-show="!loading" style="position: relative">
      <div class="blog-menu">
        <blog-menu
          :titles="titles"
          @handleAnchorClick="handleAnchorClick"
        ></blog-menu>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts">
import LikeButton from "@/components/LikeButton.vue";
import LoadingIcon from "@/components/things/LoadingIcon.vue";
import BlogMenu from "./BlogMenu.vue";
import { Options, Vue } from "vue-class-component";
// VMdEditor相关
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";
VMdPreview.use(vuepressTheme, {
  Prism,
});
@Options({
  components: { LikeButton, LoadingIcon, VMdPreview, BlogMenu },
  props: {
    text: {
      String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    text(newVal, oldVal) {
      if (!newVal) return;
      this.$nextTick(() => {
        const anchors =
          this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");

        this.changeBlog(newVal, anchors);
      });
    },
  },
})
export default class BlogContent extends Vue {
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
.loading {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.commenter_name {
  text-decoration: none;
  font-weight: 700;
}

.comment_sub {
  color: #757575;
  font-size: small;
  margin: 5px 5px 5px 5px;
}

.comment_reply {
  width: 90%;
  height: 70px;
  resize: none;
  font-size: small;
  outline-color: #1565c0;
  border: solid 1px #757575;
  border-radius: 3px;
}

.comment_input {
  width: 100px;
  font-size: medium;
  outline-color: #1565c0;
  border: solid 1px #757575;
  border-radius: 3px;
  margin-bottom: 15px;
}

.button_reply {
  margin-left: 5px;
  border-radius: 5px;
  width: 70px;
  height: 70px;
  border: #757575;
  flex: right;
  background-color: #2196f3;
  color: white;
}

.button_reply:hover {
  /* 鼠标移入按钮范围时改变颜色 */
  background: #1976d2;
}

.blog_body {
  background-color: white;
}

.blog-menu {
  position: sticky;
  margin-left: 820px;
  top: 20px;
}
</style>
