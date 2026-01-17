// Big English 完整词汇数据库 (Book 1-6)
// 作者: Zhangxxamber
// 更新日期: 2026-01-15
// 
// 说明：
// - Book 1: 完整数据（213个单词）- 从 HTML 中提取
// - Book 2: 完整数据（140+个单词）- 已完成
// - Book 3: 完整数据（150+个单词）- 已完成
// - Book 4-6: 待补充（参考 vocabulary_book2.js 和 vocabulary_book3.js 的格式）

// 注意：Book 1 的数据需要从现有的 big_english_flashcards_dictation.html 中的 
// allWordsBook1 数组复制过来

const vocabularyData = {
    // Book 1 数据 - 请从 HTML 文件中复制 allWordsBook1 的内容
    book1: [
        // 这里应该包含 Book 1 的 213 个单词
        // 请从 big_english_flashcards_dictation.html 中复制
    ],
    
    // Book 2 数据 - 已完成（140+个单词）
    book2: [
        // 从 vocabulary_book2.js 复制内容，或在此直接定义
    ],
    
    // Book 3 数据 - 已完成（150+个单词）
    book3: [
        // 从 vocabulary_book3.js 复制内容，或在此直接定义
    ],
    
    // Book 4-6 数据 - 待补充
    book4: [],
    book5: [],
    book6: []
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vocabularyData;
}
