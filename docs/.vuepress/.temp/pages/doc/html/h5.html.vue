<template><div><h1 id="h5" tabindex="-1"><a class="header-anchor" href="#h5" aria-hidden="true">#</a> h5</h1>
<h2 id="语义化标签" tabindex="-1"><a class="header-anchor" href="#语义化标签" aria-hidden="true">#</a> 语义化标签</h2>
<table>
<thead>
<tr>
<th style="text-align:left">元素</th>
<th style="text-align:left">语义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">section</td>
<td style="text-align:left">元素 表示页面中的一个内容区块</td>
</tr>
<tr>
<td style="text-align:left">article</td>
<td style="text-align:left">元素 表示一块与上下文无关的独立的内容</td>
</tr>
<tr>
<td style="text-align:left">aside</td>
<td style="text-align:left">元素 在article之外的，与article内容相关的辅助信息</td>
</tr>
<tr>
<td style="text-align:left">header</td>
<td style="text-align:left">元素 表示页面中一个内容区块或整个页面的标题</td>
</tr>
<tr>
<td style="text-align:left">footer</td>
<td style="text-align:left">元素 表示页面中一个内容区块或整个页面的脚注</td>
</tr>
<tr>
<td style="text-align:left">nav</td>
<td style="text-align:left">元素 表示页面中导航链接部分</td>
</tr>
<tr>
<td style="text-align:left">figure</td>
<td style="text-align:left">元素 表示一段独立的内容，使用figcaption元素为其添加标题(第一个或最后一个子元素的位置)</td>
</tr>
<tr>
<td style="text-align:left">main</td>
<td style="text-align:left">元素 表示页面中的主要的内容(ie不兼容)</td>
</tr>
<tr>
<td style="text-align:left">hgroup</td>
<td style="text-align:left">标题的一个分组</td>
</tr>
<tr>
<td style="text-align:left">mark</td>
<td style="text-align:left">定义高亮显示的文本(span)</td>
</tr>
<tr>
<td style="text-align:left">time</td>
<td style="text-align:left">时间</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">块元素</p>
<p>section  、  article  、aside  、 header 、 footer 、 nav 、figure（自带外边距） 、 figcaption（自带外边距）、main 、hgroup</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">内联</p>
<p>mark 、time <br></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">结构内容分类</p>
<p>主体结构 ：  section 、article  、aside、 nav、time（内联，包裹时间）<br>
非主体结构：header、footer、hgroup  <br></p>
</div>
<h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>可以直接输出js脚本语言</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">oninput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x.value=parseInt(a.value)+parseInt(b.value)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>100+
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>=
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>output</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x<span class="token punctuation">"</span></span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>output</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点我预览</summary>
<form action="" oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  <input id="a" type="range" min="0" max="100">100+
  <input id="b" type="text" value="50">=
  <output name="x" for="a b"></output>
</form>
</details>
<h2 id="新增表单类型-type" tabindex="-1"><a class="header-anchor" href="#新增表单类型-type" aria-hidden="true">#</a> 新增表单类型(type)</h2>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">email</td>
<td style="text-align:left">邮箱</td>
</tr>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">网址</td>
</tr>
<tr>
<td style="text-align:left">range</td>
<td style="text-align:left">滑动条</td>
</tr>
<tr>
<td style="text-align:left">number</td>
<td style="text-align:left">数字</td>
</tr>
<tr>
<td style="text-align:left">search</td>
<td style="text-align:left">搜索框</td>
</tr>
<tr>
<td style="text-align:left">time</td>
<td style="text-align:left">时间</td>
</tr>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">颜色</td>
</tr>
</tbody>
</table>
<h2 id="验证的属性-标签" tabindex="-1"><a class="header-anchor" href="#验证的属性-标签" aria-hidden="true">#</a> 验证的属性（标签）</h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>required</td>
<td>验证表单内容不能为空（单属性）</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
</tr>
<tr>
<td>step</td>
<td>数字间隔，点击后没次增加几个数</td>
</tr>
<tr>
<td>autofocus</td>
<td>自动聚焦（光标默认在文本框）单属性</td>
</tr>
<tr>
<td>autocomplete</td>
<td>设置历史记录是否显示（on / off）默认打开，文本框提交数据必须有name</td>
</tr>
<tr>
<td>novalidata</td>
<td>取消整个表单的验证功能，（设置form）</td>
</tr>
<tr>
<td>pattern</td>
<td>可以直接设置正则表达式（自己定义规则，限制用户输入内容）<br>([0-9] [A-Za-z]{3}（0-*之间输入1个数大写A-Z或小写a-z一个输入3个）)</td>
</tr>
<tr>
<td>multiple</td>
<td>可以设置上传多个文件，也可以提交多个内容（，逗号隔开）</td>
</tr>
</tbody>
</table>
</div></template>
