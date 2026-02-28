---
title: 插件安装
date: 2026-02-08
---

## 方式一：Chrome 商店安装

1. 访问 [Chrome Web Store](https://chromewebstore.google.com/detail/chat-copilot/ignafelbdjojmmofofhldldpgkceflal)
2. 点击「添加至 Chrome」按钮
3. 在弹出确认框中点击「添加扩展程序」


## 方式二：直接下载 CRX 插件

1. 下载： [ChatCopilot-0.17.1.crx](/release-crx/ChatCopilot-0.17.1.crx)
2. 下载完成后，打开 Chrome 浏览器，访问 `chrome://extensions/`
3. 开启右上角「开发者模式」
4. 将下载的`.crx`文件拖拽到扩展管理页面
5. 在弹出的确认框中点击「添加扩展程序」

## 方式三：GitHub Releases 下载安装

1. 访问 [GitHub Releases](https://github.com/hellolib/chat-copilot/releases) 页面
2. 下载最新版本压缩包
3. 解压后按下方「开发者模式安装」加载
4. 打开 Chrome 浏览器，访问 `chrome://extensions/`
5. 开启右上角的「开发者模式」
6. 点击「加载已解压的扩展程序」
7. 选择解压后的文件夹

## 方式四：源码编译安装

1. 克隆仓库：`git clone https://github.com/hellolib/chat-copilot.git`
2. 进入目录：`cd chat-copilot`
3. 安装依赖：`npm install`
4. 构建项目：`npm run build`
5. 打开 Chrome 浏览器，访问 `chrome://extensions/`
6. 开启右上角的「开发者模式」
7. 点击「加载已解压的扩展程序」
8. 选择项目根目录下的 `build/chat-copilot` 文件夹
