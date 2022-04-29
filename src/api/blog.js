import request from "./request";
export const addBlogLike = (params) => {
  return request.post("/blog/addBlogLike", params);
};
export const getBlogList = (params) => {
  return request.get("/getBlogList", params);
};
