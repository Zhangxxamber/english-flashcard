// Big English 完整词汇数据库
// 包含 Book 1-6 的所有单词数据
// 作者: Zhangxxamber
// 更新日期: 2026-01-15

// 数据格式说明：
// {
//     word: '单词',
//     phonetic: '[音标]',
//     meaning: '中文意思',
//     example: '例句（只保留中文部分）',
//     unit: '单元ID',
//     unitName: '单元名称'
// }

const vocabularyData = {
    // Book 1 数据（已完成 - 213个单词）
    book1: [
        // 使用现有的 allWordsBook1 数据
        // 这部分数据将从现有 HTML 文件中提取
    ],
    
    // Book 2 数据（待实现 - 约150+个单词）
    book2: [
        // 入门单元示例
        { word: 'backpack', phonetic: '[ˈbækpæk]', meaning: '书包', example: '这是我的书包。', unit: 'welcome', unitName: '入门单元' },
        { word: 'notebook', phonetic: '[ˈnəʊtbʊk]', meaning: '笔记本', example: '我有一个新笔记本。', unit: 'welcome', unitName: '入门单元' },
        // ... 更多单词
    ],
    
    // Book 3 数据（待实现 - 约150+个单词）
    book3: [
        // 入门单元示例
        { word: 'bathroom', phonetic: '[ˈbɑːθruːm]', meaning: '浴室', example: '浴室很干净。', unit: 'welcome', unitName: '入门单元' },
        { word: 'bedroom', phonetic: '[ˈbedruːm]', meaning: '卧室', example: '这是我的卧室。', unit: 'welcome', unitName: '入门单元' },
        // ... 更多单词
    ],
    
    // Book 4 数据（待实现 - 约200+个单词）
    book4: [
        // 入门单元示例
        { word: 'blond', phonetic: '[blɒnd]', meaning: '金发的', example: '她有金发。', unit: 'welcome', unitName: '入门单元' },
        { word: 'funny', phonetic: '[ˈfʌni]', meaning: '有趣的', example: '他很有趣。', unit: 'welcome', unitName: '入门单元' },
        // ... 更多单词
    ],
    
    // Book 5 数据（待实现 - 约150+个单词）
    book5: [
        // 入门单元示例
        { word: 'difficult', phonetic: '[ˈdɪfɪkəlt]', meaning: '困难的', example: '这个很难。', unit: 'welcome', unitName: '入门单元' },
        { word: 'interesting', phonetic: '[ˈɪntrəstɪŋ]', meaning: '有趣的', example: '这本书很有趣。', unit: 'welcome', unitName: '入门单元' },
        // ... 更多单词
    ],
    
    // Book 6 数据（待实现 - 约150+个单词）
    book6: [
        // 入门单元示例
        { word: 'advice', phonetic: '[ədˈvaɪs]', meaning: '建议', example: '给我一些建议。', unit: 'welcome', unitName: '入门单元' },
        { word: 'assignment', phonetic: '[əˈsaɪnmənt]', meaning: '作业', example: '我完成了作业。', unit: 'welcome', unitName: '入门单元' },
        // ... 更多单词
    ]
};

// 导出数据（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vocabularyData;
}
