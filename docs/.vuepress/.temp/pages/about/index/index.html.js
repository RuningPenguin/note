export const data = JSON.parse("{\"key\":\"v-3e734bd8\",\"path\":\"/about/index/\",\"title\":\"学习路线\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sidebar\":false,\"lang\":\"zh-CN\",\"title\":\"学习路线\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"wangxu\",\"email\":\"codeqie@163.com\",\"commits\":3}]},\"filePathRelative\":\"about/index/index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
