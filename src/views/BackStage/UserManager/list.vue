<template>
  <div>
    <el-table :data="formData">
      <el-table-column prop="share_id" label="ID" width="75px">
      </el-table-column>
      <el-table-column prop="share_title" label="标题" width="100px">
      </el-table-column>
      <el-table-column prop="share_label" label="标签" width="100px">
      </el-table-column>
      <el-table-column prop="share_time" label="日期" width="150px">
      </el-table-column>
      <el-table-column prop="share_like" label="喜欢数" width="75px">
      </el-table-column>
      <el-table-column prop="share_desc" label="描述" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="share_url" label="链接" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="share_visibility"
        label="可见度"
        width="75px"
      ></el-table-column>
      <el-table-column label="操作" width="150">
        <template v-slot="scope">
          <el-button
            type="text"
            size="small"
            @click="edit(formData[scope.$index])"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="remove(formData[scope.$index].share_id)"
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
