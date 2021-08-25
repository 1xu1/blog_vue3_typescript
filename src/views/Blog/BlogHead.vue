<template>
  <div>
    <div v-if="loading">
      <div class="loading">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>
    <!--博文信息相关-->
    <div v-else class="head_info">
      <h1 class="blog_title">
        {{ blog.blog_title }}
      </h1>
      <div class="info_row">
        <div class="blog_info">
          <span class="fas fa-calendar-alt"></span>
          <span v-time="blog.blog_time" class="tag-content"></span>
        </div>
        <div class="blog_info">
          <span class="fas fa-user-edit"></span
          ><span class="tag-content">作者:{{ blog?.blog_writer }}</span>
        </div>
        <div class="blog_info">
          <span class="fas fa-heart"></span
          ><span class="tag-content">喜欢:{{ blog?.blog_like }}</span>
        </div>
        <div class="blog_info">
          <span class="fas fa-book-reader"></span
          ><span class="tag-content">阅读量:{{ blog?.blog_read }}</span>
        </div>
        <div class="blog_info">
          <span class="fas fa-bookmark"></span
          ><span class="tag-content">标签:{{ labels(blog?.blog_label) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LikeButton from "@/components/LikeButton.vue";
import LoadingIcon from "@/components/things/LoadingIcon.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: { LikeButton, LoadingIcon },
  props: {
    blog_id: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    blog: {
      type: Object,
      default: null,
    },
  },
})
export default class BlogContent extends Vue {
  //标签格式转化
  public labels(label: string): string {
    label = label.toString();
    return label.replace(/#/g, " | ");
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.head_info {
  background-color: black;
  background-image: url(~@/assets/img/head_3.jpg);
  background-size: contain;
  line-height: 100%;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.blog_title {
  width: 100%;
  color: aliceblue;
  text-shadow: 0 3px 6px rgb(0 0 0 / 30%);
  font-weight: 700;
  display: flex;
  justify-content: center;
  position: relative;
  top: 60px;
}
.info_row {
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  top: 60px;
}

.blog_info {
  color: gainsboro;
  padding-left: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.loading {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.tag-content {
  margin: auto 5px;
}
</style>
