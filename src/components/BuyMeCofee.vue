<template>
  <div>
    <div class="buy-column">
      <span>给我买杯咖啡吧</span>
      <div @click="visibility = !visibility" class="hover-item">
        <span class="fas fa-coffee"></span>
      </div>
    </div>
    <div v-show="visibility" class="buy-contanier buy-contanier-shadow-card">
      <div class="buy-column">
        <span class="buy-words">支付宝</span>
        <img class="buy-img" src="@/assets/img/AliPay.jpg" />
      </div>
      <div class="buy-column">
        <span class="buy-words">微信</span>
        <img class="buy-img" src="@/assets/img/WeChat.jpg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class Header extends Vue {
  public visibility = false;
}
</script>
<style scoped>
@import url("~@/assets/css/utils.css");
.buy-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.buy-contanier {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: row;
  left: 15px;
  margin: 20px 0 0 0;
}

.buy-contanier-shadow-card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.buy-img {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 10px;
}

.buy-icon {
  width: 50px;
  height: 50px;
}

.buy-words {
  margin: 10px 0 0 0;
}

.hover-item {
  background: transparent;
  width: 50px;
  height: 50px;
  font-size: 48px;
  cursor: pointer;
  margin: 10px 10px;
}
</style>
