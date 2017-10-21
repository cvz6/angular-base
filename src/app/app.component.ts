import {Component} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {appApis} from './apis';
import {UUID} from 'angular2-uuid';
import {AppSettings} from './app-settings';
import {ROOT_URL} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  ngOnInit() {
    //初始化的时候校验token是否存在，如果存在：初始化组件; 不存在：return，加载token后初始化组件
    this.getToken();

  }

  /**
   * @description 获取存储token
   * 接口描述：
   * 获取token，发送数据为getStr={发送数据}
   * 1、unique生成说明:
   * 采用 uuid (去掉字符之间的连接线)
   * 2、secret生成说明:
   * 拼接如下字符串：
   *    **yyyyMMdd##qdzklt(md5加密)##唯一标识**
   * 对上面的字符串进行MD5运算生成secret，如下：
   * MD5( "**" + "20170306" + "##" + MD5("qdzklt") + "##" + uuid + "**" )
   *
   * 注：这里使用jQary的同步请求加载token，因为token的加载必须在所有组件之前。
   */
  getToken(): void {
    let uuid = UUID.UUID().replace("-","").replace( /-/g , "" );
    // let uuid = this.getUUID();
    let date = this.getDate();
    let secret = Md5.hashStr("**" + date + "##" + Md5.hashStr("qdzklt") + "##" + uuid + "**");
    let getStr = "{'unique':'" + uuid + "','secret':'" + secret + "'}";
    getStr = this.replaceAll(getStr, '{', '%7B');
    getStr = this.replaceAll(getStr, '}', '%7D');
    getStr = this.replaceAll(getStr, ':', '%3A');
    getStr = this.replaceAll(getStr, '"', '%22');
    // let getStr = "%7B%27unique%27%3A" + uuid + ",%27secret%27%3A" + secret + "%7D";
    $.ajax({
      type: "get",
      url: ROOT_URL+appApis.get_app_token.url + "?getStr=" + getStr,
      async: false,
      success: function (data) {
        data = eval("(" + data + ")");
        if(data&&data.code==1){
          AppSettings.TOKEN = data.data.token;
          localStorage.setItem("token",data.data.token)
        }else{
          console.error(JSON.stringify(data));
        }
      },
      error:function (data) {
        console.error(JSON.stringify(data));
      }
    });
  }
  getUUID(){
    // let uuid:UUID = UUID.UUID();//框架内置获得uuid方式
    let s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    return s.join( "" ).replace( /-/g , "" );
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

  getDate() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return y + "" + m + "" + d;
  }

}
