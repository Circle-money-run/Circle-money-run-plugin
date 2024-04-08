import { Config, translateChinaNum } from '../components/index.js'
const Numreg = '[零一壹二两三四五六七八九十百千万亿\\d]+'

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
          reg: `^#(跑路)?禁言\\s?((\\d+)\\s)?(${Numreg})?(分|分钟|min|m|时|小时|hour|h|天|日|day|d)?$`,
          fnc: "MuteMember"
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
    async MuteMember(e) {
    if (!/跑路/.test(e.msg) && !Config.getConfig('set','sz')['qg']){return false}
    if (!(e.member.is_admin || e.isMaster)){
     this.reply('少女为你痛哭，你好像还没有权限')
     return false
     }
   if (!e.group.is_admin){
   this.reply('少女自毁了~')
   return false
   }
    
    let qq = e.message.find(item => item.type == "at")?.qq
    if (!qq || !(/\d{5,}/.test(qq))) return e.reply("少女为你痛哭 \n主人，你好像输入了错误的QQ号")
    let reg = new RegExp(`^#(跑路)?禁言\\s?((\\d+)\\s)?(${Numreg})?(分|分钟|时|小时|天|日)?$`)
        let time = translateChinaNum(e.msg.match(reg)[3])
        let date = e.msg.match(reg)[4]
        if (date == '分' || date == '分钟') {
            let bantime = time * 60
            e.group.muteMember(qq, bantime)
            this.reply('主人，少女已经将坏人给禁言了')
        }
        else if (date == '时' || date == '小时') {
            let bantime = time * 60 * 60
            e.group.muteMember(qq, bantime)
            this.reply('主人，少女已经将坏人给禁言了')
        }
        else if (date == '天' || date == '日') {
            let bantime = time * 60 * 60 * 24
            e.group.muteMember(qq, bantime)
        }
        else 
        {
        this.reply('少女为你痛哭 \n主人，你好像输入了错误的时间')
        }
     }
  }