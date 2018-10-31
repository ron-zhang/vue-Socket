// 聊天服务器的入口
// 通过express创建一个server对象，然后利用socketIo创建io对象
// 然后通过io的on方法监听connection事件
// 当有客户端连接时，触发connection事件，县立即调用"服务端上下文(后面简称cxt)"的createChannel方法创建一个管道，此时的管道上是没有用户信息的。
let socketIo = require('socket.io');
let express = require('express');
let cxt = require('../src/services-server');

let httpPort = 9001;
let channelId = 1
let app = express();

app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});

let server = require('http').createServer(app);
let io = socketIo(server);
io.on('connection',function(socket){
    console.log('有客户端连接');
    cxt.createChannel(channelId++,socket)
});
server.listen(httpPort); //用server连接
console.log('io listen success !! ' + httpPort);
