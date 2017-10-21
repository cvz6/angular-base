import {Method} from "./method.enum";

/**
 * 描述：apis的集合
 * 组成：[{key:value},...]
 * 注：
 * <b>key命名方式为 请求方式_模块名称_业务名称 例：get_app_user_list <b>
 * <b>value为，请求方式，url路径，描述组成的对象 <b>
 */
export const appApis: any = {
  "get_app_token": {url: "hscloud/token", method: Method.get, description: "get获得token"},
  "get_app_data": {url: "hscloud/api", method: Method.post, description: "get获得数据"},
  "get_app_code": {url: "hscloud/message", method: Method.get, description: "get获得消息"},
  "post_app_data": {url: "user/upload", method: Method.upload, description: "post上传数据"},
  "upload_app_file": {url: "hscloud/file", method: Method.get, description: "upload上传文件"},
}
