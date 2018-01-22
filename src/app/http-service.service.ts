import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/retry';
import {ROOT_URL} from './config';
import {Observable} from 'rxjs/Observable';

/**
 * @description 定义全局接口，封装http服务<br>
 *     封装angular原生HttpClient类
 * @date 2017-9-15
 * @author admin
 */
@Injectable()
export class HttpService {

  private rootUrl: string = ROOT_URL;

  // 注入httpClient
  constructor(private httpClient: HttpClient) {
  }

  /**
   * 文件上传
   * @param {string} url
   * @param $event
   * @param {string} fileKey
   * @param obj
   * @return {Observable<Object>}
   */
  upload(url: string, $event, fileKey: string, ...obj: any[]): Observable<Object> {
    const files = $event.target.files || $event.srcElement.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(fileKey, files[i]);
    }
    if (obj) {
      console.log(JSON.stringify(obj));
      for (let i = 0; i < obj.length; i++) {
        console.log(JSON.stringify(obj[i]));
        // 这里拼接对象
        // formData.append("obj", obj[i].value);
      }
    }
    // console.log("files", files)
    // console.log("formData", formData)
    return this.httpClient.post(this.rootUrl + url, formData);
  }

  /**
   * get请求
   * @param {string} url
   * @return {Observable<Object>}
   */
  public get(url: string): Observable<Object> {
    return this.httpClient.get(this.rootUrl + url);
  }

  /**
   * post请求
   * @param {string} url
   * @param body
   * @return {Observable<Object>}
   */
  public post(url: string, body: any | null): Observable<Object> {
    return this.httpClient.post(this.rootUrl + url, body);
  }

  /**
   * put请求
   * @param {string} url
   * @param body
   * @return {Observable<Object>}
   */
  public put(url: string, body: any | null): Observable<Object> {
    return this.httpClient.put(this.rootUrl + url, body);
  }

  /**
   * delete请求
   * @param {string} url
   * @return {Observable<Object>}
   */
  public delete(url: string): Observable<Object> {
    return this.httpClient.delete(this.rootUrl + url);
  }

}


