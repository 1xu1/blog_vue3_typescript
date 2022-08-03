<template>
  <img
    class="background"
    :src="imgUrl"
    :style="{ background: 'url({' + imgUrl + '}) no-repeat' }"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import RaindropFX from "raindrop-fx";
@Options({
  components: {},
  props: {
    imgUrl: {
      default: "",
      type: String,
    },
  },
  // mounted(){
  //   const canvas: any = document.querySelector("#canvas");
  //   const rect = canvas.getBoundingClientRect();
  //   canvas.width = rect.width;
  //   canvas.height = rect.height;

  //   const raindropFx = new RaindropFX({
  //     canvas: canvas,
  //     background: this.imgUrl,
  //   });

  //   window.onresize = () => {
  //     const rect = canvas.getBoundingClientRect();
  //     raindropFx.resize(rect.width, rect.height);
  //   };

  //   raindropFx.start();
  // }
})
export default class Background extends Vue {}
</script>
<style lang="scss" scoped>
.background {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
