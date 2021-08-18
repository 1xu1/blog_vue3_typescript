<template>
  <!--博文内容块-->
  <div>
    <div v-if="loading">
      <div class="loading">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>
    <!--博文内容-->
    <div v-else>
      <v-md-editor v-model="text" mode="preview"></v-md-editor>
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
    text: {
      String,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
})
export default class BlogContent extends Vue {}
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
