<template>
  <div>
    <el-table :data="formData">
      <el-table-column prop="user_id" label="ID" width="75px">
      </el-table-column>
      <el-table-column prop="user_name" label="用户昵称" width="100px">
      </el-table-column>
      <el-table-column
        prop="user_link"
        label="用户链接"
        width="150px"
        :formatter="testNull"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="user_gender"
        label="性别"
        width="50px"
        :formatter="genderFormatter"
      >
      </el-table-column>
      <el-table-column
        prop="user_permission"
        label="用户权限"
        width="100px"
        :formatter="userPermission"
      >
      </el-table-column>
      <el-table-column
        prop="user_email"
        label="用户邮箱"
        :formatter="testNull"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="register_time"
        label="用户注册时间"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template v-slot="scope">
          <el-button
            type="text"
            size="small"
            @click="remove(formData[scope.$index].user_id)"
            >封禁</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="add(formData[scope.$index].user_id)"
            >解禁</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

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
  add(id: number): void {
    this.$emit("add", id);
  }
  // 编辑事件
  edit(share: never): void {
    this.$emit("edit", share);
  }
  // 删除事件
  remove(id: number): void {
    this.$emit("remove", id);
  }
  // 检测是否为空
  testNull(row: never, column: never, cellValue: never, index: never): string {
    if (!cellValue) return "暂无";
    else return cellValue;
  }
  private permission = {
    user: "普通用户",
    admin: "管理员",
    blocked: "封禁用户",
  };
  // 用户权限
  userPermission(
    row: never,
    column: never,
    cellValue: never,
    index: never
  ): string {
    if (!cellValue) return "暂无";
    else return this.permission[cellValue];
  }
  // 性别
  private gender = {
    "1": "男",
    "0": "女",
  };
  genderFormatter(
    row: never,
    column: never,
    cellValue: never,
    index: never
  ): string {
    if (!cellValue) return "未知";
    else return this.gender[cellValue];
  }
}
</script>
<style lang="scss" scoped></style>
