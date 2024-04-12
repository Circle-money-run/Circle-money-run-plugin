let cPath = process.cwd() + "/plugins/Circle-money-run-plugin/resources/img/1.png"

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
        await this.e.reply(segment.record('http://api.botqsign.icu/voice/xxx'));
        return true
    }
    async cjdl(e) {
    await this.e.reply(segment.record('http://api.botqsign.icu/voice/cai'))
    let msg = "🥬，🍷多🧘‍♂️，📚🙅🏗️🍺🐢🛝，🐜✍️💩🐜✍️，🦀🚀🤢🦀🚀，🫵🔑🫔🫴🐜✍️🔔🧘‍♂️🦀🚀，🫵🤔🫵🆚👶"
    await this.e.reply(msg, true, { at: true })
    return true
    }
    async mkgcq(e) {
    await this.e.reply(segment.record('http://api.botqsign.icu/voice/mk'))
    let msg = "云端不是最强的，模块才是王道"
    await this.e.reply(msg, true, { at: true })
    return true
    }
    async yylx(e) {
    await this.e.reply(segment.record('http://api.botqsign.icu/voice/lead'))
    return true
    }
    async 114514(e) {
    await this.e.reply(segment.image(cPath), true, { at: true })
    await this.e.reply(segment.record('http://api.botqsign.icu/voice/114514'))
    return true
    }
}
