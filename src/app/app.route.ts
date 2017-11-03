import {MidComponent} from './mid/mid.component';
import {Routes} from '@angular/router';
import {NzZorroComponent} from './nz-zorro/nz-zorro.component';
import {NzZorroTempComponent} from './nz-zorro-temp/nz-zorro-temp.component';
import {ElementComponent} from './element/element.component';

export const appRoutes: Routes = [
  {
    path: 'index',
    component: MidComponent,
  },
  {
    path: 'demo',
    loadChildren: 'app/demo/demo.module#DemoModule',
  },
  {
    path: 'nz-zorro',
    component: NzZorroComponent,
  },
  {
    path: 'nz-zorro-temp',
    component: NzZorroTempComponent,
  },
  {
    path: 'element',
    component: ElementComponent,
  },

  /*
  * （''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点。
  * */
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  /*
  * 请保证顺序为最后一个路由，**路径是一个通配符。当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由。
  * 这个特性可用于显示“404 - Not Found”页，或自动重定向到其它路由。
  * */
  {
    path: '**',
    redirectTo: '/index',
  }
];

