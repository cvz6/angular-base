import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpService} from './http-service.service';
import {AuthInterceptor} from './auto-intercepter';
import {StoreDataService} from './store-data.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import {AppNavComponent} from './nav/app-nav.component';
import { MidComponent } from './mid/mid.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MidComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes,
      {
        useHash: true, // 采用hash型的URL，不需要向tomcat注册生成的web页面的路由
      }
      // enableTracing: true//控制台打印路由信息，开发时打开
    )
  ],
  exports: [
    // AppHttpServiceDemoComponent,
  ],
  providers: [
    HttpService,
    StoreDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
