import plugin from '../../../lib/plugins/plugin.js'
import lodash from 'lodash'
import { Common, Data } from '../components/index.js'
import Theme from './help/theme.js'

export class example extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: '跑路插件帮助',
      /** 功能描述 */
      dsc: '',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: -10,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^#?(跑路|圈钱跑路|⭕💰🏃🛣|🏃🛣|run)(插件)?(命令|帮助|功能|指令)$',
          /** 执行方法 */
          fnc: 'message',
          log: false
        }
      ]
    });
  }

  async message() {
    logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.pink(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('help.js')}]`)
    return await help(this.e);
  }

}

async function help(e) {
  let custom = {}
  let help = {}

  let { diyCfg, sysCfg } = await Data.importCfg('help')

  custom = help

  let helpConfig = lodash.defaults(diyCfg.helpCfg || {}, custom.helpCfg, sysCfg.helpCfg)
  let helpList = diyCfg.helpList || custom.helpList || sysCfg.helpList
  let helpGroup = []

  lodash.forEach(helpList, (group) => {
    if (group.auth && group.auth === 'master' && !e.isMaster) {
      return true
    }

    lodash.forEach(group.list, (help) => {
      let icon = help.icon * 1
      if (!icon) {
        help.css = 'display:none'
      } else {
        let x = (icon - 1) % 10
        let y = (icon - x - 1) / 10
        help.css = `background-position:-${x * 50}px -${y * 50}px`
      }
    })

    helpGroup.push(group)
  })
  let themeData = await Theme.getThemeData(diyCfg.helpCfg || {}, sysCfg.helpCfg || {})

  return await Common.render('help/index', {
    helpCfg: helpConfig,
    helpGroup,
    ...themeData,
    element: 'default'
  }, { e, scale: 1 })
}