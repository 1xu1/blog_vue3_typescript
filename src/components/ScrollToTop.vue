<template>
  <div @click="toTop()" class="item">
    <span class="fas fa-arrow-alt-circle-up"></span>
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
<style scoped>
@import url("~@/assets/css/utils.css");
.item {
  cursor: pointer;
  position: fixed;
  right: 220px;
  bottom: 130px;
  z-index: 99;
  font-size: 35px;
}
</style>
