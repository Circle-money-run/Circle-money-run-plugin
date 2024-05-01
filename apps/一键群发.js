export class example extends plugin {
  constructor () {
    super({
      name: '一键群发',
      dsc: '一键群发',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: '^#跑路群发$',
          fnc: 'qf',
        }
      ]
    })
  }
  async qf(e) {
  if (!e.isMaster){return e.reply('暂无权限，只有主人才能操作')}
   this.setContext("send")
    return this.reply("请发送要群发的内容", false, { at: true })
  }
  send () {
    this.finish("send")
    for (let group of Bot[e.self_id].gl.keys()){
		  Bot[e.self_id].pickGroup(group).sendMsg(e.message)
		  		await Bot.sleep(500)
	  }
  }
  return true
  }