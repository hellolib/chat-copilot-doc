import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "Chat Copilot",
  description: "AI 对话增强助手 - 让每一次 AI 对话都更高效",
  bundler: viteBundler({}),
  // bundler: webpackBundler(),
  head: [
    [
      'link',{ rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  theme: recoTheme({
    logo: "/chat-copilot-btn.png",
    author: "Chat Copilot Team",
    authorAvatar: "/head.png",
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
        // {
        //   text: "快速开始",
        //   icon: "IconGithub",
        //   // children: ["home", "theme"],
        //   link: "/docs/index/",
        //   // target: "_self",
        // },
        // {
        //   text: "module two",
        //   children: ["api", "plugin"],
        // },
      ],
    },
    navbar: [
      // { text: '首页', link: '/', icon: 'IconHome' },
      { text: '首页', link: '/', icon: 'XIconHome' },
      // { text: "Categories", link: "/categories/reco/1.html" },
      // { text: "Tags", link: "/tags/tag1/1.html" },
      {
        text: "文档", link: "/docs/guides/introduce",icon: 'XIconDoc',
        // children: [
        //   { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
        //   { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        // ],
      },
    ],
    socialLinks: [
      { icon: 'XIconGithub', link: 'https://github.com/hellolib/chat-copilot' }
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // 搜索
    algolia: {
      appId: 'XPCAI451RB',
      apiKey: '1bdb5f5749ac2ec90dd52047cd19ecc6',
      indexName: 'chat-copilot-algolia-index',
      inputSelector: '### REPLACE ME ####',
      algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),

  // debug: true,
});
