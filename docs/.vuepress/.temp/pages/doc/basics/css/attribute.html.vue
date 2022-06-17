<template><div><h1 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性" aria-hidden="true">#</a> 常用属性</h1>
<h2 id="水平对齐-只对块元素起作用" tabindex="-1"><a class="header-anchor" href="#水平对齐-只对块元素起作用" aria-hidden="true">#</a> 水平对齐（只对块元素起作用）</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">text-align</span><span class="token punctuation">:</span> left | right | center | justify | inherit<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">left</td>
<td style="text-align:left">左对齐</td>
</tr>
<tr>
<td style="text-align:left">right</td>
<td style="text-align:left">右对齐</td>
</tr>
<tr>
<td style="text-align:left">center</td>
<td style="text-align:left">水平居中</td>
</tr>
<tr>
<td style="text-align:left">justify</td>
<td style="text-align:left">两端对齐（一般字母和中文混合时使用）</td>
</tr>
</tbody>
</table>
<h2 id="行高" tabindex="-1"><a class="header-anchor" href="#行高" aria-hidden="true">#</a> 行高</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">line-height</span> <span class="token punctuation">:</span> 1<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>1、单行文本垂直居中（行高等于盒子的高度）</p>
<p>2、清除自带的行间距（行高等于字体的大小）</p>
<p>3、可以设置多行内容的行间距(行高和字体大小同时测量)</p>
</div>
<h2 id="线条修饰" tabindex="-1"><a class="header-anchor" href="#线条修饰" aria-hidden="true">#</a> 线条修饰</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> none | underline | line-through | blink | inherit<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">无修饰</td>
</tr>
<tr>
<td style="text-align:left">underline</td>
<td style="text-align:left">下划线</td>
</tr>
<tr>
<td style="text-align:left">overline</td>
<td style="text-align:left">上划线</td>
</tr>
<tr>
<td style="text-align:left">line-through</td>
<td style="text-align:left">删除线</td>
</tr>
</tbody>
</table>
<h2 id="首行缩进" tabindex="-1"><a class="header-anchor" href="#首行缩进" aria-hidden="true">#</a> 首行缩进</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>2em 为缩进2个字符<br>
首行缩进可以设置负值</p>
</div>
<h2 id="字间距" tabindex="-1"><a class="header-anchor" href="#字间距" aria-hidden="true">#</a> 字间距</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>字间距/词间距（英文空格的内容） <br>
定义字符间的固定空间（允许使用负值）</p>
</div>
<h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>4条边框</p>
<p>border：粗细 样式 颜色；</p>
</div>
<p><strong>单一的边框需要设置方向（3个值）</strong></p>
<p>border-top /
border-bottom /
border-left /
border-right</p>
<h3 id="取消边框" tabindex="-1"><a class="header-anchor" href="#取消边框" aria-hidden="true">#</a> 取消边框</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> none | 0<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="边框粗细" tabindex="-1"><a class="header-anchor" href="#边框粗细" aria-hidden="true">#</a> 边框粗细</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1个值</td>
<td style="text-align:left">四个方向</td>
</tr>
<tr>
<td style="text-align:left">2个值</td>
<td style="text-align:left">上下    左右</td>
</tr>
<tr>
<td style="text-align:left">3个值</td>
<td style="text-align:left">上   左右   下</td>
</tr>
<tr>
<td style="text-align:left">4个值</td>
<td style="text-align:left">上   右   下   左</td>
</tr>
</tbody>
</table>
<h3 id="边框样式" tabindex="-1"><a class="header-anchor" href="#边框样式" aria-hidden="true">#</a> 边框样式</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">border-style</span><span class="token punctuation">:</span> solid | dashed | dotted | double<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">solid</td>
<td style="text-align:left">实线</td>
</tr>
<tr>
<td style="text-align:left">dotted</td>
<td style="text-align:left">点线</td>
</tr>
<tr>
<td style="text-align:left">dashed</td>
<td style="text-align:left">虚线</td>
</tr>
<tr>
<td style="text-align:left">double</td>
<td style="text-align:left">双线</td>
</tr>
</tbody>
</table>
<h3 id="边框颜色" tabindex="-1"><a class="header-anchor" href="#边框颜色" aria-hidden="true">#</a> 边框颜色</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">border-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<h3 id="复合属性" tabindex="-1"><a class="header-anchor" href="#复合属性" aria-hidden="true">#</a> 复合属性</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">background</span><span class="token punctuation">:</span> bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- background: 要使用的背景颜色  背景图片  背景图像的位置/背景图片的大小(大小和位置必须在一块用/隔开）  如何重复背景图像  指定背景图像的定位区域  指定背景图像的绘画区域  设置背景图像是否固定或者随着页面的其余部分滚动  -->
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">示例</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">bg-color</td>
<td style="text-align:left">background-color:#fff</td>
<td style="text-align:left">背景颜色</td>
</tr>
<tr>
<td style="text-align:left">bg-image</td>
<td style="text-align:left">background-image: url(img.jpg)</td>
<td style="text-align:left">背景图片</td>
</tr>
<tr>
<td style="text-align:left">bg-position</td>
<td style="text-align:left">background-position: left(水平) top(垂直); <br>[[left(默认值),right,center],[top(默认值),bottom,center]]</td>
<td style="text-align:left">背景图片的位置</td>
</tr>
<tr>
<td style="text-align:left">bg-size</td>
<td style="text-align:left">background-size: 100px(水平) 100px(垂直); <br>{px:相对于盒子的位置,%:相对于图片的位置}</td>
<td style="text-align:left">背景图片的大小</td>
</tr>
<tr>
<td style="text-align:left">bg-repeat</td>
<td style="text-align:left">background-repeat: repeat; <br>[repeat(铺满,默认值),repeat-x(x轴铺满),repeat-y(y轴铺满),no-repeat(不平铺)]</td>
<td style="text-align:left">如何重复背景图像</td>
</tr>
<tr>
<td style="text-align:left">bg-origin</td>
<td style="text-align:left">background-origin: left top</td>
<td style="text-align:left">指定背景图像的定位区域</td>
</tr>
<tr>
<td style="text-align:left">bg-clip</td>
<td style="text-align:left">background-clip: content-box</td>
<td style="text-align:left">指定背景图像的绘画区域</td>
</tr>
<tr>
<td style="text-align:left">bg-attachment</td>
<td style="text-align:left">background-attachment: fixed;<br>[scroll(不固定,默认值),fixed(背景图片固定)]</td>
<td style="text-align:left">设置背景图像是否固定或者随着页面的其余部分滚动</td>
</tr>
</tbody>
</table>
<h2 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出" aria-hidden="true">#</a> 文本溢出</h2>
<table>
  <tr>
    <th>属性</th>
    <th>可选值</th>
    <th>功能</th>
  </tr>
  <tr>
    <th>white-space</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>normal</td>
          <td>默认效果（什么都没有）</td>
        </tr>
        <tr>
          <td>nowrap</td>
          <td>设置内容不换行，多个空格识别一个</td>
        </tr>
        <tr>
          <td>pre</td>
          <td>设置内容不换行，识别多个空格</td>
        </tr>
        <tr>
          <td>pre-line</td>
          <td>换行，多个空格识别一个，但是可以识别换行 </td>
        </tr>
        <tr>
          <td>inherit</td>
          <td>继承父元素的white-space </td>
        </tr>
      </table>
    </td>
    <td>设置空白空间 </td>
  </tr>
  <tr>
    <th>overflow</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>visible</td>
          <td>默认值</td>
        </tr>
        <tr>
          <td>hidden</td>
          <td>隐藏超出内容</td>
        </tr>
        <tr>
          <td>scroll</td>
          <td>内容会有滚动条（没有内容也有滚动条组件）</td>
        </tr>
        <tr>
          <td>auto</td>
          <td>超出才有滚动条 </td>
        </tr>
        <tr>
          <td>inherit</td>
          <td>继承父元素的overflow-space </td>
        </tr>
      </table>
    </td>
    <td>设置内容超出</td>
  </tr>
  <tr>
    <th>overflow-x</th>
    <td>
      同overflow
    </td>
    <td>设置单向滚动条(x轴)</td>
  </tr>
  <tr>
    <th>overflow-y</th>
    <td>
      同overflow
    </td>
    <td>设置单向滚动条(y轴)</td>
  </tr>
   <tr>
    <th>text-overflow</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>ellipsis</td>
          <td>变成省略号</td>
        </tr>
        <tr>
          <td>clip</td>
          <td>剪裁超出部分</td>
        </tr>
      </table>
    </td>
    <td>设置隐藏内容变成省略号</td>
  </tr>
</table>
<h3 id="设置单行文本溢出" tabindex="-1"><a class="header-anchor" href="#设置单行文本溢出" aria-hidden="true">#</a> 设置单行文本溢出</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> 
  <span class="token comment">/* 定义显示的范围（width）  */</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span> 
  <span class="token comment">/* 强制内容不换行，只识别一个空格 */</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token comment">/* 设置超出内容隐藏  */</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token comment">/* 设置隐藏文本转换成省略号 */</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看示例</summary>
<div class="el">单行文本溢出单行文本溢出单行文本溢出单行文本溢出</div>
</details>
<h3 id="设置多行文本溢出隐藏" tabindex="-1"><a class="header-anchor" href="#设置多行文本溢出隐藏" aria-hidden="true">#</a> 设置多行文本溢出隐藏</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> 
  <span class="token comment">/*  把内容转换成弹性盒子（老版本弹性盒）  */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token comment">/*  设置内容排列方式，垂直排列 */</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token comment">/* 设置内容隐藏的行数  */</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token comment">/* 把超出的内容隐藏 */</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看示例</summary>
<div class="el1">多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出</div>
</details>
<h2 id="元素类型" tabindex="-1"><a class="header-anchor" href="#元素类型" aria-hidden="true">#</a> 元素类型</h2>
<h3 id="块元素" tabindex="-1"><a class="header-anchor" href="#块元素" aria-hidden="true">#</a> 块元素</h3>
<div class="custom-container tip"><p class="custom-container-title">块元素</p>
<p>div / p / h1~h6 / ol / ul / li / dt / dd / form / hr / fieldset / legend / address / blockquote / figure / figcaption / details / summary</p>
</div>
<ol>
<li>可以自动换行、且独占一行</li>
<li>可以设置宽高</li>
<li>块元素可以包裹块元素和内联元素（p，h1~h6，dt特殊，嵌套内联）</li>
<li>块元素可以设置4个方向的padding和margin</li>
</ol>
<h3 id="内联元素" tabindex="-1"><a class="header-anchor" href="#内联元素" aria-hidden="true">#</a> 内联元素</h3>
<div class="custom-container tip"><p class="custom-container-title">内联元素</p>
<p>b / strong / i / em / s / a / span / br / sub / sup / u / code / time</p>
</div>
<ol>
<li>一行显示多个，识别不了宽高</li>
<li>宽高由内容撑开</li>
<li>内联只能嵌套内联</li>
<li>内联只能设置左右的padding和margin</li>
</ol>
<h3 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a> 行内块元素</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>img / input / select / textarea / button / label</p>
</div>
<ol>
<li>可以设置宽高</li>
<li>水平显示</li>
<li>行内块元素只能嵌套内联元素</li>
<li>可以设置4个方向的margin和padding</li>
</ol>
<h3 id="元素类型的转换" tabindex="-1"><a class="header-anchor" href="#元素类型的转换" aria-hidden="true">#</a> 元素类型的转换</h3>
<div class="custom-container tip"><p class="custom-container-title">display</p>
<p>转换元素类型</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">属性值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">block</td>
<td style="text-align:left">块元素</td>
</tr>
<tr>
<td style="text-align:left">inline</td>
<td style="text-align:left">内联元素</td>
</tr>
<tr>
<td style="text-align:left">inline-block</td>
<td style="text-align:left">行内块元素</td>
</tr>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">元素消失，不占位</td>
</tr>
<tr>
<td style="text-align:left">list-item</td>
<td style="text-align:left">li的display值</td>
</tr>
<tr>
<td style="text-align:left">flex</td>
<td style="text-align:left">弹性盒子</td>
</tr>
<tr>
<td style="text-align:left">grid</td>
<td style="text-align:left">网格</td>
</tr>
</tbody>
</table>
<h2 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>改变块元素的排列方式，让内容变成水平排列 <br></p>
<ol>
<li>浮动元素会脱离文档流，不占位，盒子会重叠，内容不重叠</li>
<li>如果想要内容都水平排列，需要所有的盒子都浮动</li>
<li>浮动的宽大于 父元素显示不下，就会掉下来第二行显示 <br>
<strong>浮动的不占位只会在同级之间产生（只往下影响，不影响上面的）</strong></li>
</ol>
</div>
<table>
  <tr>
    <th>属性</th>
    <th>可选值</th>
    <th>功能</th>
  </tr>
  <tr>
    <th>float</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>left</td>
          <td>左浮动</td>
        </tr>
        <tr>
          <td>right</td>
          <td>右浮动</td>
        </tr>
        <tr>
          <td>none</td>
          <td>不浮动</td>
        </tr>
      </table>
    </td>
    <td>元素浮动</td>
  </tr>
  <tr>
    <th>clear</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>left</td>
          <td>清除左浮动</td>
        </tr>
        <tr>
          <td>right</td>
          <td>清除右浮动</td>
        </tr>
        <tr>
          <td>both</td>
          <td>清除所有浮动</td>
        </tr>
      </table>
    </td>
    <td>清除浮动（往上清除）</td>
  </tr>
</table>
<p><strong>万能清除法</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.class::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">""</span> ；
  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素类型受浮动的影响" tabindex="-1"><a class="header-anchor" href="#元素类型受浮动的影响" aria-hidden="true">#</a> 元素类型受浮动的影响</h3>
<table>
<thead>
<tr>
<th style="text-align:left">元素类型</th>
<th style="text-align:left">影响效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">块元素</td>
<td style="text-align:left">不设置宽高的话，宽是父元素的宽，浮动以后宽度由内容撑开</td>
</tr>
<tr>
<td style="text-align:left">内联元素</td>
<td style="text-align:left">1. 可以设置宽高<br> 2. 可以设置4个方向的padding和margin<br> 3. 空格的间隙也能取消</td>
</tr>
</tbody>
</table>
<h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h2>
<div class="custom-container tip"><p class="custom-container-title">定位(position)</p>
<p>四个方向（top/right/bottom/left）
一个层级关系(z-index)</p>
</div>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">position</span><span class="token punctuation">:</span> absolute | relative | fixed | sticky | static<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">属性值</th>
<th style="text-align:left">功能</th>
<th style="text-align:left">详细信息</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">relative</td>
<td style="text-align:left">相对定位</td>
<td style="text-align:left">1. 元素占位 <br>2. 位置移动是相对于自己的原位置 <br>3. 相对定位可以使用定位触发5个属性</td>
</tr>
<tr>
<td style="text-align:left">absolute</td>
<td style="text-align:left">绝对定位</td>
<td style="text-align:left">1. 绝对定位不占位 <br>2. 绝对定位的位置先找有定位的父元素（包含块） <br> 3. 没有定位父元素找浏览器窗口为参照物 <br> 4. 绝对定位可以使用定位触发5个属性</td>
</tr>
<tr>
<td style="text-align:left">fixed</td>
<td style="text-align:left">固定定位</td>
<td style="text-align:left">1. 不占位 <br> 2. 始终以浏览器窗口为参照移动位置 <br> 3. 可以触发5个属性</td>
</tr>
<tr>
<td style="text-align:left">sticky</td>
<td style="text-align:left">可变定位(粘性定位)</td>
<td style="text-align:left">1. 不移动滚动条，内容占位，移动滚动条，内容不占位（固定类型） <br> 2. 默认不移动位置，划过内容，位置相对于浏览器 <br> 3. 必须设置移动位置（top/right/bottom/left）</td>
</tr>
<tr>
<td style="text-align:left">static</td>
<td style="text-align:left">静态定位(取消定位)</td>
<td style="text-align:left">设置static后，元素变成普通元素</td>
</tr>
</tbody>
</table>
<h2 id="宽高自适应" tabindex="-1"><a class="header-anchor" href="#宽高自适应" aria-hidden="true">#</a> 宽高自适应</h2>
<h3 id="宽度自适应" tabindex="-1"><a class="header-anchor" href="#宽度自适应" aria-hidden="true">#</a> 宽度自适应</h3>
<div class="custom-container tip"><p class="custom-container-title">宽度自适应(width)</p>
<ol>
<li>不设置宽度（元素类型不受不占位影响，不脱离文档流）</li>
<li>设置宽为100%（元素类型受不占位影响，浮动，固定定位，绝对定位）</li>
<li>cac（）函数  可以动态计算素质值</li>
</ol>
</div>
<h3 id="高度自适应" tabindex="-1"><a class="header-anchor" href="#高度自适应" aria-hidden="true">#</a> 高度自适应</h3>
<div class="custom-container tip"><p class="custom-container-title">高度自适应(height)</p>
<ol>
<li>不设置高（height：auto；）</li>
<li>最小高: <code v-pre>min-height: 100px;</code> 在内容不够最小高的时候识别最小高，内容超过最小高时高度自动被撑大 (IE5/6不识别min-height )</li>
<li>_ (过滤器): <code v-pre>_height: 100px;</code> 只有IE5/6识别</li>
</ol>
</div>
<h2 id="内容垂直居中" tabindex="-1"><a class="header-anchor" href="#内容垂直居中" aria-hidden="true">#</a> 内容垂直居中</h2>
<div class="custom-container tip"><p class="custom-container-title">内容垂直居中(vertical-align)</p>
<p>只能设置行内块元素，必须有参照物</p>
<ol>
<li>不设置（默认居中）</li>
<li>居中：<code v-pre>vertical-align: middle;</code></li>
<li>底部：<code v-pre>vertical-align: bottom;</code></li>
<li>顶部：<code v-pre>vertical-align: top;</code></li>
</ol>
</div>
<h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el2</span><span class="token punctuation">{</span>
  <span class="token comment">/* 设置元素为行内块元素  */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  vertical-align：middle
<span class="token punctuation">}</span>
<span class="token comment">/* 设置参照物  */</span>
<span class="token selector">span</span><span class="token punctuation">{</span> 
  display：inline-block； 
  vertical-align：middle； 
  height：100%； 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看示例</summary>
<div style="width:200px;height:200px;border:1px solid #000">
  <img class="el2" src="/logo/企鹅.png"/>
  <span class="sp"></span>
</div>
</details>
<h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>把内容转换成表格类型, 设置内容占满父元素, vertical-align也有效果<br>
父元素: <code v-pre>display:table;</code>
子元素: <code v-pre>display:table-cell;vertical-align:middle;height:100%;</code></p>
</div>
<details class="custom-container details"><summary>点击查看示例</summary>
<div style="width:200px;height:200px;border:1px solid #000;display:table;">
  <div style="display:table-cell;vertical-align:middle;height:100%;">
    <img style="width:100px;height:100px;" src="/logo/企鹅.png"/>
  </div>  
</div>
</details>
<h2 id="高度塌陷" tabindex="-1"><a class="header-anchor" href="#高度塌陷" aria-hidden="true">#</a> 高度塌陷</h2>
<div class="custom-container danger"><p class="custom-container-title">高度塌陷</p>
<p>父元素不设置高，或者设置最小高，高度由内容撑开，一旦内容浮动，父元素识别不了内容的高度，就会出现高度塌陷</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">解决方法</p>
<ol>
<li>高度塌陷父元素设置overflow: hidden;<br>
overflow可以触发BFC（一个独立渲染的区域，浮动元素也参与高度计算）</li>
<li>给浮动元素下加一个空盒子，清除浮动，把父元素撑开</li>
<li>万能清除法 <br>
给塌陷的父元素添加一个::after、 content必须有设置元素类型block, 清除浮动</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.class::after</span> <span class="token punctuation">{</span> 
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">""</span> ；
  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span> 
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h2>
<p>​	<em><strong>BFC是一个独立渲染的区域，规定块元素的布局规则（只有块元素才能参与）</strong></em></p>
<h3 id="布局规则" tabindex="-1"><a class="header-anchor" href="#布局规则" aria-hidden="true">#</a> 布局规则</h3>
<ol>
<li>块元素独占一行</li>
<li>同一个BFC，两个块元素上下margin会重叠</li>
<li>盒子左边的边框会和外边距接触</li>
<li>浮动区域和BFC区域不会重叠（自适应两栏布局）</li>
<li>每一个BFC区域都是独立的，相互之间不会影响</li>
<li>BFC计算高度时，浮动区域也参于高度计算</li>
</ol>
<h3 id="触发条件" tabindex="-1"><a class="header-anchor" href="#触发条件" aria-hidden="true">#</a> 触发条件</h3>
<ol>
<li>html（根元素）</li>
<li>浮动: left	right</li>
<li>定位: absolute（绝对定位）fixed（固定定位）</li>
<li>display: inline-block / table-cell / table-caption / flex（弹性盒）/ inline-flex（老版弹性盒）</li>
<li>overflow: hidden / scroll / auto</li>
</ol>
<h3 id="bfc解决的问题" tabindex="-1"><a class="header-anchor" href="#bfc解决的问题" aria-hidden="true">#</a> BFC解决的问题</h3>
<ol>
<li>浮动产生的高度塌陷（6规则，BFC计算高度时，浮动区域也参与计算）</li>
<li>自适应两栏布局（4规则，浮动区域和BFC区域不会重叠）</li>
<li>BFC解决margin的重叠问题（5规则，每一个BFC区域都是独立的，相互之间不影响）</li>
</ol>
</div></template>

<style>
.el{ 
  margin: 10px 0 0 0;
  width:200px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<style>
.el1{ 
  margin: 10px 0 0 0;
  width:200px; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>

<style>
  .el2{
  vertical-align:middle;
  width:100px;
  height:100px;
}
.sp{ 
  display:inline-block;
  vertical-align:middle;
  height:100%;
} 
</style>
