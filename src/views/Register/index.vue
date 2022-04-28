<template>
  <el-form label-width="80px" label-position="top">
    <el-form-item label="用户名" prop="form.login_id">
      <el-input placeholder="请输入用户名" clearable v-model="form.login_id" />
    </el-form-item>
    <el-form-item label="密码" prop="form.login_pwd">
      <el-input
        placeholder="请输入密码"
        v-model="form.login_pwd"
        clearable
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="form.login_pwd">
      <el-input
        placeholder="请重复输入密码"
        v-model="form.login_pwd"
        clearable
        show-password
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class index extends Vue {}
</script>
<style lang="scss" scoped></style>
