来源https://www.cnblogs.com/cqhaibin/p/6506182.html

# 相关技术
vue + vuex + elementUi + socket.io
socket.io做为实时通讯基础
vuex/vue：客户端Ui层使用
Element-ui：客户端Ui组件

# 实现需求
能查看在线用户列表
能发送和接受消息

# 安装依赖
npm install

# 服务端启动
npm run socketIo

# 客户端启动
npm run dev

# 服务端文件
build/server-config.js：聊天服务器的入口
src/services-server: 服务端js文件
src/services-client: 客户端js文件

# test

> test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
