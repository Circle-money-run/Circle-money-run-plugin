import { Config} from '../components/index.js'

export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '戳一戳',
      /** 功能描述 */
      dsc: '戳一戳随机发表情',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'notice.group.poke',
      /** 优先级，数字越小等级越高 */
      priority: -10,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '.*',
          /** 执行方法 */
          fnc: 'cyc',
          log: false
        }
      ]
    })
  }
  
  async cyc (e) {
    if(!Config.getConfig('set','sz')['cyc']){return false}
    let xy = Config.getConfig('set','sz')['cycxy']
    if( xy  === "alone"){
       if(!e.target_id == e.self_id){return true}
}
    let sj = Math.floor(Math.random() * 8) + 1
   let url;
    if (sj === 1){ url = encodeURI(`http://api.botqsign.icu/xn`) }
    if (sj === 2){ url = encodeURI(`http://api.botqsign.icu/chaijun`) }
    if (sj === 3){ url = encodeURI(`http://api.botqsign.icu/xinhai`) }
    if (sj === 4){ url = encodeURI(`http://api.botqsign.icu/mmg`) }
    if (sj === 5){ url = encodeURI(`http://api.botqsign.icu/mmc`) }
    if (sj === 6){ url = encodeURI(`http://api.botqsign.icu/qilai`) }
    if (sj === 7){ url = encodeURI(`http://api.botqsign.icu/xiaogong`) }
    if (sj === 8){ url = encodeURI(`http://api.botqsign.icu/hutao`) }
    await this.e.reply(segment.image(url))
    logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.red(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('戳一戳.js')}]`)
    return true
  }
}
