<template>
  <div>
    <div class="tool-bar">
      <span>博文标题</span>
      <input v-model="blog.blog_title" />
      <span class="itemsInLine">博文标签</span>
      <input type="text" v-model="blog.blog_label" />
      <button @click="save()">保存</button>
      <button @click="addBlog()">新建</button>
      <button @click="addBlogByTemplate()">模版新建</button>
      <button v-show="blog.blog_visibility == 0" @click="editVis(1)">
        发布
      </button>
      <button v-show="blog.blog_visibility == 1" @click="editVis(0)">
        隐藏
      </button>
      <button @click="pushBack()">返回</button>
    </div>
    <v-md-editor
      v-model="blog.blog_content"
      @save="save()"
      :height="vmHeight"
    ></v-md-editor>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { ElMessage } from "element-plus";
// VMdEditor相关
import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";
VMdEditor.use(vuepressTheme, {
  Prism,
});
@Options({
  components: { VMdEditor },
  mounted() {
    if (!sessionStorage.login_stat) {
      alert("登录状态异常，跳转回首页！");
      this.$router.replace("/");
    } else {
      this.getData();
    }
    // 获取窗口大小，自适应vm编辑器高度
    this.vmHeight = window.innerHeight - 50 + "px";
  },
})
export default class BlogEditor extends Vue {
  public blog = {
    blog_id: null,
    blog_title: null,
    blog_content: "",
    blog_like: null,
    blog_label: null,
    blog_time: null,
    blog_read: null,
    blog_writer: null,
    blog_visibility: 0,
    blog_create_time: null,
  };
  public vmHeight = "";
  //返回
  pushBack(): void {
    this.$router.go(-1);
  }
  //保存修改
  public save(): void {
    axios
      .post(
        "/api/admin/editBlog",
        {
          blog_id: this.blog.blog_id,
          blog_content: this.blog.blog_content,
          blog_title: this.blog.blog_title,
          blog_label: this.blog.blog_label,
        },
        {
          headers: {
            Token: sessionStorage.login_stat,
          },
        }
      )
      .then((res) => {
        ElMessage.success("保存成功");
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("保存失败");
      });
  }
  //发布/隐藏博文 1显示 0隐藏
  editVis(vis: number): void {
    axios
      .post(
        "/api/admin/editBlogVis",
        {
          blog_id: this.blog.blog_id,
          blog_visibility: vis,
        },
        {
          headers: {
            Token: sessionStorage.login_stat,
          },
        }
      )
      .then((res) => {
        this.blog.blog_visibility = vis;
        ElMessage.success("调整成功");
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("调整失败");
      });
  }
  addBlogByTemplate(): void {
    axios
      .post(
        "/api/admin/addBlog",
        {
          blog_content: this.blog.blog_content,
          blog_title: this.blog.blog_title,
          blog_label: this.blog.blog_label,
          blog_writer: "徐宇翔",
        },
        {
          headers: {
            Token: sessionStorage.login_stat,
          },
        }
      )
      .then((res) => {
        ElMessage.success("新增成功");
        this.$router.replace("/blogEditor?blog_id=" + res.data);
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("新增失败");
      });
  }
  //新增博文
  addBlog(): void {
    axios
      .post(
        "/api/admin/addBlog",
        {
          blog_content: "",
          blog_title: "",
          blog_label: "",
          blog_writer: "徐宇翔",
        },
        {
          headers: {
            Token: sessionStorage.login_stat,
          },
        }
      )
      .then((res) => {
        ElMessage.success("新增成功");
        this.$router.replace("/blogEditor?blog_id=" + res.data);
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("新增失败");
      });
  }
  //获取博文数据
  getData(): void {
    const blog_id = this.$route.query.blog_id;
    axios
      .get("/api/getBlogById", {
        params: {
          blog_id: blog_id,
        },
      })
      .then((res) => {
        this.blog = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        ElMessage.error("获取失败");
      });
  }
}
</script>
<style lang="scss" scoped>
.editor {
  height: 700px;
}

.tool-bar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.itemsInLine {
  margin-left: 10px;
}
</style>
