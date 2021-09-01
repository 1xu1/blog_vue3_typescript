<template>
  <!--博文列表-->
  <div id="blogList">
    <div v-if="loading" class="loading">
      <div class="loading-center">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>
    <div v-else>
      <div
        v-for="item in blog"
        :key="item.blog_id"
        class="blog-card"
        @click="jumpToBlog(item.blog_id)"
      >
        <div class="header">
          <span class="title not-slected">{{ item?.blog_title }}</span>
        </div>
        <div class="body">
          <div class="subheading not-slected">
            <div class="item">
              <span class="fas fa-calendar-alt"></span>
              <span v-time="item.blog_time" class="tag-content"></span>
            </div>
            <div class="item">
              <span class="fas fa-user-edit"></span
              ><span class="tag-content">作者:{{ item?.blog_writer }}</span>
            </div>
            <div class="item">
              <span class="fas fa-heart"></span
              ><span class="tag-content">喜欢:{{ item?.blog_like }}</span>
            </div>
            <div class="item">
              <span class="fas fa-book-reader"></span
              ><span class="tag-content">阅读量:{{ item?.blog_read }}</span>
            </div>
            <div class="item">
              <span class="fas fa-bookmark"></span
              ><span class="tag-content"
                >标签:{{ labels(item?.blog_label) }}</span
              >
            </div>
          </div>
          <!-- <p class="not-slected">{{ ellipsis(item?.blog_content) }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoadingIcon from "@/components/things/LoadingIcon.vue";
@Options({
  components: { LoadingIcon },
  props: {
    //当前页码
    page: {
      Number,
      default: 1,
    },
    //当前页面限制展示文章数
    limit: {
      Number,
      default: 10,
    },
    //文章列表数据
    blog: {
      Object,
      default: null,
    },
    //加载状态
    loading: {
      Boolean,
      default: true,
    },
  },
})
export default class Header extends Vue {
  //跳转到博文页面
  public jumpToBlog(id: number | string): void {
    this.$router.push({
      path: "blog",
      query: {
        blog_id: id,
      },
    });
  }
  //标签格式转化
  public labels(label: string): string {
    label = label.toString();
    return label.replace(/#/g, " | ");
  }
  //博文内容格式转化
  public ellipsis(_val: string): string {
    if (!_val) return "";
    //去掉#号
    _val = _val.replace(/#/g, "");
    //超出200字符的去掉
    if (_val.length > 200) {
      return _val.slice(0, 200) + "······";
    }
    return _val;
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.loading {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.title {
  font: 600 1.2em "Fira Sans", sans-serif;
}

.blog-card {
  border: 1px solid #ebeef5;
  padding: 20px 10px;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
}

.blog-card:hover {
  transition: all 0.4s;
  background-color: #e0e0e0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.blog-card > .header {
  margin: 10px 10px 10px 10px;
}

.blog-card > .body > .subheading > .item {
  margin: 0px 10px 0px 10px;
}

.subheading {
  display: flex;
  flex-direction: row;
}

.not-slected {
  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis; /* 加省略号 */
}

.tag-content {
  margin: auto 5px;
}
</style>
