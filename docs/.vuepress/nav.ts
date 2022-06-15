
import { defaultTheme } from '@vuepress/theme-default';


export default defaultTheme({
  logo: 'https://vuejs.org/images/logo.png',
  // repo: 'https://github.com/',
  sidebar: 'auto', // 侧边栏
  editLink: false, // 是否启用 编辑此页 链接
  navbar: [
    {
      text: 'vue3', link: '/vue3/'
    }
  ]
})

