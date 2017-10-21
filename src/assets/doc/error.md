# angular开发常见错误

`该常见错误原文出自大漠穷秋总结，感谢大漠。`

- 很多开发者到我这里来抱怨说，在 Windows 平台上安装 @angular/cli 会报很多 error，那是因为 @angular/cli 在 Windows 平台上面依赖 Python 和 Visual Studio 环境，而很多开发者的机器上并没有安装这些东西。

- node-sass 模块被墙的问题，强烈推荐使用 cnpm 进行安装，可以非常有效地避免撞墙。

* 一些开发者来抱怨说 @angular/cli 在打包的时候加上 --prod 参数会报错，无法编译。这是一个很常见的问题，因为 @angular/cli 最新的版本经常会有 bug，只要在你项目的 package.json 里面降低一个小版本号就OK。

- @angular/cli 默认生成的 karma.conf.js 配置文件里面采用了一个有 bug 的 html 报告生成器，导致 ng test 运行报错，我们需要把这个 reporter 改成 mocha（摩卡）。

- 有一些朋友说，本地开发的时候运行得很好，上线之后所有请求404。这也是一个常见的坑，因为你需要给 Web 容器配置一下处理 http 请求的规则，把前端路由扔回去交给 Angular 处理，请参考[这份文档](https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions)。

# 集中回答一些常见的问题
# 浏览器兼容性
关于 Angular 的浏览器兼容性，请看下图：
![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-cd35208740795fbd?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
有一些国内的开发者会来争论兼容 IE8 的问题，我想给你两个事实：
第一个事实是：截至2017年7月底，Chrome 的全球市场份额已经接近60%，加上 Firefox的12.28%，真的没有那么多人用 IE 了。

![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-aa10a9f20359fad5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[数据来源](https://www.netmarketshare.com/browser-market-share.aspx?qprid=0&qpcustomd=0)
第二个事实是：天猫已经于2016年4月宣布放弃支持 IE6、7、8。而根据百度流量研究院的统计，IE8目前的整体市场份额已经下降到了9.31%：

![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-fedea709a0ac0b3d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
[数据来源](http://tongji.baidu.com/data/browser)
不值得为了这么少的市场份额付出那么多的研发和维护成本。
你完全可以以上两点事实去说服你的客户。
# 命名约定
老版本使用 AngularJS 指代，所有新版本都叫做 Angular。原因很好理解，因为老版本是用 JS 开发的，所以带一个 JS 后缀，而新版本是基于 TypeScript 的，带 JS 后缀不合适。
# 关于 TypeScript
这个系列的文章不会单独讲 TypeScript，正如我一直强调的：TypeScript 不难，JavaScript 才难。你跟着我的思路，TypeScript 绝对不会成为你学习 Angular 的障碍。相反，一旦你写熟练了之后，TypeScript 可以非常有效地提升编码效率和程序可读性。
# 关于版本号
根据官方的解释，Angular 从2.0之后会保证向下兼容，每隔半年会升级一个大版本，只有升级大版本的时候才会做一些 breaking change。
所以这个系列文章里面不再强调版本号，涉及到的所有实例代码都基于目前（2017-10）最新的4.x版本。
