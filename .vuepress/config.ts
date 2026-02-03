import {defineUserConfig} from "vuepress";
import recoTheme from "vuepress-theme-reco";
import {viteBundler} from '@vuepress/bundler-vite'
import {webpackBundler} from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "Chat Copilot",
  lang: "zh-CN", // ✅ 关键：否则默认 en-US，DocSearch 会自动 facetFilters lang:en-US
  description: "AI 对话增强助手 - 让每一次 AI 对话都更高效",
  bundler: viteBundler({}),
  // bundler: webpackBundler(),
  head: [
    ['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    ['link', {rel: 'icon', type: 'image/svg+xml', href: '/chat-copilot-btn.svg'}],
    ['link', {rel: 'apple-touch-icon', href: '/chat-copilot-btn.png'}],
    ['meta', {name: 'algolia-site-verification', content: 'A6181A045989B31E'}],
  ],
  theme: recoTheme({
    logo: "/chat-copilot-btn.png",
    author: "Chat Copilot Team",
    authorAvatar: "/head.png",
    catalogTitle: '页面导航',
    // docsRepo: "https://github.com/hellolib/chat-copilot-doc",  // 使用说明：https://theme-reco.vuejs.press/docs/theme/git.html
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    primaryColor: '#3aa675',
    colorMode: 'auto', // dark, light, 默认 auto
    colorModeSwitch: true, // 是否展示颜色模式开关，默认 true
    // series 为原 sidebar
    series: {
      "/docs/guides/": [
        'introduce',
        'getting-started',
      ],
    },
    navbar: [
      {text: '首页', link: '/', icon: 'XIconHome'},
      {text: "文档", link: "/docs/guides/introduce.html", icon: 'XIconDoc',},
      {text: "反馈", link: "/docs/feedback/index.html", icon: "XFeedback",},
    ],
    socialLinks: [
      {icon: 'XIconGithub', link: 'https://github.com/hellolib/chat-copilot'}
    ],
    // 搜索
    algolia: {
      appId: '4WZZ9AP4J3',
      apiKey: '0f688f0dd86e421ac65442051a23a82e',
      indexName: 'chat-copilot-crawler',
      // inputSelector: '### REPLACE ME ####',
      // algoliaOptions: {'facetFilters': ["lang:$LANG"]},
      debug: false // Set debug to true if you want to inspect the dropdown
    },
  }),
});
