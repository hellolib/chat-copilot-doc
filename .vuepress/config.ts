import {defineUserConfig} from "vuepress";
import {recoTheme} from "vuepress-theme-reco";
import {viteBundler} from '@vuepress/bundler-vite'
import {themeConfig} from './config/index';
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  // Multi-language locales
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Chat Copilot',
      description: 'AI 对话增强助手 - 让每一次 AI 对话都更高效',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Chat Copilot',
      description: 'AI Assistant - Make Every Conversation More Efficient',
    },
  },
  bundler: viteBundler({}),
  head: [
    ['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    ['link', {rel: 'icon', type: 'image/svg+xml', href: '/chat-copilot-btn.svg'}],
    ['link', {rel: 'apple-touch-icon', href: '/chat-copilot-btn.png'}],
    ['meta', {name: 'algolia-site-verification', content: 'A6181A045989B31E'}],
  ],
  theme: recoTheme(themeConfig),
  // debug: true,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
        '/en/': {
          placeholder: 'Search docs',
        },
      },
    }),
  ],
});
