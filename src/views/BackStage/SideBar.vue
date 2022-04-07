<template>
  <el-menu router active-text-color="#1976D2">
    <el-submenu index="1">
      <template v-slot:title
        ><i class="el-icon-data-line"></i>博文管理</template
      >
      <el-menu-item-group>
        <el-menu-item index="/BackStage/BlogList"
          ><i class="el-icon-document"></i>博文列表</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template v-slot:title
        ><i class="el-icon-data-line"></i>评论管理</template
      >
      <el-menu-item-group>
        <el-menu-item index="/BackStage/CommentList"
          ><i class="el-icon-document"></i>评论列表</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template v-slot:title
        ><i class="el-icon-data-line"></i>分享管理</template
      >
      <el-menu-item-group>
        <el-menu-item index="/BackStage/ShareList"
          ><i class="el-icon-document"></i>分享列表</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
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
