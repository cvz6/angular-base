import {Component, OnInit} from '@angular/core';
import {appApis} from '../../apis';
import {ROOT_URL} from '../../config';
import {AppSettings} from '../../app-settings';

@Component({
  selector: 'app-jquary',
  templateUrl: './jquary.component.html',
  styleUrls: ['./jquary.component.scss']
})
export class JquaryComponent implements OnInit {

  data: any = [{'get同步方式获取token': '没有后台接口暂时注释掉代码'}];

  constructor() {
  }

  ngOnInit() {
    // jquary同步方式获取token
    // const param = {
    //   'unique': '04f569f71ac949b4b76ca68156150178',
    //   'secret': 'd8f1d13eb9115cd84c224448698dc8ce'
    // };
    // $.ajax({
    //   type: 'get',
    //   url: ROOT_URL + appApis.get_app_token.url + '?getStr=' + JSON.stringify(param),
    //   async: false,
    //   success: function (data) {
    //     this.data = eval('(' + data + ')');
    //     this.data = data;
    //     if (data && data.code === 1) {
    //       AppSettings.TOKEN = data.data.token;
    //       localStorage.setItem('token', data.data.token);
    //     } else {
    //       console.error(JSON.stringify(data));
    //     }
    //   },
    //   error: function (data) {
    //     this.data = eval('(' + data + ')');
    //     this.data = data;
    //     console.error(JSON.stringify(data));
    //   }
    // });
  }

}
