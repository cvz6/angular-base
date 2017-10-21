# 关于开发时http跨域问题的解决办法

http跨域可以利用nodejs构建的本地服务搭建代理服务。

1. 修改package.json

`ng serve  --proxy-config proxy.conf.json`
> --proxy 是启用代理，不明白的可以 `ng help serve`查看


2. proxy.conf.json的内容如下

```
{
  "/hscloud": {
    "target": "http://192.168.1.111:8081/",//要代理的地址
    "secure": false
  }
}
```

