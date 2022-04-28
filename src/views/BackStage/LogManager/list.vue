<template>
  <div>
    <el-table :data="formData">
      <el-table-column prop="log_id" label="ID" width="75px"> </el-table-column>
      <el-table-column prop="http_method" label="请求方法" width="100px">
      </el-table-column>
      <el-table-column prop="ip_address" label="请求IP" width="150px">
      </el-table-column>
      <el-table-column
        prop="time_start"
        label="请求时间"
        width="175px"
        :formatter="timeStartFormater"
      >
      </el-table-column>
      <el-table-column
        prop="time_take"
        label="请求费时"
        width="150px"
        :formatter="timeTakeFormater"
      >
      </el-table-column>
      <el-table-column prop="url" label="请求url" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { dateformat } from "@/utils/utils";

import { ElTable, ElTableColumn, ElButton, ElInput } from "element-plus";

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
  timeTakeFormater(
    row: never,
    column: never,
    cellValue: never,
    index: never
  ): string {
    return cellValue + "毫秒";
  }
  timeStartFormater(
    row: never,
    column: never,
    cellValue: never,
    index: never
  ): string {
    let time = Number(cellValue);
    const date = new Date(time);
    return dateformat(date);
  }
}
</script>
<style lang="scss" scoped></style>
