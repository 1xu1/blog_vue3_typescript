/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import request from "./request";
export const getShareList = (params) => {
  return request.get("/share/getShareList", params);
};
