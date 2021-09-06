<template>
  <!--博文内容块-->
  <div>
    <div v-show="loading">
      <div class="loading">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>
    <!--博文内容-->
    <div v-show="!loading">
      <v-md-preview
        @change="changeBlog"
        :text="text"
        mode="preview"
        ref="preview"
      ></v-md-preview>
    </div>
  </div>
</template>

<script lang="ts">
import LikeButton from "@/components/LikeButton.vue";
import LoadingIcon from "@/components/things/LoadingIcon.vue";
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
  components: { LikeButton, LoadingIcon, VMdPreview },
  props: {
    text: {
      String,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.preview = this.$refs.preview.$el;
  },
})
export default class BlogContent extends Vue {
  public titles: unknown[] = [];
  public preview: any = null;
  // 等待博文加载完毕
  public changeBlog(text: string): void {
    if (text.length != 0) {
      const anchors = this.preview.querySelectorAll("h1,h2,h3,h4,h5,h6");
      this.getMenuDate(anchors);
    }
  }
  // 获取目录数据
  public getMenuDate(anchors: NodeList): void {
    // 提取所有标题节点
    // 转化为数组，因为querySelectorAll提取出来的是NodeList类型
    const titles = Array.from(anchors).filter((title) => {
      let title1 = title as HTMLElement;
      !!title1.innerText.trim();
    }) as HTMLElement[];
    // 无标题处理
    if (!titles.length) {
      this.titles = [];
      return;
    }
    // 提取标签名
    const hTags = Array.from(
      new Set(titles.map((title) => title.tagName))
    ).sort();
    // 返回titles数组
    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute("data-v-md-line"),
      indent: hTags.indexOf(el.tagName),
      key: Symbol(),
    }));
  }
  public handleAnchorClick(anchor: { title: string; lineIndex: string }): void {
    const preview: any = this.$refs.preview;
    const { lineIndex } = anchor;
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

.mavon {
  background-color: white;
  border: none;
}
</style>
