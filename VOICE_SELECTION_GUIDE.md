# 语音选择功能使用指南

## 功能概述

从 v2.2.0 版本开始，所有英文学习模块都支持自定义选择英文发音人，让您可以选择最喜欢的声音进行学习。

---

## 支持的模块

### ✅ 已支持语音选择

1. **Big English 听写模式** (`big_english/dictation.html`)
   - 单词发音
   - 鼓励语音（英文）

2. **Grade2 English 听写模式** (`grade2_english/dictation.html`)
   - 短语发音
   - 鼓励语音（中文）

3. **Grade2 Chinese 听写模式** (`grade2_chinese/dictation.html`)
   - 拼音发音（中文）
   - 词语发音（中文）

---

## 使用方法

### 1. 打开语音选择面板

- 点击页面右上角的 **🎙️** 按钮
- 面板会从右侧滑出显示

### 2. 浏览可用发音人

- 面板中会显示所有可用的英文（或中文）发音人
- **推荐发音人**会优先显示在列表顶部
- 每个发音人显示名称和语言代码

### 3. 试听发音人

- 点击发音人右侧的 **"试听"** 按钮
- 系统会播放一段测试语音
- 可以多次试听不同的发音人进行对比

### 4. 选择发音人

- 点击发音人卡片（不是试听按钮）即可选择
- 选中的发音人会高亮显示（蓝色背景）
- 您的选择会自动保存到本地

### 5. 关闭面板

- 点击面板外的任意位置
- 或再次点击 🎙️ 按钮

---

## 推荐的英文发音人

以下是经过精选的高质量英文发音人：

### 🌟 Microsoft Natural 语音（推荐）

这些是微软最新的神经网络语音，音质自然流畅：

- **Microsoft Aria Online (Natural)** - 美式英语，女声，温柔自然
- **Microsoft Jenny Online (Natural)** - 美式英语，女声，清晰友好
- **Microsoft Guy Online (Natural)** - 美式英语，男声，沉稳专业

### 🔊 Google 语音

- **Google US English** - 美式英语，标准发音
- **Google UK English Female** - 英式英语，女声
- **Google UK English Male** - 英式英语，男声

### 💡 选择建议

- **儿童学习**：推荐 Microsoft Jenny 或 Aria（声音温柔，语速适中）
- **标准发音**：推荐 Google US English（清晰标准）
- **英式英语**：推荐 Google UK English Female（纯正英音）

---

## 推荐的中文发音人

### 🌟 Microsoft Natural 语音（推荐）

- **Microsoft Xiaoxiao Online (Natural)** - 晓晓，温柔甜美
- **Microsoft Xiaoyi Online (Natural)** - 晓伊，活泼可爱
- **Microsoft Yunxi Online (Natural)** - 云希，亲切自然

---

## 数据存储

您的语音选择偏好会保存在浏览器的本地存储（localStorage）中：

- **Big English**: `bigEnglish_selectedVoice`
- **Grade2 English**: `grade2English_selectedVoice`
- **Grade2 Chinese**: `grade2Chinese_selectedVoice`

每个模块独立保存，不会相互影响。

---

## 常见问题

### Q1: 为什么我看不到某些推荐的发音人？

**A**: 可用的发音人取决于您的操作系统和浏览器：

- **Windows 10/11**: 支持 Microsoft Online Natural 语音（需要联网）
- **Chrome/Edge**: 支持 Google 语音
- **macOS/iOS**: 有 Apple 自带的英文语音
- **Android**: 有 Google 语音

### Q2: 发音人列表是空的怎么办？

**A**: 请尝试以下方法：

1. 刷新页面（Ctrl + F5 或 Cmd + Shift + R）
2. 检查网络连接（Natural 语音需要联网）
3. 更新浏览器到最新版本
4. 尝试使用 Chrome 或 Edge 浏览器

### Q3: 如何切换回默认发音人？

**A**: 
1. 打开语音选择面板
2. 选择列表顶部的推荐发音人之一
3. 系统会自动保存您的选择

### Q4: 我选择的发音人会在其他设备上同步吗？

**A**: 
不会。语音选择保存在本地浏览器中，不同设备需要分别设置。

### Q5: 为什么有些发音人听起来很机械？

**A**: 
- **Natural 语音**：采用神经网络技术，音质接近真人
- **传统语音**：采用拼接技术，可能听起来比较机械

建议优先选择名称中带 **"Online (Natural)"** 的发音人。

---

## 技术支持

如有问题或建议，请访问：
- GitHub: https://github.com/Zhangxxamber/english-flashcard
- 提交 Issue: https://github.com/Zhangxxamber/english-flashcard/issues

---

**祝您学习愉快！** 📚✨

*最后更新：2026-01-18*
