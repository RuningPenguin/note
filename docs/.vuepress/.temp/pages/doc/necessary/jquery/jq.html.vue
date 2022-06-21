<template><div><h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h1>
<p><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">jQuery官网<ExternalLinkIcon/></a>
<a href="http://jquery.cuishifeng.cn/" target="_blank" rel="noopener noreferrer">jQuery方法大全中文网<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li><code v-pre>jQuery</code>是一个前端库，也是一个方法库</li>
<li>里面封装了很多方法，直接拿来使用就可以</li>
<li>jQuery的优点
<ul>
<li>优质的选择器和筛选器</li>
<li>好用的隐式迭代</li>
<li>强大的链式编程：一行代码就可以解决</li>
</ul>
</li>
</ul>
</div>
<h2 id="选择器和筛选器" tabindex="-1"><a class="header-anchor" href="#选择器和筛选器" aria-hidden="true">#</a> 选择器和筛选器</h2>
<p><strong>都是用来帮我们获取DOM元素的</strong></p>
<h3 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 按照id获取页面中的元素</span>
<span class="token keyword">const</span> ele<span class="token operator">=</span><span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">"#box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ele<span class="token operator">=</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 按照类名获取页面中的元素,可以获取到一组元素</span>
<span class="token keyword">const</span> eles<span class="token operator">=</span><span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">".a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> eles<span class="token operator">=</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 按照标签名获取页面中的元素，可以获取到一组元素</span>
<span class="token keyword">const</span> lis<span class="token operator">=</span><span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lis<span class="token operator">=</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 按照选择器获取元素，可以获取到一组元素</span>
<span class="token keyword">const</span> eles<span class="token operator">=</span><span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">"ul>li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> eles<span class="token operator">=</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul>li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊选择器" tabindex="-1"><a class="header-anchor" href="#特殊选择器" aria-hidden="true">#</a> 特殊选择器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 直接找到第一个</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:first"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 直接找到最后一个</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:last"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 直接找到第几个</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:eq(3)"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 找到所有奇数个</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:odd"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 找到所有偶数个</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:even"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="筛选器" tabindex="-1"><a class="header-anchor" href="#筛选器" aria-hidden="true">#</a> 筛选器</h3>
<ul>
<li>jQuery的筛选器就是在选择器选择到一组元素之后，对元素进行筛选，也可以对准确的某一个元素进行判断和获取</li>
</ul>
<ol>
<li>first()  找到所有元素中的第一个</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>last()  找到所有元素中的最后一个</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>eq(索引)  表示某一个，按照索引排列</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul>li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>next()  找到某一个元素的下一个兄弟元素</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:eq(3)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>nextAll()  下面的所有兄弟元素</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul>li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul>li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextAll</span><span class="token punctuation">(</span><span class="token string">".box8"</span><span class="token punctuation">)</span> <span class="token comment">//找到后面所有兄弟元素中，类名为box8的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>nextUntil() 找到下面的所有兄弟元素，知道哪一个元素为止</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul>li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextUntil</span><span class="token punctuation">(</span><span class="token string">".box8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7">
<li>prev() 找到某一个元素的上一个兄弟元素</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:eq(3)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8">
<li>prevAll() 找到某一个元素的上面的所有兄弟元素</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:eq(3)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prevAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9">
<li>prevUntil() 找到上面的所有兄弟元素，知道哪一个元素为止</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'ul > span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prevUntil</span><span class="token punctuation">(</span><span class="token string">'.box3'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="10">
<li>parent() 获取父元素</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="11">
<li>parents() 找到某一个元素的所有结构父级，一直到html</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parents</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>parentsUntil() 按照结构父级获取所有的元素, 直到某一个元素为止</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"li:eq(3)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parentsUntil</span><span class="token punctuation">(</span><span class="token string">"html"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="13">
<li>siblings() 所有的兄弟元素，不包括自己</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="14">
<li>children() 所有的子元素</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="15">
<li>find() 按照指定的要求在元素集合里面进行查找</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="16">
<li>index() 获取该元素的索引，返回值是一个数字</li>
</ol>
<ul>
<li>注意：不管什么元素，只数是第几个元素</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.box3'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.box8'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery操作文本内容" tabindex="-1"><a class="header-anchor" href="#jquery操作文本内容" aria-hidden="true">#</a> jQuery操作文本内容</h2>
<h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html()</h3>
<ul>
<li>对应原生js里面的innerHTML</li>
<li>不传递参数的时候，就是获取元素的html结构</li>
<li>传递参数的时候，就是设置元素的html结构</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取元素的 html 结构</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置元素的 html 结构</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">'&lt;span>设置一个 span 标签&lt;/span>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text()</h3>
<ul>
<li>对应原生js里面的innerText</li>
<li>不传递参数的时候，就是获取元素的文本内容</li>
<li>传递参数的时候，就是设置元素的文本内容</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置元素的文本内容</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">'我是一段新来的文本内容'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="val" tabindex="-1"><a class="header-anchor" href="#val" aria-hidden="true">#</a> val()</h3>
<ul>
<li>对应原生js里面的value</li>
<li>不传递参数的时候，就是获取表单元素的value属性的值</li>
<li>传递参数的时候，就是设置表单元素的value属性的值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 设置表单元素的 value 值</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">'你好 世界'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery操作类名" tabindex="-1"><a class="header-anchor" href="#jquery操作类名" aria-hidden="true">#</a> jQuery操作类名</h2>
<p><strong>原先在原生js里面，操作类名使用className</strong></p>
<h3 id="addclass-添加类名" tabindex="-1"><a class="header-anchor" href="#addclass-添加类名" aria-hidden="true">#</a> addClass()  添加类名</h3>
<ul>
<li>jQuery元素集合.addClass（你要添加的类名）</li>
<li>只接收一个参数，不管多长，底层封装原理</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">'box1 box2'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="removeclass-移除类名" tabindex="-1"><a class="header-anchor" href="#removeclass-移除类名" aria-hidden="true">#</a> removeClass()  移除类名</h3>
<ul>
<li>jQuery元素集合.removeClass(你要移除的类名)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">'d box2'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="toggleclass-切换类名" tabindex="-1"><a class="header-anchor" href="#toggleclass-切换类名" aria-hidden="true">#</a> toggleClass()  切换类名</h3>
<ul>
<li>jQuery元素集合.toggleClass(你要切换的类名)</li>
<li>注意：</li>
<li>如果本身有这个类名，就是删除</li>
<li>如果本身没有类名，就是添加</li>
<li>就相当于开关，按钮，开了关，关了开</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="hasclass-判断有没有某一个类名" tabindex="-1"><a class="header-anchor" href="#hasclass-判断有没有某一个类名" aria-hidden="true">#</a> hasClass()  判断有没有某一个类名</h3>
<ul>
<li>jQuery元素集合.hasClass(你要判断的类名)</li>
<li>返回值是一个布尔值</li>
<li>注意：这个方法的后面不能继续链式编程</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="jquery操作样式" tabindex="-1"><a class="header-anchor" href="#jquery操作样式" aria-hidden="true">#</a> jQuery操作样式</h2>
<h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css()</h3>
<ul>
<li>能获取，能设置，能批量设置</li>
<li>通过传递不同的参数来达到不同的效果</li>
<li>传递一个参数，是一个字符串</li>
<li>获取元素的某一个样式</li>
<li>传递两个参数，第一个参数是样式名，第二个参数是样式值</li>
<li>给元素设置行内样式</li>
<li>你在书写样式值的时候，可以不写单位，默认会添加px为单位</li>
<li>传递一个参数，是一个对象数据类型</li>
<li>批量设置样式的</li>
<li>在对象内写好每一个样式名和样式值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//获取元素样式</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"width"</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"height"</span><span class="token punctuation">)</span>

<span class="token comment">//设置样式</span>
<span class="token comment">//$("div").css("background-color","skyblue")</span>
<span class="token comment">//$("div").css("width",500)</span>
<span class="token comment">//$("div").css("opacity",0.5)</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">"orange"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery操作属性" tabindex="-1"><a class="header-anchor" href="#jquery操作属性" aria-hidden="true">#</a> jQuery操作属性</h2>
<ul>
<li>在H5标准中，官方发布一个规范，当你书写自定义属性的时候写成data-xxx，用来专门做区分的，在标签上看一下就知道谁是自定义属性，谁不是</li>
<li>原生属性是用来修饰标签的</li>
<li>自定义属性使用在元素上记录一些内容</li>
</ul>
<h3 id="data-设置元素的属性和获取元素的属性" tabindex="-1"><a class="header-anchor" href="#data-设置元素的属性和获取元素的属性" aria-hidden="true">#</a> data()  设置元素的属性和获取元素的属性</h3>
<ul>
<li>获取</li>
<li>元素集合.data(你要获取的值)</li>
<li>可以获取元素身上记录的属性</li>
<li>也可以获取标签上预存储的 H5 标准自定义属性</li>
<li>你存储的时候是什么数据类型, 获取的时候还是什么数据类型</li>
<li>你要获取元素身上data-hello 的值</li>
<li>你就直接写 data('hello')</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 可以获取元素身上的 存储属性</span>
  <span class="token comment">// 也可以获取元素标签上预存储的 data-xxx 属性</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>设置：</li>
<li>只能设置在元素的身上, 不能显示在标签上</li>
<li>在元素身上记录一个数据使用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// 存储以后, 不会显示在标签上, 但是会存储在元素的身上</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 存储的数据是数值类型</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 存储的数据是布尔类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removedata-删除元素的属性" tabindex="-1"><a class="header-anchor" href="#removedata-删除元素的属性" aria-hidden="true">#</a> removeData() : 删除元素的属性</h3>
<ul>
<li>不能删除元素标签上的预存储属性</li>
<li>只能删除有 data 方法设置的属性</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeData</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeData</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="attr-用来设置和读取元素的属性" tabindex="-1"><a class="header-anchor" href="#attr-用来设置和读取元素的属性" aria-hidden="true">#</a> attr() 用来设置和读取元素的属性</h3>
<ul>
<li>获取: 元素集合.attr(属性名)</li>
<li>不管你设置的时候是什么数据类型</li>
<li>获取到的都是字符串</li>
<li>不适合存储复杂数据类型</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// attr() 获取属性值</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>设置：元素集合.attr(属性名, 属性值)</li>
<li>我设置的值是一个复杂数据类型</li>
<li>不管你设置的是什么数据类型, 他都会自动转换成字符串给你写在标签身上</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//attr() 设置属性</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jack'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>removeAttr(): 用来删除元素的属性的</li>
<li>删除: 元素集合.removeAttr(你要删除的属性)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// removeAttr() 删除</span>
 <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>
 <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
 <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">)</span>
 <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">'data-hello'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prop-用来设置和读取元素的属性" tabindex="-1"><a class="header-anchor" href="#prop-用来设置和读取元素的属性" aria-hidden="true">#</a> prop()  用来设置和读取元素的属性</h3>
<ul>
<li>
<p>获取：元素集合.prop(属性名, 属性值)</p>
<ul>
<li>你设置的时候是什么数据类型</li>
<li>你获取到的还是什么数据类型</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置：元素集合.prop(属性名, 属性值)</p>
<ul>
<li>只有真正的原生属性才会显示在标签上</li>
<li>一些非原生自带的属性, 不会显示在标签上, 但是能用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'box'</span><span class="token punctuation">)</span>
 <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>removeProp()</p>
</li>
<li>
<p>删除: 元素集合.removeProp(你要删除的属性名)</p>
</li>
<li>
<p>只能删除非纯原生属性, 对于 id class src ... 一些属性没有用</p>
</li>
<li>
<p>你用 attr 设置的非纯原生属性删不掉</p>
</li>
<li>
<p>能删除的只有 prop() 方法设置的非纯原生属性</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeProp</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="jquery的绑定事件" tabindex="-1"><a class="header-anchor" href="#jquery的绑定事件" aria-hidden="true">#</a> jQuery的绑定事件</h2>
<h3 id="on-用来给元素绑定事件的" tabindex="-1"><a class="header-anchor" href="#on-用来给元素绑定事件的" aria-hidden="true">#</a> on() 用来给元素绑定事件的</h3>
<ul>
<li>通过传递参数的不一样，可以绑定不一样的事件形式</li>
</ul>
<ol>
<li>传递一个参数：给一个元素绑定多个事件</li>
</ol>
<ul>
<li>参数一：必须是一个对象数据类型</li>
<li>可以写多个事件同时绑定</li>
<li>对象中的key就是事件类型</li>
<li>对象中的value就是事件处理函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 给 div 绑定三个事件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是点击事件'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">mouseover</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是鼠标移入事件'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">mouseout</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是鼠标移出事件'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>传递两个参数</li>
</ol>
<ul>
<li>参数一：事件类型</li>
<li>参数二：事件处理函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 给 div 绑定一个基本点击事件</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我被点击了'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>传递三个参数</li>
</ol>
<ul>
<li>参数一：事件类型</li>
<li>参数二：如果是字符串类型，表示事件委托</li>
<li>参数三：事件处理函数</li>
<li>on(&quot;click&quot;,&quot;li&quot;,()=&gt;{})</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 绑定一个事件委托的形式</span>
<span class="token comment">// 事件是绑定在 ul 身上</span>
<span class="token comment">// 但是只有点击 ul 里面的 li 才会触发</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'li'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你点击的是 li'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>传递三个参数</li>
</ol>
<ul>
<li>参数一: 事件类型</li>
<li>参数二: 是一个复杂数据类型, 表示这个是给事件处理函数的参数</li>
<li>参数三: 事件处理函数</li>
<li>on('click', 复杂数据类型, () =&gt; {})</li>
<li>在事件对象里面, 有一个 data 成员</li>
<li>这个 data 成员就是你写的第二个参数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> ul<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  e <span class="token operator">=</span> e <span class="token operator">||</span> widnow<span class="token punctuation">.</span>event
  <span class="token keyword">let</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token operator">||</span> e<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'LI'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你点击的是 li'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 给事件处理函数传递参数</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jack'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我被点击了'</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>传递四个参数</li>
</ol>
<ul>
<li>参数一：事件类型</li>
<li>参数二：事件委托</li>
<li>参数三：给事件处理函数传递的参数</li>
<li>参数四：事件处理函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件绑定在 ul 身上</span>
<span class="token comment">// 只有点击 ul 里面的 li 才能触发</span>
<span class="token comment">// { name: 'Rose' }, 每一个事件触发的时候, 给事件处理函数传递的参数</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'li'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Rose'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你点击的是 li'</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="one-绑定事件只能执行一次" tabindex="-1"><a class="header-anchor" href="#one-绑定事件只能执行一次" aria-hidden="true">#</a> one() 绑定事件只能执行一次</h3>
<ul>
<li>参数传递方式和参数类型和意义</li>
<li>都是和 on 方法一模一样</li>
<li>区别: 使用 one 方法绑定的事件只能执行一次, 就没有了</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">one</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我被点击了'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="off-解绑事件的" tabindex="-1"><a class="header-anchor" href="#off-解绑事件的" aria-hidden="true">#</a> off() 解绑事件的</h3>
<ol>
<li>传递一个参数</li>
</ol>
<ul>
<li>参数：事件类型</li>
<li>把这个事件类型的所有事件处理函数全部解绑</li>
<li>$('div').off('click')</li>
</ul>
<ol start="2">
<li>传递两个参数</li>
</ol>
<ul>
<li>参数一：事件类型</li>
<li>参数二：指定解绑哪一个事件处理函数</li>
<li>$('div').off('click', handlerA)</li>
</ul>
<h3 id="trigger-用来触发元素的事件的" tabindex="-1"><a class="header-anchor" href="#trigger-用来触发元素的事件的" aria-hidden="true">#</a> trigger() 用来触发元素的事件的</h3>
<ul>
<li>会把元素的这个事件给触发一次</li>
<li>以代码的形式来完成一次行为</li>
<li>$('div').trigger('click')</li>
</ul>
<h2 id="jquery的事件函数" tabindex="-1"><a class="header-anchor" href="#jquery的事件函数" aria-hidden="true">#</a> jQuery的事件函数</h2>
<ul>
<li>jQuery把一些常用的事件制作成了单独的函数</li>
<li>可以直接使用</li>
<li>click()  mouseover()....</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'点击事件触发'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>有一个非常特殊的事件</li>
</ul>
<h3 id="hover-事件" tabindex="-1"><a class="header-anchor" href="#hover-事件" aria-hidden="true">#</a> hover()事件</h3>
<ul>
<li>只有两个参数</li>
<li>参数一：鼠标移入的时候触发</li>
<li>参数二：鼠标移出的时候触发</li>
<li>注意：</li>
<li>如果只填写一个参数，就会在移入移出的时候都触发</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'移入'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'移出'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素操作" tabindex="-1"><a class="header-anchor" href="#元素操作" aria-hidden="true">#</a> 元素操作</h2>
<h3 id="创建元素" tabindex="-1"><a class="header-anchor" href="#创建元素" aria-hidden="true">#</a> 创建元素</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;div>&lt;/div>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="插入元素" tabindex="-1"><a class="header-anchor" href="#插入元素" aria-hidden="true">#</a> 插入元素</h3>
<ul>
<li>内部插入</li>
</ul>
<h4 id="append-向父节点的末尾追加一个子节点" tabindex="-1"><a class="header-anchor" href="#append-向父节点的末尾追加一个子节点" aria-hidden="true">#</a> append() 向父节点的末尾追加一个子节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 向 div 元素中插入一个 p 元素，放在最后</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="appendto-把一个子节点追加到父节点的末尾" tabindex="-1"><a class="header-anchor" href="#appendto-把一个子节点追加到父节点的末尾" aria-hidden="true">#</a> appendTo() 把一个子节点追加到父节点的末尾</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 把 p 元素插入到 div 中去，放在最后</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>hello&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prepend-向父节点的最前面添加一个子节点" tabindex="-1"><a class="header-anchor" href="#prepend-向父节点的最前面添加一个子节点" aria-hidden="true">#</a> prepend() 向父节点的最前面添加一个子节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 向 div 元素中插入一个 p 元素，放在最前</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prepend-把一个子节点添加到父节点的最前面" tabindex="-1"><a class="header-anchor" href="#prepend-把一个子节点添加到父节点的最前面" aria-hidden="true">#</a> prepend() 把一个子节点添加到父节点的最前面</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 把 p 元素插入到 div 中去，放在最前</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>hello&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prependTo</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>外部插入</li>
</ul>
<h4 id="after-在-固定节点-的后面插入一个-要插入的节点" tabindex="-1"><a class="header-anchor" href="#after-在-固定节点-的后面插入一个-要插入的节点" aria-hidden="true">#</a> after() 在 固定节点 的后面插入一个 要插入的节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在 div 的后面插入一个元素 p</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="insertafter-把要插入的节点-放在-固定节点-的后面" tabindex="-1"><a class="header-anchor" href="#insertafter-把要插入的节点-放在-固定节点-的后面" aria-hidden="true">#</a> insertAfter() 把要插入的节点 放在 固定节点 的后面</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// 在 div 的前面插入一个元素 p</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="before-在-固定节点-的前面插入一个-要插入的节点" tabindex="-1"><a class="header-anchor" href="#before-在-固定节点-的前面插入一个-要插入的节点" aria-hidden="true">#</a> before()  在 固定节点 的前面插入一个 要插入的节点</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 把 p 元素插入到 div 元素的后面</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="insertbefore-把要插入的节点-放在-固定节点-的前面" tabindex="-1"><a class="header-anchor" href="#insertbefore-把要插入的节点-放在-固定节点-的前面" aria-hidden="true">#</a> insertBefore() 把要插入的节点 放在 固定节点 的前面</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 把 p 元素插入到 div 元素的前面</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换元素" tabindex="-1"><a class="header-anchor" href="#替换元素" aria-hidden="true">#</a> 替换元素</h3>
<h4 id="replacewith-把旧节点替换成新节点" tabindex="-1"><a class="header-anchor" href="#replacewith-把旧节点替换成新节点" aria-hidden="true">#</a> replaceWith() 把旧节点替换成新节点</h4>
<ul>
<li>旧节点.replaceWith(新节点)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>我是新节点&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="replaceall-用新节点去替换旧节点" tabindex="-1"><a class="header-anchor" href="#replaceall-用新节点去替换旧节点" aria-hidden="true">#</a> replaceAll() 用新节点去替换旧节点</h4>
<ul>
<li>新节点.replaceAll(旧节点)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'&lt;p>我是新节点&lt;/p>'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除元素" tabindex="-1"><a class="header-anchor" href="#删除元素" aria-hidden="true">#</a> 删除元素</h3>
<h4 id="remove-把节点移出页面" tabindex="-1"><a class="header-anchor" href="#remove-把节点移出页面" aria-hidden="true">#</a> remove() 把节点移出页面</h4>
<ul>
<li>节点.remove()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="empty-把自己变成一个空标签" tabindex="-1"><a class="header-anchor" href="#empty-把自己变成一个空标签" aria-hidden="true">#</a> empty() 把自己变成一个空标签</h4>
<ul>
<li>节点.empty()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="克隆元素" tabindex="-1"><a class="header-anchor" href="#克隆元素" aria-hidden="true">#</a> 克隆元素</h3>
<h4 id="clone-克隆" tabindex="-1"><a class="header-anchor" href="#clone-克隆" aria-hidden="true">#</a> clone() 克隆</h4>
<ul>
<li>接收两个参数</li>
<li>参数一：自身的事件要不要复制，默认false不克隆</li>
<li>参数二：是否克隆子节点身上的事件，默认是true，默认跟随第一个参数</li>
<li>注意：</li>
<li>如果第一个参数是false，那么第二个参数没有意义</li>
<li>只有第一个参数是true，第二个参数才有意义</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父节点事件克隆, 子节点事件不克隆</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// 父节点事件不克隆, 子节点事件克隆, 没有意义</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//我就想要克隆一个 div , 不需要子节点</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jquery获取元素尺寸" tabindex="-1"><a class="header-anchor" href="#jquery获取元素尺寸" aria-hidden="true">#</a> jQuery获取元素尺寸</h3>
<ul>
<li>在 jQuery 里面, 获取元素尺寸, 三套方法, 四种使用方式</li>
</ul>
<p><strong>width() 和 height()  获取元素内容区域的尺寸</strong></p>
<p><strong>innerWidth() 和 innerHeight() 获取元素 内容区域 + padding 的尺寸</strong></p>
<p><strong>outerWidth() 和 outerHeight() 获取元素 内容区域 + padding + border 的尺寸</strong></p>
<p><strong>outerWidth(true) 和 outerHeight(true)  获取元素 内容区域 + padding + border + margin 的尺寸</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'width() : '</span> <span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'innerWidth() : '</span> <span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">innerWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'outerWidth() : '</span> <span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outerWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'outerWidth() : '</span> <span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outerWidth</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作元素位置关系" tabindex="-1"><a class="header-anchor" href="#操作元素位置关系" aria-hidden="true">#</a> 操作元素位置关系</h3>
<h4 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset()</h4>
<ul>
<li>是一个读写的属性</li>
<li>获取</li>
<li>语法: 元素集合.offset()</li>
<li>返回值: 是一个对象, 里面记录了两个信息, 左侧偏移量和上侧偏移量</li>
<li>获取的内容: 是一个绝对坐标内容
<ul>
<li>不管你用什么方法来移动盒子</li>
<li>获取到的都是距离文档流左上角的位置关系</li>
</ul>
</li>
<li>设置</li>
<li>语法: 元素集合.offset({ left: 偏移量, top: 偏移量 })</li>
<li>offset 的设置叫做绝对设置</li>
<li>不管你有没有定位, 不管你是什么样子</li>
<li>我都给你定位到距离文档流左上的的固定尺寸</li>
<li>注意:
<ul>
<li>如果你想给父子元素都通过 offset 方法设置位置关系</li>
<li>那么你必须要考虑先设置谁后设置谁</li>
<li>不同的书写顺序出现不同的位置关系</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position()</h4>
<ul>
<li>只读的方法</li>
<li>获取：</li>
<li>获取的就是元素的定位关系, 根据定位父级来的位置关系</li>
<li>语法: 元素集合.position()</li>
<li>返回值: 一个对象, 里面包含两个信息, 一个左边, 一个上边
<ul>
<li>不管你写的是上下左右, 都回给你计算成上边和左边</li>
</ul>
</li>
</ul>
<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>
<h3 id="标准动画" tabindex="-1"><a class="header-anchor" href="#标准动画" aria-hidden="true">#</a> 标准动画</h3>
<h4 id="show-显示动画" tabindex="-1"><a class="header-anchor" href="#show-显示动画" aria-hidden="true">#</a> show() 显示动画</h4>
<ul>
<li>语法: 元素集合.show(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'显示动画结束'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hide-隐藏动画" tabindex="-1"><a class="header-anchor" href="#hide-隐藏动画" aria-hidden="true">#</a> hide() 隐藏动画</h4>
<ul>
<li>语法: 元素集合.hide(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h4 id="toggle-切换动画" tabindex="-1"><a class="header-anchor" href="#toggle-切换动画" aria-hidden="true">#</a> toggle() 切换动画</h4>
<ul>
<li>语法: 元素集合.toggle(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h3 id="折叠动画" tabindex="-1"><a class="header-anchor" href="#折叠动画" aria-hidden="true">#</a> 折叠动画</h3>
<h4 id="slidedown-下拉显示" tabindex="-1"><a class="header-anchor" href="#slidedown-下拉显示" aria-hidden="true">#</a> slideDown() 下拉显示</h4>
<ul>
<li>语法: 元素集合.slideDown(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h3 id="slideup-上拉隐藏" tabindex="-1"><a class="header-anchor" href="#slideup-上拉隐藏" aria-hidden="true">#</a> slideUp() 上拉隐藏</h3>
<ul>
<li>语法: 元素集合.slideUp(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h4 id="slidetoggle-切换显示和隐藏" tabindex="-1"><a class="header-anchor" href="#slidetoggle-切换显示和隐藏" aria-hidden="true">#</a> slideToggle() 切换显示和隐藏</h4>
<ul>
<li>语法: 元素集合.slideToggle(时间, 运动曲线, 运动结束的回调函数)</li>
<li>默认只能从上到下的显示</li>
</ul>
<h3 id="渐隐渐显的动画-透明度" tabindex="-1"><a class="header-anchor" href="#渐隐渐显的动画-透明度" aria-hidden="true">#</a> 渐隐渐显的动画（透明度）</h3>
<h4 id="fadein-渐渐地显示" tabindex="-1"><a class="header-anchor" href="#fadein-渐渐地显示" aria-hidden="true">#</a> fadeIn() 渐渐地显示</h4>
<ul>
<li>语法: 元素集合.fadeIn(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h4 id="fadeout-渐渐地消失" tabindex="-1"><a class="header-anchor" href="#fadeout-渐渐地消失" aria-hidden="true">#</a> fadeOut() 渐渐地消失</h4>
<ul>
<li>语法: 元素集合.fadeOut(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h4 id="fadetoggle-渐渐地切换" tabindex="-1"><a class="header-anchor" href="#fadetoggle-渐渐地切换" aria-hidden="true">#</a> fadeToggle() 渐渐地切换</h4>
<ul>
<li>语法: 元素集合.fadeToggle(时间, 运动曲线, 运动结束的回调函数)</li>
</ul>
<h4 id="fadeto-运动到一个指定的透明度" tabindex="-1"><a class="header-anchor" href="#fadeto-运动到一个指定的透明度" aria-hidden="true">#</a> fadeTo() 运动到一个指定的透明度</h4>
<ul>
<li>语法: 元素集合.fadeTo(时间, 指定透明度, 运动曲线, 运动结束的回调函数)</li>
<li>注意：运动到指定透明度以后，就改不回来了</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeTo</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'运动到了指定的透明度'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token comment">// 有一个 style 的设置, style.opacity = 0.5</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="综合动画" tabindex="-1"><a class="header-anchor" href="#综合动画" aria-hidden="true">#</a> 综合动画</h3>
<h4 id="animate" tabindex="-1"><a class="header-anchor" href="#animate" aria-hidden="true">#</a> animate()</h4>
<ul>
<li>语法: animate(要运动的属性, 时间, 运动曲线, 运动结束的回调函数)</li>
<li>要运动的属性, 是一个对象</li>
<li>里面按照 css 书写</li>
<li>能做大部分属性的动画</li>
<li>注意：</li>
<li>颜色运动不了，transform运动不了</li>
<li>没有中间值的运动不了</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 要运动的属性</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">'50%'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'pink'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">'rotate(45deg)'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里是让物体，先向左，再向下</span>
      <span class="token comment">// $('div').animate({ top: 300 }, 1000)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="终止动画" tabindex="-1"><a class="header-anchor" href="#终止动画" aria-hidden="true">#</a> 终止动画</h3>
<h4 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> stop()</h4>
<ul>
<li>当这个函数触发的时候，不管你运动到了什么地步</li>
<li>直接停在当前位置</li>
</ul>
<h4 id="finish" tabindex="-1"><a class="header-anchor" href="#finish" aria-hidden="true">#</a> finish()</h4>
<ul>
<li>当这个函数触发时，不管你运动到什么地步</li>
<li>直接完成当前这个动画，瞬间定位到完成状态</li>
</ul>
<h2 id="jquery的ajax" tabindex="-1"><a class="header-anchor" href="#jquery的ajax" aria-hidden="true">#</a> jQuery的ajax</h2>
<ul>
<li>发送ajax是一个语言行为，并不依赖DOM结构来操作</li>
<li>语法：$.xxx()</li>
<li>代表我使用的是jQuery的方法</li>
<li>jQuery里面的ajax方法-promise</li>
<li>使用的时候，可以写success回调接受结果</li>
<li>也可以写then和catch接受结果</li>
</ul>
<h3 id="ajax-以及参数" tabindex="-1"><a class="header-anchor" href="#ajax-以及参数" aria-hidden="true">#</a> $.ajax()以及参数</h3>
<ul>
<li>接受一个参数，是一个对象</li>
</ul>
<table>
<thead>
<tr>
<th>参数名</th>
<th>参数类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>string</td>
<td>请求的地址, <strong>必填</strong></td>
</tr>
<tr>
<td>type / method</td>
<td>string</td>
<td>请求方式, 默认是get</td>
</tr>
<tr>
<td>data</td>
<td>string/object</td>
<td>请求的数据, 默认是空对象 ,可以写成字符串(a=10)</td>
</tr>
<tr>
<td>async</td>
<td>boolean</td>
<td>是否异步, 默认true</td>
</tr>
<tr>
<td>dataType</td>
<td>string</td>
<td>选填， 默认<strong>string</strong>，表示不解析 <br/><strong>json</strong>，表示解析json格式字符串<br/><strong>xml</strong>，表示解析xml格式字符串</td>
</tr>
<tr>
<td>cache</td>
<td>string</td>
<td>选填，表示是否缓存，默认是true, 不缓存：_=时间戳</td>
</tr>
<tr>
<td>timeout</td>
<td>number</td>
<td>选填, 表示超时时间</td>
</tr>
<tr>
<td>context</td>
<td>object</td>
<td>选填, 回调函数内部的this指向<br/>你填写的什么, 回调函数里面的this就是什么<br/>不填写: 默认是jQuery封装的ajax对象</td>
</tr>
<tr>
<td>success</td>
<td>function</td>
<td>成功的回调函数</td>
</tr>
<tr>
<td>error</td>
<td>function</td>
<td>失败的回调函数(假设请求成功了, 但是后台返回的不是一个 json 格式的字符串, 你的 datTYpe 写的又是 json，会出现解析失败)</td>
</tr>
</tbody>
</table>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> $.get()</h3>
<ul>
<li>接受四个参数：</li>
<li>参数一：<strong>url，必填</strong></li>
<li>参数二：data携带给后端的数据，选填</li>
<li>参数三：success成功的回调，选填</li>
<li>参数四：dataType是否解析返回值，选填</li>
</ul>
<h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> $.post()</h3>
<ul>
<li>接受四个参数：</li>
<li>参数一：<strong>url，必填</strong></li>
<li>参数二：data携带给后端的数据，选填</li>
<li>参数三：success成功的回调，选填</li>
<li>参数四：dataType是否解析返回值，选填</li>
</ul>
<h3 id="promise形式的ajax" tabindex="-1"><a class="header-anchor" href="#promise形式的ajax" aria-hidden="true">#</a> promise形式的ajax</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./server/post.php'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">'world'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">'json'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  <span class="token comment">//成功时，要做的事情</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jquery解决跨域" tabindex="-1"><a class="header-anchor" href="#jquery解决跨域" aria-hidden="true">#</a> jQuery解决跨域</h2>
<h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> jsonp</h3>
<ul>
<li>必须把dataType=&quot;jsonp&quot;</li>
<li>就会发送一个jsonp的请求</li>
<li>jQuery发送jsonp请求默认是不缓存的</li>
<li>cache默认是false</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://127.0.0.1:80/server/jsonp.php'</span><span class="token punctuation">,</span>
<span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">'jsonp'</span><span class="token punctuation">,</span>
<span class="token literal-property property">jsonp</span><span class="token operator">:</span> <span class="token string">'cb'</span><span class="token punctuation">,</span> <span class="token comment">// 传递参数的时候, 我的 cb 这一项是表示我的准备好的函数名</span>
<span class="token literal-property property">jsonpCallback</span><span class="token operator">:</span> <span class="token string">'fn'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我被调用了'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> cors</h3>
<ul>
<li>只要后台开启了跨域资源共享
-我们直接请求</li>
</ul>
<h3 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h3>
<ul>
<li>照常配置代理</li>
<li>url位置写成代理标识符</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ajax请求</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/gx'</span><span class="token punctuation">,</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">'json'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// post请求</span>
$<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/gx'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'json'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="钩子函数" tabindex="-1"><a class="header-anchor" href="#钩子函数" aria-hidden="true">#</a> 钩子函数</h2>
<ul>
<li>是ajax的生命周期函数</li>
<li>在一个完整的ajax过程之中，在不同的步骤触发的函数</li>
<li>可以定义一个ajax</li>
<li>在ajax发送之前触发一个函数</li>
<li>在ajax成功以后触发一个函数</li>
</ul>
<h3 id="ajaxstart-第一个ajax发送之前触发" tabindex="-1"><a class="header-anchor" href="#ajaxstart-第一个ajax发送之前触发" aria-hidden="true">#</a> ajaxStart：第一个ajax发送之前触发</h3>
<ul>
<li>$(window).ajaxStart(function(){})</li>
<li>在同一个作用域下，若干个ajax发送的时候</li>
<li>第一个ajax发送之前触发</li>
</ul>
<h3 id="ajaxsend-每一个请求发送之前触发" tabindex="-1"><a class="header-anchor" href="#ajaxsend-每一个请求发送之前触发" aria-hidden="true">#</a> ajaxSend：每一个请求发送之前触发</h3>
<ul>
<li>$(window).ajaxSend(function(){})</li>
<li>在每一个ajax请求发送之前触发</li>
<li>只要有一个ajax要准备发送出去了，就会触发一边这个函数</li>
</ul>
<h3 id="ajaxsuccess-有一个请求成功触发" tabindex="-1"><a class="header-anchor" href="#ajaxsuccess-有一个请求成功触发" aria-hidden="true">#</a> ajaxSuccess：有一个请求成功触发</h3>
<ul>
<li>$(window).ajaxSuccess(function(){})</li>
<li>只要有一个ajax请求成功了，就会触发</li>
<li>失败的时候不会触发</li>
</ul>
<h3 id="ajaxerror-有一个失败就会触发" tabindex="-1"><a class="header-anchor" href="#ajaxerror-有一个失败就会触发" aria-hidden="true">#</a> ajaxError：有一个失败就会触发</h3>
<ul>
<li>$(window).ajaxError(function(){})</li>
<li>只要有一个失败就会触发</li>
<li>成功的时候不会触发</li>
</ul>
<h3 id="ajaxcomplete-有一个请求完成了触发" tabindex="-1"><a class="header-anchor" href="#ajaxcomplete-有一个请求完成了触发" aria-hidden="true">#</a> ajaxComplete：有一个请求完成了触发</h3>
<ul>
<li>$(window).ajaxComplete(function(){})</li>
<li>只要有一个ajax请求完成了就会触发</li>
<li>不管成功还是失败，只要完成了就触发</li>
</ul>
<h3 id="ajaxstop-最后一个完成以后触发" tabindex="-1"><a class="header-anchor" href="#ajaxstop-最后一个完成以后触发" aria-hidden="true">#</a> ajaxStop：最后一个完成以后触发</h3>
<ul>
<li>$(window).ajaxStop(function(){})</li>
<li>当前作用域下，最后一个ajax完成以后触发</li>
</ul>
<table>
<thead>
<tr>
<th>全局函数类型</th>
<th>何时被触发</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>ajaxStart</td>
<td>在jQuery AJAX函数或命令发起时，但在XHR实例被创建之前</td>
<td>类型被设置为ajaxStart的全局回调信息对象</td>
</tr>
<tr>
<td>ajaxSend</td>
<td>在XHR实例被创建之后，但在XHR实例被发送给服务器之前</td>
<td>类型被设置为ajaxSend的全局回调信息对象；XHR实例；$.ajax()函数使用的属性</td>
</tr>
<tr>
<td>ajaxSuccess</td>
<td>在请求已从服务器返回之后，并且响应包含成功状态码</td>
<td>类型被设置为ajaxSuccess的全局回调信息对象；XHR实例；$.ajax()函数使用的属性</td>
</tr>
<tr>
<td>ajaxError</td>
<td>在请求已从服务器返回之后，并且响应包含失败状态码</td>
<td>类型被设置为ajaxError的全局回调信息对象；XHR实例；$.ajax()函数使用的属性；被XHR实例返回的异常对象(如果有的话)</td>
</tr>
<tr>
<td>ajaxComplete</td>
<td>在请求已从服务器返回之后，并且在任何已声名的ajaxSuccess或ajaxError回调函数已被调用之后</td>
<td>类型被设置为ajaxComplete的全局回调信息对象；XHR实例；$.ajax()函数使用的属性</td>
</tr>
<tr>
<td>ajaxStop</td>
<td>在所有其他AJAX处理完成以及任何其他适用的全局回调函数已被调用之后</td>
<td>类型被设置为ajaxStop的全局回调信息对象</td>
</tr>
</tbody>
</table>
</div></template>
