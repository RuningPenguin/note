<template><div><h1 id="vue-2-x" tabindex="-1"><a class="header-anchor" href="#vue-2-x" aria-hidden="true">#</a> VUE (2.X)</h1>
<p><a href="https://cn.vuejs.org" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>封装</strong>通常指一小部分通用业务逻辑，多个封装形成一个模块或者文件，多个模块或者文件就发展成为<strong>库</strong>或者<strong>框架</strong>，而<strong>插件</strong>是为库或者框架发布后做后期补充，可以有官网或者第三方提供的，有点外挂的意思，有时候一个模块就是一个文件，有时候一个文件里面有多个模块，把不同的文件按类别放置到不同的目录里，这个目录叫做<strong>包</strong>，框架改变了编码思想，库只是个工具你用或者不用不会影响你的编码思想</p>
</div>
<h2 id="前端mvc" tabindex="-1"><a class="header-anchor" href="#前端mvc" aria-hidden="true">#</a> 前端MVC</h2>
<p>对js分离，js业务如今比较繁杂</p>
<table>
<thead>
<tr>
<th>目录</th>
<th>分类</th>
<th>举例</th>
<th>复用</th>
</tr>
</thead>
<tbody>
<tr>
<td>model/xx.js</td>
<td>数据(M)</td>
<td>ajax/jsonp/数据解析</td>
<td>√</td>
</tr>
<tr>
<td>view/xx.js</td>
<td>视图(V)</td>
<td>展示数据、创建元素，变色，运动</td>
<td>√</td>
</tr>
<tr>
<td>control/xx.js</td>
<td>控制层(C)</td>
<td>串业务,事件驱动</td>
<td>×</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//M</span>
<span class="token keyword">function</span> <span class="token function">readBaidu</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span>拿着需求str<span class="token punctuation">,</span>求数据，调用回调带数据出去<span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token comment">//V</span>
<span class="token keyword">function</span> <span class="token function">writeLi</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span>拿着数据写页面<span class="token punctuation">}</span>
<span class="token comment">//C</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  oBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">readBaidu</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">writeLi</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      winObj<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>VUE是MVVM</strong>，M----V----VM，M数据，V视图, VM是负责M与V相互通信</p>
</div>
<h2 id="vue的使用" tabindex="-1"><a class="header-anchor" href="#vue的使用" aria-hidden="true">#</a> vue的使用</h2>
<p>vue的使用，简单理解，new出来一个Vue的实例，传一堆配置参数，控制一片html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    要被控制的html{{key}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span>  <span class="token comment">//要控制的那片html代码</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span>value<span class="token punctuation">}</span><span class="token comment">//数据  M</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">data</p>
<p>初始化数据位置，元数据，是vue实例的一个实例属性，所接受的数据类型，number/string/boolean/array/json/undefined/null</p>
</div>
<h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3>
<p><strong>插值表达式</strong></p>
<p><code v-pre>{{ 数据名 }}</code>	mustache语法   声明式渲染</p>
<p><strong>指令</strong></p>
<p><code v-pre>v-text=&quot;数据名&quot;</code></p>
<p><code v-pre>v-html=&quot;数据&quot;</code>	非转义输出(渲染html)</p>
<p><strong>属性</strong></p>
<p><code v-pre>v-bind:html属性=&quot;数据&quot;</code>	属性值动态化</p>
<p><code v-pre>:html属性=&quot;数据&quot;</code>  简写</p>
<p><code v-pre>v-bind:[属性名]=&quot;数据&quot;</code>	属性名动态化</p>
<h3 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h3>
<p>把数据指定到一些dom中去渲染，推荐操作的数据类型：变量数组、对象、字符、数字</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值 in 数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{值}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值 of 数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{值}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(值,索引) in 数组<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{值}}/{{索引}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(对象,索引) in/of 数组<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{对象.key}}/{{索引}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(值,键) in 对象<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(数,索引) in 数字<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(单字符,索引) in 字符<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>空数组，null，undefined不循环</p>
</blockquote>
</div></template>
