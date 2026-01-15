// Big English 词汇数据库 - Book 6
// 作者: Zhangxxamber
// 更新日期: 2026-01-15

// Book 6 完整词汇数据
const book6Vocabulary = [
    // 入门单元：Welcome to Class! - 校园生活
    { word: 'advice', phonetic: '[ədˈvaɪs]', meaning: '建议', example: '老师给了我建议。The teacher gave me advice.', unit: 'welcome', unitName: '入门单元' },
    { word: 'assignment', phonetic: '[əˈsaɪnmənt]', meaning: '作业/任务', example: '我完成了作业。I finished the assignment.', unit: 'welcome', unitName: '入门单元' },
    { word: 'field trip', phonetic: '[fiːld trɪp]', meaning: '实地考察', example: '我们去实地考察。We go on a field trip.', unit: 'welcome', unitName: '入门单元' },
    { word: 'schedule', phonetic: '[ˈʃedjuːl]', meaning: '课程表/时间表', example: '这是我的课程表。This is my schedule.', unit: 'welcome', unitName: '入门单元' },
    { word: 'essay', phonetic: '[ˈeseɪ]', meaning: '短文/论文', example: '我写了一篇短文。I wrote an essay.', unit: 'welcome', unitName: '入门单元' },

    // 第1单元：All About School - 校园活动
    { word: 'do a book report', phonetic: '[duː ə bʊk rɪˈpɔːt]', meaning: '做读书报告', example: '我要做读书报告。I have to do a book report.', unit: 'unit1', unitName: '第1单元' },
    { word: 'finish a project', phonetic: '[ˈfɪnɪʃ ə ˈprɒdʒekt]', meaning: '完成项目', example: '她完成了项目。She finished the project.', unit: 'unit1', unitName: '第1单元' },
    { word: 'hand in an assignment', phonetic: '[hænd ɪn ən əˈsaɪnmənt]', meaning: '提交作业', example: '提交作业。Hand in the assignment.', unit: 'unit1', unitName: '第1单元' },
    { word: 'study for a test', phonetic: '[ˈstʌdi fɔː(r) ə test]', meaning: '为考试复习', example: '我在为考试复习。I am studying for a test.', unit: 'unit1', unitName: '第1单元' },

    // 第2单元：Amazing Young People - 成就与目标
    { word: 'become a doctor', phonetic: '[bɪˈkʌm ə ˈdɒktə(r)]', meaning: '成为医生', example: '她想成为医生。She wants to become a doctor.', unit: 'unit2', unitName: '第2单元' },
    { word: 'invent something', phonetic: '[ɪnˈvent ˈsʌmθɪŋ]', meaning: '发明某物', example: '他想发明东西。He wants to invent something.', unit: 'unit2', unitName: '第2单元' },
    { word: 'start a company', phonetic: '[stɑːt ə ˈkʌmpəni]', meaning: '开办公司', example: '她开办了公司。She started a company.', unit: 'unit2', unitName: '第2单元' },
    { word: 'win a tournament', phonetic: '[wɪn ə ˈtʊənəmənt]', meaning: '赢得比赛', example: '他赢得了比赛。He won a tournament.', unit: 'unit2', unitName: '第2单元' },
    { word: 'publish a book', phonetic: '[ˈpʌblɪʃ ə bʊk]', meaning: '出版书', example: '她出版了一本书。She published a book.', unit: 'unit2', unitName: '第2单元' },

    // 第3单元：Dilemmas - 道德困境
    { word: 'ethical', phonetic: '[ˈeθɪkl]', meaning: '伦理的/道德的', example: '这是道德问题。This is an ethical issue.', unit: 'unit3', unitName: '第3单元' },
    { word: 'perspective', phonetic: '[pəˈspektɪv]', meaning: '观点/视角', example: '从他的角度看。From his perspective.', unit: 'unit3', unitName: '第3单元' },
    { word: 'respectful', phonetic: '[rɪˈspektfl]', meaning: '尊重的', example: '要尊重他人。Be respectful of others.', unit: 'unit3', unitName: '第3单元' },
    { word: 'treat', phonetic: '[triːt]', meaning: '对待', example: '善待他人。Treat others well.', unit: 'unit3', unitName: '第3单元' },
    { word: 'dilemma', phonetic: '[dɪˈlemə]', meaning: '困境', example: '这是一个困境。This is a dilemma.', unit: 'unit3', unitName: '第3单元' },
    { word: 'feel guilty', phonetic: '[fiːl ˈɡɪlti]', meaning: '感到内疚', example: '我感到内疚。I feel guilty.', unit: 'unit3', unitName: '第3单元' },
    { word: 'get into trouble', phonetic: '[ɡet ˈɪntə ˈtrʌbl]', meaning: '陷入麻烦', example: '他陷入了麻烦。He got into trouble.', unit: 'unit3', unitName: '第3单元' },

    // 第4单元：Future Me - 未来的预测
    { word: 'earn a good salary', phonetic: '[ɜːn ə ɡʊd ˈsæləri]', meaning: '挣高薪', example: '他挣高薪。He earns a good salary.', unit: 'unit4', unitName: '第4单元' },
    { word: 'raise a family', phonetic: '[reɪz ə ˈfæməli]', meaning: '养家', example: '他们想养家。They want to raise a family.', unit: 'unit4', unitName: '第4单元' },
    { word: 'adventurous vacations', phonetic: '[ədˈventʃərəs vəˈkeɪʃnz]', meaning: '探险度假', example: '我喜欢探险度假。I like adventurous vacations.', unit: 'unit4', unitName: '第4单元' },
    { word: 'nanotechnology', phonetic: '[ˌnænəʊtekˈnɒlədʒi]', meaning: '纳米技术', example: '纳米技术很先进。Nanotechnology is advanced.', unit: 'unit4', unitName: '第4单元' },

    // 第5单元：If I Could Fly... - 超能力
    { word: 'become invisible', phonetic: '[bɪˈkʌm ɪnˈvɪzəbl]', meaning: '变隐身', example: '如果我能隐身。If I could become invisible.', unit: 'unit5', unitName: '第5单元' },
    { word: 'fly', phonetic: '[flaɪ]', meaning: '飞', example: '我想飞。I want to fly.', unit: 'unit5', unitName: '第5单元' },
    { word: 'have superhuman strength', phonetic: '[hæv ˌsuːpəˈhjuːmən streŋθ]', meaning: '拥有神力', example: '如果我有神力。If I had superhuman strength.', unit: 'unit5', unitName: '第5单元' },
    { word: 'read people\'s minds', phonetic: '[riːd ˈpiːplz maɪndz]', meaning: '读心术', example: '如果我能读心。If I could read people\'s minds.', unit: 'unit5', unitName: '第5单元' },
    { word: 'travel through time', phonetic: '[ˈtrævl θruː taɪm]', meaning: '时空旅行', example: '如果我能穿越时空。If I could travel through time.', unit: 'unit5', unitName: '第5单元' },

    // 第6单元：The Coolest School Subjects - 学科
    { word: 'literature', phonetic: '[ˈlɪtrətʃə(r)]', meaning: '文学', example: '我喜欢文学。I like literature.', unit: 'unit6', unitName: '第6单元' },
    { word: 'biology', phonetic: '[baɪˈɒlədʒi]', meaning: '生物', example: '生物课很有趣。Biology class is interesting.', unit: 'unit6', unitName: '第6单元' },
    { word: 'social studies', phonetic: '[ˈsəʊʃl ˈstʌdiz]', meaning: '社会研究', example: '我们学社会研究。We study social studies.', unit: 'unit6', unitName: '第6单元' },
    { word: 'democracy', phonetic: '[dɪˈmɒkrəsi]', meaning: '民主', example: '民主很重要。Democracy is important.', unit: 'unit6', unitName: '第6单元' },
    { word: 'prime numbers', phonetic: '[praɪm ˈnʌmbəz]', meaning: '质数', example: '质数只能被1和自己整除。Prime numbers are only divisible by 1 and themselves.', unit: 'unit6', unitName: '第6单元' },
    { word: 'playwrights', phonetic: '[ˈpleɪraɪts]', meaning: '剧作家', example: '莎士比亚是剧作家。Shakespeare was a playwright.', unit: 'unit6', unitName: '第6单元' },

    // 第7单元：Mysteries! - 神秘现象
    { word: 'Atlantis', phonetic: '[ətˈlæntɪs]', meaning: '亚特兰蒂斯', example: '亚特兰蒂斯是传说中的城市。Atlantis is a legendary city.', unit: 'unit7', unitName: '第7单元' },
    { word: 'Northern Lights', phonetic: '[ˈnɔːðən laɪts]', meaning: '北极光', example: '北极光很美。The Northern Lights are beautiful.', unit: 'unit7', unitName: '第7单元' },
    { word: 'Bermuda Triangle', phonetic: '[bəˈmjuːdə ˈtraɪæŋɡl]', meaning: '百慕大三角', example: '百慕大三角很神秘。The Bermuda Triangle is mysterious.', unit: 'unit7', unitName: '第7单元' },
    { word: 'crop circles', phonetic: '[krɒp ˈsɜːklz]', meaning: '麦田怪圈', example: '麦田怪圈很奇怪。Crop circles are strange.', unit: 'unit7', unitName: '第7单元' },
    { word: 'phenomenon', phonetic: '[fəˈnɒmɪnən]', meaning: '现象', example: '这是奇怪的现象。This is a strange phenomenon.', unit: 'unit7', unitName: '第7单元' },
    { word: 'proof', phonetic: '[pruːf]', meaning: '证据', example: '我们需要证据。We need proof.', unit: 'unit7', unitName: '第7单元' },
    { word: 'theory', phonetic: '[ˈθɪəri]', meaning: '理论', example: '这只是理论。This is just a theory.', unit: 'unit7', unitName: '第7单元' },

    // 第8单元：Why Is It Famous? - 名胜古迹
    { word: 'cathedral', phonetic: '[kəˈθiːdrəl]', meaning: '大教堂', example: '大教堂很宏伟。The cathedral is magnificent.', unit: 'unit8', unitName: '第8单元' },
    { word: 'mausoleum', phonetic: '[ˌmɔːsəˈliːəm]', meaning: '陵墓', example: '这是古老的陵墓。This is an ancient mausoleum.', unit: 'unit8', unitName: '第8单元' },
    { word: 'monument', phonetic: '[ˈmɒnjumənt]', meaning: '纪念碑', example: '那是著名的纪念碑。That is a famous monument.', unit: 'unit8', unitName: '第8单元' },
    { word: 'palace', phonetic: '[ˈpæləs]', meaning: '宫殿', example: '宫殿很华丽。The palace is splendid.', unit: 'unit8', unitName: '第8单元' },
    { word: 'pyramid', phonetic: '[ˈpɪrəmɪd]', meaning: '金字塔', example: '金字塔在埃及。The pyramids are in Egypt.', unit: 'unit8', unitName: '第8单元' },
    { word: 'statue', phonetic: '[ˈstætʃuː]', meaning: '雕像', example: '自由女神像很著名。The Statue of Liberty is famous.', unit: 'unit8', unitName: '第8单元' },
    { word: 'temple', phonetic: '[ˈtempl]', meaning: '寺庙', example: '这是古老的寺庙。This is an ancient temple.', unit: 'unit8', unitName: '第8单元' },

    // 第9单元：That's Entertainment! - 娱乐
    { word: 'book signing', phonetic: '[bʊk ˈsaɪnɪŋ]', meaning: '签名会', example: '我去了签名会。I went to a book signing.', unit: 'unit9', unitName: '第9单元' },
    { word: 'comic book exhibit', phonetic: '[ˈkɒmɪk bʊk ɪɡˈzɪbɪt]', meaning: '漫画展', example: '漫画展很有趣。The comic book exhibit is interesting.', unit: 'unit9', unitName: '第9单元' },
    { word: 'festival', phonetic: '[ˈfestɪvl]', meaning: '节庆', example: '音乐节很棒。The music festival is great.', unit: 'unit9', unitName: '第9单元' },
    { word: 'movie premiere', phonetic: '[ˈmuːvi prɪˈmɪə(r)]', meaning: '电影首映', example: '我去了电影首映。I went to the movie premiere.', unit: 'unit9', unitName: '第9单元' },
    { word: 'sequel', phonetic: '[ˈsiːkwəl]', meaning: '续集', example: '续集明年上映。The sequel comes out next year.', unit: 'unit9', unitName: '第9单元' }
];

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = book6Vocabulary;
}
