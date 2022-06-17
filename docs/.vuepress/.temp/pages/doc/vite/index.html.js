export const data = JSON.parse("{\"key\":\"v-8081b44a\",\"path\":\"/doc/vite/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1655449855000,\"contributors\":[{\"name\":\"wangxu\",\"email\":\"codeqie@163.com\",\"commits\":1}]},\"filePathRelative\":\"doc/vite/index.md\"}")

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
