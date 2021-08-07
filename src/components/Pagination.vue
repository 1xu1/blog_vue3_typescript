<template>
  <div class="row">
    <button
      :disabled="pageNum == index"
      class="item"
      v-for="index of pages"
      :key="index"
      @click="pageTrans(index)"
    >
      {{ index }}
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  props: {
    pages: {
      Number,
    },
    pageNum: {
      Number,
      default: 1,
    },
  },
})
export default class Pagination extends Vue {
  public pageTrans(index: number): void {
    this.$emit("pageTrans", index);
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
</style>
