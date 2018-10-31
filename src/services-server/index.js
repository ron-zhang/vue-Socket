// 聊天室服务端上下文创建入口，创建context，并初始化房间到上下文中。
let RoomCollection = require('./room/index')
let Context = require('./context')

let cxt = new Context()

RoomCollection.initRoom(cxt)

module.exports = cxt
