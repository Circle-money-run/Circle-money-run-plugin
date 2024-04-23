import plugin from '../../../lib/plugins/plugin.js'
import fs from "fs";
import path from "path";

const __dirname = path.resolve();
import YAML from 'yaml';

export class RandomMP3 extends plugin {
    constructor() {
        super({
            name: '随机本地语音',
            dsc: '随机发送本地MP3可配置',
            event: 'message',
            priority: -10,
            rule: [
                {
                    reg: null,
                    fnc: 'MP3',
                    log: false
                }
            ]
        });

        // 读取配置文件
        const configPath = path.join(__dirname, 'plugins/Circle-money-run-plugin/config/RandomMP3.yaml');
        const configFile = fs.readFileSync(configPath, 'utf-8');

        const { reg } = YAML.parse(configFile);

        this.rule[0].reg = new RegExp(`(${reg.join('|')})`);

        this.mp3DirPath = path.join(__dirname, 'plugins/Circle-money-run-plugin/resources/MP3');
    }

    async MP3(e) { 
    const files = fs.readdirSync(this.mp3DirPath).filter(file => file.endsWith('.mp3'));

    if (files.length === 0) {
        return false;
    }
    const number = Math.floor(Math.random() * files.length);
    const mp3Path = path.join(this.mp3DirPath, files[number]);

    await this.reply(segment.record(mp3Path));
    logger.info(`用户[${logger.green(`${this.e.user_id}`)}] 在群[${logger.red(`${this.e.group_id}`)}] 触发功能 > [${logger.blue('RandomMP3.js')}]`)
    return; 
   }
 }