export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo/企鹅.png\",\"heroImageDark\":\"/logo/企鹅-b.png\",\"heroAlt\":\"图片\",\"heroText\":\"企鹅的学习笔记\",\"tagline\":\"记录你的高光时刻\",\"footer\":\"<div class=\\\"footer_wrap\\\">该网站仅做本人学习记录</div>\",\"footerHtml\":true,\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/about/index/\",\"type\":\"primary\"},{\"text\":\"关于企鹅\",\"link\":\"/about/qie/\",\"type\":null}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"wangxu\",\"email\":\"codeqie@163.com\",\"commits\":2}]},\"filePathRelative\":\"index.md\"}")

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
