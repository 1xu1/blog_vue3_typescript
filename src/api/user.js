/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import request from "./request";
export const getUserInfo = (params) => {
  return request.get("/user/getUserInfo", params);
};