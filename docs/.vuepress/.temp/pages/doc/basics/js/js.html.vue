<template><div><h1 id="js基础" tabindex="-1"><a class="header-anchor" href="#js基础" aria-hidden="true">#</a> js基础</h1>
<h2 id="js的组成" tabindex="-1"><a class="header-anchor" href="#js的组成" aria-hidden="true">#</a> js的组成</h2>
<ul>
<li>ECMAScript: 规定js语法</li>
<li>DOM: 文档对象模型, 提供了页面的操作: document</li>
<li>BOM：浏览器对象模型, 提供了浏览器的操作: window</li>
</ul>
<h2 id="js写在哪" tabindex="-1"><a class="header-anchor" href="#js写在哪" aria-hidden="true">#</a> js写在哪</h2>
<ol>
<li>外部:</li>
</ol>
<ul>
<li><code v-pre>script</code>的src属性引入
<ul>
<li>自动执行</li>
<li>先写的执行</li>
<li>一般放在head或body的最后</li>
</ul>
</li>
</ul>
<ol start="2">
<li>内部:
<ul>
<li><code v-pre>script</code>标签包裹</li>
<li>自动执行</li>
<li>先写的执行</li>
<li>一般放在head或body的最后</li>
</ul>
</li>
<li>内联:
<ul>
<li>作为html属性值存在（行为相关属性）</li>
<li>配合行为使用</li>
<li>不建议使用(结构和行为的分离，优化项目，便于管理，只是为了测试方便)</li>
</ul>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> onclick<span class="token operator">=</span><span class="token string">"alert('hello world')"</span> value<span class="token operator">=</span><span class="token string">"点我试试"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">a标签阻止点击刷新</p>
<p><code v-pre>&lt;a href=&quot;javascript:void(0)&quot;&gt;超链接&lt;/a&gt;</code></p>
</div>
<h2 id="js写什么" tabindex="-1"><a class="header-anchor" href="#js写什么" aria-hidden="true">#</a> js写什么</h2>
<h4 id="js的打印语句" tabindex="-1"><a class="header-anchor" href="#js的打印语句" aria-hidden="true">#</a> js的打印语句</h4>
<ul>
<li>弹出信息框：<code v-pre>alert()</code>
<ul>
<li>BOM，阻塞程序执行，有隐式类型转换</li>
</ul>
</li>
<li>打印到页面：<code v-pre>document.write()</code>
<ul>
<li>DOM，影响页面布局，有隐式类型转换</li>
</ul>
</li>
<li>打印到控制台：<code v-pre>console.log()</code>     √
<ul>
<li>BOM（浏览器的V8引擎），不影响页面布局，不阻塞程序执行，没有隐式类型转换</li>
</ul>
</li>
</ul>
<h4 id="js中的数据类型" tabindex="-1"><a class="header-anchor" href="#js中的数据类型" aria-hidden="true">#</a> js中的数据类型</h4>
<ul>
<li>基本数据类型：String、Number、Boolean、Null、Undefined、Symbol、BigInt</li>
<li>引用数据类型：Object【Object是个大类，function函数、array数组、date日期...等都归属于Object】</li>
<li>数据类型的检测方法：<code v-pre>typeof(要检测的数据或变量)</code>或<code v-pre>typeof 要检测的数据或变量</code>
<ul>
<li>typeof自身的执行结果，必然是字符</li>
</ul>
</li>
</ul>
<h4 id="js的变量的创建和使用" tabindex="-1"><a class="header-anchor" href="#js的变量的创建和使用" aria-hidden="true">#</a> js的变量的创建和使用</h4>
<ul>
<li>创建：
<ul>
<li>关键字：<code v-pre>var</code></li>
</ul>
</li>
<li>变量名的规则
<ul>
<li>只能使用字母，下划线，<code v-pre>$</code>开头</li>
<li>不允许使用，关键字和保留字
<ul>
<li>关键字：官方已经赋予了功能的单词</li>
<li>保留字：官方暂时没有赋予功能，但是将来可能会赋予功能
<ul>
<li>技巧：加前缀
<ul>
<li>数据类型的缩写</li>
<li>功能的缩写</li>
<li>页面的缩写</li>
<li>公司名的缩写</li>
</ul>
</li>
</ul>
</li>
<li>尽量语义化，词必达意</li>
</ul>
</li>
</ul>
</li>
<li>驼峰式
<ul>
<li>大：从第一个单词的首字母大写
<ul>
<li>构造函数</li>
</ul>
</li>
<li>小：从第二个单词的首字母大写
<ul>
<li>一般情况</li>
</ul>
</li>
</ul>
</li>
<li>变量声明的小技巧
<ul>
<li>声明时就赋值</li>
<li>批量声明</li>
<li>批量赋值</li>
</ul>
</li>
</ul>
<h4 id="数据的运算" tabindex="-1"><a class="header-anchor" href="#数据的运算" aria-hidden="true">#</a> 数据的运算</h4>
<ul>
<li>算数运算符
<ul>
<li><code v-pre>+ - * / %</code></li>
</ul>
</li>
<li>关系运算符（比较）
<ul>
<li><code v-pre>&gt; &gt;= &lt; &lt;= != !== == ===</code></li>
</ul>
</li>
<li>逻辑运算符
<ul>
<li><code v-pre>|| &amp;&amp; !</code></li>
</ul>
</li>
<li>赋值运算符
<ul>
<li><code v-pre>= += -= *= /= %=</code></li>
</ul>
</li>
<li>一元运算符
<ul>
<li><code v-pre>++ --</code></li>
</ul>
</li>
</ul>
<h4 id="进制的介绍" tabindex="-1"><a class="header-anchor" href="#进制的介绍" aria-hidden="true">#</a> <RouterLink to="/doc/basics/js/core.md#进制的转换">进制的介绍</RouterLink></h4>
<ul>
<li>十进制：逢10进1：0123456789</li>
<li>二进制：逢2进1：01 10 11 100</li>
<li>八进制：逢8进1：01234567 10 11 12</li>
<li>十六进制：逢16进1：0123456789abcdef 10</li>
</ul>
<h4 id="浮点数的精度问题" tabindex="-1"><a class="header-anchor" href="#浮点数的精度问题" aria-hidden="true">#</a> 浮点数的精度问题</h4>
<ul>
<li>事关的转换数据丢失问题，导致某些小数的计算不精确
<ul>
<li>如：0.1+0.7!=0.8</li>
</ul>
</li>
<li>处理方式，主动保留n位小数，并转回数值</li>
</ul>
<h4 id="非法的数值运算结果-nan" tabindex="-1"><a class="header-anchor" href="#非法的数值运算结果-nan" aria-hidden="true">#</a> 非法的数值运算结果：NaN</h4>
<ul>
<li>不是一个数字 的 数值型数据</li>
<li>NaN不等于任何数据（包括自己）</li>
<li>NaN的专用的检测方式：<code v-pre>isNaN()</code></li>
</ul>
<h2 id="数据的类型转换" tabindex="-1"><a class="header-anchor" href="#数据的类型转换" aria-hidden="true">#</a> 数据的类型转换</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>因为直接得到的数据，可能不符合目前的程序要求，需要转成指定数据之后，才能使用</li>
<li>如：从页面获取的内容，都是字符</li>
</ul>
</div>
<h4 id="转换方式" tabindex="-1"><a class="header-anchor" href="#转换方式" aria-hidden="true">#</a> 转换方式</h4>
<p><strong>隐式类型转换</strong></p>
<ul>
<li>隐式：没有主动做，<strong>在执行过程中，转换了，执行结束后，原数据未改变</strong>
<ul>
<li>场景：什么情况下会发生转换
<ul>
<li>运算符
<ul>
<li>算术</li>
<li>关系</li>
<li>逻辑</li>
</ul>
</li>
</ul>
</li>
<li>规则：转换规则是什么
<ul>
<li>算术
<ul>
<li><code v-pre>+</code>：只要有一边是字符，结果就是字符</li>
<li><code v-pre>- * / %</code>：都是转成数值</li>
</ul>
</li>
<li>关系
<ul>
<li>只要有一边是数值，转成数值</li>
</ul>
</li>
<li>逻辑
<ul>
<li>转布尔</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>强制类型转换</strong></p>
<ul>
<li>强制：主动转换，可以拿到转换结果
<ul>
<li>字符转数值
<ul>
<li><code v-pre>parseInt(要转换的字符)</code>
<ul>
<li>将字符转成整数，从左向右依次检测，能转则转，不能转，则停，第一位不能转，直接NaN，不识别小数点</li>
</ul>
</li>
<li><code v-pre>parseFloat(要转换的字符)</code>
<ul>
<li>将字符转成小数，从左向右依次检测，能转则转，不能转，则停，第一位不能转，直接NaN</li>
</ul>
</li>
<li><code v-pre>Math.round(要转换的字符)</code>
<ul>
<li>不是专门做数据转换，处理数据的过程中，可以转换</li>
<li>严格转换，不允许任何位置出现非数字的字符</li>
<li>四舍五入取最近的整数</li>
</ul>
</li>
<li><code v-pre>Number(要转换的字符)</code>
<ul>
<li>不是专门做数据转换，处理数据的过程中，可以转换</li>
<li>严格转换，不允许任何位置出现非数字的字符</li>
</ul>
</li>
</ul>
</li>
<li>数值转字符
<ul>
<li><code v-pre>要转换的数值.toString()</code>
<ul>
<li>直接转，没有规则</li>
</ul>
</li>
<li><code v-pre>要转换的数值.toFixed(n)</code>
<ul>
<li>直接转，根据传入的数字，决定保留n为小数，不够的位数补零</li>
</ul>
</li>
<li><code v-pre>String()</code>
<ul>
<li>不是专门做数据转换，处理数据的过程中，可以转换</li>
<li>直接转，没有规则</li>
</ul>
</li>
<li>其他转布尔
<ul>
<li><code v-pre>Boolean()</code>
<ul>
<li>不是专门做数据转换，处理数据的过程中，可以转换</li>
<li>数值：非0为true，0为false</li>
<li>字符：非空为true，空为false</li>
<li>undefined，null，NaN，都是false</li>
<li>对象，数组，函数，都是true</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">js的三大特殊数据</p>
<ol>
<li>null</li>
<li>undefined</li>
<li>NaN</li>
</ol>
</div>
<h2 id="程序的结构" tabindex="-1"><a class="header-anchor" href="#程序的结构" aria-hidden="true">#</a> 程序的结构</h2>
<ol>
<li>顺序结构
<ul>
<li>代码或功能的执行顺序，自上而下，按照固定的流程依次执行</li>
</ul>
</li>
<li>选择（分支）结构
<ul>
<li>根据不同的条件或时机，选择不同的功能或代码执行</li>
</ul>
</li>
<li>循环结构
<ul>
<li>重复执行，为了避免死循环，需要在每次执行之前，做条件判断，继续执行或停止</li>
</ul>
</li>
</ol>
<h3 id="选择-分支-结构" tabindex="-1"><a class="header-anchor" href="#选择-分支-结构" aria-hidden="true">#</a> 选择（分支）结构</h3>
<ol>
<li>实现
<ul>
<li>分支语句
<ul>
<li>单分支：if</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    条件为<span class="token boolean">true</span>，执行代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>双分支：if-else</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    条件为<span class="token boolean">true</span>，执行代码<span class="token number">1</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    条件为<span class="token boolean">false</span>，执行代码<span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多分支：switch</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>要判断的值或变量<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> 可能的值<span class="token number">1</span><span class="token operator">:</span>
        执行代码<span class="token number">1</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 可能的值<span class="token number">2</span><span class="token operator">:</span>
        执行代码<span class="token number">2</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        以上条件都不符合，执行这里的代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<ul>
<li>默认情况下，case语句判断成功后，就不再向下判断了，形成了穿透特性</li>
<li>阻止穿透：break</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">分支语句</th>
<th style="text-align:left">使用场景</th>
<th style="text-align:left">是否有隐式类型转换</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">if</td>
<td style="text-align:left">if语句更擅长判断范围</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">switch</td>
<td style="text-align:left">switch语句更擅长判断具体的值</td>
<td style="text-align:left">否</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<ul>
<li>
<p>三目表达式</p>
<ul>
<li>条件 ? 值1 : 值2</li>
<li><code v-pre>res = n&lt;10 ? &quot;0&quot;+n : &quot;&quot;+n;</code></li>
</ul>
</li>
<li>
<p>逻辑短路</p>
<ul>
<li><code v-pre>console.log( 2 || 3 )</code></li>
<li><code v-pre>console.log( 0 || undefined )</code></li>
<li><code v-pre>console.log( undefined || 0 )</code></li>
</ul>
</li>
</ul>
</div>
<h3 id="循环的语句" tabindex="-1"><a class="header-anchor" href="#循环的语句" aria-hidden="true">#</a> 循环的语句</h3>
<ul>
<li>while</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 初始化计数器</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>执行条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
      要重复执行的代码
      改变计数器
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>do-while：<strong>无论如何都会至少执行一次</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  初始化计数器
  <span class="token keyword">do</span><span class="token punctuation">{</span>
      要重复执行的代码
      改变计数器
  <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>执行条件<span class="token punctuation">)</span>

  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">do</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>for</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">for</span><span class="token punctuation">(</span>循环的三要素：初始化计数器<span class="token punctuation">;</span>执行条件<span class="token punctuation">;</span>计数器的改变<span class="token punctuation">)</span><span class="token punctuation">{</span>
      要重复执行的代码
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">循环关键字</p>
<ul>
<li>break：结束当前循环，后面没执行完的，都不再执行了</li>
<li>continue：跳过本次循环，继续执行，后面的次数</li>
</ul>
</div>
<h4 id="死循环-递归" tabindex="-1"><a class="header-anchor" href="#死循环-递归" aria-hidden="true">#</a> <RouterLink to="/doc/basics/js/core.md#递归">死循环(递归)</RouterLink></h4>
<ul>
<li>无法通过自身控制结束的循环</li>
<li>消耗大量的内存，浪费性能，影响程序执行</li>
<li>但是，可以利用死循环的思想，配合循环的控制关键字，解决问题</li>
</ul>
</div></template>
