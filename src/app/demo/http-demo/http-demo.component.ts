import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http-service.service';
import {appApis} from '../../apis';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss']
})
export class HttpDemoComponent implements OnInit {

  // 接收http请求的数据
  getData: any = [];
  getRetryData: any = [];
  postData: any = [];
  postRetryData: any = [];
  uploadData: any = [];

  // 构造函数 注入httpService
  constructor(private httpService: HttpService, private httpClient: HttpClient) {
  }

  // 生命周期狗子：组件初始化时调用该方法
  ngOnInit() {
    // 没有后台接口，暂时注释掉
    // this.getTest(); // get请求
    // this.getRetryTest(); // get请求，失败自动重新请求示例
    //
    // this.postTest(); // post请求
    // this.postRetryTest(); // post请求，失败自动重新请求示例
  }

  // get请求示例
  getTest() {
    const param = {
      'pagesize': 3,
      'pagenum': 1,
      'type': 4000,
      'filters': {
        'recommend': 1
      }
    };
    this.httpService.get(appApis.get_app_data + '?getPageStr=' + JSON.stringify(param),
      data => {
        if (data) {
          this.getData = data.data;
        }
      },
      error => {
        console.error(error);
      });
  }

  /**
   * get请求，失败自动重试
   */
  getRetryTest() {
    const param = {
      'pagesize': 3,
      'pagenum': 1,
      'type': 4000,
      'filters': {
        'recommend': 1
      }
    };
    this.httpService.getRetry(appApis.get_app_data + '?getPageStr=' + JSON.stringify(param),
      data => {
        this.getRetryData = data;
      },
      error => {
        console.log(error);
      },
      3
    );
  }

  // post请求实例
  postTest() {
    const param = {
      'type': '0009',
      'operate': 'A',
      'data': {
        'accid': localStorage.getItem('usid'),
        'type': '2'
      }
    };
    this.httpService.post(appApis.get_app_data + '?postStr=' + JSON.stringify(param),
      data => {
        if (data) {
          this.postData = data;
        }
      },
      error => {
        if (error) {
          console.log(error);
        }
      });
  }


  // post请求，失败自动重试
  postRetryTest() {
    const param = {
      'type': '0009',
      'operate': 'A',
      'data': {
        'accid': localStorage.getItem('usid'),
        'type': '2'
      }
    };
    this.httpService.postRetry(appApis.get_app_data + '?postStr=' + JSON.stringify(param),
      {id: 2},
      data => {
        this.postRetryData = data;
      },
      error => {
        console.log(error);
      }, 3);
  }

  // 文件上传
  uploadFile($event): void {
    this.httpService.upload(appApis.upload_app_file,
      $event,
      data => {
        this.uploadData = data;
      },
      error => {
        console.log(error);
      },
      'files',
      {obj: '这个是普通的表单文件'});
  }

}
