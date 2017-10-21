import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RouterModule} from "@angular/router";
import {demoRoutes} from "./demo.route";
import {VideoComponent} from "./video/video.component";
import {HttpDemoComponent} from './http-demo/http-demo.component';
import {JquaryComponent} from './jquary/jquary.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(demoRoutes)
  ],
  declarations: [
    IndexComponent,
    JquaryComponent,
    HttpDemoComponent,
    VideoComponent,
  ]
})
export class DemoModule { }
