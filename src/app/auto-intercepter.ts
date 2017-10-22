import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from './app-settings';
import 'rxjs/add/operator/do';

/**
 * @description 拦截器，拦截所有http请求
 *  目前实现功能：
 *    1.请求的header中增加token
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // 如果需要注入service，使用这种方式，打开注释代码即可
  // private httpService: HttpService;
  //
  // constructor(private injector: Injector) {
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const started = Date.now();
    // this.httpService = this.injector.get(HttpService); // get HttpService  within intercept
    // HttpRequest和HttpResponse是不可变的，更改的时候只能clone
    const authReq = request.clone({headers: request.headers.set('token', AppSettings.TOKEN)});
    const urlArray: string [] = authReq.url.split('?');
    // console.log('转换前的统一资源定位器 ', urlArray[1]);
    if (urlArray != null && urlArray.length >= 2) {
      let url: string = urlArray[1];
      url = this.replaceAll(url, '{', '%7B');
      url = this.replaceAll(url, '}', '%7D');
      url = this.replaceAll(url, ':', '%3A');
      url = this.replaceAll(url, '"', '%22');
      // console.log('转换后的统一资源定位器  ', url);
      const requestUrl = authReq.clone({url: urlArray[0] + '?' + url});
      // console.log('requestUrl  ', requestUrl);
      return next.handle(requestUrl);
      // .do(event => {
      //   if (event instanceof HttpResponse) {
      //     // const elapsed = Date.now() - started;
      //     // console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
      //   }
      // });
    } else {
      return next.handle(authReq);
    }
  }

  /**
   * 替换字符串中所有的相同字符
   * @param string 原字符串
   * @param reg 匹配字符串
   * @param str 要替换成的字符串
   * @returns {string}
   */
  replaceAll(string, reg, str): string {
    return string.replace(new RegExp(reg, 'gm'), str);
  }
}

