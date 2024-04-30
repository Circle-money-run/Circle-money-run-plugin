import { exec } from 'child_process'
import { Restart } from "../../other/restart.js"
import fs from 'fs'

export class example extends plugin {
  constructor () {
    super({
      name: '安装插件',
      dsc: '安装插件',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#?跑路安装插件.+$",
          fnc: 'install'
        },
        {
          reg: "^#?跑路安装插件$",
          fnc: 'add'
        }
      ]
    })
  }
  async add (e) {
  this.reply('少女为你痛哭\n正确的格式应该是#跑路安装插件+仓库链接')
  return true
  }
  async install (e) {
    if (!(e.isMaster)) {return this.reply('暂无权限，只有主人才能操作')}
    let url = this.e.msg.replace(/^#跑路安装插件/, "").trim()
    let urlformat = /^(https?:\/\/)?(gitee\.com|github\.com)\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
    if (url.match(urlformat)) {
    let parts = url.split('/');
    let Name = parts[parts.length - 1];
    if (await Bot.fsStat(`plugins/${Name}`)) {
      await this.reply(`少女为你痛哭\n你好像已经安装了${Name}`)
      return false
    }
    await this.reply(`少女祈祷中\n正在为你安装插件${Name}`)

    const fix = await exec(`git clone --depth=1 ${url} ./plugins/${Name}`)
   if (await Bot.fsStat(`plugins/${Name}/package.json`))
      await exec("pnpm install")
      if (fix.error) {
      this.reply(`安装错误:${error.message}`)
      return false
    }
    await this.reply('安装成功，开始执行重启')
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