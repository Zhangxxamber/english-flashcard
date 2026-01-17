# 小学学习助手 - 综合学习平台

## 📚 项目简�?

一个综合性的小学学习辅助平台，涵盖语文、英语、数学三大学科，采用自主默写、互动练习等多种学习模式�?

## 🎯 项目特色

- �?**纯前端实�?*：无需后端服务器，即开即用
- �?**离线可用**：支持本地离线使�?
- �?**自主学习**：自我评估模式，培养学习主动�?
- �?**错题管理**：自动记录错题，支持针对性复�?
- �?**进度追踪**：实时显示学习进度和正确�?
- �?**响应式设�?*：支持电脑、平板、手机多设备

## 📂 项目结构

```
english-flashcard/
├── index.html                          # 平台主页 - 学科选择
├── README.md                           # 项目总说明（本文档）
�?
├── big_english/                       # Big English 系列（Book 1-6�?
�?  ├── index.html                      # 教材选择�?
�?  ├── dictation.html                  # 自主默写页面
�?  ├── data/                           # 词汇数据�?本教材）
�?  ├── book/                       # 教材资源
�?  ├── docs/                           # 项目文档
�?  └── README.md                       # 项目说明
�?
├── grade2_english/          # 沪教版小学英语二年级
�?  ├── index.html                      # 学期选择�?
�?  ├── dictation.html                  # 自主默写页面
�?  ├── data/                           # 词汇数据（上下册�?
�?  ├── book/                           # 教材资源（上下册�?
�?  ├── docs/                           # 项目文档
�?  ├── 自主听写模式说明.md
�?  ├── 错题本功能说�?md
�?  └── README.md                       # 项目说明
�?
├── grade2_chinese/          # 人教版小学语文二年级
�?  ├── index.html                      # 学期和内容类型选择
�?  ├── dictation.html                  # 自主默写页面
�?  ├── data/                           # 词汇数据目录
�?  �?  ├── vocabulary_xiezibiao.js     # 写字表数�?
�?  �?  ├── vocabulary_shizibiao.js     # 识字表数�?
�?  �?  └── vocabulary_ciyubiao.js      # 词语表数�?
�?  ├── book/                           # 教材资源
�?  └── README.md                       # 项目说明
�?
└── grade2_math/             # 沪教版小学数学二年级
    ├── index.html                      # 学期选择�?
    ├── practice.html                   # 练习页面
    ├── quick_quiz.html                 # 快速测�?
    ├── data/                           # 数学题库数据
    ├── book/                           # 教材资源
    ├── QUICKSTART.md                   # 快速开�?
    ├── COMPLETE_REPORT.md              # 完整报告
    ├── PROJECT_SUMMARY.md              # 项目总结
    ├── 项目完成通知.md
    └── README.md                       # 项目说明
```

## 🎓 学科模块

### 1. 语文（grade2_chinese_flashcards�?
- **教材**：人教版小学语文二年级上下册
- **内容类型**：写字表、识字表、词语表
- **学习模式**：自主默写（听拼音写汉字�?
- **词汇�?*：约 600+ 生字�?00+ 词语

### 2. 英语

#### 2.1 小学英语二年级（grade2_english�?
- **教材**：沪教版小学英语二年级上下册
- **学习模式**：自主默写（听发音看中文写英文）
- **词汇�?*�?46 个核心词�?
- **特色**：音标显示、错题本

#### 2.2 Big English 系列（big_english_flashcards�?
- **教材**：Big English 2nd Edition (Book 1-6)
- **学习模式**：自主默�?
- **词汇�?*�?38 个核心词�?
- **特色**：多教材选择、分单元学习

### 3. 数学（grade2_math_flashcards�?
- **教材**：沪教版小学数学二年级上下册
- **学习模式**：互动练习、快速测�?
- **内容**：计算练习、应用题�?
- **特色**：实时反馈、错题分�?

## 🚀 快速开�?

1. **直接打开**：双�?`index.html` 在浏览器中打开
2. **选择学科**：在主页选择想要学习的学�?
3. **开始学�?*：按照提示进行学习和练习
4. **查看错题**：随时查看错题本进行复习

## 💾 数据存储说明

所有学习数据（错题记录、学习进度等）都存储在浏览器�?localStorage 中：

- **优点**：无需登录，数据本地存储，保护隐私
- **注意**：清除浏览器缓存会清空学习记�?
- **备份**：建议定期导出重要数据（如有需要）

## 🎨 设计特色

- **渐变背景**：使用柔和的紫色渐变，保护视�?
- **大字�?*：适合小学生阅读习�?
- **卡片布局**：信息层次清晰，易于理解
- **动画效果**：流畅的过渡动画，提升使用体�?
- **响应�?*：自适应不同屏幕尺寸

## 🔧 技术栈

- **前端**：HTML5 + CSS3 + JavaScript (ES6+)
- **音频**：Web Speech API（语音合成）
- **存储**：localStorage（本地存储）
- **动画**：CSS3 Animations + Transitions
- **图标**：Emoji 表情符号

## 📱 浏览器支�?

- �?Chrome（推荐）
- �?Edge
- �?Firefox
- �?Safari
- �?移动端浏览器

## 📖 使用文档

每个子项目都有详细的 README.md 文档，包含：
- 项目简介和功能特点
- 目录结构说明
- 使用方法详解
- 数据统计信息
- 技术实现细�?

## 🎯 学习建议

1. **循序渐进**：从简单到复杂，逐步提升难度
2. **坚持练习**：每天固定时间练习，形成习惯
3. **重视错题**：及时复习错题本，巩固薄弱环�?
4. **自我评估**：诚实评估掌握情况，不要自欺欺人
5. **劳逸结�?*：注意休息，保护视力

## 👨‍�?开发�?

Made with ❤️ for kids

## 📝 更新日志

### v2.0 - 2026-01
- �?统一为自主默写模�?
- �?优化界面布局（单卡片居中�?
- �?移除多余的学习模�?
- �?完善项目文档结构
- �?添加各项�?README

### v1.0 - 2025-12
- �?初始版本发布
- �?支持三大学科
- �?实现基础学习功能

## 📧 联系方式

如有问题或建议，欢迎反馈�?

## 📁 详细目录结构

### 完整目录�?

```
english-flashcard/
├── index.html                          # 平台主页
├── README.md                           # 本文�?
�?
├── big_english/                        # Big English 系列
�?  ├── index.html
�?  ├── dictation.html
�?  ├── README.md
�?  ├── data/
�?  �?  ├── vocabulary_data.js          # Book 1
�?  �?  ├── vocabulary_book2.js         # Book 2
�?  �?  ├── vocabulary_book3.js         # Book 3
�?  �?  ├── vocabulary_book4.js         # Book 4
�?  �?  ├── vocabulary_book5.js         # Book 5
�?  �?  ├── vocabulary_book6.js         # Book 6
�?  �?  └── vocabulary_data_template.js
�?  ├── book/
�?  �?  ├── Big English 2nd Edition Student's Book 1-6.pdf
�?  �?  └── key_words_1-6.txt
�?  └── docs/
�?      ├── QUICKSTART.md
�?      └── ...其他文档
�?
├── grade2_english/          # 小学英语二年�?
�?  ├── index.html
�?  ├── dictation.html
�?  ├── README.md
�?  ├── 自主听写模式说明.md
�?  ├── 错题本功能说�?md
�?  ├── data/
�?  �?  ├── vocabulary_book1.js
�?  �?  └── vocabulary_book2.js
�?  ├── book/
�?  �?  ├── 沪教版小学英语二年级上册.pdf
�?  �?  ├── 沪教版小学英语二年级下册.pdf
�?  �?  ├── key_words_1.txt
�?  �?  └── key_words_2.txt
�?  └── docs/
�?
├── grade2_chinese/          # 小学语文二年�?
�?  ├── index.html
�?  ├── dictation.html
�?  ├── README.md
�?  ├── data/
�?  �?  ├── vocabulary_xiezibiao.js
�?  �?  ├── vocabulary_shizibiao.js
�?  �?  └── vocabulary_ciyubiao.js
�?  └── book/
�?      ├── 人教版二年级语文上册.pdf
�?      ├── 人教版二年级语文下册.pdf
�?      ├── key_words_1.txt
�?      ├── key_words_2.txt
�?      ├── 写字�?
�?      �?  ├── 1.png, 2.png, 3.png
�?      �?  └── 写字表数�?txt
�?      ├── 识字�?
�?      �?  ├── 1.png, 2.png, 3.png
�?      �?  └── 识字表数�?txt
�?      └── 词语�?
�?          ├── 1.png, 2.png, 3.png
�?          └── 词语表数�?txt
�?
└── grade2_math/             # 小学数学二年�?
    ├── index.html
    ├── practice.html
    ├── quick_quiz.html
    ├── README.md
    ├── QUICKSTART.md
    ├── COMPLETE_REPORT.md
    ├── PROJECT_SUMMARY.md
    ├── 项目完成通知.md
    ├── data/
    �?  ├── math_semester1.js
    �?  └── math_semester2.js
    └── book/
        ├── 沪教版二年级数学上册.pdf
        ├── 沪教版二年级数学下册.pdf
        ├── key_data_1.txt
        └── key_data_2.txt
```

### 文件类型说明

#### 核心 HTML 文件
- **index.html** - 各项目入口页面，用于选择学期/教材/内容类型
- **dictation.html** - 自主默写练习页面
- **practice.html / quick_quiz.html** - 数学练习页面

#### 数据文件
- **vocabulary_*.js** - 词汇数据文件（JSON格式�?
- **math_semester*.js** - 数学题库数据

#### 教材资源
- **PDF** - 完整教材扫描�?
- **key_words.txt / key_data.txt** - 关键内容提取
- **图片素材** - 配套学习图片

#### 文档文件
- **README.md** - 项目说明和使用指�?
- **功能说明.md** - 具体功能详细说明
- **技术文�?* - 开发和部署相关文档

### 命名规范

#### 目录命名
- 使用小写字母和下划线：`grade2_english`
- 包含年级和学科信息：`grade2_*`
- 教材资源目录统一为：`book/`

#### 文件命名
- HTML 页面：小�?下划线：`dictation.html`
- 数据文件：描述性命名：`vocabulary_xiezibiao.js`
- 文档文件：大写（英文）或中文：`README.md`, `项目完成通知.md`

#### 数据键名规范
- localStorage 键名：`wrongItems_*`
- 学期标识：`s1`（上学期�? `s2`（下学期�?
- 教材标识：`book1`, `book2`, �?

## 🎵 音效系统说明

### 功能概览

使用 Web Audio API 实时生成趣味音效，无需外部音频文件，加载快速流畅！

### 音效类型

#### 答对音效�?种随机）
- 🎉 **Woohoo!** - 欢快上扬音（400Hz �?1000Hz�?
- 💫 **Boing!** - 弹跳音（600Hz �?300Hz �?500Hz�?
- 🔔 **Ding-Ding!** - 双铃铛音�?200Hz + 1400Hz�?

#### 答错音效
- 🤔 **Oops~** - 温和下滑音（400Hz �?300Hz），友好提醒风格

#### 连击奖励音效
- 🔥 **三连�?* - Boom-Boom-Boom!（三连音�?+ 屏幕特效�?
- �?**五连�?* - Super!（方波上扬音 + 屏幕特效�?
- 🌟 **十连�?* - 屏幕特效提示
- 🏆 **十五连击** - 超神特效提示

#### 完成音效
- 👏 **完成单元** - 鼓掌声模拟（8次随机频率快速音�?
- 🎼 **满分通关** - 欢快上行音阶（C大调8个音符）

### 鼓励语音系统

每次答对时从 **24种鼓励语** 中随机选择播放�?

- 基础鼓励�?太棒了！" "真聪明！" "你真厉害�? "完美�?
- 持续激励："好样的！" "继续加油�? "你是最棒的�? "真了不起�?
- 强化信心�?真厉害！" "太优秀了！" "你真棒！" "非常好！"
- 高级赞美�?真是天才�? "超级棒！" "太牛了！" "很棒�?
- 积极反馈�?做得好！" "真不错！" "了不起！" "真优秀�?
- 顶级表扬�?棒极了！" "太聪明了�? "真能干！" "真出色！"

#### 语音特�?
- 🎤 使用浏览器语音合�?API（SpeechSynthesis�?
- 🇨🇳 语言：简体中文（zh-CN�?
- 🎵 语速：1.1倍（稍快，更有活力）
- 🎶 音调�?.2倍（稍高，更欢快�?
- 🔊 音量�?.8（适中音量�?

### 音效开�?

- 📍 位置：页面右上角（返回首页按钮旁边）
- 🔊 开启状态：显示喇叭图标
- 🔇 关闭状态：显示静音图标，半透明显示
- 💾 记忆功能：使�?localStorage 保存用户偏好

### 交互逻辑

**答对题目时：**
- �?播放随机答对音效�?�?�?
- �?播放随机鼓励语音�?4�?�?
- �?连击计数�?+1
- �?检查连击里程碑�?/5/10/15�?

**答错题目时：**
- �?播放友好错误音效（Oops~�?
- �?连击计数器重置为 0

**完成单元时：**
- 🏆 满分�?00%）→ 播放完美音阶
- 🌟 良好�?0%+）→ 播放鼓掌音效

### 技术优�?

1. �?**无需外部文件** - 使用 Web Audio API 实时生成
2. �?**加载速度�?* - 无网络请求，即时响应
3. �?**跨浏览器兼容** - 支持现代主流浏览�?
4. �?**用户可控** - 音效开�?+ 偏好记忆
5. �?**轻量�?* - 代码量小，不影响性能
6. �?**趣味性强** - 卡通风格，适合儿童

## 🔧 开发者指�?

### 添加新教�?
1. 在对应目录的 `data/` 下创建新数据文件
2. 参�?`vocabulary_data_template.js` 格式
3. 更新 `index.html` 中的教材选择逻辑

### 修改样式
- CSS 样式直接写在 HTML �?`<style>` 标签�?
- 保持统一的紫色渐变主�?
- 注意响应式设�?

### 数据格式示例
```javascript
const vocabularyData = {
    "unit_name": [
        {
            phrase: "英文单词",
            chinese: "中文意�?,
            phonetic: "/音标/"
        }
    ]
};
```

## ⚖️ 许可�?

本项目仅供学习使用，请勿用于商业目的�?
