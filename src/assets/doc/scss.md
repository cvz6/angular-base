# 改css为sass预编译

这个项目我已经改好了，开箱即用。下边是更改方式。


SASS 是一款非常好用的 CSS 预编译器，
Bootstrap 官方从4.0开始已经切换到了 SASS。
目前（2017-10），@angular/cli 创建项目的时候没有自动使用 SASS 作为预编
译器，我们需要自己手动修改一些配置文件，请按照以下步骤依次修改：
angular-cli.json 里面的 styles.css 后缀改成 .scss![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-2391759ef63de958?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)当你后面再使用 ng g c *** 自动创建组件的时候，默认就会生成 .scss 后缀的样式文件了。

angular-cli.json 里面的 styleExt 改成 .scss![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-d6ef9b5b81f05898?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

src 下面 style.css 改成 style.scss![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-2dd2edf2bcceae77?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

app.component.scss![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-a42fd873d392ee0a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

app.component.ts 里面对应修改![enter image description here](http://upload-images.jianshu.io/upload_images/2833665-5aef88f9cfe8e38b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

改完之后，重新 ng serve，打开浏览器查看效果。
