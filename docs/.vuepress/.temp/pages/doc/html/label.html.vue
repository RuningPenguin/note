<template><div><h1 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h1>
<h2 id="标签总结" tabindex="-1"><a class="header-anchor" href="#标签总结" aria-hidden="true">#</a> 标签总结</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>标签之间可以互相嵌套<br>
【注】换行标签(块元素)可以嵌套换行标签(块元素)和不换行标签(内联元素),没有自动换行的标签(内联元素)只能嵌套同类标签(内联元素)</p>
</div>
<h2 id="换行标签-块元素" tabindex="-1"><a class="header-anchor" href="#换行标签-块元素" aria-hidden="true">#</a> 换行标签（块元素）</h2>
<p><strong>标题标签：h1-h6</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>h1标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>h2标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>h3标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>h4标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>h5标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>h6标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>段落标签：p</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是一个段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>块元素标签：div</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>水平分割线 hr</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>强制换行 br</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="非换行标签-内联元素" tabindex="-1"><a class="header-anchor" href="#非换行标签-内联元素" aria-hidden="true">#</a> 非换行标签（内联元素）</h2>
<p><strong>加粗</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>倾斜</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下划线</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除线</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>上标</strong></em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>下标</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>文本节点标签</strong></em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>转义字符</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>      一个空格
<span class="token entity named-entity" title="&lt;">&amp;lt;</span>        大于号
<span class="token entity named-entity" title="&gt;">&amp;gt;</span>        小于号
<span class="token entity named-entity" title="&copy;">&amp;copy;</span>      版权信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表-块元素" tabindex="-1"><a class="header-anchor" href="#列表-块元素" aria-hidden="true">#</a> 列表 (块元素)</h2>
<p><strong>列表可以互相嵌套</strong></p>
<h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3>
<ul>
<li>ol和li<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span> 
  ... 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">属性：</p>
<p><strong>type</strong>可以改变排序的符号<br>
1,a,A,i,I <br>
<strong>start</strong>改变开始位置（从几开始）<br>
start=&quot;数字&quot;</p>
</div>
<h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3>
<ul>
<li>ul和li</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span> 
  ... 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">属性：</p>
<p><strong>去除列表的点    list-style:none</strong> <br>
<strong>type</strong>可以改变列表前排序的符号 <br>
disc        实心圆（默认） <br>
circle      空心圆 <br>
square      实心方块 <br></p>
</div>
<h3 id="自定义列表" tabindex="-1"><a class="header-anchor" href="#自定义列表" aria-hidden="true">#</a> 自定义列表</h3>
<ul>
<li>dl和dt、dd</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details">
<p>常用于商品展示和介绍
dt图片、dd文本</p>
</details>
<h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://网址<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新网页弹出方式<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>悬浮提示框<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">target</td>
<td style="text-align:left">_self   原网页覆盖 <br> _blank  新窗口打开</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">悬浮提示框（全局属性）</td>
</tr>
<tr>
<td style="text-align:left">href</td>
<td style="text-align:left">链接的网址或路径</td>
</tr>
</tbody>
</table>
<h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>同级文件    直接写文件名    ./ <br>
打开文件夹  文件夹名/ <br>
返回上一层  ../ <br></p>
</div>
<h3 id="链接本地网页" tabindex="-1"><a class="header-anchor" href="#链接本地网页" aria-hidden="true">#</a> 链接本地网页</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>网页路径<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载功能" tabindex="-1"><a class="header-anchor" href="#下载功能" aria-hidden="true">#</a> 下载功能</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文件路径（后缀名不是html）<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片的路径<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片替换的文本<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>悬浮提示框<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">图片的路径</td>
</tr>
<tr>
<td style="text-align:left">alt</td>
<td style="text-align:left">若图片加载错误显示的内容</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">悬浮提示框（全局属性）</td>
</tr>
</tbody>
</table>
<h3 id="网页常见图片" tabindex="-1"><a class="header-anchor" href="#网页常见图片" aria-hidden="true">#</a> 网页常见图片</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>.jpg        普通图片 <br>
.png        透明图片 <br>
.gif        动态图片 <br></p>
</div>
<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">></span></span>    表格的标题 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>声明表格 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>行 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>标题列 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>列 
    ... 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性-2" tabindex="-1"><a class="header-anchor" href="#属性-2" aria-hidden="true">#</a> 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">宽度</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">高度</td>
</tr>
<tr>
<td style="text-align:left">border</td>
<td style="text-align:left">边框</td>
</tr>
<tr>
<td style="text-align:left">cellpadding</td>
<td style="text-align:left">边框线与内容的距离</td>
</tr>
<tr>
<td style="text-align:left">cellspacing</td>
<td style="text-align:left">边框线与边框线的距离</td>
</tr>
<tr>
<td style="text-align:left">align</td>
<td style="text-align:left">对齐方式 <br> left        左对齐 <br> center        居中对齐 <br> right        右对齐</td>
</tr>
<tr>
<td style="text-align:left">valign(tr/rd)</td>
<td style="text-align:left">对齐方式 <br> top        顶部对齐 <br> middle        中部对齐 <br> bottom        底部对齐</td>
</tr>
<tr>
<td style="text-align:left">colspan(合并后需要删除多余单元格)</td>
<td style="text-align:left">合并列数</td>
</tr>
<tr>
<td style="text-align:left">rowspan(合并后需要删除多余单元格)</td>
<td style="text-align:left">合并行数</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>【注】单元格的宽度由内容决定，无内容想要宽度时需要给列设置宽度</p>
</div>
<h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性-3" tabindex="-1"><a class="header-anchor" href="#属性-3" aria-hidden="true">#</a> 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">action</td>
<td style="text-align:left">数据传输的地址</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">名字（传输数据时需要）</td>
</tr>
<tr>
<td style="text-align:left">method</td>
<td style="text-align:left">数据的传输方式</td>
</tr>
<tr>
<td style="text-align:left">get</td>
<td style="text-align:left">不安全，传输内容小</td>
</tr>
<tr>
<td style="text-align:left">post</td>
<td style="text-align:left">安全，内容不限制</td>
</tr>
</tbody>
</table>
<h2 id="表单控件" tabindex="-1"><a class="header-anchor" href="#表单控件" aria-hidden="true">#</a> 表单控件</h2>
<h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>默认值<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="属性-4" tabindex="-1"><a class="header-anchor" href="#属性-4" aria-hidden="true">#</a> 属性</h4>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">名字（传输数据时需要）</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">默认值</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">功能</td>
</tr>
<tr>
<td style="text-align:left">placeholder</td>
<td style="text-align:left">提示文本</td>
</tr>
</tbody>
</table>
<p><strong>type</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">text</td>
<td style="text-align:left">文本框</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">密码框</td>
</tr>
<tr>
<td style="text-align:left">submit</td>
<td style="text-align:left">提交按钮</td>
</tr>
<tr>
<td style="text-align:left">reset</td>
<td style="text-align:left">重置按钮</td>
</tr>
<tr>
<td style="text-align:left">button</td>
<td style="text-align:left">空按钮</td>
</tr>
<tr>
<td style="text-align:left">radio</td>
<td style="text-align:left">单选框</td>
</tr>
<tr>
<td style="text-align:left">checkbox</td>
<td style="text-align:left">多选框</td>
</tr>
<tr>
<td style="text-align:left">file</td>
<td style="text-align:left">上传文件</td>
</tr>
</tbody>
</table>
<h3 id="下拉列表" tabindex="-1"><a class="header-anchor" href="#下拉列表" aria-hidden="true">#</a> 下拉列表</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
​   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下拉菜单内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  ...
​  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性-5" tabindex="-1"><a class="header-anchor" href="#属性-5" aria-hidden="true">#</a> 属性</h4>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">名字（传输数据时需要）</td>
</tr>
<tr>
<td style="text-align:left">value(option)</td>
<td style="text-align:left">下拉列表提交的内容</td>
</tr>
<tr>
<td style="text-align:left">selected(option)</td>
<td style="text-align:left">默认选中</td>
</tr>
<tr>
<td style="text-align:left">disabled(option)</td>
<td style="text-align:left">禁用</td>
</tr>
</tbody>
</table>
<h3 id="文本域-textarea" tabindex="-1"><a class="header-anchor" href="#文本域-textarea" aria-hidden="true">#</a> 文本域（textarea）</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 取消文本域拖拽效果 */</span>
<span class="token selector">textarea</span><span class="token punctuation">{</span>
  <span class="token property">​resize</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token comment">/* 取消文本域拖拽效果*/</span>
  <span class="token property">outline</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token comment">/* 取消文本框点击激活蓝色边框的样式*/</span>			
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="属性-6" tabindex="-1"><a class="header-anchor" href="#属性-6" aria-hidden="true">#</a> 属性</h4>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">名字（传输数据时需要）</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">用户输入数据（占位）</td>
</tr>
<tr>
<td style="text-align:left">placeholder</td>
<td style="text-align:left">提示信息（不占位）</td>
</tr>
<tr>
<td style="text-align:left">maxlength</td>
<td style="text-align:left">控制用户输入的长度</td>
</tr>
</tbody>
</table>
<p>​</p>
<h2 id="扩充" tabindex="-1"><a class="header-anchor" href="#扩充" aria-hidden="true">#</a> 扩充</h2>
<h3 id="高级表格" tabindex="-1"><a class="header-anchor" href="#高级表格" aria-hidden="true">#</a> 高级表格</h3>
<p>​	table		表格	
​	caption	表格标题
​	tr				行
​	th				标题列
​	td				内容列</p>
<h4 id="表格自带属性" tabindex="-1"><a class="header-anchor" href="#表格自带属性" aria-hidden="true">#</a> 表格自带属性</h4>
<p>​		rule与特点的border属性冲突</p>
<p>​		rule：	
​				rows（行分割线）
​				cols（列分割线）
​				all（行分割线和列分割线）
​				none（没有线）</p>
<h4 id="数据行分组" tabindex="-1"><a class="header-anchor" href="#数据行分组" aria-hidden="true">#</a> 数据行分组</h4>
<p>​	thead		表格头部
​	tbody		表格内容
​	tfoot		表格尾部</p>
<h4 id="数据列分组" tabindex="-1"><a class="header-anchor" href="#数据列分组" aria-hidden="true">#</a> 数据列分组</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>col</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- ​		需要配合rules属性（rule="groups"） --></span>
<span class="token comment">&lt;!-- ​			通过span属性可以设置几列为一组 --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>(只能设置1列，多个默认span相加)

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>colgroup</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>colgroup</span><span class="token punctuation">></span></span>(可以设置多列)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<h4 id="表格属性-css" tabindex="-1"><a class="header-anchor" href="#表格属性-css" aria-hidden="true">#</a> 表格属性（css）</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">border-spacing</span><span class="token punctuation">:</span> cellspacing<span class="token punctuation">;</span>    <span class="token comment">/*单元格边框与边框的距离（cellspacing）*/</span>
  <span class="token property">​border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>      <span class="token comment">/*合并相邻的边框线*/</span>
  <span class="token property">​empty-cells</span><span class="token punctuation">:</span> hide<span class="token punctuation">;</span>              <span class="token comment">/*设置表格没有内容时隐藏（不能设置border-collaose）*/</span>
  <span class="token property">​table-layout</span><span class="token punctuation">:</span>
  ​   fixed                        <span class="token comment">/*固定表格宽，加快表格运行速度*/</span>
  ​   auto                         <span class="token comment">/*内容越多，宽度越大*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音视频插入" tabindex="-1"><a class="header-anchor" href="#音视频插入" aria-hidden="true">#</a> 音视频插入</h3>
<h4 id="视频-video" tabindex="-1"><a class="header-anchor" href="#视频-video" aria-hidden="true">#</a> 视频 	video</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>​		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>地址<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>支持的格式: ogg / MP4 / webm</p>
</div>
<h5 id="属性-7" tabindex="-1"><a class="header-anchor" href="#属性-7" aria-hidden="true">#</a> 属性</h5>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">视频路径</td>
</tr>
<tr>
<td style="text-align:left">controls</td>
<td style="text-align:left">播放控件（必须加）</td>
</tr>
<tr>
<td style="text-align:left">loop</td>
<td style="text-align:left">重复播放</td>
</tr>
<tr>
<td style="text-align:left">autoplay</td>
<td style="text-align:left">自动播放（IE支持，其他可能不支持）</td>
</tr>
<tr>
<td style="text-align:left">preload</td>
<td style="text-align:left">预加载</td>
</tr>
<tr>
<td style="text-align:left">muted</td>
<td style="text-align:left">静音</td>
</tr>
<tr>
<td style="text-align:left">poster</td>
<td style="text-align:left">视频播放前显示的图片（=&quot;图片路径&quot;）<br> 设置视频开头图片大小css object-fit：fill / cover;<br> fill	填满播放器窗口		cover	等比放大</td>
</tr>
</tbody>
</table>
<h4 id="音频audio" tabindex="-1"><a class="header-anchor" href="#音频audio" aria-hidden="true">#</a> 音频	audio</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>	&lt;audio src="音频地址”><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>支持的格式: mpeg（MP3） / ogg / wav	(.flac是无损格式音频，需要转换才能插入)</p>
</div>
<h5 id="属性-8" tabindex="-1"><a class="header-anchor" href="#属性-8" aria-hidden="true">#</a> 属性</h5>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">视频路径</td>
</tr>
<tr>
<td style="text-align:left">controls</td>
<td style="text-align:left">播放控件（必须加）</td>
</tr>
<tr>
<td style="text-align:left">loop</td>
<td style="text-align:left">重复播放</td>
</tr>
<tr>
<td style="text-align:left">autoplay</td>
<td style="text-align:left">自动播放（IE支持，其他可能不支持）</td>
</tr>
<tr>
<td style="text-align:left">preload</td>
<td style="text-align:left">预加载</td>
</tr>
<tr>
<td style="text-align:left">muted</td>
<td style="text-align:left">静音</td>
</tr>
</tbody>
</table>
<h4 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h4>
<div class="custom-container tip"><p class="custom-container-title">视频</p>
<p><code v-pre>&lt;video&gt;&lt;/video&gt;</code> 配合 <code v-pre>&lt;source&gt;&lt;/source&gt;</code> 分别插入3中不同格式的文件</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/ogg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">音频</p>
<p><code v-pre>&lt;audio&gt;&lt;/audio&gt;</code> 配合 <code v-pre>&lt;source&gt;&lt;/source&gt;</code> 分别插入3中不同格式的文件</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audios.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audios.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ogg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audios.wav<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
