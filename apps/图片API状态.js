import plugin from '../../../lib/plugins/plugin.js'
import fetch from 'node-fetch'

export class example extends plugin {
    constructor() {
        super({
            name: 'API状态',
            dsc: 'API状态',
            event: 'message',
            priority: -1000,
            rule: [
                {
                    reg: "^#跑路(图片)?(API|api)状态$",
                    fnc: 'api',
                    log: false
                }
            ]
        })
    }

    async api(e) {
    logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.red(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('图片API状态.js')}]`)
    this.reply('少女祈祷中')
        fetch('http://api.botqsign.icu/')
  .then(response => {
    if (!response.ok) {
      throw new Error(`访问时出错: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // 提取name和quantity
    const result = data.map(item => {
      return {
        name: item.name,
        quantity: item.quantity
      };
    });

    // 格式化消息
    let message = '名字\t\t\t\t数量\n';
    result.forEach(item => {
      message += `${item.name}\t\t\t\t${item.quantity}\n`;
    });

    // 发送消息
    this.reply(message);
  })
  .catch(error => {
    // 处理错误
    this.reply(error.message);
  });
    }
}
