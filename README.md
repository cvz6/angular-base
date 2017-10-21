# 项目简介
angular-base是一个以angular4.0为基础的，帮助企业
快速开发的种子项目，开箱即用，检出即用。

# 设计思想
**君子性非异也，善假于物也。**

小公司开发或者个人开发项目，最好是找现成的轮子，改造一下为自己所用。
节省的不是时间，是钱。

# 前端设计规范

### 微小·确定·幸福

基于阿里的ANT DESIGN [详情看这里](https://ant.design/docs/spec/introduce-cn)
- 导航 https://ant.design/docs/pattern/navigation-cn

- 表单 https://ant.design/docs/pattern/form-cn

- 列表https://ant.design/docs/pattern/list-cn

- 表格https://ant.design/docs/pattern/table-cn

- 表格：复杂数据https://ant.design/docs/pattern/complex-table-cn

- 高级搜索https://ant.design/docs/pattern/advanced-search-cn
 
 下载设计组件库 http://library.ant.design/
 资源下载 https://ant.design/docs/resource/download-cn

# 使用前需要知道的知识

- 简单的html，css，js的前端开发经验
- 面向对象的编程思想，当然你是后台java或c#开发者最好
- [angular4.0以上版本](https://angular.cn/)
- [TypeScript](https://www.tslang.cn/)
- 该项目是帮助企业快速开发使用的种子项目，不适合新手学习，建议新手先学习基础知识。

[学习angular系列教材整理](src/assets/doc/studay.md)




# 集成的开源插件
- [jQuary](https://jquery.com/)
- [BootStarp](http://www.bootcss.com/)
- [Angular](https://angular.cn/)
- [TypScript](https://www.tslang.cn/)

[关于angular2如何使用第三方js库请看这里](http://www.jianshu.com/p/02a3ced24366)

# 集成的开源组件库
- [阿里巴巴开源库NG-ZORRO](https://ng.ant.design/#/docs/angular/introduce)
- [饿了么团队开源库element](https://element-angular.faas.ele.me/guide/install)

[集成阿里巴巴开源库NG-ZORRO看这里](https://ng.ant.design/#/docs/angular/getting-started)

[集成饿了么团队开源库element看这里](https://element-angular.faas.ele.me/guide/install)

# 快速启动
- 使用前准备工作
使用前，安装angular-cli `npm install -g @angular/cli@latest`
[参考链接](https://github.com/angular/angular-cli)
> 如果网络受限，请尝试[淘宝的镜像](https://github.com/cnpm/cnpm)
> `npm i -g cnpm --registry=https://registry.npm.taobao.org`

- 下载该项目然后`npm install`
- `ng serve`后打开浏览器 `localhost:4200`即可

如果出现错误你可以参考这里[angular开发常见错误](src/assets/doc/error.md)src/assets/doc/error.md
### 注意
不清楚ng指令，可以`ng help`

比如修改启动端口号，`ng serve -p 4300`即可

编译发布 `ng build -prod  -base-href ./`即可


- 开发调试
```
一键启动调试
$ ng serve --port 0 --open
如果需要实时调试AoT效果，请使用以下命令启动
$ ng serve --port 0 --open --aot
```
-  构建和部署
```
$ ng build --prod
入口文件会构建到 dist 目录中，你可以自由部署到不同环境中进行引用。
```

# 浏览器兼容性
现代浏览器和 IE9 以上（需要 polyfills）

[关于polyfills（填充）请看这里](src/assets/doc/polysills.md)

# 查看更多

[查看更多请看这里，文档查看也看这里](src/assets/doc/index.md)

本项目的所以代码都带文档，文档地址src/assets/doc/文件夹下

# 邀请你的加入

如果你喜欢code，喜欢分享，欢迎你的加入，跟我们一起维护这个项目，
展现你独特的精彩。欢迎任何人任何形式的开源，加入请联系1029538990@qq.com,
qq号和邮箱你随意选择。

增加功能后麻烦也维护一份对应的说明文档。

本项目文档维护在目录src/assets/doc

本项目案例展示（demo）维护在src/app/demo

增加新的案例或插件，记得更新对应文档。


[加入QQ群一起讨论](https://jq.qq.com/?_wv=1027&k=50KMIsW)

欢迎前后端的大神， 317896269 web开发交流群

### 项目刚开始，近期会频繁更新，逐渐完善。另外开发者水平有限，如果错误请随时指出，联系邮箱：1029538990@qq.com
