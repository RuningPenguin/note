<template><div><h4 id="设置内容隐藏" tabindex="-1"><a class="header-anchor" href="#设置内容隐藏" aria-hidden="true">#</a> 设置内容隐藏</h4>
<h3 id="占位隐藏" tabindex="-1"><a class="header-anchor" href="#占位隐藏" aria-hidden="true">#</a> 占位隐藏</h3>
<p>​					1，visibility：hidden；（占位隐藏）</p>
<p>​					2，opacity：0；</p>
<h3 id="完全隐藏-不占位" tabindex="-1"><a class="header-anchor" href="#完全隐藏-不占位" aria-hidden="true">#</a> 完全隐藏（不占位）</h3>
<p>​					display：none；</p>
<h3 id="透明度的区别" tabindex="-1"><a class="header-anchor" href="#透明度的区别" aria-hidden="true">#</a> 透明度的区别</h3>
<p>​					rgba（背景透明，内容不受影响）</p>
<p>​					opacity（背景内容一起透明）</p>
<h1 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h1>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2>
<p>​			使网页适应多种分辨率</p>
<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2>
<p>​			@media 设备 and （询问表达式） {</p>
<p>​						css语句</p>
<p>​			}</p>
<p>​			@media all and (min-width:1100px) {</p>
<p>​						body{</p>
<p>​								backgroun:#ccc;</p>
<p>​								}</p>
<p>​				}</p>
<h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2>
<p>​			all		所有设备</p>
<p>​			screen		pc、移动端</p>
<h2 id="定义横竖屏" tabindex="-1"><a class="header-anchor" href="#定义横竖屏" aria-hidden="true">#</a> 定义横竖屏</h2>
<p>​		orientation:portrait					竖屏</p>
<p>​		orientation:landscape				横屏</p>
<h1 id="图片整合" tabindex="-1"><a class="header-anchor" href="#图片整合" aria-hidden="true">#</a> 图片整合</h1>
<p>​	CSS Sprites / css精灵图 / 雪碧图</p>
<p>​	把网页里的小图片整合到大的背景图，通过背景插入的形式和核心属性background-position移动图片的位置，来显示部分图片的内容</p>
<p>​	好处:
​		减少图片对服务器的请求次数，可以提升网页的加载速度
​		也可以减少图片的体积</p>
<h1 id="改变鼠标指针" tabindex="-1"><a class="header-anchor" href="#改变鼠标指针" aria-hidden="true">#</a> 改变鼠标指针</h1>
<h2 id="cursor" tabindex="-1"><a class="header-anchor" href="#cursor" aria-hidden="true">#</a> cursor:</h2>
<p>​ pointer 小手</p>
<p>​ wait 加载</p>
<p>​ help 问号</p>
<p>​ text 文本输入光标</p>
<p>​ # 浏览器的前缀</p>
<p>​ IE -ms-</p>
<p>​ 谷歌和苹果 -webkit-</p>
<p>​ 火狐 -mzo-</p>
<p>​ 欧朋 -o-</p>
<h2 id="书写方法" tabindex="-1"><a class="header-anchor" href="#书写方法" aria-hidden="true">#</a> 书写方法</h2>
<p>​ 优雅降级（从大到小）</p>
<p>​ div{</p>
<p>​ transition:all 1s；</p>
<p>​ -webkit-transition:all 1s；</p>
<p>​ -o-transition:all 1s；</p>
<p>​ -moz-transition:all 1s；</p>
<p>​ }</p>
<p>​ 渐进增强（从小到大）</p>
<p>​ div{</p>
<p>​ -webkit-transition:all 1s；</p>
<p>​ -moz-transition:all 1s;</p>
<p>​ -o-transition:all 1s；</p>
<p>​ transition:all 1s；</p>
<p>​ }</p>
</div></template>
