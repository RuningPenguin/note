import type { SidebarConfig } from '@vuepress/theme-default';

export const SideBar: SidebarConfig = {
  '/doc/basics/': [
    {
      text: 'HTML',
      collapsible: true,
      children: [
        '/doc/basics/html/html.md',
        '/doc/basics/html/label.md',
        '/doc/basics/html/h5.md',
        '/doc/basics/html/extend.md',
      ]
    },
    {
      text: 'CSS',
      collapsible: true,
      children: [
        '/doc/basics/css/css.md',
        '/doc/basics/css/selector.md',
        '/doc/basics/css/weight.md',
        '/doc/basics/css/font.md',
        '/doc/basics/css/attribute.md',
        '/doc/basics/css/css3.md',
        '/doc/basics/css/animation.md',
        '/doc/basics/css/boxModel.md',
      ]
    },
    {
      text: 'js',
      collapsible: true,
      children: [
      ]
    }
  ]

}