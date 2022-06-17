<template><div><h1 id="html基础" tabindex="-1"><a class="header-anchor" href="#html基础" aria-hidden="true">#</a> HTML基础</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>html：（Hyper Text Markup Language）超文本标记语言
xhtml：（EXtensible HyperText Markup Language）可扩展的超文本标记语言
html5：html的第5 个版本</p>
<h2 id="web的组成" tabindex="-1"><a class="header-anchor" href="#web的组成" aria-hidden="true">#</a> web的组成</h2>
<table>
<thead>
<tr>
<th style="text-align:center">组成</th>
<th></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">结构</td>
<td>html/xhtml</td>
<td>(W3C规范)   标记语言</td>
</tr>
<tr>
<td style="text-align:center">样式</td>
<td>css</td>
<td>(W3C规范)     样式表</td>
</tr>
<tr>
<td style="text-align:center">行为</td>
<td>javascript(js)</td>
<td>(ECAM规范)   脚本语言</td>
</tr>
</tbody>
</table>
<h2 id="项目的命名规范" tabindex="-1"><a class="header-anchor" href="#项目的命名规范" aria-hidden="true">#</a> 项目的命名规范</h2>
<div class="custom-container tip"><p class="custom-container-title">建议</p>
<p>字母、数字、下划线组成 <br>
不能使用中文，特殊字符和空格 <br>
开头最好小写 <br></p>
</div>
<h2 id="html基本语法" tabindex="-1"><a class="header-anchor" href="#html基本语法" aria-hidden="true">#</a> html基本语法</h2>
<p><strong>用尖括号 <code v-pre>&lt;&gt;</code> 包裹的英文单词叫做标记</strong></p>
<h2 id="标记分为两种" tabindex="-1"><a class="header-anchor" href="#标记分为两种" aria-hidden="true">#</a> 标记分为两种</h2>
<p>单标记(空标记)和双标记</p>
<ul>
<li>单标记: <code v-pre>&lt;标记名 属性=&quot;属性值&quot; 属性=&quot;属性值&quot;/&gt; </code></li>
<li>双标记: <code v-pre>&lt;标记名 属性=&quot;属性值&quot;&gt;&lt;/标记名&gt; </code></li>
</ul>
<h2 id="html的基本结构" tabindex="-1"><a class="header-anchor" href="#html的基本结构" aria-hidden="true">#</a> html的基本结构</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 声明文档类型为html --></span> 
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span> 
<span class="token comment">&lt;!-- 标记语言 --></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span> 
  <span class="token comment">&lt;!-- 网页的头部 --></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span> 
    <span class="token comment">&lt;!-- 设置编码类型为utf-8 --></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>网页名字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span> 

  <span class="token comment">&lt;!-- 网页的身体 --></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
