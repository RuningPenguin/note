<template><div><div class="qie_info">
  <img class="img" src="/logo/企鹅.png"/>
  <div class="qie_right">
    <div class="name">奔跑的企鹅</div>
    <div class="tips">熬最深的夜，写最炫的代码</div>
  </div>
</div>
<h2 id="我掌握的技能" tabindex="-1"><a class="header-anchor" href="#我掌握的技能" aria-hidden="true">#</a> 我掌握的技能</h2>
<ul>
<li>熟悉 HTML，CSS，JavaScript，ES6、Ajax</li>
<li>熟悉 Vue 及周边工具链、uni-app、原生小程序</li>
<li>熟悉 Sass、Bootstrap、Swiper、axios、JQuery、Vant、Element UI、uView 等 第三方库</li>
<li>了解 Vue3、React、TypeScript、uniCloud、前端工程化</li>
<li>了解 Node.js、Express、MongoDB、MySQL</li>
</ul>
<h2 id="我的贡献" tabindex="-1"><a class="header-anchor" href="#我的贡献" aria-hidden="true">#</a> 我的贡献</h2>
<ul>
<li><a href="https://www.npmjs.com/package/qie-tools-h5" target="_black">qie-tools-h5</a></li>
<li><a href="https://www.npmjs.com/package/qie-tools-mini" target="_black">qie-tools-mini</a></li>
<li><a href="https://github.com/RuningPenguin" target="_black">RuningPenguin GitHub</a></li>
</ul>
<h2 id="我的业余生活" tabindex="-1"><a class="header-anchor" href="#我的业余生活" aria-hidden="true">#</a> 我的业余生活</h2>
<ul>
<li>吉他 🎸</li>
<li>篮球 🏀</li>
<li>机车 🏍️</li>
</ul>
<!-- https://www.w3school.com.cn/index.html
https://www.runoob.com/
https://www.ruanyifeng.com/ -->
</div></template>

<style scoped lang='scss'>
.qie_info {
  padding: 40px 0;
  display: flex;

  .img {
    width: 150px;
    height: 150px;
  }
  .qie_right {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .name {
      font-weight: 700;
      font-size: 36px;
    }

    .tips {
      color: #999;
      font-weight: 600;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 456px) {
  .qie_info {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .qie_right {
      margin: 0 !important;
    }
  }
}
</style>
