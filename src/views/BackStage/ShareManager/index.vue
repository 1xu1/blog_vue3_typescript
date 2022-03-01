<template>
  <div>
    <share-list></share-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ShareList from "./list.vue";
@Options({
  components: { ShareList },
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped></style>
