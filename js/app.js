// ========== CATTI 猫咪人格测试 ==========

// ===== 题目数据 =====
const questions = [
    {
        id: 1,
        dimension: 'EI',
        text: '🏠 铲屎官出门了，你一整天独自在家，你会……',
        helper: '独自在家最开心啦~',
        options: [
            { text: '🐱 立刻跳上窗台，观察外面的世界，等铲屎官回来', score: 'E', value: 2 },
            { text: '😴 找个最暖和的地方睡大觉，梦里什么都有', score: 'I', value: 2 },
            { text: '🎾 把家里的每个角落都探索一遍，制造点小混乱', score: 'E', value: 1 },
            { text: '🎭 对着镜子里的自己发呆，思考猫生', score: 'I', value: 1 },
        ]
    },
    {
        id: 2,
        dimension: 'EI',
        text: '🎉 铲屎官带了一群陌生人回家聚会，你的反应是……',
        helper: '陌生人？让我看看~',
        options: [
            { text: '👑 大大方方走到人群中，接受所有人的膜拜和投喂', score: 'E', value: 2 },
            { text: '🔍 远远暗中观察，确认安全后试探性靠近', score: 'E', value: 1 },
            { text: '🏃 立刻钻进床底，谁也别想找到本喵', score: 'I', value: 2 },
            { text: '🛋️ 跳到最高的柜子上，用鄙夷的眼神俯视众生', score: 'I', value: 1 },
        ]
    },
    {
        id: 3,
        dimension: 'EI',
        text: '🐾 在猫咪公园遇到了其他猫，你会……',
        helper: '其他猫？有意思~',
        options: [
            { text: '🤝 主动上去打招呼，很快就和新朋友追逐打闹', score: 'E', value: 2 },
            { text: '👀 默默在旁边看别的猫玩，偶尔参与一下', score: 'E', value: 1 },
            { text: '😺 找个安静的角落自己晒太阳，独处最舒服', score: 'I', value: 2 },
            { text: '😼 高冷地路过，假装没看到对方', score: 'I', value: 1 },
        ]
    },
    {
        id: 4,
        dimension: 'SN',
        text: '📦 铲屎官买了个新东西，留下了一个大纸箱。你会……',
        helper: '纸箱！是我的最爱！',
        options: [
            { text: '📦 毫不犹豫钻进去，这是最完美的城堡！', score: 'S', value: 2 },
            { text: '✨ 看着纸箱开始幻想自己是宇宙飞船的舰长', score: 'N', value: 2 },
            { text: '🔬 仔细嗅闻检查纸箱的每个角落和每条缝隙', score: 'S', value: 1 },
            { text: '🎨 觉得纸箱的形状像只兔子，开始和它对话', score: 'N', value: 1 },
        ]
    },
    {
        id: 5,
        dimension: 'SN',
        text: '🐦 窗台上飞来一只从未见过的小鸟，你的第一反应是……',
        helper: '那是什么！？',
        options: [
            { text: '⚡ 立刻进入狩猎模式，瞳孔放大，尾巴疯狂摆动', score: 'S', value: 2 },
            { text: '🤔 思考这只鸟从哪里来，它有没有家人', score: 'N', value: 2 },
            { text: '🎯 计算跳跃轨迹，寻找最佳扑击角度', score: 'S', value: 1 },
            { text: '🌈 想象如果自己也会飞，世界会变成什么样', score: 'N', value: 1 },
        ]
    },
    {
        id: 6,
        dimension: 'SN',
        text: '🍽️ 铲屎官给你换了一种新猫粮，你会……',
        helper: '新口味？让我尝尝~',
        options: [
            { text: '👍 先闻闻，再小心尝一口，好吃就大口吃', score: 'S', value: 2 },
            { text: '🎪 觉得这是铲屎官精心准备的惊喜，要好好品鉴', score: 'N', value: 2 },
            { text: '😕 和之前的一对比，分析口味差异', score: 'S', value: 1 },
            { text: '🧠 思考猫粮背后可能隐藏的秘密配方', score: 'N', value: 1 },
        ]
    },
    {
        id: 7,
        dimension: 'TF',
        text: '😿 你不小心打碎了铲屎官最爱的花瓶，你会……',
        helper: '糟糕了喵……',
        options: [
            { text: '🥺 用水汪汪的大眼睛看着铲屎官，立刻获得原谅', score: 'F', value: 2 },
            { text: '🧐 冷静分析：花瓶放的位置本来就不对', score: 'T', value: 2 },
            { text: '💕 主动蹭蹭铲屎官撒娇，用爱化解一切', score: 'F', value: 1 },
            { text: '📊 等铲屎官回来假装什么都没发生，制定应对方案', score: 'T', value: 1 },
        ]
    },
    {
        id: 8,
        dimension: 'TF',
        text: '😾 另一只猫抢了你的窝，你怎么办？',
        helper: '那是我的窝！',
        options: [
            { text: '💪 正面刚！大声哈气警告，把窝夺回来', score: 'T', value: 2 },
            { text: '😢 委屈地去找铲屎官告状，求安慰', score: 'F', value: 2 },
            { text: '⚖️ 评估双方实力差距，必要时战略性撤退', score: 'T', value: 1 },
            { text: '🤗 算了，分享也是一种爱，挤一挤更暖和', score: 'F', value: 1 },
        ]
    },
    {
        id: 9,
        dimension: 'TF',
        text: '🎁 铲屎官送了你一个新玩具，你会……',
        helper: '礼物！给我看看！',
        options: [
            { text: '😍 感动得咕噜咕噜叫，这是铲屎官满满的爱', score: 'F', value: 2 },
            { text: '🔧 先研究一下这个玩具的机关原理', score: 'T', value: 2 },
            { text: '💕 叼着玩具放到铲屎官脚边，一起玩更有趣', score: 'F', value: 1 },
            { text: '📝 测试这个玩具的各种玩法，做个评测', score: 'T', value: 1 },
        ]
    },
    {
        id: 10,
        dimension: 'JP',
        text: '⏰ 每天早上的日常安排，你更倾向于……',
        helper: '新的一天开始啦~',
        options: [
            { text: '📋 严格按照时间表：吃饭→舔毛→晒太阳→睡觉', score: 'J', value: 2 },
            { text: '🎪 看心情决定今天要干嘛，每天都不一样', score: 'P', value: 2 },
            { text: '📍 有固定的据点，但什么时候去随缘', score: 'J', value: 1 },
            { text: '🎲 跟着感觉走，看到什么有趣就去做什么', score: 'P', value: 1 },
        ]
    },
    {
        id: 11,
        dimension: 'JP',
        text: '🧹 铲屎官在打扫卫生，把你的东西都移位了，你会……',
        helper: '我的东西！别动！',
        options: [
            { text: '😤 立刻把所有东西挪回原来的位置，一样都不能差', score: 'J', value: 2 },
            { text: '🤷 无所谓，刚好换个新布局也挺新鲜', score: 'P', value: 2 },
            { text: '📏 记住每样东西的位置，趁铲屎官不注意偷偷还原', score: 'J', value: 1 },
            { text: '🏄 顺势在打扫中的房间里探险，哪里都有新发现', score: 'P', value: 1 },
        ]
    },
    {
        id: 12,
        dimension: 'JP',
        text: '🌙 睡觉前最后的安排，你会……',
        helper: '困了喵……',
        options: [
            { text: '🏠 必须回到自己固定的小窝才睡得着', score: 'J', value: 2 },
            { text: '🪐 看今天哪个地方舒服就睡哪里，随处可栖', score: 'P', value: 2 },
            { text: '🔄 睡前仪式：转三圈→踩奶→舔爪子→入睡', score: 'J', value: 1 },
            { text: '🎭 有时睡猫窝，有时睡沙发，有时睡铲屎官脸上', score: 'P', value: 1 },
        ]
    },
];

// ===== 猫咪品种数据（16种 MBTI 类型映射）=====
const breeds = {
    'ESTJ': {
        name: '暹罗猫',
        emoji: '😼',
        title: '霸道总裁猫',
        tags: ['领导力', '话痨', '强势', '忠诚'],
        traits: { energy: 90, curiosity: 70, social: 85, battle: 90, tsundere: 75, foodie: 50 },
        analysis: '你是一只典型的暹罗猫——天生的领导者。在你的猫世界里，一切都在你的掌控之中。你会主动管理家里的每只猫，确保大家都按照"你制定的规则"生活。铲屎官在你眼里不是主人，而是你的助手。你有强烈的领地意识，对家人极度忠诚，但如果有人挑战你的权威，哼哼……你的大嗓门可不是摆设！',
        life: {
            home: '一座你说了算的大房子，每个房间都有你的巡逻路线',
            day: '巡视领地 → 检查铲屎官的工作 → 训练其他猫 → 发号施令',
            owner: '你是这个家的真正主人，铲屎官只是你的行政助理',
            food: '按时按量，菜单要提前规划好，不接受随意更换',
            hobby: '监督家里的运作，管理其他猫的行为',
        }
    },
    'ESTP': {
        name: '孟加拉豹猫',
        emoji: '🐆',
        title: '极限运动猫',
        tags: ['冒险', '活力', '大胆', '野性'],
        traits: { energy: 95, curiosity: 90, social: 75, battle: 85, tsundere: 40, foodie: 60 },
        analysis: '你是一只孟加拉豹猫——猫咪界的极限运动健将！你体内流淌着野性的血液，对一切新鲜事物充满好奇。你的运动能力超群，能跳到其他猫想都不敢想的高度。对你来说，生活就是一场大冒险，平淡是你最大的敌人。铲屎官每天都被你的活力折腾得够呛，但看到你帅气的身影，又忍不住为你鼓掌！',
        life: {
            home: '需要大量的垂直空间和攀爬设施，最好有个户外花园',
            day: '冲刺跑酷 → 高空跳跃 → 探索禁区 → 继续跑酷',
            owner: '铲屎官是你的运动搭档和冒险伙伴',
            food: '高蛋白饮食，吃得好才有力气疯跑',
            hobby: '开发新的跑酷路线，挑战不可能的跳跃',
        }
    },
    'ESFJ': {
        name: '布偶猫',
        emoji: '🧸',
        title: '温柔社交猫',
        tags: ['温柔', '粘人', '体贴', '优雅'],
        traits: { energy: 45, curiosity: 60, social: 95, battle: 20, tsundere: 15, foodie: 70 },
        analysis: '你是一只布偶猫——猫咪界的天使！你温柔、善良、体贴，对所有人都充满爱。你最喜欢的事情就是窝在铲屎官怀里，被轻轻抚摸。你是猫咪中的"社交达人"，不管对人还是对猫都非常友善。你的蓝眼睛里装着整个世界的美好，你的呼噜声是最好的治愈音乐。你就是那种让所有人都想抱一抱的完美猫咪！',
        life: {
            home: '一个温馨的家，有柔软的毯子和温暖的阳光',
            day: '等铲屎官回家 → 被抱着 → 蹭蹭所有人 → 一起窝在沙发上看电视',
            owner: '铲屎官是你最爱的人，你会用一生陪伴TA',
            food: '不挑食，铲屎官给的都是好吃的',
            hobby: '被抱、被摸、被宠爱，给所有人传递温暖',
        }
    },
    'ESFP': {
        name: '橘猫',
        emoji: '😸',
        title: '快乐干饭猫',
        tags: ['乐天派', '吃货', '搞笑', '亲和'],
        traits: { energy: 70, curiosity: 75, social: 90, battle: 35, tsundere: 20, foodie: 95 },
        analysis: '你是一只橘猫——猫咪界的开心果！"十个橘猫九个胖"说的就是你，因为你对美食有着无限的热爱。你性格开朗，天生自带喜剧天赋，总能用各种滑稽的动作逗笑所有人。你不记仇、不矫情，给你一口吃的你就是全天下最幸福的猫。你的快乐极具感染力，有你在的地方就有欢声笑语。橘猫的力量，就是这么朴实无华且快乐！',
        life: {
            home: '哪里有食物哪里就是家，最好厨房离猫窝很近',
            day: '吃早饭 → 睡觉 → 吃午饭 → 睡觉 → 吃晚饭 → 夜宵 → 睡觉',
            owner: '铲屎官 = 食物提供者 = 全世界最重要的人',
            food: '什么？你说你在说吃的？我全都要！',
            hobby: '研究各种食物，开发新的卖萌要饭姿势',
        }
    },
    'ENTJ': {
        name: '挪威森林猫',
        emoji: '🦁',
        title: '王者统帅猫',
        tags: ['威严', '智慧', '霸气', '高贵'],
        traits: { energy: 80, curiosity: 65, social: 60, battle: 95, tsundere: 80, foodie: 45 },
        analysis: '你是一只挪威森林猫——天生的王者！你高大威猛的身躯下隐藏着一个精明的头脑。你从不做没有目的的事情，每一步都在你的战略计划之中。其他猫咪不自觉地向你臣服，因为你身上有一种不怒自威的气场。你不会浪费时间在无意义的社交上，但一旦你认定了一个目标，就会不惜一切去实现。',
        life: {
            home: '一座城堡级别的猫别墅，居高临下俯瞰众生',
            day: '制定战略 → 指挥行动 → 独处思考 → 巡视领地',
            owner: '铲屎官是你精心挑选的臣子，为你服务是TA的荣幸',
            food: '高质量的饮食，量不在多，贵在精致',
            hobby: '谋划大局，偶尔展现一下王者风范',
        }
    },
    'ENTP': {
        name: '奶牛猫',
        emoji: '🐄',
        title: '天才搞怪猫',
        tags: ['机灵', '叛逆', '创意', '戏精'],
        traits: { energy: 85, curiosity: 95, social: 70, battle: 65, tsundere: 55, foodie: 55 },
        analysis: '你是一只奶牛猫——猫咪界的"神经病"天才！网上那些搞笑猫咪视频的主角十有八九是你。你脑子里的鬼点子比你的毛色还多，总是能发明出前所未有的捣蛋方式。你不是在搞事情，就是在去搞事情的路上。铲屎官又气又笑地跟在你后面收拾烂摊子。但你的聪明才智也让人佩服——你能打开任何柜门，学会任何技巧，只是看你想不想配合而已！',
        life: {
            home: '整个家都是你的游乐场和实验室',
            day: '发明新玩法 → 测试铲屎官底线 → 解锁新技能 → 继续搞事情',
            owner: '铲屎官是你最有趣的实验对象',
            food: '吃饭太无聊了，把食物推到地上再吃更有趣',
            hobby: '开发各种前所未有的捣蛋方式，挑战物理学定律',
        }
    },
    'ENFJ': {
        name: '缅因猫',
        emoji: '🦁',
        title: '暖心大哥猫',
        tags: ['温暖', '包容', '领袖', '可靠'],
        traits: { energy: 65, curiosity: 65, social: 90, battle: 70, tsundere: 30, foodie: 60 },
        analysis: '你是一只缅因猫——猫咪界的"温柔巨人"！你有着庞大的身躯和宽广的胸怀。你是天生的领袖，但不是靠威严，而是靠温暖和包容。家里的每只猫、每个人你都照顾得妥妥帖帖。你似乎天生就能感受到别人的情绪，总能在最恰当的时候给予安慰。你发出的声音不是普通的"喵"，而是轻柔的"颤音"——就像你本人一样，虽然个头大，内心却无比柔软。',
        life: {
            home: '一个大家庭，因为你需要照顾尽可能多的家人',
            day: '关心每只猫 → 帮铲屎官暖脚 → 安慰不开心的家人 → 守护家园',
            owner: '铲屎官是你最珍爱的家人，你会用毛茸茸的身体温暖TA',
            food: '和大家一起吃饭最开心，食物是爱的媒介',
            hobby: '照顾家人，用温暖治愈每一个人',
        }
    },
    'ENFP': {
        name: '金渐层',
        emoji: '✨',
        title: '梦想家猫猫',
        tags: ['浪漫', '好奇', '热情', '自由'],
        traits: { energy: 80, curiosity: 90, social: 85, battle: 30, tsundere: 35, foodie: 65 },
        analysis: '你是一只金渐层——行走的"小太阳"！你毛茸茸的金色外表下藏着一颗永远充满热情的心。你对世界上的一切都充满好奇和热情，每一天在你眼中都是新的冒险。你的热情能融化最冷漠的铲屎官，你的想象力能让你把一个简单的瓶盖玩出花来。你有时候会突然发呆，那是因为你又在幻想一个只属于你的奇妙世界了。',
        life: {
            home: '充满色彩和玩具的温暖小窝，每天都能发现新乐趣',
            day: '追逐光点 → 和各种玩具对话 → 对着窗外发呆幻想 → 给铲屎官表演节目',
            owner: '铲屎官是你最好的玩伴和观众',
            food: '吃饭也是一种冒险，喜欢尝试各种新口味',
            hobby: '做梦、幻想、把平凡的日子过成童话',
        }
    },
    'ISTJ': {
        name: '英国短毛猫',
        emoji: '🧐',
        title: '绅士学霸猫',
        tags: ['稳重', '自律', '靠谱', '传统'],
        traits: { energy: 35, curiosity: 50, social: 45, battle: 60, tsundere: 70, foodie: 55 },
        analysis: '你是一只英短蓝猫——猫咪界的英伦绅士。你沉稳、优雅、自律，从不会做出失态的举动。你有自己固定的作息时间表，雷打不动。你不喜欢突然的变化，但你的可靠和稳定让铲屎官特别安心。你可能不太会表达感情，但每天准时在门口等铲屎官回家，就是你最深沉的爱。你不是冷淡，你只是用理性的方式守护着你在乎的一切。',
        life: {
            home: '整洁有序的家，每样东西都有它固定的位置',
            day: '按时起床 → 按时就餐 → 按时午睡 → 按时就寝（精确到分钟）',
            owner: '铲屎官是你忠诚的伴侣，你们之间有默契的相处模式',
            food: '固定品牌、固定口味，不想要任何惊喜',
            hobby: '安静地坐着，思考人生，享受秩序之美',
        }
    },
    'ISTP': {
        name: '俄罗斯蓝猫',
        emoji: '🐱',
        title: '独侠工程师猫',
        tags: ['冷静', '独立', '技术流', '神秘'],
        traits: { energy: 50, curiosity: 75, social: 30, battle: 70, tsundere: 80, foodie: 40 },
        analysis: '你是一只俄罗斯蓝猫——猫咪界的独行侠。你拥有超强的观察力和动手能力，任何机关陷阱在你面前都是小菜一碟。你享受独处的时光，不太喜欢被过分关注。但在深夜无人的时候，你会悄悄跳到铲屎官身边，用你那翡翠绿的眼睛凝视着TA——这就是你独特的爱的表达方式。你不是不爱，你只是用自己的方式爱着。',
        life: {
            home: '一个安静的角落，最好有可以独处的秘密基地',
            day: '研究各种机关 → 独自探索 → 安静地观察 → 深夜出来活动',
            owner: '铲屎官是你唯一认可的存在，但你不会表现出来',
            food: '安静地吃，不被打扰地吃，精致而克制',
            hobby: '破解各种谜题，研究如何打开新种类的门',
        }
    },
    'ISFJ': {
        name: '折耳猫',
        emoji: '🥺',
        title: '暖心守护猫',
        tags: ['温柔', '细心', '守护', '安静'],
        traits: { energy: 40, curiosity: 55, social: 70, battle: 25, tsundere: 30, foodie: 65 },
        analysis: '你是一只折耳猫——最让人心疼的小可爱！你天生就有一副让人想要保护的样子，但你其实是家里最默默付出那一个。你会记住铲屎官的每一个习惯，在TA难过的时候安静地陪伴在身边。你很少主动提要求，总是把家人的需要放在自己前面。你的温柔不是软弱，而是一种了不起的力量——你让身边的每一个人都感到被爱着。',
        life: {
            home: '一个温馨安静的家，有你最爱的小毯子',
            day: '守在铲屎官身边 → 安静地陪伴 → 默默记住家人的喜好 → 等待被抚摸',
            owner: '铲屎官是你要守护一生的人',
            food: '不太挑食，铲屎官精心准备的都很珍惜',
            hobby: '收集铲屎官的小物件，安静地守护这个家',
        }
    },
    'ISFP': {
        name: '波斯猫',
        emoji: '👸',
        title: '艺术气质猫',
        tags: ['优雅', '感性', '安静', '审美'],
        traits: { energy: 30, curiosity: 55, social: 50, battle: 20, tsundere: 60, foodie: 50 },
        analysis: '你是一只波斯猫——猫咪界的贵族艺术家！你天生就拥有超凡的审美品味，你的每一个动作都像是一幅画。你不喜欢嘈杂的环境，更愿意在安静的午后，躺在阳光斑驳的窗台上沉思。你的内心世界丰富而敏感，一朵花、一束光、一阵风都能触动你。你不是高冷，你只是活在一个更美的频率里，等待能和你共鸣的灵魂。',
        life: {
            home: '一个布置得像艺术画廊的家，每个角落都有美的细节',
            day: '在阳光下冥想 → 欣赏窗外的风景 → 给自己的毛做造型 → 优雅地发呆',
            owner: '铲屎官是欣赏你美的知音，你们有独特的默契',
            food: '食物的摆盘和口味同样重要，视觉和味觉的享受缺一不可',
            hobby: '追求一切美好的事物，用你的方式诠释生活之美',
        }
    },
    'INTJ': {
        name: '阿比西尼亚猫',
        emoji: '🦊',
        title: '战略天才猫',
        tags: ['聪明', '远见', '独立', '高效'],
        traits: { energy: 65, curiosity: 85, social: 35, battle: 75, tsundere: 75, foodie: 40 },
        analysis: '你是一只阿比西尼亚猫——猫咪界最古老、最智慧的品种之一！你的智商碾压大部分同类，你能理解很多其他猫根本搞不懂的事情。你总是在思考，总是在计划，脑子里装满了大大小小的策略。你不屑于做无聊的事情，对你来说，效率就是一切。你可能看起来有点高冷，但那只是因为你的思维运转得太快，别人跟不上而已。',
        life: {
            home: '一个有深度和层次感的空间，需要足够的智力刺激',
            day: '制定今日计划 → 高效执行 → 回顾总结 → 为明天做准备',
            owner: '铲屎官是你选中的合作者，你欣赏TA的聪明才智',
            food: '精确的营养搭配，只为给大脑提供最好的燃料',
            hobby: '解决复杂问题，制定长远计划，研究事物的本质',
        }
    },
    'INTP': {
        name: '灵猫（东奇尼猫）',
        emoji: '🦉',
        title: '哲学思考猫',
        tags: ['思考', '好奇', '逻辑', '独特'],
        traits: { energy: 45, curiosity: 95, social: 30, battle: 45, tsundere: 65, foodie: 45 },
        analysis: '你是一只东奇尼猫——猫咪界的哲学家！你对这个世界有着无尽的疑问：为什么激光笔总是抓不到？窗外的鸟是不是在和我说话？铲屎官为什么每天都要出门？你花大量的时间思考这些"终极问题"，有时候想得太入神连饭都忘了吃。你不是不合群，你只是觉得思考宇宙的奥秘比追逐逗猫棒有趣多了。你的独特视角总能发现别人忽视的东西。',
        life: {
            home: '一个安静的图书馆式的家，有无数可以研究的东西',
            day: '观察现象 → 提出假设 → 进行实验 → 陷入沉思 → 忘了吃饭',
            owner: '铲屎官是你最好的研究对象，你每天都在分析TA的行为',
            food: '想起来才吃，有时候思考太投入会忘记饥饿',
            hobby: '研究万有引力（推东西下桌子）、量子力学（穿墙术）、心理学（操控铲屎官）',
        }
    },
    'INFJ': {
        name: '伯曼猫',
        emoji: '🌟',
        title: '灵性先知猫',
        tags: ['深邃', '洞察', '理想', '神秘'],
        traits: { energy: 40, curiosity: 70, social: 60, battle: 30, tsundere: 50, foodie: 45 },
        analysis: '你是一只伯曼猫——传说中守护寺庙的神圣猫咪！你有着超越常猫的洞察力，似乎总能感受到周围的情绪和氛围。你安静而深邃，眼神里藏着千年的智慧。铲屎官经常觉得你能读懂TA的心思，因为你总能在TA还没开口之前就知道TA需要什么。你追求的不只是眼前的幸福，而是心灵的深层连接。你是猫咪中的"灵魂导师"。',
        life: {
            home: '一个充满灵性氛围的家，有香薰、柔和的灯光和安静的角落',
            day: '冥想 → 感受家人的情绪 → 给予无声的陪伴 → 写一本只有猫能看懂的书',
            owner: '铲屎官是你灵魂深处的知己，你们不需要语言就能理解彼此',
            food: '用心品尝每一口，感受食物带来的能量',
            hobby: '研究生命的意义，感受宇宙的脉动，给予身边人力量的指引',
        }
    },
    'INFP': {
        name: '中华田园猫（白猫）',
        emoji: '🤍',
        title: '浪漫诗人猫',
        tags: ['浪漫', '温柔', '理想', '细腻'],
        traits: { energy: 45, curiosity: 80, social: 50, battle: 25, tsundere: 45, foodie: 55 },
        analysis: '你是一只纯白的中华田园猫——低调而美丽的诗意存在！你有着最细腻的情感和最丰富的内心世界。你会对着月光发呆，会在雨声中找到旋律，会把每一个平凡的日子过成诗。你不在意别人的眼光，因为你的内心世界已经足够精彩。你可能会被误解为"孤僻"，但其实你只是不愿意把精力浪费在无意义的社交上。你的爱，深沉而炽热，一旦付出就是全部。',
        life: {
            home: '一个充满诗意的小窝，有柔软的靠垫和透进月光的窗户',
            day: '看着窗外的云发呆 → 在家里发现一首诗 → 对着星星许愿 → 写猫生日记',
            owner: '铲屎官是你灵魂的港湾，你用最纯粹的爱守护着TA',
            food: '用心品味每一餐，感受食物背后的心意',
            hobby: '写诗、做梦、在月光下独舞，用你的方式记录生活中的美',
        }
    },
};

// ===== 猫咪助手语录 =====
const helperTexts = {
    start: ['喵~ 选一个吧', '跟着感觉走喵~', '想象你是一只猫！', '喵呜~ 哪个是你？'],
    answer: [
        '好选择喵！', '嗯嗯，了解了喵~', '有意思喵！', '记下来了喵~',
        '你真是一只特别的猫喵~', '好的喵，继续吧！', '喵~ 我在认真听呢',
        '这个答案很有意思喵~', '越来越了解你了喵！', '你的猫咪灵魂正在觉醒喵~',
    ],
};

// ===== 加载页文字 =====
const loadingTexts = [
    '正在分析你的猫咪DNA...',
    '正在解码你的呼噜声...',
    '正在测量你的尾巴摆动频率...',
    '正在解读你的踩掌力度...',
    '正在扫描你的纸箱偏好...',
    '正在匹配你的毛发基因...',
    '正在计算你的傲娇指数...',
    '正在生成你的猫咪身份...',
];

// ===== 状态管理 =====
let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let resultType = '';
let resultBreed = null;

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    createPawBackground();
    animateTestCount();
});

// 创建浮动猫爪背景
function createPawBackground() {
    const pawBg = document.getElementById('paw-bg');
    const paws = ['🐾', '🐱', '✨', '⭐', '🐾', '🐾', '🐾', '🐾'];
    
    for (let i = 0; i < 15; i++) {
        const paw = document.createElement('span');
        paw.className = 'paw-float';
        paw.textContent = paws[Math.floor(Math.random() * paws.length)];
        paw.style.left = Math.random() * 100 + '%';
        paw.style.fontSize = (15 + Math.random() * 20) + 'px';
        paw.style.animationDuration = (10 + Math.random() * 15) + 's';
        paw.style.animationDelay = Math.random() * 10 + 's';
        pawBg.appendChild(paw);
    }
}

// 测试人数动画
function animateTestCount() {
    const el = document.getElementById('test-count-num');
    const target = 12847 + Math.floor(Math.random() * 500);
    let current = 10000;
    const step = Math.ceil((target - current) / 30);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            el.textContent = current.toLocaleString();
        } else {
            el.textContent = current.toLocaleString();
        }
    }, 50);
}

// ===== 页面切换 =====
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    page.classList.add('active');
    window.scrollTo(0, 0);
}

// ===== 开始测试 =====
function startQuiz() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showPage('page-quiz');
    renderQuestion();
    
    // 播放音效（如果有的话）
    playMeow();
}

// ===== 渲染问题 =====
function renderQuestion() {
    const q = questions[currentQuestion];
    const questionArea = document.getElementById('question-area');
    const progressFill = document.getElementById('progress-fill');
    const progressPaw = document.getElementById('progress-paw');
    const currentQ = document.getElementById('current-q');
    const questionText = document.getElementById('question-text');
    const optionsEl = document.getElementById('options');
    const helperBubble = document.getElementById('helper-bubble');
    
    // 更新进度
    const progress = ((currentQuestion) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    progressPaw.style.left = progress + '%';
    currentQ.textContent = currentQuestion + 1;
    
    // 更新猫咪助手
    helperBubble.textContent = currentQuestion === 0 
        ? helperTexts.start[Math.floor(Math.random() * helperTexts.start.length)]
        : helperTexts.answer[Math.floor(Math.random() * helperTexts.answer.length)];
    
    // 动画效果
    questionArea.style.animation = 'none';
    questionArea.offsetHeight; // 触发重绘
    questionArea.style.animation = 'fadeInScale 0.5s ease';
    
    // 渲染题目
    questionText.textContent = q.text;
    
    // 渲染选项
    optionsEl.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.style.animationDelay = (idx * 0.1) + 's';
        btn.style.animation = `slideUp 0.4s ease ${idx * 0.1}s both`;
        btn.addEventListener('click', () => selectOption(opt, btn));
        optionsEl.appendChild(btn);
    });
}

// ===== 选择选项 =====
function selectOption(option, btnEl) {
    // 添加选中效果
    document.querySelectorAll('.option-btn').forEach(b => {
        b.style.pointerEvents = 'none';
        b.style.opacity = '0.5';
    });
    btnEl.classList.add('selected');
    btnEl.style.opacity = '1';
    
    // 更新分数
    scores[option.score] += option.value;
    
    // 播放音效
    playMeow();
    
    // 延迟后进入下一题
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            // 更新进度到100%
            document.getElementById('progress-fill').style.width = '100%';
            document.getElementById('progress-paw').style.left = '100%';
            setTimeout(() => showLoading(), 300);
        }
    }, 500);
}

// ===== 加载动画 =====
function showLoading() {
    showPage('page-loading');
    
    const loadingBar = document.getElementById('loading-bar-fill');
    const loadingText = document.getElementById('loading-text');
    let textIdx = 0;
    let progress = 0;
    
    const textInterval = setInterval(() => {
        textIdx = (textIdx + 1) % loadingTexts.length;
        loadingText.textContent = loadingTexts[textIdx];
    }, 800);
    
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            clearInterval(textInterval);
            setTimeout(() => showResult(), 500);
        }
        loadingBar.style.width = progress + '%';
    }, 300);
}

// ===== 计算结果 =====
function calculateResult() {
    const type = 
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');
    
    resultType = type;
    resultBreed = breeds[type];
    return { type, breed: breeds[type] };
}

// ===== 显示结果 =====
function showResult() {
    const { type, breed } = calculateResult();
    
    showPage('page-result');
    
    // 品种卡片
    document.getElementById('breed-emoji').textContent = breed.emoji;
    document.getElementById('breed-name').textContent = breed.name;
    document.getElementById('breed-title').textContent = breed.title;
    
    // 标签
    const tagsEl = document.getElementById('breed-tags');
    tagsEl.innerHTML = breed.tags.map(tag => 
        `<span class="breed-tag">${tag}</span>`
    ).join('');
    
    // 分析文本
    document.getElementById('analysis-text').textContent = breed.analysis;
    
    // 猫咪人生
    renderLifeCard(breed.life);
    
    // 品种图鉴
    renderBreedsGrid(type);
    
    // 隐藏所有分析区域
    const hiddenSections = document.querySelectorAll('.result-hidden');
    hiddenSections.forEach(s => s.style.display = 'none');
    
    // 逐步显示分析内容
    setTimeout(() => {
        const radar = document.getElementById('section-radar');
        radar.style.display = 'block';
        radar.style.animation = 'slideUp 0.6s ease';
        drawRadarChart(breed.traits);
    }, 800);
    
    setTimeout(() => {
        const analysis = document.getElementById('section-analysis');
        analysis.style.display = 'block';
        analysis.style.animation = 'slideUp 0.6s ease';
    }, 1500);
    
    setTimeout(() => {
        const life = document.getElementById('section-life');
        life.style.display = 'block';
        life.style.animation = 'slideUp 0.6s ease';
    }, 2200);
    
    setTimeout(() => {
        const breeds = document.getElementById('section-breeds');
        breeds.style.display = 'block';
        breeds.style.animation = 'slideUp 0.6s ease';
    }, 2900);
    
    setTimeout(() => {
        const actions = document.getElementById('section-actions');
        actions.style.display = 'block';
        actions.style.animation = 'slideUp 0.6s ease';
    }, 3600);
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 绘制雷达图 =====
function drawRadarChart(traits) {
    const canvas = document.getElementById('radar-canvas');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = 340 * dpr;
    canvas.height = 340 * dpr;
    canvas.style.width = '340px';
    canvas.style.height = '340px';
    ctx.scale(dpr, dpr);
    
    const centerX = 170;
    const centerY = 170;
    const maxRadius = 95;
    const labels = ['活力值', '好奇心', '社交力', '战斗力', '傲娇值', '吃货指数'];
    const values = [
        traits.energy / 100,
        traits.curiosity / 100,
        traits.social / 100,
        traits.battle / 100,
        traits.tsundere / 100,
        traits.foodie / 100,
    ];
    const sides = 6;
    const angleStep = (Math.PI * 2) / sides;
    const startAngle = -Math.PI / 2;
    
    ctx.clearRect(0, 0, 340, 340);
    
    // 绘制背景网格
    for (let level = 1; level <= 4; level++) {
        const r = (maxRadius / 4) * level;
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = startAngle + angleStep * i;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // 绘制轴线
    for (let i = 0; i < sides; i++) {
        const angle = startAngle + angleStep * i;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // 绘制数据区域
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
        const idx = i % sides;
        const angle = startAngle + angleStep * idx;
        const r = maxRadius * values[idx];
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    // 填充渐变
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
    gradient.addColorStop(0, 'rgba(255, 140, 66, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 107, 157, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // 边框
    ctx.strokeStyle = 'rgba(255, 140, 66, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 绘制数据点
    for (let i = 0; i < sides; i++) {
        const angle = startAngle + angleStep * i;
        const r = maxRadius * values[i];
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ff8c42';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
    
    // 绘制标签和数值
    for (let i = 0; i < sides; i++) {
        const angle = startAngle + angleStep * i;
        const labelR = maxRadius + 28;
        const x = centerX + labelR * Math.cos(angle);
        const y = centerY + labelR * Math.sin(angle);
        
        // 根据角度调整文字对齐方式
        const angleDeg = ((angle * 180 / Math.PI) + 360) % 360;
        if (angleDeg > 45 && angleDeg < 135) {
            ctx.textAlign = 'left';
        } else if (angleDeg > 225 && angleDeg < 315) {
            ctx.textAlign = 'right';
        } else {
            ctx.textAlign = 'center';
        }
        
        // 标签文字
        ctx.font = '12px "Noto Sans SC", sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(labels[i], x, y + 4);
        
        // 数值（显示在标签下方）
        ctx.fillStyle = '#ff8c42';
        ctx.font = 'bold 11px "Noto Sans SC", sans-serif';
        ctx.fillText(Math.round(values[i] * 100), x, y + 18);
    }
}

// ===== 渲染猫咪人生 =====
function renderLifeCard(life) {
    const lifeCard = document.getElementById('life-card');
    const items = [
        { icon: '🏠', label: '理想住所', value: life.home },
        { icon: '☀️', label: '日常一天', value: life.day },
        { icon: '👩‍❤️‍👨', label: '和铲屎官的关系', value: life.owner },
        { icon: '🍽️', label: '美食态度', value: life.food },
        { icon: '🎯', label: '兴趣爱好', value: life.hobby },
    ];
    
    lifeCard.innerHTML = items.map(item => `
        <div class="life-item">
            <span class="life-icon">${item.icon}</span>
            <div>
                <div class="life-label">${item.label}</div>
                <div class="life-value">${item.value}</div>
            </div>
        </div>
    `).join('');
}

// ===== 渲染品种图鉴 =====
function renderBreedsGrid(myType) {
    const grid = document.getElementById('breeds-grid');
    const allTypes = Object.keys(breeds);
    
    grid.innerHTML = allTypes.map(type => {
        const b = breeds[type];
        const isMe = type === myType;
        return `
            <div class="breed-mini-card ${isMe ? 'is-you' : ''}">
                <span class="breed-mini-emoji">${b.emoji}</span>
                <div class="breed-mini-name">${b.name}</div>
                <div class="breed-mini-desc">${isMe ? '⭐ 这就是你！' : b.title}</div>
            </div>
        `;
    }).join('');
}

// ===== 分享功能 =====
function shareResult() {
    const modal = document.getElementById('share-modal');
    const preview = document.getElementById('share-preview');
    
    preview.innerHTML = `
        <span class="share-preview-emoji">${resultBreed.emoji}</span>
        <div class="share-preview-name">${resultBreed.name}</div>
        <div class="share-preview-desc">${resultBreed.title} · ${resultType}</div>
        <div class="share-preview-desc" style="margin-top:8px;font-size:0.75rem;opacity:0.7">CATTI 猫咪人格测试</div>
    `;
    
    modal.classList.add('show');
}

function closeShareModal() {
    document.getElementById('share-modal').classList.remove('show');
}

function copyLink() {
    const url = 'https://yuxiankongjian.github.io/catti/';
    const text = `我在 CATTI 猫咪人格测试中的结果是【${resultBreed.name}】（${resultBreed.title}）！快来测测你是什么猫 🐱\n🔗 ${url}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('已复制到剪贴板，快去分享吧喵~ 🐾');
        });
    } else {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('已复制到剪贴板，快去分享吧喵~ 🐾');
    }
    closeShareModal();
}

function saveImage() {
    showToast('请截图保存分享给好友喵~ 📸');
    closeShareModal();
}

// Toast 提示
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(30, 30, 60, 0.95);
        border: 1px solid rgba(255, 140, 66, 0.3);
        color: #f1f5f9;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 0.9rem;
        z-index: 1000;
        animation: slideUp 0.3s ease;
        backdrop-filter: blur(10px);
        font-family: 'Noto Sans SC', sans-serif;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 2500);
}

// ===== 重新测试 =====
function retryQuiz() {
    // 重置所有分析区域的显示状态
    const hiddenSections = document.querySelectorAll('.result-hidden');
    hiddenSections.forEach(s => {
        s.style.display = '';
        s.style.animation = '';
    });
    
    showPage('page-home');
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    resultType = '';
    resultBreed = null;
}

// ===== 音效 =====
function playMeow() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        // 模拟猫叫声的频率
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.15);
        oscillator.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
        // 静默失败，不影响用户体验
    }
}

// ===== 点击猫咪助手 =====
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('helper-cat')) {
        const reactions = ['喵~', '喵呜~', '咕噜咕噜~', '哈欠~', '蹭蹭~', '喵喵喵！'];
        const bubble = document.getElementById('helper-bubble');
        bubble.textContent = reactions[Math.floor(Math.random() * reactions.length)];
        bubble.style.animation = 'none';
        bubble.offsetHeight;
        bubble.style.animation = 'slideUp 0.3s ease';
        playMeow();
    }
});