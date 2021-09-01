<template>
  <div>
    <img :src="icon" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import wechat from "@/assets/icons/WeChat.svg";
import github from "@/assets/icons/GitHub.svg";
import qq from "@/assets/icons/QQ.svg";
import bilibili from "@/assets/icons/bilibili.svg";
@Options({
  components: {},
  props: {
    icon: {
      default: "",
      type: String,
    },
    content: {
      default: "",
      type: String,
    },
  },
  watch: {
    icon(newVal, oldVal) {},
  },
})
export default class Icons extends Vue {}
</script>
<style scoped></style>
