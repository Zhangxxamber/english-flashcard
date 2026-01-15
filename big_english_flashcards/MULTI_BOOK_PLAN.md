# 📚 多教材支持计划

## ✅ 已完成

### 主页更新
- ✅ 添加教材选择器（Book 1-6）
- ✅ 动态链接更新
- ✅ Book 3 标记为"即将推出"（数据文件为空）
- ✅ 其他教材已启用（有 key_words 数据）

## 📊 教材数据状态

| 教材 | 数据文件 | 词汇数量（估算） | 状态 |
|------|----------|-----------------|------|
| Book 1 | key_words_1.txt | ~213个 | ✅ 已完整实现 |
| Book 2 | key_words_2.txt | ~150个+ | ⚠️ 有数据，待实现 |
| Book 3 | key_words_3.txt | 0个 | ❌ 无数据 |
| Book 4 | key_words_4.txt | ~200个+ | ⚠️ 有数据，待实现 |
| Book 5 | key_words_5.txt | ~150个+ | ⚠️ 有数据，待实现 |
| Book 6 | key_words_6.txt | ~150个+ | ⚠️ 有数据，待实现 |

## 🎯 实施方案

### 方案1：独立 HTML 文件（简单但文件多）
```
big_english_flashcards_book1.html
big_english_flashcards_book2.html
big_english_flashcards_book3.html (暂无)
big_english_flashcards_book4.html
big_english_flashcards_book5.html
big_english_flashcards_book6.html
```

**优点：**
- 每本教材独立，互不影响
- 易于维护和调试
- 可以针对不同教材定制功能

**缺点：**
- 文件数量多（6本 × 3个版本 = 18个文件）
- 代码重复度高
- 更新功能需要修改多个文件

---

### 方案2：动态加载数据（推荐）
保持现有的 3 个 HTML 文件，通过 URL 参数和 JavaScript 动态加载不同教材的数据。

**实现步骤：**

#### 1. 创建统一的词汇数据文件
```javascript
// vocabulary_data.js
const vocabularyData = {
    book1: [ /* Book 1 的 213 个单词 */ ],
    book2: [ /* Book 2 的单词 */ ],
    book4: [ /* Book 4 的单词 */ ],
    book5: [ /* Book 5 的单词 */ ],
    book6: [ /* Book 6 的单词 */ ]
};
```

#### 2. 修改现有 HTML 文件
在每个 HTML 文件的 `<head>` 中添加：
```html
<script src="vocabulary_data.js"></script>
```

#### 3. 添加数据加载逻辑
```javascript
// 获取 URL 参数
function getBookNumber() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('book')) || 1;
}

// 加载对应教材的数据
const bookNumber = getBookNumber();
const allWords = vocabularyData[`book${bookNumber}`] || vocabularyData.book1;
```

**优点：**
- 只需 3 个 HTML 文件（基础版、发音版、默写版）
- 代码统一，易于维护
- 添加新教材只需更新数据文件

**缺点：**
- 需要将文本数据转换为 JavaScript 格式
- 初始工作量较大

---

### 方案3：渐进式实现（最实际）

**第一阶段（当前）：**
- ✅ 主页支持教材选择
- ✅ Book 1 完整可用
- ⚠️ Book 2-6 显示"即将推出"或跳转到 Book 1

**第二阶段：**
- 根据 key_words 文件手工转换 Book 2 数据
- 测试 Book 2 功能
- 上线 Book 2

**第三阶段：**
- 依次实现 Book 4、5、6
- 最后补充 Book 3（需要获取数据）

---

## 📝 数据转换工作

### Book 2 数据示例
根据 `key_words_2.txt`，需要转换的内容包括：

**入门单元：**
- 教室物品：backpack, book, chair, desk, floor, marker, notebook, pen, pencil, pencil case, shelf, table
- 日常活动：brush your teeth, comb your hair, drink, dry the dishes, eat, make lunch, play a game, read, ride a bike, sleep, take a bath, talk on the phone
- 家庭成员：dad, grandma, grandpa, mom, sister

**第1单元：In My Classroom**
- 核心活动：coloring a picture, counting, cutting paper, gluing shapes, listening to a story, playing a game, using the computer, watching a movie, writing her name

... （以此类推）

### 转换格式
每个单词需要包含：
```javascript
{
    word: 'backpack',
    phonetic: '[ˈbækpæk]',
    meaning: '书包',
    example: 'This is my backpack. 这是我的书包。',
    unit: 'welcome',
    unitName: '入门单元'
}
```

---

## 💡 建议

### 给使用者
1. **当前**：Book 1 已完整可用，可以直接使用
2. **Book 2-6**：如果需要，可以暂时手动修改 URL 使用 Book 1 的功能
3. **定制**：如果需要快速实现某本教材，可以优先处理

### 给开发者
1. **优先级**：建议优先实现 Book 2（有完整数据，难度适中）
2. **工具化**：可以开发脚本自动将 key_words.txt 转换为 JavaScript 格式
3. **分工**：可以逐本教材实现，不需要一次性完成所有

---

## 🚀 快速启用 Book 2-6 的方法

### 临时方案（5分钟）
在三个 HTML 文件中添加判断逻辑：

```javascript
// 获取教材编号
const bookNumber = getBookNumber();

// 如果不是 Book 1，显示提示
if (bookNumber !== 1) {
    alert(`Book ${bookNumber} 功能即将推出！暂时为您加载 Book 1 的内容。`);
}

// 继续使用 Book 1 的数据
const allWords = [ /* Book 1 数据 */ ];
```

这样用户点击其他教材时会看到提示，但仍然可以学习。

---

## 📊 工作量评估

### 完整实现 Book 2
- 数据转换：2-3 小时
- 音标查找：1-2 小时
- 例句编写：2-3 小时
- 测试调试：1 小时
- **总计：6-9 小时**

### 完整实现 Book 2-6
- **总计：30-45 小时**

---

## 🎯 推荐方案

**立即实现：**
1. ✅ 主页教材选择器（已完成）
2. ⏰ 添加临时跳转逻辑（10分钟）
3. ⏰ 选择一本教材（如 Book 2）完整实现（6-9小时）

**长期计划：**
- 逐步完善其他教材
- 收集用户反馈
- 优先实现需求高的教材

---

需要我现在实现哪个方案？或者你有其他想法？
