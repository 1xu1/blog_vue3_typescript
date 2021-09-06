<template>
  <img class="background" :src="imgUrl" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  props: {
    imgUrl: {
      default: "",
      type: String,
    },
  },
})
export default class Header extends Vue {
  public img: unknown;
}
</script>
<style lang="scss" scoped>
.background {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
