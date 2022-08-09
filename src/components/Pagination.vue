<template>
  <div class="row">
    <div v-show="pageNum > 6">
      <button class="item" @click="pageTrans(1)">1</button>
      <span class="padItem">···</span>
    </div>
    <div :key="index" v-for="index of pages">
      <button
        :disabled="pageNum == index"
        class="item"
        v-show="Math.abs(index - pageNum) < 5"
        :key="index"
        @click="pageTrans(index)"
      >
        {{ index }}
      </button>
    </div>
    <div v-show="pages != pageNum && pages > 9">
      <span class="padItem">···</span>
      <button class="item" @click="pageTrans(pages)">{{ pages }}</button>
    </div>
    <div v-show="pages > 9">
      <input class="item-input" v-model="goToPage" />
      <el-button @click="pageTrans(goToPage)">跳转页面</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ElButton } from "element-plus/lib/components";

@Options({
  components: { ElButton },
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
  public goToPage = 1;
  public pageTrans(index: number): void {
    this.goToPage = index;
    this.$emit("pageTrans", index);
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-direction: row;
}
.padItem {
  color: #fff;
}
.item-input {
  width: 35px;
  height: 33px;
  border-radius: 5px;
}
.item {
  margin: 5px;
  width: 35px;
  height: 35px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  color: #606266;
  cursor: pointer;
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
