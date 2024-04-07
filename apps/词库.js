import fetch from 'node-fetch';

export class example extends plugin {
  constructor() {
    super({
      name: '词库搜索',
      dsc: '根据关键词搜索词库',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#词库搜索(\\S+)$',
          fnc: 'searchKeyword'
        }
      ]
    });
  }

  async searchKeyword(e) {
    this.reply('正在搜索词库，请稍候...', true);
    const keyword = this.e.msg.match(/#词库搜索(\S+)$/)[1];
    try {
      const response = await fetch('https://yusheng929-word-stock.hf.space');
      if (!response.ok) {
        throw new Error(`无法获取词库数据，错误码: ${response.status}`);
      }
      const jsonData = await response.json();
      let msg = '';
      for (const item of jsonData) {
        if (item.name === keyword) {
          msg = item.msg;
          break;
        }
      }
      if (msg) {
        this.reply(`${msg}`, true);
      } else {
        this.reply(`未找到与关键词匹配的词库信息`, true);
      }
    } catch (error) {
      console.error('发生错误:', error);
      this.reply('发生错误', true);
    }
  }
}