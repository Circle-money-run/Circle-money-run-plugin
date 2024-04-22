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
          fnc: 'cj',
          log: false
        }
      ]
    })
  }
  async cj (e) {
  logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.pink(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('Circle-money-run-plugin.js')}]`)
    let msg = "https://gitee.com/theqingyao/Circle-money-run-plugin"
    e.reply(msg,true)
    return true
  }
}