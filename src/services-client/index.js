/** 提供client端访问socketIo的方法 */
// 与消息服务器通讯，其中包含创建用户、接受和发送消息等。一个客户端只能拥有一个消息管道

import * as io from 'socket.io-client'
import Context from './context'

let eventKeys = require('../services-uitls/event.keys')
let url = 'http://101.132.134.10:9001/'
let cxt = null

export function getCxt () {
  if (cxt == null) {
    cxt = new Context(url, eventKeys, io)
  }
  return cxt
}
