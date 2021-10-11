<template>
  <div @click="toTop()" class="item">
    <span class="fas fa-angle-double-up"></span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class ScrollToTop extends Vue {
  toTop(): void {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 150px;
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
</style>
