---
title: 介绍
date: 2025-01-20
---

## 项目简介

Chat Copilot 是一款基于 Chrome Extension Manifest V3 标准开发的 AI 对话增强助手，旨在提升用户在使用 AI 平台时的效率和体验。通过智能提示词优化，帮助用户获得更精准、更高质量的 AI 回复。

![Chat Copilot 预览](/ui-images/ui-注入按钮.png)

![提示词优化](/ui-images/ui-优化对比.png)


## 支持的平台

Chat Copilot 支持以下主流 AI 对话平台：

| <span style="display: block; text-align: center;">国际平台</span> | <span style="display: block; text-align: center;">网址</span> | <span style="display: block; text-align: center;">国内平台</span> | <span style="display: block; text-align: center;">网址</span> |
|---------|------|---------|------|
| <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/chatgpt.png" width="20"/> ChatGPT</span> | [chatgpt.com](https://chatgpt.com) | <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/qianwen.png" width="20"/> 通义千问</span> | [qianwen.com](https://qianwen.com) |
| <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/claude.png" width="20"/> Claude</span> | [claude.ai](https://claude.ai) | <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/qianwen.png" width="20"/> 千问(国际版)</span> | [chat.qwen.ai](https://chat.qwen.ai) |
| <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/gemini.png" width="20"/> Gemini</span> | [gemini.google.com](https://gemini.google.com) | <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/yiyan.png" width="20"/> 文心一言</span> | [yiyan.baidu.com](https://yiyan.baidu.com) |
| <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/grok.png" width="20"/> Grok</span> | [grok.com](https://grok.com) | <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/yuanbao.png" width="20"/> 腾讯元宝</span> | [yuanbao.tencent.com](https://yuanbao.tencent.com) |
| <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/perplexity.png" width="20"/> Perplexity</span> | [perplexity.ai](https://www.perplexity.ai) | <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/deepseek.png" width="20"/> DeepSeek</span> | [chat.deepseek.com](https://chat.deepseek.com) |
|  |  | <span style="display: inline-flex; align-items: center; gap: 6px;"><img src="/website-icons/kimi.png" width="20"/> Kimi</span> | [kimi.com](https://kimi.com) |



## 快速开始

- [安装与使用](/docs/guides/getting-started.html)

## 功能一览

- [悬浮按钮](/docs/guides/floating-button.html)：在对话页面一键打开功能入口
- [插件面板](/docs/guides/plugin-popup.html)：优化引擎选择、统计与快捷入口
- [插件配置](/docs/guides/plugin-option.html)：优化引擎、风格与个性化设置
- [提示词广场](/docs/guides/plugin-square.html)：精选提示词，搜索与分类筛选
- [我的收藏](/docs/guides/plugin-favorite.html)：收藏、编辑、导出与一键写入

## 功能特性

### 智能提示词优化

- **一键优化**：基于规则引擎智能分析和优化用户输入的提示词
- **多维度增强**：提供清晰度、结构化、上下文完整性等多维度优化建议
- **实时预览**：在发送前预览优化后的提示词，支持一键应用
- **自定义模型**：支持自定义提示词优化模型，满足个性化需求
- **多场景切换**：可根据不同场景自定义提示词风格


### 隐私保护

- **本地存储**：所有数据存储在本地
- **零上传**：不会上传任何对话内容
- **安全可靠**：您的隐私数据完全掌控在自己手中


## 技术栈

- Chrome Extension Manifest V3
- TypeScript 5.3
- Webpack

## 开源协议

本项目采用 [Apache License 2.0](https://github.com/hellolib/chat-copilot/blob/main/LICENSE) 开源协议。
