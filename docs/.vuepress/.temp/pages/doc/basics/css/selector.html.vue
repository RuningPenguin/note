<template><div><h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1>
<h2 id="类型选择符" tabindex="-1"><a class="header-anchor" href="#类型选择符" aria-hidden="true">#</a> 类型选择符</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>标记选择符/html选择器 <br>
选择标签名</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器(#)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>id名只可以存在一个，不可以重复使用 <br>
id用#表示</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">#box</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class选择器" tabindex="-1"><a class="header-anchor" href="#class选择器" aria-hidden="true">#</a> class选择器(.)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>可以存在多个<br>
class用.表示 <br>
<strong>【注】class名可以设置多个（用空格隔开）相同属性不同值，权重冲突，后面的权重值高</strong></p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
<span class="token selector">.size</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box size<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通配符选择器" tabindex="-1"><a class="header-anchor" href="#通配符选择器" aria-hidden="true">#</a> 通配符选择器(*)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>网页的所有内容（一般用来清除内容自带边距）</p>
</div>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span><span class="token string">"0"</span> <span class="token property">padding</span><span class="token punctuation">:</span><span class="token string">"0"</span><span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="群组选择器" tabindex="-1"><a class="header-anchor" href="#群组选择器" aria-hidden="true">#</a> 群组选择器(,)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>用逗号链接不同的内容 <br>
可以设置不同元素的相同样式</p>
</div>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.nav,#box</span><span class="token punctuation">{</span><span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="父子选择器-隔开" tabindex="-1"><a class="header-anchor" href="#父子选择器-隔开" aria-hidden="true">#</a> 父子选择器(&gt;隔开)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>父元素&gt;子元素</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.father > .son</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>father<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后代选择器-空格隔开" tabindex="-1"><a class="header-anchor" href="#后代选择器-空格隔开" aria-hidden="true">#</a> 后代选择器(空格隔开)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>只要是包含关系都可以</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.father span</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>father<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪类选择器-a" tabindex="-1"><a class="header-anchor" href="#伪类选择器-a" aria-hidden="true">#</a> 伪类选择器(a:)</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>想要a标签4个格式显示都正常必须按照顺序写 <br>
a:link--&gt;a:visited--&gt;a:hover--&gt;a:active</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:center">伪类名称</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">:link</td>
<td style="text-align:center">超链接初始状态（一般超链接使用）</td>
</tr>
<tr>
<td style="text-align:center">:visited</td>
<td style="text-align:center">超链接访问后状态（ 一般超链接使用）</td>
</tr>
<tr>
<td style="text-align:center">:hover</td>
<td style="text-align:center">鼠标移入状态</td>
</tr>
<tr>
<td style="text-align:center">:active</td>
<td style="text-align:center">鼠标点击状态</td>
</tr>
</tbody>
</table>
</div></template>
