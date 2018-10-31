// 聊天室服务端上下文类，用户、房间、消息、管道等类在此中做集中管理
let Channel = require('./channel')
let User = require('./user')
let eventKeys = require('../services-uitls/event.keys')

// 上下文
class Context {
  constructor () {
    this.msg = []
    this.room = []
    this.users = []
    this.channels = []
    this.eventKeys = eventKeys
  }
  // 创建管道
  createChannel (id, socket) {
    // 创建一个管道实例，然后初始化管道实例，并将管道添加到管道数组中
    let channel = new Channel(id, socket, this)
    channel.init()
    channel.index = this.channels.length
    this.channels.push(channel)
  }
  // 创建用户
  createUser (user, channelId) {
    user.index = this.users.length
    this.users.push(user)
    this.channels.find(x => x.id === channelId).setUser(user)
  }
  // 根据用户ID创建用户
  createUserById (id, name, channelId) {
    let user = new User(id)
    user.name = name
    this.createUser(user, channelId)
  }
  addMsg (msg) {
    this.msg.push(msg)
  }
  remove (channel) {
    this.users.splice(channel.user.index, 1)
    channel.sendUsers()
    channel.socket.close()
    this.channels.splice(channel.index, 1)
    console.log('user length: ' + this.users.length)
  }
}

module.exports = Context
