import { exec } from 'child_process'
import { Restart } from "../../other/restart.js"

export class example extends plugin {
  constructor () {
    super({
      name: '安装插件',
      dsc: '安装插件',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#(跑路)?安装插件.+$",
          fnc: 'install'
        }
      ]
    })
  }
  async install (e) {
    if (!(e.isMaster)) {return this.reply('暂无权限')}
    let url = this.e.msg.replace(/^#(跑路)?安装插件/, "").trim()
    let urlformat = /^(https?:\/\/)?(gitee\.com|github\.com)\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
    if (url.match(urlformat)) {
    let parts = url.split('/');
    let Name = parts[parts.length - 1];
    const command = `git clone --depth=1 ${url} ./plugins/${Name}`;
    this.reply(`少女祈祷中\n正在为你安装插件${Name}`)

    const fix = await exec(`git clone --depth=1 ${url} ./plugins/${Name}`)
     if (fix.error) {
      this.reply(`安装错误:${error.message}`)
      return false
    }
   if (await fsStat(`plugins/${Name}/package.json`))
      await exec("pnpm install")
    this.reply('安装成功，开始执行重启')
    this.restart()
} else {
    this.reply('少女为你痛哭\n你好像输入了错误的仓库地址')
}
    return true
  }
  restart() {
    new Restart(this.e).restart()
  }
}