<template><div><h1 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础" aria-hidden="true">#</a> css基础</h1>
<h2 id="语法-选择器和声明" tabindex="-1"><a class="header-anchor" href="#语法-选择器和声明" aria-hidden="true">#</a> 语法（选择器和声明）</h2>
<div class="custom-container tip"><p class="custom-container-title">语法</p>
<p>选择器{ 属性：值； 属性：值；}</p>
</div>
<h2 id="css创建方式-css样式表" tabindex="-1"><a class="header-anchor" href="#css创建方式-css样式表" aria-hidden="true">#</a> css创建方式（css样式表）</h2>
<h3 id="内部样式表" tabindex="-1"><a class="header-anchor" href="#内部样式表" aria-hidden="true">#</a> 内部样式表</h3>
<p><strong>在<code v-pre>&lt;head&gt;</code>内加style标签</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"> 
<span class="token selector">p</span> <span class="token punctuation">{</span> 
  <span class="token property">color</span> <span class="token punctuation">:</span> blue <span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
 </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部样式表" tabindex="-1"><a class="header-anchor" href="#外部样式表" aria-hidden="true">#</a> 外部样式表</h3>
<p><strong>创建css文件   link导入外部css文件</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>  <span class="token attr-name">rel</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>  <span class="token attr-name">href</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>css/style.css<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="外部导入样式表" tabindex="-1"><a class="header-anchor" href="#外部导入样式表" aria-hidden="true">#</a> 外部导入样式表</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 创建css文件  --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"> 
 <span class="token atrule"><span class="token rule">@import</span>  url <span class="token punctuation">(</span> css/style.css <span class="token punctuation">)</span><span class="token punctuation">;</span></span> 
 </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联样式表" tabindex="-1"><a class="header-anchor" href="#内联样式表" aria-hidden="true">#</a> 内联样式表</h3>
<p><strong>在标签内直接设置style</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span>  <span class="token special-attr"><span class="token attr-name">style</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>yellow</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">@import和link的区别</p>
<p>1、link是标签，@import是css提供的一种方式 <br>
2、link同时加载html和css <br>
3、@import先加载html后加载css <br>
4、link的兼容性好，@import要IE5以上才能支持 <br>
5、link可以支持js的dom，@import不支持<br></p>
</div>
</div></template>
