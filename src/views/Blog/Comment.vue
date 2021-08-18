/* eslint-disable no-undef */
<template>
  <div class="box-shadow comment">
    <!--评论回复功能块-->
    <div class="container">
      <input
        class="comment_input"
        placeholder="昵称"
        maxlength="8"
        v-model="commenter"
      />
      <br />
      <input
        class="comment_input"
        style="width: 40%"
        placeholder="个人站点(选填)"
        maxlength="40"
        v-model="commenter_link"
      />
      <div class="row">
        <textarea
          id="comment_reply"
          class="comment_reply"
          placeholder="请在此输入评论"
          maxlength="250"
          v-model="commenter_content"
        ></textarea>
        <button class="button_reply" @click="debounce(addComment)">回复</button>
      </div>
    </div>
    <!--评论列表-->
    <div
      :key="item.floor"
      v-for="item in comments_content"
      style="margin-top: 20px"
      :id="item.floor"
    >
      <!--单条评论渲染-->
      <hr />
      <!--渲染评论头部信息-->
      <div class="row" style="align-items: center">
        <div style="margin-left: 10px">#{{ item.floor }}</div>
        <img src="@/assets/img/default_head.png" class="head_icon" alt="..." />
        <span class="commenter_name"> {{ item.comment_user_name }}</span>
        <span class="comment_sub" v-time="item.comment_time"></span>
        <span class="comment_sub">赞{{ item.comment_like }}</span>
        <a
          class="comment_sub"
          target="_blank"
          v-if="item.comment_link"
          v-bind:href="item.comment_link"
          >#{{ item.comment_link }}</a
        >
      </div>
      <!--渲染评论内容-->
      <div class="comment-content">
        {{ item.comment_content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { ElMessage } from "element-plus";
import { IsURL, hasHttp } from "@/assets/js/utils";
@Options({
  components: { ElMessage },
  mounted() {
    this.blog_id = this.$route.query.blog_id;
    this.getComments();
  },
})
export default class Comment extends Vue {
  public comments_content: { floor: number }[] = [];
  public commenter = "";
  public commenter_link = "";
  public commenter_content = "";
  public loading = true;
  public adding = false;
  public comment_date = new Date();
  public blog_id!: string;
  //获取评论
  public getComments(): void {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    const blog_id = this.blog_id;
    axios
      .get("/api/getAllComment", {
        params: {
          blog_id: blog_id,
        },
      })
      .then((res) => {
        this.comments_content = res.data.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  public timer: number | null | undefined = null;
  //防抖
  // eslint-disable-next-line no-undef
  debounce(fn: TimerHandler, delay: number | undefined): void {
    if (this.timer) {
      ElMessage.warning("请不要频繁操作");
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(fn, delay);
  }

  //增加评论
  public addComment(): void {
    let cur_comment = 0;
    //获取当前最大楼数
    this.comments_content.forEach((item) => {
      if (item.floor >= cur_comment) {
        cur_comment = item.floor + 1;
      }
    });
    //验证输入是否正确
    if (this.commenter == "" || this.commenter == null) {
      ElMessage.error("用户名输入有问题");
      return;
    }
    let link = this.commenter_link;
    if (link == "" || link == null) {
      link = "";
    } else if (!IsURL(link)) {
      ElMessage.error("网址输入有错误");
      return;
    } else {
      link = hasHttp(link);
    }
    if (this.commenter_content == "" || this.commenter_content == null) {
      ElMessage.error("回复内容有问题");
      return;
    }
    this.commenter_link = link;
    this.comment_date = new Date();

    axios
      .post("/api/addComment", {
        comment_user_name: this.commenter,
        comment_link: this.commenter_link,
        comment_content: this.commenter_content,
        floor: cur_comment,
        blog_id: this.blog_id,
      })
      .then((res) => {
        const new_item = res.data.data;
        this.comments_content.push(new_item);
        sessionStorage.commenter = this.commenter;
        sessionStorage.comment_link = this.commenter_link;
      })
      .catch((err) => {
        ElMessage.error("诶呀，评论增加失败");
        console.log(err);
      });
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.comment {
  margin-top: 20px;
  padding: 20px 20px 20px 20px;
}

.comment-content {
  text-indent: 40px;
  position: relative;
  width: 95%;
  left: 35px;
  margin-top: 10px;
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

.head_icon {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: 5px 15px 5px 15px;
}

.subheading {
  font-size: medium;
}

.box-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
