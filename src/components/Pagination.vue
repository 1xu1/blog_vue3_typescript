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
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.item {
  margin-left: 10px;
  width: 35px;
  height: 35px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  color: #606266;
}
.item:hover {
  background: rgba(26, 115, 132, 0.06);
  transition: all 0.4s;
}
.item:active {
  background: rgba(26, 115, 132, 0.5);
}
.item:disabled {
  border: 1px solid #ebeef5;
  color: #e0e0e0;
}
</style>
