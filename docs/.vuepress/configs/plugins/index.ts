import { searchPlugin } from '@vuepress/plugin-search';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export const Plugins = [
  searchPlugin({
    locales: { '/': { placeholder: '搜索文档' } },
    isSearchable: (page) => page.path !== '/', // 排除首页
    // getExtraFields: (page) => page.frontmatter.tags ?? [],// 允许搜索 Frontmatter 中的 `tags`
  })
]