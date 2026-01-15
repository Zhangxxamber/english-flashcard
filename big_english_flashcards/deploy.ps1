# Big English 1 单词闪卡 - Git 部署脚本
# 使用方法：在 PowerShell 中运行此脚本

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Big English 1 单词闪卡 - Git 部署向导" -ForegroundColor Cyan
Write-Host "======================================`n" -ForegroundColor Cyan

# 检查是否在正确的目录
if (-not (Test-Path "index.html")) {
    Write-Host "❌ 错误：请在 big_english_flashcards 文件夹中运行此脚本！" -ForegroundColor Red
    exit
}

# 提示用户输入信息
Write-Host "📝 请输入您的 GitHub 信息：`n" -ForegroundColor Yellow

$username = Read-Host "GitHub 用户名"
$reponame = Read-Host "仓库名称 (例如: big-english-flashcards)"

Write-Host "`n🔄 开始初始化 Git 仓库...`n" -ForegroundColor Green

# 初始化 Git
git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Git 初始化失败！请确保已安装 Git。" -ForegroundColor Red
    Write-Host "下载地址：https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

Write-Host "✅ Git 仓库初始化成功！`n" -ForegroundColor Green

# 添加所有文件
Write-Host "📦 添加文件..." -ForegroundColor Yellow
git add .
Write-Host "✅ 文件添加完成！`n" -ForegroundColor Green

# 提交
Write-Host "💾 创建初始提交..." -ForegroundColor Yellow
git commit -m "Initial commit: Add Big English 1 flashcards"
Write-Host "✅ 提交成功！`n" -ForegroundColor Green

# 设置远程仓库
$remoteUrl = "https://github.com/$username/$reponame.git"
Write-Host "🔗 设置远程仓库：$remoteUrl" -ForegroundColor Yellow
git remote add origin $remoteUrl
Write-Host "✅ 远程仓库设置完成！`n" -ForegroundColor Green

# 推送到 GitHub
Write-Host "🚀 推送到 GitHub..." -ForegroundColor Yellow
Write-Host "注意：您可能需要输入 GitHub 用户名和密码（或个人访问令牌）`n" -ForegroundColor Cyan

git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n" -ForegroundColor Green
    Write-Host "======================================" -ForegroundColor Green
    Write-Host "🎉 部署成功！" -ForegroundColor Green
    Write-Host "======================================`n" -ForegroundColor Green
    
    Write-Host "📋 下一步操作：" -ForegroundColor Yellow
    Write-Host "1. 访问 https://github.com/$username/$reponame" -ForegroundColor White
    Write-Host "2. 进入 Settings → Pages" -ForegroundColor White
    Write-Host "3. 在 Source 中选择 'main' 分支" -ForegroundColor White
    Write-Host "4. 点击 Save" -ForegroundColor White
    Write-Host "5. 等待几分钟后访问：" -ForegroundColor White
    Write-Host "   https://$username.github.io/$reponame/`n" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ 推送失败！" -ForegroundColor Red
    Write-Host "可能的原因：" -ForegroundColor Yellow
    Write-Host "1. GitHub 仓库尚未创建" -ForegroundColor White
    Write-Host "2. 用户名或仓库名不正确" -ForegroundColor White
    Write-Host "3. 没有权限访问仓库`n" -ForegroundColor White
    
    Write-Host "解决方法：" -ForegroundColor Yellow
    Write-Host "1. 先在 GitHub 创建仓库：https://github.com/new" -ForegroundColor White
    Write-Host "2. 确保仓库名称为：$reponame" -ForegroundColor White
    Write-Host "3. 再次运行此脚本`n" -ForegroundColor White
}

Write-Host "`n按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
