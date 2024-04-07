import YAML from 'yaml';
const apps = {};
global.run_plugin = {
  apps: apps,
  puppeteer: null
};

let is_icqq = false;
let is_oicq = false;

try {
  let icqq = await import("icqq");
  if (icqq) is_icqq = true;
} catch (err) {
  try {
    let oicq = await import("oicq");
    if (oicq) is_oicq = true;
  } catch (err) { }
}

import fs from 'node:fs'
import { Plugin_Path } from './components/index.js'

const files = fs.readdirSync(`${Plugin_Path}/apps`).filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

logger.info('\x1b[31m---------已跑路---------\x1b[0m')
logger.info('\x1b[33m⭕💰🏃🛣插件正在⭕💰中\x1b[0m')

  for (let i in files) {
    let name = files[i].replace('.js', '')
    if (ret[i].status != 'fulfilled') {
      logger.error(`【${logger.red(name)}】模块⭕💰失败！`)
      logger.error(ret[i].reason)
      continue
    }
    logger.info(`【${name}】模块⭕💰成功`)
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
  }
  logger.info('\x1b[33m⭕💰🏃🛣插件⭕💰成功！！！！！！\x1b[0m')
logger.info('\x1b[34m---------哼哼啊啊啊---------\x1b[0m')
export { apps }