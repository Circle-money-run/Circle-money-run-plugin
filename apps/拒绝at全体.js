import { Config} from '../components/index.js'
export default class unat extends plugin {
constructor() {
    super({
        name: 'UNat',
        priority: -Infinity,
        rule: [
        {
			reg: '',
			log: false,
            fnc: 'at',
        },
    ],
 });
}
    async at(e){
    if(!Config.getConfig('set','sz')['fatqt']){return false}
    let jytime = Config.getConfig('set','sz')['bantime']
            		if (e.atall){
			if (!e.member.is_admin && !e.member.is_owner){
			if (e.group.is_admin){
			await e.reply('检测到无权限at全体！开始禁言操作')
			await e.group.recallMsg(e.message_id)
			await e.group.muteMember(e.user_id, jytime)
			}else{
				await this.reply(segment.at(this.e.group.info.owner_id))
				await this.reply(segment.at(this.e.group.info.owner_id))
				await this.reply([`这个坏人无权限@全体！！！`,segment.at(e.user_id)])
				await this.reply([`这个坏人无权限@全体！！！`,segment.at(e.user_id)])
			}
			}
		}else{
            return false
        }
    }
}