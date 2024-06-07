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
        "title": "#随机瑜笙",
        "desc": "随机发送作者的聊天记录"
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
      }
    ]
  },
  {
    "group": "其他功能",
    "list": [
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
        "icon": 48,
        "title": "#跑路(强制)?(代理)?安装插件+链接",
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