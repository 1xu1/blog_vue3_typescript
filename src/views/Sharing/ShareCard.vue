<template>
  <div class="share-card">
    <div class="row">
      <img class="img" :src="img" />
      <div class="column" style="align-items: flex-start">
        <span class="title">{{ title }}</span>
        <div style="margin: 0 0 5px 0px">
          <span v-for="item in getLabels(label)" :key="item" class="label">{{
            item
          }}</span>
        </div>
        <span class="desc">{{ desc }}</span>
      </div>
    </div>

    <div class="button-line">
      <a
        style="cursor: pointer"
        :href="url"
        target="_blank"
        class="fa fa-link url item"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: {
      default: "暂无标题",
      type: String,
    },
    label: {
      default: "",
      type: String,
    },
    desc: {
      default: "···",
      type: String,
    },
    url: {
      default: "",
      type: String,
    },
    likeNum: {
      default: 0,
      type: Number,
    },
    shareId: {
      default: "",
      type: String,
    },
    img: {
      default: "",
      type: String,
    },
  },
})
export default class ShareCard extends Vue {
  getLabels(label: string): Array<string> {
    return label.split("#").filter((item) => {
      return item;
    });
  }
  public jumpTo(url: string): void {
    window.open(url);
  }
}
</script>

<style lang="scss" scoped>
@import url("~@/assets/css/utils.css");
.button-line {
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  border-top: $DIVIDER-COLOR 1px solid;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  .item {
    width: 33.3%;
    border-left: $DIVIDER-COLOR 1px solid;
    // border-right: $DIVIDER-COLOR 1px solid;
    display: flex;
    justify-content: center;
  }
}
.img {
  float: left;
  width: 80px;
  height: 80px;
  padding: 24px;
}
.share-card {
  position: relative;
  background: #fff;
  border: 1px solid $DIVIDER-COLOR;
  border-radius: 2px;
  width: 350px;
  height: 216px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 5px;
  // padding: 24px;

  .title {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 19px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font: 600 1.2em "Fira Sans", sans-serif;
    margin: 24px 0 12px 0;
  }

  .label {
    padding: 2px;
    color: $PRIMARY-TEXT;
    border: 1px solid #29b6f6;
    border-radius: 4px;
    font-size: 14px;
  }

  .desc {
    color: $SECONDARY-TEXT;
    overflow: hidden;
    font-size: 14px;
  }

  .url {
    color: rgba(0, 0, 0, 0.85);
  }
}

.share-card:hover {
  transition: all 0.4s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
} /*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
} /*已经访问过的链接*/
a:visited {
  text-decoration: none;
} /*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
} /* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>
