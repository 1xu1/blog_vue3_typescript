<template>
  <el-menu router active-text-color="#1976D2">
    <el-menu-item index="/BackStage/BlogList"
      ><i class="el-icon-document"></i>博文列表</el-menu-item
    >
    <el-menu-item index="/BackStage/CommentList"
      ><i class="el-icon-document"></i>评论列表</el-menu-item
    >
    <el-menu-item index="/BackStage/ShareList"
      ><i class="el-icon-document"></i>分享列表</el-menu-item
    >
    <el-menu-item index="/BackStage/UserList"
      ><i class="el-icon-document"></i>用户列表</el-menu-item
    >
    <el-menu-item index="/BackStage/LogList"
      ><i class="el-icon-document"></i>运行日志</el-menu-item
    >
    <el-menu-item index="/BackStage/LikeList"
      ><i class="el-icon-document"></i>你的喜欢</el-menu-item
    >
    <el-menu-item index="/BackStage/UserConfig"
      ><i class="el-icon-document"></i>个人资料</el-menu-item
    >
  </el-menu>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup } from "element-plus";
@Options({
  components: { ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup },
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped></style>
