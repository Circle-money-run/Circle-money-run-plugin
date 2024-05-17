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

    if (fs.existsSync(path)) {
      try {
        await fse.remove('plugins/Circle-money-run-plugin');
        await e.reply('少女为你痛哭\n插件卸载完整，正在为你重启')
        setTimeout(() => new Restart(this.e).restart(), 600)
      } catch (error) {
        e.reply('卸载失败~请手动尝试')
      }
      return true
    } else {
      e.reply('你都没装跑路插件，怎么卸载嘛')
      return true
    }
  }
}
