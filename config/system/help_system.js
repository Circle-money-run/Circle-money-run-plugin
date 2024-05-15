/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */
export const helpCfg = {
  title: '⭕💰🏃🛣帮助',
  subTitle: 'Yunzai-Bot & Circle-money-run-plugin',
  columnCount: 3,
  colWidth: 265,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#140D02',
    descColor: '#000000',
    contBgColor: 'rgba(6, 21, 31, 0)',
    contBgBlur: 3,
    headerBgColor: 'rgba(6, 21, 31, 0)',
    rowBgColor1: 'rgba(6, 21, 31, 0)',
    rowBgColor2: 'rgba(6, 21, 31, 0)'
  },
  bgBlur: false
}
export const helpList = [
  {
    "group": "随机功能",
    "list": [
      {
        "icon": 30,
        "title": "#随机emo文案",
        "desc": "#随机发送一条emo的文案"
      },
      {
        "icon": 30,
        "title": "#随机治愈文案",
        "desc": "随机发送一条治愈系的文案"
      },
      {
        "icon": 30,
        "title": "#随机瑜笙",
        "desc": "随机发送作者的聊天记录"
      },
      {
        "icon": 30,
        "title": "#随机小心心",
        "desc": "随机发送小心心的逆天发言"
      },
      {
        "icon": 30,
        "title": "#随机猫猫糕",
        "desc": "随机发送一个猫猫糕的表情"
      },
      {
        "icon": 30,
        "title": "#随机柴郡",
        "desc": "随机发送一个柴郡的表情"
      },
      {
        "icon": 30,
        "title": "#随机猫猫虫",
        "desc": "随机发送一个猫猫虫的表情"
      },
      {
        "icon": 30,
        "title": "#鸡音盒",
        "desc": "小黑子，被我抓住了吧"
      },
      {
        "icon": 30,
        "title": "#遥遥领先",
        "desc": "手机里有很严重的杂音"
      },
      {
        "icon": 30,
        "title": "#菜就多练",
        "desc": "菜就多练，输不起就别玩"
      },
      {
        "icon": 30,
        "title": "114514",
        "desc": "真的太臭了"
      },
      {
        "icon": 30,
        "title": "#模块传奇",
        "desc": "云端不是最强的，模块才是王道"
      },
      {
        "icon": 30,
        "title": "#随机寒暄",
        "desc": "随机寒暄的聊天记录"
      },
      {
        "icon": 30,
        "title": "#随机心海",
        "desc": "随机动态心海表情"
      },
      {
        "icon": 30,
        "title": "#随机胡桃",
        "desc": "随机胡桃表情"
      },
      {
        "icon": 30,
        "title": "#随机七濑胡桃",
        "desc": "随机七濑胡桃表情"
      },
      {
        "icon": 30,
        "title": "#随机宵宫",
        "desc": "随机宵宫表情"
      },
      {
        "icon": 30,
        "title": "戳一戳",
        "desc": "戳机器人会随机发送随机表情"
      }
    ]
  },
  {
    "group": "其他功能",
    "list": [
      {
        "icon": 30,
        "title": "#跑路api状态",
        "desc": "查看当前图片api状态"
      },
      {
        "icon": 30,
        "title": "#跑路版本  #跑路更新日志",
        "desc": "查看当前版本和更新日志"
      },
      {
        "icon": 30,
        "title": "网页截图预览",
        "desc": "识别链接截图发送"
      }
    ]
  },
  {
    "group": "群管功能",
    "list": [
      {
        "icon": 30,
        "title": "#跑路设置管理@114514",
        "desc": "字面意思"
      },
      {
        "icon": 30,
        "title": "#跑路踢@114514",
        "desc": "字面意思"
      },
      {
        "icon": 30,
        "title": "#跑路全体(禁言|解禁)",
        "desc": "字面意思"
      }
    ]
  },
  {
    "group": "管理命令，仅主人可用",
    "auth": "master",
    "list": [
      {
        "icon": 79,
        "title": "#裁定+@某人",
        "desc": "看运气决定无罪还是死刑"
      },
      {
        "icon": 48,
        "title": "#跑路安装插件+链接",
        "desc": "快捷安装插件"
      },
      {
        "icon": 85,
        "title": "#跑路更新 #跑路强制更新",
        "desc": "更新跑路插件"
      },
      {
        "icon": 32,
        "title": "#跑路设置",
        "desc": "配置跑路功能"
      }
    ]
  }
]
export const isSys = true