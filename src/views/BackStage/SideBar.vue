<template>
  <el-menu router active-text-color="#1976D2">
    <el-menu-item index="/BackStage/BlogList"
      ><i class="el-icon-document"></i
      >{{ displayMenuContent[0][this.userPermission] }}</el-menu-item
    >
    <el-menu-item index="/BackStage/CommentList"
      ><i class="el-icon-document"></i
      >{{ displayMenuContent[1][this.userPermission] }}</el-menu-item
    >
    <el-menu-item v-if="userPermission == 'admin'" index="/BackStage/ShareList"
      ><i class="el-icon-document"></i
      >{{ displayMenuContent[2][this.userPermission] }}</el-menu-item
    >
    <el-menu-item v-if="userPermission == 'admin'" index="/BackStage/UserList"
      ><i class="el-icon-document"></i>用户列表</el-menu-item
    >
    <el-menu-item v-if="userPermission == 'admin'" index="/BackStage/LogList"
      ><i class="el-icon-document"></i>运行日志</el-menu-item
    >
    <el-menu-item index="/BackStage/LikeList"
      ><i class="el-icon-document"></i>我的喜欢</el-menu-item
    >
    <el-menu-item index="/BackStage/UserConfig"
      ><i class="el-icon-document"></i>个人资料</el-menu-item
    >
  </el-menu>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMessage,
} from "element-plus";
@Options({
  components: { ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup },
  mounted() {
    let userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      this.userPermission = JSON.parse(userInfo).user_permission;
    } else {
      ElMessage.error("登录信息异常，请重新登录");
    }
  },
})
export default class SideBar extends Vue {
  public userPermission = "";
  public displayMenuContent = [
    {
      admin: "网站博文",
      user: "我的博文",
    },
    {
      admin: "网站评论",
      user: "我的评论",
    },
    {
      admin: "网站分享",
      user: "我的分享",
    },
  ];
}
</script>
<style lang="scss" scoped></style>
