let xxxPatc = process.cwd() + "/plugins/Circle-money-run-plugin/resources/voice/小心心传奇.mp3";
let cjdlPath = process.cwd() + "/plugins/Circle-money-run-plugin/resources/voice/菜就多练.mp3"
let mkgcqPath = process.cwd() + "/plugins/Circle-money-run-plugin/resources/voice/模块哥传奇.mp3"
let yylxUrl = encodeURI(`https://img.kookapp.cn/attachments/2023-09/14/65027028d1a83.mp3`)
let cPath = process.cwd() + "/plugins/Circle-money-run-plugin/resources/img/1.png"
let cUrl = encodeURI(`https://img.kookapp.cn/attachments/2024-01/14/65a3b36237503.mp3`)

export class VoiceMessageSender extends plugin {
    constructor() {
        super({
            name: '语音功能',
            dsc: '不想写',
            event: 'message',
            priority: -10,
            rule: [
                {
                    reg: '^#?小心心传奇$',
                    fnc: 'xxxcq'
                },
                {
                    reg: '#?菜就多练',
                    fnc: 'cjdl'
                },
                {
                    reg: '^#?模块(哥|狗|🐶)?传奇$',
                    fnc: 'mkgcq'
                },
                {
                    reg: '#?遥遥领先',
                    fnc: 'yylx'
                },
                {
                    reg: '^#?114514$',
                    fnc: '114514'
                }
            ]
        })
    }

    async xxxcq(e) {
        await this.e.reply(segment.record(xxxPath));
        return true
    }
    async cjdl(e) {
    await this.e.reply(segment.record(cjdlPath))
    let msg = "🥬，🍷多🧘‍♂️，📚🙅🏗️🍺🐢🛝，🐜✍️💩🐜✍️，🦀🚀🤢🦀🚀，🫵🔑🫔🫴🐜✍️🔔🧘‍♂️🦀🚀，🫵🤔🫵🆚👶"
    await this.e.reply(msg, true, { at: true })
    return true
    }
    async mkgcq(e) {
    await this.e.reply(segment.record(mkgcqPath))
    let msg = "云端不是最强的，模块才是王道"
    await this.e.reply(msg, true, { at: true })
    return true
    }
    async yylx(e) {
    await this.e.reply(segment.record(yylxUrl))
    return true
    }
    async 114514(e) {
    await this.e.reply(segment.image(cPath), true, { at: true })
    await this.e.reply(segment.record(cUrl))
    return true
    }
}
