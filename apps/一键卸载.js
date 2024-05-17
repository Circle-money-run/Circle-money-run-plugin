import plugin from '../../../lib/plugins/plugin.js'
import fs from "fs";
import { exec, execSync } from 'child_process'
import { Restart } from '../../other/restart.js'
import fse from 'fs-extra'

let path = process.cwd() + '/plugins/Circle-money-run-plugin/'

export class xz extends plugin {
  constructor() {
    super({
      name: '跑路卸载',
      dsc: '一键删除跑路插件',
      event: 'message',
      priority: -999999999999999999999999999999999999999999,
      rule: [
        {
          reg: '^#跑路卸载插件$',
          fnc: 'xz'
        }
      ]
    })
  }

  async xz(e) {
    if (!e.isMaster) {
      return e.reply('只有主人可以操作')
    }
    this.setContext("uninstall")
    return this.reply("为防止误操作，请输入:\n#跑路确认卸载插件", false, { at: true })
  }

   uninstall (){
   let msg = this.e.message
   if (!(msg === '#跑路确认卸载插件')){
   this.finish("uninstall")
   return this.reply("指令错误，已取消操作", false, { at: true })
   }
    if (fs.existsSync(path)) {
      try {
        await fse.remove('plugins/Circle-money-run-plugin');
        await e.reply('⭕💰跑路插件已经彻底卸载成功，恭喜你已经删除了Yunzai届最大的bug，以后再接再厉噢~')
        setTimeout(() => new Restart(this.e).restart(), 600)
      } catch (error) {
        e.reply('卸载失败~请手动尝试')
      }
      return true
    } else {
      e.reply('你都没装跑路插件，怎么卸载嘛')
      return true
    }
    this.finish("uninstall")
  }
}
