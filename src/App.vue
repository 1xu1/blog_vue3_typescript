<template>
  <Header></Header>
  <router-view />
  <music-player songId="503268086"></music-player>
  <background imgUrl="/img/background/city.jpg"></background>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MusicPlayer from "@/components/MusicPlayer.vue";
import Background from "@/components/background/Background.vue";
import Header from "@/layout/Header.vue";
@Options({
  components: { MusicPlayer, Background, Header },
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped>
@import url("~@/style/color.scss");
</style>
