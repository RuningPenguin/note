<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> VUE</h1>
<h3 id="vue是mvc" tabindex="-1"><a class="header-anchor" href="#vue是mvc" aria-hidden="true">#</a> vue是MVC？</h3>
<p>MVC衍生出很多变体，MVP,MVVM,MV*, <strong>VUE是MVVM</strong>，M----V----VM，M数据，V视图, VM是负责M与V相互通信</p>
<h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2>
<p><a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noopener noreferrer">HbuilderX<ExternalLinkIcon/></a></p>
<p>软件自动引入依赖</p>
<p>手动引入依赖</p>
<h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> hello world</h2>
<p>vue的使用，简单理解，new出来一个Vue的实例，传一堆配置参数，控制一片html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  V
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data选项" tabindex="-1"><a class="header-anchor" href="#data选项" aria-hidden="true">#</a> data选项</h2>
<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2>
<p>一段dom可以根据数据有条件的渲染，使用指令<code v-pre>v-show</code>，或者<code v-pre>v-if</code>,对应的值是布尔</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>v-show</code> VS <code v-pre>v-if</code></p>
<table>
<thead>
<tr>
<th></th>
<th>v-show=&quot;布尔&quot;</th>
<th>v-if=&quot;布尔&quot;</th>
</tr>
</thead>
<tbody>
<tr>
<td>区别</td>
<td>操作css</td>
<td>操作dom</td>
</tr>
<tr>
<td>场景</td>
<td>适合频繁切换</td>
<td>适合不频繁切换</td>
</tr>
<tr>
<td>性能消耗</td>
<td>初始渲染消耗</td>
<td>频繁切换消耗</td>
</tr>
</tbody>
</table>
<h2 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h2>
<p>vue通过<code v-pre>v-on</code>指令绑定事件，处理函数，需要丢到一个<code v-pre>methods</code>选项当中去</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;button v-on:不带on的元生事件名="方法"..
&lt;button	@事件名="方法"	...
&lt;button	@事件名="方法(参数)" .....
&lt;button	@事件名="方法($event,参数)"	.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>事件名 不带on</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function-variable function">方法</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ev<span class="token punctuation">,</span>参数</span><span class="token punctuation">)</span><span class="token punctuation">{</span>业务<span class="token punctuation">}</span>
    <span class="token function">方法2</span><span class="token punctuation">(</span><span class="token parameter">ev<span class="token punctuation">,</span>参数</span><span class="token punctuation">)</span><span class="token punctuation">{</span>业务<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>ev 事件对象，参数可以有多个</p>
<p><strong>注意</strong>：vue提供的选项的值如果是函数时，不可用箭头函数  , 会造成this丢失</p>
</blockquote>
<h2 id="双向绑定" tabindex="-1"><a class="header-anchor" href="#双向绑定" aria-hidden="true">#</a> 双向绑定</h2>
<p>视图控制数据，数据也可控制视图,可通过属性+事件绑定实现，也可以使用系统指令<code v-pre>v-model</code>,这个指令可以用在能生产数据的表单元素上</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data数据<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkIptValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h2 id="类和实例api" tabindex="-1"><a class="header-anchor" href="#类和实例api" aria-hidden="true">#</a> 类和实例API</h2>
<p>Vue 是个类，所以Vue.protoname，是类属性|静态属性，Vue.methodname()是类方法|静态方法，new Vue返回的是实例，所以vm.$protoname是实例属性，vm.$methodname()是实例方法,同时vue类内部的this指向的是实例vm，实例vm.$protoname对等vue选项的key</p>
<h2 id="非响应式情况" tabindex="-1"><a class="header-anchor" href="#非响应式情况" aria-hidden="true">#</a> 非响应式情况</h2>
<p><strong>情况要发生</strong></p>
<ul>
<li>对数组使用了 非变异 (non-mutating method) 方法（返回的了新数组）</li>
<li>修改数组的长度时</li>
<li>修改数组索引上的值（根索引)</li>
<li>给对象添加了不存在的属性</li>
</ul>
<p><strong>问题还是要解决</strong></p>
<p>Vue.set(数组, index, value)</p>
<p>vm|this.$set(对象, key, value)</p>
<p>this.$forceUpdate()  强制刷新</p>
<p>this|vm.$mount('...')</p>
<p><strong>吃亏后的经验</strong></p>
<p>不要修改数组的根键,不要修改数组的长度,数据一开始都要声明在data选项内部，不要对数组使用非变异的api</p>
<h2 id="key的问题" tabindex="-1"><a class="header-anchor" href="#key的问题" aria-hidden="true">#</a> key的问题</h2>
<p>给指定循环的dom一个key 是数据的id，确保key唯一性，避免数据错乱导致的视图问题,同时提供性能优化</p>
<h2 id="模板表达式" tabindex="-1"><a class="header-anchor" href="#模板表达式" aria-hidden="true">#</a> 模板表达式</h2>
<p>在dom里面插入数据，数据周围可以出现表达式，但不是语句，如<code v-pre>{{ 数据 + 表达式 }}</code>	<code v-pre>v-指令=&quot;数据+表达式&quot;</code></p>
<p>表达式:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>title <span class="token operator">+</span> <span class="token string">'abc'</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">呵呵哒</span><span class="token template-punctuation string">`</span></span> 
bl <span class="token operator">?</span> <span class="token string">'处'</span> <span class="token operator">:</span> <span class="token string">'非处'</span>
<span class="token string">'i love you'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2>
<p>是一个函数,所依赖的元数据变化时，会再次执行，平时会缓存，是响应式的，需要在模板中渲染才可调用</p>
<p><strong>语法</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//定义</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function-variable function">计算属性</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> 返回值<span class="token punctuation">}</span>		
<span class="token punctuation">}</span>

<span class="token comment">//使用</span>
<span class="token literal-property property">使用</span><span class="token operator">:</span>	<span class="token punctuation">{</span><span class="token punctuation">{</span>计算属性<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">|</span>  v<span class="token operator">-</span>指令<span class="token operator">=</span><span class="token string">"计算属性"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>computed	VS 	method</strong></p>
<table>
<thead>
<tr>
<th>method</th>
<th>computed</th>
</tr>
</thead>
<tbody>
<tr>
<td>方法会每次调用</td>
<td>基于它们的响应式依赖进行缓存的</td>
</tr>
<tr>
<td>一般</td>
<td>性能高</td>
</tr>
<tr>
<td>{{ methodname() }}</td>
<td>{{ computedname }}</td>
</tr>
<tr>
<td>适合强制执行和渲染</td>
<td>适合做筛选</td>
</tr>
</tbody>
</table>
<p><strong>作业</strong></p>
<p>vue+bootstrap实现留言板</p>
<p>读<a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">官方教程<ExternalLinkIcon/></a>，只看课堂上讲过的，没讲的不要纠结</p>
<h2 id="复习文档" tabindex="-1"><a class="header-anchor" href="#复习文档" aria-hidden="true">#</a> 复习文档</h2>
<p>[官方</p>
<p>教程](https://cn.vuejs.org/v2/guide/)</p>
<p>多vue实例控制多片html</p>
<p>计算属性的getter/setter</p>
<p>template元素</p>
<p>​	包裹元素,有逻辑，自身不渲染</p>
<p>if	+	v-else-if	+	v-else</p>
<p>双向绑定选择框</p>
<h2 id="属性检测" tabindex="-1"><a class="header-anchor" href="#属性检测" aria-hidden="true">#</a> 属性检测</h2>
<p>需要在数据变化时执行异步或开销较大的操作时，而计算属性是同步的，这个时候需要属性检测watch</p>
<p>定义一个选项</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">数据名</span><span class="token operator">:</span><span class="token string">'method函数名'</span>    <span class="token comment">//数据名==data的key</span>
  <span class="token literal-property property">数据名</span><span class="token operator">:</span><span class="token function">函数体</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">,</span>old<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token literal-property property">数据名</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">handler</span><span class="token operator">:</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">new</span><span class="token punctuation">,</span>old</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//深度检测</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//首次运行</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>计算属性 VS 函数 VS 属性检测</strong></p>
<table>
<thead>
<tr>
<th></th>
<th>计算属性</th>
<th>函数</th>
<th>属性检测</th>
</tr>
</thead>
<tbody>
<tr>
<td>依赖模板调用</td>
<td>√</td>
<td>-</td>
<td>×</td>
</tr>
<tr>
<td>是否缓存</td>
<td>√</td>
<td>×</td>
<td>√</td>
</tr>
<tr>
<td>异步</td>
<td>×</td>
<td>√</td>
<td>√</td>
</tr>
</tbody>
</table>
<h2 id="样式操作" tabindex="-1"><a class="header-anchor" href="#样式操作" aria-hidden="true">#</a> 样式操作</h2>
<p>操作样式，就是属性绑定，只不过绑定的属性是class和style</p>
<p><strong>绑定姿势</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据|属性|变量|表达式<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据|属性|变量|表达式<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据|属性|变量|表达式<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据|属性|变量|表达式<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>属性值的类型支持</strong></p>
<p>字符/对象 / 数组</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active t1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>active t1<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{active:true,t1:false}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{css属性名:值},{<span class="token punctuation">'</span>xx-xx-xx<span class="token punctuation">'</span>：值}]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2>
<p>扩展了html语法功能,区别了普通的html属性，vue系统自带了指令，也可自定义指令来扩展，所有系统指令在官方文档的<a href="https://cn.vuejs.org/v2/api/" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a>处提供</p>
<h3 id="其他系统指令" tabindex="-1"><a class="header-anchor" href="#其他系统指令" aria-hidden="true">#</a> 其他系统指令</h3>
<p><strong>v-pre</strong></p>
<p>保留字不编译，原样输出，跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译</p>
<p><strong>v-cloak</strong></p>
<p>防闪烁，模板没编译完，电脑配置差，有可能会看到{{}}，体验不佳，不如用css先隐藏，之后再显示，包括被包裹的子元素</p>
<p><strong>v-once</strong></p>
<p>只渲染元素一次。随后的重新渲染被忽略，包括被包裹的子元素。这可以用于优化更新性能</p>
<h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h3>
<p>系统指令在不够用的情况下，考虑自定义，指令是个函数|对象,用来操作dom的, 里面的this 返回window</p>
<p><strong>全局定义</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'指令名'</span><span class="token punctuation">,</span><span class="token function">函数</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span>binding<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>[^binding]: 是个对象 含有调用指令时传入的 参数</p>
<p><strong>局部定义</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">directives</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function-variable function">指令名</span>	<span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//简写方式: bind + update</span>
  	<span class="token function">指令名</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">指令名</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">inserted</span><span class="token operator">:</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>		<span class="token comment">//绑定指令的元素插入到父节点时调用  v-focus</span>
				<span class="token literal-property property">bind</span><span class="token operator">:</span>fn	<span class="token comment">//指令第一次绑定到元素时调用	v-drag</span>
				<span class="token literal-property property">update</span><span class="token operator">:</span>fn	<span class="token comment">//指令所在的元素的model层的数据，view有更新请求时</span>
				<span class="token literal-property property">componentUpdated</span><span class="token operator">:</span>fn	<span class="token comment">//更新完成时</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2>
<p>对数据在模板中的表现过滤，符合预期，比如数据是0和1，想要表现成对错、成功失败、男女，数据需要过滤器来格式化，vue1.x版本有系统自带过滤器，vue2.x之后完全需要自定义，没有自带过滤器</p>
<p><strong>使用</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>{{数据名 | 过滤器名(参数2,参数3)}}
:属性="数据| 过滤器名(参数2,参数3) "
v-指令名="数据 | 过滤器"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>全局定义</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'过滤器名称'</span><span class="token punctuation">,</span><span class="token function">函数</span><span class="token punctuation">(</span>要过滤的元数据<span class="token punctuation">,</span>参数<span class="token number">2</span><span class="token punctuation">,</span>参数<span class="token number">3</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> 过滤后的值<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>局部定义</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">filters</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">过滤器名称</span><span class="token operator">:</span><span class="token function">函数</span><span class="token punctuation">(</span>要过滤的元数据<span class="token punctuation">,</span>参数<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>	<span class="token comment">//函数必须要有返回值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>预购阿里云服务器(ecs云服务器)</strong></p>
<p><a href="https://www.aliyun.com/activity/daily/cloud?spm=5176.12901015.0.i12901015.6ab3525crKORBj" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a> -》个人云 -》突发性能型 t5（74/年)-》系统（<strong>centOs系统7</strong>，认准<strong>ecs云服务器</strong>-》控制台做一下实名认证</p>
<p><strong>域名购买</strong></p>
<p><a href="https://promotion.aliyun.com/ntms/act/domainbrand.html?spm=5176.8112568.483655.2.67ae9ed5edEDHe" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></p>
<h2 id="数据交互" tabindex="-1"><a class="header-anchor" href="#数据交互" aria-hidden="true">#</a> 数据交互</h2>
<p>向服务器发送ajax请求，抓取数据，【vue：你看我看嘛】</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3>
<ul>
<li>自行通过XMLHttpRequest对象封装一个ajax</li>
<li>使用第三方自带的ajax库，如：jquery 	×</li>
<li>把XMLHttpRequest，封装成一个promise</li>
<li>使用js原生自带的promise语法糖 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer">fetch<ExternalLinkIcon/></a></li>
<li>使用第三方ajax封装成promise习惯的库，如：<a href="https://www.npmjs.com/package/vue-resource" target="_blank" rel="noopener noreferrer">vue-resource<ExternalLinkIcon/></a>、<a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">axios<ExternalLinkIcon/></a></li>
</ul>
<h3 id="封装ajax到promise" tabindex="-1"><a class="header-anchor" href="#封装ajax到promise" aria-hidden="true">#</a> 封装ajax到promise</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxios</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    
    <span class="token comment">//-1  整理options</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>data <span class="token operator">=</span> options<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>timeout <span class="token operator">=</span> options<span class="token punctuation">.</span>timeout <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>method <span class="token operator">=</span> options<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">'get'</span><span class="token punctuation">;</span>

    <span class="token comment">//0 整理data</span>
    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> options<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">'='</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> str <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//1	创建ajax对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> oAjax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[object XMLHttpRequest]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> oAjax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">'Microsoft.XMLHTTP'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">'get'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//2.</span>
      oAjax<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">'?'</span> <span class="token operator">+</span> str<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//3.</span>
      oAjax<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//2.</span>
      oAjax<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//设置请求头</span>
      oAjax<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      oAjax<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//身子</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//3.5	超时</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'超时了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oAjax<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//中断ajax请求	</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//4.</span>
    oAjax<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//当准备状态改变时</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oAjax<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//成功失败都会有4</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>oAjax<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> oAjax<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> oAjax<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>oAjax<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>oAjax<span class="token punctuation">.</span>status<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token operator">|</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>配置<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">成功回调</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token function">失败回调</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token operator">|</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">{</span>配置<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">成功回调</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token function">失败回调</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token operator">|</span>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>data<span class="token punctuation">,</span><span class="token punctuation">{</span>配置<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token function">成功回调</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token function">失败回调</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>配置：</p>
<p>url:“地址“
method: “ 提交姿势”
params：{} 地址栏携带的数据
data:{} 非地址栏携带数据</p>
<p>res: 响应体  数据是在res.data内部  vue-resource 返回的数据在res.body内部</p>
</blockquote>
<h3 id="访问本地json" tabindex="-1"><a class="header-anchor" href="#访问本地json" aria-hidden="true">#</a> 访问本地json</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// axios({ //第三方的axios</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$http</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//把axios绑定到Vue的原型</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'./data/user.json'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'maxios res'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>
    <span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'maxios err'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取php接口get" tabindex="-1"><a class="header-anchor" href="#读取php接口get" aria-hidden="true">#</a> 读取php接口get</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:80/php7/get.php'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//地址栏数据</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">22</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h3>
<p>有时，前端和后端的工程文件不在同一个域，也会出现跨域，以下是解决方案</p>
<h4 id="后端解决" tabindex="-1"><a class="header-anchor" href="#后端解决" aria-hidden="true">#</a> 后端解决</h4>
<p>部分接口允许</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//node 要允许的接口内部 </span>
res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>

<span class="token comment">//php端</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin:*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有接口允许</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//node端</span>
<span class="token keyword">let</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cors'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//允许所有前端域名</span>
  <span class="token string-property property">"origin"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"http://localhost:8001"</span><span class="token punctuation">,</span><span class="token string">"http://localhost:5000"</span><span class="token punctuation">,</span><span class="token string">"http://localhost:8080"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
  <span class="token string-property property">"credentials"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//允许携带凭证</span>
  <span class="token string-property property">"methods"</span><span class="token operator">:</span> <span class="token string">"GET,HEAD,PUT,PATCH,POST,DELETE"</span><span class="token punctuation">,</span> <span class="token comment">//被允许的提交方式</span>
  <span class="token string-property property">"allowedHeaders"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span><span class="token string">'Authorization'</span><span class="token punctuation">]</span><span class="token comment">//被允许的post方式的请求头</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="前端解决" tabindex="-1"><a class="header-anchor" href="#前端解决" aria-hidden="true">#</a> 前端解决</h4>
<p>jsonp</p>
<p>浏览器装插件 正向代理</p>
<p>开发环境做代理（webpack，正向代理，客户端代理）</p>
<h3 id="读取php接口post" tabindex="-1"><a class="header-anchor" href="#读取php接口post" aria-hidden="true">#</a> 读取php接口post</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建一个url传输的实例</span>
  params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//添加一个key/value</span>
  params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"22"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//添加一个key/value</span>
  <span class="token comment">// params.delete("a")  删除</span>
  <span class="token comment">// params.set("a","11");//修改</span>
  <span class="token comment">// params.has("a")  返回 true/false</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:80/php7/post.php'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token comment">//提交姿势</span>
  <span class="token comment">// data: {//非地址栏数据 ***</span>
  <span class="token comment">//   a: 11,</span>
  <span class="token comment">//   b: 22</span>
  <span class="token comment">// },</span>
  <span class="token comment">// data: "a=11&amp;b=22",</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> params<span class="token punctuation">,</span><span class="token comment">//URLSearchParams类型</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span>
  <span class="token punctuation">}</span> <span class="token comment">//php 默认要求传递请求头</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取node接口get" tabindex="-1"><a class="header-anchor" href="#读取node接口get" aria-hidden="true">#</a> 读取node接口get</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001/api/follow'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_limit</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取node接口post" tabindex="-1"><a class="header-anchor" href="#读取node接口post" aria-hidden="true">#</a> 读取node接口post</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//测试 formdata类型</span>

<span class="token keyword">let</span> fileInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'icon'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//抓取到file dom</span>
<span class="token keyword">let</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建formData类型</span>

formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"icon"</span><span class="token punctuation">,</span> fileInput<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//icon键的值是个文件体</span>

formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"damenmen"</span><span class="token punctuation">)</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"damenmenda123"</span><span class="token punctuation">)</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"nikename"</span><span class="token punctuation">,</span> <span class="token string">"我子个启的"</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001/api/reg'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> formData<span class="token punctuation">,</span><span class="token comment">//formdata类型</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取第三方接口" tabindex="-1"><a class="header-anchor" href="#读取第三方接口" aria-hidden="true">#</a> 读取第三方接口</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://douban.uieee.com/v2/movie/in_theaters'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送jsonp请求" tabindex="-1"><a class="header-anchor" href="#发送jsonp请求" aria-hidden="true">#</a> 发送jsonp请求</h3>
<p>axios不支持jsonp请求，vue-resource支持，解决axios支持jsonp需要自行封装或使用第三方axios插件</p>
<p><strong>自行封装</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//options url,data,timeout,success,error</span>
<span class="token keyword">function</span> <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	options<span class="token punctuation">.</span>data <span class="token operator">=</span> options<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	options<span class="token punctuation">.</span>cbName <span class="token operator">=</span> options<span class="token punctuation">.</span>cbName <span class="token operator">||</span> <span class="token string">"cb"</span><span class="token punctuation">;</span>
	options<span class="token punctuation">.</span>timeout <span class="token operator">=</span> options<span class="token punctuation">.</span>timeout <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
	
	<span class="token keyword">var</span> fnName <span class="token operator">=</span> <span class="token string">"jsonp_"</span><span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	fnName <span class="token operator">=</span> fnName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"."</span> <span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	options<span class="token punctuation">.</span>data<span class="token punctuation">[</span>options<span class="token punctuation">.</span>cbName<span class="token punctuation">]</span> <span class="token operator">=</span> fnName<span class="token punctuation">;</span>
	
	<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> options<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
		arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> str <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"&amp;"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	
	window<span class="token punctuation">[</span>fnName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

		options<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
		oHead<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>oS<span class="token punctuation">)</span><span class="token punctuation">;</span>
		window<span class="token punctuation">[</span>fnName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		
	<span class="token keyword">var</span> oS <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	oS<span class="token punctuation">.</span>src <span class="token operator">=</span> options<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">"?"</span> <span class="token operator">+</span> str<span class="token punctuation">;</span>
	<span class="token keyword">var</span> oHead <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	oHead<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oS<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			options<span class="token punctuation">.</span>error <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//window[fnName] = null;</span>
			window<span class="token punctuation">[</span>fnName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>options<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		
<span class="token punctuation">}</span>

axios<span class="token punctuation">.</span>jsonp<span class="token operator">=</span>jsonp<span class="token comment">//axios需要先引入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用自行封装</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>axios<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自行封装的jsonp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">axios<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>配置<span class="token punctuation">}</span><span class="token punctuation">)</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用第三方axios的jsonp插件</strong></p>
<p>推荐 <a href="https://www.npmjs.com/package/axios-jsonp" target="_blank" rel="noopener noreferrer">axios-jsonp<ExternalLinkIcon/></a></p>
<p><strong>作业</strong></p>
<p>利用axios读取node|php接口，渲染一张页面，页面中要求有过滤器和计算属性级指令的使用，其他自由发挥</p>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<p>每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做<strong>生命周期钩子</strong>的函数，这给了用户在不同阶段添加自己的代码的机会</p>
<p><a href="https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></p>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>Vue根实例表示1个应用，一个应用有若干个组件拼装而成</p>
<p><strong>使用组件</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件名</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义组件</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> 组件变量名<span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'&lt;div class="header">我是header组件&lt;/div>'</span> <span class="token comment">//组件使用的模板</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> 组件变量名<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">//√</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注册组件</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//全局注册</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'组件名'</span><span class="token punctuation">,</span>组件变量名<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//局部注册</span>
<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//选项</span>
  组件名：组件变量名	<span class="token comment">//√</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件数据</strong></p>
<p>一个组件的 <strong>data 选项必须是一个函数,且要有返回object</strong>，因此每个实例可以维护一份被返回对象的独立的拷贝，否则组件复用时，数据相互影响,也就是说<strong>组件的作用域是独立的</strong></p>
<p><strong>组件模板</strong></p>
<p>外部模板,字符模板(行间模板|inline-template)</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>//=========外部模板========

//模板定义1
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tempalte</span><span class="token punctuation">></span></span>

//模板定义2
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x-template<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>id名<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> 组件变量名<span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'#id名'</span> <span class="token comment">//组件使用的外部模板</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


//=========字符模板========
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> 组件变量名<span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">'&lt;div>...&lt;/div>'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件避讳</strong></p>
<ul>
<li>
<p>组件名不可和html同名</p>
</li>
<li>
<p>组件没有el选项，只有根实例存在el</p>
</li>
<li>
<p>组件的模板一定要有根元素</p>
</li>
<li>
<p>组件的data是个函数,需要返回对象</p>
</li>
</ul>
<p><strong>书写风格</strong></p>
<ul>
<li>组件变量名: 大驼峰  XxxXxx</li>
<li>组件名:  xx-xx | 大驼峰|app-header-nav</li>
</ul>
<p><strong>单文件组件</strong></p>
<p>xx..vue,内部组成（script + template + style）</p>
<p><strong>vue-dev-tools安装</strong></p>
<p>方案1： 登录谷歌应用商城-&gt;索引vue-dev-tools-&gt;安装-&gt;重启浏览器</p>
<p>方案2：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>vuejs<span class="token operator">/</span>vue<span class="token operator">-</span>devtools
  <span class="token number">1.</span> 	Clone <span class="token keyword">this</span> repo  downloadzip 到桌面
  <span class="token number">2.</span>	npm install  安装依赖
  <span class="token number">3.</span>	npm run build		build目录项目就有各种浏览器的安装包
  <span class="token number">4.</span>	打开 chrome <span class="token operator">-</span><span class="token operator">></span> 设置<span class="token operator">-</span><span class="token operator">></span>更多工具<span class="token operator">-</span><span class="token operator">></span>扩展应用<span class="token operator">-</span><span class="token operator">></span>开发者模式<span class="token operator">-</span><span class="token operator">></span>加载扩展程序<span class="token operator">-</span><span class="token operator">></span>指向<span class="token operator">-</span><span class="token operator">></span>build目录项目下的chrome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工程化开发环境" tabindex="-1"><a class="header-anchor" href="#工程化开发环境" aria-hidden="true">#</a> 工程化开发环境</h2>
<p>通过官方脚手架，<strong>手动</strong>搭建模块化，工程化，自动化开发环境</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//任何一款全局包 登录window账号要是admin  |  管理运行 cmd | node要全量安装</span>

vue <span class="token operator">-</span><span class="token constant">V</span>  <span class="token comment">//查看版本 </span>

<span class="token comment">//非3.x/4.x 时需要先卸载</span>
npm unstall vue<span class="token operator">-</span>cli <span class="token operator">-</span>g  

<span class="token comment">//安装</span>
npm install <span class="token operator">-</span>g @vue<span class="token operator">/</span>cli  <span class="token comment">//装3/4</span>
npm install <span class="token operator">-</span>g @vue<span class="token operator">/</span>cli<span class="token operator">-</span>init <span class="token comment">//桥接2  </span>

<span class="token comment">//测试</span>
vue <span class="token operator">-</span><span class="token constant">V</span>

<span class="token comment">//初始开发环境</span>
vue create 目录  <span class="token operator">|</span>  <span class="token punctuation">.</span>
 自定义<span class="token operator">-</span><span class="token operator">></span>保留babel
cd 目录
npm run serve

<span class="token comment">//node + npm + npx  cli没装上</span>
npx vue create 目录


<span class="token comment">//copy 被人 创建好的项目</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HbuildX<strong>自动</strong>搭建模块化，工程化，自动化开发环境</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>工作区<span class="token operator">-</span>》右键<span class="token operator">-</span>》创建项目<span class="token operator">-</span>》普通项目<span class="token operator">-</span>》vue<span class="token operator">-</span>cli项目

<span class="token comment">//测试</span>
工作区<span class="token operator">-</span>》右键<span class="token operator">-</span>》外部命令<span class="token operator">-</span><span class="token operator">></span>npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接copy他人生成的项目环境</p>
<p><strong>环境讲解</strong></p>
<p>main</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token comment">//设置为 false 以阻止 vue 在启动时生成生产提示。</span>
<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">//↓</span>
<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// return createElement('h3','内容')</span>
  <span class="token comment">// return createElement(组件)</span>
  <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>es6模块化复习</strong></p>
<p>输入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> a <span class="token keyword">from</span> <span class="token string">'./mod/a.js'</span>  <span class="token comment">//输入 默认输出 的任意类型</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>对外变量，a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./mod/a.js'</span>  <span class="token comment">//输入批量输出的 属性,需要一个对象包装</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> a <span class="token keyword">from</span> <span class="token string">'./mod/a.js'</span>  <span class="token comment">//输入批量输出的 属性,包装到一个对象里面使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//批量输出  any  导出多次</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> 对外变量 <span class="token operator">=</span> 模块内部的变量
<span class="token keyword">export</span> <span class="token punctuation">{</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">}</span> <span class="token comment">//批量输出模块内部的属性</span>

<span class="token comment">//默认输出  any   只能导出一次</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>css 规则</strong></p>
<p>style-loader 插入到style标签，style标签多了选择器冲突问题就出来了，解决方案如下</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 方案1:	命名空间 推荐BEM命名风格*/</span>
<span class="token comment">/*B__E--M  block 区域块  element 元素  midiler 描述|状态 */</span>
<span class="token selector">.search</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.search__input</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.search__input--focus</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.search__input--change</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.search__button</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

//  B__E--M
//  b-b-b__e-e-e--m-m-m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!--方案2 css模块化 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$style.box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$style <span class="token comment">//返回一个对象 {选择器:'混淆后的选择器',xx:oo}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">module</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* 注意： 选择器名（支持 id,类,或者id、类开头其他选择器) */</span>
  <span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">#box2</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">.box3 div</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token selector">#box3 div</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!--方案3 独立样式作用域--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件通讯基础" tabindex="-1"><a class="header-anchor" href="#组件通讯基础" aria-hidden="true">#</a> 组件通讯基础</h2>
<h3 id="父子-props" tabindex="-1"><a class="header-anchor" href="#父子-props" aria-hidden="true">#</a> 父子（props）</h3>
<p>父组件通过<strong>属性绑定</strong>，子组件通过选项props接收,props是响应式的，props完成单向下行绑定</p>
<p><strong>父传</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">:自定义属性</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>..</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子收</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>props:['自定义属性']
props:{自定义属性:{type/default/required/validator...}}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  {{自定义属性}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意:</p>
<p>​	props是只读的,不推荐改</p>
<p>props命名:</p>
<p>​	props: ['postTitle']
​			<xx :post-title="hello!"></xx></p>
</blockquote>
<p><strong>奇葩情况</strong></p>
<p>在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态</p>
<h3 id="子父" tabindex="-1"><a class="header-anchor" href="#子父" aria-hidden="true">#</a> 子父</h3>
<p>通过<strong>自定义事件</strong>实现，给子组件绑定自定义事件，子组件触发自定义事件时传递，事件函数是父组件方法，父方法负责接收</p>
<p><strong>父绑定父接收</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	..
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">@自定义事件</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父方法<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>..</span><span class="token punctuation">></span></span>
	..
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">父方法</span><span class="token punctuation">(</span><span class="token parameter">接受数据</span><span class="token punctuation">)</span><span class="token punctuation">{</span>处理<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子触发子传递</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'自定义事件'</span><span class="token punctuation">,</span>子<span class="token punctuation">.</span>数据名<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集中管理-root" tabindex="-1"><a class="header-anchor" href="#集中管理-root" aria-hidden="true">#</a> 集中管理（$root)</h3>
<p>把数据存到根实例的data选项，其他组件直接修改或者使用</p>
<p><strong>定义</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//子组件内部</span>
<span class="token keyword">this</span> <span class="token comment">// 组件本身</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$root <span class="token comment">// vm</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>xx <span class="token comment">//组件内部数据</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>a <span class="token comment">//根实例数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作业</strong></p>
<p>完成微博的数据读取，页面渲染，有能力的完成组件的拆分</p>
<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<p>用来SPA	(single page application   单页面应用)，页面跳转，<a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h3 id="单页vs多页" tabindex="-1"><a class="header-anchor" href="#单页vs多页" aria-hidden="true">#</a> 单页VS多页</h3>
<table>
<thead>
<tr>
<th><strong>页面模式</strong></th>
<th><strong>多页面模式（MPA Multi-page Application）</strong></th>
<th><strong>单页面模式（SPA Single-page Application）</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>页面组成</td>
<td>多个完整页面， 例如page1.html、page2.html等</td>
<td>由一个初始页面和多个页面模块组成， 例如：index.html</td>
</tr>
<tr>
<td>公共文件加载</td>
<td>跳转页面前后，js/css/img等公用文件重新加载</td>
<td>js/css/img等公用文件只在加载初始页面时加载，更换页面内容前后无需重新加载</td>
</tr>
<tr>
<td>页面跳转/内容更新</td>
<td>页面通过window.location.href = &quot;./page2.html&quot;跳转</td>
<td>通过使用js方法，append/remove或者show/hide等方式来进行页面内容的更换</td>
</tr>
<tr>
<td>数据的传递</td>
<td>可以使用路径携带数据传递的方式，例如：http://index.html?account=&quot;123&quot;&amp;password=123456&quot;&quot;，或者localstorage、cookie等存储方式</td>
<td>直接通过参数传递，或者全局变量的方式进行，因为都是在一个页面的脚本环境下</td>
</tr>
<tr>
<td>用户体验</td>
<td>如果页面加载的文件相对较大（多），页面切换加载会很慢</td>
<td>页面片段间切换较快，用户体验好，因为初次已经加载好相关文件。但是初次加载页面时需要调整优化，因为加载文件较多</td>
</tr>
<tr>
<td>场景</td>
<td>适用于高度追求高度支持搜索引擎的应用</td>
<td>高要求的体验度，追求界面流畅的应用</td>
</tr>
<tr>
<td>转场动画</td>
<td>不容易实现</td>
<td>容易实现</td>
</tr>
</tbody>
</table>
<blockquote>
<p>单页面模式：相对比较有优势，无论在用户体验还是页面切换的数据传递、页面切换动画，都可以有比较大的操作空间  多页面模式：比较适用于页面跳转较少，数据传递较少的项目中开发，否则使用cookie，localstorage进行数据传递，是一件很可怕而又不稳定的无奈选择</p>
</blockquote>
<h3 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h3>
<p><strong>安装引入注册</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i vue<span class="token operator">-</span>router <span class="token operator">-</span><span class="token constant">S</span>

<span class="token comment">// src/main.js</span>
<span class="token keyword">import</span> router form <span class="token string">'./plugins/router.js'</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置路由</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token comment">//1. 引入路由包</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token comment">//2. 安装插件包到Vue上, </span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3. 路由配置</span>
<span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//route  一条路由的配置</span>
<span class="token punctuation">]</span>

<span class="token comment">//4.路由实例</span>
<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//插件路由对象</span>
  <span class="token comment">// routes:routes</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//5.导出路由实例，让他去控制vue根</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明式跳转</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>声明式跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>li<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>声明式跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/home<span class="token punctuation">"</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>li<span class="token punctuation">'</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>类名<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>声明式跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span>展示区<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>router-link 组件属性:
tag='li' 指定编译后的标签
active-class='类名' 	指定激活后的样式	模糊匹配
exact-active-class='类名' 	指定激活后的样式  严格匹配
router-link和router-view组件是vue-router插件提供的</p>
</blockquote>
<p><strong>重定向</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/plugins/router.js  >  routers</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>  <span class="token comment">//默认页</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/home'</span> <span class="token comment">//配置型跳转</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>404</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> NoPage组件
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子路由嵌套</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>
routes<span class="token operator">=</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'xx/:变量'</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>xx<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>xx
    <span class="token literal-property property">component</span><span class="token operator">:</span>xx
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>  <span class="token comment">//子路由</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由传参</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 组件中</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">'xx/参数?a=1b=2'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">></span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">'{name:'</span>名字<span class="token string">',params:{id:1},q uery:{a:2,b:3}}'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命名路由</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'名字'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//route  一条路由的配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>组件接参</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//模板template</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>$route<span class="token punctuation">.</span>params<span class="token operator">|</span>query<span class="token operator">|</span>path<span class="token punctuation">}</span><span class="token punctuation">}</span> 
<span class="token comment">//组件 script</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token operator">|</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编程式跳转</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>string<span class="token operator">|</span>obj<span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'...'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">//添加一个路由 （记录到历史记录)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'...'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">//替换一个路由 （不记录到历史记录)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//回退/前进</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由模式</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>

<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//插件路由对象</span>
  routes<span class="token punctuation">,</span>
  <span class="token comment">// mode:'hash'//哈希模式   location.href</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'history'</span><span class="token comment">//历史记录   history.pushState</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3>
<h4 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h4>
<p><strong>全局守卫</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>

<span class="token comment">//前置</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  
  <span class="token comment">//	to: 目标路由</span>
  <span class="token comment">//	from: 当前路由</span>
  
  <span class="token comment">// next() 跳转  一定要调用</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//走不了</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//走你</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token comment">//走哪</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/detail/2'</span><span class="token punctuation">,</span><span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//带点货</span>
  
  <span class="token comment">// 守卫业务</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token operator">==</span><span class="token string">'/login'</span> <span class="token operator">||</span> to<span class="token punctuation">.</span>path<span class="token operator">==</span><span class="token string">'/reg'</span> <span class="token operator">||</span> to<span class="token punctuation">.</span>path<span class="token operator">==</span><span class="token string">'/register'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//判断是不是登录了</span>
    <span class="token comment">//axios请求 携带 token </span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//后置</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">//全局后置守卫业务</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由独享守卫</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
  <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span> <span class="token comment">//路由独享守卫 前置 </span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'路由独享守卫'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">.5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>独享，没有后置</p>
</blockquote>
<p><strong>组件内部守卫</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//组件内部钩子</span>
<span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//前置   运行在beforeCreate 之前</span>
  <span class="token comment">// 不！能！获取组件实例 `this`</span>
  <span class="token comment">// 因为当守卫执行前，组件实例还没被创建</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeRouteUpdate</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
  <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
  <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
  <span class="token comment">// 可以访问组件实例 `this`</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeRouteLeave</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//后置  运行在beforeDestory之前</span>
  <span class="token comment">// 导航离开该组件的对应路由时调用</span>
  <span class="token comment">// 可以访问组件实例 `this`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由元信息" tabindex="-1"><a class="header-anchor" href="#路由元信息" aria-hidden="true">#</a> 路由元信息</h4>
<p>定义路由的时候配置 <code v-pre>meta</code> 字段</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/plugins/router.js</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code v-pre>meta</code> 字段</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>meta
to<span class="token punctuation">.</span>meta from<span class="token punctuation">.</span>meta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="滚动行为" tabindex="-1"><a class="header-anchor" href="#滚动行为" aria-hidden="true">#</a> 滚动行为</h4>
<p>SPA是单页面，只有一个滚动条，路由跳转时滚动条会影响到元素位置，使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样</p>
<p>对于所有路由导航，简单地让页面<strong>滚动到顶部</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">scrollBehavior</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//计算位置</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取" aria-hidden="true">#</a> 数据获取</h4>
<p>有时候，进入某个路由后，需要从服务器获取数据，解决的方案有<strong>导航完成之后获取</strong>，和<strong>导航完成之前获取</strong></p>
<p><strong>导航完成之后获取</strong></p>
<p>组件会先渲染，哪怕空数据，之后数据回来会再次渲染，组件会渲染至少两次，数据没回来之前可以显示一个loading</p>
<p><strong>导航完成之前获取</strong></p>
<p>又叫<strong>数据预载</strong>,在前置守卫里面完成数据读取后再跳转到目标组件，数据未回来之前，画面不动，显示loading，组件只渲染一次</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//读取数据附加到目标路由上 to.query.数据名=值  √</span>
  <span class="token comment">//读取数据 next( _this => _this.属性="拿到的数据")   导致更新期触发</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> mock</h2>
<p>JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源。</p>
<h3 id="安装json-server" tabindex="-1"><a class="header-anchor" href="#安装json-server" aria-hidden="true">#</a> 安装json-server</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i json-server -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动-json-server" tabindex="-1"><a class="header-anchor" href="#启动-json-server" aria-hidden="true">#</a> 启动 json-server</h3>
<p><code v-pre>json-server</code>可以直接把一个<code v-pre>json</code>文件托管成一个具备全<code v-pre>RESTful</code>风格的<code v-pre>API</code>,并支持跨域、<code v-pre>jsonp</code>、路由订制、数据快照保存等功能的 web 服务器。</p>
<p>db.json文件的内容：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"course"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">"course_name"</span><span class="token operator">:</span> <span class="token string">"马连白米且"</span><span class="token punctuation">,</span>
      <span class="token property">"autor"</span><span class="token operator">:</span> <span class="token string">"袁明"</span><span class="token punctuation">,</span>
      <span class="token property">"college"</span><span class="token operator">:</span> <span class="token string">"金并即总变史"</span><span class="token punctuation">,</span>
      <span class="token property">"category_Id"</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span>
      <span class="token property">"course_name"</span><span class="token operator">:</span> <span class="token string">"公拉农题队始果动"</span><span class="token punctuation">,</span>
      <span class="token property">"autor"</span><span class="token operator">:</span> <span class="token string">"高丽"</span><span class="token punctuation">,</span>
      <span class="token property">"college"</span><span class="token operator">:</span> <span class="token string">"先了队叫及便"</span><span class="token punctuation">,</span>
      <span class="token property">"category_Id"</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如以下命令，把<code v-pre>db.json</code>文件托管成一个 web 服务。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ json-server --watch --port <span class="token number">53000</span> db.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出类似以下内容，说明启动成功。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>\{^_^}/ hi!

Loading db.json
Done

Resources
http://localhost:53000/course

Home
http://localhost:53000

Type s + enter at any time to create a snapshot of the database
Watching...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，你可以打开你的浏览器，然后输入：<a href="http://localhost:53000/course" target="_blank" rel="noopener noreferrer">http://localhost:53000/course<ExternalLinkIcon/></a></p>
<h3 id="json-server-的相关启动参数" tabindex="-1"><a class="header-anchor" href="#json-server-的相关启动参数" aria-hidden="true">#</a> json-server 的相关启动参数</h3>
<ul>
<li>语法：<code v-pre>json-server [options] &lt;source&gt;</code></li>
<li>选项列表：</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">简写</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">--config</td>
<td style="text-align:left">-c</td>
<td style="text-align:left">指定配置文件</td>
<td style="text-align:left">[默认值: &quot;json-server.json&quot;]</td>
</tr>
<tr>
<td style="text-align:left">--port</td>
<td style="text-align:left">-p</td>
<td style="text-align:left">设置端口 [默认值: 3000]</td>
<td style="text-align:left">Number</td>
</tr>
<tr>
<td style="text-align:left">--host</td>
<td style="text-align:left">-H</td>
<td style="text-align:left">设置域 [默认值: &quot;0.0.0.0&quot;]</td>
<td style="text-align:left">String</td>
</tr>
<tr>
<td style="text-align:left">--watch</td>
<td style="text-align:left">-w</td>
<td style="text-align:left">Watch file(s)</td>
<td style="text-align:left">是否监听</td>
</tr>
<tr>
<td style="text-align:left">--routes</td>
<td style="text-align:left">-r</td>
<td style="text-align:left">指定自定义路由</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--middlewares</td>
<td style="text-align:left">-m</td>
<td style="text-align:left">指定中间件 files</td>
<td style="text-align:left">[数组]</td>
</tr>
<tr>
<td style="text-align:left">--static</td>
<td style="text-align:left">-s</td>
<td style="text-align:left">Set static files directory</td>
<td style="text-align:left">静态目录,类比：express的静态目录</td>
</tr>
<tr>
<td style="text-align:left">--readonly</td>
<td style="text-align:left">--ro</td>
<td style="text-align:left">Allow only GET requests [布尔]</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--nocors</td>
<td style="text-align:left">--nc</td>
<td style="text-align:left">Disable Cross-Origin Resource Sharing [布尔]</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--no</td>
<td style="text-align:left">gzip</td>
<td style="text-align:left">, --ng Disable GZIP Content-Encoding [布尔]</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--snapshots</td>
<td style="text-align:left">-S</td>
<td style="text-align:left">Set snapshots directory [默认值: &quot;.&quot;]</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--delay</td>
<td style="text-align:left">-d</td>
<td style="text-align:left">Add delay to responses (ms)</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--id</td>
<td style="text-align:left">-i</td>
<td style="text-align:left">Set database id property (e.g. _id) [默认值: &quot;id&quot;]</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">--foreignKeySuffix</td>
<td style="text-align:left">--</td>
<td style="text-align:left">fks Set foreign key suffix (e.g. _id as in post_id)</td>
<td style="text-align:left">[默认值: &quot;Id&quot;]</td>
</tr>
<tr>
<td style="text-align:left">--help</td>
<td style="text-align:left">-h</td>
<td style="text-align:left">显示帮助信息</td>
<td style="text-align:left">[布尔]</td>
</tr>
<tr>
<td style="text-align:left">--version</td>
<td style="text-align:left">-v</td>
<td style="text-align:left">显示版本号</td>
<td style="text-align:left">[布尔]</td>
</tr>
</tbody>
</table>
<ul>
<li>source可以是json文件或者js文件。实例：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>json-server --watch -c ./jsonserver.json
json-server --watch db.js  命令行里面要的db是个函数
json-server db.json
json-server --watch -port <span class="token number">8888</span> db.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态生成模拟数据" tabindex="-1"><a class="header-anchor" href="#动态生成模拟数据" aria-hidden="true">#</a> 动态生成模拟数据</h3>
<p>启动json-server的命令：<code v-pre>json-server --watch db.js</code> 是把一个js文件返回的数据托管成web服务。</p>
<p>app.js配合<a href="http://mockjs.com/" target="_blank" rel="noopener noreferrer">mockjs<ExternalLinkIcon/></a>库可以很方便的进行生成模拟数据。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 用mockjs模拟生成数据</span>
<span class="token keyword">var</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mockjs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 Mock</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">'course|227'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 属性 id 是一个自增数，起始值为 1，每次增 1</span>
        <span class="token string-property property">'id|+1'</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">course_name</span><span class="token operator">:</span> <span class="token string">'@ctitle(5,10)'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">autor</span><span class="token operator">:</span> <span class="token string">'@cname'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">college</span><span class="token operator">:</span> <span class="token string">'@ctitle(6)'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'category_Id|1-6'</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'course_category|6'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"id|+1"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">"pid"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cName</span><span class="token operator">:</span> <span class="token string">'@ctitle(4)'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 返回的data会作为json-server的数据</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由-1" tabindex="-1"><a class="header-anchor" href="#路由-1" aria-hidden="true">#</a> 路由</h3>
<h4 id="默认的路由" tabindex="-1"><a class="header-anchor" href="#默认的路由" aria-hidden="true">#</a> 默认的路由</h4>
<p><code v-pre>json-server</code>为提供了<code v-pre>GET</code>,<code v-pre>POST</code>, <code v-pre>PUT</code>, <code v-pre>PATCH</code> ,<code v-pre>DELETE</code>等请求的API,分别对应数据中的所有类型的实体。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 获取所有的课程信息
GET    /course

# 获取id=1001的课程信息
GET    /course/1001

# 添加课程信息，请求body中必须包含course的属性数据，json-server自动保存。
POST   /course

# 修改课程，请求body中必须包含course的属性数据
PUT    /course/1
PATCH  /course/1

# 删除课程信息
DELETE /course/1

# 获取具体课程信息id=1001
GET    /course/1001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义路由" tabindex="-1"><a class="header-anchor" href="#自定义路由" aria-hidden="true">#</a> 自定义路由</h4>
<p>当然你可以自定义路由：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ json-server --watch --routes route.json db.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>route.json</code>文件</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"/api/*"</span><span class="token operator">:</span> <span class="token string">"/$1"</span><span class="token punctuation">,</span>    <span class="token comment">//   /api/course   &lt;==>  /course</span>
  <span class="token property">"/:resource/:id/show"</span><span class="token operator">:</span> <span class="token string">"/:resource/:id"</span><span class="token punctuation">,</span>
  <span class="token property">"/posts/:category"</span><span class="token operator">:</span> <span class="token string">"/posts?category=:category"</span><span class="token punctuation">,</span>
  <span class="token property">"/articles\\?id=:id"</span><span class="token operator">:</span> <span class="token string">"/posts/:id"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义配置文件" tabindex="-1"><a class="header-anchor" href="#自定义配置文件" aria-hidden="true">#</a> 自定义配置文件</h3>
<p>通过命令行配置路由、数据文件、监控等会让命令变的很长，而且容易敲错，可以把命令写到npm的scripts中，但是依然配置不方便。</p>
<p>json-server允许我们把所有的配置放到一个配置文件中，这个配置文件默认<code v-pre>json-server.json</code>;</p>
<p>例如:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">53000</span><span class="token punctuation">,</span>
  <span class="token property">"watch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"static"</span><span class="token operator">:</span> <span class="token string">"./public"</span><span class="token punctuation">,</span>
  <span class="token property">"read-only"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"no-cors"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"no-gzip"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"routes"</span><span class="token operator">:</span> <span class="token string">"route.json"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用配置文件启动json-server:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 默认使用：json-server.json配置文件</span>
$ json-server db.js  
$ json-server db.json 

<span class="token comment"># 指定配置文件</span>
$ json-server --watch -c jserver.json db.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤查询" tabindex="-1"><a class="header-anchor" href="#过滤查询" aria-hidden="true">#</a> 过滤查询</h3>
<p>查询数据，可以额外提供</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /posts?title=json-server&amp;author=typicode
GET /posts?id=1&amp;id=2

# 可以用 . 访问更深层的属性。
GET /comments?author.name=typicode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用一些判断条件作为过滤查询的辅助。</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /posts?views_gte=10&amp;views_lte=20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以用的拼接条件为：</p>
<ul>
<li><code v-pre>_gte</code> : 大于等于</li>
<li><code v-pre>_lte</code> : 小于等于</li>
<li><code v-pre>_ne</code> : 不等于</li>
<li><code v-pre>_like</code> : 包含</li>
</ul>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /posts?id_ne=1
GET /posts?id_lte=100
GET /posts?title_like=server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3>
<p>默认后台处理分页参数为： <code v-pre>_page</code> 第几页， <code v-pre>_limit</code>一页多少条。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /posts?_page=7
GET /posts?_page=7&amp;_limit=20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>默认一页10条。</p>
</blockquote>
<p>后台会返回总条数，总条数的数据在响应头:<code v-pre>X-Total-Count</code>中。</p>
<h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>
<ul>
<li>参数： <code v-pre>_sort</code>设定排序的字段</li>
<li>参数： <code v-pre>_order</code>设定排序的方式（默认升序）</li>
</ul>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /posts?_sort=views&amp;_order=asc
GET /posts/1/comments?_sort=votes&amp;_order=asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>支持多个字段排序：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /posts?_sort=user,views&amp;_order=desc,asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="任意切片数据" tabindex="-1"><a class="header-anchor" href="#任意切片数据" aria-hidden="true">#</a> 任意切片数据</h3>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /posts?_start=20&amp;_end=30
GET /posts/1/comments?_start=20&amp;_end=30
GET /posts/1/comments?_start=20&amp;_limit=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全文检索" tabindex="-1"><a class="header-anchor" href="#全文检索" aria-hidden="true">#</a> 全文检索</h3>
<p>可以通过<code v-pre>q</code>参数进行全文检索，例如：<code v-pre>GET /posts?q=internet</code></p>
<h3 id="实体关联" tabindex="-1"><a class="header-anchor" href="#实体关联" aria-hidden="true">#</a> 实体关联</h3>
<h4 id="关联子实体" tabindex="-1"><a class="header-anchor" href="#关联子实体" aria-hidden="true">#</a> 关联子实体</h4>
<p>包含children的对象, 添加<code v-pre>_embed</code></p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /posts?_embed=comments
GET /posts/1?_embed=comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关联父实体" tabindex="-1"><a class="header-anchor" href="#关联父实体" aria-hidden="true">#</a> 关联父实体</h4>
<p>包含 parent 的对象, 添加<code v-pre>_expand</code></p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET /comments?_expand=post
GET /comments/1?_expand=post
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他高级用法" tabindex="-1"><a class="header-anchor" href="#其他高级用法" aria-hidden="true">#</a> 其他高级用法</h3>
<p><code v-pre>json-server</code>本身就是依赖express开发而来，可以进行深度定制。细节就不展开，具体详情请参考<a href="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> jsonServer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'json-server'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在node里面使用json-server包</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./db.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//引入mockjs配置模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mockjs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> mock<span class="token operator">=</span><span class="token string">'/mock'</span><span class="token punctuation">;</span><span class="token comment">//定义路由根别名</span>

<span class="token comment">//创建服务器</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> jsonServer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建jsonserver 服务对象</span>


<span class="token comment">//配置jsonserver服务器 中间件</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>jsonServer<span class="token punctuation">.</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">static</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'/public'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//静态资源托管</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>jsonServer<span class="token punctuation">.</span>bodyParser<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//抓取body数据使用json-server中间件</span>


<span class="token comment">//响应</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">//可选 统一修改请求方式</span>
  <span class="token comment">// console.log(1)</span>
  <span class="token comment">// request.method = 'GET';</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//登录注册校验</span>
<span class="token keyword">let</span> mr <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">;</span><span class="token comment">//提取mock的随机对象</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>mock<span class="token operator">+</span><span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(req.query, req.body);//抓取提交过来的query和body</span>
  <span class="token keyword">let</span> username<span class="token operator">=</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>username<span class="token punctuation">;</span>
  <span class="token keyword">let</span> password<span class="token operator">=</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>password<span class="token punctuation">;</span>
  <span class="token punctuation">(</span>username <span class="token operator">===</span> <span class="token string">'aa'</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">'aa123'</span><span class="token punctuation">)</span><span class="token operator">?</span>
    res<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">"err"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"登录成功"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"follow"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"fans"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"nikename"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">cname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"icon"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token string">'20x20'</span><span class="token punctuation">,</span>mr<span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>mr<span class="token punctuation">.</span><span class="token function">cword</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span>
    res<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">"err"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"登录失败"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>mock<span class="token operator">+</span><span class="token string">'/reg'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> username<span class="token operator">=</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username<span class="token punctuation">;</span>
  <span class="token punctuation">(</span>username <span class="token operator">!==</span> <span class="token string">'aa'</span><span class="token punctuation">)</span> <span class="token operator">?</span>
    res<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">"err"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"注册成功"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"follow"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"fans"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"nikename"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">cname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"icon"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token string">'20x20'</span><span class="token punctuation">,</span>mr<span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>mr<span class="token punctuation">.</span><span class="token function">cword</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">"time"</span><span class="token operator">:</span> mr<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span>
    res<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">"err"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"注册失败"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//响应mock接口 自定义返回结构 定义mock接口别名</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> jsonServer<span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建路由对象 db为mock接口路由配置  db==object</span>

router<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">//自定义返回结构</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>locals<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">//判断数据是不是空数组和空对象</span>
  <span class="token comment">// console.log(len);</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token comment">//模拟服务器延时</span>
    res<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">err</span><span class="token operator">:</span> len <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> len <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">'成功'</span> <span class="token operator">:</span> <span class="token string">'失败'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">.</span>locals<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>

  <span class="token comment">// res.jsonp(res.locals.data)</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>jsonServer<span class="token punctuation">.</span><span class="token function">rewriter</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//路由自定义别名</span>
  <span class="token punctuation">[</span>mock<span class="token operator">+</span><span class="token string">"/*"</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"/$1"</span><span class="token punctuation">,</span>

  <span class="token comment">// "/product\\?dataName=:dataName": "/:dataName",</span>
  <span class="token comment">// "/banner\\?dataName=:dataName": "/:dataName",</span>
  <span class="token comment">// "/detail\\?dataName=:dataName&amp;id=:id": "/:dataName/:id",</span>

  <span class="token comment">// "/product/del\\?dataName=:dataName&amp;id=:id": "/:dataName/:id",</span>
  <span class="token comment">// "/product/add\\?dataName=:dataName": "/:dataName",</span>
  <span class="token comment">// "/product/check\\?dataName=:dataName&amp;id=:id": "/:dataName/:id"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//路由响应</span>



<span class="token comment">//开启jsonserver服务</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3333</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mock server is running'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h2>
<h3 id="技术栈选型" tabindex="-1"><a class="header-anchor" href="#技术栈选型" aria-hidden="true">#</a> 技术栈选型</h3>
<p><strong>前端</strong></p>
<p>vue-cli4</p>
<p>vue-router</p>
<p>axios</p>
<p>animate.css / vue-animate</p>
<p>vuex</p>
<p>全家桶</p>
<p><strong>后端</strong></p>
<p>nodejs</p>
<p>express</p>
<p>mongodb</p>
<p>bcrypt</p>
<p>jsonwebtoken</p>
<p>multer</p>
<h3 id="工作区目录" tabindex="-1"><a class="header-anchor" href="#工作区目录" aria-hidden="true">#</a> 工作区目录</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>dist
  <span class="token operator">|</span><span class="token operator">-</span><span class="token operator">...</span>	 打包后，生产环境资源
<span class="token keyword">public</span>   静态资源 不优化
  <span class="token operator">|</span><span class="token operator">-</span>data<span class="token operator">:</span>
    <span class="token operator">|</span><span class="token operator">-</span>写死数据<span class="token punctuation">.</span>json
    <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token operator">|</span><span class="token operator">-</span> 图<span class="token operator">/</span>字体<span class="token operator">/</span><span class="token constant">MP4</span>
src  开发环境 会优化
  <span class="token operator">|</span><span class="token operator">-</span>assets 全局会优化 ui资源
    <span class="token operator">|</span><span class="token operator">-</span>js
    <span class="token operator">|</span><span class="token operator">-</span>css
    <span class="token operator">|</span><span class="token operator">-</span>image
    <span class="token operator">|</span><span class="token operator">-</span><span class="token operator">...</span>
  <span class="token operator">|</span><span class="token operator">-</span>pages  页面 跳转 不通用
    <span class="token operator">|</span><span class="token operator">-</span>	home<span class="token punctuation">.</span>vue <span class="token operator">/</span> follow<span class="token punctuation">.</span>vue <span class="token operator">/</span> column<span class="token punctuation">.</span>vue <span class="token operator">/</span> user<span class="token punctuation">.</span>vue
    <span class="token operator">|</span><span class="token operator">-</span>  detail<span class="token punctuation">.</span>vue <span class="token operator">/</span> login<span class="token punctuation">.</span>vue <span class="token operator">/</span> reg<span class="token punctuation">.</span>vue 
    <span class="token operator">|</span><span class="token operator">-</span>	goods 目录 
      <span class="token operator">|</span><span class="token operator">-</span> comment<span class="token punctuation">.</span>vue
      <span class="token operator">|</span><span class="token operator">-</span> goods
        <span class="token operator">|</span><span class="token operator">-</span> boots<span class="token punctuation">.</span>vue
      <span class="token operator">|</span><span class="token operator">-</span> goods<span class="token punctuation">.</span>vue
			
  <span class="token operator">|</span><span class="token operator">-</span>layouts 布局
    <span class="token operator">|</span><span class="token operator">-</span> App<span class="token punctuation">.</span>vue
    <span class="token operator">|</span><span class="token operator">-</span> Header<span class="token punctuation">.</span>vue
    <span class="token operator">|</span><span class="token operator">-</span> Footer<span class="token punctuation">.</span>vue
		<span class="token operator">|</span><span class="token operator">-</span> error<span class="token punctuation">.</span>vue
  <span class="token operator">|</span><span class="token operator">-</span>filters 全局过滤器
    date<span class="token punctuation">.</span>js
    fillzero<span class="token punctuation">.</span>js
    <span class="token operator">...</span>
  <span class="token operator">|</span><span class="token operator">-</span>plugins 插件配置
    axios
    router
  <span class="token operator">|</span><span class="token operator">-</span>components 通用组件
    <span class="token operator">|</span><span class="token operator">-</span> loading<span class="token punctuation">.</span>vue 
    <span class="token operator">|</span><span class="token operator">-</span> banner<span class="token punctuation">.</span>vue <span class="token operator">/</span>  Button<span class="token punctuation">.</span>vue <span class="token operator">/</span> Cell<span class="token punctuation">.</span>vue <span class="token operator">/</span> uc<span class="token operator">-</span>input <span class="token operator">/</span> uc<span class="token operator">-</span>nav
		<span class="token operator">|</span><span class="token operator">-</span> uc<span class="token operator">-</span>toolbar<span class="token operator">/</span> frame<span class="token operator">-</span>screen
		<span class="token operator">|</span><span class="token operator">-</span> Button
			 <span class="token operator">|</span><span class="token operator">-</span> Button<span class="token punctuation">.</span>vue
 			 <span class="token operator">|</span><span class="token operator">-</span> assets
					<span class="token operator">|</span><span class="token operator">-</span> css<span class="token operator">/</span>js<span class="token operator">/</span>image
  main<span class="token punctuation">.</span>js 模块主入口
<span class="token keyword">package</span><span class="token punctuation">.</span>json 依赖管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件开发" tabindex="-1"><a class="header-anchor" href="#组件开发" aria-hidden="true">#</a> 组件开发</h3>
<p><strong>准备工作</strong></p>
<p>移动端(设置视口,设置字体比例，基础样式normal，base)</p>
<p><strong>资源引入</strong></p>
<ul>
<li>index.html引入  不优化</li>
<li>main.js  引入 优化</li>
<li>组件 引入 优化</li>
</ul>
<p><strong>资源指向</strong></p>
<p>相对路径 以当前文件为基准	绝对路径 以public为根， dom里面行间样式链接图片资源指向了pubic</p>
<p><strong>布局方案</strong></p>
<ul>
<li>切图，需要设计稿，用户端开发时用到</li>
<li>UI库，管理端开发时用到，常用的UI库(elementUI/mintUI/vantUI/antd...)</li>
<li>模板移植，老项目重构时用到</li>
</ul>
<p><strong>布局组件/通用组件/页面组件</strong></p>
<p>01 全局资源 在主入口文件(index.html)引入
02 全局资源 主程序(main.js|app.vue) | providerPlugin webpack插件
03 自执行脚本，跟着要控制的元素走 ,为了迁移
04 私有资源，进入组件内部, 添加scoped
05 开发环境资源引入动作，取决于资源的输出方式，和业务自身的要求(如何暴露)</p>
<p><strong>组件事件</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span> <span class="token attr-name">@原生事件名.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>函数<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span> <span class="token attr-name">@自定义事件名</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>函数<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件双向绑定</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//父
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	&lt;组件 v-mode=“父数据" />
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据<span class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父函数<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

//组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>input<span class="token punctuation">'</span>,$event.target.value)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">''</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由搭建" tabindex="-1"><a class="header-anchor" href="#路由搭建" aria-hidden="true">#</a> 路由搭建</h3>
<p>所有组件css 插入到 style标签，选择器会有机会出现重名,css 冲突,解决方案如下</p>
<ul>
<li>css命名空间   BEM √</li>
<li>模块化</li>
<li>scoped 独立样式作用域</li>
</ul>
<h3 id="数据交互-1" tabindex="-1"><a class="header-anchor" href="#数据交互-1" aria-hidden="true">#</a> 数据交互</h3>
<p><strong>客户端代理</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 项目根/vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//设置代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//axios访问 /api ==  target + /api</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//创建虚拟服务器 </span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//websocket代理</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/douban'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&amp;count=10'</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://douban.uieee.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//路径替换</span>
          <span class="token string-property property">'^/douban'</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// axios 访问/douban/v2 == target + /v2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>列表&amp;详情</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>home<span class="token operator">-</span><span class="token operator">></span>axios<span class="token operator">-</span><span class="token operator">></span><span class="token function">props</span><span class="token punctuation">(</span>数据<span class="token punctuation">,</span>数据标识<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>cell  <span class="token operator">-</span><span class="token operator">></span> 路由传递 参数id 和 数据标识<span class="token operator">-</span><span class="token operator">></span> <span class="token function">detail</span><span class="token punctuation">(</span>参数id<span class="token punctuation">,</span>数据标识<span class="token operator">-</span><span class="token operator">></span>axios<span class="token punctuation">)</span>

follow<span class="token operator">-</span><span class="token operator">></span>axios<span class="token operator">-</span><span class="token operator">></span><span class="token function">props</span><span class="token punctuation">(</span>数据<span class="token punctuation">,</span>数据标识<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>cell  <span class="token operator">-</span><span class="token operator">></span> 路由传递 参数id 和 数据标识<span class="token operator">-</span><span class="token operator">></span> <span class="token function">detail</span><span class="token punctuation">(</span>参数id<span class="token punctuation">,</span>数据标识<span class="token operator">-</span><span class="token operator">></span>axios<span class="token punctuation">)</span>

column<span class="token operator">-</span><span class="token operator">></span>axios<span class="token operator">-</span><span class="token operator">></span><span class="token function">props</span><span class="token punctuation">(</span>数据<span class="token punctuation">,</span>数据标识<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>cell  <span class="token operator">-</span><span class="token operator">></span> 路由传递 参数id 和 数据标识<span class="token operator">-</span><span class="token operator">></span> <span class="token function">detail</span><span class="token punctuation">(</span>参数id<span class="token punctuation">,</span>数据标识<span class="token operator">-</span><span class="token operator">></span>axios<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>用户介权</strong></p>
<div class="language-j ext-j line-numbers-mode"><pre v-pre class="language-j"><code>登录
login<span class="token verb keyword">-</span><span class="token verb keyword">></span> axios （username、密码）<span class="token verb keyword">-</span><span class="token verb keyword">></span><span class="token adverb builtin">/</span>api<span class="token adverb builtin">/</span>login <span class="token verb keyword">-</span><span class="token verb keyword">></span> 返回token<span class="token verb keyword">-</span>》客户端种本地<span class="token punctuation">(</span>cookie<span class="token adverb builtin">/</span>localStorage<span class="token punctuation">)</span><span class="token verb keyword">-</span><span class="token verb keyword">></span>跳转之前<span class="token verb keyword">|</span>user

<span class="token adverb builtin">/</span><span class="token adverb builtin">/</span>自动登录成功
<span class="token adverb builtin">/</span>user<span class="token verb keyword">-</span><span class="token verb keyword">></span>前置守卫<span class="token verb keyword">-</span><span class="token verb keyword">></span>数据预载 api<span class="token adverb builtin">/</span>user <span class="token verb keyword">-</span><span class="token verb keyword">></span>axios请求携带token（本地抓取）<span class="token verb keyword">-</span><span class="token verb keyword">></span>成功<span class="token verb keyword">-</span><span class="token verb keyword">></span>返回用户数据<span class="token verb keyword">-</span><span class="token verb keyword">></span>传递给user组件

<span class="token adverb builtin">/</span><span class="token adverb builtin">/</span>注销<span class="token conjunction variable">:</span> 
删除 本地 token

<span class="token adverb builtin">/</span><span class="token adverb builtin">/</span>注册 同登录
formData 类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router.js'</span>

<span class="token comment">//添加一个请求的拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//config 含有发出的请求的配置信息  axios(config)</span>
  
  <span class="token comment">// 每次都自动携带token</span>
  <span class="token keyword">let</span> token <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span>
  token <span class="token operator">=</span> token <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>token <span class="token operator">:</span> <span class="token string">''</span>
  config<span class="token punctuation">.</span>headers<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> token
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span><span class="token comment">// 撒手放出经过配置的请求</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 发出了错误的请求，拦截</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加一个响应的拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//response  ~~ axios请求后的res</span>
  <span class="token comment">// 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2</span>
  <span class="token comment">//校验返回数据，token过期，路由跳转login,传递当前路由地址</span>
  <span class="token keyword">let</span> currentRoute <span class="token operator">=</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath<span class="token punctuation">;</span><span class="token comment">//获取当前路由全路径，string</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>err<span class="token operator">===</span><span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>currentRoute<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/login'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span>currentRoute<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> response<span class="token punctuation">;</span><span class="token comment">//奔向组件</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 错误的响应，拦截</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$axios<span class="token operator">=</span>axios<span class="token punctuation">;</span>
window<span class="token punctuation">.</span>axios<span class="token operator">=</span>axios<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集中式管理" tabindex="-1"><a class="header-anchor" href="#集中式管理" aria-hidden="true">#</a> 集中式管理</h3>
<p>bNav/bFoot/bLoading 使用$root管理</p>
<h3 id="路由监听" tabindex="-1"><a class="header-anchor" href="#路由监听" aria-hidden="true">#</a> 路由监听</h3>
<p>属性检测  $route</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token literal-property property">$route</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">nextValue<span class="token punctuation">,</span>PrevValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作业</strong></p>
<p>班长整理: word文档</p>
<p>张三
github地址:  客户端  |   服务端
线上api文档 :      服务端在线api文档
阿里云上线地址 :  zhangsan.top | 22.33.101.12:3001</p>
<h2 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> 项目部署</h2>
<h3 id="阿里云部署" tabindex="-1"><a class="header-anchor" href="#阿里云部署" aria-hidden="true">#</a> 阿里云部署</h3>
<p>vue的项目打包(dist)，拷贝到node项目环境（public)下，再一同拷贝到购买的云服务器上，阿里云的服务器类型选择centos</p>
<h4 id="简洁型部署" tabindex="-1"><a class="header-anchor" href="#简洁型部署" aria-hidden="true">#</a> 简洁型部署</h4>
<p><strong>买服务器(机器)</strong></p>
<ul>
<li>
<p>选择<strong>云服务器ECS</strong>，<a href="https://promotion.aliyun.com/ntms/act/campus2018.html?spm=5176.230344.1224685.2.3b84443e9LLgUu" target="_blank" rel="noopener noreferrer">学生特惠地址<ExternalLinkIcon/></a></p>
</li>
<li>
<p>支付宝-》注册-》实名认证填写身份证的信息-》ecs</p>
</li>
<li>
<p>重设密码初始化磁盘：ecs服务器-&gt;控制台</p>
</li>
</ul>
<p><strong>使用finalShell连接服务器</strong></p>
<ul>
<li>
<p><a href="http://js.downcc.com//down2/finalshell_downcc.com.zip" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a> finalShell</p>
</li>
<li>
<p>启动 finalShell-》新建会话-》SSH链接-&gt;主机：公网IP-》端口 ： 22-》用户名：root-》密码: <strong>登录密码</strong></p>
</li>
</ul>
<p><strong>給服务器安装环境</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//安装node 在 finalShell里面</span>

curl <span class="token operator">--</span>silent <span class="token operator">--</span>location https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>rpm<span class="token punctuation">.</span>nodesource<span class="token punctuation">.</span>com<span class="token operator">/</span>setup_12<span class="token punctuation">.</span>x <span class="token operator">|</span> sudo bash <span class="token operator">-</span>
yum install <span class="token operator">-</span>y nodejs
<span class="token literal-property property">检测</span><span class="token operator">:</span> node <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上传代码</strong></p>
<ul>
<li>
<p>vue 打包:			<code v-pre>npm run build</code>  -&gt; dist</p>
</li>
<li>
<p>创建空的node环境:		<code v-pre>express -e 目录</code></p>
</li>
<li>
<p>dist里面的文件  copy -&gt; node 的 public下面</p>
</li>
<li>
<p>把node项目 -》 拖拽到 finalSheel/usr/local/创建目录/</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token comment">//让阿里云支持node里面的3000端口</span>
   找到控制台<span class="token operator">-</span><span class="token operator">></span>安全组<span class="token operator">-</span>》配置规则<span class="token operator">-</span>》添加规则<span class="token operator">-</span>》端口范围（<span class="token number">1</span><span class="token operator">/</span><span class="token number">3000</span>）<span class="token punctuation">,</span><span class="token function">授权对象</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   finalShell 里面<span class="token operator">-</span><span class="token operator">></span> cd <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>你的目录 <span class="token operator">-</span><span class="token operator">></span> npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>测试: 浏览器输入： http://公网IP:3000</p>
</blockquote>
</li>
</ul>
<h4 id="高要求部署" tabindex="-1"><a class="header-anchor" href="#高要求部署" aria-hidden="true">#</a> 高要求部署</h4>
<p><strong>买服务器(机器)</strong></p>
<ul>
<li>
<p><a href="https://promotion.aliyun.com/ntms/act/qwbk.html?spm=5176.8112568.420890.1.67ae9ed5edEDHe" target="_blank" rel="noopener noreferrer">成人特惠地址<ExternalLinkIcon/></a>，认准云服务器ECS/centos</p>
</li>
<li>
<p>支付宝-》注册-》实名认证填写身份证的信息-》ecs</p>
</li>
<li>
<p>手动停止服务器 ----&gt; 初始化磁盘 ---&gt; 重设密码（登录密码）</p>
</li>
</ul>
<p><strong>使用finalShell连接服务器</strong></p>
<ul>
<li>
<p><a href="http://js.downcc.com//down2/finalshell_downcc.com.zip" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a> finalShell</p>
</li>
<li>
<p>启动 finalShell-》新建会话-》主机：公网IP-》端口 ： 22-》用户名：root-》密码: <strong>登录密码</strong></p>
</li>
</ul>
<p><strong>給服务器安装环境</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl <span class="token operator">--</span>silent <span class="token operator">--</span>location https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>rpm<span class="token punctuation">.</span>nodesource<span class="token punctuation">.</span>com<span class="token operator">/</span>setup_12<span class="token punctuation">.</span>x <span class="token operator">|</span> sudo bash <span class="token operator">-</span>
sudo yum install <span class="token operator">-</span>y nodejs
<span class="token literal-property property">检测</span><span class="token operator">:</span> node <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上传代码</strong></p>
<ul>
<li>vue 打包:			<code v-pre>npm run build</code>  -&gt; dist</li>
<li>本地测试生产环境（css有时打包后有出错)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i serve <span class="token operator">-</span>g
serve <span class="token operator">-</span>s dist <span class="token operator">-</span>l <span class="token number">8080</span>
问题 ： 生产环境下 不能访问 <span class="token number">9001</span>
<span class="token literal-property property">原因</span>  <span class="token operator">:</span> 生产环境下客户端代理是无效的
<span class="token literal-property property">解决</span><span class="token operator">:</span> copy到服务器端 <span class="token operator">|</span> ngnix  来完成代理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>拷贝 dist -&gt;  node的public下面   + 本地测试(启动node服务)</li>
<li>整合好的node 拖到 finalShell 下面(不拽node_modules)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i 
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>給服务器安装mongodb服务</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//安装mongodb</span>
sudo yum install mongodb<span class="token operator">-</span>server mongodb <span class="token operator">-</span>y      <span class="token comment">//针对centos&lt;8.x</span>

<span class="token comment">//创建数据库目录和日志目录</span>
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>data<span class="token operator">/</span>mongodb
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>data<span class="token operator">/</span>logs<span class="token operator">/</span>mongodb

<span class="token comment">//启动数据库文件存储位置</span>
mongod <span class="token operator">--</span>fork <span class="token operator">--</span>dbpath <span class="token operator">/</span>data<span class="token operator">/</span>mongodb <span class="token operator">--</span>logpath <span class="token operator">/</span>data<span class="token operator">/</span>logs<span class="token operator">/</span>mongodb<span class="token operator">/</span>nodeapp<span class="token punctuation">.</span>log

<span class="token comment">//创建远程数据库（与本地操作一样）可选</span>
use 库
db<span class="token punctuation">.</span>集合<span class="token punctuation">.</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>本地数据库copy到远程库</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//本地出库:需要先导出本地的数据 -> json</span>
mongoexport <span class="token operator">-</span>h <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span> <span class="token operator">-</span>d 库名 <span class="token operator">-</span>c 集合名 <span class="token operator">-</span>o 输出路径<span class="token operator">/</span>xx<span class="token punctuation">.</span>json

<span class="token comment">//上传: json -> finalShell上传到远端磁盘</span>

<span class="token comment">//远端入库:  json -> 导入数据库</span>
mongoimport <span class="token operator">-</span>d 远端库 <span class="token operator">-</span>c 集合 <span class="token operator">-</span>file 服务器json路径<span class="token operator">/</span>xx<span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="问题汇总" tabindex="-1"><a class="header-anchor" href="#问题汇总" aria-hidden="true">#</a> 问题汇总</h4>
<p><strong>关闭finalShell ,服务断了</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//安装pm2, nodejs服务器管理器</span>
npm i pm2 <span class="token operator">-</span>g

<span class="token comment">//启动服务器:</span>
pm2 start 启动文件<span class="token punctuation">.</span>js 

<span class="token comment">//浏览器访问项目即可</span>
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>公网<span class="token constant">IP</span><span class="token operator">:</span>node端口

<span class="token comment">//如果想停掉服务器: </span>
pm2 stop all

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><a href="https://blog.csdn.net/chengxuyuanyonghu/article/details/74910875" target="_blank" rel="noopener noreferrer">pm2使用<ExternalLinkIcon/></a></p>
</blockquote>
<p><strong>可以有多个app？使用一个实例？</strong></p>
<p>分析：app指向不同端口就好了
解决：app指向不同端口，安全组里添加多个端口，pm2 进入到对应服务器位置，逐个启动，如果端口重复，先启用的应用会占用端口</p>
<p><strong>不想要端口可以？</strong></p>
<p>分析：使用http协议默认的80端口,使用https协议默认端口443
解决： 修改本地的端口号指向80,安全组添加80</p>
<p><strong>不使用ip，使用网址?</strong></p>
<p>分析： 是一个IP和域名关联的过程</p>
<p>解决： 必须得用于一个已经备过案的域名(未备案不可使用一级域名和省略端口)，<a href="https://promotion.aliyun.com/ntms/act/domainbrand.html?spm=5176.8112568.483655.2.67ae9ed5edEDHe" target="_blank" rel="noopener noreferrer">域名购买地址<ExternalLinkIcon/></a></p>
<p>备案: 	特惠专区-》域名与网站-&gt;域名新手多重礼（实名，备案15工作日）</p>
<p>域名解析：域名-》解析-》添加记录-&gt;记录值(ip)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>www：解析后的域名为www<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com。
@：直接解析主域名 aliyun<span class="token punctuation">.</span>com。
二级域名：如：abc<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com，填写abc。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不备案有什么影响</strong></p>
<p>小程序上线时不能部署,但不影响学习
没有域名不便于宣传，解决：做成二维码
无法使用https安全协议访问</p>
<p><strong>启用https访问</strong></p>
<p>流程：SSL证书-&gt;获取https免费证书-&gt;配置(node服务器使用https模块响应)</p>
<p><a href="https://yq.aliyun.com/articles/221596?spm=5176.10695662.1996646101.searchclickresult.1dec5d98Oy3WNE" target="_blank" rel="noopener noreferrer">获取https免费证书<ExternalLinkIcon/></a></p>
<p>下载： 证书通过后-&gt;下载 other类型的 xx.key/xx.pem 下载到-&gt; bin/www</p>
<p>配置node：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'https'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> port<span class="token operator">=</span><span class="token number">443</span><span class="token punctuation">;</span>		
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'port'</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./bin/1826016_uncle9.top.key'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//指向key</span>
  <span class="token literal-property property">cert</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./bin/1826016_uncle9.top.pem'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> server <span class="token operator">=</span> https<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//查看nodejs.cn>https模块|或已完成的node项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安全组规则：添加443 ，443是https的默认端口</p>
<p><strong>在阿里云配置apache+mysql+php</strong></p>
<p><a href="https://blog.csdn.net/chwshuang/article/details/52443274" target="_blank" rel="noopener noreferrer">参考资料<ExternalLinkIcon/></a></p>
<p><strong>历史记录模式路由，强刷找不到</strong></p>
<p>现象：客户端路由服务找/todos/42时，服务器会找/todos/42的接口（没有这个子服务接口)
解决：服务器路由优先，找不到时，返回vue的前端index.html，交还给客户端路由</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// node项目 app.js</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
  
  <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//webApi接口错误</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">err</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'不存在的接口名'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/admin'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//服务端Api接口错误</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token comment">//交还给客户端判断</span>
    res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'public'</span><span class="token punctuation">,</span><span class="token string">'template'</span><span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>也可以通过中间件  connect-history-api-fallback 实现</p>
</blockquote>
<h3 id="百度云部署" tabindex="-1"><a class="header-anchor" href="#百度云部署" aria-hidden="true">#</a> 百度云部署</h3>
<p>混合开发时会讲</p>
<h3 id="腾讯云部署" tabindex="-1"><a class="header-anchor" href="#腾讯云部署" aria-hidden="true">#</a> 腾讯云部署</h3>
<p>小程序时会讲</p>
<h2 id="事件高级" tabindex="-1"><a class="header-anchor" href="#事件高级" aria-hidden="true">#</a> 事件高级</h2>
<p><strong>绑定行间事件</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span>on<span class="token operator">:</span>事件名<span class="token operator">=</span><span class="token string">"方法名($event,参数)"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div @事件名<span class="token operator">=</span><span class="token string">"方法名($event,参数)"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自定义事件</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//绑定</span>
vm<span class="token operator">|</span>组件<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span> <span class="token string">'自定义事件名'</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token string">'自定义事件名1'</span><span class="token punctuation">,</span><span class="token string">'自定义事件名2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">回调</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token operator">&lt;</span>自定义组件  v<span class="token operator">-</span>on<span class="token operator">:</span>自定义事件<span class="token operator">=</span><span class="token string">"函数"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>自定义组件  @自定义事件<span class="token operator">=</span><span class="token string">"函数"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">//销毁</span>
vm<span class="token operator">|</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span> <span class="token string">'自定义事件名'</span><span class="token operator">|</span><span class="token punctuation">[</span><span class="token string">'自定义事件名1'</span><span class="token punctuation">,</span><span class="token string">'自定义事件名2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//触发</span>
vm<span class="token operator">|</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span>自定义事件名<span class="token punctuation">,</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>自定义事件名：	使用 kebab-case 的事件名</p>
<p>只有别绑定方才可以触发</p>
<p>自定义的组件 触发原生事件需要native修饰符</p>
</blockquote>
<p><strong>事件对象</strong></p>
<p>事件对象可以不传递，需要传递的场景，传参数同时使用事件对象时，如：<code v-pre>show($event,参数)</code></p>
<p><strong>阻止冒泡</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ev<span class="token operator">|</span>e<span class="token punctuation">.</span>cacelBubble<span class="token operator">=</span><span class="token boolean">true</span> <span class="token comment">//属性</span>
ev<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//api</span>
<span class="token operator">&lt;</span>div @click<span class="token punctuation">.</span>stop<span class="token operator">=</span>"函数“ <span class="token operator">/</span><span class="token operator">></span> <span class="token comment">//修饰符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>默认行为</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>e<span class="token operator">|</span>ev<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token operator">&lt;</span>div @事件名<span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">"函数"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修饰符连缀</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div @事件<span class="token punctuation">.</span>prevent<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">"..."</span>    排名分先后
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2>
<p><strong>事件修饰符</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click.修饰符</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>函数<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     			 .capture 		使用事件捕获模式
					 .self				点到时才触发，不是从内部元素触发的
					 .once  			只会触发一次
					 .passive 		onScroll事件 结束时触发一次，不会频繁触发，移动端使用
					 
.sync 				接受props被修改，实现表单之外的元素双绑
//父组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子组件</span> <span class="token attr-name">:title.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text-document</span><span class="token punctuation">></span></span>

//子组件
this.$emit('update:title', newTitle)//通知父去修改title的数据==newTitle

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>按键修饰符</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!--普通键--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@keyup.修饰符</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>函数<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     			 .left 				上下左右
					 .enter				回车
					 .13  				可以使用键码

<span class="token comment">&lt;!--系统键--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@keyup.修饰符</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>函数<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     			 .ctrl 				
					 .alt					
					 .shift  				
					 .exact  		严格		@键盘事件.修饰符1.修饰符2.exact    只有1+2才可触发 1+2+3不可以

<span class="token comment">&lt;!--鼠标键--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@mousedown.修饰符</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>函数<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     			 .left 				
					 .right					
				 	 .middle	鼠标中键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>表单修饰符</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model.修饰符</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
			 v-model.number 	提取数子
			 v-model.trim 		删除前后空格
			 v-model.lazy   	确认时才修改model数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h2>
<p>组件动态化(数据化)，在不同组件之间进行动态切换,component自身不会渲染</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>组件名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>组件名<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意: 动态组件切换时候，会有挂载和卸载发生</p>
<p>​		  切换的组件，需要引入+注册</p>
</blockquote>
<h2 id="缓存组件" tabindex="-1"><a class="header-anchor" href="#缓存组件" aria-hidden="true">#</a> 缓存组件</h2>
<p>keep-alive 包裹了目标组件，对目标组件缓存，后期不会触发卸载挂载，但会触发activated/deactivated
keep-alive 不给属性时，默认内部出现过得组件，都会被缓存</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>&lt;keep-alive
  :include=['组件名','组件名2']  加入一部分
	:exclude=['组件名','组件名2']  排除一部分
	:max = "数字"   最多可缓存的组件数,一旦这个数字达到了，时间戳最早出现的被卸载(遗忘)
>
	..目标组件..
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>组件钩子:</p>
<p>​	activated  活动组件  被缓存时起效果
​			deactivated 非活动组件</p>
<p>缓存组件可以包裹哪些组件</p>
<p>​	自定义普通组件、component系统组件，router-view第三方组件</p>
</blockquote>
<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>
<p>vue动画通过系统组件 transition 和 transition-group来介入，谁做动画，就用此组件就包着谁，可以包的元素有dom，组件。</p>
<p>vue不渲染只声明逻辑的系统元素 有 template，keep-alive，component。</p>
<h3 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案" aria-hidden="true">#</a> 实现方案</h3>
<ul>
<li>css过渡动画transition，无跳变，关注打哪来1，到哪去4</li>
<li>css帧动画animation，有跳变，关注来了停哪2，到哪去4
<ul>
<li>animate.css 帧动画库</li>
<li>vue-animate</li>
</ul>
</li>
<li>js控制dom完成动画
<ul>
<li>第三方的js动画库,推荐 <a href="http://velocityjs.org/" target="_blank" rel="noopener noreferrer">Velocity<ExternalLinkIcon/></a>
<ul>
<li>Velocity(el,{css属性},{配置})</li>
</ul>
</li>
<li>$('div').animate({css属性},{配置属性})</li>
<li>move(el,{css属性},{配置属性})</li>
</ul>
</li>
</ul>
<h3 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h3>
<p><strong>组件属性</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tansition</span>
	<span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span>  <span class="token punctuation">"</span>动画名<span class="token punctuation">"</span></span>
  <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>out-in|in-out<span class="token punctuation">"</span></span>  <span class="token attr-name">前后场景进退次序</span>

  <span class="token attr-name">enter-class</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>类名<span class="token punctuation">"</span></span>
  <span class="token attr-name">enter-active-class</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>类名<span class="token punctuation">"</span></span>
  <span class="token attr-name">leave-class</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>类名<span class="token punctuation">"</span></span>
  <span class="token attr-name">leave-active-class</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>类名<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
	...要做动画的元素...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tansition</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>样式</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
.动画名-enter</span><span class="token punctuation">{</span>..<span class="token punctuation">}</span>  <span class="token selector">入场前(打哪来)
.动画名-enter-active</span><span class="token punctuation">{</span>..<span class="token punctuation">}</span> <span class="token selector">入场后(来了停哪)
.动画名-leave</span><span class="token punctuation">{</span>..<span class="token punctuation">}</span> <span class="token selector">离场前
.动画名-leave-active</span><span class="token punctuation">{</span>..<span class="token punctuation">}</span> 离开场后<span class="token punctuation">(</span>到哪去<span class="token punctuation">)</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件事件</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tansition</span>
	<span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span>   <span class="token attr-name">方法会接收做动画的元素(原生)</span>
  <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span>
  <span class="token attr-name">@after-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span>
  <span class="token attr-name">@before-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span>
  <span class="token attr-name">@leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span>
  <span class="token attr-name">@after-leave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
	...要做动画的元素...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tansition</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>velocity</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tansition</span>
    <span class="token attr-name">@before-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法<span class="token punctuation">"</span></span> 
    <span class="token attr-name">@after-enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方法2<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    ...要做动画的元素...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tansition</span><span class="token punctuation">></span></span>
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">方法</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//el==做动画的原生元素</span>
        <span class="token function">Velocity</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span><span class="token punctuation">{</span>css属性<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>配置<span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>配置</p>
<p>duration: 毫秒   事件
easing: 动画类别 ''
Queue
complete:fn()
progress:fn
loop: 1 次  true无限
delay: 毫秒 延时
display:'none/block' 动画结束时是否可见</p>
<p>leave(el,done){} 无缝动画 要加done</p>
</blockquote>
<h3 id="transition-group" tabindex="-1"><a class="header-anchor" href="#transition-group" aria-hidden="true">#</a> transition-group</h3>
<p>一组元素做动画，transition-group 包着一组元素  ，每个元素要有key ，无key部动画，其他的用法同transition</p>
<h3 id="状态过渡" tabindex="-1"><a class="header-anchor" href="#状态过渡" aria-hidden="true">#</a> 状态过渡</h3>
<p>数据元素本身的动效</p>
<ul>
<li>
<p>数字和运算</p>
</li>
<li>
<p>颜色的显示</p>
</li>
<li>
<p>元素的大小和其他的属性</p>
<p>使用第三方库(TweenMax)来实现切换元素自身的过渡状态,具体查询 <a href="https://cn.vuejs.org/v2/guide/transitioning-state.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="异步流程控制" tabindex="-1"><a class="header-anchor" href="#异步流程控制" aria-hidden="true">#</a> 异步流程控制</h2>
<h3 id="串行有关联" tabindex="-1"><a class="header-anchor" href="#串行有关联" aria-hidden="true">#</a> 串行有关联</h3>
<p>一个请求结束，再发生下一个请求，出现回调地狱，async await 解决</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//时间=接口1+接口2</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/home'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=></span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/follow'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token parameter">res</span><span class="token operator">=></span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'follow'</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/home'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=></span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/follow'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=></span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'follow'</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/home'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/follow'</span><span class="token punctuation">,</span><span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并行无关联" tabindex="-1"><a class="header-anchor" href="#并行无关联" aria-hidden="true">#</a> 并行无关联</h3>
<p>所有请求一起发生，组件有多次求取，会多次渲染，promise.all /axios.all解决</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//时间=用时最多的接口</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/home'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=></span><span class="token keyword">this</span><span class="token punctuation">.</span>home<span class="token operator">=</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/follow'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=></span><span class="token keyword">this</span><span class="token punctuation">.</span>follow<span class="token operator">=</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
<span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/home'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/follow'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>home <span class="token operator">=</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
    <span class="token keyword">this</span><span class="token punctuation">.</span>follow <span class="token operator">=</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span> 
<span class="token comment">//一次性 抓取多次请求的结果</span>
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/home'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/follow'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">home<span class="token punctuation">,</span> follow</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>home<span class="token operator">=</span>home<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>follow<span class="token operator">=</span>follow<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由props接参" tabindex="-1"><a class="header-anchor" href="#路由props接参" aria-hidden="true">#</a> 路由props接参</h2>
<p>松耦合 组件便于不依赖路由，可单独测试</p>
<p><strong>路由配置</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//布尔: props:true,  route.params->props </span>
<span class="token comment">//只传递params</span>
<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span>xx<span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>xx<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span>布尔<span class="token punctuation">}</span>

<span class="token comment">//props:{id:xx,a:xx,b:xx}  route.query -> props，  配置不依赖$route</span>
<span class="token comment">//只传递query</span>
<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span>xx<span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>xx<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span>对象<span class="token punctuation">}</span>

<span class="token comment">//props:(route)=>({id:route.params.id, ...route.query})  依赖了路由的$route，通过函数介入，并返回给目标组件的props</span>
<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span>xx<span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>xx<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span>函数<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-cli详解" tabindex="-1"><a class="header-anchor" href="#vue-cli详解" aria-hidden="true">#</a> vue-cli详解</h2>
<p>官方自带的一款工程化、模块化、自动化开发环境工具（命令行），内部代码（wepack+node）</p>
<h3 id="安装cli" tabindex="-1"><a class="header-anchor" href="#安装cli" aria-hidden="true">#</a> 安装cli</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue <span class="token operator">-</span><span class="token constant">V</span>   <span class="token comment">//如果是非 3.x.x、4.x</span>
npm uninstall vue<span class="token operator">-</span>cli <span class="token operator">-</span>g <span class="token comment">//卸载</span>

npm install <span class="token operator">-</span>g @vue<span class="token operator">/</span>cli <span class="token operator">||</span> yarn global add @vue<span class="token operator">/</span>cli  <span class="token comment">//安装3.x/4.x到全局</span>
npm install <span class="token operator">-</span>g @vue<span class="token operator">/</span>cli<span class="token operator">-</span>init  <span class="token operator">||</span>  yarn global add @vue<span class="token operator">/</span>cli<span class="token operator">-</span>init <span class="token comment">//桥接2.x</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cli2" tabindex="-1"><a class="header-anchor" href="#cli2" aria-hidden="true">#</a> cli2</h3>
<h4 id="创建项目简洁版" tabindex="-1"><a class="header-anchor" href="#创建项目简洁版" aria-hidden="true">#</a> 创建项目简洁版</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue init webpack<span class="token operator">-</span>simple 目录<span class="token operator">|</span><span class="token punctuation">.</span>  
	<span class="token comment">//webpack-simple | webpack   都是vue指向的模板 simple代表简洁模板， webpack是专业模板</span>
cd 目录
npm install
npm run dev  运行
开发<span class="token operator">...</span><span class="token punctuation">.</span>
npm run build 打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>package.json</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"cross-env NODE_ENV=development webpack-dev-server --port 8001 --open"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"cross-env NODE_ENV=production webpack --progress --hide-modules"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>设置端口，开启浏览器</p>
</blockquote>
<p><strong>webpack.config.js</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">noInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8088</span><span class="token punctuation">,</span><span class="token comment">//开启端口</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//开启浏览器</span>
  <span class="token literal-property property">hot</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token comment">//模块热重载</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建项目专业模板" tabindex="-1"><a class="header-anchor" href="#创建项目专业模板" aria-hidden="true">#</a> 创建项目专业模板</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue init webpack 目录<span class="token operator">|</span><span class="token punctuation">.</span>  
cd 目录
npm run dev  运行
开发<span class="token operator">...</span><span class="token punctuation">.</span>
npm run build 打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工作区目录解析</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>build	项目配置
config   项目配置
<span class="token keyword">static</span>   静态资源目录 <span class="token comment">// cli4 node 的public</span>
test	测试目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>package.json</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --port 8001 --open --inline --progress --config build/webpack.dev.conf.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>config/index.js</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dev</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//开发环境配置</span>
    <span class="token literal-property property">assetsSubDirectory</span><span class="token operator">:</span> <span class="token string">'static'</span><span class="token punctuation">,</span><span class="token comment">//静态资源位置</span>
    <span class="token literal-property property">proxyTable</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//客户端代理</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//axios访问 /api/xx ==  target + /api/xx</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">'http://localhost:3001'</span><span class="token punctuation">,</span>
        <span class="token comment">// target:'https://uncle9.top',</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//创建虚拟服务器</span>
        <span class="token comment">// ws:true,//websocket代理</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/douban'</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">// axios 访问 /douban == target + '/douban'</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">'https://douban.uieee.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//路径替换</span>
          <span class="token string-property property">'^/douban'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token comment">// axios 访问/douban/v2/xx == target +'' + /v2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'localhost'</span><span class="token punctuation">,</span> <span class="token comment">// 主机名，设置后可以替换process.env.HOST</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8888</span><span class="token punctuation">,</span> <span class="token comment">// 端口</span>
    <span class="token literal-property property">autoOpenBrowser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启浏览器</span>
    <span class="token literal-property property">errorOverlay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//错误遮罩的形式显示到网页上</span>
    <span class="token literal-property property">useEslint</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// eslint检查的开启关闭</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//生产环境设置</span>
    <span class="token comment">// 打包后index.html文件位置</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../dist/index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cli4" tabindex="-1"><a class="header-anchor" href="#cli4" aria-hidden="true">#</a> cli4</h3>
<p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h4 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue create 目录 <span class="token operator">|</span> <span class="token punctuation">.</span> <span class="token comment">//命令行</span>

vue ui 		<span class="token comment">//图形UI形式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>删除保存的配置:		.vuerc     C:\Users\Admin</p>
</blockquote>
<h4 id="打包后" tabindex="-1"><a class="header-anchor" href="#打包后" aria-hidden="true">#</a> 打包后</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
npx vue<span class="token operator">-</span>cli<span class="token operator">-</span>service build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>index.html 会带有注入的资源和 resource hint
第三方库会被分到一个独立包以便更好的缓存
小于 10kb 的静态资源会被内联在 JavaScript 中
public 中的静态资源会被复制到输出目录中</p>
</blockquote>
<p>​</p>
<h5 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h5>
<p>使用 lodash template 语法插入内容，<code v-pre>&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;</code>打包后<code v-pre>&lt;link rel=icon href=/favicon.ico&gt;</code></p>
<h5 id="preload" tabindex="-1"><a class="header-anchor" href="#preload" aria-hidden="true">#</a> Preload</h5>
<p><strong>优先加载</strong>，是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。</p>
<p>vue 自动生成<code v-pre>&lt;link href=/css/app.8c41b469.css rel=preload as=style&gt;</code></p>
<h5 id="prefetch" tabindex="-1"><a class="header-anchor" href="#prefetch" aria-hidden="true">#</a> Prefetch</h5>
<p><strong>预加载</strong>，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。Vue CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件 (通过动态 import() 按需 code splitting 的产物) 自动生成 prefetch 提示。</p>
<h4 id="资源安排" tabindex="-1"><a class="header-anchor" href="#资源安排" aria-hidden="true">#</a> 资源安排</h4>
<p><strong>相对路径 指向src</strong>开发目录，<strong>绝对路径 指向public</strong>目录，在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。</p>
<p>放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理，url-loader 将小于 10kb 的资源内联，以减少 HTTP 请求的数量</p>
<p>推荐 资源放置到assets，脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本</p>
<p>何时使用 public 文件夹，你需要在构建输出中指定一个文件的名字。你有上千个图片，需要动态引用它们的路径。有些库可能和 webpack 不兼容，这时你除了将其用一个独立的 <code v-pre>&lt;script&gt;</code> 标签引入没有别的选择</p>
<h4 id="安装vue插件" tabindex="-1"><a class="header-anchor" href="#安装vue插件" aria-hidden="true">#</a> 安装vue插件</h4>
<p>通过 <code v-pre>vue add 插件</code>	来安装vue插件，原理是找vue-cli-plugin-插件名 的<strong>生成器</strong>，自动在项目环境下生成开发小样，再去安装对应包，比普通<code v-pre>npm install</code>要多一个开发小样，不需要做基础工作</p>
<p><strong>举例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vue add router
<span class="token comment">//可以安装包，并创建文件(插件配置的基本小样)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：不是所有的包都可以 vue add 添加，vue生态圈的包才支持</p>
<p>解释：</p>
<p>vue add 的设计意图是为了安装和调用 Vue CLI 插件。这不意味着替换掉普通的 npm 包。对于这些普通的 npm 包，你仍然需要选用包管理器。CLI 插件都会包含一个 (用来创建文件的) 生成器和一个 (用来调整 webpack 核心配置和注入命令的) 运行时插件</p>
</blockquote>
<h4 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h4>
<p>​	<strong>package.json</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scripts<span class="token operator">-</span><span class="token operator">></span>vue<span class="token operator">-</span>cli<span class="token operator">-</span>service serve <span class="token operator">--</span>port <span class="token number">8001</span> <span class="token operator">--</span>open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​	<strong>node_modules</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node_modules<span class="token operator">/</span>@vue<span class="token operator">/</span>cli<span class="token operator">-</span>service<span class="token operator">/</span>lib<span class="token operator">/</span>options
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​	<a href="https://cli.vuejs.org/zh/config/#vue-config-js" target="_blank" rel="noopener noreferrer"><strong>vue.config.js</strong><ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extract</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//css分离 生产环境下是 true，开发环境下是 false</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启css模块化</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//重写 loader</span>
      <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里的选项会传递给 css-loader</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里的选项会传递给 postcss-loader</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//开发环境设置</span>
    <span class="token comment">// host: '0.0.0.0',//IP地址地址</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8003</span><span class="token punctuation">,</span><span class="token comment">//端口</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开浏览器</span>
    <span class="token comment">// https: false,//开启https请求</span>
    <span class="token comment">// proxy: null, // string | Object  //客户端代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换</span>
        <span class="token string-property property">'/api'</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//axios访问 /api ==  target + /api  </span>
          <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">'https://uncle9.top'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//创建虚拟服务器 </span>
          <span class="token literal-property property">ws</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//websocket代理</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">'/douban'</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">// axios 访问 /douban == target + '/douban'</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">'https://api.douban.com'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//路径替换</span>
            <span class="token string-property property">'^/douban'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token comment">// axios 访问/douban/v2 == target + /v2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//关闭esling警告</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">'production'</span><span class="token punctuation">,</span> <span class="token comment">//生产构建时禁用</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//打包不携带map文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss配置" tabindex="-1"><a class="header-anchor" href="#scss配置" aria-hidden="true">#</a> scss配置</h3>
<p><strong>sass</strong></p>
<div class="language-SAS ext-SAS line-numbers-mode"><pre v-pre class="language-SAS"><code>$bg-color: #939
.box
  background: #bg-color
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>scss</strong></p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> #399<span class="token punctuation">;</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$bg-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scss-for-vue-cli4" tabindex="-1"><a class="header-anchor" href="#scss-for-vue-cli4" aria-hidden="true">#</a> scss for vue-cli4</h4>
<p><strong>条件</strong></p>
<p>需要安装 node-sass / sass-loader  装好无需配置</p>
<p><strong>引入使用</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>定义
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xx</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token attr-name">...</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xx</span><span class="token punctuation">></span></span>
    
模块化引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xx</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{$style.box}</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xx</span><span class="token punctuation">></span></span>

独立作用域引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xx</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>box</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xx</span><span class="token punctuation">></span></span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引入sass全局变量</strong></p>
<p>定义主题： $theme-color: #300 -&gt; base.scss -&gt; assets</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//配置1	vue.config.js √</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// data: `@import "@/assets/css/base.scss"`		//sass-loader V7</span>
        <span class="token literal-property property">prependData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">   
          @import "@/assets/css/base.scss"; //v8
        </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">   
          @import "@/assets/sass/base.scss"; // v9
        </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//配置2 node_modules/@vue/cli-service/lib/options.js</span>
<span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// extract: true,</span>
  <span class="token comment">// modules: false,</span>
  <span class="token comment">// localIdentName: '[name]_[local]_[hash:base64:5]',</span>
  <span class="token comment">// sourceMap: false,</span>
  <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">/</span>prependData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        @import "@/assets/css/base.scss";
      </span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">   
        @import "@/assets/sass/base.scss"; // v9
      </span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scss-for-vue-cli2" tabindex="-1"><a class="header-anchor" href="#scss-for-vue-cli2" aria-hidden="true">#</a> scss for vue-cli2</h4>
<p><strong>条件</strong></p>
<p>需要安装node-sass / sass-loader  装好需配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在build文件夹下的webpack.base.conf.js的rules里面添加配置</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"style-loader"</span><span class="token punctuation">,</span> <span class="token string">"css-loader"</span><span class="token punctuation">,</span> <span class="token string">"sass-loader"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>sass-loader版本要求 ， 8以下</p>
</blockquote>
<p><strong>引入使用</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xx</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token attr-name">...</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xx</span><span class="token punctuation">></span></span>
    
模块化引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xx</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{$style.box}</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xx</span><span class="token punctuation">></span></span>

独立作用域引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.box</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xx</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>box</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>xx</span><span class="token punctuation">></span></span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引入sass全局变量</strong></p>
<p>定义主题： $theme-color: #300 -&gt; base.scss -&gt; assets</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//安装: sass-resources-loader</span>
<span class="token comment">//配置webpack： 在build/utils.js中修改配置</span>
<span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token function">generateLoaders</span><span class="token punctuation">(</span><span class="token string">'sass'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'sass-resources-loader'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">resources</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'../src/assets/scss/base.scss'</span><span class="token punctuation">)</span>  <span class="token comment">//注意自己的路径</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h2>
<p>打算开发中大型应用，集中式数据管理, 一处修改，多处使用，多个组件依赖于同一状态，来自不同组件的行为需要变更同一状态，生态环境给我们提供了官方插件vuex</p>
<p><strong>vuex相关成员</strong></p>
<p><code v-pre>import Vuex from 'vuex'</code>， Vuex是个对象，相关成员如下</p>
<table>
<thead>
<tr>
<th>成员</th>
<th>用途</th>
</tr>
</thead>
<tbody>
<tr>
<td>Store</td>
<td>类，构造状态管理的<strong>实例</strong></td>
</tr>
<tr>
<td>mapActions</td>
<td>函数，通讯工具</td>
</tr>
<tr>
<td>mapMutations</td>
<td>函数，通讯工具</td>
</tr>
<tr>
<td>mapGetters</td>
<td>函数，通讯工具</td>
</tr>
<tr>
<td>mapState</td>
<td>函数，通讯工具</td>
</tr>
</tbody>
</table>
<p>状态管理<strong>实例</strong>相关成员</p>
<table>
<thead>
<tr>
<th>成员</th>
<th>用途</th>
</tr>
</thead>
<tbody>
<tr>
<td>dispatch</td>
<td>实例方法，通讯工具</td>
</tr>
<tr>
<td>commit</td>
<td>实例方法，通讯工具</td>
</tr>
<tr>
<td>state</td>
<td>属性，获取公共数据</td>
</tr>
</tbody>
</table>
<p><strong>角色分工</strong></p>
<table>
<thead>
<tr>
<th>components-&gt;</th>
<th>actions-&gt;</th>
<th>mutations-&gt;</th>
<th>state</th>
<th>&lt;-getters-&gt;</th>
<th>-&gt;components</th>
</tr>
</thead>
<tbody>
<tr>
<td>发送请求</td>
<td>同步,异步业务</td>
<td>修改状态</td>
<td>状态</td>
<td>读取处理状态</td>
<td>渲染状态</td>
</tr>
<tr>
<td>学生</td>
<td>代课老师</td>
<td>校长</td>
<td>财务</td>
<td>班主任</td>
<td>学生</td>
</tr>
<tr>
<td>dispatch</td>
<td>commit</td>
<td>state.key=value</td>
<td>{key:value}</td>
<td>state.key</td>
<td>{{key}}</td>
</tr>
<tr>
<td>mapActions-&gt;</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>&lt;-mapGetters</td>
</tr>
<tr>
<td>mapMutations-&gt;</td>
<td>-------------------&gt;</td>
<td></td>
<td></td>
<td>&lt;------------</td>
<td>&lt;-mapState</td>
</tr>
<tr>
<td>commit-&gt;</td>
<td>-------------------&gt;</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>&lt;------------</td>
<td>&lt;-state</td>
</tr>
</tbody>
</table>
<p><strong>交互流程图</strong></p>
<img src="https://vuex.vuejs.org/flow.png" alt="vuex" style="zoom:50%;" />
<p><strong>配置</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /src/main.js</span>

<span class="token comment">//引入store实例</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./plugins/vuex.js'</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  store<span class="token comment">//控制vue实例，为vue实例提供一个状态管理实例，管理整个vue公共状态</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/vuex.js</span>

<span class="token comment">//配置 store</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span><span class="token comment">//引入vuex包</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//安装插件到vue</span>

<span class="token keyword">import</span> state <span class="token keyword">from</span> <span class="token string">'../store/state.js'</span>
<span class="token keyword">import</span> actions <span class="token keyword">from</span> <span class="token string">'../store/actions.js'</span>
<span class="token keyword">import</span> mutations <span class="token keyword">from</span> <span class="token string">'../store/mutations.js'</span>
<span class="token keyword">import</span> getters <span class="token keyword">from</span> <span class="token string">'../store/getters.js'</span>

<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//配置接受state等选项，值为对象</span>
  state<span class="token punctuation">,</span>mutations<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>actions
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span><span class="token comment">//导出store实例给main.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/store/state.js</span>

<span class="token keyword">let</span> state<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> state<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/store/actions</span>

<span class="token keyword">let</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">jia</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span>state<span class="token punctuation">}</span><span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   	<span class="token comment">//state 公共状态 payload 负载  payload有没有传递时，是事件对象</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">,</span>payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> actions<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/store/mutations.js</span>

<span class="token keyword">let</span> mutations<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token function-variable function">increment</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//state 仓库|公共数据 payload携带的负载 payload有没有传递时，是undefined</span>
    state<span class="token punctuation">.</span>count<span class="token operator">+=</span>payload<span class="token punctuation">;</span><span class="token comment">//mutations 不做业务,只负责突变state</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mutations<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/store/getters.js</span>

<span class="token keyword">let</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">count</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//返回处理后的state  ~~ computed  </span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">'偶数'</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">'奇数'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> getters<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件中使用</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!--声明式 发送请求--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>类型(负载)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--展示状态--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{$store.state.count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>mapActions<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span>mapState<span class="token punctuation">,</span>mapGetters<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./plugins/vuex.js'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">jia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//编程式 发送请求</span>
      store <span class="token operator">|</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'类型'</span><span class="token punctuation">,</span>数据<span class="token operator">/</span>负载<span class="token operator">/</span>payload<span class="token punctuation">)</span> <span class="token comment">//-> mutations</span>
			store <span class="token operator">|</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'类型'</span><span class="token punctuation">,</span>数据<span class="token operator">/</span>负载<span class="token operator">/</span>payload<span class="token punctuation">)</span>  <span class="token comment">//-> actions</span>
			store <span class="token operator">|</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>dispatch<span class="token operator">|</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'类型'</span><span class="token punctuation">,</span><span class="token literal-property property">payload</span><span class="token operator">:</span>负载<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// payload={}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  
  <span class="token comment">//mapActions 用来接管methods,返回一个对象</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">'jia'</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token comment">//mapMutations 接管methods,跳过actions找mutations</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">'increment'</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token comment">//mapMutations 返回来一个对象</span>
      <span class="token string">'increment'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jia'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//mapActions 返回来一个对象</span>
      
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//组件内部methods</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
  <span class="token comment">//mapGetters接管computed，返回一个对象</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">'count'</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">'count'</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token comment">//mapState返回一个对象</span>
      <span class="token string">'count'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">'count'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//组件内容计算属性</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> 
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">'偶数'</span>	<span class="token operator">:</span> 
      	<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">'奇数'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vuex融入到项目当中</strong></p>
<p><strong>创建types</strong>：收藏vuex提交类型，便于后期修改，和一些types工具检查</p>
<p><strong>路由监听</strong>：找一个不会被卸载组件，做数据观测（属性检测 watch），<code v-pre>commit</code> 到<code v-pre>mutations</code>突变state.nav数据</p>
<p><strong>拦截器</strong>：请求和响应前后，<code v-pre>commit</code>-&gt;<code v-pre>mutations</code>突变state.bLoading</p>
<h2 id="token校验" tabindex="-1"><a class="header-anchor" href="#token校验" aria-hidden="true">#</a> token校验</h2>
<p><strong>main.js获取本地token</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>

<span class="token comment">//同步localStorage 到 vuex  防止强刷</span>
<span class="token keyword">let</span> local <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'USER'</span><span class="token punctuation">,</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拦截器携带到后端校验</strong></p>
<p>每次发生请求，都要携带token到后端校验是否过期，拦截器携带从vuex中抓取token ，带在headers，成功返回对应接口的数据， 失败返回未登录的信息，拦截器负责前端路由的跳转</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/axios.js</span>

<span class="token comment">//axios的封装</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./vuex.js'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router.js'</span>

<span class="token comment">// 添加一个请求的拦截</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	
  <span class="token comment">//抓取公共state的token</span>
  <span class="token keyword">let</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
  token <span class="token operator">=</span> token <span class="token operator">?</span> token <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'token'</span><span class="token operator">:</span> token
  <span class="token punctuation">}</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'LOADING'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//控制loading显示</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求错误时做点事</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//添加一个响应拦截</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'LOADING'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  
  <span class="token comment">//token过期: 返回值2,当前路由不是login时跳转 </span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>err <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath<span class="token comment">// 携带当前路径，便于登录后返回，登录时需要同步vuex和localStorage</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$axios <span class="token operator">=</span> axios<span class="token punctuation">;</span>
window<span class="token punctuation">.</span>axios <span class="token operator">=</span> axios<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex的module" tabindex="-1"><a class="header-anchor" href="#vuex的module" aria-hidden="true">#</a> vuex的module</h2>
<p>由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。</p>
<p>为了解决以上问题，Vuex 允许我们将 store 分割成<strong>模块（module）</strong>。每个模块拥有自己的 state、mutation、action、getter</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/vuex.js</span>
<span class="token keyword">import</span> goods <span class="token keyword">from</span> <span class="token string">'../store/modules/goods.js'</span>
<span class="token keyword">import</span> detail <span class="token keyword">from</span> <span class="token string">'../store/modules/detail.js'</span>

<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>actions<span class="token punctuation">,</span>mutations<span class="token punctuation">,</span>getters<span class="token punctuation">,</span><span class="token comment">//根作用域</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//模块作用域</span>
    goods<span class="token punctuation">,</span>detail
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/store/modules/goods.js</span>
<span class="token keyword">const</span> state<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> actions<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token constant">A_GOODS_LIST</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span>commit<span class="token punctuation">,</span>getters<span class="token punctuation">,</span>state<span class="token punctuation">,</span>rootState<span class="token punctuation">,</span>rootGetters<span class="token punctuation">}</span><span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//state,getters 为模块内部，局部</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_GOODS_LIST'</span><span class="token punctuation">,</span>payload<span class="token punctuation">)</span><span class="token comment">//  局部化访问模块内部</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'jia'</span><span class="token punctuation">,</span>payload<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">root</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//访问根 dispatch 或 commit</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'模块名/类型'</span><span class="token punctuation">,</span>payload<span class="token punctuation">)</span><span class="token comment">//模块访问模块</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">GLOBAL_A_JIA</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//模块注册全局 action</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span>commit<span class="token punctuation">,</span>getters<span class="token punctuation">,</span>state<span class="token punctuation">,</span>rootGetters<span class="token punctuation">,</span>rootState<span class="token punctuation">}</span><span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mutations<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token constant">M_GOODS_LIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>list<span class="token operator">=</span>payload<span class="token punctuation">;</span><span class="token comment">//state是局部</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> getters<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token constant">G_GOODS_LIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>getters<span class="token punctuation">,</span>rootState<span class="token punctuation">,</span>rootGetters</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'处理后的'</span><span class="token operator">+</span>state<span class="token punctuation">.</span>list
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)</span>
  state<span class="token punctuation">,</span>actions<span class="token punctuation">,</span>mutations<span class="token punctuation">,</span>getters
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//xx.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>goods请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A_GOODS_LIST(5)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>发送goods模块下的actions请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M_GOODS_LIST(5)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>goods模块下的mutations请求<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    goods模块下的getters属性: {{G_GOODS_LIST}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    goods模块下的state数据: {{$store.state.goods.list}}/{{list}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>GLOBAL_A_JIA(3)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>调用模块内部的全局actions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters<span class="token punctuation">,</span> mapActions<span class="token punctuation">,</span> mapMutations<span class="token punctuation">,</span> mapState<span class="token punctuation">,</span>createNamespacedHelpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token comment">//const { mapState, mapActions } = createNamespacedHelpers('模块名')</span>
<span class="token comment">//使用 createNamespacedHelpers 创建基于某个命名空间辅助函数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jia'</span><span class="token punctuation">,</span> <span class="token string">'jian'</span><span class="token punctuation">,</span> <span class="token string">'odd'</span><span class="token punctuation">,</span> <span class="token string">'yibu'</span><span class="token punctuation">,</span><span class="token string">'GLOBAL_A_JIA'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//GLOBAL_A_JIA定义在模块内的全局actions</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">'goods'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'A_GOODS_LIST'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//调用模块，添加了goods的命名空间</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'increment'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//全局</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">'detail'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'M_DETAIL_LIST'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//模块内部</span>
    <span class="token function">show</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'goods/A_GOODS_LIST'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token comment">//调用模块内部</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'goods/M_GOODS_LIST'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token comment">//调用根</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'getCount'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//根</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">'goods'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'G_GOODS_LIST'</span><span class="token punctuation">,</span><span class="token string">'type2'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//模块</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'count'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//根</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">'goods'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'list'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//模块</span>
    
    <span class="token comment">//createNamespacedHelpers</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>a<span class="token punctuation">,</span> <span class="token comment">//抓取模块内部的state.a作为当前组件的a属性使用</span>
      <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>goods<span class="token punctuation">.</span>b
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutations无引用负载" tabindex="-1"><a class="header-anchor" href="#mutations无引用负载" aria-hidden="true">#</a> mutations无引用负载</h2>
<p>actions内部要传给mutations的负载(payload),不可以是源state的引用，否则有时会出现非响应式情况，如<strong>购物车</strong></p>
<h2 id="组件懒加载" tabindex="-1"><a class="header-anchor" href="#组件懒加载" aria-hidden="true">#</a> 组件懒加载</h2>
<p>让路由配置时所指向的组件，无需一开始就加载到app.js，而是分块到不同的js文件，在路由访问时加载对应组件(js)，减少首屏压力，其原理是利用webpack对代码进行分割，异步调用组件，所以组件懒加载又叫异步路由、分片(块)打包、code splitting、异步组件</p>
<p><strong>webpack分片打包支持的语法</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span>目标组件地址<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span>res是加载后的组件<span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span>组件<span class="token number">1</span><span class="token punctuation">,</span>组件<span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>response<span class="token punctuation">)</span>  response<span class="token operator">=</span>加载结果 需要传入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vue路由配置</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/plugins/router.js</span>

<span class="token operator">-</span> <span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'xxx'</span>
<span class="token operator">+</span> <span class="token keyword">const</span> <span class="token function-variable function">home</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: "groupname-home" */</span> <span class="token string">"../components/home.vue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//或者</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">'/home'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'../components/home.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>r<span class="token punctuation">)</span> <span class="token punctuation">}</span>  <span class="token operator">|</span> home
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>webpackChunkName: &quot;groupname-home&quot; 给块命名 | 同名会拆到一个块，可减少请求次数</p>
<p>在cli2里需要注意</p>
<p>​	import() 导入 需要安装 babel-plugin-syntax-dynamic-import</p>
<p>​	配置 babelrc  &quot;plugins&quot;: [&quot;syntax-dynamic-import&quot;]</p>
<p>组件内部注册异步组件会按照要求到对应的js里面</p>
<p>组件内部同步注册组件会打包到app.js</p>
</blockquote>
<p><strong>vue打包后的片名</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//修改片名，需要修改 webpack 配置</span>

<span class="token comment">//vue-cli1 、 2 </span>
<span class="token comment">//src/build/webpack.prod.conf.js</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span>
        <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span><span class="token string">'chunks/[name]-[chunkhash:8].js'</span><span class="token punctuation">,</span><span class="token comment">//build之后的代码更便于识别</span>

<span class="token comment">//vue-cli3 、 4  ***</span>
<span class="token comment">//vue.config.js</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span>
        <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span><span class="token string">'chunks/[name]-[chunkhash:8].js'</span><span class="token punctuation">,</span><span class="token comment">//build之后的代码更便于识别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> echarts</h2>
<p><strong>安装</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i echarts <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//实例化</span>
<span class="token keyword">let</span> instance<span class="token operator">=</span>echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>dom元素<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渲染</span>
instance<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>数据<span class="token punctuation">)</span>
<span class="token comment">//API: </span>
instance<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span> <span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'事件名'</span><span class="token punctuation">,</span>方法<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.echartsjs.com/zh/index.html" target="_blank" rel="noopener noreferrer">资料<ExternalLinkIcon/></a></p>
<h2 id="第三方地图" tabindex="-1"><a class="header-anchor" href="#第三方地图" aria-hidden="true">#</a> 第三方地图</h2>
<p>这里以百度地图为例，其他第三方地图库学习方法同理，登录<a href="http://lbsyun.baidu.com/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<ul>
<li>注册百度账号</li>
<li>申请成为百度开发者  注册   <strong>浏览器端</strong></li>
<li>获取服务密钥（ak mT8XXo4kIGkUfzFeInb0A6GvzS09WtNv）</li>
<li>使用相关服务功能</li>
</ul>
<p><strong>引入库</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//vue的index.html cdn加入 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//api.map.baidu.com/api?type=webgl&amp;v=1.0&amp;ak=BNjoNa7koZgyuo24Y2Yz4LkZ1SLwGQxz<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>//装地图的id要有，元素要有高
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a>	<a href="http://lbsyun.baidu.com/jsdemo.htm#a1_2" target="_blank" rel="noopener noreferrer">事例<ExternalLinkIcon/></a></p>
<h2 id="组件通讯详解" tabindex="-1"><a class="header-anchor" href="#组件通讯详解" aria-hidden="true">#</a> 组件通讯详解</h2>
<h3 id="逐层传递" tabindex="-1"><a class="header-anchor" href="#逐层传递" aria-hidden="true">#</a> 逐层传递</h3>
<h4 id="父子" tabindex="-1"><a class="header-anchor" href="#父子" aria-hidden="true">#</a> 父子</h4>
<h5 id="属性绑定-props接受" tabindex="-1"><a class="header-anchor" href="#属性绑定-props接受" aria-hidden="true">#</a> <strong>属性绑定+props接受</strong></h5>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>// 父 template内
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">:自定义属性</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>..</span><span class="token punctuation">></span></span>

//子 script内
props:['自定义属性']   
props:{自定义属性:{type/default/required/...}}

//子 template内
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  {{自定义属性}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>props是只读的，使用场景: 电商 (松耦合)</p>
<p>props命名</p>
<p>​	props: ['postTitle']
​        	<xx post-title="hello!"></xx></p>
</blockquote>
<h5 id="parent" tabindex="-1"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> <strong>$parent</strong></h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//子模板: </span>
$parent<span class="token punctuation">.</span>父数据

<span class="token comment">//子js: </span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>父数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>使用场景: 通用组件（紧耦合)</p>
</blockquote>
<h4 id="子父-1" tabindex="-1"><a class="header-anchor" href="#子父-1" aria-hidden="true">#</a> 子父</h4>
<h5 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> <strong>自定义事件</strong></h5>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//父组件 template
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">@自定义事件</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父方法<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>..</span><span class="token punctuation">></span></span>

//父组件 script
methods:{
	父方法(数据){梳理}
}

//子组件 template
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>自定义事件<span class="token punctuation">'</span>,数据)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
     
//子组件 script
this.$emit('自定义事件',子.数据名)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> <strong>$children</strong></h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">[</span>索引<span class="token punctuation">]</span><span class="token punctuation">.</span>数据<span class="token operator">|</span>方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>使用场景: 通用组件（紧耦合)</p>
</blockquote>
<h5 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> <strong>$ref</strong></h5>
<p>引用元素（dom，组件&lt;类，函数&gt;）</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//父 template
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义子名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>..</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>自定义子名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

//父 script
 this.$refs.自定义子名称.数据名
 this.$refs.自定义子名称.方法()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>$refs 只会在组件渲染完成之后生效，并且它们不是响应式的,避免在模板或计算属性中访问 $refs</p>
</blockquote>
<h4 id="兄弟" tabindex="-1"><a class="header-anchor" href="#兄弟" aria-hidden="true">#</a> 兄弟</h4>
<p>兄弟A-&gt;<strong>自定义事件</strong>-&gt;中间人(父)-&gt;<strong>props</strong>-&gt;兄弟B</p>
<h4 id="路由-2" tabindex="-1"><a class="header-anchor" href="#路由-2" aria-hidden="true">#</a> 路由</h4>
<p>params,query</p>
<h3 id="越层传递" tabindex="-1"><a class="header-anchor" href="#越层传递" aria-hidden="true">#</a> 越层传递</h3>
<h4 id="attrs-listeners" tabindex="-1"><a class="header-anchor" href="#attrs-listeners" aria-hidden="true">#</a> $attrs/$listeners</h4>
<p>假设A&gt;B&gt;C三个组件关系，A传递给C，越过中间的B，A作为祖先一定要传递(属性绑定)，C作为后代一定要接受(props)，中间层所有的组件值负责做二传手的动作,如下</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>中间层组件</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$attrs<span class="token punctuation">"</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$listeners<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>..</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>$attrs里面包含了所有上层组件传递过来的属性
$listeners 里面包含了所有上层组件传递过来的事件</p>
<p>$attrs 如果中间层组件没有接受props,给c的是所有props
$listeners 所有中间层组件+后代组件都可触发</p>
</blockquote>
<h4 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> provide/inject</h4>
<p>祖先组件中通过provide来提供变量，然后在子孙组件中通过inject来注入变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//祖先组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>数据<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'浪里行舟'</span>
    <span class="token literal-property property">name2</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data数据
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//孙组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 浪里行舟</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>使用场景：为高阶插件/组件库提供用例</p>
<p>provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的</p>
</blockquote>
<h3 id="集中式管理-1" tabindex="-1"><a class="header-anchor" href="#集中式管理-1" aria-hidden="true">#</a> 集中式管理</h3>
<h4 id="订阅发布模式" tabindex="-1"><a class="header-anchor" href="#订阅发布模式" aria-hidden="true">#</a> 订阅发布模式</h4>
<h5 id="第三方库" tabindex="-1"><a class="header-anchor" href="#第三方库" aria-hidden="true">#</a> 第三方库</h5>
<p>如：pubsub，会在react时讲</p>
<h5 id="公共总线" tabindex="-1"><a class="header-anchor" href="#公共总线" aria-hidden="true">#</a> 公共总线</h5>
<p>利用一个空vue实例的事件订阅和发布api实现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/main.js</span>
<span class="token keyword">const</span> bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> bus<span class="token punctuation">;</span>

<span class="token comment">//组件内部</span>
<span class="token keyword">import</span> bus <span class="token keyword">from</span> <span class="token string">'...'</span><span class="token punctuation">;</span>
bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'事件'</span><span class="token punctuation">,</span>数据<span class="token punctuation">)</span> <span class="token comment">//发布</span>
bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'事件'</span><span class="token punctuation">,</span><span class="token punctuation">(</span>接<span class="token punctuation">)</span><span class="token punctuation">{</span>处理<span class="token punctuation">}</span><span class="token punctuation">)</span>	<span class="token comment">//订阅</span>
bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'事件'</span><span class="token punctuation">)</span>	<span class="token comment">//取消订阅</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> $root</h4>
<p>子组件内部直接找到根实例，访问，操作根data数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/main.js</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span>value<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//组件内部</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>key <span class="token comment">//获取</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>key<span class="token operator">=</span>value <span class="token comment">//修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="web存储" tabindex="-1"><a class="header-anchor" href="#web存储" aria-hidden="true">#</a> web存储</h4>
<p>通过把数据存储在客户端浏览器本地的行为，cookie，localstroge，session</p>
<h4 id="状态管理-1" tabindex="-1"><a class="header-anchor" href="#状态管理-1" aria-hidden="true">#</a> 状态管理</h4>
<p>在浏览器下层，应用上层，打造一个全局变量，利用vuex插件管理</p>
<h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h4>
<p>利用本地，或者远端的数据库存储</p>
<h3 id="永久与临时" tabindex="-1"><a class="header-anchor" href="#永久与临时" aria-hidden="true">#</a> 永久与临时</h3>
<p><strong>永久存储</strong></p>
<p>存库 , web/本地存储(localstroge,cookie),后端文件存储(writeFile)</p>
<p><strong>临时存储</strong></p>
<p>状态管理,订阅发布模式,公共总线(vue),$root(vue)</p>
<h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h2>
<p>vue支持函数式组件，其意义在于，无状态，没有实例（没有 this），也没有生命周期，只是个函数，所以渲染开销也低很多，适用场景为展示、UI、纯渲染、自身无数据的组件，另有别名无状态组件、展示型组件、UI组件、哑组件的叫法</p>
<p><strong>定义</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--通过 组件上下文context--></span>
    <span class="token comment">&lt;!--提供所有 prop 的对象--></span>
    {{props.key}}
    <span class="token comment">&lt;!--对父组件的引用parent--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>parent.show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>调用父方法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方组件" tabindex="-1"><a class="header-anchor" href="#第三方组件" aria-hidden="true">#</a> 第三方组件</h2>
<p>使用一些别人开发好的组件、组件库、插件、ui库，来提高项目开发进度，组件库通常是某公司开发并开源出来，获取方式可以通过npm、github查询，或者百度vue组件库，这里有一些<a href="https://www.jianshu.com/p/8ca46a6c0d58" target="_blank" rel="noopener noreferrer">推荐1<ExternalLinkIcon/></a>,、<a href="https://baijiahao.baidu.com/s?id=1629138670094636894&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer">推荐2<ExternalLinkIcon/></a>、<a href="http://tangjiusheng.com/vue/155.html?csdn" target="_blank" rel="noopener noreferrer">推荐3<ExternalLinkIcon/></a></p>
<p><strong>使用方式</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//安装</span>
npm i vue<span class="token operator">-</span>swipe <span class="token operator">-</span><span class="token constant">D</span>  安装

<span class="token comment">//引入</span>
<span class="token keyword">import</span> <span class="token string">'./node_modules/vue-swipe/dist/vue-swipe.css'</span><span class="token punctuation">;</span> 引入样式
<span class="token keyword">import</span> <span class="token punctuation">{</span> Swipe<span class="token punctuation">,</span> SwipeItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-swipe'</span><span class="token punctuation">;</span> 引入组件

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'swipe'</span><span class="token punctuation">,</span> Swipe<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//注册安装到全局</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'swipe-item'</span><span class="token punctuation">,</span> SwipeItem<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//注册到选项components 私有使用   自写样式避免与vue-swiper.css冲突  scoped</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件类别</strong></p>
<p>pc端、后台管理、客户端</p>
<ul>
<li>element-ui  饿了么 √</li>
<li>iview  个人</li>
<li>ant design 蚂蚁金服</li>
</ul>
<p>移动端、客户端</p>
<ul>
<li>mint-ui   饿了么</li>
<li>vant   有赞   电商 √</li>
<li>vue-material</li>
<li>muse-ui</li>
<li>VUX</li>
<li>cube-ui</li>
<li>vonic</li>
<li>Vue-Carbon</li>
<li>YDUI</li>
</ul>
<p>通用</p>
<ul>
<li>bootstrap5/4</li>
<li>ameizi</li>
</ul>
<h3 id="elementui" tabindex="-1"><a class="header-anchor" href="#elementui" aria-hidden="true">#</a> elementUI</h3>
<p><a href="http://element.eleme.io" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<p><strong>安装</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i element<span class="token operator">-</span>ui <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>整体引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">'element-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'element-ui/lib/theme-chalk/index.css'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>按需引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install babel<span class="token operator">-</span>plugin<span class="token operator">-</span>component <span class="token operator">-</span><span class="token constant">D</span>

<span class="token comment">//修改babel配置 baberc|babel.config.js</span>
<span class="token comment">//添加:</span>
<span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"component"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"element-ui"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"styleLibraryName"</span><span class="token operator">:</span> <span class="token string">"theme-chalk"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>


<span class="token comment">//全局使用  √</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">|</span> Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token string">'element-ui/lib/theme-chalk/button.css'</span><span class="token punctuation">;</span>

<span class="token comment">//局部使用： 只有当前组件可使用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'element-ui/lib/theme-chalk/button.css'</span><span class="token punctuation">;</span>
<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token string-property property">'el-button'</span><span class="token operator">:</span>Button<span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">:</span>Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引入自定义主题</strong></p>
<p>和引入默认主题一样，在代码里直接引用「在线主题编辑器」或「命令行工具」生成的主题的 <code v-pre>theme/index.css</code> 文件即可。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'../theme/index.css'</span>
<span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">'element-ui'</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>搭配插件按需引入组件主题</strong></p>
<p>如果是搭配 <code v-pre>babel-plugin-component</code> 一起使用，只需要修改 <code v-pre>.babelrc</code> 的配置，指定 <code v-pre>styleLibraryName</code> 路径为自定义主题相对于 <code v-pre>.babelrc</code> 的路径，注意要加 <code v-pre>~</code>。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"component"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"element-ui"</span><span class="token punctuation">,</span>
        <span class="token property">"styleLibraryName"</span><span class="token operator">:</span> <span class="token string">"~theme"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不清楚 <code v-pre>babel-plugin-component</code> 是什么，请阅读 <a href="https://element.eleme.io/#/zh-CN/component/quickstart" target="_blank" rel="noopener noreferrer">快速上手<ExternalLinkIcon/></a> 一节。更多 <code v-pre>element-theme</code> 用法请参考<a href="https://github.com/ElementUI/element-theme" target="_blank" rel="noopener noreferrer">项目仓库<ExternalLinkIcon/></a>。</p>
<h3 id="mintui" tabindex="-1"><a class="header-anchor" href="#mintui" aria-hidden="true">#</a> mintUI</h3>
<p><a href="https://mint-ui.github.io" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<p><strong>安装</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i mint<span class="token operator">-</span>ui <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>整体引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Mint <span class="token keyword">from</span> <span class="token string">'mint-ui'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'mint-ui/lib/style.css'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Mint<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>按需引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//全局使用: npm install babel-plugin-component -D</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mint-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//babel.config.js配置: 添加</span>
<span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">"component"</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span>
      <span class="token string-property property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"mint-ui"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">]</span>

<span class="token comment">//组件内部引入,只有当前组件可使用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mint-ui'</span><span class="token punctuation">;</span>
<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">//'bulala':Button,</span>
  <span class="token punctuation">[</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">:</span>Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vant" tabindex="-1"><a class="header-anchor" href="#vant" aria-hidden="true">#</a> vant</h3>
<p><a href="https://youzan.github.io/vant/#/zh-CN/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<p><strong>整体引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vant <span class="token keyword">from</span> <span class="token string">'vant'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'vant/lib/index.css'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vant<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//全局使用: &lt;van-xxx>&lt;/van-xxx></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>按需引入</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
npm i babel<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> <span class="token operator">-</span><span class="token constant">S</span>

<span class="token comment">// 对于使用 babel7 的用户，可以在 babel.config.js 中配置</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'import'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">'vant'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">'es'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'vant'</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//局部使用:</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Cell <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vant'</span><span class="token punctuation">;</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>Button<span class="token punctuation">,</span>Cell<span class="token punctuation">}</span>
  <span class="token comment">//&lt;Button>&lt;/Button></span>

<span class="token comment">//全局使用</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vant'</span><span class="token punctuation">;</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">//&lt;van-xxx>&lt;/van-xxx></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件样式顺序</strong></p>
<ol>
<li>修改主题 *</li>
<li>使用props  权重**</li>
<li>添加 class/style *</li>
<li>审查元素，查询相关样式名，修改编译后的样式 + scoped ***</li>
<li>scope 影响
css解决： .a &gt;&gt;&gt; .b { /* ... */ }   深度选择器
Sass解决: .a{ /deep/ .b{} }</li>
</ol>
<p><strong>举例</strong></p>
<p><em>app组件</em></p>
<p>​	Tabbar 标签栏</p>
<p><em>home组件</em></p>
<p>​	Search 搜索/轮播/Tab 标签页</p>
<p><em>category组件</em></p>
<p>​	Tab 标签页</p>
<p><em>follow组件</em></p>
<p>​	pull-refresh 下拉刷新 / 单元格 cell</p>
<p><em>column组件</em></p>
<p>​	Popup 弹出层</p>
<p><em>detail组件</em></p>
<p>​	NavBar 导航栏/栅格布局</p>
<p><em>ShopCart组件</em></p>
<p>​	NavBar 导航栏/SwipeCell 滑动单元格&gt;Card 卡片/SubmitBar 提交订单栏/stepper步进器</p>
<p><em>user组件</em></p>
<p>​	flex布局/van-tag标记/Panel 面板/cell-group 单元格组/ icon图标</p>
<p><em>login组件</em></p>
<p>​	NavBar 导航栏/field输入框</p>
<p><em>reg组件</em></p>
<p>​	van-uploader 文件上传</p>
<h2 id="内容分发" tabindex="-1"><a class="header-anchor" href="#内容分发" aria-hidden="true">#</a> 内容分发</h2>
<p>组件调用时，给其内部插入内容，如:<code v-pre>&lt;组件&gt;内容&lt;/组件&gt;</code>，又叫：<strong>插槽</strong>，<strong>投射</strong>，插入到组件内容的可以是dom或组件</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>组件</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>元素</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>槽名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#槽名</span><span class="token punctuation">></span></span>..
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>槽名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>槽名</span><span class="token punctuation">></span></span>...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>组件内部:	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>匿名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>槽名</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译</p>
</blockquote>
<h2 id="组件式开发" tabindex="-1"><a class="header-anchor" href="#组件式开发" aria-hidden="true">#</a> 组件式开发</h2>
<p>核心：props/event/slot/ref</p>
<p><strong>button组件</strong></p>
<ul>
<li>type	类型，可选值为 primary info warning danger	| default</li>
<li>size	尺寸，可选值为 mini	| block | default</li>
<li>square 是否为方形按钮 false</li>
<li>round 是否为圆形按钮 false</li>
<li>icon	图片链接，	String | ''</li>
</ul>
<p>要实现的props,按钮文字使用slot</p>
<p><strong>input组件</strong></p>
<p>要实现的props</p>
<ul>
<li>label	输入框左侧文本	String</li>
<li>placeholder	当前输入的值	String | Number</li>
<li>type	可设置为原生类型, 如 number password	String	text</li>
<li>border	是否显示内边框	Boolean	true</li>
<li>round 是否为圆形按钮 false</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--组件上使用v-model--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>子</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>子</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据<span class="token punctuation">"</span></span> <span class="token attr-name">@on-input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父数据 = $event<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>子</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'value'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// value 等于 父组件绑定的value,</span>
  <span class="token comment">//触发父组件input事件，传当前输入值</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;input
      :value="value"
      @input="$emit('on-input', $event.target.value)" 
    >
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>modal组件</strong></p>
<ul>
<li>events: on-cancel/on-confirm</li>
<li>slot: name/ 默认内容</li>
<li>props：width宽度 show是否显示</li>
<li>computed: cptStyle 根据width</li>
</ul>
<h2 id="混入" tabindex="-1"><a class="header-anchor" href="#混入" aria-hidden="true">#</a> <strong>混入</strong></h2>
<p>意义在于分发 Vue 组件中的可复用功能</p>
<p><strong>用法</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//定义</span>

mixin1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token operator">...</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token operator">...</span>
<span class="token punctuation">}</span>
mixin2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>


<span class="token comment">//组件内部混入 组件选项内</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">,</span>mixin2<span class="token punctuation">]</span> 

<span class="token comment">//根实例混入</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">,</span>mixin2<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//全局混入:</span>
 	Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mixin1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>混入是钩子 都调用。
混入的钩子先调用
混入普通选项与组件选项合并，遇冲突，以组件为主</p>
</blockquote>
<h2 id="插件封装" tabindex="-1"><a class="header-anchor" href="#插件封装" aria-hidden="true">#</a> 插件封装</h2>
<p><a href="https://cn.vuejs.org/v2/guide/plugins.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
<p>插件通常用来为 Vue 添加全局功能</p>
<ul>
<li>添加全局方法或者属性。如: vue-custom-element</li>
<li>添加全局资源：指令/过滤器/过渡/组件等。如 vue-touch</li>
<li>通过全局混入来添加一些组件选项。如 vue-router</li>
<li>添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。</li>
</ul>
<p>实例化<strong>组件</strong>并单独<strong>挂载到页面</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> MyCompClass <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>MyComp<span class="token punctuation">.</span>vue<span class="token punctuation">)</span>
<span class="token keyword">let</span> myCompStance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCompClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//实例化</span>
myCompStance<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//挂载组件实例</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>myCompStance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token comment">//添加当前组件的el元素到页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例化组件</strong> 操作内部成员</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myCompStance<span class="token punctuation">.</span>propName
myCompStance<span class="token punctuation">.</span>dataname<span class="token operator">=</span>value
myCompStance<span class="token punctuation">.</span>method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>toast</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1.</span> 定义 组件 情景状态 success error waring   computed
<span class="token number">2.</span> 组件自身点击后消失 methods
<span class="token number">3.</span> 组件内容 、情景状态、显示状态 支持编程式修改 和 声明式 props 传入式 更新
<span class="token number">4.</span> 支持 显示隐藏时 调用方 回调  watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展-1" tabindex="-1"><a class="header-anchor" href="#扩展-1" aria-hidden="true">#</a> 扩展</h2>
<h2 id="多页面" tabindex="-1"><a class="header-anchor" href="#多页面" aria-hidden="true">#</a> 多页面</h2>
<p>对于官网、电商类这种对SEO和首屏加载速度要求比较高的项目，可以采用多页面应用结构。如果是后台管理系统页面，不对外开放的系统，用单页面应用，推荐将系统拆分成单页面形式的多页面应用，如用户端和管理端</p>
<p><strong>vue.config.js</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 应用入口配置，相当于单页面应用的main.js，必需项</span>
            <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'src/pages/index/index.js'</span><span class="token punctuation">,</span>

            <span class="token comment">// 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'public/index.html'</span><span class="token punctuation">,</span>

            <span class="token comment">// npm run build 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span>

            <span class="token comment">// 标题，可选项，一般情况不使用，通常是在路由切换时设置title</span>
            <span class="token comment">// 需要注意的是使用title属性html文件 中的 title 标签需要是 &lt;title>&lt;%= htmlWebpackPlugin.options.title %>&lt;/title></span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'index page config'</span><span class="token punctuation">,</span>

            <span class="token comment">// 包含的模块，可选项</span>
            <span class="token comment">// chunks: ['index']</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 只有entry属性时，直接用字符串表示模块入口</span>
        <span class="token literal-property property">page1</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">'src/pages/page1/page1.js'</span><span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'page1 config'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">page2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">'src/pages/page2/page2.js'</span><span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'page2 config'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// page3: 'src/pages/page3/page3.js',</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public/index &amp; other <strong>html</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width,initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>&lt;%= htmlWebpackPlugin.options.title %><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;%= BASE_URL %>favicon.ico<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pages/index/<strong>index.js</strong> &amp; other pages</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">'./Index.vue'</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'index实例数据'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>Index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#index'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pages/index/<strong>index.vue</strong> &amp; other component</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-header</span><span class="token punctuation">></span></span>公共头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-header</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>根实例数据：{{$root.$data.msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>组件内部数据：{{msg2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> AppHeader <span class="token keyword">from</span> <span class="token string">'@/components/AppHeader.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"index"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg2</span><span class="token operator">:</span><span class="token string">'index。vue数据'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>AppHeader<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index mounted'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// destroyed(){console.log('index destroyed');},</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多页跳转</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--components|layouts / header.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/index.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/page1.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>页面1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/xx.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>页面2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多页套单页</strong>、<strong>标题修改</strong>和<strong>路由实现</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//多页中找到页面的vue实例(page.js)、或单页中找到vue实例(main.js)</span>
<span class="token comment">//单页插件 覆盖html/htmlWebpackPlugin.options.title配置,</span>

<span class="token comment">//main.js | page.js</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-wechat-title'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//标题路由配置时设定</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'..'</span><span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'page2 登录'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>//需要在实例对应的根组件的template根元素下设置v-wechat-title="$route.meta.title"
// app.vue | page.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page2<span class="token punctuation">"</span></span> <span class="token attr-name">v-wechat-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$route.meta.title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-socket" tabindex="-1"><a class="header-anchor" href="#vue-socket" aria-hidden="true">#</a> Vue-Socket</h2>
<p>Vue-Socket.io + socket.io-client 见desktop/vue-socket</p>
<h2 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法" aria-hidden="true">#</a> diff算法</h2>
<p><a href="https://www.cnblogs.com/wind-lanyan/p/9061684.html" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></p>
<h2 id="vue-ts" tabindex="-1"><a class="header-anchor" href="#vue-ts" aria-hidden="true">#</a> VUE+TS</h2>
<h3 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装" aria-hidden="true">#</a> 环境安装</h3>
<p>通过vue-cli4创建项目时，选择typescript创建即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @vue<span class="token operator">/</span>cli <span class="token operator">-</span>g
vue create 目录
	<span class="token comment">// √ typescript</span>
	<span class="token comment">// Use class-style component syntax?  是否使用类方式定义组件 yes</span>
npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件定义" tabindex="-1"><a class="header-anchor" href="#组件定义" aria-hidden="true">#</a> 组件定义</h3>
<h4 id="类式" tabindex="-1"><a class="header-anchor" href="#类式" aria-hidden="true">#</a> 类式</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//装饰器包</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Vue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-property-decorator'</span><span class="token punctuation">;</span>
  
  <span class="token comment">//一个类需要被装饰成一个vue组件</span>
  @<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span><span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---------app--------------'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="extend式" tabindex="-1"><a class="header-anchor" href="#extend式" aria-hidden="true">#</a> extend式</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'-------app--------'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数式" tabindex="-1"><a class="header-anchor" href="#函数式" aria-hidden="true">#</a> 函数式</h4>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{props.p1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>parent.show($event,12)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    footer........
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//类式：类内定义的实例属性</span>
msg4<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"bmw"</span><span class="token punctuation">;</span>
msg6<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"依赖props的数据"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
msg8<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//undefined类型不响应式</span>
msg9<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//null类型响应式</span>
msg11<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>name<span class="token operator">:</span><span class="token string">'alex'</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">19</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  address<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//extend式： 同vuejs</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token string">"bmw"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//函数式： 不存在状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//类式：类内的实例方法，等同vue的methods选项key</span>
<span class="token function">show</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>msg4<span class="token punctuation">;</span><span class="token comment">//访问实例属性==方式data元数据</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>msg11<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"修改后的name"</span><span class="token punctuation">;</span><span class="token comment">//修改实例属性==修改data元数据</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>bbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">'blue'</span><span class="token punctuation">;</span><span class="token comment">//引入ref访问dom</span>
  <span class="token keyword">let</span> oDiv<span class="token operator">:</span>HTMLDivElement<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#div1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//直接抓取dom</span>
<span class="token punctuation">}</span>

<span class="token comment">//extend式： 与vuejs用法一致</span>
methods<span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token function">show</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  
<span class="token comment">//函数式 不存在this，没有上下文</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性-1" tabindex="-1"><a class="header-anchor" href="#计算属性-1" aria-hidden="true">#</a> 计算属性</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//类式</span>
<span class="token keyword">get</span> <span class="token function">cptMsg4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"计算后的"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//extend式 与vuejs一致</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">cptMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'计算后的'</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg3
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//函数式 不存在 没有this上下文</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="钩子函数" tabindex="-1"><a class="header-anchor" href="#钩子函数" aria-hidden="true">#</a> 钩子函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//类式</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">//extend式 与vuejs一致</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">//函数式 不存在 没有this上下文</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//类式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Prop<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-property-decorator"</span><span class="token punctuation">;</span>

<span class="token comment">//! 操作符（Bang Operator）显式地告诉编译器它的值不为空</span>
@<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> readonly msg<span class="token operator">!</span><span class="token operator">:</span> string<span class="token punctuation">;</span> 

<span class="token comment">//默认值p2</span>
@<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"p2"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> readonly msg2<span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> 

<span class="token comment">//默认值p10,传递类型为数字？</span>
@<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Number <span class="token punctuation">}</span><span class="token punctuation">)</span> readonly msg10<span class="token operator">!</span><span class="token operator">:</span> number<span class="token punctuation">;</span> 

<span class="token comment">//会报警告，避免直接改变属性，因为当父组件重新呈现时，该值将被覆盖</span>

@<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token literal-property property">msg3</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"qqq"</span><span class="token punctuation">;</span> 



<span class="token comment">//extend式 与vuejs一致</span>
<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token literal-property property">prop1</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">'bmw'</span><span class="token punctuation">,</span>
    <span class="token comment">// required:true,</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token operator">=></span>val<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//函数式 与vuejs一致</span>
<span class="token operator">&lt;</span>template functional<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>p1<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"parent.show($event,12)"</span><span class="token operator">></span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性检测-1" tabindex="-1"><a class="header-anchor" href="#属性检测-1" aria-hidden="true">#</a> 属性检测</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//类式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">,</span> Watch<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> Vue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-property-decorator"</span><span class="token punctuation">;</span>

<span class="token comment">//观察msg4数据</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Watch</span></span><span class="token punctuation">(</span><span class="token string">"msg4"</span><span class="token punctuation">)</span>
<span class="token function">onMsg3Change</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> oldValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">//newValue变后,oldValue变前</span>
  window<span class="token punctuation">.</span><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"watch msg4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// immediate 首次运行 deep深度观测</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Watch</span></span><span class="token punctuation">(</span><span class="token string">"msg11"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> deep<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onMsg11Change</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> oldValue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"watch msg11"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//extend式 与vuejs一致</span>
watch<span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token function">msg4</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> oldValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//函数式 不存在，没有this上下文</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-1" tabindex="-1"><a class="header-anchor" href="#ref-1" aria-hidden="true">#</a> ref</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//类式</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>Ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue-property-decorator"</span><span class="token punctuation">;</span>

  <span class="token comment">//refs引用 </span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Ref</span></span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span> <span class="token keyword">readonly</span> bbox<span class="token operator">!</span><span class="token operator">:</span>HTMLDivElement<span class="token punctuation">;</span>

  <span class="token comment">//dom: </span>
	<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div1"</span> ref<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>ref<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token comment">//ref访问</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>bbox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">'blue'</span><span class="token punctuation">;</span>

<span class="token comment">//extend式 与vuejs一致</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"div1"</span> ref<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>ref<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">'blue'</span><span class="token punctuation">;</span>

<span class="token comment">//函数式 不存在，没有this上下文</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指令、过滤器" tabindex="-1"><a class="header-anchor" href="#指令、过滤器" aria-hidden="true">#</a> 指令、过滤器</h3>
<p><strong>全局</strong></p>
<p>ts和js无变化</p>
<p><strong>局部</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//类式</span>
  @<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//局部指令</span>
      <span class="token function-variable function">direc2</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token operator">=></span>window<span class="token punctuation">.</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'direc2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//局部过滤器</span>
      <span class="token function">filt2</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span>string<span class="token punctuation">,</span><span class="token literal-property property">arg</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'filt2'</span><span class="token punctuation">,</span>data<span class="token punctuation">,</span>arg<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">'过滤器的数据'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
  
<span class="token comment">//extend式 与vuejs一致</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filt1</span><span class="token operator">:</span><span class="token punctuation">(</span>data<span class="token operator">:</span>any<span class="token punctuation">,</span><span class="token literal-property property">arg</span><span class="token operator">:</span>any<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter">string</span><span class="token operator">=></span><span class="token string">'处理后的数据'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">direc1</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token operator">=></span>window<span class="token punctuation">.</span>consoe<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'direc1'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h3>
<p>路由的使用方式与vuejs一致，源包自带类型检查文件 xx.d.ts</p>
<p><strong>异步路由</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/goods'</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../pages/Goods.vue'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/reg'</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">r</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'../pages/Reg.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>r<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>全局守卫</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//router.js</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'全局前置守卫'</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>路由独享守卫</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//router.js</span>
<span class="token punctuation">{</span> 
  path<span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span> 
  component<span class="token operator">:</span> User<span class="token punctuation">,</span> 
  <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span><span class="token punctuation">(</span>to<span class="token operator">:</span>Route<span class="token punctuation">,</span>from<span class="token operator">:</span>Route<span class="token punctuation">,</span>next<span class="token operator">:</span><span class="token builtin">Function</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件内部守卫</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//类式</span>
<span class="token comment">//需写在装饰器里</span>
@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">to</span><span class="token operator">:</span>Route<span class="token punctuation">,</span> <span class="token literal-property property">from</span><span class="token operator">:</span>Route<span class="token punctuation">,</span> <span class="token literal-property property">next</span><span class="token operator">:</span>Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">goout</span><span class="token operator">:</span> boolean <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    goout <span class="token operator">?</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">to</span><span class="token operator">:</span>Route<span class="token punctuation">,</span><span class="token literal-property property">from</span><span class="token operator">:</span>Route<span class="token punctuation">,</span><span class="token literal-property property">next</span><span class="token operator">:</span>Function</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">goout</span><span class="token operator">:</span> boolean <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    goout <span class="token operator">?</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//extend式</span>
<span class="token comment">//与vuejs写法一致</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">to</span><span class="token operator">:</span>Route<span class="token punctuation">,</span> <span class="token literal-property property">from</span><span class="token operator">:</span>Route<span class="token punctuation">,</span> <span class="token literal-property property">next</span><span class="token operator">:</span>Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">goout</span><span class="token operator">:</span> boolean <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    goout <span class="token operator">?</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">to</span><span class="token operator">:</span>Route<span class="token punctuation">,</span><span class="token literal-property property">from</span><span class="token operator">:</span>Route<span class="token punctuation">,</span><span class="token literal-property property">next</span><span class="token operator">:</span>Function</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">goout</span><span class="token operator">:</span> boolean <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    goout <span class="token operator">?</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//函数式 	不存在，没有构子</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios-1" tabindex="-1"><a class="header-anchor" href="#axios-1" aria-hidden="true">#</a> axios</h3>
<p>有些插件 需要安装types ，axios需要安装 @types/axios 来支持类型检查</p>
<p><strong>客户端代理</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//   /vue.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//设置代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//axios访问 /api ==  target + /api</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//创建虚拟服务器 </span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//websocket代理</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/douban'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&amp;count=10'</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://douban.uieee.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//路径替换</span>
          <span class="token string-property property">'^/douban'</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// axios 访问/douban/v2 == target + /v2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>axios封装</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types'</span><span class="token punctuation">;</span>

<span class="token comment">// 添加一个请求的拦截</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token operator">:</span>AxiosRequestConfig<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token comment">//1抓取本地token，携带在请求头里</span>
  <span class="token keyword">let</span> user<span class="token operator">:</span>TUser <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user <span class="token operator">=</span> user <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string-property property">'token'</span><span class="token operator">:</span> user<span class="token operator">?.</span>token<span class="token punctuation">}</span>
  
	<span class="token comment">//显示loading...</span>

  <span class="token keyword">return</span> config<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//添加一个响应拦截</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>response<span class="token operator">:</span>AxiosResponse<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//token过期: 返回值2,当前路由不是login时跳转 </span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>err <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
      query<span class="token operator">:</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>fullPath
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>axios <span class="token operator">=</span> axios<span class="token punctuation">;</span>  <span class="token comment">//希望全局使用axios 需要declare global</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// src/types/index.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">IUser</span> <span class="token punctuation">{</span><span class="token comment">//通用，可在外部定义，或外部使用</span>
  err<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  data<span class="token operator">:</span><span class="token punctuation">{</span>
    _id<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    nikename<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    fans<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    follow<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    time<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    icon<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  token<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  msg<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TUser</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>IUser<span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">//映射 联合</span>

<span class="token keyword">declare</span> global <span class="token punctuation">{</span> <span class="token comment">//定义到全局</span>
  <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span><span class="token comment">//给window接口添加axios方法函数</span>
    <span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>TUser<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>登录时种token</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'/api/login'</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">'post'</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span><span class="token punctuation">{</span>username<span class="token operator">:</span><span class="token string">'chenghao'</span><span class="token punctuation">,</span>password<span class="token operator">:</span><span class="token string">'chenghao123'</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    res<span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>err<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>path <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// src/types/index.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">HomeItem</span><span class="token punctuation">{</span>
  _id<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  title<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  des<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  time<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h3>
<p>源包自带类型检查文件 xx.d.ts，无需安装types，需要使用装饰器需下载第三方包vuex-class</p>
<p><strong>state</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IStoreState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types'</span>

<span class="token keyword">let</span> state<span class="token operator">:</span>IStoreState<span class="token operator">=</span><span class="token punctuation">{</span>
  home<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  bLoading<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> state

<span class="token keyword">interface</span> <span class="token class-name">IStoreState</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span>object<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  bLoading<span class="token operator">:</span>Boolean
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>actions</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>IStoreState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../types'</span>

<span class="token keyword">type</span> <span class="token class-name">TAction</span><span class="token operator">=</span><span class="token punctuation">{</span>
  commit<span class="token operator">:</span><span class="token builtin">Function</span><span class="token punctuation">;</span>
  state<span class="token operator">:</span>IStoreState
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">UPDATE_HOME</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> commit<span class="token punctuation">,</span> state <span class="token punctuation">}</span><span class="token operator">:</span>TAction<span class="token punctuation">,</span> payload<span class="token operator">:</span>object<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span><span class="token string">'/api/goods/home'</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span>payload
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      res<span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>err<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
          <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'UPDATE_HOME'</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>mutations</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IStoreState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">UPDATE_HOME</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token operator">:</span>IStoreState<span class="token punctuation">,</span> payload<span class="token operator">:</span>object<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>home <span class="token operator">=</span> payload<span class="token punctuation">,</span>
  <span class="token function-variable function">UPDATE_LOADING</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token operator">:</span>IStoreState<span class="token punctuation">,</span> payload<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>bLoading <span class="token operator">=</span> payload
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>getters</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IStoreState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">bLoading</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token operator">:</span>IStoreState<span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>bLoading <span class="token operator">?</span> <span class="token string">'加载中'</span> <span class="token operator">:</span> <span class="token string">'加载完成'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件内使用</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//类式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  State<span class="token punctuation">,</span>
  Getter<span class="token punctuation">,</span>
  Action<span class="token punctuation">,</span>
  Mutation
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex-class'</span>

<span class="token comment">//装饰实例属性，状态来自公共state</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> bLoading<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token operator">|</span><span class="token keyword">undefined</span><span class="token comment">//装饰一个实例属性bNav引用到state.bNav</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span><span class="token punctuation">(</span><span class="token string">'home'</span><span class="token punctuation">)</span> stateHome<span class="token operator">!</span><span class="token operator">:</span>object<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//外部state.home 做 组件内的stateHome使用</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span><span class="token punctuation">(</span>state<span class="token operator">=></span>state<span class="token punctuation">.</span>home<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> h1<span class="token operator">?</span><span class="token operator">:</span>object<span class="token punctuation">;</span><span class="token comment">//回调形式返回state的某个值</span>


<span class="token comment">//把getters的key装饰到组件实例属性</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Getter</span></span><span class="token punctuation">(</span><span class="token string">'bLoading'</span><span class="token punctuation">)</span> getterLoading<span class="token operator">!</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token comment">//抓取getters的key，作为getterLoading使用</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Getter</span></span> bLoading<span class="token operator">!</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span><span class="token comment">//抓取getters的key，作为组件实例属性使用</span>

<span class="token comment">//装饰actions的type，作为组件实例属性</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Action</span></span><span class="token punctuation">(</span><span class="token string">'UPDATE_HOME'</span><span class="token punctuation">)</span> udpateHome<span class="token operator">!</span><span class="token operator">:</span><span class="token punctuation">(</span>payload<span class="token operator">:</span>object<span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// this.updateHome(..)调用</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Action</span></span> <span class="token constant">UPDATE_HOME</span><span class="token operator">!</span><span class="token operator">:</span><span class="token punctuation">(</span>payload<span class="token operator">:</span>object<span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">void</span><span class="token punctuation">;</span><span class="token comment">//this.UPDATE_HOME(..) 调用</span>

<span class="token comment">//装饰mutations的type，作为组件实例属性</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Mutation</span></span><span class="token punctuation">(</span><span class="token string">'UPDATE_LOADING'</span><span class="token punctuation">)</span> upLoading<span class="token operator">!</span><span class="token operator">:</span><span class="token punctuation">(</span>payload<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">void</span><span class="token punctuation">;</span><span class="token comment">//this.upLoading(true) 调用</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Mutation</span></span> <span class="token constant">UPDATE_LOADING</span><span class="token operator">!</span><span class="token operator">:</span><span class="token punctuation">(</span>payload<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">void</span><span class="token punctuation">;</span><span class="token comment">//this.UPDATE_NAV(true) 调用</span>

<span class="token comment">//template内调用</span>
<span class="token operator">&lt;</span>button <span class="token decorator"><span class="token at operator">@</span><span class="token function">click</span></span><span class="token operator">=</span><span class="token string">"UPDATE_LOADING(true)"</span><span class="token operator">></span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改装登录后写入localStorage并同步vuex，拦截器读取vuex，强刷后读取localStorage并同步vuex，注销时，删除vuex和localStorage</p>
<h2 id="服务端渲染nuxt" tabindex="-1"><a class="header-anchor" href="#服务端渲染nuxt" aria-hidden="true">#</a> 服务端渲染Nuxt</h2>
<h3 id="服务端渲染-vs-客户端渲染" tabindex="-1"><a class="header-anchor" href="#服务端渲染-vs-客户端渲染" aria-hidden="true">#</a> 服务端渲染 vs 客户端渲染</h3>
<h3 id="什么是-csr" tabindex="-1"><a class="header-anchor" href="#什么是-csr" aria-hidden="true">#</a> 什么是 CSR ?</h3>
<p>CSR =&gt; client-side-render，即客户端渲染。具体过程如下：</p>
<ul>
<li>用户请求页面，返回页面。此时页面只是模版页面</li>
<li>浏览器解析页面代码，读到js代码时，会根据我们所写的接口去请求数据</li>
<li>得到返回数据后使用模版（vue/react/ng/art-template）进行渲染</li>
<li><a href="https://main.m.taobao.com/?sprefer=sypc00" target="_blank" rel="noopener noreferrer">网站举例<ExternalLinkIcon/></a></li>
</ul>
<h3 id="什么是-ssr" tabindex="-1"><a class="header-anchor" href="#什么是-ssr" aria-hidden="true">#</a> 什么是 SSR ?</h3>
<p>SSR =&gt; server-side-render，即服务器端渲染。具体过程如下：</p>
<ul>
<li>用户请求页面</li>
<li>后端取到准备好的数据，渲染到我们自己写的服务器模版（next/nuxt/ejs）中，准备好html结构与相应数据后返回给浏览器</li>
</ul>
<h3 id="csr-ssr-优缺点对比" tabindex="-1"><a class="header-anchor" href="#csr-ssr-优缺点对比" aria-hidden="true">#</a> CSR &amp; SSR 优缺点对比</h3>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">优点</th>
<th style="text-align:left">缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">CSR</td>
<td style="text-align:left">减轻服务器压力，前后端分离</td>
<td style="text-align:left">对seo不友好（不利于爬虫爬取）</td>
</tr>
<tr>
<td style="text-align:left">SSR</td>
<td style="text-align:left">对seo友好</td>
<td style="text-align:left">对服务器性能有一定要求，不利于前后端分离</td>
</tr>
</tbody>
</table>
<p>其实在真正开发中通常是 csr 与 ssr 相结合使用，前端使用cdn缓存，后端使用nginx缓存。这样是最优的解决方案。上两张图大家对比理解：</p>
<p><img src="https:////upload-images.jianshu.io/upload_images/2763803-03e5b46f84f14a54.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="img"></p>
<p><img src="https:////upload-images.jianshu.io/upload_images/2763803-670c1d0afadc4ce1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="img"></p>
<h3 id="vue-js-服务器端渲染" tabindex="-1"><a class="header-anchor" href="#vue-js-服务器端渲染" aria-hidden="true">#</a> Vue.js 服务器端渲染</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init -y
<span class="token function">npm</span> <span class="token function">install</span> vue vue-server-renderer --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="渲染一个-vue-实例" tabindex="-1"><a class="header-anchor" href="#渲染一个-vue-实例" aria-hidden="true">#</a> 渲染一个 Vue 实例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 第 1 步：创建一个 Vue 实例</span>
<span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>Hello World&lt;/div></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 第 2 步：创建一个 renderer</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-server-renderer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 第 3 步：将 Vue 实例渲染为 HTML</span>
renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token comment">// => &lt;div data-server-rendered="true">Hello World&lt;/div></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：</span>
renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="与服务器集成" tabindex="-1"><a class="header-anchor" href="#与服务器集成" aria-hidden="true">#</a> 与服务器集成</h4>
<p>在 Node.js 服务器中使用时相当简单直接，例如 <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express<ExternalLinkIcon/></a>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-server-renderer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>访问的 URL 是： {{ url }}&lt;/div></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'Internal Server Error'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;!DOCTYPE html>
      &lt;html lang="en">
        &lt;head>&lt;title>Hello&lt;/title>&lt;/head>
        &lt;body></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>html<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/body>
      &lt;/html>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nuxt-框架" tabindex="-1"><a class="header-anchor" href="#nuxt-框架" aria-hidden="true">#</a> Nuxt 框架</h3>
<p><a href="https://zh.nuxtjs.org/guide" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<p>简单来说，<strong>Nuxt</strong>就是基于<strong>Vue</strong>的一个应用框架，采用<strong>服务端渲染</strong>，让你的<strong>SPA应用(Vue)<strong>也可以拥有</strong>SEO</strong></p>
<p>Vue 开发一个单页面应用，相信很多前端工程师都已经学会了，但是单页面应用有一个致命的缺点，就是 SEO 极不友好。除非，vue 能在服务端渲染（ssr）并直接返回已经渲染好的页面，而并非只是一个单纯的 <code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>。</p>
<p><a href="https://zh.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js<ExternalLinkIcon/></a> 就是一个极简的 vue 版的 ssr 框架。基于它，我们可以快速开发一个基于 vue 的 ssr 单页面应用。</p>
<h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4>
<p>Nuxt.js 官方提供了一个模板，可以使用 vue-cli 直接安装。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ vue init nuxt-community/starter-template project-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者通过</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install npx
npx create-nuxt-app xxx
Project name nuxttest

? Project description My laudable Nuxt.js project
? Author name uncle9
? Choose the package manager Npm
? Choose UI framework None
? Choose custom server framework Express
? Choose Nuxt.js modules Axios
? Choose linting tools (Press &lt;space> to select, &lt;a> to toggle all, &lt;i> to invert selection)
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools jsconfig.json (Recommended for VS Code)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意： mode 选择 同构 universal</p>
</blockquote>
<h4 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
├── README.md
├── assets
├── components
├── layouts
├── middleware
├── node_modules
├── nuxt.config.js
├── package.json
├── pages
├── plugins
├── static
├── store
└── yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ol>
<li>
<p><strong>assets</strong>: 资源文件。放置需要经过 webpack 打包处理的资源文件，如 scss，图片，字体等。</p>
</li>
<li>
<p><strong>components</strong>: vue组件。这里存放在页面中，可以复用的组件,不支持服务器端的钩子。</p>
</li>
<li>
<p><strong>layouts</strong>: 布局。页面都需要有一个布局，默认为 default。它规定了一个页面如何布局页面。所有页面都会加载在布局页面中的 <code v-pre>&lt;nuxt /&gt;</code> 标签中。如果需要在普通页面中使用下级路由，则需要在页面中添加 <code v-pre>&lt;nuxt-child /&gt;</code>。该目录名为Nuxt.js保留的，不可更改。在 layout 中我们可以放入一些每个页面都会以用到的组件，比如 header &amp; footer。当然如果你不想使用已生成的 layout 组件，你可以重新创建一个，比如 blank.vue 一般不需要引入 header&amp;footer 的页面可以使用 blank.vue 这个 layout 组件。代码如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>layout: 'blank'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>middleware</strong>: 中间件。存放中间件。可以在页面中调用： <code v-pre>middleware: 'middlewareName'</code> 。</p>
</li>
<li>
<p><strong>pages</strong>: 页面。一个 vue 文件即为一个页面。index.vue 为根页面。</p>
<ol>
<li>
<p>若需要二级页面，则添加文件夹即可。</p>
</li>
<li>
<p>如果页面的名称类似于 <code v-pre>_id.vue</code> （以 <code v-pre>_</code> 开头），则为动态路由页面，<code v-pre>_</code> 后为匹配的变量（params）。</p>
</li>
<li>
<p>若变量是必须的，则在文件夹下建立空文件 <code v-pre>index.vue</code>。更多的配置请移步至 <a href="https://zh.nuxtjs.org/guide/routing" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a> 。</p>
</li>
</ol>
</li>
<li>
<p><strong>plugin</strong>: 插件。用于组织和配置，那些需要在 <code v-pre>根vue.js应用</code> 实例化之前需要运行的 Javascript 插件，需要配合nuxt.config.js</p>
</li>
<li>
<p><strong>static</strong>: 静态文件。放置不需要经过 webpack 打包的静态资源。如一些 js, css 库。</p>
</li>
<li>
<p><strong>store</strong>: Nuxt.js 框架集成了 <a href="http://vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex 状态树<ExternalLinkIcon/></a> 的相关功能配置，在 <code v-pre>store</code> 目录下创建一个 <code v-pre>index.js</code> 文件可激活这些配置。</p>
</li>
<li>
<p><strong>nuxt.config.js</strong>: <code v-pre>nuxt.config.js</code> 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。具体配置请移步至 <a href="https://zh.nuxtjs.org/guide/configuration" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>。</p>
</li>
</ol>
<h4 id="生命周期-1" tabindex="-1"><a class="header-anchor" href="#生命周期-1" aria-hidden="true">#</a> 生命周期</h4>
<p><strong>Vue</strong>的生命周期全都跑在<strong>客户端(浏览器)</strong>，而<strong>Nuxt</strong>的生命周期在<strong>服务端(Node)，客户端，甚至两边都在:</strong></p>
<p><img src="https:////upload-images.jianshu.io/upload_images/5531211-d1a3e5b36ee03f08.png?imageMogr2/auto-orient/strip|imageView2/2/w/460/format/webp" alt="img"></p>
<p>红框内的是Nuxt的生命周期首次运行在服务端，之后运行在vue组件创建之前，黄框内同时运行在服务端&amp;&amp;客户端上，绿框内则运行在客户端</p>
<h5 id="nuxtserverinit" tabindex="-1"><a class="header-anchor" href="#nuxtserverinit" aria-hidden="true">#</a> nuxtServerInit</h5>
<p>请求先到达 nuxtServerInit 方法，图中也表明了适用场景是对 store 操作，函数仅在每个服务器端渲染中运行 且运行一次，只能定义在store的主模板当中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// store/index.js

export const actions = {
  nuxtServerInit(store, {app:{$cookies},route,$axios,req,res,redirect}) {

    let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'未登录',token:''};
    // store.dispatch('user/A_UPDATE_USER',user)  user== store/user.js
    store.commit('user/M_UPDATE_USER',user)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> middleware</h5>
<p>下来请求到达 middleware ，允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。可以运行在全局，或者某个页面组件之前，不会在components组件内部运行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//middleware/auth.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">app</span><span class="token operator">:</span><span class="token punctuation">{</span>$cookies<span class="token punctuation">}</span><span class="token punctuation">,</span>store<span class="token punctuation">,</span>redirect<span class="token punctuation">,</span>route<span class="token punctuation">,</span>$axios<span class="token punctuation">,</span>params<span class="token punctuation">,</span>query<span class="token punctuation">,</span>req<span class="token punctuation">,</span>res<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token comment">//nuxt.conig.js</span>
<span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token string">'auth'</span> <span class="token comment">//全局守卫 运行一组页面渲染之前</span>
<span class="token punctuation">}</span>

<span class="token comment">//layouts/a.vue  运行在一个布局之前</span>
<span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//定义在内部</span>
<span class="token literal-property property">middleware</span><span class="token operator">:</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token comment">//定义在外部</span>
  
<span class="token comment">//pages/a.vue  运行在一个页面之前</span>
<span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//定义在内部</span>
<span class="token literal-property property">middleware</span><span class="token operator">:</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token comment">//定义在外部</span>
  
<span class="token comment">//中间件执行流程顺序：</span>
<span class="token comment">//nuxt.config.js->匹配布局->匹配页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="validate" tabindex="-1"><a class="header-anchor" href="#validate" aria-hidden="true">#</a> validate</h5>
<p>下来请求到达 validate 方法，在这里可以对 page 组件 component 组件 进行动态路参数的有效性。返回 <code v-pre>true</code> 说明路由有效，则进入路由页面。返回不是 <code v-pre>true</code> 则显示 404 页面。</p>
<p>只能在页面组件使用(pages/xx.vue)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">validate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> query <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//参数校验，校验失败，则自动跳转到错误页面</span>
  <span class="token comment">// return /^d+$/.test(params.id) // must be number</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//true、false跳转方向</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="asyncdata-fetch" tabindex="-1"><a class="header-anchor" href="#asyncdata-fetch" aria-hidden="true">#</a> asyncData &amp; fetch</h5>
<p>接下来达到 asyncData &amp; fetch 方法，asyncData() 适用于在渲染组件前获取异步数据,返回数据后合并到data选项内部，fetch() 适用于在渲染页面前填充 vuex 中维护的数据。会在组件每次加载前被调用（在服务端或切换至目标路由之前）,由于是在组件 <strong>初始化</strong> 前被调用的，所以在方法内是没有办法通过 <code v-pre>this</code> 来引用组件的实例对象。</p>
<p>只能在页面组件使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//pages/a.vue</span>
<span class="token keyword">async</span> <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//页面组件数据预载 需要return 之后会和页面data合并</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">$axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/goods/home'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">msg2</span><span class="token operator">:</span><span class="token string">'oo'</span><span class="token punctuation">,</span><span class="token literal-property property">data</span><span class="token operator">:</span>res<span class="token punctuation">.</span>data<span class="token punctuation">}</span><span class="token comment">//组件数据 异步的，初始的都在这里生成</span>
<span class="token punctuation">}</span>

<span class="token function">asyncData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://my-api/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">$axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/goods/home'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  context<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'XXX'</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//状态操作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h5>
<p>最后进行渲染。将渲染后的页面返回给浏览器，用户在页面进行操作，如果再次请求新的页面，此时只会回到生命周期中的 middlerware 中，而非 nuxtServerInit ，所以如果不同页面间需要操作相同的数据请用 vuex 来维护，render钩子只能定义渲染时的配置，render内部不可以有业务逻辑，也不执行</p>
<h5 id="beforecreate-created" tabindex="-1"><a class="header-anchor" href="#beforecreate-created" aria-hidden="true">#</a> beforeCreate &amp; created</h5>
<p>运行在服务端 &amp; 客户端，可以获取到组件this，</p>
<h5 id="mounted-updated" tabindex="-1"><a class="header-anchor" href="#mounted-updated" aria-hidden="true">#</a> mounted &amp; updated</h5>
<p>运行在客户端，没有keep-alive 那自然activated、deactivated这两个生命周期也没了</p>
<h5 id="没有keep-alive" tabindex="-1"><a class="header-anchor" href="#没有keep-alive" aria-hidden="true">#</a> <strong>没有keep-alive</strong></h5>
<p>由于是服务端渲染，所以不支持组件的<strong>keep-alive</strong>，那自然<strong>activated、deactivated</strong>这两个生命周期<strong>也没了</strong></p>
<h5 id="不存在window" tabindex="-1"><a class="header-anchor" href="#不存在window" aria-hidden="true">#</a> <strong>不存在Window</strong></h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
  asyncData() {
    console.log(window) // 服务端报错
  },
  fetch() {
    console.log(window) // 服务端报错
  },
  created () {
    console.log(window) // undefined
  },
  mounted () {
    console.log(window) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由-3" tabindex="-1"><a class="header-anchor" href="#路由-3" aria-hidden="true">#</a> 路由</h4>
<h5 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> <strong>跳转</strong></h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;nuxt-link to="/product/1?a=1&amp;b=2">商品001&lt;/nuxt-link>
&lt;nuxt-link to="/product/2?a=11&amp;b=22">商品02&lt;/nuxt-link>
&lt;nuxt-link :to="{name:'product-id',params:{id:3},query:{a:111,b:222}}">商品03&lt;/nuxt-link>

属性对等router-link
product-id 子集 product-目录名-id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="展示" tabindex="-1"><a class="header-anchor" href="#展示" aria-hidden="true">#</a> <strong>展示</strong></h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;nuxt>  一级
&lt;nuxt-child /> 子级

属性对象router-view
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> <strong>配置</strong></h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pages/
--| goods/ 二级
-----| index.vue 默认页 可以整个文件留空，goods就无默认页，
								一级的goods.vue替换这里的index会二级展示区替换一级展示区
-----| _id.vue 详情页 {{$route.params.id}}/{{$route.query.a}}/{{$route.query.b}}
-----| comment.vue   &lt;nuxt-link :to="{name:'goods-comment-uid'
-----| comment
--------| index.vue 默认页 ~~ comment.vue
--------| _uid.vue
--| index.vue 一级
--| goods.vue 一级  显示在一级展示区

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> <strong>请求</strong></h5>
<table>
<thead>
<tr>
<th style="text-align:left">PATH</th>
<th style="text-align:left">FILE</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>/</code></td>
<td style="text-align:left"><code v-pre>index.vue</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/goods</code></td>
<td style="text-align:left"><code v-pre>goods/index.vue</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/goods/123</code></td>
<td style="text-align:left"><code v-pre>goods/_id.vue</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/goods/comment</code></td>
<td style="text-align:left"><code v-pre>goods/comment.vue</code></td>
</tr>
</tbody>
</table>
<h5 id="公共组件" tabindex="-1"><a class="header-anchor" href="#公共组件" aria-hidden="true">#</a> <strong>公共组件</strong></h5>
<p>大家都知道，<strong>vue-cli</strong>入口文件是<strong>app.vue</strong>，在<strong>nuxt</strong>开发当中则是**./layout/default.vue**</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div id="app">
    &lt;!-- 公共头部组件 -->
    &lt;xxx-header>&lt;/xxx-header>
    &lt;!-- 路由视图，相当于router-view -->
    &lt;nuxt/>
    &lt;!-- 公共底部组件 -->
    &lt;xxx-footer>&lt;/xxx-footer>
  &lt;/div>
&lt;/template>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="扩展路由" tabindex="-1"><a class="header-anchor" href="#扩展路由" aria-hidden="true">#</a> 扩展路由</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//nuxt.config.js</span>
 <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">extendRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes<span class="token punctuation">,</span> resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'nuxtconfig'</span><span class="token punctuation">,</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/index'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'pages/index.vue'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="校验参数" tabindex="-1"><a class="header-anchor" href="#校验参数" aria-hidden="true">#</a> 校验参数</h5>
<p>如果校验失败，则自动跳转到错误页面</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
  validate({ params, query }) {
    return /^d+$/.test(params.id) // must be number
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置错误页面" tabindex="-1"><a class="header-anchor" href="#配置错误页面" aria-hidden="true">#</a> <strong>配置错误页面</strong></h5>
<p>你可以通过编辑 layouts/error.vue 文件来定制化错误页面.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;div class="container">
    &lt;h1 v-if="error.statusCode === 404">页面不存在&lt;/h1>
    &lt;h1 v-else>应用发生错误异常&lt;/h1>
    &lt;nuxt-link to="/">首 页&lt;/nuxt-link>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  props: ['error'],
  //layout: 'blog' // 你可以为错误页面指定自定义的布局
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="路由统一动效" tabindex="-1"><a class="header-anchor" href="#路由统一动效" aria-hidden="true">#</a> 路由统一动效</h5>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*  assets/main.css 全局通用样式 */</span>

<span class="token comment">/*  路由统一动效 */</span>
<span class="token selector">.page-enter-active, .page-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.page-enter, .page-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 单独路由 -> 组件内部 transition: 'test'*/</span>
<span class="token selector">.test-enter-active, .test-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> .5s ease all <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test-enter, .test-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -1000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//nuxt.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'assets/main.css'</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="守卫" tabindex="-1"><a class="header-anchor" href="#守卫" aria-hidden="true">#</a> 守卫</h5>
<p>前置依赖中间件middleware，后置使用vue的 beforeRouteLeave钩子</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//middleware/auth.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">app</span><span class="token operator">:</span><span class="token punctuation">{</span>$cookies<span class="token punctuation">}</span><span class="token punctuation">,</span>store<span class="token punctuation">,</span>redirect<span class="token punctuation">,</span>route<span class="token punctuation">,</span>$axios<span class="token punctuation">,</span>params<span class="token punctuation">,</span>query<span class="token punctuation">,</span>req<span class="token punctuation">,</span>res<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token comment">//nuxt.conig.js</span>
<span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token string">'auth'</span> <span class="token comment">//全局守卫 运行一组页面渲染之前</span>
<span class="token punctuation">}</span>

<span class="token comment">//layouts/a.vue  运行在一个布局之前</span>
<span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//定义在内部</span>
<span class="token literal-property property">middleware</span><span class="token operator">:</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token comment">//定义在外部</span>
  
<span class="token comment">//pages/a.vue  运行在一个页面之前</span>
<span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//定义在内部</span>
<span class="token literal-property property">middleware</span><span class="token operator">:</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token comment">//定义在外部</span>
  
<span class="token comment">//中间件执行流程顺序：</span>
<span class="token comment">//nuxt.config.js->匹配布局->匹配页面</span>
  

<span class="token comment">//插件定义 的 全局前后置</span>
<span class="token comment">// plugins/router.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'全局后置'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'全局前置'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//nuxt.config.js</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'~/plugins/router'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据交互-2" tabindex="-1"><a class="header-anchor" href="#数据交互-2" aria-hidden="true">#</a> 数据交互</h4>
<h5 id="axios-2" tabindex="-1"><a class="header-anchor" href="#axios-2" aria-hidden="true">#</a> Axios</h5>
<p>推荐使用**@nuxtjs/axios、@nuxtjs/proxy**，不需要在plugins配置</p>
<p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install @nuxtjs/axios @nuxtjs/proxy --save
modules: [ '@nuxtjs/axios' ], // 不需要加入@nuxtjs/proxy

读取json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用、处理跨域</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// nuxt.config.js
module.exports = {
  modules: [ '@nuxtjs/axios' ], // 不需要加入@nuxtjs/proxy
  axios: {
    proxy: true,//开启axios跨域
    //prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:3001', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        //'^/api': ''
      },
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
  fetch ({store,redirect,route,params,query,$axios,from,error}) {
  	//error 通过调用该方法来显示错误信息页面。
  	//  error({ statusCode: 404, message: 'Post not found' })
    console.log($axios)
  },
  asyncData ({store,redirect,route,params,query,$axios,from,error}) {
    console.log($axios)
  },
  created () {
    console.log(this.$axios)
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此为止，我们并不需要在plugins配置axios，但是如果要设置全局拦截器，那么就要新建一个/plugins/axios.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default function ({
	app:{$cookies},store,redirect,route,
	$axios,params,query,req,res,...rest
}) {
	//nuxt.config配置ssr后，第一次服务端运行，之后的路由跳转在客户端运行
	// 基本配置
  $axios.defaults.timeout = 10000
  
  // 请求回调
  $axios.onRequest(config => {
    config.headers.token = '假token'
    return config;
  })

  // 返回回调
  $axios.onResponse(res => {
    if(res.data.err==2 &amp;&amp; route.fullPath!=='/login'){
      redirect('/login?path='+route.fullPath)
    }
    return res;
  })

  // 错误回调
  $axios.onError(error => {
    //..
    return error;
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在nuxt.config.js &gt; plugins配置它</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  plugins = [
    {
      src: "~/plugins/axios",
      ssr: true
    },
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义loading页面" tabindex="-1"><a class="header-anchor" href="#自定义loading页面" aria-hidden="true">#</a> <strong>自定义Loading页面</strong></h5>
<p>nuxt.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
	loading: { //设置默认loading条
    color: '#399',
    height: '3px'
  }
  loading: '~/components/loading.vue'//自定义loading组件
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>loading.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading-page<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">finish</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.loading-page</span> <span class="token punctuation">{</span>
		<span class="token comment">/*https://www.cnblogs.com/lhb25/p/loading-spinners-animated-with-css3.html*/</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vuex-1" tabindex="-1"><a class="header-anchor" href="#vuex-1" aria-hidden="true">#</a> vuex</h4>
<h5 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h5>
<p><strong>nuxt</strong>自己集成了<strong>vuex</strong>，也可后期自己安装**，<strong>支持两种使用 <code v-pre>store</code> 的方式，你可以择一使用，无论使用那种模式，您的<code v-pre>state</code>的值应该</strong>始终是**<code v-pre>function</code></p>
<ul>
<li><strong>模块方式：</strong> <code v-pre>store</code> 目录下的每个 <code v-pre>.js</code> 文件会被转换成为状态树<a href="http://vuex.vuejs.org/en/modules.html" target="_blank" rel="noopener noreferrer">指定命名的子模块<ExternalLinkIcon/></a> （当然，<code v-pre>index</code> 是根模块）</li>
<li><strong>Classic(不建议使用)：</strong> <code v-pre>store/index.js</code>返回创建Vuex.Store实例的方法。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//store/index 主模块</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">bNav</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bLoading</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">M_UPDATE_NAV</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>bNav <span class="token operator">=</span> payload<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">M_UPDATE_LOADING</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>bLoading <span class="token operator">=</span> payload<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">getNav</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>bNav <span class="token operator">?</span> <span class="token string">'显示'</span> <span class="token operator">:</span> <span class="token string">'隐藏'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">nuxtServerInit</span><span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    route<span class="token punctuation">,</span>
    req<span class="token punctuation">,</span>
    res<span class="token punctuation">,</span>
    redirect<span class="token punctuation">,</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span><span class="token punctuation">{</span>$cookies<span class="token punctuation">}</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log('nuxtServerInit');</span>
    <span class="token keyword">let</span> user <span class="token operator">=</span> $cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span> <span class="token operator">?</span> $cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">err</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'为登录'</span><span class="token punctuation">,</span><span class="token literal-property property">token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'user/M_UPDATE_USER'</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//store/home.js 模块方式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">err</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">M_UPDATE_HOME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>err <span class="token operator">=</span> payload<span class="token punctuation">.</span>err<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>data <span class="token operator">=</span> payload<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token constant">A_UPDATE_HOME</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">,</span>state<span class="token punctuation">}</span><span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>store<span class="token punctuation">,</span>redirect<span class="token punctuation">,</span>route<span class="token punctuation">,</span>next<span class="token punctuation">,</span>params<span class="token punctuation">,</span>query<span class="token punctuation">,</span>error<span class="token punctuation">,</span>$axios<span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>$nuxt<span class="token punctuation">.</span>context
    <span class="token comment">// error({message:'asdfasdf',errorCode:404})</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>$nuxt<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">$axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/api/goods/home'</span><span class="token punctuation">,</span><span class="token literal-property property">params</span><span class="token operator">:</span>payload<span class="token punctuation">,</span><span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(res);</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_UPDATE_HOME'</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//store/user模块</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">state</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">err</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'未登录'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">M_UPDATE_USER</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log('M_UPDATE_USER');</span>
    state<span class="token punctuation">.</span>err <span class="token operator">=</span> payload<span class="token punctuation">.</span>err<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>msg <span class="token operator">=</span> payload<span class="token punctuation">.</span>msg<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>data <span class="token operator">=</span> payload<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>token <span class="token operator">=</span> payload<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">A_UPDATE_USER</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    commit<span class="token punctuation">,</span>
    state
  <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log('A_UPDATE_USER');</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_UPDATE_USER'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h5>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> 
    	<span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A_UPDATE_USER({err:0,msg:<span class="token punctuation">'</span>heheda<span class="token punctuation">'</span>,token:<span class="token punctuation">'</span><span class="token punctuation">'</span>,data:{}})<span class="token punctuation">"</span></span>
  	<span class="token punctuation">></span></span>跨域axios数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    {{getUser}} {{msg}} {{$store.user.msg}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>mapActions<span class="token punctuation">,</span>mapGetters<span class="token punctuation">,</span>mapState<span class="token punctuation">,</span>mapMutations<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//方法或钩子函数 里面调用</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'A_UPDATE_USER'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_UPDATE_USER'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">M_UPDATE_USER</span><span class="token punctuation">(</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">A_UPDATE_USER</span><span class="token punctuation">(</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'A_UPDATE_USER'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// user == store/user.js</span>
    	<span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'M_UPDATE_USER'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'getUser'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'msg'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="window上的context" tabindex="-1"><a class="header-anchor" href="#window上的context" aria-hidden="true">#</a> window上的context</h5>
<p>在一个普通js模块里面，运行在客户端时，需要抓取nuxt上下文</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//actions 使用axios时，需要触发nuxt配置的拦截器</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>store<span class="token punctuation">,</span>redirect<span class="token punctuation">,</span>route<span class="token punctuation">,</span>next<span class="token punctuation">,</span>params<span class="token punctuation">,</span>query<span class="token punctuation">,</span>error<span class="token punctuation">,</span>$axios<span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>$nuxt<span class="token punctuation">.</span>context
<span class="token comment">//$axios() 这样方可触发</span>

<span class="token comment">//没有loading效果，需要改装loading组件</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'bLoading'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_UPDATE_LOADING'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_UPDATE_LOADING'</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//拦截器修改bLoading</span>
$axios<span class="token punctuation">.</span><span class="token function">onRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'M_UPDATE_LOADING'</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="状态持久-token校验" tabindex="-1"><a class="header-anchor" href="#状态持久-token校验" aria-hidden="true">#</a> 状态持久&amp;token校验</h5>
<p>浏览器在强刷时，localStorage是不会随请求发到浏览器，cookie会</p>
<p>安装：<a href="https://www.npmjs.com/package/cookie-universal-nuxt" target="_blank" rel="noopener noreferrer">cookie-universal-nuxt<ExternalLinkIcon/></a></p>
<p>nuxt.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'cookie-universal-nuxt'</span><span class="token punctuation">,</span> <span class="token comment">// cookie-universal-nuxt 给浏览器cookie种token</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录时，存vuex和cookie，nuxtServerInit取出cookies，存vuex，axios拦截找vuex拿，不强刷，不读本地</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//login.vue</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token comment">//种token到浏览器的cookie里</span>

<span class="token comment">//store/index.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">nuxtServerInit</span><span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">app</span><span class="token operator">:</span><span class="token punctuation">{</span>$cookies<span class="token punctuation">}</span><span class="token punctuation">,</span>route<span class="token punctuation">,</span>$axios<span class="token punctuation">,</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>redirect<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> user <span class="token operator">=</span> $cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span> <span class="token operator">?</span> $cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">err</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'未登录'</span><span class="token punctuation">,</span><span class="token literal-property property">token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// store.dispatch('user/A_UPDATE_USER',user)</span>
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'user/M_UPDATE_USER'</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//plugins/axios.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  <span class="token literal-property property">app</span><span class="token operator">:</span><span class="token punctuation">{</span>$cookies<span class="token punctuation">}</span><span class="token punctuation">,</span>store<span class="token punctuation">,</span>redirect<span class="token punctuation">,</span>route<span class="token punctuation">,</span>$axios<span class="token punctuation">,</span>params<span class="token punctuation">,</span>query<span class="token punctuation">,</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span><span class="token operator">...</span>rest
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//设置拦截器 -> nuxt.config.js</span>
 <span class="token comment">// 基本配置</span>
  $axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span>
  
  <span class="token comment">// 请求回调</span>
  $axios<span class="token punctuation">.</span><span class="token function">onRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>token
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 返回回调</span>
  $axios<span class="token punctuation">.</span><span class="token function">onResponse</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>err<span class="token operator">==</span><span class="token number">2</span> <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>fullPath<span class="token operator">!==</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login?path='</span><span class="token operator">+</span>route<span class="token punctuation">.</span>fullPath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 错误回调</span>
  $axios<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> error<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui" aria-hidden="true">#</a> <strong>element-ui</strong></h4>
<p><strong>所有插件</strong>都写在**/plugins目录<strong>下，这里以</strong>element-ui**为例</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//plugins/element-ui.js

// 整体引入全局使用
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 按需引入全局使用
import { Button, Loading, MessageBox } from 'element-ui'
Vue.use(Button)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nuxt.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: [
    {
      src: "~/plugins/element",
      ssr: true//不支持ssr的插件只会在客户端运行不要给true。
      mode:'client|server' //v2.4+ 会代替ssr
    }
  ]
  
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局定义" tabindex="-1"><a class="header-anchor" href="#全局定义" aria-hidden="true">#</a> 全局定义</h4>
<h5 id="全局方法" tabindex="-1"><a class="header-anchor" href="#全局方法" aria-hidden="true">#</a> <strong>全局方法</strong></h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//plugins/mixins.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> <span class="token function-variable function">show</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'show'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$show<span class="token operator">=</span>show<span class="token punctuation">;</span><span class="token comment">//服务器钩子内部不可用</span>

<span class="token comment">//nuxt.config.js</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">'@/plugins/mixins'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件调用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
  created() {
    this.$show()
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="全局过滤器" tabindex="-1"><a class="header-anchor" href="#全局过滤器" aria-hidden="true">#</a> 全局过滤器</h5>
<p>在plugins新建一个mixins.js，过滤器可以这样玩：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//plugins/mixins.js
import Vue from 'vue'

//全局过滤器
import * as filters from '../assets/script/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import {date} from './date.js'
import {fillzero} from './fillzero.js'
export {date,fillzero}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在nuxt.config.js中注册一下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  plugins: [
    ‘~plugins/mixins.js‘
  ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中就可以这样happy的用起来了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 时间格式化 -->
&lt;div>
 &lt;span>{{234243 | date&lt;/span>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="全局指令" tabindex="-1"><a class="header-anchor" href="#全局指令" aria-hidden="true">#</a> 全局指令</h5>
<p>在plugins新建一个mixins.js，可以这样玩：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//plugins/mixins.js
import Vue from 'vue'
import direc1 from '../assets/script/directives/direc1.js'
Vue.directive('direc1',direc1)

//direc1.js
function direc1(el,binding,vnode){
  console.log('指令');
}

export default {
  bind(el,binding,vnode){
    direc1(el,binding,vnode)
  },
  inserted(el,binding,vnode){
    direc1(el,binding,vnode)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在nuxt.config.js中注册一下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  plugins: [
    ‘~plugins/mixins.js‘
  ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中就可以这样happy的用起来了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div>
 &lt;span v-direc1>&lt;/span>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件" aria-hidden="true">#</a> 全局组件</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//全局组件 //plugins/mixins.js</span>
<span class="token keyword">import</span> Confirm <span class="token keyword">from</span> <span class="token string">'../components/global/Confirm.vue'</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'Confirm'</span><span class="token punctuation">,</span>Confirm<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="全局样式" tabindex="-1"><a class="header-anchor" href="#全局样式" aria-hidden="true">#</a> <strong>全局样式</strong></h5>
<p>nuxt.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  css: ['~/assets/stylesheets/main.min.css']
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h4>
<h5 id="默认meta标签" tabindex="-1"><a class="header-anchor" href="#默认meta标签" aria-hidden="true">#</a> 默认Meta标签</h5>
<p>nuxt.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {

//为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号,所有页面使用同一个hid

  head: {
    title: 'nuxt-test1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="页面组件meta标签" tabindex="-1"><a class="header-anchor" href="#页面组件meta标签" aria-hidden="true">#</a> <strong>页面组件Meta标签</strong></h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
  head () {
    return {
      meta: 
      [
        {
          name: 'keywords',
          content: '最强王者,今晚吃鸡' + this.data属性 //data属性来自asyncData
        },
      ]
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作为一个社区，seo 尤为重要，倘若每个页面都需要写一大堆的 head 对象，就会显得尤其的繁琐。所以可以借助 nuxt 的 plugin 机制，将其封装成一个函数，并注入到每一个页面当中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// plugins/global.js
import Vue from 'vue'

Vue.mixin({
  methods: {
    // 必传 标题，描述。其他的 meta 标签通过 payload 注入，其中，每个 meta 的 hid 需要是唯一的。
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 nuxt.config.js 中加上：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default {
  plugins: [
    '~plugins/global.js'
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，只需要在页面的 <code v-pre>head</code> 的函数中，返回该函数即可：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>head() {
    return this.$seo('xxxx', 'oooo')
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="动态路由的meta" tabindex="-1"><a class="header-anchor" href="#动态路由的meta" aria-hidden="true">#</a> 动态路由的Meta</h5>
<p>游戏详情页面举例子，由于数据是异步获取的，我们需要把数据获取写在asyncData钩子，待数据获取成功才会渲染该页面组件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
export default {
  async asyncData ({ app, params }) {
    let data = await app.$axios.get(`/appinfo/${params.id}`);
    return {
      appname: data.appinfo.appname
    }
  },
  head () {
    return {
      meta: 
      [
        {
          name: 'keywords',
          content: `${this.appname},无限宝石,无限元宝`
        },
      ]
    }
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sass-scss" tabindex="-1"><a class="header-anchor" href="#sass-scss" aria-hidden="true">#</a> sass/scss</h4>
<p>安装依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install node-sass sass-loader --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>组件中使用(不需要其他的配置了)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;style lang="scss" scoped>

&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局使用某个 scss 文件（如 mixins, vars 等），需要借助 @nuxtjs/style-resources : <code v-pre>yarn add @nuxtjs/style-resources —dev</code>， 还需要在 nuxt.config.js  配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default {
  ...
  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/base.scss',
      // './assets/*.scss' // use underscore "_" &amp; also file extension ".scss"
      ]
  },
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定制化-html-模板" tabindex="-1"><a class="header-anchor" href="#定制化-html-模板" aria-hidden="true">#</a> 定制化 html 模板</h4>
<p>定制化默认的 html 模板，只需要在应用根目录下创建一个 <code v-pre>app.html</code> 的文件。</p>
<p>默认模板为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html {{ HTML_ATTRS }}>
  &lt;head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  &lt;/head>
  &lt;body {{ BODY_ATTRS }}>
    {{ APP }}
  &lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="资源指向" tabindex="-1"><a class="header-anchor" href="#资源指向" aria-hidden="true">#</a> 资源指向</h4>
<h5 id="内部资源" tabindex="-1"><a class="header-anchor" href="#内部资源" aria-hidden="true">#</a> 内部资源</h5>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 引用 static 目录下的图片 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/my-image.png<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 引用 assets 目录下经过 webpack 构建处理后的图片 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~assets/my-image-2.png<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>~assets/a.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="外部资源" tabindex="-1"><a class="header-anchor" href="#外部资源" aria-hidden="true">#</a> 外部资源</h5>
<p>在 nuxt.config.js 中配置你想引用的资源文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部配置</p>
<p>可在 <code v-pre>pages</code> 目录内的 <code v-pre>.vue</code> 文件中引用外部资源，如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
  &lt;h1>使用 jQuery 和 Roboto 字体的关于页&lt;/h1>
&lt;/template>

&lt;script>
export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nuxt-for-ts" tabindex="-1"><a class="header-anchor" href="#nuxt-for-ts" aria-hidden="true">#</a> nuxt for ts</h4>
<p><a href="https://typescript.nuxtjs.org/zh-hant/" target="_blank" rel="noopener noreferrer">资料<ExternalLinkIcon/></a></p>
<h5 id="新项目" tabindex="-1"><a class="header-anchor" href="#新项目" aria-hidden="true">#</a> 新项目</h5>
<p>安装</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>npx create<span class="token operator">-</span>nuxt<span class="token operator">-</span>app 目录 

<span class="token comment">//选择typescript</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span><span class="token boolean">true</span>" <span class="token comment">//避免NuxtApp错误</span>
<span class="token string-property property">"experimentalDecorators"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//避免 class 类名 错误 保证项目排在工作区第一位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="已有项目" tabindex="-1"><a class="header-anchor" href="#已有项目" aria-hidden="true">#</a> 已有项目</h5>
<p><code v-pre>typescript-build</code>提供了ts支持</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @nuxt<span class="token operator">/</span>typescript<span class="token operator">-</span>build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <strong><code v-pre>nuxt.config.js</code></strong> 中的 <strong><code v-pre>buildModules</code></strong> 中加入 <strong><code v-pre>@nuxt/typescript-build</code></strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// nuxt.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">buildModules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@nuxt/typescript-build'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再建立 <strong><code v-pre>tsconfig.json</code></strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"es2018"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"esnext"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"esnext"</span><span class="token punctuation">,</span>
      <span class="token string">"esnext.asynciterable"</span><span class="token punctuation">,</span>
      <span class="token string">"dom"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"~/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"./*"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"./*"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"@types/node"</span><span class="token punctuation">,</span>
      <span class="token string">"@nuxt/types"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"node_modules"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目types目录下添加vue类型声明文件 <code v-pre>vue-shim.d.ts</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>declare module <span class="token string">"*.vue"</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> Vue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span><span class="token boolean">true</span>" <span class="token comment">//避免NuxtApp错误</span>
<span class="token string-property property">"experimentalDecorators"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//避免 class 类名 错误 保证项目排在工作区第一位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="类式组件" tabindex="-1"><a class="header-anchor" href="#类式组件" aria-hidden="true">#</a> 类式组件</h5>
<p>通过类定义vue组件，需要安装vue-property-decorator和vue-class-component来支持</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i vue<span class="token operator">-</span>property<span class="token operator">-</span>decorator vue<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>component <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>用法</strong>同VUE+TS</p>
<h5 id="实例上-axios和-cookies支持" tabindex="-1"><a class="header-anchor" href="#实例上-axios和-cookies支持" aria-hidden="true">#</a> 实例上$axios和$cookies支持</h5>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//types/vue.d.ts 重写vue类型接口影响实例，而非Context</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue/types/vue'</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    $axios<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span><span class="token comment">//context上下文的 $axios 可以 去context.app.$axios上取</span>
    $cookies<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="服务端构子" tabindex="-1"><a class="header-anchor" href="#服务端构子" aria-hidden="true">#</a> 服务端构子</h5>
<p>写在Component装饰器内部，类内不运行，实际上后置守卫的钩子也需要写入装饰器</p>
<h5 id="装饰器内访问实例" tabindex="-1"><a class="header-anchor" href="#装饰器内访问实例" aria-hidden="true">#</a> 装饰器内访问实例</h5>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//vue.d.ts </span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue/types/vue'</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		<span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件名字与类名一致</p>
<h4 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h4>
<p>nuxt有自己的node服务器server目录，通过nuxt.config配置代理，转发到api服务器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run build 

我们需要复制到服务器的是
.nuxt
package-lock.json // 如果有的话
package.json
nuxt.config.json
static
server 

远端： npm i

//远端 修改端口 nuxt.config.js
server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }

远端: npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="pm2部署" tabindex="-1"><a class="header-anchor" href="#pm2部署" aria-hidden="true">#</a> <strong>pm2部署</strong></h5>
<p>保持应用<strong>程序活跃</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> pm2 --name=nuxt3000 start npm -- run start --watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h4>
<h2 id="vue-composition-api" tabindex="-1"><a class="header-anchor" href="#vue-composition-api" aria-hidden="true">#</a> Vue composition API</h2>
<p><a href="https://www.jianshu.com/p/687a393e788a" target="_blank" rel="noopener noreferrer">资料<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/enoy/p/vue3.html" target="_blank" rel="noopener noreferrer">资料2<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/80283b08ddb2" target="_blank" rel="noopener noreferrer">资料3<ExternalLinkIcon/></a></p>
<p><a href="https://vue-composition-api-rfc.netlify.app/api.html#setup" target="_blank" rel="noopener noreferrer">api<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a></p>
<p><a href="https://segmentfault.com/a/1190000020205747?utm_source=tag-newest" target="_blank" rel="noopener noreferrer">todolist<ExternalLinkIcon/></a></p>
<h2 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> </h2>
</div></template>
