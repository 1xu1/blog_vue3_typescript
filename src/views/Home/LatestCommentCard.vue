<template>
  <div class="latest-comment-card">
    <div v-if="loading">
      <div class="loading">
        <LoadingIcon></LoadingIcon>
      </div>
    </div>
    <div v-else style="width: 250px">
      <p>最新评论：</p>
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
import CrossLine from "@/components/things/CrossLine.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: { CrossLine },
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
  margin: 10px 0 0 10px;
  min-height: 40px;
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 5px 5px 5px 5px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.comment {
  display: block;
  overflow: hidden;
}
</style>
