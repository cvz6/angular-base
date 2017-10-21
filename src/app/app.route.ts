import {MidComponent} from "./mid/mid.component";

export const appRoutes = [
  {
    path: 'index',
    component: MidComponent,
  },
  {
    path: 'demo',
    loadChildren: 'app/demo/demo.module#DemoModule',
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

