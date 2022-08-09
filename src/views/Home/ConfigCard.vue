<template>
  <div class="config-card">
    <div class="colomn">
      <el-switch></el-switch>
    </div>
  </div>
</template>

<script lang="ts">
//引入组件
import BuyMeCofee from "@/components/BuyMeCofee.vue";
import { Options, Vue } from "vue-class-component";
import { ElSwitch } from "element-plus/lib/components";
@Options({
  components: { BuyMeCofee, ElSwitch },
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
a {
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

.config-card {
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #ebeef5;
  padding: 10px 10px 10px 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.config-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
