# 🚀 GitHub Pages 部署指南

本指南将帮助您将 Big English 1 单词闪卡部署到 GitHub Pages。

## 📋 部署步骤

### 1️⃣ 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `big-english-flashcards` （或您喜欢的名字）
   - **Description**: `Big English 1 单词闪卡 - 在线学习工具`
   - **Public** ✅ （必须设为公开才能使用免费的 GitHub Pages）
   - ✅ 勾选 `Add a README file`
4. 点击 `Create repository`

### 2️⃣ 上传文件到仓库

#### 方法A：使用 GitHub 网页界面（推荐新手）

1. 进入您的仓库页面
2. 点击 `Add file` → `Upload files`
3. 将以下文件拖拽到上传区域：
   ```
   index.html
   big_english_flashcards.html
   big_english_flashcards_voice.html
   README.md
   ```
4. 在底部添加提交信息：`Initial commit: Add flashcard files`
5. 点击 `Commit changes`

#### 方法B：使用 Git 命令行

```bash
# 1. 初始化本地仓库
cd C:\Users\XINDONG\Desktop\temp\big_english_flashcards
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: Add flashcard files"

# 4. 关联远程仓库（替换成您的用户名和仓库名）
git remote add origin https://github.com/yourusername/big-english-flashcards.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3️⃣ 启用 GitHub Pages

1. 在仓库页面，点击 `Settings`（设置）
2. 在左侧菜单找到 `Pages`
3. 在 **Source** 部分：
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/ (root)`
4. 点击 `Save`
5. 等待几分钟，页面顶部会显示：
   ```
   ✅ Your site is published at https://yourusername.github.io/big-english-flashcards/
   ```

### 4️⃣ 访问您的网站

部署完成后，您可以通过以下链接访问：

| 页面 | URL |
|------|-----|
| 🏠 主页 | `https://yourusername.github.io/big-english-flashcards/` |
| 📖 基础版 | `https://yourusername.github.io/big-english-flashcards/big_english_flashcards.html` |
| 🔊 发音版 | `https://yourusername.github.io/big-english-flashcards/big_english_flashcards_voice.html` |

> **注意**：将 `yourusername` 替换为您的 GitHub 用户名

## 🔄 更新网站

当您需要更新内容时：

### 网页界面更新
1. 进入仓库，找到要更新的文件
2. 点击文件名进入详情页
3. 点击右上角的 ✏️ 编辑按钮
4. 修改内容后，填写提交信息
5. 点击 `Commit changes`
6. GitHub Pages 会自动重新部署（通常需要1-2分钟）

### Git 命令行更新
```bash
# 1. 修改文件后
git add .
git commit -m "Update: 描述您的更改"
git push

# 2. GitHub Pages 自动部署
```

## 🎨 自定义域名（可选）

如果您有自己的域名，可以绑定到 GitHub Pages：

1. 在仓库 `Settings` → `Pages`
2. 在 **Custom domain** 输入您的域名
3. 在域名服务商添加 CNAME 记录指向：`yourusername.github.io`

## ⚠️ 常见问题

### Q1: 为什么访问显示 404？
**A**: 检查以下几点：
- 确认 GitHub Pages 已启用
- 确认选择了正确的分支（main）
- 等待1-2分钟让 GitHub 完成部署
- 检查 URL 是否正确（区分大小写）

### Q2: 发音功能不工作？
**A**: 发音功能依赖浏览器的 Web Speech API：
- 确保使用 Chrome 或 Edge 浏览器
- 检查浏览器是否允许网站访问麦克风权限
- 某些浏览器需要 HTTPS 才能使用语音功能（GitHub Pages 默认提供 HTTPS）

### Q3: 如何修改 README.md 中的链接？
**A**: 
1. 在 GitHub 仓库中找到 `README.md`
2. 点击编辑，将所有 `yourusername` 替换为您的 GitHub 用户名
3. 将 `big-english-flashcards` 替换为您的实际仓库名
4. 保存提交

### Q4: 如何在首页添加 GitHub 链接？
**A**: 
1. 编辑 `index.html`
2. 找到这行代码（在页脚部分）：
   ```html
   <a href="https://github.com/yourusername/your-repo" target="_blank">🌟 GitHub</a>
   ```
3. 替换为您的实际仓库地址
4. 保存并推送更新

## 📊 查看访问统计

您可以在 GitHub 仓库的 `Insights` → `Traffic` 中查看访问数据。

## 🔒 安全提示

- ✅ GitHub Pages 自动提供 HTTPS
- ✅ 所有文件都是静态的，没有服务器端代码
- ✅ 不收集用户数据，完全本地运行

## 💡 优化建议

1. **启用 CDN 加速**：GitHub Pages 默认使用全球 CDN
2. **添加 Google Analytics**：在 HTML 中添加跟踪代码
3. **SEO 优化**：已包含基本的 meta 标签
4. **社交分享**：可添加 Open Graph 标签

## 📱 分享您的网站

部署成功后，您可以：
- 📧 通过邮件分享链接
- 💬 在社交媒体分享
- 📋 添加到学校/班级的资源列表
- 🔗 生成二维码方便手机访问

---

🎉 **恭喜！您的 Big English 1 单词闪卡现已上线！**

如有问题，欢迎在 GitHub Issues 中提问。
