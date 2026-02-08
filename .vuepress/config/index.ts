import * as zhConfig from './zh'
import * as enConfig from './en'
import { RecoThemeData } from 'vuepress-theme-reco/lib/types'

export const themeConfig: RecoThemeData = {
  logo: '/chat-copilot-btn-light-1.svg',
  author: 'Chat Copilot Team',
  authorAvatar: '/head.png',
  catalogTitle: '页面导航',
  lastUpdatedText: '',
  primaryColor: '#3aa675',
  colorMode: 'auto',
  colorModeSwitch: true,
  socialLinks: [
    {icon: 'XIconGithub', link: 'https://github.com/hellolib/chat-copilot'},
  ],
  // Multi-language theme configuration
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      catalogTitle: '页面导航',
      tip: '提示',
      info: '信息',
      warning: '警告',
      danger: '危险',
      details: '详情',
      editLinkText: '编辑当前页面',
      notFound: '哇哦，没有发现这个页面！',
      backToHome: '返回首页',
    },
    '/en/': {
      selectLanguageName: 'English',
      navbar: enConfig.navbar,
      series: enConfig.series,
      catalogTitle: 'Catalog',
      tip: 'Tip',
      info: 'Info',
      warning: 'Warning',
      danger: 'Danger',
      details: 'Details',
      editLinkText: 'Edit this page',
      notFound: 'Not Found',
      backToHome: 'Back to Home',
    },
  },
}
