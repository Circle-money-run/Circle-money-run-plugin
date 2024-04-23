export class example extends plugin {
  constructor() {
    super({
      name: '随机图片',
      dsc: '简单示例',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#?随机(猫猫糕|寒暄|心海|小心心|瑜笙|狐狐|猫猫虫|柴郡|七濑|七濑胡桃|胡桃|宵宫)$",
          fnc: 'random',
          log: false
        }
      ]
    })
  }

  async random(e) {
if (e.msg.includes('随机猫猫糕')) {
  let buttontext = "猫猫糕"
  let path = "mmg"
  return this.send(e,buttontext,path)}
  
if (e.msg.includes('随机寒暄')) {
  let buttontext = "寒暄"
  let path = "hanxuan"
  return this.send(e,buttontext,path)}
  
if (e.msg.includes('随机心海')) {
  let buttontext = "心海"
  let path = "xinhai"
  return this.send(e,buttontext,path)}

if (e.msg.includes('随机小心心')) {
  let buttontext = "小心心"
  let path = "xiaoxinxin"
  return this.send(e,buttontext,path)}

if (e.msg.includes('随机瑜笙')) {
  let buttontext = "瑜笙"
  let path = "yusheng"
  return this.send(e,buttontext,path)}

if (e.msg.includes('随机狐狐')) {
  let buttontext = "狐狐"
  let path = "huhu"
  return this.send(e,buttontext,path)}

if (e.msg.includes('随机猫猫虫')) {
  let buttontext = "猫猫虫"
  let path = "mmc"
  return this.send(e,buttontext,path)}

if (e.msg.includes('随机柴郡')) {
  let buttontext = "柴郡"
  let path = "chaijun"
  return this.send(e,buttontext,path)}
  
if (e.msg.includes('随机七濑')) {
  let buttontext = "七濑胡桃"
  let path = "qilai"
  return this.send(e,buttontext,path)}
  
if (e.msg.includes('随机胡桃')) {
  let buttontext = "胡桃"
  let path = "hutao"
  return this.send(e,buttontext,path)}
  
if (e.msg.includes('随机宵宫')) {
  let buttontext = "宵宫"
  let path = "xiaogong"
  return this.send(e,buttontext,path)}
  }
  
  async send(e,buttontext,path) {
  const randomnumber = Math.random();
console.log(randomnumber);
  let url = encodeURI(`http://api.botqsign.icu/${path}?${randomnumber}`)
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
      logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.red(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('随机图片.js')}]`)
      return true  
    }
}
