import { Config} from '../components/index.js'
import dm from '../lib/dm.js'
const Numreg = "[零一壹二两三四五六七八九十百千万亿\\d]+"

export class example extends plugin {
  constructor () {
    super({
      name: '跑路群管',
      dsc: '跑路群管插件',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#(跑路)?(设置|取消)管理(\\d+)?$",
          fnc: "SetAdmin",
          permission: 'master'
        },
        {
          reg: `^#(跑路)?禁言\\s?((\\d+)\\s)?(${Numreg})?(分|分钟|min|时|小时|hour|天|日|day)?$`,
          fnc: "MuteMember"
        },
      ]
    })
  }
    async setadmin(e) {
    if (!/跑路/.test(e.msg) && !Config.getConfig('set','sz')['qg']) return false
    let qq = e.message.find(item => item.type == "at")?.qq
    let type = /设置管理/.test(e.msg)
    if (!qq) qq = e.msg.replace(/#|跑路(设置|取消)管理/g, "").trim()

    if (!qq || !(/\d{5,}/.test(qq))) return e.reply("少女为你痛哭 \n您好像输入了错误的QQ号")
    let Member = e.group.pickMember(Number(qq))
    // 判断是否有这个人
    if (!Member.info) return e.reply("少女为你痛哭 \n这个人好像没有在这个国度")

    let res = await e.group.setAdmin(qq, type)
    let name = Member.card || Member.nickname
    if (!res) return e.reply("少女为你痛哭")
    type ? e.reply(`已设置用户「${name}」为管理员`) : e.reply(`已取消用户「${name}」的管理员权限`)
  }
    async MuteMember(e) {
    if (!/跑路/.test(e.msg) && !Config.getConfig('set','sz')['qg']){return false}
    if (!(e.member.is_admin || isMaster)){
     this.reply('少女为你痛哭，你好像还没有权限')
     return false
     }
   if (!e.group.is_admin){
   this.reply('少女自毁了~')
   return false
   }
    
    let qq = e.message.find(item => item.type == "at")?.qq
    if (!qq || !(/\d{5,}/.test(qq))) return e.reply("少女为你痛哭 \n您好像输入了错误的QQ号")
    let Member = e.group.pickMember(Number(qq))
    // 判断是否有这个人
    if (!Member.info) return e.reply("少女为你痛哭 \n这个人好像没有在这个国度")
    let reg = new RegExp(`^#(跑路)?禁言\\s?((\\d+)\\s)?(${Numreg})?(分|分钟|min|时|小时|hour|天|日|day)?$`)
    const time = dm.translateChinaNum(regRet[3])
    let date = e.msg.match(reg)[4]
    if (date == '分' || date == '分钟' || date == 'min'){
    let bantime = time * 60
    await e.group.muteMember(qq, bantime)
    this.reply('主人，少女已经将这个坏人禁言里')
    }else
    if (date == '时' || date == '小时' || date == 'hour'){
    let bantime = time * 60 * 60
    await e.group.muteMember(qq, bantime)
    this.reply('主人，少女已经将这个坏人禁言里')
    }else
    if (date == '天' || date == '日' || date == 'day'){
    let bantime = time * 60 * 60 * 24
    await e.group.muteMember(qq, bantime)
    this.reply('主人，少女已经将这个坏人禁言里')
  }
  }
  }