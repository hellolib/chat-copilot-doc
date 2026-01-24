---
title: 快速开始
date: 2025-01-20
---

## 安装方式

### 方式一：Chrome 商店安装（推荐）

1. 访问 [Chrome Web Store](https://chromewebstore.google.com/detail/chat-copilot/ignafelbdjojmmofofhldldpgkceflal)
2. 点击「添加至 Chrome」按钮
3. 在弹出确认框中点击「添加扩展程序」
4. 安装完成，在支持的 AI 平台页面即可看到功能入口

### 方式二：开发者模式安装

#### 1. 克隆仓库

```bash
git clone https://github.com/hellolib/chat-copilot.git
cd chat-copilot
```

#### 2. 安装依赖

```bash
npm install
```

#### 3. 构建项目

```bash
npm run build
```

#### 4. 加载扩展

1. 打开 Chrome 浏览器，访问 `chrome://extensions/`
2. 开启右上角的「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择项目根目录下的 `build/chat-copilot` 文件夹

扩展安装完成后，在支持的 AI 平台页面即可看到功能入口。

![安装完成](/1.png)

## 使用方法

1. 打开任意支持的 AI 对话平台（如 ChatGPT、Claude 等）
2. 在输入框中输入你的提示词
3. 点击 Chat Copilot 图标或使用快捷键触发优化
4. 预览优化后的提示词，点击应用即可发送


## 反馈与支持

- **GitHub Issues**：[提交问题](https://github.com/hellolib/chat-copilot/issues)
- **Email**：bigoxevan@gmail.com
