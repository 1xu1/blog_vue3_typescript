import Mock from "mockjs";
// 存储mock的接口对象
let configArr = [];
// 一个webpack的api，通过执行require.context函数获取一个特定的上下文，用于实现自动化导入模块
// 使用情况：导入一个文件夹的多个模块，它会遍历文件夹中的指定文件
// 该行代码导入了该文件夹下所有js文件
const files = require.context(".", true, /\.js$/);
const map = {};
// keys：匹配成功模块的名字组成的数组
for (const key of files.keys()) {
  map[key] = files(key);
}
// 将文件中的每一个对象都遍历出来
files.keys().map((key) => {
  if (key === "./index.js") {
    return;
  }
  configArr = configArr.concat(map[key].default);
});
console.log(configArr);
// 拦截需要mock的接口
configArr.forEach((item) => {
  const { url, type, response } = item;
  Mock.mock(new RegExp(url), type || "get", response);
});
