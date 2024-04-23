import plugin from '../../../lib/plugins/plugin.js';
import fs from "fs";
import path from "path";
const __dirname = path.resolve();

export class example extends plugin {
  constructor() {
    super({
      name: '文案',
      dsc: '随机文案',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg: "^#?随机(治愈|emo)$",
          fnc: 'wenan'
        }
      ]
    })
  }

  async wenan(e) {
  if (e.msg.includes('emo')) {
let buttontext = "emo"
  let st = "emo.txt"
  return this.send(e,buttontext,st)}
  
if (e.msg.includes('治愈')) {
  let buttontext = "治愈"
  let st = "cure.txt"
  return this.send(e,buttontext,st)}
  }
  
  async send(e,buttontext,st) {
  
  const filePath = path.join(__dirname, `plugins/Circle-money-run-plugin/resources/Text/${st}`);
   const fileContent = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
   const lines = fileContent.trim().split('\n');

   const randomIndex = Math.floor(Math.random() * lines.length);
   const msg = lines[randomIndex];
   const formattedMsg = msg.replace(/\n/g, "");

  let buttons = [
        [
          {
            text: '再来一个',
            input: `#随机${buttontext}文案`,
            send: true,
          },
        ],
      ];
      e.reply([
        msg,
        segment.button(...buttons),
      ]);
      logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.powder(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('文案.js')}]`)
      return true  
    }
}
