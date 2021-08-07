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
      <router-link class="head-item" to="/">项目分享</router-link>
    </nav>
    <button @click="login()" class="head-button">登录</button>
    <!-- <Login :loginVisible='loginDialog'></Login> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class Header extends Vue {}
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
</style>
