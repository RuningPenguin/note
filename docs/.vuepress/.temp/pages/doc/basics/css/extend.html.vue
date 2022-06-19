<template><div><h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h1>
<h2 id="设置内容隐藏" tabindex="-1"><a class="header-anchor" href="#设置内容隐藏" aria-hidden="true">#</a> 设置内容隐藏</h2>
<h3 id="占位隐藏" tabindex="-1"><a class="header-anchor" href="#占位隐藏" aria-hidden="true">#</a> 占位隐藏</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全隐藏-不占位" tabindex="-1"><a class="header-anchor" href="#完全隐藏-不占位" aria-hidden="true">#</a> 完全隐藏（不占位）</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">透明度的区别</p>
<p>​<b>rgba</b>(背景透明，内容不受影响)</p>
<p><b>​opacity</b>(背景内容一起透明)</p>
</div>
<h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> <a href="https://www.runoob.com/cssref/css3-pr-mediaquery.html" target="_blank" rel="noopener noreferrer">媒体查询<ExternalLinkIcon/></a></h2>
<p><strong>使网页适应多种分辨率</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>​<span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span> <span class="token punctuation">(</span>mediafeature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  ​css语句
​<span class="token punctuation">}</span>
​<span class="token atrule"><span class="token rule">@media</span> all <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>1100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">​body</span><span class="token punctuation">{</span>
  ​  <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
  ​<span class="token punctuation">}</span>
​<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
  <thead>
    <tr>
      <th>属性</th>
      <th>值</th>
      <th>说明</th>
    </tr>
   </thead> 
    <tbody>
      <tr>
        <th rowspan="4">mediatype<br/>设备类型</th>
        <td>all</td>
        <td>所有设备</td>
      </tr>
      <tr>
        <td>screen</td>
        <td>pc、移动端</td>
      </tr>
      <tr>
        <td>print</td>
        <td>打印机和打印预览</td>
      </tr>
      <tr>
        <td>speech</td>
        <td>屏幕阅读器等发声设备</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <th rowspan="8">mediafeature<br/>表达式</th>
        <td>width</td>
        <td>屏幕宽度等于时</td>
      </tr>
      <tr>
        <td>min-width</td>
        <td>屏幕最小宽度等于时</td>
      </tr>
      <tr>
        <td>max-width</td>
        <td>屏幕最大宽度等于时</td>
      </tr>
      <tr>
        <td>height</td>
        <td>屏幕高度等于时</td>
      </tr>
      <tr>
        <td>min-height</td>
        <td>屏幕最小高度等于时</td>
      </tr>
      <tr>
        <td>max-height</td>
        <td>屏幕最大高度等于时</td>
      </tr>
      <tr>
        <td>orientation:portrait</td>
        <td>竖屏</td>
      </tr>
      <tr>
        <td>orientation:landscape</td>
        <td>横屏</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3" style="text-align: right;">
         <a href="https://www.runoob.com/cssref/css3-pr-mediaquery.html">更多规则</a>
        </th>
      </tr>
    </tfoot>
</table>
​			
<h2 id="图片整合" tabindex="-1"><a class="header-anchor" href="#图片整合" aria-hidden="true">#</a> 图片整合</h2>
<div class="custom-container tip"><p class="custom-container-title">图片整合<br/></p>
<p>​CSS Sprites / css精灵图 / 雪碧图<br/>
​把网页里的小图片整合到大的背景图，通过背景插入的形式和核心属性background-position移动图片的位置，来显示部分图片的内容<br/>
​好处:<br/>
​     减少图片对服务器的请求次数，可以提升网页的加载速度<br/>
​     也可以减少图片的体积<br/></p>
</div>
<h2 id="改变鼠标指针" tabindex="-1"><a class="header-anchor" href="#改变鼠标指针" aria-hidden="true">#</a> 改变鼠标指针</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">cursor</span><span class="token punctuation">:</span> pointer | wait | help | text | ... <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
  <tr>
    <th>值</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><i>url</i></td>
    <td>
      <p>需使用的自定义光标的 URL。</p>
      <p>注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。</p>
    </td>
  </tr>
  <tr>
    <td>default</td>
    <td>默认光标（通常是一个箭头）</td>
  </tr>
  <tr>
    <td>auto</td>
    <td>默认。浏览器设置的光标。</td>
  </tr>
  <tr>
    <td>crosshair</td>
    <td>光标呈现为十字线。</td>
  </tr>
  <tr>
    <td>pointer</td>
    <td>光标呈现为指示链接的指针（一只手）</td>
  </tr>
  <tr>
    <td>move</td>
    <td>此光标指示某对象可被移动。</td>
  </tr>
  <tr>
    <td>e-resize</td>
    <td>此光标指示矩形框的边缘可被向右（东）移动。</td>
  </tr>
  <tr>
    <td>ne-resize</td>
    <td>此光标指示矩形框的边缘可被向上及向右移动（北/东）。</td>
  </tr>
  <tr>
    <td>nw-resize</td>
    <td>此光标指示矩形框的边缘可被向上及向左移动（北/西）。</td>
  </tr>
  <tr>
    <td>n-resize</td>
    <td>此光标指示矩形框的边缘可被向上（北）移动。</td>
  </tr>
  <tr>
    <td>se-resize</td>
    <td>此光标指示矩形框的边缘可被向下及向右移动（南/东）。</td>
  </tr>
  <tr>
  <td>sw-resize</td>
  <td>此光标指示矩形框的边缘可被向下及向左移动（南/西）。</td>
  </tr>
  <tr>
    <td>s-resize</td>
    <td>此光标指示矩形框的边缘可被向下移动（南）。</td>
  </tr>
  <tr>
    <td>w-resize</td>
    <td>此光标指示矩形框的边缘可被向左移动（西）。</td>
  </tr>
  <tr>
    <td>text</td>
    <td>此光标指示文本。</td>
  </tr>
  <tr>
    <td>wait</td>
    <td>此光标指示程序正忙（通常是一只表或沙漏）。</td>
  </tr>
  <tr>
    <td>help</td>
    <td>此光标指示可用的帮助（通常是一个问号或一个气球）。</td>
  </tr>
</table>
<h2 id="浏览器相关" tabindex="-1"><a class="header-anchor" href="#浏览器相关" aria-hidden="true">#</a> 浏览器相关</h2>
<table>
<thead>
<tr>
<th style="text-align:left">浏览器</th>
<th style="text-align:left">浏览器引擎</th>
<th style="text-align:left">专属前缀</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">IE</td>
<td style="text-align:left">Trident</td>
<td style="text-align:left">-ms-</td>
</tr>
<tr>
<td style="text-align:left">Gecko</td>
<td style="text-align:left">火狐</td>
<td style="text-align:left">-moz-</td>
</tr>
<tr>
<td style="text-align:left">Webkit</td>
<td style="text-align:left">safari&amp;chrome（苹果和前谷歌）2013年前</td>
<td style="text-align:left">-webkit-</td>
</tr>
<tr>
<td style="text-align:left">Blink</td>
<td style="text-align:left">chrome&amp;Opera（谷歌和欧朋）</td>
<td style="text-align:left">-webkit-</td>
</tr>
<tr>
<td style="text-align:left">Presto</td>
<td style="text-align:left">Opera(欧朋前)</td>
<td style="text-align:left">-o-</td>
</tr>
</tbody>
</table>
<h3 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 优雅降级（从大到小） */</span>

<span class="token selector">​div</span> <span class="token punctuation">{</span>
  <span class="token property">​transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span>
  <span class="token property">​-webkit-transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span>
  <span class="token property">​-o-transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span>
  <span class="token property">​-moz-transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span>
​<span class="token punctuation">}</span>

<span class="token comment">/* ​ 渐进增强（从小到大） */</span>
<span class="token selector">​div</span> <span class="token punctuation">{</span>
  <span class="token property">​-webkit-transition</span><span class="token punctuation">:</span>all 1s<span class="token punctuation">;</span>
  <span class="token property">-moz-transition</span><span class="token punctuation">:</span>all 1s<span class="token punctuation">;</span>
  <span class="token property">​-o-transition</span><span class="token punctuation">:</span>all 1s<span class="token punctuation">;</span>
  <span class="token property">​transition</span><span class="token punctuation">:</span>all 1s<span class="token punctuation">;</span>
​<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动端相关" tabindex="-1"><a class="header-anchor" href="#移动端相关" aria-hidden="true">#</a> 移动端相关</h2>
<h3 id="移动端布局" tabindex="-1"><a class="header-anchor" href="#移动端布局" aria-hidden="true">#</a> 移动端布局</h3>
<ol>
<li>网格布局（栅格化布局）</li>
<li>百分比布局，弹性盒布局（弹性盒，rem单位）</li>
<li>等比缩放布局（vw和rem）</li>
</ol>
<h3 id="移动端的像素比设置" tabindex="-1"><a class="header-anchor" href="#移动端的像素比设置" aria-hidden="true">#</a> 移动端的像素比设置</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>​物理像素：ps测量的像素</p>
<p>​逻辑像素：屏幕上显示的大小</p>
<p>​移动端的像素比dpr=物理像素/逻辑像素</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">物理像素</th>
<th style="text-align:center">逻辑像素</th>
<th style="text-align:center">dpr</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">640 (iphone4/5)</td>
<td style="text-align:center">320</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:left">750  (iPhone6/7/8)</td>
<td style="text-align:center">375</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:left">1080  (ipad)</td>
<td style="text-align:center">414</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3>
<p><strong>设置Meta标签</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 
width = device-width：宽度等于当前设备的宽度
initial-scale： 初始的缩放比例（默认设置为1.0）
minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）
maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）
user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面） 
--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vm单位换算</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 
物理像素: 640px; 逻辑像素: 320px; dpr: 2;
320px 
  100vw=320px;
  1vw=3.2px
  100px/3.2px=31.25vw; 
*/</span>
<span class="token selector">html</span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>31.25vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>1rem<span class="token punctuation">;</span> <span class="token comment">/* 100px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">逻辑像素</th>
<th style="text-align:center">100px =&gt; vw</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">320px</td>
<td style="text-align:center">31.25vw</td>
</tr>
<tr>
<td style="text-align:left">375px</td>
<td style="text-align:center">26.66vw</td>
</tr>
<tr>
<td style="text-align:left">414px</td>
<td style="text-align:center">24.15vw</td>
</tr>
<tr>
<td style="text-align:left">768px</td>
<td style="text-align:center">13vw</td>
</tr>
<tr>
<td style="text-align:left">1024px</td>
<td style="text-align:center">9.76vw</td>
</tr>
</tbody>
</table>
<h2 id="奇怪现象" tabindex="-1"><a class="header-anchor" href="#奇怪现象" aria-hidden="true">#</a> 奇怪现象</h2>
<div class="custom-container tip"><p class="custom-container-title">图片边框（IE10及以下）</p>
<p>问题描述：超链接包裹图片，图片会出现边框</p>
<p>​解决方法: <code v-pre>img{border: 0;}</code></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">图片间隙（所有浏览器）</p>
<p>问题描述：块元素包裹图片（行内块）两个图片横着拍列也有间隙(图片下方会有3px左右的间隙)</p>
<p>解决方法：1. <code v-pre>img{display:block;}</code> 2. <code v-pre>img{vertical-align: top;}</code></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">IE双边距（IE6）</p>
<p>问题描述：盒子设置margin后第一个左边会出现双边距</p>
<p>​解决方法：块元素转换内联（加浮动后内联可以设置宽高）</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">IE默认高度（IE6及以下）</p>
<p>问题描述：IE5 / 6盒子的默认高度为16px，不识别小于16px的高度</p>
<p>​解决方法：给盒子<code v-pre>{font-size: 0px;}</code> 或 <code v-pre>{overflow: hidden;}</code></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">透明度（IE8及以下）</p>
<p>​问题描述：不识别<code v-pre>opacity</code></p>
<p>​解决方法：使用IE写法<code v-pre>filter: alpha（opacity=1~100整数）</code></p>
<p>​【注】opacity取值范围0~1, filter取值范围1~100整数, filter的opacity与值需要用=链接</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">表单元素对齐（所有浏览器）</p>
<p>​问题描述：text与submit（无value）有间隙，不对齐</p>
<p>​解决方法：加浮动</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">按钮大小（所有浏览器）</p>
<p>问题描述：按钮以怪异盒特性计算宽高</p>
<p>​解决方法：1，给按钮增加高度 或 2，转换盒子类型</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">文本框内容（IE8及以下）</p>
<p>​问题描述：text添加value后不是处置居中</p>
<p>​解决方法：设置<code v-pre>line-height</code></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">按钮边框（IE及以下）</p>
<p>问题描述：按钮会有双边框</p>
<p>​解决方法：取消按钮边框，其他标签嵌套按钮设置边框</p>
</div>
<p>​</p>
</div></template>
