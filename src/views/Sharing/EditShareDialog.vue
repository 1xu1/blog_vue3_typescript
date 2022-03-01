<template>
  <el-form :model="share">
    <el-form-item label="资源名称">
      <el-input v-model="share.share_title"></el-input>
    </el-form-item>
    <el-form-item label="资源标签">
      <el-input v-model="share.share_label"></el-input>
    </el-form-item>
    <el-form-item label="资源链接">
      <el-input v-model="share.share_url"></el-input>
    </el-form-item>
    <el-form-item label="资源图片(url)">
      <el-input v-model="share.img_url"></el-input>
    </el-form-item>
    <el-form-item label="资源简介">
      <el-input v-model="share.share_desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="add">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { ElInput, ElForm, ElFormItem, ElButton, ElMessage } from "element-plus";

import { addShare } from "@/api/share";

@Options({
  components: { ElInput, ElForm, ElFormItem, ElButton },
})
export default class Template extends Vue {
  public share = {
    share_title: "",
    share_label: "",
    img_url: "",
    share_desc: "",
    share_url: "",
  };
  public add() {
    addShare(this.share)
      .then(() => {
        ElMessage.success("添加成功");
      })
      .catch((err: any) => {
        console.log(err);
        ElMessage.error("添加失败");
      });
  }
}
</script>
<style lang="scss" scoped></style>
