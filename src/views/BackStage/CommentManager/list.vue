<template>
  <div>
    <el-table :data="formData">
      <el-table-column prop="comment_id" label="ID"> </el-table-column>
      <el-table-column prop="user_id" label="用户ID"> </el-table-column>
      <el-table-column prop="blog_id" label="博文ID"> </el-table-column>
      <el-table-column prop="comment_time" label="日期"> </el-table-column>
      <el-table-column prop="comment_like" label="喜欢数"> </el-table-column>
      <el-table-column prop="comment_content" label="内容"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template v-slot="scope">
          <el-button
            type="text"
            size="small"
            @click="remove(formData[scope.$index].comment_ids)"
            >删除</el-button
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
}
</script>
<style lang="scss" scoped></style>
