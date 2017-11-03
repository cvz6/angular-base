import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var BMap: any;

//  百度地图开发 javascript api http://lbsyun.baidu.com/index.php?title=jspopular/guide/getkey
// hellWord http://lbsyun.baidu.com/index.php?title=jspopular/guide/helloworld
@Component({
  selector: 'app-baidu-map',
  templateUrl: './baidu-map.component.html',
  styleUrls: ['./baidu-map.component.scss']
})
export class BaiduMapComponent implements OnInit, AfterViewInit {
  map: any;


  ngAfterViewInit(): void {
    this.baiduMap();
  }

  constructor() {
  }

  ngOnInit() {
    // this.initjs(); // 引用百度地图API文件
    this.asycjs(); // 引用百度地图API文件
  }

  private baiduMap() {
    const map = new BMap.Map('container'); // 创建Map实例
    const point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(); // 启用滚轮放大缩小
  }

  // 追究dom方式引入api
  private initjs() {
    // ak 替换成你自己的key，详情看 http://lbsyun.baidu.com/index.php?title=jspopular/guide/helloworld
    // 示例 demo
    const str = `
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=LEcbzkafmsymyGGLcT1XWtuI2tbksXnc"></script>
   `;
    $('#baidumap').html(str);
  }

  // 异步加载方式载入api
  private asycjs() {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=LEcbzkafmsymyGGLcT1XWtuI2tbksXnc';
    document.body.appendChild(script);
  }
}
