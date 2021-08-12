<template>
  <div class="like" @click="clickLike()">
    <i
      :class="
        slected ? ' like-button fas fa-heart' : ' like-button far fa-heart'
      "
    ></i>
    <span class="like-words">赞{{ blog.blog_like }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
@Options({
  components: {},
  props: {
    blog: {
      type: Object,
      default: () => {
        0;
      },
    },
    blog_id: {
      type: String,
    },
  },
})
export default class LikeButton extends Vue {
  public slected = false;
  //点击事件
  clickLike(): void {
    this.slected = true;
    this.$emit("clickLike");
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.like-button {
  font-size: 25px;
  position: relative;
}
.like-words {
  font-size: 15px;
  user-select: none;
}
.like {
  position: relative;
  color: red;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 25px;
}
i {
  font-style: normal;
}
</style>
