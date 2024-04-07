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
          fnc: 'cyc'
        }
      ]
    })
  }
  
  async cyc (e) {
    if(!Config.getConfig('set','sz')['cyc']){return false}
    if(e.target_id == e.self_id){
    let url = encodeURI(`http://api.botqsign.icu/api/xn`)
    await this.e.reply(segment.image(url))
    return true
  }
    return false
  }
}
