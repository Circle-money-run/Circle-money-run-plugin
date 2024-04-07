export class example extends plugin {
  constructor() {
    super({
      name: '随机图片',
      dsc: '简单示例',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#?随机(猫猫糕|寒暄|心海|小心心|瑜笙)$",
          fnc: 'random'
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
  }
  
  async send(e,buttontext,path) {
  const randomnumber = Math.random();
console.log(randomnumber);
  let url = encodeURI(`http://api.botqsign.icu/api/${path}?${randomnumber}`)
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
      return true  
    }
}
