<template>
  <main id="todolist" ref="todoItem">
    <h1>
      待办事项
      <span>毫不留情, 一次一件事.</span>
    </h1>
    <template v-if="todo.length">
      <transition-group name="todolist" tag="ul">
        <li
          v-for="item in todoByStatus"
          v-bind:class="item.done ? 'done' : ''"
          v-bind:key="item.id"
        >
          <span class="label">{{ item.label }}</span>
          <div class="actions">
            <el-checkbox v-model="item.done" class="check-box">
              {{ item.done ? "已完成" : "未完成" }}
            </el-checkbox>
            <button
              class="btn-picto"
              type="button"
              v-on:click="deleteItemFromList(item)"
              aria-label="Delete"
              title="Delete"
            >
              <i aria-hidden="true" class="material-icons">删除</i>
            </button>
          </div>
        </li>
      </transition-group>
    </template>
    <p v-else class="emptylist">Your todo list is empty.</p>

    <form name="newform" v-on:submit.prevent="addItem">
      <label for="newitem">添加事项到列表里</label>
      <input type="text" name="newitem" id="newitem" v-model="newitem" />
      <button type="submit">添加事项</button>
    </form>
  </main>
</template>

<script lang="ts">
import { toRaw } from "@vue/reactivity";
import { Options, Vue } from "vue-class-component";
import { ElCheckbox } from "element-plus";
@Options({
  components: { ElCheckbox },
  mounted() {
    this.dragable(this.$refs.todoItem);
    // 从webStorage里读取本地数据
    let sess = localStorage.getItem("todo");
    console.log(sess);
    if (sess) {
      sess = JSON.parse(sess);
      console.log(sess);
      this.todo = sess;
    }
  },
  beforeUnmount() {
    // 关闭前保存数据到webStorage里
    const todo = toRaw(this.todo);
    const storage = JSON.stringify(todo);
    localStorage.setItem("todo", storage);
  },
  props: {
    label: "",
    name: "",
  },
  computed: {
    todoByStatus() {
      if (!this.sortByStatus) {
        return this.todo;
      }

      var sortedArray = [];
      var doneArray = this.todo.filter(function (item: { done: boolean }) {
        return item.done;
      });
      var notDoneArray = this.todo.filter(function (item: { done: boolean }) {
        return !item.done;
      });

      sortedArray = [...notDoneArray, ...doneArray];
      return sortedArray;
    },
  },
})
export default class Header extends Vue {
  public newitem = "";
  public sortByStatus = false;
  public todo = [
    { id: 1, label: "Learn VueJs", done: true },
    { id: 2, label: "Code a todo list", done: false },
    { id: 3, label: "Learn something else", done: false },
  ];

  //增加事项
  public addItem(): void {
    this.todo.push({
      id: Math.floor(Math.random() * 9999) + 10,
      label: this.newitem,
      done: false,
    });
    this.newitem = "";
    console.log(this.todo);
  }

  //标记是否已做
  public markAsDoneOrUndone(item: { done: boolean }): void {
    item.done = !item.done;
  }

  //删除事项
  public deleteItemFromList(item: {
    id: number;
    label: string;
    done: boolean;
  }): void {
    let index = this.todo.indexOf(item);
    this.todo.splice(index, 1);
  }

  //点击切换
  public clickontoogle(active: boolean): void {
    this.sortByStatus = active;
  }

  //增加拖拽效果
  public dragable(el: HTMLElement): void {
    //获取拖拽实验对象
    //在该对象上绑定鼠标点击事件
    el.onmousedown = (e) => {
      //鼠标按下，计算鼠标触点距离元素左侧和顶部的距离
      let disX = e.clientX - el.offsetLeft;
      let disY = e.clientY - el.offsetTop;
      let parent = el.parentElement;
      if (parent == null) return;
      document.onmousemove = function (e) {
        if (parent == null) return;
        //计算需要移动的距离
        let tX = e.clientX - disX;
        let tY = e.clientY - disY;
        //移动当前元素
        if (tX >= 0 && tX <= parent.offsetWidth - el.offsetWidth) {
          el.style.left = tX + "px";
        }
        if (tY >= 0 && tY <= parent.offsetHeight - el.offsetHeight) {
          el.style.top = tY + "px";
        }
      };
      //鼠标松开时，注销鼠标事件，停止元素拖拽。
      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
}
</script>
<style scoped>
@keyframes strikeitem {
  to {
    width: calc(100% + 1rem);
  }
}

#todolist {
  /* margin: 4rem auto; */
  position: absolute;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  background: #795548;
  color: #fff;
}
#todolist h1 {
  /*text-align:center;*/
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
#todolist h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}

#todolist .emptylist {
  margin-top: 2.6rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-style: italic;
  opacity: 0.8;
}
#todolist ul {
  margin-top: 2.6rem;
  list-style: none;
}
#todolist .todolist-move {
  transition: transform 1s;
}
#todolist li {
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
}

#todolist .actions {
  flex-shrink: 0;
  padding-left: 0.7em;
}
#todolist .label {
  position: relative;
  transition: opacity 0.2s linear;
}
#todolist .done .label {
  opacity: 0.6;
}
#todolist .done .label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5rem;
  display: block;
  width: 0%;
  height: 1px;
  background: #fff;
  animation: strikeitem 0.3s ease-out 0s forwards;
}
#todolist .btn-picto {
  border: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #fff;
}

/* FORM */
form {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
}
form label {
  min-width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}
form input {
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
}
form button {
  padding: 0 1.3rem;
  border: none;
  background: #795548;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  transition: background 0.2s ease-out;
}
form button:hover {
  background: #5d4037;
}
form input,
form button {
  font-family: "Quicksand", sans-serif;
  height: 3rem;
}

/* TOOGLE COMPONENT */
.togglebutton-wrapper {
  margin-top: 1em;
}
.togglebutton-wrapper label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.togglebutton-wrapper input {
  position: absolute;
  left: -9999px;
}
.togglebutton-wrapper .togglebutton-label {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}
.togglebutton-wrapper .tooglebutton-box {
  position: relative;
  display: block;
  margin-left: 0.6em;
  width: 38px;
  height: 22px;
  background: white;
  /*border:1px solid black;*/
  border-radius: 999px;
  cursor: pointer;
}
.togglebutton-wrapper .tooglebutton-box:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  width: 18px;
  height: 18px;
  /*border:1px solid #FF6666;*/
  border-radius: 50%;
  background: #ff6666;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
}
.togglebutton-wrapper.togglebutton-focus .tooglebutton-box {
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.togglebutton-wrapper.togglebutton-checked .tooglebutton-box:before {
  left: calc(100% - 4px - 16px);
  opacity: 1;
}
.check-box {
  color: #fff;
}
</style>
