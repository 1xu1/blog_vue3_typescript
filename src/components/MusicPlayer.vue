<template>
  <div class="music-player">
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      :width="width"
      :height="height"
      :src="
        '//music.163.com/outchain/player?type=2&id=' +
        songId +
        '&auto=' +
        auto +
        '&height=66'
      "
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  props: {
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 86,
    },
    //网易云音乐的歌曲ID
    songId: {
      type: String,
      default: "503268086",
    },
    //是否自动播放，1自动播放，0不自动播放
    auto: {
      type: String,
      default: "0",
    },
  },
})
export default class MusicPlayer extends Vue {}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.music-player {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
