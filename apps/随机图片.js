export class example extends plugin {
  constructor() {
    super({
      name: '随机图片',
      dsc: '简单示例',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#?随机(猫猫糕|寒暄|心海|小心心|瑜笙|狐狐|猫猫虫|柴郡|七濑|七濑胡桃|胡桃|宵宫|小叶)([1-9]|10)?$",
          fnc: 'random',
          log: false
        }
      ]
    })
  }

  async random(e) {
    const match = e.msg.match(/^#?随机(猫猫糕|寒暄|心海|小心心|瑜笙|狐狐|猫猫虫|柴郡|七濑|七濑胡桃|胡桃|宵宫|小叶)([1-9]|10)?$/);
    if (!match) return false;

    const type = match[1];
    const count = match[2] ? parseInt(match[2], 10) : 1;

    if (count > 10) {
      return e.reply('最多只能10张！');
    }

    const paths = {
      "猫猫糕": "mmg",
      "寒暄": "hanxuan",
      "心海": "xinhai",
      "小心心": "xiaoxinxin",
      "瑜笙": "yusheng",
      "狐狐": "huhu",
      "猫猫虫": "mmc",
      "柴郡": "chaijun",
      "七濑": "qilai",
      "七濑胡桃": "qilai",
      "胡桃": "hutao",
      "宵宫": "xiaogong",
      "小叶": "xiaoye"
    };

    let buttontext = type;
    let path = paths[type];
    
    if (count === 1) {
      return this.send(e, buttontext, path);
    } else {
      return this.sendMultiple(e, buttontext, path, count);
    }
  }

  async send(e, buttontext, path) {
    const randomnumber = Math.random();
    let url = encodeURI(`http://api.botqsign.icu/${path}?${randomnumber}`);
    let buttons = [
      [
        {
          text: '再来一张',
          input: `#随机${buttontext}`,
          send: true,
        },
      ],
    ];
    e.reply([
      segment.image(url),
      segment.button(...buttons),
    ]);
    logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.red(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('随机图片.js')}]`);
    return true;
  }

  async sendMultiple(e, buttontext, path, count) {
    let messages = [];
    for (let i = 0; i < count; i++) {
      const randomnumber = Math.random();
      let url = encodeURI(`http://api.botqsign.icu/${path}?${randomnumber}`);
      messages.push({
        message: segment.image(url),
        nickname: Bot.nickname,
        user_id: Bot.uin
      });
    }

    const forwardMsg = await e.group.makeForwardMsg(messages);

    e.reply(forwardMsg);
    logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.red(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('随机图片.js')}]`);
    return true;
  }
}
