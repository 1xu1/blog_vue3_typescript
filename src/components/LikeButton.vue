<template>
  <el-badge class="badge" :value="blog.blog_like">
    <button class="like" @click="clickLike()">
      <!-- <span class="like-words">{{ blog.blog_like }}</span> -->
      <i
        :class="
          slected
            ? ' like-button positive fas fa-thumbs-up'
            : ' like-button negative fas fa-thumbs-up'
        "
      ></i>
    </button>
  </el-badge>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ElBadge } from "element-plus";
@Options({
  components: { ElBadge },
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
<style lang="scss" scoped>
.like-button {
  font-size: 25px;
  position: relative;
}
.like-button:hover {
  transition: all 0.4s;
  transform: scale(1.2);
}
.positive {
  color: $ACCENT-COLOR;
}
.negative {
  color: $SECONDARY-TEXT;
}
.negative:hover {
  color: $PRIMARY-TEXT;
}
.like-words {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 3px;
  user-select: none;
  color: $SECONDARY-TEXT;
  border: 1px solid $DIVIDER-COLOR;
  background: $SECONDARY-TEXT;
  width: 100%;
  height: 6px;
  color: #ffffff;
  text-align: center;
}
.like {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 35px;
  height: 35px;
  border: 1px solid $DIVIDER-COLOR;
  border-radius: 2px;
  background: #ffffff;
}

i {
  font-style: normal;
}
.badge {
  border: $DIVIDER-COLOR;
}
</style>
