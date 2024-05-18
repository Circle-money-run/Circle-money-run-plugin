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

if (!YS.exec) {
  import { exec } from 'node:child_process'

  YS.exec = (cmd, opts = {}) => {
    return new Promise((resolve) => {
      if (!opts.quiet) {
        logger.mark(`[执行安装命令] ${logger.blue(cmd)}`);
      }

      exec(cmd, opts, (error, stdout, stderr) => {
        resolve({ error, stdout, stderr });

        if (opts.quiet) {
        if (stdout) {
          logger.mark(`${logger.blue(`${String(stdout).trim()}`)}`);
        } else { 
        logger.mark("")
        }
        if (stderr) {
          logger.mark(`${logger.red(`${String(stderr).trim()}`)}`)
        } else {
        logger.mark("")
        }
        if (error) logger.error(`[安装错误] ${logger.blue(cmd)}\n${logger.red(`${String(error).trim()}`)}`)
          }
        }
      });
    });
  }


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