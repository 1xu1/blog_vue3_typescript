<template>
  <div>
    <el-table :data="formData">
      <el-table-column prop="id" label="ID" width="75px"> </el-table-column>
      <el-table-column
        prop="blog_title"
        label="博文"
        width="175px"
        show-overflow-tooltip
      >
        <template v-slot="scope">
          <router-link
            :to="'/blog?blog_id=' + formData[scope.$index].blog_id"
            >{{ formData[scope.$index].blog_title }}</router-link
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="like_num"
        label="喜欢次数"
        width="100px"
      ></el-table-column>
      <el-table-column
        prop="like_time"
        label="喜欢时间"
        width="175px"
        :formatter="timeFormater"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { dateformat } from "@/utils/utils";

import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElInput,
} from "element-plus/lib/components";

@Options({
  components: { ElTable, ElTableColumn, ElButton, ElInput },
  props: {
    formData: {
      type: Array,
      default: [],
    },
  },
})
export default class list extends Vue {
  // 添加事件
  add(): void {
    this.$emit("add");
  }
  // 编辑事件
  edit(share: never): void {
    this.$emit("edit", share);
  }
  // 删除事件
  remove(id: number): void {
    this.$emit("remove", id);
  }
  timeFormater(
    row: never,
    column: never,
    cellValue: never,
    index: never
  ): string {
    const date = new Date(cellValue);
    return dateformat(date);
  }
}
</script>
<style lang="scss" scoped></style>
