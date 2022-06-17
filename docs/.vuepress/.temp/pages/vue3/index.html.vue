<template><div><h1 id="浅谈vue3" tabindex="-1"><a class="header-anchor" href="#浅谈vue3" aria-hidden="true">#</a> 浅谈vue3</h1>
<h2 id="vue双向绑定" tabindex="-1"><a class="header-anchor" href="#vue双向绑定" aria-hidden="true">#</a> vue双向绑定</h2>
<div class="custom-container tip"><p class="custom-container-title">v2</p>
<p><strong>核心</strong></p>
<ul>
<li>对象: 通过 <strong>defineProperty</strong> 劫持对象已有的值的读取和修改</li>
<li>数组: 通过重写数组更新数据一系列更新元素的方法实现元素修改的劫持</li>
</ul>
<p><strong>问题</strong></p>
<ul>
<li>对象直接添加新的属性或删除已有的属性,页面不会自动更新</li>
<li>直接通过下标替换元素或改变length,页面不会自动更新 arr[1] = {}</li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token string">'元素'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">v3</p>
<p><strong>核心</strong></p>
<ul>
<li>通过Proxy(代理): 拦截对data的任意(13种)操作,包括属性的读写,添加,删除等</li>
<li>通过Reflect(反射): 动态对被代理对象的相应属性进行特定操作</li>
<li>文档
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">Proxy<ExternalLinkIcon/></a>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" target="_blank" rel="noopener noreferrer">通过Reflect<ExternalLinkIcon/></a></li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 对象本身 get的属性</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">,</span> <span class="token string">'get'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 对象本身 get的属性 修改的值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">'set'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setUp</h2>
<ul>
<li>
<p>执行时机</p>
<ul>
<li>在 <strong>beforeCreate</strong> 之前执行(一次),此时组件还没有创建</li>
<li>this 是 undefined,不可以通过this访问实例</li>
</ul>
</li>
<li>
<p>返回值</p>
<ul>
<li>一般都会淡会一个对象: 为模板提供数据</li>
<li>返回的对象属性会于=与data函数返回的对象属性合并成为组件对象</li>
<li>返回的方法会与methods中的方法合并为组件方法</li>
<li>若有重复 setup 中的优先</li>
<li>注意:</li>
</ul>
</li>
<li>
<p>参数</p>
<ul>
<li>setup(props,context) / setup(props,{attrs,slots,emit})</li>
<li>props: 包含props配置声明,且传入了所有属性的对象,不能解构,结构后失去响应式</li>
<li>attrs: 包含不在props配置中声明的属性对象,相当于 this.$attrs</li>
<li>slots: 包含所有传入插槽内容的对象,相当于 this.$slots</li>
<li>emit: 用来分发自定义事件的函数, 相当于this.$emit</li>
</ul>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">提示</p>
<ul>
<li>一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods</li>
<li>setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据</li>
</ul>
</div>
<h2 id="reactive-与-ref" tabindex="-1"><a class="header-anchor" href="#reactive-与-ref" aria-hidden="true">#</a> reactive 与 ref</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>用来生成响应式数据的Api</strong></p>
<p><strong>ref的本质还是通过reactive创建的响应式数据</strong></p>
</div>
<ul>
<li><strong>ref</strong> 用来处理基本数据类型,<strong>reactive</strong> 用来处理对象(递归深度响应时式)</li>
<li>ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)</li>
</ul>
<h2 id="watcheffect-vue3" tabindex="-1"><a class="header-anchor" href="#watcheffect-vue3" aria-hidden="true">#</a> watchEffect(vue3)</h2>
<ul>
<li>
<p>与 watch 有什么不同？</p>
<ul>
<li>第一点我们可以从示例代码中看到 watchEffect 不需要指定监听的属性，他会自动的收集依赖， 只要我们回调中引用到了 响应式的属性， 那么当这些属性变更的时候，这个回调都会执行，而 watch 只能监听指定的属性而做出变更(v3开始可以同时指定多个)。</li>
<li>第二点就是 watch 可以获取到新值与旧值（更新前的值），而 watchEffect 是拿不到的。</li>
<li>第三点是 watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖。</li>
</ul>
</li>
<li>
<p>停止监听</p>
<ul>
<li>watchEffect 会返回一个用于停止这个监听的函数</li>
<li>如果 watchEffect 是在 setup 或者 生命周期里面注册的话，在组件取消挂载的时候会自动的停止掉</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// later</span>
<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>side effect</p>
<blockquote>
<p><strong>什么是 side effect ,不可预知的接口请求就是一个 side effect</strong></p>
</blockquote>
<ul>
<li>假设我们现在用一个用户ID去查询用户的详情信息，然后我们监听了这个用户ID， 当用户ID 改变的时候我们就会去发起一次请求，这很简单，用watch 就可以做到。 但是如果在请求数据的过程中，我们的用户ID发生了多次变化，那么我们就会发起多次请求，而最后一次返回的数据将会覆盖掉我们之前返回的所有用户详情。这不仅会导致资源浪费，还无法保证 watch 回调执行的顺序。而使用 watchEffect 我们就可以做到</li>
<li>onInvalidate(fn)传入的回调会在 watchEffect 重新运行或者 watchEffect 停止的时候执行</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步api调用，返回一个操作对象</span>
  <span class="token keyword">const</span> apiCall <span class="token operator">=</span> <span class="token function">someAsyncMethod</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>userID<span class="token punctuation">)</span>

  <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 取消异步api的调用。</span>
    apiCall<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<div style="display:flex;">
  <h1 style="text-align: left;flex:1">v2</h1>
  <h1 style="text-align: center;flex:1">v3</h1>
</div>
<div style="display:flex;justify-content: space-between;height: 400px;overflow: hidden;">
  <img  src="/image/v2.png" alt="v2生命周期"/>
  <img  src="/image/v3.png" alt="v3生命周期"/>
</div>
<table>
<thead>
<tr>
<th style="text-align:center">option Api</th>
<th style="text-align:center">components Api</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">beforeCreate</td>
<td style="text-align:center">Not needed*</td>
</tr>
<tr>
<td style="text-align:center">created</td>
<td style="text-align:center">Not needed*</td>
</tr>
<tr>
<td style="text-align:center">beforeMount</td>
<td style="text-align:center">onBeforeMount</td>
</tr>
<tr>
<td style="text-align:center">mounted</td>
<td style="text-align:center">onMounted</td>
</tr>
<tr>
<td style="text-align:center">beforeUpdate</td>
<td style="text-align:center">onBeforeUpdate</td>
</tr>
<tr>
<td style="text-align:center">updated</td>
<td style="text-align:center">onBeforeMount</td>
</tr>
<tr>
<td style="text-align:center">beforeUnmount</td>
<td style="text-align:center">onBeforeUnmount</td>
</tr>
<tr>
<td style="text-align:center">unmounted</td>
<td style="text-align:center">onUnmounted</td>
</tr>
<tr>
<td style="text-align:center">errorCaptured</td>
<td style="text-align:center">onErrorCaptured</td>
</tr>
<tr>
<td style="text-align:center">renderTracked</td>
<td style="text-align:center">onRenderTracked</td>
</tr>
<tr>
<td style="text-align:center">renderTriggered</td>
<td style="text-align:center">onRenderTriggered</td>
</tr>
<tr>
<td style="text-align:center">activated</td>
<td style="text-align:center">onActivated</td>
</tr>
<tr>
<td style="text-align:center">deactivated</td>
<td style="text-align:center">onDeactivated</td>
</tr>
</tbody>
</table>
<h2 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h2>
<ul>
<li>
<p>把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref</p>
</li>
<li>
<p>应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用</p>
</li>
</ul>
<blockquote>
<p>问题: reactive 对象解构所有属性值都是非响应式的(setup 的参数props解构同理)
解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">useReatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo2</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar2</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>foo2 <span class="token operator">+=</span> <span class="token string">"++"</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>bar2 <span class="token operator">+=</span> <span class="token string">"++"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>foo2<span class="token punctuation">,</span> bar2<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>foo2<span class="token punctuation">,</span> bar2<span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref获取元素" tabindex="-1"><a class="header-anchor" href="#ref获取元素" aria-hidden="true">#</a> ref获取元素</h2>
<p><strong>让输入框自动获取焦点</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>---
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputRef<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">/* 
ref获取元素: 利用ref函数获取组件中的标签元素
功能需求: 让输入框自动获取焦点
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> inputRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">|</span><span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> inputRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      inputRef
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义hook函数" tabindex="-1"><a class="header-anchor" href="#自定义hook函数" aria-hidden="true">#</a> 自定义hook函数</h2>
<ul>
<li>使用Vue3的组合API封装的可复用的功能函数</li>
<li>自定义hook的作用类似于vue2中的mixin技术</li>
<li>自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂</li>
</ul>
<p><strong>收集用户鼠标点击的页面坐标</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">/* 
收集用户鼠标点击的页面坐标
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useMousePosition</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化坐标数据</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token comment">// 用于收集点击事件坐标的函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">updatePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY
  <span class="token punctuation">}</span>

  <span class="token comment">// 挂载后绑定点击监听</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 卸载前解绑点击监听</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新组件" tabindex="-1"><a class="header-anchor" href="#新组件" aria-hidden="true">#</a> 新组件</h2>
<h4 id="fragment-片段" tabindex="-1"><a class="header-anchor" href="#fragment-片段" aria-hidden="true">#</a> Fragment(片段)</h4>
<ul>
<li>v2: 组件必须有一个根标签</li>
<li>v3: 组件可以没有根标签,vue内部会将多个标签包含在一个Fragment虚拟元素中</li>
<li>优点: 减少标签层级,减少内存占用</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>aaaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>bbbb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="teleport-瞬移" tabindex="-1"><a class="header-anchor" href="#teleport-瞬移" aria-hidden="true">#</a> TelePort(瞬移)</h4>
<ul>
<li><code v-pre>TelePort</code> 是一种可以将vue模板移动到 <code v-pre>Dom</code> 中 <code v-pre>vue #app</code> 之外的技术</li>
<li>像<code v-pre>Toast</code>,<code v-pre>Modals</code> 等这样的元素,如果嵌套在组件内部,他的样式,定位,层级等会变的难以维护,可以使用 <code v-pre>Teleport</code> 将它与组件剥离,但是它的状态还是完全受组件控制</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- teleport 的 to 是index.html中要转移的跟元素唯一标识(id,class,tag) --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#teleport-text<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello World !<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>teleport-button.vue</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show = !show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>open or close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#teleport-text<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello World !<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> show <span class="token operator">=</span> ref<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
