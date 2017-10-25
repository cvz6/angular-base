# 集成第三方js库方法

### 把你的js库引入项目，比如放在文件夹assets中，然后修改.angular-cli.json文件
```
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.js"
  ],
```
### 即可。
### 例如：集成Bootstrap、Jquery 方式，其他类比。

1、 在工程目录下面安装以下两个包

`npm install -S jquery bootstrap`

2、将这两个第三方框架放入到依赖中去

`npm install -D @types/jquery @types/bootstrap`

3、修改.angular-cli.json文件
```
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.js"
  ],
```
 
4、修改tsconfig.app.json文件

```$xslt
"types": [
  "jquery",
  "bootstrap"
]
```
