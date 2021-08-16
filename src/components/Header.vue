<template>
  <div class="head-contanier">
    <img src="@/assets/img/head.png" class="head-icon" />
    <span class="head-title">盐巴鱼的博客</span>
    <nav class="head-right">
      <router-link class="head-item" to="/home">个人博文</router-link>
      <router-link class="head-item" to="/home?page=1&label=更新日志"
        >更新日志</router-link
      >
      <router-link class="head-item" to="/">资源分享</router-link>
      <router-link class="head-item" to="/toDoList">ToDo</router-link>
    </nav>
    <el-button @click="loginVisible = true" class="head-button">登录</el-button>

    <!--登陆弹框-->
    <el-dialog title="登陆弹框" v-model="loginVisible">
      <el-form ref="form" :model="form" label-width="80px" label-position="top">
        <el-form-item label="用户名">
          <el-input
            placeholder="请输入用户名"
            v-model="form.login_id"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="form.login_pwd"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="loginVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="login(form.login_id, form.login_pwd)"
            >确 定</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import {
  ElInput,
  ElForm,
  ElFormItem,
  ElButton,
  ElDialog,
  ElMessage,
} from "element-plus";
@Options({
  components: {
    ElButton,
    ElInput,
    ElForm,
    ElFormItem,
    ElDialog,
    ElMessage,
  },
})
export default class Header extends Vue {
  public login_stat = false;
  public loginVisible = false;
  public form = {
    login_id: "abc",
    login_pwd: "abc",
  };
  public login(id: string, pwd: string): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let _this = this;
    if (sessionStorage.login_stat) {
      this.loginSucceed();
    }
    axios
      .get("/api/user/login", {
        params: {
          user_id: id,
          user_pwd: pwd,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          sessionStorage.login_stat = res.data.data;
          this.loginSucceed();
        } else _this.loginFail();
      })
      .catch(function (error) {
        _this.loginFail();
        console.log(error);
      });
  }
  public loginSucceed(): void {
    ElMessage.success("登录成功");
    this.$router.push("/BackStage");
  }
  public loginFail(): void {
    ElMessage.error("登录失败");
  }
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.head-contanier {
  display: flex;
  position: relative;
  flex-direction: row;
  height: 70px;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dee2e6;
  background: white;
}
.head-icon {
  margin: 15px 15px 15px 15px;
  height: 35px;
  border-radius: 17.5px;
}
.head-title {
  font-weight: 400;
  font-size: 1.25rem;
}
.head-right {
  margin-left: auto;
}
.head-item {
  height: 100%;
  color: #121416;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
}
.head-item:hover {
  text-decoration: underline;
}
.head-button {
  margin-left: 20px;
  margin-right: 20px;
}
.login-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 200px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
