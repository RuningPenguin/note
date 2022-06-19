import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { Head, NavBar, SideBar, Plugins } from './configs'
// import { webpackBundler } from '@vuepress/bundler-webpack'
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  base: "/note/", // 目录前缀
  lang: 'zh-CN', // 语言
  head: Head,
  title: '企鹅的学习笔记', // 站点标题
  description: '企鹅的学习笔记', // 站点描述
  theme: defaultTheme({  // 主题配置
    tip: '提示',
    warning: '注意',
    danger: '警告',
    logo: '/logo/企鹅.png',
    logoDark: '/logo/企鹅-b.png',
    repo: 'https://github.com/RuningPenguin/note',
    editLink: false, // 是否启用 编辑此页 链接
    docsBranch: "gh-pages",
    lastUpdated: false, // 是否显示最后更新时间
    navbar: NavBar,
    sidebar: SideBar, // 侧边栏
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
  plugins: Plugins, // 插件
})