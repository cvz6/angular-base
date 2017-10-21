# 封装http请求

# 说明

封装http请求，现暴露三个接口，基本满足需求：

- get方式
- post方式
- upload方式（文件上传）

参考这里[src/app/http-service-interface.ts](../../app/http-service-interface.ts)


# 扩展

`如果你的团队是RESTful风格的http请求，直接在现在的基础上增加请求方式就行了`

GET（SELECT）：从服务器取出资源（一项或多项）
POST（CREATE）：在服务器新建一个资源
PUT（UPDATE）：在服务器更新资源（客户端提供完整资源数据）
PATCH（UPDATE）：在服务器更新资源（客户端提供需要修改的资源数据）
DELETE（DELETE）：从服务器删除资源

 - GET /collection：返回资源对象的列表（数组）
 -  GET /collection/resource：返回单个资源对象
 -  POST /collection：返回新生成的资源对象
 - PUT /collection/resource：返回完整的资源对象
 - PATCH /collection/resource：返回完整的资源对象
 - DELETE /collection/resource：返回一个空文档

