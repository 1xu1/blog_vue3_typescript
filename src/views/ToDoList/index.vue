<template>
  <div>
    <Header></Header>
    <div class="contanier">
      <to-do-list></to-do-list>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import ToDoList from "./ToDoList.vue";
@Options({
  components: { Footer, Header, ToDoList },
})
export default class toDoList extends Vue {}
</script>
<style lang="scss" scoped>
.contanier {
  position: relative;
  height: 1024px;
  background: #d7ccc8;
  margin: 10px 10px 10px 10px;
}
</style>
