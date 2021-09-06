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
<style lang="scss" scoped>
.line {
  height: 1px;
  background: #bdbdbd;
}
</style>
