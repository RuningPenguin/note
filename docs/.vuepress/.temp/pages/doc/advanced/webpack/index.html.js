export const data = JSON.parse("{\"key\":\"v-1f3e073f\",\"path\":\"/doc/advanced/webpack/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"wangxu\",\"email\":\"codeqie@163.com\",\"commits\":1}]},\"filePathRelative\":\"doc/advanced/webpack/index.md\"}")

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
