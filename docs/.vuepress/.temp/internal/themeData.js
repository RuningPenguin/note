export const themeData = JSON.parse("{\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"logo\":\"/logo/企鹅.png\",\"logoDark\":\"/logo/企鹅-b.png\",\"repo\":\"https://github.com/RuningPenguin/note\",\"editLink\":false,\"docsBranch\":\"gh-pages\",\"lastUpdated\":false,\"navbar\":[],\"sidebar\":{\"/doc/basics/\":[{\"text\":\"HTML\",\"collapsible\":true,\"children\":[\"/doc/basics/html/html.md\",\"/doc/basics/html/label.md\",\"/doc/basics/html/h5.md\",\"/doc/basics/html/extend.md\"]},{\"text\":\"CSS\",\"collapsible\":true,\"children\":[\"/doc/basics/css/css.md\",\"/doc/basics/css/selector.md\",\"/doc/basics/css/weight.md\",\"/doc/basics/css/font.md\",\"/doc/basics/css/attribute.md\",\"/doc/basics/css/css3.md\",\"/doc/basics/css/animation.md\",\"/doc/basics/css/boxModel.md\",\"/doc/basics/css/extend.md\"]},{\"text\":\"JavaScript\",\"collapsible\":true,\"children\":[\"/doc/basics/js/js.md\",\"/doc/basics/js/core.md\",\"/doc/basics/js/advanced.md\",\"/doc/basics/js/eventLoop.md\",\"/doc/basics/js/extend.md\"]}],\"/doc/necessary/\":[{\"text\":\"Jquery\",\"collapsible\":true,\"children\":[\"/doc/necessary/jquery/jq.md\",\"/doc/necessary/jquery/extend.md\"]},{\"text\":\"Node.js\",\"collapsible\":true,\"children\":[\"/doc/necessary/node/node.md\"]}],\"/doc/frame/\":[{\"text\":\"VUE(3.X)\",\"collapsible\":true,\"children\":[\"/doc/frame/vue3/vue.md\"]}],\"/doc/advanced/\":[{\"text\":\"Gulp\",\"collapsible\":true,\"children\":[\"/doc/advanced/gulp/gulp.md\"]},{\"text\":\"Canvas\",\"collapsible\":true,\"children\":[\"/doc/advanced/canvas/canvas.md\"]}]},\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
