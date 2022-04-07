<template>
  <div>
    <BlogList></BlogList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BlogList from "./list.vue";
@Options({
  components: { BlogList },
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped></style>
