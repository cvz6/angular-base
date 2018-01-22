import {IndexComponent} from './index/index.component';
import {VideoComponent} from './video/video.component';
import {JquaryComponent} from './jquary/jquary.component';
import {Routes} from '@angular/router';
import {BaiduMapComponent} from './baidu-map/baidu-map.component';
import {AsyLoadJsComponent} from './asy-load-js/asy-load-js.component';

export const demoRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'jquary',
    component: JquaryComponent
  },
  {
    path: 'asy-load-js',
    component: AsyLoadJsComponent
  },
  {
    path: 'baidu-map',
    component: BaiduMapComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];
