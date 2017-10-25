import {IndexComponent} from './index/index.component';
import {HttpDemoComponent} from './http-demo/http-demo.component';
import {VideoComponent} from './video/video.component';
import {JquaryComponent} from './jquary/jquary.component';
import {NgZorroComponent} from './ng-zorro/ng-zorro.component';

export const demoRoutes = [
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
    path: 'httpDemo',
    component: HttpDemoComponent
  },
  {
    path: 'nz',
    component: NgZorroComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];
