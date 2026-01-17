# Big English 单词闪卡 - 自主默写系统

## 📚 项目简介

Big English 系列教材（Book 1-6）的自主默写学习系统，支持听发音、看中文、自我评估的学习模式。

## 📂 目录结构

```
big_english/
├── index.html                    # 主页 - 教材选择界面
├── dictation.html                # 自主默写练习页面
├── data/                         # 词汇数据目录
│   ├── vocabulary_data.js        # Book 1 词汇数据
│   ├── vocabulary_book2.js       # Book 2 词汇数据
│   ├── vocabulary_book3.js       # Book 3 词汇数据
│   ├── vocabulary_book4.js       # Book 4 词汇数据
│   ├── vocabulary_book5.js       # Book 5 词汇数据
│   ├── vocabulary_book6.js       # Book 6 词汇数据
│   └── vocabulary_data_template.js  # 数据模板
├── book/                         # 教材资源
│   ├── Big English 2nd Edition Student's Book 1-6.pdf
│   └── key_words_1-6.txt         # 关键词汇列表
├── docs/                         # 项目文档
│   ├── QUICKSTART.md             # 快速开始指南
│   └── ...                       # 其他文档
└── README.md                     # 本文档
```

## 🎯 功能特点

- **自主默写模式**：听发音 → 看中文 → 显示答案 → 自我评估
- **多教材支持**：覆盖 Book 1-6 全系列
- **错题本功能**：自动记录错题，支持重练
- **进度追踪**：实时显示学习进度和正确率
- **音标显示**：支持国际音标查看

## 📊 数据统计

| 教材 | 词汇数 | 单元数 | 主题 |
|------|--------|--------|------|
| Book 1 | 213 | 10 | 教室、家庭、动物等基础主题 |
| Book 2 | 140 | 9 | 天气、职业、交通等进阶主题 |
| Book 3 | 138 | 9 | 房间、活动、地点等日常场景 |
| Book 4 | 102 | 10 | 健康、环境、科技等综合主题 |
| Book 5 | 90 | 10 | 兴趣、购物、探险等社会话题 |
| Book 6 | 55 | 10 | 学科、神秘、文化等深度内容 |

## 🚀 使用方法

1. 打开 `index.html` 选择教材（Book 1-6）
2. 点击"开始练习"进入自主默写模式
3. 听发音、看中文意思、思考英文拼写
4. 点击"显示答案"查看正确答案
5. 根据掌握情况选择"会了"或"还不会"
6. 系统自动记录错题，可随时查看错题本

## 💾 数据存储

- 错题数据存储在浏览器 localStorage 中
- 键名格式：`wrongItems_bookX`（X 为教材编号）
- 清除浏览器缓存会清空错题记录

## 🔧 技术栈

- 纯 HTML + CSS + JavaScript
- 无需后端服务器
- 支持离线使用
- 响应式设计，适配移动端

## 📝 开发者

Made with ❤️ by Zhangxxamber

## 🔗 相关链接

- [GitHub 仓库](https://github.com/Zhangxxamber/english-flashcard)
- [返回平台首页](../index.html)
