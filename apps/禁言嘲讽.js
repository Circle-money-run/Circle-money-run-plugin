import { segment } from 'oicq';
import plugin from '../../../lib/plugins/plugin.js';
import { Config} from '../components/index.js'

export class example extends plugin {
    constructor() {
        super({
            name: 'ban',
            dsc: 'ban',
            event: 'notice.group.ban',
            priority: -10,
            rule: [
                {
                    reg: '',
                    fnc: 'ban'
                }
            ]
        });
    }

    async ban(e) {
    if(!Config.getConfig('set','sz')['jycf']){return false}
    if (e.duration === 0){return false}
        let msg = `\n你怎么不说话了 是因为不喜欢吗？`
        // 可以将此处的文字修改为其他
            if (e.sub_type === 'ban') {
            e.reply([
                segment.at(e.user_id),
                msg
            ]);
            return false
        }
        return false
    }
}