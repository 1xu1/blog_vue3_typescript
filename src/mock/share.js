/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default [
  {
    url: "/api/share/getShareList",
    type: "get",
    response: (config) => {
      return {
        status: 200,
        data: {
          list:shareList,
          pages:1,
        }
      };
    }
  }
];
const shareList = [
  {
    share_title: "MD调色盘",
    share_desc: "可以帮你生成遵循MDUI规范的调色盘网站，我想不出色彩搭配时都回来这里自动生成，搭配色彩",
    share_label: "#网站",
    share_url: "https://www.materialpalette.com/",
    share_id: "1",
    share_time: "2021/09/16",
    share_like:0,
    imgUrl:'https://www.materialpalette.com/favicon.ico'
  },
  {
    share_title: "VisualStudio插件开发文档",
    share_desc: "这是一个VisualStudio插件开发的官方文档，有兴趣的同学可以去看看",
    share_label: "#文章",
    share_url: "https://docs.microsoft.com/zh-cn/visualstudio/extensibility/starting-to-develop-visual-studio-extensions?view=vs-2022",
    share_id: "2",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://www.microsoft.com/favicon.ico'
  },
  {
    share_title: "掘金",
    share_desc: "一个比较舒服的技术社区，有很多很好的技术文章",
    share_label: "#网站",
    share_url: "https://juejin.cn",
    share_id: "3",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://juejin.cn/favicon.ico'
  },
  {
    share_title: "低端影视",
    share_desc: "一个我很喜欢用的影视网站，高清快速清爽",
    share_label: "#网站",
    share_url: "https://ddrk.me",
    share_id: "4",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://ddrk.me/favicon.ico"'
  },
  {
    share_title: "编程导航",
    share_desc: "鱼皮大佬搭建的资源分享网站，本页面参考了该网站，上面有很多很棒的资源分享",
    share_label: "#网站",
    share_url: "https://www.code-nav.cn",
    share_id: "5",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png'
  },
  {
    share_title: "have i been pwned?",
    share_desc: "一个有意思的网站，用来测试你的账号是否已被泄漏",
    share_label: "#网站",
    share_url: "https://haveibeenpwned.com",
    share_id: "6",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://haveibeenpwned.com/favicon.ico'
  },
  {
    share_title: "Electron官方文档",
    share_desc: "这是一个基于JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序的强大框架，如Visual Studio Code便是由该框架构建",
    share_label: "文档",
    share_url: "https://www.electronjs.org",
    share_id: "7",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://images.cnblogs.com/cnblogs_com/YuXiang-Xu/1989588/o_2110090718561633763874(1).png'
  },
  {
    share_title: "CodePen",
    share_desc: "一个很棒的前端代码分享网站，里面有很多酷炫的网页效果及其代码",
    share_label: "#文档",
    share_url: "https://codepen.io",
    share_id: "8",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://codepen.io/favicon.ico'
  },
  {
    share_title: "FontAwesome图标库",
    share_desc: "一款很棒的图标库，本站的图标就是使用的FontAwesome图标库",
    share_label: "#文档",
    share_url: "https://fa5.dashgame.com",
    share_id: "9",
    share_time: "2021/09/24",
    share_like:0,
    imgUrl:'https://fa5.dashgame.com/favicon.ico'
  }
];
