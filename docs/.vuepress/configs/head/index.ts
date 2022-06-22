import type { HeadConfig } from '@vuepress/core'

export const Head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/note/logo/企鹅.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/note/logo/企鹅.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      href: `/note/logo/企鹅.png`,
    },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: `/note/logo/企鹅.png`,
      color: '#3eaf7c',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]