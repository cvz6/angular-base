import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {demoRoutes} from './demo.route';
import {VideoComponent} from './video/video.component';
import {JquaryComponent} from './jquary/jquary.component';
import { BaiduMapComponent } from './baidu-map/baidu-map.component';
import { AsyLoadJsComponent } from './asy-load-js/asy-load-js.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(demoRoutes)
  ],
  declarations: [
    IndexComponent,
    JquaryComponent,
    VideoComponent,
    BaiduMapComponent,
    AsyLoadJsComponent,
  ]
})
export class DemoModule { }
