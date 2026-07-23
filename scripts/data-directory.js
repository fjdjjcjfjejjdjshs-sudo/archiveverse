// 9-Category Directory Data - From Excel (91 subdirs, 970 items)

var directoryData = {
  "movies": {
    name: "全球重磅电影合集",
    icon: "🎬",
    route: "cat-movies",
    subgroups: [
      {
        name: "World Rankings",
        nameCn: "世界电影权威排名",
        items: [
          {name: "豆瓣电影Top250原盘", size: "13.83TB", spec: "蓝光ISO"},
          {name: "IMDb Top250", size: "2.09TB", spec: "蓝光"},
          {name: "全球电影史销售TOP100", size: "", spec: "合集"},
          {name: "奥斯卡最佳影片合集（96届）", size: "16.15TB", spec: "蓝光ISO"},
          {name: "巴拿马电影节金棕榈奖（70部）", size: "3.34TB", spec: "蓝光ISO"},
          {name: "韩国影史百佳电影合集", size: "", spec: ""},
          {name: "人生必看的100部电影", size: "1.28TB", spec: ""},
          {name: "豆瓣高分热门电影大全（1749部）", size: "6.26TB", spec: ""}
        ]
      },
      {
        name: "Premium DIY Collection",
        nameCn: "顶级DIY收藏版",
        items: [
          {name: "SGNB特效字幕4K原盘合集（563部）", size: "26.52TB", spec: "UHD蓝光ISO"},
          {name: "至尊宝DIY视觉原盘合集（452部）", size: "16.81TB", spec: "蓝光ISO"},
          {name: "LGNB MKV封装合集", size: "", spec: "42"},
          {name: "LGNB大神顶级MKV合集", size: "15TB", spec: "MKV"},
          {name: "LGNB IMAX合集", size: "1.49TB", spec: "IMAX"},
          {name: "Athena（雅典娜）DIY合集", size: "2.76TB", spec: "UHD蓝光ISO"},
          {name: "HDSky ISO原盘合集", size: "71.93TB", spec: "蓝光ISO"},
          {name: "星星(HDSky&CHD)合集", size: "5.39TB", spec: ""},
          {name: "Sunny特效字幕合集", size: "7.13TB", spec: ""},
          {name: "BHYS DIY合集", size: "20.64TB", spec: ""},
          {name: "BluCook DIY合集", size: "20.18TB", spec: ""}
        ]
      },
      {
        name: "UHD & Blu-ray Originals",
        nameCn: "UHD / Blu-ray 原盘馆",
        items: [
          {name: "UHD原盘ISO合集", size: "171TB", spec: "UHD蓝光ISO"},
          {name: "UHD原盘ISO（2500张）", size: "144.46TB", spec: "UHD蓝光ISO"},
          {name: "UHD原盘已刮削", size: "138.48TB", spec: ""},
          {name: "蓝光原盘已刮削", size: "430.44TB", spec: ""},
          {name: "蓝光原盘合集", size: "601.97TB", spec: ""},
          {name: "经典蓝光原盘大包", size: "604TB", spec: ""},
          {name: "ISO原盘电影合集", size: "660TB", spec: ""},
          {name: "蓝光原盘+蓝光压制合集", size: "1.62PB", spec: ""}
        ]
      },
      {
        name: "REMUX Collection",
        nameCn: "REMUX无损电影馆",
        items: [
          {name: "REMUX电影合集（2270+）", size: "120TB", spec: ""},
          {name: "无损REMUX电影合集", size: "101.32TB", spec: ""},
          {name: "4K REMUX合集", size: "40TB", spec: ""},
          {name: "蓝光REMUX合集", size: "28.6TB", spec: ""},
          {name: "电影资源库REMUX", size: "28TB", spec: ""},
          {name: "爱影REMUX", size: "12.12TB", spec: ""},
          {name: "老K REMUX电影剧集合集", size: "86.85TB", spec: ""},
          {name: "2267部2160P REMUX(FGT)", size: "120TB", spec: ""}
        ]
      },
      {
        name: "Chinese Cinema",
        nameCn: "华语电影馆",
        items: [
          {name: "华语电影①", size: "49TB", spec: ""},
          {name: "华语电影②", size: "149TB", spec: ""},
          {name: "华语电影1927-2023", size: "26.12TB", spec: ""},
          {name: "ADC华语DVD原盘（730部）", size: "3.6TB", spec: ""},
          {name: "港片视觉原盘（669部）", size: "16TB", spec: ""},
          {name: "音港粤语视觉合集（1242部）", size: "16TB", spec: ""},
          {name: "香港经典视觉原盘", size: "5TB", spec: ""},
          {name: "粤语电影合集", size: "15TB", spec: ""}
        ]
      },
      {
        name: "World Cinema",
        nameCn: "世界电影馆",
        items: [
          {name: "外语电影合集", size: "297TB", spec: ""},
          {name: "韩国蓝光原盘（464部）", size: "16.57TB", spec: ""},
          {name: "台湾电影合集", size: "5.43TB", spec: ""},
          {name: "印度电影合集", size: "3.9TB", spec: ""},
          {name: "亚洲1080P电影合集", size: "9.33TB", spec: ""}
        ]
      },
      {
        name: "Directors & Legends",
        nameCn: "导演/演员馆",
        items: [
          {name: "成龙作品合集", size: "1.48TB", spec: ""},
          {name: "李连杰作品合集", size: "1.32TB", spec: ""},
          {name: "周星驰视觉合集", size: "1.05TB", spec: ""},
          {name: "李安作品合集", size: "", spec: ""},
          {name: "北野武作品合集", size: "", spec: ""},
          {name: "贾樟柯作品合集", size: "", spec: ""},
          {name: "梁朝伟作品合集", size: "1.7TB", spec: ""},
          {name: "刘德华电影合集", size: "", spec: ""},
          {name: "李小龙合集", size: "", spec: ""},
          {name: "林正英合集", size: "", spec: ""},
          {name: "甄子丹合集", size: "", spec: ""},
          {name: "汤姆·汉克斯合集", size: "1.28TB", spec: ""},
          {name: "罗素·克劳合集", size: "", spec: ""},
          {name: "斯嘉丽合集", size: "", spec: ""},
          {name: "大卫·林奇 REMUX合集", size: "", spec: ""},
          {name: "杜琪峰合集", size: "", spec: ""},
          {name: "冯小刚合集", size: "", spec: ""},
          {name: "克林特·伊斯特伍德合集", size: "", spec: ""},
          {name: "黄秋生合集", size: "", spec: ""},
          {name: "布鲁斯·威利斯合集", size: "", spec: ""},
          {name: "梅尔·吉布森合集", size: "", spec: ""}
        ]
      },
      {
        name: "Franchise Collection",
        nameCn: "系列电影馆",
        items: [
          {name: "漫威电影合集", size: "2.79TB", spec: ""},
          {name: "DC电影合集", size: "2.22TB", spec: ""},
          {name: "007全集", size: "1.2TB", spec: "超高清蓝光ISO"},
          {name: "哈利波特全集收藏版", size: "", spec: ""},
          {name: "星球大战系列", size: "", spec: ""},
          {name: "午夜凶铃系列", size: "", spec: ""},
          {name: "邵氏电影合集", size: "8.66TB", spec: ""},
          {name: "邵氏经典合集", size: "2.61TB", spec: ""},
          {name: "邵氏美欧套装", size: "2.30TB", spec: ""}
        ]
      },
      {
        name: "Special Collection",
        nameCn: "专题电影馆",
        items: [
          {name: "战争电影", size: "13.09TB", spec: ""},
          {name: "灾难电影", size: "10.07TB", spec: ""},
          {name: "全球灾难电影TOP30", size: "2TB", spec: ""},
          {name: "恐怖电影TOP100", size: "", spec: ""},
          {name: "丧尸电影TOP100", size: "", spec: ""},
          {name: "文艺电影合集", size: "8.97TB", spec: ""},
          {name: "励志治愈电影", size: "3.82TB", spec: ""},
          {name: "同性题材电影", size: "9.38TB", spec: ""},
          {name: "意外结局电影", size: "1.13TB", spec: ""},
          {name: "现代军事电影", size: "1.53TB", spec: ""}
        ]
      },
      {
        name: "Annual Selection",
        nameCn: "年度电影精选",
        items: [
          {name: "2021年豆瓣年度榜单", size: "830GB", spec: ""},
          {name: "2022年豆瓣年度榜单", size: "1.51TB", spec: ""},
          {name: "BBC2024年度20佳", size: "1.54TB", spec: ""},
          {name: "IMDb2024年度20佳", size: "2.58TB", spec: ""},
          {name: "TIME2024年度10佳", size: "563.97GB", spec: ""},
          {name: "FC2024年度20佳", size: "592.35GB", spec: ""},
          {name: "NYT2024年度10佳", size: "", spec: ""},
          {name: "《经济学人》2024年度15佳", size: "1.38TB", spec: ""},
          {name: "2024年最佳电影合集", size: "", spec: ""},
          {name: "2025电影合集", size: "6.49TB", spec: ""}
        ]
      },
      {
        name: "Classic Cinema",
        nameCn: "老电影与经典修复",
        items: [
          {name: "老电影1100部", size: "2.14TB", spec: ""},
          {name: "1905老电影合集", size: "", spec: ""},
          {name: "上海译制经典合集", size: "", spec: ""},
          {name: "CCTV6电影合集", size: "3.67TB", spec: ""},
          {name: "全国24家电影制片厂合集", size: "2.31TB", spec: ""},
          {name: "高仓健电影合集", size: "1.03TB", spec: ""}
        ]
      },
      {
        name: "Animation & Streaming",
        nameCn: "动画·流媒体",
        items: [
          {name: "动画电影1000部", size: "9.7TB", spec: ""},
          {name: "Netflix资源合集", size: "21.91TB", spec: ""},
          {name: "动漫原盘合集", size: "40.49TB", spec: ""},
          {name: "美剧合集（FRDS）", size: "10.32TB", spec: ""},
          {name: "TVB GoTV合集", size: "28.28TB", spec: ""},
          {name: "高清翡翠台合集", size: "18.7TB", spec: ""}
        ]
      },
      {
        name: "Home Theater Demo",
        nameCn: "演示/家庭影院专区",
        items: [
          {name: "杜比视界教程碟", size: "", spec: ""},
          {name: "4K演示测试片合集", size: "", spec: ""},
          {name: "家庭影院测试合集", size: "", spec: ""},
          {name: "IMAX演示合集", size: "1.35TB", spec: ""},
          {name: "杜比视界电影合集", size: "2.15TB", spec: ""}
        ]
      },
      {
        name: "Mega Library",
        nameCn: "超级资源库",
        items: [
          {name: "超级影视资源合集", size: "2224TB", spec: ""},
          {name: "BD-ISO资源库", size: "2.24PB", spec: ""},
          {name: "电影大包", size: "120TB", spec: ""},
          {name: "570TB无重复电影库", size: "", spec: ""},
          {name: "ISO原盘影视资源合集", size: "134.84TB", spec: ""},
          {name: "新汇总十四", size: "1.58TB", spec: ""},
          {name: "野兽系列合集", size: "4.7TB", spec: ""}
        ]
      }
    ]
  },
  "tv": {
    name: "全球电视剧合集",
    icon: "📺",
    route: "cat-tv",
    subgroups: [
      {
        name: "全球经典榜单",
        nameCn: "全球经典榜单",
        items: [
          {name: "全球精品电视剧TOP100", size: "", spec: ""},
          {name: "国产电视剧精选100部", size: "", spec: ""},
          {name: "Netflix 高朋满座", size: "", spec: ""},
          {name: "HBO 神剧合集", size: "", spec: ""},
          {name: "Apple TV+ 聚集精品", size: "", spec: ""},
          {name: "迪士尼+精品聚集", size: "", spec: ""}
        ]
      },
      {
        name: "国产电视剧合集",
        nameCn: "国产电视剧合集",
        items: [
          {name: "国产剧已整理（已刮削）", size: "112.79TB", spec: ""},
          {name: "国产电视剧合集", size: "77.49TB", spec: ""},
          {name: "高清国产连续剧（3869部）", size: "8.43TB", spec: ""},
          {name: "爱奇艺迷雾剧场（4K WEB）", size: "1.36TB", spec: ""},
          {name: "X播放（4K WEB）", size: "464GB", spec: ""},
          {name: "国产抗日剧合集", size: "2.19TB", spec: ""},
          {name: "琼剧瑶合集", size: "4.48TB", spec: ""}
        ]
      },
      {
        name: "电视剧欧美合集",
        nameCn: "电视剧欧美合集",
        items: [
          {name: "欧美剧已削削", size: "130TB", spec: ""},
          {name: "欧美剧（按年份整理）", size: "120TB", spec: ""},
          {name: "欧美剧蓝光原盘", size: "23.30TB", spec: ""},
          {name: "Netflix海外剧", size: "5.03TB", spec: ""},
          {name: "LeagueNF WEB", size: "8.68TB", spec: ""}
        ]
      },
      {
        name: "港台电视剧合集",
        nameCn: "港台电视剧合集",
        items: [
          {name: "港台剧+日韩剧+国外剧（蓝光原盘）", size: "116.47TB", spec: ""},
          {name: "TVB电视剧合集", size: "73TB", spec: ""},
          {name: "GO TV TVB合集", size: "28.28TB", spec: ""},
          {name: "高清翡翠台合集", size: "18.70TB", spec: ""},
          {name: "MYTVSUPER", size: "33.07TB", spec: ""},
          {name: "港剧国语合集", size: "17.55TB", spec: ""},
          {name: "亚视亚洲电视经典", size: "", spec: ""},
          {name: "壹高清港剧", size: "2.47TB", spec: ""}
        ]
      },
      {
        name: "日韩电视剧合集",
        nameCn: "日韩电视剧合集",
        items: [
          {name: "韩国电视剧", size: "", spec: ""},
          {name: "韩剧合集", size: "63TB", spec: ""},
          {name: "韩剧资源包", size: "44.73TB", spec: ""},
          {name: "UHDTV 4K 60帧韩剧", size: "19.91TB", spec: ""},
          {name: "韩剧合集（二）", size: "16.92TB", spec: ""},
          {name: "韩剧国配影视剧", size: "11.72TB", spec: ""},
          {name: "韩剧汇总", size: "9.21TB", spec: ""}
        ]
      },
      {
        name: "日本电视剧",
        nameCn: "日本电视剧",
        items: [
          {name: "日剧蓝光原盘", size: "8TB", spec: ""},
          {name: "日韩剧合集", size: "24TB", spec: ""},
          {name: "台湾电视剧", size: "", spec: ""},
          {name: "台剧合集", size: "24TB", spec: ""},
          {name: "KKTV电视剧合集", size: "", spec: ""}
        ]
      },
      {
        name: "泰国电视剧",
        nameCn: "泰国电视剧",
        items: [
          {name: "泰剧精选", size: "3.15TB", spec: ""}
        ]
      },
      {
        name: "流媒体剧集合集",
        nameCn: "流媒体剧集合集",
        items: [
          {name: "Netflix 剧集合集", size: "", spec: ""},
          {name: "Disney+", size: "", spec: ""},
          {name: "Apple TV+", size: "", spec: ""},
          {name: "HBO", size: "", spec: ""},
          {name: "我们", size: "", spec: ""},
          {name: "4K WEB 热烈庆祝", size: "", spec: ""}
        ]
      },
      {
        name: "高码率热烈",
        nameCn: "高码率热烈",
        items: [
          {name: "高码剧合集", size: "126TB", spec: ""},
          {name: "高码剧合集（二）", size: "27.44TB", spec: ""},
          {name: "热烈原盘", size: "23TB", spec: ""},
          {name: "已刮削电视剧", size: "66TB", spec: ""},
          {name: "烧包电视剧", size: "31.12TB", spec: ""}
        ]
      },
      {
        name: "特摄·动漫",
        nameCn: "特摄·动漫",
        items: [
          {name: "奥特曼蓝光原盘", size: "6.93TB", spec: ""},
          {name: "奥特曼国语全集", size: "", spec: ""},
          {name: "VCB压制番剧", size: "", spec: ""}
        ]
      }
    ]
  },
  "anime": {
    name: "全球动漫排行榜·精选合集",
    icon: "🎌",
    route: "cat-anime",
    subgroups: [
      {
        name: "动漫必看合集（400TB）",
        nameCn: "动漫必看合集（400TB）",
        items: [
          {name: "动漫资源总库", size: "40TB", spec: ""},
          {name: "完结国漫合集", size: "", spec: ""},
          {name: "龙珠全系列合集", size: "3.5TB", spec: ""},
          {name: "皮克斯动画系列", size: "1.16TB", spec: ""},
          {name: "皮克斯迪士尼系列", size: "3.72TB", spec: ""},
          {name: "宫崎骏动画全集", size: "", spec: ""},
          {name: "儿童影视库", size: "458GB", spec: ""}
        ]
      },
      {
        name: "日本动漫专区",
        nameCn: "日本动漫专区",
        items: [
          {name: "海贼王（更新至1152集）", size: "", spec: ""},
          {name: "火影忍者全集（剧场版+TV）", size: "", spec: ""},
          {name: "蜡笔小新（日版原盘1993-2023）", size: "1TB", spec: ""},
          {name: "哆啦A梦剧场版（视觉REMUX）", size: "", spec: ""},
          {name: "名侦探柯南剧场版", size: "", spec: ""},
          {name: "龙珠全系列", size: "", spec: ""},
          {name: "进击的巨人（已整理可削削）", size: "826GB", spec: ""},
          {name: "鬼灭之刃（TV+剧场版）", size: "", spec: ""},
          {name: "一拳超人", size: "", spec: ""},
          {name: "JOJO的奇妙冒险", size: "", spec: ""},
          {name: "灌篮高手", size: "", spec: ""},
          {name: "银魂", size: "", spec: ""},
          {name: "新世纪福音战士", size: "", spec: ""},
          {name: "EVA新剧场版", size: "", spec: ""}
        ]
      },
      {
        name: "国漫专区",
        nameCn: "国漫专区",
        items: [
          {name: "完结国漫合集", size: "3.3TB", spec: ""},
          {name: "熊出没电影系列", size: "", spec: ""},
          {name: "熊出没电视剧", size: "", spec: ""},
          {name: "喜羊羊与灰太狼", size: "", spec: ""},
          {name: "虹猫蓝兔七侠传", size: "34.48GB", spec: ""},
          {name: "哪吒系列", size: "", spec: ""},
          {name: "大闹天宫", size: "", spec: ""},
          {name: "大圣归来", size: "", spec: ""}
        ]
      },
      {
        name: "欧美动画专区",
        nameCn: "欧美动画专区",
        items: [
          {name: "皮克斯动画系列", size: "1.16TB", spec: ""},
          {name: "迪士尼动画系列", size: "", spec: ""},
          {name: "冰河世纪", size: "", spec: ""},
          {name: "怪物电力公司", size: "", spec: ""},
          {name: "玩具总动员", size: "", spec: ""},
          {name: "疯狂动物城", size: "", spec: ""},
          {name: "功夫熊猫", size: "", spec: ""},
          {name: "驯龙高手", size: "", spec: ""},
          {name: "神偷奶爸", size: "", spec: ""},
          {name: "小黄人", size: "", spec: ""},
          {name: "侠蜘蛛：平行宇宙", size: "", spec: ""}
        ]
      },
      {
        name: "动画电影专区",
        nameCn: "动画电影专区",
        items: [
          {name: "动画电影白集", size: "400TB", spec: ""},
          {name: "动漫电影资源库", size: "40TB", spec: ""},
          {name: "动画电影合集", size: "", spec: ""},
          {name: "剧场版合集", size: "", spec: ""},
          {name: "蓝光R", size: "", spec: ""},
          {name: "UHD动画电影合集", size: "", spec: ""}
        ]
      },
      {
        name: "经典IP专区",
        nameCn: "经典IP专区",
        items: [
          {name: "海贼王", size: "", spec: ""},
          {name: "火影忍者", size: "", spec: ""},
          {name: "龙珠", size: "", spec: ""},
          {name: "哆啦A梦", size: "", spec: ""},
          {name: "蜡笔小新", size: "", spec: ""},
          {name: "名侦探柯南", size: "", spec: ""},
          {name: "EVA", size: "", spec: ""},
          {name: "JOJO", size: "", spec: ""},
          {name: "鬼灭之刃", size: "", spec: ""},
          {name: "进击的巨人", size: "", spec: ""},
          {name: "熊出没", size: "", spec: ""},
          {name: "喜羊羊", size: "", spec: ""},
          {name: "奥特曼", size: "", spec: ""},
          {name: "假面骑士", size: "", spec: ""}
        ]
      },
      {
        name: "连载更新专区",
        nameCn: "连载更新专区",
        items: [
          {name: "（这一部分全部放更新中的资源）", size: "", spec: ""},
          {name: "海贼王（更新至1152集）", size: "", spec: ""},
          {name: "魔王学院的不定任者Ⅱ", size: "", spec: ""},
          {name: "猫眼三姐妹", size: "", spec: ""},
          {name: "地狱乐", size: "", spec: ""},
          {name: "镇魂街", size: "", spec: ""},
          {name: "魔术师库洛普西", size: "", spec: ""},
          {name: "火喰鸟", size: "", spec: ""},
          {name: "炎炎消防队", size: "", spec: ""},
          {name: "小公主苏菲亚", size: "", spec: ""},
          {name: "奶龙", size: "", spec: ""},
          {name: "波西和皮普", size: "", spec: ""},
          {name: "兔兔4K动画", size: "", spec: ""},
          {name: "寻家", size: "", spec: ""}
        ]
      },
      {
        name: "特摄专区",
        nameCn: "特摄专区",
        items: [
          {name: "奥特曼全系列", size: "", spec: ""},
          {name: "假面骑士全系列", size: "", spec: ""},
          {name: "超级战队", size: "", spec: ""},
          {name: "哥斯拉动画", size: "", spec: ""}
        ]
      },
      {
        name: "高清原盘专区",
        nameCn: "高清原盘专区",
        items: [
          {name: "蓝光原盘", size: "", spec: ""},
          {name: "重混", size: "", spec: ""},
          {name: "超高清合集", size: "", spec: ""},
          {name: "ISO原盘", size: "", spec: ""},
          {name: "已修剪刮削版", size: "", spec: ""}
        ]
      }
    ]
  },
  "variety": {
    name: "全球综艺·短剧合集",
    icon: "🎭",
    route: "cat-variety",
    subgroups: [
      {
        name: "国内艺术专区",
        nameCn: "国内艺术专区",
        items: [
          {name: "整理综艺大合集（一周）", size: "21.9TB", spec: ""},
          {name: "国内综艺包", size: "8.35TB", spec: ""},
          {name: "综艺合集", size: "1.12TB", spec: ""},
          {name: "爸爸去哪儿（全季）", size: "", spec: ""},
          {name: "我是歌手（全系列）", size: "", spec: ""},
          {name: "天赐的声音（更新至S06）", size: "", spec: ""},
          {name: "闪亮的日子（更新至S0", size: "", spec: ""},
          {name: "奔跑吧（2025）", size: "", spec: ""},
          {name: "哈哈（2020-）", size: "", spec: ""},
          {name: "喜剧之王单口季", size: "", spec: ""},
          {name: "喜人奇妙夜（更新中）", size: "", spec: ""},
          {name: "喜人奇妙夜第二季", size: "", spec: ""},
          {name: "一饭封神", size: "", spec: ""},
          {name: "三星营养午餐", size: "", spec: ""},
          {name: "康熙来了", size: "2.29TB", spec: ""},
          {name: "舌尖上的中国（四季）", size: "", spec: ""},
          {name: "中国318个5A级景区视频讲解+185个航拍", size: "", spec: ""},
          {name: "港台综艺", size: "", spec: ""},
          {name: "花儿与少年（2014年至今）", size: "", spec: ""},
          {name: "创营亚洲（2024）", size: "", spec: ""},
          {name: "火星情报局（2016-）", size: "", spec: ""}
        ]
      },
      {
        name: "国外综艺专区",
        nameCn: "国外综艺专区",
        items: [
          {name: "网飞Netflix高分综艺包", size: "26.32TB", spec: ""},
          {name: "单身即地狱（1-4季）", size: "", spec: ""},
          {name: "爱情盲选：德国篇", size: "", spec: ""},
          {name: "野兽游戏第二季", size: "", spec: ""},
          {name: "郭德纲30年相声专场（海外版）", size: "", spec: ""}
        ]
      },
      {
        name: "晚会盛典专区",
        nameCn: "晚会盛典专区",
        items: [
          {name: "央视春晚合集（1983-2024）", size: "", spec: ""},
          {name: "2025年中央广播电视总台春节联欢晚会", size: "", spec: ""},
          {name: "2025各地卫视春晚合集", size: "", spec: ""},
          {name: "哔哩哔哩跨年晚会（2025）", size: "", spec: ""}
        ]
      },
      {
        name: "音乐演出专区",
        nameCn: "音乐演出专区",
        items: [
          {name: "我是歌手（全系列）", size: "", spec: ""},
          {name: "郭德纲30周年相声专场", size: "", spec: ""},
          {name: "哈哈演唱会", size: "", spec: ""},
          {name: "演唱会资源合集（后续扩展）", size: "", spec: ""}
        ]
      },
      {
        name: "体育赛事专区",
        nameCn: "体育赛事专区",
        items: [
          {name: "NBA总决赛（1991-2020）", size: "698GB", spec: ""},
          {name: "赛事世界杯合集（工件）", size: "", spec: ""},
          {name: "奥运赛事合集（筹备）", size: "", spec: ""}
        ]
      },
      {
        name: "真人秀专区",
        nameCn: "真人秀专区",
        items: [
          {name: "爸爸去哪儿", size: "", spec: ""},
          {name: "奔跑吧", size: "", spec: ""},
          {name: "花儿与少年", size: "", spec: ""},
          {name: "创造营亚洲", size: "", spec: ""},
          {name: "火星情报局", size: "", spec: ""},
          {name: "哈哈", size: "", spec: ""},
          {name: "单身即地狱", size: "", spec: ""},
          {name: "爱情盲选", size: "", spec: ""}
        ]
      },
      {
        name: "美食旅行",
        nameCn: "美食旅行",
        items: [
          {name: "舌尖上的中国", size: "", spec: ""},
          {name: "中国318个5A级站点视频", size: "", spec: ""},
          {name: "康熙来了（美食精选）", size: "", spec: ""},
          {name: "花儿与少年", size: "", spec: ""}
        ]
      },
      {
        name: "短剧专区",
        nameCn: "短剧专区",
        items: [
          {name: "爽剧合集73部（英文短剧《我是上狗我爱看》）", size: "", spec: "3"},
          {name: "短剧资源合集（持续更新）", size: "", spec: ""},
          {name: "热门短剧合集1000部", size: "1.3TB", spec: ""}
        ]
      },
      {
        name: "精品专题专区",
        nameCn: "精品专题专区",
        items: [
          {name: "爽剧大合集", size: "", spec: ""},
          {name: "热门短剧1000部", size: "", spec: ""},
          {name: "港台综艺精选", size: "", spec: ""},
          {name: "Netflix精品综艺", size: "", spec: ""},
          {name: "春晚合集", size: "", spec: ""},
          {name: "演唱会合集", size: "", spec: ""}
        ]
      }
    ]
  },
  "concert": {
    name: "全球演唱会合集（Concert Collection",
    icon: "🎤",
    route: "cat-concert",
    subgroups: [
      {
        name: "官方演唱会原盘合集",
        nameCn: "官方演唱会原盘合集",
        items: [
          {name: "演唱会原盘", size: "820TB", spec: ""},
          {name: "演唱会合集", size: "7.5TB", spec: ""},
          {name: "演唱会", size: "58TB", spec: ""},
          {name: "演唱会原盘", size: "90.9TB", spec: ""},
          {name: "演唱会蓝光原盘", size: "9.54TB", spec: ""},
          {name: "华语乐坛演唱会", size: "13TB", spec: ""},
          {name: "港台歌手演唱会", size: "2.55TB", spec: ""},
          {name: "C AllStar合集（2021）", size: "", spec: ""},
          {name: "C AllStar合集（2017）", size: "", spec: ""}
        ]
      },
      {
        name: "华语演唱会",
        nameCn: "华语演唱会",
        items: [
          {name: "按歌手排序：", size: "", spec: ""},
          {name: "蔡依林", size: "", spec: ""},
          {name: "张学友", size: "", spec: ""},
          {name: "周杰伦", size: "", spec: ""},
          {name: "五月天", size: "", spec: ""},
          {name: "张敬轩", size: "", spec: ""},
          {name: "陈奕迅", size: "", spec: ""},
          {name: "刘德华", size: "", spec: ""},
          {name: "张国荣", size: "", spec: ""},
          {name: "谭咏麟", size: "", spec: ""},
          {name: "林子祥", size: "", spec: ""},
          {name: "梅艳芳", size: "", spec: ""},
          {name: "黎明", size: "", spec: ""},
          {name: "郭富城", size: "", spec: ""},
          {name: "王菲", size: "", spec: ""},
          {name: "莫文蔚", size: "", spec: ""},
          {name: "容祖儿", size: "", spec: ""},
          {name: "Twins", size: "", spec: ""},
          {name: "杨千嬅", size: "", spec: ""},
          {name: "古巨基", size: "", spec: ""},
          {name: "李克勤", size: "", spec: ""},
          {name: "郑秀文", size: "", spec: ""},
          {name: "梁静茹", size: "", spec: ""},
          {name: "邓紫棋", size: "", spec: ""},
          {name: "林俊杰", size: "", spec: ""},
          {name: "陶喆", size: "", spec: ""},
          {name: "林忆莲", size: "", spec: ""},
          {name: "张信哲", size: "", spec: ""},
          {name: "张惠妹", size: "", spec: ""},
          {name: "伍佰", size: "", spec: ""},
          {name: "许冠杰", size: "", spec: ""},
          {name: "Beyond", size: "", spec: ""},
          {name: "草蜢", size: "", spec: ""},
          {name: "温拿", size: "", spec: ""}
        ]
      },
      {
        name: "日韩演唱会",
        nameCn: "日韩演唱会",
        items: [
          {name: "滨崎步", size: "", spec: ""},
          {name: "安室奈美惠", size: "", spec: ""},
          {name: "宇多田光", size: "", spec: ""},
          {name: "仓木麻衣", size: "", spec: ""},
          {name: "中岛美嘉", size: "", spec: ""},
          {name: "西野加奈", size: "", spec: ""},
          {name: "MISIA", size: "", spec: ""},
          {name: "LiSA", size: "", spec: ""},
          {name: "Perfume", size: "", spec: ""},
          {name: "BABYMETAL", size: "", spec: ""},
          {name: "X JAPAN", size: "", spec: ""},
          {name: "L'Arc~en~Ciel", size: "", spec: ""},
          {name: "B'z", size: "", spec: ""},
          {name: "GLAY", size: "", spec: ""},
          {name: "Mr.Children", size: "", spec: ""},
          {name: "Radwimps", size: "", spec: ""},
          {name: "One OK Rock", size: "", spec: ""},
          {name: "AKB48", size: "", spec: ""},
          {name: "SKE48", size: "", spec: ""},
          {name: "NMB48", size: "", spec: ""},
          {name: "乃木坂46", size: "", spec: ""},
          {name: "少女时代", size: "", spec: ""},
          {name: "TWICE", size: "", spec: ""},
          {name: "BLACKPINK", size: "", spec: ""},
          {name: "Apink", size: "", spec: ""},
          {name: "T-ARA", size: "", spec: ""},
          {name: "BIGBANG", size: "", spec: ""},
          {name: "BTS", size: "", spec: ""},
          {name: "IU", size: "", spec: ""},
          {name: "全部按照歌手排列。", size: "", spec: ""},
          {name: "例如：", size: "", spec: ""},
          {name: "滨崎步", size: "", spec: ""},
          {name: "2006日本巡回", size: "", spec: ""},
          {name: "2008-2009 Countdown", size: "", spec: ""},
          {name: "2009-2010 Countdown", size: "", spec: ""},
          {name: "2012 Arena Tour", size: "", spec: ""},
          {name: "2014 Arena Tour", size: "", spec: ""},
          {name: "2015 TA TOUR", size: "", spec: ""},
          {name: "2016 Arena Tour", size: "", spec: ""},
          {name: "2019-2020巡回", size: "", spec: ""},
          {name: "Just the beginning", size: "", spec: ""},
          {name: "Feel the Love", size: "", spec: ""},
          {name: "...", size: "", spec: ""},
          {name: "每个后部保留", size: "", spec: ""},
          {name: "1080P蓝光原盘", size: "", spec: ""},
          {name: "4K蓝光原盘", size: "", spec: ""},
          {name: "容量", size: "", spec: ""}
        ]
      },
      {
        name: "海外演唱会",
        nameCn: "海外演唱会",
        items: [
          {name: "Michael Jackson", size: "", spec: ""},
          {name: "Madonna", size: "", spec: ""},
          {name: "Lady Gaga", size: "", spec: ""},
          {name: "Taylor Swift", size: "", spec: ""},
          {name: "Coldplay", size: "", spec: ""},
          {name: "Phil Collins", size: "", spec: ""},
          {name: "Kraftwerk", size: "", spec: ""},
          {name: "Tony Bennett", size: "", spec: ""},
          {name: "Andrea Bocelli", size: "", spec: ""},
          {name: "David Foster", size: "", spec: ""},
          {name: "Hans Zimmer", size: "", spec: ""},
          {name: "Yanni", size: "", spec: ""},
          {name: "Kenny G", size: "", spec: ""},
          {name: "Rolling Stones", size: "", spec: ""},
          {name: "Queen", size: "", spec: ""},
          {name: "Pink Floyd", size: "", spec: ""},
          {name: "Bob James", size: "", spec: ""},
          {name: "例如", size: "", spec: ""},
          {name: "Taylor Swift", size: "", spec: ""},
          {name: "1989 World Tour", size: "", spec: ""},
          {name: "Reputation Stadium Tour", size: "", spec: ""},
          {name: "Eras Tour", size: "", spec: ""},
          {name: "The RED Tour", size: "", spec: ""},
          {name: "全部保留：", size: "", spec: ""},
          {name: "4K WEB HDR", size: "", spec: ""},
          {name: "1080P蓝光原盘", size: "", spec: ""},
          {name: "Atmos", size: "", spec: ""},
          {name: "HDR10", size: "", spec: ""},
          {name: "DTS-HD MA", size: "", spec: ""},
          {name: "容量", size: "", spec: ""}
        ]
      },
      {
        name: "交响音乐会 / 古典",
        nameCn: "交响音乐会 / 古典",
        items: [
          {name: "柏林爱乐", size: "", spec: ""},
          {name: "维也纳爱乐", size: "", spec: ""},
          {name: "皇家音乐厅", size: "", spec: ""},
          {name: "英国皇家歌剧院", size: "", spec: ""},
          {name: "莫扎特", size: "", spec: ""},
          {name: "贝多芬", size: "", spec: ""},
          {name: "瓦格纳", size: "", spec: ""},
          {name: "歌剧", size: "", spec: ""},
          {name: "芭蕾舞剧", size: "", spec: ""},
          {name: "音乐剧", size: "", spec: ""},
          {name: "例如：", size: "", spec: ""},
          {name: "Hans Zimmer", size: "", spec: ""},
          {name: "John Williams", size: "", spec: ""},
          {name: "Andrea Bocelli", size: "", spec: ""},
          {name: "David Foster", size: "", spec: ""},
          {name: "Yanni", size: "", spec: ""},
          {name: "Kenny G", size: "", spec: ""}
        ]
      },
      {
        name: "音乐节",
        nameCn: "音乐节",
        items: [
          {name: "维也纳新年音乐会", size: "", spec: ""},
          {name: "2002", size: "", spec: ""},
          {name: "2009", size: "", spec: ""},
          {name: "2011", size: "", spec: ""},
          {name: "2012", size: "", spec: ""},
          {name: "2013", size: "", spec: ""},
          {name: "2014", size: "", spec: ""},
          {name: "2015", size: "", spec: ""},
          {name: "2016", size: "", spec: ""},
          {name: "2017", size: "", spec: ""},
          {name: "2018", size: "", spec: ""},
          {name: "2019", size: "", spec: ""},
          {name: "2020", size: "", spec: ""},
          {name: "2021", size: "", spec: ""},
          {name: "2022", size: "", spec: ""},
          {name: "2023", size: "", spec: ""},
          {name: "2024", size: "", spec: ""},
          {name: "全部一起放。", size: "", spec: ""}
        ]
      },
      {
        name: "按地区整理",
        nameCn: "按地区整理",
        items: [
          {name: "香港红馆", size: "", spec: ""},
          {name: "东京巨蛋", size: "", spec: ""},
          {name: "武道馆", size: "", spec: ""},
          {name: "台北小巨蛋", size: "", spec: ""},
          {name: "伦敦Royal Albert Hall", size: "", spec: ""},
          {name: "维也纳金色大厅", size: "", spec: ""},
          {name: "美国MSG", size: "", spec: ""},
          {name: "这种方便收藏。", size: "", spec: ""}
        ]
      },
      {
        name: "特殊收藏",
        nameCn: "特殊收藏",
        items: [
          {name: "例如：", size: "", spec: ""},
          {name: "3D演唱会", size: "", spec: ""},
          {name: "4K WEB HDR", size: "", spec: ""},
          {name: "4K蓝光原盘", size: "", spec: ""},
          {name: "Atmos版本", size: "", spec: ""},
          {name: "杜比视界", size: "", spec: ""},
          {name: "演唱会纪录片", size: "", spec: ""},
          {name: "幕后花絮", size: "", spec: ""}
        ]
      }
    ]
  },
  "music": {
    name: "全球音乐合集（建议目录结构）",
    icon: "🎵",
    route: "cat-music",
    subgroups: [
      {
        name: "全球无损音乐总库（综合资源）",
        nameCn: "全球无损音乐总库（综合资源）",
        items: [
          {name: "收藏级总库·全品类", size: "", spec: ""},
          {name: "全球无损音乐总库（22万首）", size: "", spec: ""},
          {name: "全球无损音乐总库（二）", size: "8.76TB", spec: ""},
          {name: "全球无损音乐合集（9万首）", size: "", spec: ""},
          {name: "全球音乐资源库", size: "8TB", spec: ""},
          {name: "无损歌曲精选（37758首）", size: "1.28TB", spec: ""},
          {name: "音乐合集", size: "1.07TB", spec: ""}
        ]
      },
      {
        name: "华语音乐典藏",
        nameCn: "华语音乐典藏",
        items: [
          {name: "华语歌手 / 华语专辑 / 华语无损", size: "", spec: ""},
          {name: "华语歌手", size: "", spec: ""},
          {name: "华语歌手CD唱片库", size: "", spec: ""},
          {name: "华语歌手无损唱片库（第一版）", size: "6.70TB", spec: "FLAC/APE｜20990首"},
          {name: "华语CD音乐合集", size: "", spec: "容量待补"},
          {name: "华语歌单（分轨版）", size: "690GB", spec: ""},
          {name: "华语高解析音源单曲（1611首）", size: "", spec: "Hi-Res"},
          {name: "内地唱片百佳（1979-2019）100CD无损合集", size: "", spec: ""},
          {name: "台湾百佳唱片（1975-2005）200CD", size: "", spec: ""}
        ]
      },
      {
        name: "高解析 / Hi-End 音乐专区",
        nameCn: "高解析 / Hi-End 音乐专区",
        items: [
          {name: "高清", size: "", spec: "DSD｜SACD"},
          {name: "古典音乐Hi-Res合集", size: "12.42TB", spec: ""},
          {name: "DSD音乐合集", size: "", spec: ""},
          {name: "Hi-Res高解析音乐合集", size: "", spec: ""},
          {name: "SACD音乐合集", size: "", spec: ""},
          {name: "SACD 华语音乐", size: "545.33GB", spec: ""},
          {name: "SONY古典音乐合集", size: "", spec: ""},
          {name: "厂商音源合集", size: "1.54TB", spec: ""},
          {name: "Apple Music Top100最佳专辑", size: "", spec: ""}
        ]
      },
      {
        name: "古典音乐专区",
        nameCn: "古典音乐专区",
        items: [
          {name: "古典音乐高清", size: "12.42TB", spec: ""},
          {name: "22张天价古典CD", size: "", spec: ""},
          {name: "SONY古典音乐合集", size: "", spec: ""}
        ]
      },
      {
        name: "发烧专区",
        nameCn: "发烧专区",
        items: [
          {name: "发烧友收藏", size: "", spec: ""},
          {name: "国内十大音乐精选合集", size: "", spec: ""},
          {name: "模拟之声慢刻CD", size: "", spec: "104CD｜WAV+CUE"}
        ]
      },
      {
        name: "KTV / 点歌资源",
        nameCn: "KTV / 点歌资源",
        items: [
          {name: "家庭KTV", size: "", spec: ""},
          {name: "KTV歌库（2万首）", size: "1TB", spec: ""}
        ]
      },
      {
        name: "DTS / 多声道音乐",
        nameCn: "DTS / 多声道音乐",
        items: [
          {name: "家庭影院", size: "", spec: ""},
          {name: "DTS-CD全集", size: "", spec: "2040张"},
          {name: "DTS-CD专辑A包（0001-0700）", size: "", spec: ""}
        ]
      },
      {
        name: "音乐平台精选",
        nameCn: "音乐平台精选",
        items: [
          {name: "官方排行榜 / 推荐", size: "", spec: ""},
          {name: "Apple Music Top100最佳专辑", size: "", spec: ""}
        ]
      },
      {
        name: "音乐格式资源库",
        nameCn: "音乐格式资源库",
        items: [
          {name: "FLAC无损", size: "", spec: ""},
          {name: "APE无损", size: "", spec: ""},
          {name: "WAV+CUE", size: "", spec: ""},
          {name: "DSD", size: "", spec: ""},
          {name: "SACD", size: "", spec: ""},
          {name: "高分辨率", size: "", spec: ""},
          {name: "CD原盘", size: "", spec: ""},
          {name: "展示最终效果", size: "", spec: ""},
          {name: "全球音乐合集", size: "", spec: ""},
          {name: "├── 全球无损音乐总库", size: "", spec: ""},
          {name: "├── 华语音乐典藏", size: "", spec: ""},
          {name: "├── 高解析Hi-Res专区", size: "", spec: ""},
          {name: "├── 古典音乐专区", size: "", spec: ""},
          {name: "├── 发烧唱片专区", size: "", spec: ""},
          {name: "├── KTV歌库", size: "", spec: ""},
          {name: "├── DTS多声道音乐", size: "", spec: ""},
          {name: "├── 音乐平台精选", size: "", spec: ""},
          {name: "└── 音乐格式资源库", size: "", spec: ""}
        ]
      }
    ]
  },
  "books": {
    name: "全球图书合集（建议目录结构）",
    icon: "📚",
    route: "cat-books",
    subgroups: [
      {
        name: "全球电子书总库",
        nameCn: "全球电子书总库",
        items: [
          {name: "海量电子书·全格式收藏", size: "", spec: ""},
          {name: "FreeMBook全站电子", size: "", spec: ""},
          {name: "印度电子图书馆（部分）", size: "12TB", spec: "约29万册｜约"},
          {name: "中美百万电子书库（66万册ZIP压缩版）", size: "", spec: ""},
          {name: "啃书网全站网络小说", size: "234GB", spec: "22万本｜（解压约）"},
          {name: "96000本电子书合集", size: "12GB", spec: "TXT / PDF"},
          {name: "小书屋电子书库", size: "", spec: ""},
          {name: "优质电子书精选", size: "25GB", spec: ""}
        ]
      },
      {
        name: "文学小说馆",
        nameCn: "文学小说馆",
        items: [
          {name: "小说 · 名著 · 网络文学", size: "", spec: ""},
          {name: "小说合集（已排重）", size: "264.29GB", spec: ""},
          {name: "武侠 / 玄幻 / 网络小说合集", size: "", spec: ""},
          {name: "网络小说20年精华合集（100+大神代表作）", size: "", spec: ""},
          {name: "世界名著译本系列（有声版）", size: "", spec: ""},
          {name: "漫凹（漫画 / 小说资源）", size: "", spec: ""}
        ]
      },
      {
        name: "有声书资源馆",
        nameCn: "有声书资源馆",
        items: [
          {name: "听书 · 小说 · 评书", size: "", spec: ""},
          {name: "有声听书库", size: "1.02TB", spec: ""},
          {name: "真人有声书合集", size: "", spec: "10万集"},
          {name: "有声小说大全（已排重）", size: "210GB", spec: ""},
          {name: "名著译有声书合集", size: "", spec: ""},
          {name: "单田芳评书全集", size: "44GB", spec: ""}
        ]
      },
      {
        name: "历史·人文·国学",
        nameCn: "历史·人文·国学",
        items: [
          {name: "历史文化·国学典籍", size: "", spec: ""},
          {name: "永乐大典", size: "", spec: "217册（含国内海外及流失版本）"},
          {name: "中华历史文库", size: "", spec: ""},
          {name: "国家人文史", size: "", spec: ""},
          {name: "百科全书系列（电子书）", size: "", spec: ""}
        ]
      },
      {
        name: "艺术典藏",
        nameCn: "艺术典藏",
        items: [
          {name: "绘画·摄影·连环画", size: "", spec: ""},
          {name: "高清名画合集", size: "711GB", spec: ""},
          {name: "老照片合集", size: "", spec: ""},
          {name: "连环画合集", size: "", spec: "326套｜4090册"},
          {name: "小人书珍藏版", size: "76.61GB", spec: "500册"}
        ]
      },
      {
        name: "戏曲·曲艺专区",
        nameCn: "戏曲·曲艺专区",
        items: [
          {name: "京剧·黄梅戏·相声", size: "", spec: ""},
          {name: "京剧资源合集", size: "", spec: ""},
          {name: "《中国京剧有声大考》", size: "", spec: "30CD"},
          {name: "《京之星——当代京剧名家唱片系列》", size: "", spec: "30CD"},
          {name: "《百年老唱片·京剧大典》", size: "", spec: "26CD"},
          {name: "黄梅戏《罗帕记》", size: "", spec: "2CD｜WAV+CUE"},
          {name: "相声小品合集", size: "", spec: ""}
        ]
      },
      {
        name: "阅读成长专区",
        nameCn: "阅读成长专区",
        items: [
          {name: "阅读方法·精品书单", size: "", spec: ""},
          {name: "樊登读书会", size: "", spec: ""},
          {name: "精读全球好书（第三季）", size: "", spec: ""},
          {name: "全球好书100本", size: "", spec: ""}
        ]
      },
      {
        name: "学习提升专区",
        nameCn: "学习提升专区",
        items: [
          {name: "课程·资料", size: "", spec: ""},
          {name: "张雪峰资料大全（最全合集）", size: "", spec: ""},
          {name: "张至顺《八部金刚功》", size: "", spec: "4K重制版"}
        ]
      },
      {
        name: "专业书籍",
        nameCn: "专业书籍",
        items: [
          {name: "专业书籍", size: "", spec: ""},
          {name: "古典音乐书籍（正规书籍）", size: "1.28GB", spec: "56本"},
          {name: "最终目录效果", size: "", spec: ""},
          {name: "全球图书合集", size: "", spec: ""},
          {name: "├── 全球电子书总库", size: "", spec: ""},
          {name: "├── 文学小说馆", size: "", spec: ""},
          {name: "├── 有声书资源馆", size: "", spec: ""},
          {name: "├── 历史 · 人文 · 国学", size: "", spec: ""},
          {name: "├── 艺术典藏", size: "", spec: ""},
          {name: "├── 戏曲 · 曲艺专区", size: "", spec: ""},
          {name: "├── 阅读成长专区", size: "", spec: ""},
          {name: "├── 学习提升专区", size: "", spec: ""},
          {name: "└── 专业出版物", size: "", spec: ""}
        ]
      }
    ]
  },
  "documentary": {
    name: "🌍 全球纪录片合集",
    icon: "🌍",
    route: "cat-documentary",
    subgroups: [
      {
        name: "纪录片原盘资源库",
        nameCn: "纪录片原盘资源库",
        items: [
          {name: "全球收藏级文献资源", size: "", spec: ""},
          {name: "蓝光原盘纪录片合集", size: "", spec: ""},
          {name: "BBC纪录片原盘合集", size: "2.52TB", spec: ""},
          {name: "IMAX纪录片合集（46部）", size: "", spec: ""},
          {name: "Netflix 纪录片合集（2023）", size: "", spec: ""},
          {name: "盗火", size: "", spec: ""}
        ]
      },
      {
        name: "CCTV",
        nameCn: "CCTV",
        items: [
          {name: "闭路电视监控系统·CG", size: "", spec: ""},
          {name: "央视《自然传奇》", size: "2.16TB", spec: "2015-2023"},
          {name: "中央电视台《人与自然》", size: "1.19TB", spec: "2014-2023"},
          {name: "中央电视台《动物世界》", size: "690GB", spec: "2016-2022"},
          {name: "《航拍中国》", size: "", spec: ""},
          {name: "《河西走廊》", size: "", spec: ""},
          {name: "《超级工程》", size: "", spec: ""},
          {name: "《中国》", size: "", spec: ""},
          {name: "《中国通史》", size: "", spec: ""},
          {name: "《中国之谜》", size: "", spec: ""},
          {name: "《中国公路最美》", size: "", spec: ""},
          {name: "《缓解贫困》", size: "", spec: ""},
          {name: "《中国救护》", size: "", spec: ""},
          {name: "《第三极》", size: "", spec: ""},
          {name: "《众神乐园》", size: "", spec: ""},
          {name: "《未来漫游指南》", size: "", spec: ""},
          {name: "《影响世界的中国植物》", size: "", spec: ""},
          {name: "《遇", size: "", spec: ""},
          {name: "《水下中国》", size: "", spec: ""},
          {name: "《不止考古：我与三星堆》", size: "", spec: ""},
          {name: "《敦敦：生而传奇》", size: "", spec: ""},
          {name: "《王阳明》", size: "", spec: ""},
          {name: "《家园》", size: "", spec: ""},
          {name: "《功勋章》", size: "", spec: ""},
          {name: "《生门》", size: "", spec: ""},
          {name: "《盛会》", size: "", spec: ""},
          {name: "《跟着书本去旅行》", size: "", spec: ""},
          {name: "《老广的味道》1-9季", size: "", spec: ""},
          {name: "《风味人间》1-5", size: "", spec: ""},
          {name: "《风味原产地》", size: "", spec: ""},
          {name: "《早餐中国》1-4季", size: "", spec: ""},
          {name: "《远方的家》系列", size: "5.47TB", spec: ""}
        ]
      },
      {
        name: "BBC / 国家地理专区",
        nameCn: "BBC / 国家地理专区",
        items: [
          {name: "英国广播公司", size: "", spec: ""},
          {name: "《地球脉动》1-2", size: "", spec: ""},
          {name: "《蓝色星球》1-2", size: "", spec: ""},
          {name: "《绿色星球》", size: "", spec: ""},
          {name: "《生命》", size: "", spec: ""},
          {name: "《完美星球》", size: "", spec: ""},
          {name: "《歌手》", size: "", spec: ""},
          {name: "《七个世界一个星球》", size: "", spec: ""},
          {name: "《非洲》", size: "", spec: ""},
          {name: "《野性英伦》", size: "", spec: ""},
          {name: "《野性都市》", size: "", spec: ""},
          {name: "《野性太平洋》", size: "", spec: ""},
          {name: "《狂野日本》", size: "", spec: ""},
          {name: "《大太平洋》", size: "", spec: ""},
          {name: "《大堡礁探险》", size: "", spec: ""},
          {name: "《北》", size: "", spec: ""},
          {name: "《欧洲》", size: "", spec: ""},
          {name: "《海洋》", size: "", spec: ""},
          {name: "《海洋：我们的蓝色星球》", size: "", spec: ""},
          {name: "《企鹅群里有特务》", size: "", spec: ""},
          {name: "《求偶游戏》", size: "", spec: ""},
          {name: "《不可思议的动物》", size: "", spec: ""},
          {name: "《动物本色》", size: "", spec: ""},
          {name: "《黑猩猩帝国》", size: "", spec: ""},
          {name: "《贝尔蒂·格雷戈里：与动物零距离》", size: "", spec: ""},
          {name: "《空闲星球》", size: "", spec: ""}
        ]
      },
      {
        name: "自然·动物·地理",
        nameCn: "自然·动物·地理",
        items: [
          {name: "《北极熊》", size: "", spec: ""},
          {name: "《大熊猫》", size: "", spec: ""},
          {name: "《大象女王》", size: "", spec: ""},
          {name: "《大象的秘密》", size: "", spec: ""},
          {name: "《帝企鹅日记2》", size: "", spec: ""},
          {name: "《龟女士的奥德赛》", size: "", spec: ""},
          {name: "《最后的狮子》", size: "", spec: ""},
          {name: "《海狼之岛》", size: "", spec: ""},
          {name: "《企鹅小镇》", size: "", spec: ""},
          {name: "《超凡动物奇观》", size: "", spec: ""},
          {name: "《动物的秘密生活》", size: "", spec: ""},
          {name: "《72种危险动物：亚洲》", size: "", spec: ""},
          {name: "《72种危险动物：拉丁美洲》", size: "", spec: ""},
          {name: "《博茨瓦纳惊人的野生动物》", size: "", spec: ""},
          {name: "《婆罗洲：亚洲的魅力》", size: "", spec: ""},
          {name: "《塞伦盖蒂国家公园》", size: "", spec: ""},
          {name: "《纳米比亚：旷野的精神》", size: "", spec: ""},
          {name: "《全球绝美国家庭公园》", size: "", spec: ""},
          {name: "《狂野之美：国家公园探险》", size: "", spec: ""}
        ]
      },
      {
        name: "宇宙·科学·探索",
        nameCn: "宇宙·科学·探索",
        items: [
          {name: "《宇宙时空之旅》", size: "", spec: ""},
          {name: "《了解宇宙如何运行》", size: "", spec: ""},
          {name: "《国际空间站》", size: "", spec: ""},
          {name: "《阿波罗11号》", size: "", spec: ""},
          {name: "《奔向月球》", size: "", spec: ""},
          {name: "《登月进行时》", size: "", spec: ""},
          {name: "《回到太空》", size: "", spec: ""},
          {name: "《太空之旅》", size: "", spec: ""},
          {name: "《从太空看地球》", size: "", spec: ""},
          {name: "《与霍金一起了解宇宙》", size: "", spec: ""},
          {name: "《我们的浩瀚宇宙》", size: "", spec: ""},
          {name: "《外星世界》", size: "", spec: ""},
          {name: "《哈勃伸缩》", size: "", spec: ""},
          {name: "《征服天穹》", size: "", spec: ""}
        ]
      },
      {
        name: "历史·战争·人文",
        nameCn: "历史·战争·人文",
        items: [
          {name: "《美国内战》", size: "", spec: ""},
          {name: "《记忆的力量：抗美援朝》", size: "", spec: ""},
          {name: "《中国历届大阅读兵》", size: "", spec: ""},
          {name: "《帝国的崛起：奥斯曼》", size: "", spec: ""},
          {name: "《登陆日：诺曼底1944》", size: "", spec: ""},
          {name: "《为了全", size: "", spec: ""},
          {name: "《越南：改变美国的战争》", size: "", spec: ""},
          {name: "《在越南最后的日子》", size: "", spec: ""},
          {name: "《血与性：400年王室风云》", size: "", spec: ""},
          {name: "《里斯本丸沉没》", size: "", spec: ""},
          {name: "《伟大征程》", size: "", spec: ""}
        ]
      },
      {
        name: "美食·旅行·城市",
        nameCn: "美食·旅行·城市",
        items: [
          {name: "《风味人间》", size: "", spec: ""},
          {name: "《风味原产地》", size: "", spec: ""},
          {name: "《早餐中国》", size: "", spec: ""},
          {name: "《躺看周游世界》", size: "", spec: ""},
          {name: "《实境之旅：北海道》", size: "", spec: ""},
          {name: "《美国一号公路》", size: "", spec: ""},
          {name: "《原味澳洲》", size: "", spec: ""},
          {name: "《南太平洋之旅》", size: "", spec: ""},
          {name: "《穿越落基山脉》", size: "", spec: ""},
          {name: "《美国西海岸之旅》", size: "", spec: ""}
        ]
      },
      {
        name: "人物·艺术·音乐",
        nameCn: "人物·艺术·音乐",
        items: [
          {name: "《坂本龙一：终曲》", size: "", spec: ""},
          {name: "《泰勒·斯威夫特：美国小姐》", size: "", spec: ""},
          {name: "《配乐大师：约翰·威廉姆斯》", size: "", spec: ""},
          {name: "《披头士：回归》", size: "", spec: ""},
          {name: "《一周八天：披头士巡演时代》", size: "", spec: ""},
          {name: "《保罗·西蒙：永不停息的梦》", size: "", spec: ""},
          {name: "《卢·里德：柏林》", size: "", spec: ""},
          {name: "《卡拉斯：为爱而声》", size: "", spec: ""},
          {name: "《宫崎骏与苍鹭》", size: "", spec: ""},
          {name: "《大卫·伯恩的美国乌托邦》", size: "", spec: ""}
        ]
      },
      {
        name: "体育纪录片",
        nameCn: "体育纪录片",
        items: [
          {name: "《一级方程式：疾速争胜》1-7季", size: "", spec: ""},
          {name: "《MotoGP Unlimited》", size: "", spec: ""},
          {name: "《梅西的世界杯》", size: "", spec: ""},
          {name: "《孤注一掷：曼彻斯特城》", size: "", spec: ""},
          {name: "《孤注一掷：巴西国家队》", size: "", spec: ""},
          {name: "《孤注一掷：德国国家队》", size: "", spec: ""},
          {name: "《孤注一掷：阿森纳》", size: "", spec: ""},
          {name: "《孤注一掷：热刺》", size: "", spec: ""},
          {name: "《竭力挥杆》", size: "", spec: ""},
          {name: "《破发点》", size: "", spec: ""},
          {name: "《康纳·麦格雷戈：拳王万岁》", size: "", spec: ""},
          {name: "《徒手攀岩》", size: "", spec: ""},
          {name: "《与浪争锋》", size: "", spec: ""}
        ]
      },
      {
        name: "社会·犯罪·调查",
        nameCn: "社会·犯罪·调查",
        items: [
          {name: "《MH370：消失的马航客机》", size: "", spec: ""},
          {name: "《全美报警：波士顿爆炸案》", size: "", spec: ""},
          {name: "《黑夜追踪狂》", size: "", spec: ""},
          {name: "《韦科惨案》", size: "", spec: ""},
          {name: "《药剂师》", size: "", spec: ""},
          {name: "《追缉汽车大亨》", size: "", spec: ""},
          {name: "《我们的父亲》", size: "", spec: ""},
          {name: "《我是一名杀手》", size: "", spec: ""},
          {name: "《边境凶案》", size: "", spec: ""},
          {name: "《夜宿人》", size: "", spec: ""},
          {name: "《我们窃取秘密：维基解密》", size: "", spec: ""}
        ]
      },
      {
        name: "Netflix精品纪录片",
        nameCn: "Netflix精品纪录片",
        items: [
          {name: "Netflix 原创作品（2018-2025）", size: "", spec: ""},
          {name: "《我们的星球》", size: "", spec: ""},
          {name: "《我们星球上的生命》", size: "", spec: ""},
          {name: "《地球风暴》", size: "", spec: ""},
          {name: "《夜色中的地球》", size: "", spec: ""},
          {name: "《黑猩猩帝国》", size: "", spec: ""},
          {name: "《急诊先锋：纽约》", size: "", spec: ""},
          {name: "《致富攻略》", size: "", spec: ""},
          {name: "《我工作故我在》", size: "", spec: ""},
          {name: "《欢迎来地球》", size: "", spec: ""},
          {name: "《外星世界》", size: "", spec: ""},
          {name: "《木偶奇遇记》", size: "", spec: ""},
          {name: "《喵星人的奇思妙想》", size: "", spec: ""},
          {name: "《未来漫游指南》", size: "", spec: ""}
        ]
      },
      {
        name: "纪录片专题合集",
        nameCn: "纪录片专题合集",
        items: [
          {name: "IMAX纪录片合集（46部）", size: "", spec: ""},
          {name: "BBC纪录片原盘合集", size: "2.52TB", spec: ""},
          {name: "Netflix 纪录片合集", size: "", spec: ""},
          {name: "中央电视台纪录片合集", size: "", spec: ""},
          {name: "国家地理纪录片合集", size: "", spec: ""},
          {name: "世界遗产3D纪录片系列", size: "", spec: ""},
          {name: "世界自然纪录片系列", size: "", spec: ""},
          {name: "世界历史纪录片系列", size: "", spec: ""},
          {name: "世界人文纪录片系列", size: "", spec: ""},
          {name: "最终目录风格", size: "", spec: ""},
          {name: "全球纪录片合集", size: "", spec: ""},
          {name: "├── 纪录片原盘资源库", size: "", spec: ""},
          {name: "├── CCTV / 国产纪录片", size: "", spec: ""},
          {name: "├── BBC / 国家地理", size: "", spec: ""},
          {name: "├── 自然 · 动物 · 地理", size: "", spec: ""},
          {name: "├── 宇宙 · 科学 · 探索", size: "", spec: ""},
          {name: "├── 历史 · 战争 · 人文", size: "", spec: ""},
          {name: "├── 美食 · 旅行 · 城市", size: "", spec: ""},
          {name: "├── 人物 · 艺术 · 音乐", size: "", spec: ""},
          {name: "├── 体育纪录片", size: "", spec: ""},
          {name: "├── 社会 · 犯罪 · 调查", size: "", spec: ""},
          {name: "├── Netflix 精品纪录片", size: "", spec: ""},
          {name: "└── 纪录片专题合集", size: "", spec: ""}
        ]
      }
    ]
  },
  "games": {
    name: "🎮 全球游戏合集",
    icon: "🎮",
    route: "cat-games",
    subgroups: [
      {
        name: "PC单机游戏总库",
        nameCn: "PC单机游戏总库",
        items: [
          {name: "PC大型单机·AAA游戏收藏", size: "", spec: ""},
          {name: "PC单机游戏大合集（持续更新）", size: "", spec: ""},
          {name: "PC单机游戏精选合集", size: "", spec: ""},
          {name: "PC经典游戏合集", size: "", spec: ""},
          {name: "PC街机游戏合集（1425款", size: "", spec: ""},
          {name: "DOS经典游戏合集（1810款）", size: "", spec: ""},
          {name: "PC装机模拟器", size: "", spec: ""},
          {name: "雨血（雨血）", size: "", spec: ""},
          {name: "空军", size: "", spec: ""},
          {name: "星际舰队", size: "", spec: ""},
          {name: "新刀剑封魔录", size: "", spec: ""},
          {name: "仙剑奇侠传9", size: "", spec: ""},
          {name: "梦幻战争（贺岁版）", size: "", spec: ""},
          {name: "半条命2（中文版）", size: "", spec: ""},
          {name: "红色警戒2", size: "", spec: ""},
          {name: "Halo：Spartan Assault（光环：斯巴达突袭）", size: "", spec: ""}
        ]
      },
      {
        name: "3A动作冒险游戏",
        nameCn: "3A动作冒险游戏",
        items: [
          {name: "GTA V（盗贼猎手5）", size: "", spec: ""},
          {name: "看门狗", size: "", spec: ""},
          {name: "孤岛危机", size: "", spec: ""},
          {name: "孤岛惊魂", size: "", spec: ""},
          {name: "刺客信条：编年史·中国", size: "", spec: ""},
          {name: "龙腾世纪：审判", size: "", spec: ""},
          {name: "龙腾世纪：起源", size: "", spec: ""},
          {name: "崛起3：泰坦之王", size: "", spec: ""},
          {name: "鬼哭5", size: "", spec: ""},
          {name: "恶魔城：暗影之王", size: "", spec: ""},
          {name: "生化奇兵：无限", size: "", spec: ""},
          {name: "生存之旅4（Left 4 Dead）", size: "", spec: ""},
          {name: "死亡岛", size: "", spec: ""},
          {name: "死亡净化：爆发", size: "", spec: ""},
          {name: "幽灵行动：荒野", size: "", spec: ""},
          {name: "狙击手：幽灵战士契约", size: "", spec: ""},
          {name: "狙击精英", size: "", spec: ""},
          {name: "镜之边缘：催化剂", size: "", spec: ""},
          {name: "杀手6", size: "", spec: ""},
          {name: "正当防卫", size: "", spec: ""},
          {name: "正当防卫4", size: "", spec: ""},
          {name: "僚机计划", size: "", spec: ""},
          {name: "罗马之子", size: "", spec: ""},
          {name: "皇牌空战7", size: "", spec: ""},
          {name: "战火风暴", size: "", spec: ""},
          {name: "最终结局XV", size: "", spec: ""},
          {name: "最终幻想世界", size: "", spec: ""},
          {name: "最终幻想XV口袋版", size: "", spec: ""}
        ]
      },
      {
        name: "射击战争游戏",
        nameCn: "射击战争游戏",
        items: [
          {name: "荣誉勋章", size: "", spec: ""},
          {name: "战地系列", size: "", spec: ""},
          {name: "战地岛主", size: "", spec: ""},
          {name: "战前", size: "", spec: ""},
          {name: "使命召唤", size: "", spec: ""},
          {name: "泰坦陨落2", size: "", spec: ""},
          {name: "光环：士官长合集", size: "", spec: ""},
          {name: "CS", size: "", spec: ""},
          {name: "击长空1-2", size: "", spec: ""},
          {name: "红色警戒", size: "", spec: ""},
          {name: "国土防线", size: "", spec: ""},
          {name: "幽灵行动：荒野", size: "", spec: ""},
          {name: "世界大战Z", size: "", spec: ""},
          {name: "战火风暴", size: "", spec: ""}
        ]
      },
      {
        name: "赛车/飞行/体育",
        nameCn: "赛车/飞行/体育",
        items: [
          {name: "极限竞速：地平线", size: "", spec: ""},
          {name: "极品飞车", size: "", spec: ""},
          {name: "皇牌空战7", size: "", spec: ""},
          {name: "击长空", size: "", spec: ""},
          {name: "尘埃3", size: "", spec: ""},
          {name: "坎巴拉太空计划", size: "", spec: ""},
          {name: "高尔夫", size: "", spec: ""},
          {name: "网球", size: "", spec: ""},
          {name: "足球", size: "", spec: ""},
          {name: "NBA篮球", size: "", spec: ""}
        ]
      },
      {
        name: "策略",
        nameCn: "策略",
        items: [
          {name: "文明6", size: "", spec: ""},
          {name: "灰蛊", size: "", spec: ""},
          {name: "星球大战（策略）", size: "", spec: ""},
          {name: "模拟城市", size: "", spec: ""},
          {name: "沙盒：战略与特殊（完整版）", size: "", spec: ""},
          {name: "火车模拟", size: "", spec: ""},
          {name: "建筑模拟器", size: "", spec: ""},
          {name: "梦幻餐厅", size: "", spec: ""},
          {name: "梦幻家园", size: "", spec: ""},
          {name: "钢铁战队", size: "", spec: ""}
        ]
      },
      {
        name: "生存 / 沙盒 / 开放世界",
        nameCn: "生存 / 沙盒 / 开放世界",
        items: [
          {name: "沙盒：战略与专用", size: "", spec: ""},
          {name: "生存之旅", size: "", spec: ""},
          {name: "世界大战Z", size: "", spec: ""},
          {name: "丧尸围城3", size: "", spec: ""},
          {name: "生存模拟", size: "", spec: ""},
          {name: "求生类合集", size: "", spec: ""},
          {name: "沙盒游戏合集", size: "", spec: ""}
        ]
      },
      {
        name: "动作/RPG/武侠",
        nameCn: "动作/RPG/武侠",
        items: [
          {name: "金庸群侠传", size: "", spec: ""},
          {name: "三国系列", size: "", spec: ""},
          {name: "三国志", size: "", spec: ""},
          {name: "三国群英传", size: "", spec: ""},
          {name: "动作仙侠修仙合集", size: "", spec: ""},
          {name: "诺亚之瓶", size: "", spec: ""},
          {name: "众生", size: "", spec: ""},
          {name: "武侠游戏合集", size: "", spec: ""}
        ]
      },
      {
        name: "安卓游戏合集",
        nameCn: "安卓游戏合集",
        items: [
          {name: "分类资源", size: "", spec: ""},
          {name: "安卓游戏合集（持续更新）", size: "", spec: ""},
          {name: "战争类", size: "", spec: ""},
          {name: "塔防类", size: "", spec: ""},
          {name: "生存类", size: "", spec: ""},
          {name: "模拟类", size: "", spec: ""},
          {name: "三国类", size: "", spec: ""},
          {name: "沙盒类", size: "", spec: ""},
          {name: "修仙仙侠类", size: "", spec: ""},
          {name: "精品APK", size: "", spec: ""},
          {name: "众生（破解版）", size: "", spec: ""},
          {name: "坦克：装甲纷争（全坦克解锁）", size: "", spec: ""},
          {name: "沙盒：战略与特殊（完整版）", size: "", spec: ""},
          {name: "诺亚之瓶（无限金币）", size: "", spec: ""},
          {name: "梦幻餐厅（破解版）", size: "", spec: ""},
          {name: "梦幻家园", size: "", spec: ""},
          {name: "钢铁战队", size: "", spec: ""},
          {name: "乐动达人", size: "", spec: ""},
          {name: "金庸群侠传（无限元宝）", size: "", spec: ""},
          {name: "火车模拟（无限金币）", size: "", spec: ""}
        ]
      },
      {
        name: "Switch（NS）游戏合集",
        nameCn: "Switch（NS）游戏合集",
        items: [
          {name: "任天堂第一方", size: "", spec: ""},
          {name: "塞尔达传说", size: "", spec: ""},
          {name: "超级马力欧", size: "", spec: ""},
          {name: "马力欧赛车", size: "", spec: ""},
          {name: "马力欧网球", size: "", spec: ""},
          {name: "马力欧派对", size: "", spec: ""},
          {name: "宝可梦 Let's Go 皮卡丘", size: "", spec: ""},
          {name: "宝可梦 Let's Go 伊布", size: "", spec: ""},
          {name: "宝可梦系列", size: "", spec: ""},
          {name: "喷射战士", size: "", spec: ""},
          {name: "动物森友会", size: "", spec: ""},
          {name: "异度之刃2", size: "", spec: ""},
          {name: "火焰纹章", size: "", spec: ""},
          {name: "星之卡比", size: "", spec: ""},
          {name: "路易吉洋馆", size: "", spec: ""},
          {name: "耀西", size: "", spec: ""},
          {name: "日式角色扮演游戏", size: "", spec: ""},
          {name: "最终", size: "", spec: ""},
          {name: "最终幻想XV口袋", size: "", spec: ""},
          {name: "勇者斗恶龙", size: "", spec: ""},
          {name: "八方旅人", size: "", spec: ""},
          {name: "异度之刃2", size: "", spec: ""},
          {name: "血污：夜之仪式", size: "", spec: ""},
          {name: "独立企业", size: "", spec: ""},
          {name: "演示", size: "", spec: ""},
          {name: "光之子", size: "", spec: ""},
          {name: "小小梦魇2", size: "", spec: ""},
          {name: "里面", size: "", spec: ""},
          {name: "炼狱", size: "", spec: ""},
          {name: "空洞骑士", size: "", spec: ""},
          {name: "塞莱斯特", size: "", spec: ""},
          {name: "死细胞", size: "", spec: ""},
          {name: "茶杯头", size: "", spec: ""},
          {name: "月下夜想曲", size: "", spec: ""},
          {name: "模拟经营", size: "", spec: ""},
          {name: "城市：天际线", size: "", spec: ""},
          {name: "建筑师", size: "", spec: ""},
          {name: "开拓者", size: "", spec: ""},
          {name: "建村达人", size: "", spec: ""},
          {name: "模拟经营合集", size: "", spec: ""},
          {name: "NS中文合集", size: "", spec: ""},
          {name: "Switch中文游戏合集", size: "", spec: ""},
          {name: "Switch热门游戏合集", size: "", spec: ""},
          {name: "Switch独立游戏合集", size: "", spec: ""},
          {name: "Switch方第一游戏合集", size: "", spec: ""}
        ]
      },
      {
        name: "街机 / 怀旧游戏",
        nameCn: "街机 / 怀旧游戏",
        items: [
          {name: "街机游戏合集（1425款）", size: "", spec: ""},
          {name: "DOS经典游戏合集（1810款）", size: "", spec: ""},
          {name: "红白机经典合集", size: "", spec: ""},
          {name: "街机模拟器合集", size: "", spec: ""},
          {name: "CPS街机合集", size: "", spec: ""},
          {name: "NeoGeo街机合集", size: "", spec: ""}
        ]
      },
      {
        name: "游戏平台专区",
        nameCn: "游戏平台专区",
        items: [
          {name: "电脑游戏", size: "", spec: ""},
          {name: "安卓游戏", size: "", spec: ""},
          {name: "Switch游戏", size: "", spec: ""},
          {name: "街机游戏", size: "", spec: ""},
          {name: "DOS经典游戏", size: "", spec: ""},
          {name: "最终目录效果", size: "", spec: ""},
          {name: "全球游戏合集", size: "", spec: ""},
          {name: "├── PC单机游戏总库", size: "", spec: ""},
          {name: "├── 3A动作冒险", size: "", spec: ""},
          {name: "├── 射击战争游戏", size: "", spec: ""},
          {name: "├── 赛车 · 飞行 · 体育", size: "", spec: ""},
          {name: "├── 策略 · RTS · 模拟经营", size: "", spec: ""},
          {name: "├── 生存 · 沙盒 · 开放世界", size: "", spec: ""},
          {name: "├── 武侠 · RPG · 三国", size: "", spec: ""},
          {name: "├── 安卓游戏合集", size: "", spec: ""},
          {name: "├── Switch（NS）游戏合集", size: "", spec: ""},
          {name: "├── 街机 · DOS经典游戏", size: "", spec: ""},
          {name: "└── 游戏平台专区", size: "", spec: ""}
        ]
      }
    ]
  }
};