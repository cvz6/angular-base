/**
 * 描述：apis的集合
 * 组成：[{key:value},...]
 * 注：
 * <b>key命名方式为 请求方式_模块名称_业务名称 例：get_app_user_list <b>
 * <b>value为，请求方式，url路径，描述组成的对象 <b>
 */
export const appApis = {
  'get_app_token': 'hscloud/token', // get获得token
  'get_app_data': 'hscloud/api', // get获得数据
  'get_app_code': 'hscloud/message', // get获得消息
  'post_app_data': 'user/upload', // post上传数据
  'upload_app_file': 'hscloud/file' // upload上传文件
};
