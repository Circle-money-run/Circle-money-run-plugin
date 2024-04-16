import fs from 'fs'

export class example extends plugin {
  constructor () {
    super({
      name: '跑路QSign管理',
      dsc: 'QSign管理',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: '^#跑路启动(签名|QSign)$',
          fnc: 'start'
        }
      ]
    })
  }
  async start (e) {
    if (!(e.isMaster)){return e.reply('少女为你痛哭\n 你好像还没有权限操作')}
    const filePath = path.join('plugins/Circle-money-run-plugin/model/app');
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    e.reply('少女为你痛哭\n 你好像还没有安装QSign');
  } else {
    e.reply('少女祈祷中…')
  }
});
  }
}