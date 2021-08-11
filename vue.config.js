const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("pages", resolve("src/pages"));
  },
  // 代理配置
  devServer: {
    open: true, // 告诉 dev-server 在服务器启动后打开浏览器。 将其设置为 true 以打开默认浏览器
    hotOnly: true, // 启用热模块替换（请参见 devServer.hot ），而无需页面刷新作为构建失败时的回退
    proxy: {
      "/": {
        target: "http://42.192.211.76:8083",
        changeOrigin: false,
        secure: false,
      },
    },
  },
};
