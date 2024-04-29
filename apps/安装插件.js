import { exec } = 'child_process'

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
    await let parts = url.split('/');
    await let Name = parts[parts.length - 1];
    const command = `git clone --depth=1 ${url} ./plugins/${Name}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    this.reply(`执行命令时出错: ${error.message}`);
    return;
  }
  if (stderr) {
    this.reply(`命令执行出现错误: ${stderr}`);
    return;
  }
  this.reply(`安装完成，开始执行重启`);
});
} else {
    this.reply('少女为你痛哭\n你好像输入了错误的仓库地址')
}
    return true
  }
}