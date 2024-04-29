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
    this.reply('开始执行安装')
} else {
    this.reply('少女为你痛哭\n你好像输入了错误的仓库地址')
}
    return true
  }
}