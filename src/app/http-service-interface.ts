/**
 * @description 定义全局接口，封装http服务，便于项目更换http请求方式
 * @date 2017-9-15
 * @author admin
 */
export interface HttpServiceInterface {


  /**
   * @description get请求
   * @param {string} url
   * @param {(data: any) => void} data
   * @param {(error: any) => void} error
   * @return void
   */
  get(url: string, data: (data: any) => void, error: (error: any) => void): void;


  /**
   * @description get请求,失败后自动重新请求，默认重试3次
   * @param {string} url
   * @param {(data: any) => void} data
   * @param {(error: any) => void} error
   * @param {number} retry
   */
  getRetry(url: string, data: (data: any) => void, error: (error: any) => void, retry: number): void ;

  /**
   * @description post请求
   * @param {string} url
   * @param {Object} body
   * @param {(data: any) => void} data
   * @param {(error: any) => void} error
   */
  post(url: string, body: any | null, data: (data: any) => void, error: (error: any) => void): void;

  /**
   * @description post请求,失败后自动重新请求，默认重试3次
   * @param {string} url
   * @param {any} body
   * @param {(data: any) => void} data
   * @param {(error: any) => void} error
   * @param {number} retry
   */
  postRetry(url: string, body: any | null, data: (data: any) => void, error: (error: any) => void, retry: number): void;


  /**
   * @description 文件上传
   * @param {string} url 地址
   * @param {any} $event 文件选择事件
   * @param {(data: any) => void} data  回调函数，data
   * @param {(error: any) => void} error  回调函数，error
   * @param {string} fileKey  文件的name，对应后台接受时的key
   * @param obj  其他非文件类型，普通的表单数据，可以放多个或者一个（这里用的可变参数，理解为一个数据即可）
   */
  upload(url: string, $event: any, data: (data: any) => void, error: (error: any) => void, fileKey: string, ...obj: any[]): void;

}
