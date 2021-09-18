/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default [
  {
    url: "/api/share/getShareList",
    type: "get",
    response: (config) => {
      return {
        status: 200,
        data: shareList
      };
    }
  }
];
const shareList = [
  {
    share_title: "百度",
    share_desc: "这是一个百度网站",
    share_label: "#test1#test2",
    share_url: "www.baidu.com",
    share_id: "1",
    share_time: "2021/09/16"
  }
];
