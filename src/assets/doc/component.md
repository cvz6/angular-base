# 集成第三方组件库说明

市面上可用的 Angular开源免费好用的组件库：

- [PrimeNG](https://www.primefaces.org/primeng/) ：这款组件库做得比较早，代码质量比较高。
- [NG-Zorro](https://github.com/NG-ZORRO/ng-zorro-antd)：来自阿里云团队，外观是 AntDesign 风格。
- [Element-Angular](https://element-angular.faas.ele.me/?pathname=/guide/install)：作者来自饿了么团队。
- [Clarity](https://vmware.github.io/clarity/)：来自Vmware团队。
- [Angular-Material](https://github.com/angular/material2)：Angular 官方提供的组件库。目前（2017-10）一共规划了38个组件，Material Design 风格，代码质量比较高。
- [Ionic](http://ionicframework.com/)：专门为移动端打造的组件库，自带周边工具，生态很完善

增加方法看每个网站的快速启动就可以了。

例如：整合饿了么组件库：
```
安装 npm i --save element-angular

.angular-cli.json 文件增加
"styles": [
          "../node_modules/element-theme-default"
        ],
        
根模块导入 ElModule.forRoot()
```

# 如何把你的组件库发布到 npm 上去

有朋友问过一个问题，他觉得 npm 很神奇，
比如：当我们在终端里面输入以下命令的时候：

`npm install -g @angular/cli`
npm 就会自动去找到 @angular/cli 并安装，看起来很神奇的样子。

其实，背后的处理过程很简单，
npm 官方有一个固定的 registry url，
你可以把它的作用想象成一个 app store，
全球所有开发者编写的 node 模块都需要发布上去，然后其他人才能安装使用。

如果你开发了一个很强大的 Angular 组件库，希望发布到 node 上面让其他人也能使用，应该怎么做呢？简略的处理步骤如下：

- 第1步：用 npm init 初始化项目（只要你的项目里面按照 npm 的规范编写一份 package.json 文件就可以了，不一定用 npm init 初始化）。
- 第2步：编写你自己的代码。
- 第3步：到 https://www.npmjs.com/ 去注册一个账号。
- 第4步：用 npm publish 把项目 push 上去。

publish 之后，全球开发者都可以通过名字查找并安装你这个模块了。



最后大神谈组件库使用误区：（摘自大漠的收费教程）

谈一谈两个常见的误区：

- 第一个误区是：开源组件可以满足你的所有需求。我可以负责任地告诉你，这是不可能的！开源组件库都是通用型的组件，并不会针对任何特定的行业或者领域进行设计。无论选择哪一款开源组件库，组件的外观 CSS 你总要重新写一套的吧？组件里面缺的那些功能你总得自己去写吧？组件里面的那些 bug 你总得自己去改掉吧？所以，千万不要幻想开源组件能帮你解决所有问题，二次开发是必然的。

- 第二个误区是：开发组件库很简单，分分钟可以搞定。在 jQuery 时代，有一款功能极其强大树组件叫zTree。你能想到的那些功能 zTree 都实现了，而且运行效率特别高。但是你要知道，zTree 的作者已经花了超过5年的时间来维护这个组件。维护一个组件尚且如此，何况要长期维护一个庞大的库？所以，做好一个组件库并不像有些人想象的那么轻松，这件事是需要花钱、花时间的。做开源，最让使用者蛋疼的不是功能够不够强大，而是开发者突然弃坑，这也是很多企业宁愿花钱自己开发组件库的原因。所以，如果你只是单兵作战，最好选一款现有的开源库，在此基础上继续开发。强烈建议你只做一个组件，就像 zTree 的作者那样，把一个组件做好、做透，并且长期维护下去。这比搞一个庞大的组件库，每个组件做得都像个玩具，然后突然弃坑要好很多。
