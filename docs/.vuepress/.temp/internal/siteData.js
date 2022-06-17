export const siteData = JSON.parse("{\"base\":\"/note/\",\"lang\":\"zh-CN\",\"title\":\"企鹅的学习笔记\",\"description\":\"企鹅的学习笔记\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/logo/企鹅.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"32x32\",\"href\":\"/logo/企鹅.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\"}],[\"meta\",{\"name\":\"application-name\",\"content\":\"VuePress\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-title\",\"content\":\"VuePress\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/logo/企鹅.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/logo/企鹅.png\",\"color\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
