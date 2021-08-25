<template>
  <el-menu
    :default-openeds="['1', '1']"
    default-active="/BackStage/BlogList"
    router
    active-text-color="#1976D2"
  >
    <el-submenu index="1">
      <template v-slot:title><i class="el-icon-data-line"></i>信息</template>
      <el-menu-item-group>
        <el-menu-item index="/BackStage/BlogList"
          ><i class="el-icon-document"></i>列表</el-menu-item
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
<style scoped>
@import url("~@/assets/css/utils.css");
</style>
