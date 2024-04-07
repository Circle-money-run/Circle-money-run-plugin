import plugin from '../../../lib/plugins/plugin.js'; 
import { Config} from '../components/index.js'
import lodash from 'lodash';

if (!global.segment) {
  global.segment = (await import('oicq')).segment;
}

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const waitTimeInSeconds = 6;

const newRule = {
  reg: '^((?:https?):\\/\\/(?:[\\w-]+\\.)+[\\w-]+(?:\\/[\\w-.\\/]*[\\w-])?)$',
  fnc: 'WebPreview',
};

export class WebPreview extends plugin {
  constructor() {
    super({
      name: '截图预览网页内容',
      dsc: '检测到网页地址时截图预览网页内容',
      event: 'message',
      priority: -10,
      rule: [
        {
          reg:
            '^(?:(http|https):\\/\\/)?((?:[\\w-]+\\.)+[a-z0-9]+)((?:\/[^\/?#]*)+)?(\\?[^#]+)?(#.+)?$',
          fnc: 'WebPreview',
        },
        newRule,
      ],
    });

   this.filterEnabled = false; //这是一个是否屏蔽http://gchat.qpic.cn/的开关
       //true是开启 false是关闭
    
  }

  async WebPreview(e) {
  if(!Config.getConfig('set','sz')['jtyl']){return false}
    let url = e.msg;
    if (!/^(http|https):\/\//i.test(url)) {
    	logger.info('\x1b[33m主人怎么不发完整链接呀？\x1b[0m')
    	logger.info('\x1b[32m那少女帮主人补全吧~\x1b[0m')
    	logger.info('\x1b[36m少女祈祷中...\x1b[0m')
          url = `https://${url}`;
        logger.info(`${url}`);
    }
    
    // 添加判断，如果开关 filterEnabled 开启并且 url 匹配屏蔽规则，则退出函数
    if (this.filterEnabled && /^https?:\/\/gchat\.qpic\.cn\//i.test(url)) {
    	logger.error(`\x1b[31m已屏蔽此类链接：${url}\x1b[0m`);
      return;
    }

    const puppeteer = require('puppeteer');

    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: [
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-first-run',
          '--no-sandbox',
          '--no-zygote',
          '--single-process',
        ],
      });

      const page = await browser.newPage();

      await page.goto(url);

      logger.info(`\x1b[36m少女为您痛哭... 等待${waitTimeInSeconds}秒\x1b[0m`);
      await new Promise((resolve) => setTimeout(resolve, waitTimeInSeconds * 1000));
      logger.info(`\x1b[33m${waitTimeInSeconds}秒到啦~ 主人久等了捏\x1b[0m`);
      logger.info(`\x1b[32m开始截图网页内容~\x1b[0m`);

      await page.setViewport({
        width: 1920,
        height: 1080,
      });

      await this.reply(segment.image(await page.screenshot({ fullPage: true })));
    } catch (error) {
      console.error(error);
    } finally {
      if (browser !== undefined) {
        await browser.close();
      }
    }
  }
  
  toggleFilter() {
    this.filterEnabled = !this.filterEnabled;
    console.log(`链接过滤已${this.filterEnabled ? '开启' : '关闭'}`);
  }
}
