<template>
  <el-form :model="this.share" label-width="120px">
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
  </el-form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { ElInput, ElForm, ElFormItem } from "element-plus";

@Options({
  components: { ElInput, ElForm, ElFormItem },
  props: {
    share: {
      type: Object,
      default: {
        share_title: "",
        share_label: "",
        img_url: "",
        share_desc: "",
        share_url: "",
      },
    },
  },
})
export default class Template extends Vue {}
</script>
<style lang="scss" scoped></style>
