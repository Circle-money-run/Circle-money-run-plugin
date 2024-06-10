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
            		if (e.atall){
			if (!e.member.is_admin && !e.member.is_owner){
			if (e.group.is_admin){
			await e.reply('检测到无权限at全体！开始禁言操作')
			await e.group.recallMsg(e.message_id)
			await e.group.muteMember(e.user_id, 600)
			}else{
				return true
			}
			}
		}else{
            return false
        }
    }
}