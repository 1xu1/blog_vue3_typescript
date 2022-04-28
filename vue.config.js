// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    config
      .plugin("webpack-bundle-analyzer")
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  },
  publicPath: "/", //这个必须，引入静态资源需要从根路径引入，否则会找不到静态资源
  //生产环境配置
  devServer: {
    open: true, // 告诉 dev-server 在服务器启动后打开浏览器。 将其设置为 true 以打开默认浏览器
    hotOnly: true, // 启用热模块替换（请参见 devServer.hot ），而无需页面刷新作为构建失败时的回退
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true, // 开启跨域,在本地创建一个虚拟服务器,然后发送请求的数据,并同时接收请求的数据,这样服务端和服务端进行数据交互就不会有问题
        secure: false,
      },
    },
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: "/index.html", //与output的publicPath
    },
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/style/color.scss";`,
      },
    },
  },
};
