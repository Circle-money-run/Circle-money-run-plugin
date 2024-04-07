export class example extends plugin {
  constructor () {
    super({
      name: '跑路插件',
      dsc: '跑路插件',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: '^#跑路插件$',
          fnc: 'cj'
        }
      ]
    })
  }
  async cj (e) {
    logger.info('[圈钱跑路.js插件]')
    let msg = "https://gitee.com/theqingyao/Circle-money-run-plugin"
    e.reply(msg,true)
    return true
  }
}