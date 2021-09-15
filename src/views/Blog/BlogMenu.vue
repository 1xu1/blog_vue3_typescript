<template>
  <h4>目录</h4>
  <div
    v-for="anchor in titles"
    :key="anchor.key"
    @click="handleAnchorClick(anchor)"
    class="menu-item"
  >
    <a :style="{ margin: `10px 0 10px ${anchor.indent * 20}px` }">{{
      anchor.title
    }}</a>
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
  public handleAnchorClick(anchor: { lineIndex: string }): void {
    this.$emit("handleAnchorClick", anchor.lineIndex);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/utils.css";

.menu-item {
  width: 100%;
  cursor: pointer;
  padding: 10px 0px;
  font-size: 14px;
}

.menu-item:hover {
  transition: all 0.4s;
  opacity: 0.8;
  background-color: rgb(235, 237, 239, 0.5);
  border: 1px solid $DIVIDER-COLOR;
}
.menu-contanier {
  overflow: scroll;
}
</style>
