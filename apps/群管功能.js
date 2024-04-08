import { Config } from '../components/index.js'

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
          reg: `^#(跑路)?(假)?全(体|员)(禁言|解禁)$`,
          fnc: "MuteAll"
        },
      ]
    })
  }
    async SetAdmin(e) {
    if (!/跑路/.test(e.msg) && !Config.getConfig('set','sz')['qg']) return false
    if (!(e.isGroup || e.group.is_owner)){
    this.reply('少女自毁了~')
    return true
    }
    let qq = e.message.find(item => item.type == "at")?.qq

    if (!qq || !(/\d{5,}/.test(qq))) return e.reply("少女为你痛哭 \n您好像输入了错误的QQ号")
    let Member = e.group.pickMember(Number(qq))
    let type;
    if (/设置/.test(e.msg)){
     type = true
    }else
    if (/取消/.test(e.msg)){
     type = false
    }
    let mmap = await e.group.getMemberMap()
    let arrMember = Array.from(mmap.values())
    let member = arrMember.find(member => member.user_id === qq);
    let name;
    if (member) {
        name = member.card ? member.card : member.nickname
        }

    let res = await e.group.setAdmin(qq, type)
    if (!res) return e.reply("少女为你痛哭")
    type ? e.reply(`已设置用户「${name}」为管理员`) : e.reply(`已取消用户「${name}」的管理员权限`)
  }
    async MuteAll(e) {
    if (!/跑路/.test(e.msg) && !Config.getConfig('set','sz')['qg']){return false}
    if (!(e.member.is_admin || e.isMaster)){
     this.reply('少女为你痛哭，你好像还没有权限')
     return false
     }
   if (!e.group.is_admin){
   this.reply('少女自毁了~')
   return false
   }
   let type;
    if (/禁言/.test(e.msg)){
     type = true
    }else
    if (/解禁/.test(e.msg)){
     type = false
    }
    if (/假/.test(e.msg)){
     await e.group._setting({17:1})
     this.reply('主人，已经为你开启了全体禁言(假)了哦')
    }
    let res = await e.group.muteAll(type)
    if (!res) return e.reply("少女为你痛哭", true)
    e.reply(`主人，已经为你${type ? "开启" : "关闭"}全体禁言(真)了哦`)
     }
  }