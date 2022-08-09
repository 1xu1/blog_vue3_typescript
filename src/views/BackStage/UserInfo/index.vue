<template>
  <div class="back-ground">
    <el-form
      :model="user"
      label-width="120px"
      label-position="left"
      style="width: 500px"
    >
      <el-form-item label="昵称" required>
        <el-input
          v-model="user.user_name"
          maxlength="10"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="头像链接">
        <el-input v-model="user.user_head"></el-input>
      </el-form-item>
      <el-form-item label="友链">
        <el-input v-model="user.user_link"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="user.user_gender">
          <el-radio label="1" size="small"> 男</el-radio>
          <el-radio label="0" size="small">女</el-radio>
          <el-radio label="2" size="small">其它</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input v-model="user.user_email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSave">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { updateUserInfo, getUserInfo } from "@/api/user";
import {
  ElInput,
  ElForm,
  ElFormItem,
  ElRadio,
  ElRadioGroup,
  ElButton,
  ElMessage,
} from "element-plus/lib/components";
@Options({
  components: {
    ElInput,
    ElForm,
    ElFormItem,
    ElRadio,
    ElRadioGroup,
    ElButton,
  },
  mounted() {
    const userinfo = sessionStorage.getItem("userInfo");
    if (userinfo) {
      this.user = JSON.parse(userinfo);
      this.refresh();
    } else {
      ElMessage.error("登录状态错误");
    }
  },
})
export default class Template extends Vue {
  public user = {
    user_name: "",
    user_head: "",
    user_link: "",
    user_gender: "2",
    user_email: "",
    user_id: "",
  };
  public onSave(): void {
    updateUserInfo(this.user)
      .then(() => {
        this.refresh();
        ElMessage.success("编辑成功");
      })
      .catch((err: any) => {
        ElMessage.error("编辑失败");
        ElMessage.error(err);
      });
  }
  public refresh(): void {
    getUserInfo({
      user_id: this.user.user_id,
    })
      .then((res: any) => {
        sessionStorage.setItem("userInfo", JSON.stringify(res.data));
        this.user = res.data;
      })
      .catch((err: any) => {
        ElMessage.error("获取用户信息失败");
        ElMessage.error(err);
      });
  }
}
</script>
<style lang="scss" scoped>
.back-ground {
  border: 1px solid #ebeef5;
  padding: 10px 10px;
  background: white;
}
</style>
