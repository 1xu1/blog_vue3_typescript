<template>
  <div class="card-border white">
    <div
      v-for="anchor in titles"
      :key="anchor.key"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="handleAnchorClick(anchor)"
    >
      <a style="cursor: pointer">{{ anchor.title }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  props: {
    titles: {
      default: [],
    },
  },
})
export default class Header extends Vue {
  public handleAnchorClick(anchor: unknown): void {
    this.$emit("handleAnchorClick", anchor);
  }
}
</script>
<style lang="scss" scoped></style>
