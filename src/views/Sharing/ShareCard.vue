<template>
  <div class="share-card">
    <span>{{ title }}</span>
    <span>{{ label }}</span>
    <span>{{ desc }}</span>
    <span>{{ url }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: {
      default: "暂无标题",
      type: String,
    },
    label: {
      default: "",
      type: String,
    },
    desc: {
      default: "",
      type: String,
    },
    url: {
      default: "",
      type: String,
    },
  },
})
export default class ShareCard extends Vue {}
</script>
<style lang="scss" scoped>
.share-card {
  background: #fff;
  border: 1px solid $DIVIDER-COLOR;
  width: 200px;
  height: 123.6px;
}
</style>
