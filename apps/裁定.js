import plugin from '../../../lib/plugins/plugin.js';

if (!global.segment) {
global.segment = (await import("oicq")).segment;
}

let failProbability = 0.5;

export class example extends plugin {
            constructor() {
            super({
            name: '谕示裁定枢机',
            dsc: '',
            event: 'message',
            priority: -10,
            rule: [{
            reg: "^#裁定(\\d+)?$",
            fnc: 'doBan',
            log: false
           }]
         });
        }

async doBan(e) {
    if (!e.isGroup) {
        return true;
    }
    let qq = e.message.find(item => item.type == 'at')?.qq
    let banQQtime = Math.floor(Math.random() * (2591941 - 60 + 1) + 60);

    let mmap = await e.group.getMemberMap();
    let arrMember = Array.from(mmap.values());

    if (!(Bot.pickGroup(this.e.group_id).pickMember(this.e.self_id).is_admin)){
    this.reply('权限不够，无法审判')
    return true
    }
    
    let member = arrMember.find(member => member.user_id === qq);
    if (member) {
        let Name = member.card ? member.card : member.nickname;

        let fail = Math.random() < failProbability;
        if (fail) {
            e.reply(`根据『谕示裁定枢机』给出的结果 \n『${Name}』…无罪`);
            return true;
        } else {
            await e.reply(`根据『谕示裁定枢机』给出的结果 \n『${Name}』死刑`);
            await e.group.muteMember(qq, banQQtime);
        }
        logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.pink(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('裁定.js')}]`)
     return true;
  }
 }
}