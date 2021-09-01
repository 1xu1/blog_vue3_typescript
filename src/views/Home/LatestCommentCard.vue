<template>
  <div class="latest-comment-card">
    <div v-if="loading">
      <div class="loading">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>
    <div v-else style="width: 250px">
      <p style="margin-right: 5px; font-size: 20px">
        <span class="fas fa-comment"></span> 最新评论：
      </p>
      <div :key="item" v-for="item in comments" class="block">
        <div class="user">{{ item.comment_user_name }} ：</div>
        <a
          style="margin-top: 5px"
          class="comment"
          :href="'./blog?blog_id=' + item.blog_id + '#' + item.floor"
          >{{ commentContent(item.comment_content) }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import LoadingIcon from "@/components/things/LoadingIcon.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: { LoadingIcon },
  mounted() {
    this.getDate();
  },
  computed: {
    commentContent() {
      return function (text: string) {
        if (text.length > 20) {
          return text.slice(0, 20) + "...";
        }
        return text;
      };
    },
  },
})
export default class latestCommentCard extends Vue {
  public comments = null;
  public loading = true;
  public getDate(): void {
    axios
      .get("/api/getLatestComment")
      .then((res) => {
        this.comments = res.data.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
a {
  cursor: pointer;
  color: #757575;
  text-decoration: none;
  background-color: transparent;
}

.block {
  border: 1px solid #ebeef5;
  padding: 10px;
  margin: 10px 0 0 10px;
  min-height: 40px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}

.block:hover {
  transition: all 0.4s;
  background-color: #e0e0e0;
}

.user {
  line-height: 20px;
  font-weight: 500;
  color: #212121;
}

.loading {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.latest-comment-card {
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #ebeef5;
  padding: 10px 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.latest-comment-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.comment {
  display: block;
  overflow: hidden;
}
</style>
