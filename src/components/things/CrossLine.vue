<template>
  <div class="line"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class CrossLine extends Vue {}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.line {
  height: 1px;
  background: #bdbdbd;
}
</style>
