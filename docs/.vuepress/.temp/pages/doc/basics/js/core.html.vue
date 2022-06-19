<template><div><h1 id="js核心" tabindex="-1"><a class="header-anchor" href="#js核心" aria-hidden="true">#</a> js核心</h1>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<div class="custom-container tip"><p class="custom-container-title">意义</p>
<ul>
<li>将组成某个功能的代码块封装起来，可以通过自身或行为执行</li>
<li>存储的是功能，代码段</li>
<li>函数自身有诸多便利性特点，为了方便使用功能</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">特点</p>
<ul>
<li>忽略细节</li>
<li>选择使用</li>
<li>重复使用</li>
</ul>
</div>
<h3 id="创建函数" tabindex="-1"><a class="header-anchor" href="#创建函数" aria-hidden="true">#</a> 创建函数</h3>
<ul>
<li>声明式：<code v-pre>function fn(){}</code>
<ul>
<li>function 声明关键字</li>
<li>fn 函数名</li>
<li>() 参数</li>
<li>{} 函数体，函数的功能</li>
</ul>
</li>
<li>赋值式：<code v-pre>var fn = function(){}</code></li>
</ul>
<h3 id="执行函数" tabindex="-1"><a class="header-anchor" href="#执行函数" aria-hidden="true">#</a> 执行函数</h3>
<ul>
<li>函数名();     立即执行，自动执行，不会等待</li>
<li>配合行为执行（事件触发）
<ul>
<li>事件源.事件类型 = 函数;</li>
<li>如：<code v-pre>btn.onclick = fn</code></li>
<li>如：<code v-pre>btn.onclick = function(){}</code></li>
<li>等待行为触发，必然是将来执行，异步</li>
</ul>
</li>
</ul>
<h3 id="函数的分类-写法" tabindex="-1"><a class="header-anchor" href="#函数的分类-写法" aria-hidden="true">#</a> 函数的分类（写法）</h3>
<ul>
<li>有名函数：function fn(){}
<ul>
<li>正常函数，无特殊情况</li>
</ul>
</li>
<li>无名函数：function (){}
<ul>
<li>不允许直接存在，只能作为值存在
<ul>
<li>作为赋值式创建函数的<strong>值</strong></li>
<li>作为匿名函数的函数体</li>
<li>作为事件处理函数</li>
<li>作为参数（回调函数）</li>
<li>作为返回值（闭包）</li>
</ul>
</li>
</ul>
</li>
<li>匿名函数：(function(){})()
<ul>
<li>自动执行</li>
<li>创建作用域</li>
<li>参数在后面的小括号中传递</li>
</ul>
</li>
<li><a href="">箭头函数</a></li>
</ul>
<h3 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h3>
<ul>
<li>概念：函数的入口，负责数据的传递，影响函数内部功能的执行</li>
<li>函数定义时，接收参数：<code v-pre>形参</code></li>
<li>函数执行时，发送参数：<code v-pre>实参</code></li>
<li>实参和形参的关系：赋值关系
<ul>
<li>形参类似于变量</li>
<li>实参类似于数据</li>
</ul>
</li>
<li>语法上，参数的数量没有限制。使用习惯上，参数最好不要太多
<ul>
<li>参数之间用逗号隔开</li>
</ul>
</li>
<li>实参和形参的对应关系：
<ul>
<li>数量一致：一一对应</li>
<li>形参多：多出来的形参是undefined</li>
<li>实参多：多出来的实参找arguments</li>
</ul>
</li>
<li>实参可以传入任何数据
<ul>
<li>当传入另一个函数时，作为参数的函数，叫回调函数</li>
</ul>
</li>
</ul>
<h3 id="arguments的使用" tabindex="-1"><a class="header-anchor" href="#arguments的使用" aria-hidden="true">#</a> arguments的使用</h3>
<ul>
<li><strong>函数内部</strong>特有的对象变量，以数组的形式体现(伪数组)</li>
<li>用来保存当前函数执行时传入的所有实参</li>
<li>使用
<ul>
<li>数组：索引+长度
<ul>
<li>索引：从0开始</li>
<li>长度：arguments.length</li>
<li>中括号语法</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">伪数组</p>
<ul>
<li>可以有索引，可以有长度</li>
<li>不能使用数组的方法（push...）</li>
</ul>
</div>
<h3 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h3>
<ol>
<li>概念：函数的出口</li>
<li>函数内部的关键字：<code v-pre>return</code>
<ul>
<li>返回函数内部的数据（将数据通过出口，暴露到函数外面）</li>
<li><code v-pre>return 数据</code></li>
</ul>
</li>
<li>return的功能
<ul>
<li>返回值</li>
<li>结束函数</li>
</ul>
</li>
</ol>
<ul>
<li>一个函数一次执行只能执行一个return</li>
<li>但是，一个函数中可以写多个return
<ul>
<li>没有return的函数，的返回值是，undefined</li>
</ul>
</li>
</ul>
<ol start="4">
<li>
<p>返回值的位置</p>
<ul>
<li>返回到哪了：函数的执行位置</li>
</ul>
</li>
<li>
<p>返回值可以返回所有数据</p>
<ul>
<li>当一个函数，返回了另一个函数时，在这个函数的嵌套中，就形成了<a href="">闭包</a></li>
</ul>
</li>
<li>
<p>返回值的应用场景</p>
<ul>
<li>功能函数，没有必要返回值</li>
<li>处理数据的函数，可以有返回值</li>
</ul>
</li>
</ol>
<h3 id="函数的方法" tabindex="-1"><a class="header-anchor" href="#函数的方法" aria-hidden="true">#</a> 函数的方法</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>函数的函数，将函数作为对象使用他身上的方法</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">函数的方法</th>
<th style="text-align:left">功能</th>
<th style="text-align:left">参数</th>
<th style="text-align:left">返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">bind</td>
<td style="text-align:left">改变this指向</td>
<td style="text-align:left">不限<br/>[要改变的this指向, 传入原函数作为原函数的参数,...]</td>
<td style="text-align:left">修改this或参数后的新函数</td>
</tr>
<tr>
<td style="text-align:left">call</td>
<td style="text-align:left">改变this指向, 自动执行</td>
<td style="text-align:left">不限<br/>[要改变的this指向, 传入原函数作为原函数的参数,...]</td>
<td style="text-align:left">原函数的返回值</td>
</tr>
<tr>
<td style="text-align:left">apply</td>
<td style="text-align:left">改变this指向, 自动执行</td>
<td style="text-align:left">2个<br/>[要改变的this指向, [数组,会传入原函数覆盖原函数的arguments]]</td>
<td style="text-align:left">原函数的返回值</td>
</tr>
</tbody>
</table>
<ul>
<li>函数方法的区别：
<ul>
<li>bind会修改之后的新函数（不会自动执行修改后的新函数），call和apply反之</li>
<li>bind和call可以接受多个参数，从第二个开始，都会传入修改之后的新函数作为参数。</li>
<li>apply只能接受两个参数，第二个参数是数组，会传入修改之后的新函数，自动解析后，作为arguments的内容</li>
</ul>
</li>
</ul>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<ol>
<li>
<p>概念：数据作用的区域，数据生效的区域</p>
</li>
<li>
<p>作用域的分类</p>
<ul>
<li>全局作用域：没有属于任何一个函数</li>
<li>局部作用域：属于某个函数的区域</li>
</ul>
</li>
<li>
<p>作用域的访问规则</p>
<ul>
<li>子可以拿父</li>
<li>父不能拿子</li>
</ul>
</li>
<li>
<p>变量的划分</p>
<ul>
<li>全局作用域下的变量（函数），叫全局变量（函数）</li>
<li>局部作用域下的变量（函数），叫局部变量（函数）</li>
</ul>
</li>
</ol>
<ul>
<li>函数的形参，是当前函数的局部变量</li>
</ul>
<ol start="5">
<li>生命周期
<ul>
<li>全局：跟随程序，一直存在与内存中，随时可以拿到</li>
</ul>
</li>
</ol>
<ul>
<li>方便</li>
<li>占内存
<ul>
<li>局部：跟随当前作用域，作用域开始的位置，被创建，作用域结束，被删除</li>
</ul>
</li>
<li>使用不方便</li>
<li>省空间
<ul>
<li>折中用法：</li>
</ul>
</li>
<li>利用匿名函数生成独立作用域，在匿名函数中进行功能开发</li>
</ul>
<ol start="6">
<li>变量的读写规则（拓展）
<ul>
<li>写：</li>
</ul>
</li>
</ol>
<ul>
<li>先在当前作用域查找，当前作用域有，直接写，如果当前作用域没有，向上级作用域查找，直到全局，找到了，修改全局，没找到，定义成全局，再修改。（非严格模式）
<ul>
<li>读：</li>
</ul>
</li>
<li>先在当前作用域查找，当前作用域有，直接使用，如果当前作用域没有，向上级作用域查找，直到全局，找到了，使用，没找到，报错。</li>
</ul>
<h3 id="js的执行机制" tabindex="-1"><a class="header-anchor" href="#js的执行机制" aria-hidden="true">#</a> js的执行机制</h3>
<ol>
<li>js一门<strong>解释型</strong>的脚本语言
<ul>
<li>js会先通读全文，找到特定内容，提前解释（预解析，预编译）</li>
</ul>
</li>
</ol>
<ul>
<li>提前解释
<ul>
<li>变量和函数的声明</li>
<li>再执行解释之后的代码</li>
</ul>
</li>
</ul>
<ol start="2">
<li>提前解释（预解析，预编译）
<ul>
<li>变量(使用var声明的变量)</li>
</ul>
</li>
</ol>
<ul>
<li>var声明变量的预解析（var的提升）
<ul>
<li>提前声明：作用域最开始的位置</li>
<li>原位赋值</li>
<li>函数</li>
</ul>
</li>
<li>function的整体提升，提前声明，并定义
<ul>
<li>当var遇到function</li>
</ul>
</li>
<li>赋值式创建函数
<ul>
<li>提升的是var的声明，function并没有提升</li>
</ul>
</li>
<li>当var的变量和function的函数名重名
<ul>
<li>都提升</li>
<li>var提升的更高</li>
<li>所以function生效</li>
<li>本质：var会提升，在内存中声明了一个区域，function没有提升，直接使用这个区域</li>
</ul>
</li>
<li><strong>避免变量名的重复！！！</strong></li>
</ul>
<h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2>
<ol>
<li>
<p>递归介绍</p>
<ul>
<li>在函数内部，执行自己</li>
<li>死循环</li>
<li>利用递归的思想，解决问题</li>
<li>但毕竟有隐患，慎用！</li>
</ul>
</li>
<li>
<p>递归的过程（原理）</p>
<ul>
<li>递：向内执行，向内调用</li>
<li>归：向外返回，向外结束</li>
<li>终止条件：结束递，向外归</li>
</ul>
</li>
<li>
<p>电影院找座位</p>
<ul>
<li>递归公式</li>
<li>fn(当前的座位) = fn(当前的座位-1) + 1</li>
</ul>
</li>
<li>
<p>递归计算<code v-pre>5*4*3*2*1</code></p>
</li>
</ol>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>5!
5 * 4!
    4 * 3!
 3 * 2!
     2 * 1!
         1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>假设，有一个函数fn，专门用来计算阶乘，用来计算n的阶乘</li>
<li>fn(n) = n * fn(n-1)</li>
<li>fn(1) = 1
<ul>
<li>递的终点，归的起点</li>
</ul>
</li>
<li>实现fn计算阶乘的功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>递归计算数列的第n位是多少：1,1,2,3,5,8,13,21,34,.....
<ul>
<li>从第三位开始，每一位是前两位的和</li>
<li>假设，有一个函数fn，专门用来计算数列的第n位</li>
<li>fn(n) = fn(n-1) + fn(n-2)</li>
<li>fn(1) = 1 || fn(2) = 1</li>
<li>递的终点，归的起点</li>
<li>实现fn计算数列的第n位的功能</li>
</ul>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<div class="custom-container tip"><p class="custom-container-title">概念</p>
<ul>
<li>数据的组合</li>
<li>数据的集合，类似于<a href="#对象">对象</a>，但是没有键，只有索引</li>
<li>单需要操作多个数据时，程序只支持一个(数组或对象的应用场景)</li>
</ul>
</div>
<h3 id="数组的创建" tabindex="-1"><a class="header-anchor" href="#数组的创建" aria-hidden="true">#</a> 数组的创建</h3>
<ul>
<li>字面量
<ul>
<li><code v-pre>var arr=[];</code></li>
</ul>
</li>
<li>构造函数
<ul>
<li><code v-pre>var arr = new Array();</code></li>
</ul>
</li>
<li>当只有一个数字类型数据时，字面量就是一个数据，构造函数会解析成长度</li>
</ul>
<h3 id="数组的方法" tabindex="-1"><a class="header-anchor" href="#数组的方法" aria-hidden="true">#</a> 数组的方法</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">说明<div style="width:50px"></div></th>
<th style="text-align:left">参数 <div style="width:210px"></div></th>
<th style="text-align:left">返回值</th>
<th style="text-align:left">是否改变原数据</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">push</td>
<td style="text-align:left">向数组末尾添加元素</td>
<td style="text-align:left">可添加多个参数:any</td>
<td style="text-align:left">新数组长度</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">unshift</td>
<td style="text-align:left">向数组开头添加元素</td>
<td style="text-align:left">可添加多个参数:any</td>
<td style="text-align:left">新数组长度</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">pop</td>
<td style="text-align:left">删除数组末尾元素</td>
<td style="text-align:left">无参数</td>
<td style="text-align:left">最后一次删除的数据</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">shift</td>
<td style="text-align:left">删除数组开头元素</td>
<td style="text-align:left">无参数</td>
<td style="text-align:left">最后一次删除的数据</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">slice</td>
<td style="text-align:left">截取数组</td>
<td style="text-align:left">参数1:截取的起始位置<br/>参数2: 截取的长度 (包前不包后)<br/>不传参数: 截取所有<br/>一个参数: 从0开始截取n位</td>
<td style="text-align:left">新数组</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">splice</td>
<td style="text-align:left">删除并替换数组</td>
<td style="text-align:left">参数1:删除的起始位置<br/>参数2:要删除的个数<br/>参数3:替换的数据</td>
<td style="text-align:left">被删除的数据</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">join</td>
<td style="text-align:left">转字符串</td>
<td style="text-align:left">链接符</td>
<td style="text-align:left">转换后的字符串</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">concat</td>
<td style="text-align:left">合并数组</td>
<td style="text-align:left">参数:要合并的数组</td>
<td style="text-align:left">新数组</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">reverse</td>
<td style="text-align:left">翻转数组</td>
<td style="text-align:left">无参数</td>
<td style="text-align:left">新数组</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">sort</td>
<td style="text-align:left">排序</td>
<td style="text-align:left">返回一个函数a-b从小到大，b-a从大到小</td>
<td style="text-align:left">新数组</td>
<td style="text-align:left">是</td>
</tr>
<tr>
<td style="text-align:left">indexOf</td>
<td style="text-align:left">查询数据所对应的索引</td>
<td style="text-align:left">[要查询的数据, ?开始查询的索引]</td>
<td style="text-align:left">查找到的索引 / -1</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">forEach</td>
<td style="text-align:left">遍历数组</td>
<td style="text-align:left">(数据, 索引, 数组自身)=&gt;{}</td>
<td style="text-align:left">无(undefined)</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">map</td>
<td style="text-align:left">遍历数组</td>
<td style="text-align:left">(数据, 索引, 数组自身)=&gt;{return} <br/>return自己需要的数据</td>
<td style="text-align:left"><strong>新数组</strong> <br/> 回调函数每执行一次就返回一个数据</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">filter</td>
<td style="text-align:left">遍历数组</td>
<td style="text-align:left">(数据, 索引, 数组自身)=&gt;{return} <br/>return结果为true的数据</td>
<td style="text-align:left"><strong>新数组</strong><br/>回调函数每执行一次就返回一个结果为true的数据</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">some</td>
<td style="text-align:left">遍历数组, 根据条件查询, 返回布尔值, <strong>一个是true最终结果就是true</strong></td>
<td style="text-align:left">(数据, 索引, 数组自身)=&gt;{return} <br/>return布尔值</td>
<td style="text-align:left"><strong>布尔值</strong><br/>作为参数的函数的返回值只要有一次是true最终结果就是true</td>
<td style="text-align:left">否</td>
</tr>
<tr>
<td style="text-align:left">every</td>
<td style="text-align:left">遍历数组, 根据条件查询, 返回布尔值, <strong>所有是true最终结果就是true</strong></td>
<td style="text-align:left">(数据, 索引, 数组自身)=&gt;{return} <br/>return布尔值</td>
<td style="text-align:left"><strong>布尔值</strong><br/>作为参数的函数的返回值全部是true最终结果才是true</td>
<td style="text-align:left">否</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">快速求和</p>
<ul>
<li>reduce
<ul>
<li>功能：1，遍历函数（同forEach）2，并归</li>
<li>参数：两个
<ul>
<li>一，函数，函数有4个参数，
<ul>
<li>1，执行第一遍时：reduce的第二个函数，或数组的第一个数据
第二遍以后：之前执行时的返回值</li>
<li>2，数组的数据</li>
<li>3，索引</li>
<li>4，数组自身</li>
</ul>
</li>
<li>二，任意数据（可省略）</li>
</ul>
</li>
<li>返回值：回调函数最后一次执行法官的返回值</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>reduceRight
<ul>
<li>与reduce相同，从右开始</li>
</ul>
</li>
</ul>
</div>
<h3 id="数组的分类" tabindex="-1"><a class="header-anchor" href="#数组的分类" aria-hidden="true">#</a> 数组的分类</h3>
<ul>
<li>数组中可以放任何数据，甚至可以放简单表达式
<ul>
<li>当一个数组中的数据，全是字符时，叫字符数组</li>
<li>当一个数组中的数据，全是数值时，叫数值数组</li>
<li>当一个数组中的数据，全是数组时，叫数组数组（二维数组，<strong>多维数组</strong>）</li>
</ul>
</li>
<li>访问方式
<ul>
<li>逐层解析数组</li>
<li>当一个数组中的数据，全是对象时，叫对象数组（<strong>json数组</strong>）</li>
</ul>
</li>
<li>访问方式
<ul>
<li>逐层解析数组和对象</li>
</ul>
</li>
</ul>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<div class="custom-container tip"><p class="custom-container-title">万物皆对象</p>
<ul>
<li>对象才是构成js世界的本质</li>
<li>字符串也可以作为对象使用</li>
</ul>
</div>
<h3 id="创建字符" tabindex="-1"><a class="header-anchor" href="#创建字符" aria-hidden="true">#</a> 创建字符</h3>
<ul>
<li>字面量
<ul>
<li><code v-pre>var str = &quot;&quot;;</code></li>
</ul>
</li>
<li>构造函数
<ul>
<li><code v-pre>var str = new String();</code></li>
<li>只要是构建函数方式创造的，其结果必然是对象</li>
<li><code v-pre>new String()</code>得到字符的对象
<ul>
<li>长得先对象，但是可以作为正常字符使用</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="字符串的方法" tabindex="-1"><a class="header-anchor" href="#字符串的方法" aria-hidden="true">#</a> 字符串的方法</h3>
<p><strong>字符串的方法都不改变原数据</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">字符串方法</th>
<th style="text-align:center">功能</th>
<th style="text-align:left">参数</th>
<th style="text-align:center">返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">charAt</td>
<td style="text-align:center">根据索引查询数据</td>
<td style="text-align:left">索引</td>
<td style="text-align:center">该索引对应的值，索引超出返回空字符串</td>
</tr>
<tr>
<td style="text-align:center">slice</td>
<td style="text-align:center">截取指定的区域的字符</td>
<td style="text-align:left">开始索引，截至索引 (包前不包后)<br/>参数1为负数时表示长度减去参数1，参数2比这个值大就行</td>
<td style="text-align:center">返回截取的字符</td>
</tr>
<tr>
<td style="text-align:center">substr</td>
<td style="text-align:center">截取指定区域的字符</td>
<td style="text-align:left">开始索引，要截取的长度<br/>当一个参数为负数时，只有一个参数，表示倒着截取参数的长度</td>
<td style="text-align:center">返回截取的字符</td>
</tr>
<tr>
<td style="text-align:center">substring</td>
<td style="text-align:center">截取指定区域的数据</td>
<td style="text-align:left">开始索引，结束索引(包前不包后) <br/> 参数大的是结束位置</td>
<td style="text-align:center">返回截取的字符</td>
</tr>
<tr>
<td style="text-align:center">replace</td>
<td style="text-align:center">替换</td>
<td style="text-align:left">想要替换的字符，替换的字符</td>
<td style="text-align:center">返回替换之后的字符串</td>
</tr>
<tr>
<td style="text-align:center">split</td>
<td style="text-align:center">分割（转数组）</td>
<td style="text-align:left">以哪个字符作为分割点，并删除该字符<br/>(当1参数在字符串中存在多个，2参数决定要显示几个)</td>
<td style="text-align:center">返回分割后的数组</td>
</tr>
<tr>
<td style="text-align:center">indexOf</td>
<td style="text-align:center">根据数据查询索引</td>
<td style="text-align:left">数据</td>
<td style="text-align:center">返回查找到的索引</td>
</tr>
<tr>
<td style="text-align:center">includes</td>
<td style="text-align:center">根据数据查询是否包含</td>
<td style="text-align:left">数据</td>
<td style="text-align:center">返回布尔值</td>
</tr>
</tbody>
</table>
<h3 id="字符串的拼接" tabindex="-1"><a class="header-anchor" href="#字符串的拼接" aria-hidden="true">#</a> 字符串的拼接</h3>
<ul>
<li>引号要配对，单双引号的嵌套要交替</li>
<li>被单双引号包裹的字符不允许换行</li>
</ul>
<h3 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h3>
<ul>
<li><code v-pre>Unicode</code>:万国码，所有字符都可以转成万国码
<ul>
<li><code v-pre>Unicode</code> 时以四位十六进制的形式表示的（前缀\u）
<ul>
<li>必须用<code v-pre>\u</code>作为前缀，此十六进制才是<code v-pre>Unicode</code>编码</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>Unicode</code>和字符的转换
<ul>
<li>字符转成十进制，此十进制时由<code v-pre>Unicode</code>的十六进制转换得来的
<ul>
<li><code v-pre>String.fromCharCode(十进制或十六进制)</code>
<ul>
<li>参数可以是十进制</li>
<li>参数可以是十六进制（&quot;0x&quot;开头）</li>
<li>转换结果时字符</li>
</ul>
</li>
<li><code v-pre>str.charCodeAt(索引)</code>
<ul>
<li>转换结果是十进制，这个十进制转成十六进制后，加上\u就是Unicode编码</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="进制的转换" tabindex="-1"><a class="header-anchor" href="#进制的转换" aria-hidden="true">#</a> 进制的转换</h3>
<ul>
<li>十进制转其他-（数值转字符）
<ul>
<li><code v-pre>num.toString(2||8||16)</code></li>
<li>要转成几进制就写几</li>
</ul>
</li>
<li>其他转十进制-（字符转数值）
<ul>
<li><code v-pre>parseInt(num,2||8||16)</code></li>
<li>num是几进制就写几</li>
</ul>
</li>
<li>其他转其他
<ul>
<li>二进制转八进制</li>
<li>先转十进制，再转其他</li>
</ul>
</li>
</ul>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2>
<div class="custom-container tip"><p class="custom-container-title">JSON</p>
<ul>
<li>JSON，类似与文本文件的数据，前后端通用的数据文件（.json）
<ul>
<li>xml是以前的通用数据</li>
</ul>
</li>
<li>JSON并不属于任何一个语言，自身是一种独立的通用数据，只是在创建之初，参考了js的对象的格式</li>
<li>JSON的语法
<ul>
<li>必须符合js中的对象的基本要求</li>
<li>json的key必须加双引号</li>
<li>json不允许出现没有意义的逗号</li>
<li>json中不允许出现 函数、undefined、NaN</li>
<li>json在任何编程语言中都是以字符型数据体现，json文件中可以直接存在</li>
</ul>
</li>
<li>js中的json
<ul>
<li>对象转json：要转换的数据必须符合对象要求
<ul>
<li><code v-pre>JSON.stringify(obj)</code></li>
<li>NaN转null</li>
<li>不识别<code v-pre>undefined</code>, <code v-pre>function(){}</code></li>
</ul>
</li>
<li>json转对象：要转换的数据必须符合json的要求
<ul>
<li><code v-pre>JSON.parse(str)</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<h3 id="基本数据和复杂数据" tabindex="-1"><a class="header-anchor" href="#基本数据和复杂数据" aria-hidden="true">#</a> <a href="#值传递和引用">基本数据和复杂数据</a></h3>
<ul>
<li>基本数据: string、number、boolean、undefined、null
<ul>
<li><code v-pre>值传递</code>的数据</li>
</ul>
</li>
<li>复杂数据: object、function
<ul>
<li><code v-pre>引用传递</code>的数据</li>
</ul>
</li>
</ul>
<h3 id="内存中的空间划分-栈堆" tabindex="-1"><a class="header-anchor" href="#内存中的空间划分-栈堆" aria-hidden="true">#</a> 内存中的空间划分 栈堆</h3>
<ul>
<li>内存中的内存颗粒可分为
<ul>
<li>栈：基本数据，复杂数据的地址
<ul>
<li>变量名，空间小，稳定，不可修改</li>
<li>先进后出</li>
</ul>
</li>
<li>堆：复杂的数据结构
<ul>
<li>数据，空间大，可被修改</li>
<li>先进先出</li>
</ul>
</li>
<li>关系
<ul>
<li>一栈对一堆</li>
<li>一栈对多堆</li>
<li>不能多对一</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="值传递和引用" tabindex="-1"><a class="header-anchor" href="#值传递和引用" aria-hidden="true">#</a> 值传递和引用</h3>
<ul>
<li>传递：复制</li>
<li>值传递：复制的就是值（基本数据）</li>
<li>引用传递：引用就是地址，复制的是地址，不是值（复杂数据）</li>
</ul>
<ol>
<li>浅拷贝：只复制复杂数据的地址，不是值，修改新数据，影响老数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj<span class="token punctuation">;</span>
  <span class="token comment">// 将obj复制给了obj2，其实只是将obj的引用(地址)复制给了obj2，obj和obj2中保存的是同一份地址，指向的是同一个值，修改其中一个，影响另外一个</span>
  obj2<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">"张三"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>深拷贝：复制值，修改新数据，不会影响老数据
<ul>
<li>先解析，在拷贝<br/></li>
</ul>
</li>
</ol>
<p><strong>对象的解析拷贝（深拷贝）</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">;</span>b<span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">;</span>c<span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//for-in 解析</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
  obj2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">"666"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数组的解析拷贝（深拷贝）</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 循环解析</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  arr2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2>
<div class="custom-container tip"><p class="custom-container-title">Object</p>
<ul>
<li>是复杂数据类型的一种，是一种数据集合</li>
<li>单个对象中只存放某类，有某种关系的数据</li>
<li>对象在显示生活中，一般用来描述事物</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">语法</p>
<ul>
<li>属性名：属性值</li>
<li>键值对（key：value）</li>
<li>对象的标志是花括号{}</li>
</ul>
</div>
<h3 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h3>
<ul>
<li>字面量
<ul>
<li><code v-pre>var obj = {name: &quot;anmin&quot;}</code></li>
</ul>
</li>
<li>构造函数：批量
<ul>
<li><code v-pre>var obj = new Object();</code></li>
</ul>
</li>
</ul>
<h3 id="对象的使用" tabindex="-1"><a class="header-anchor" href="#对象的使用" aria-hidden="true">#</a> 对象的使用</h3>
<ul>
<li>点语法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"admin"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>中括号语法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"admin"</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"name"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">,</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>组成：键值对</li>
<li>意义：存储数据编程</li>
<li>关系
<ul>
<li>任何两个对象都不相等</li>
<li>如果相等了，就是一个对象</li>
</ul>
</li>
</ul>
</div>
<h3 id="对象的分类" tabindex="-1"><a class="header-anchor" href="#对象的分类" aria-hidden="true">#</a> 对象的分类</h3>
<ul>
<li>本地对象（构造函数）
<ul>
<li>创建字符的对象: <code v-pre>String</code></li>
<li>创建数值的对象: <code v-pre>Number</code></li>
<li>创建日期的对象: <a href="#data"><code v-pre>Data</code></a></li>
<li>创建正则的对象: <code v-pre>RegExp</code></li>
</ul>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>被new 执行之后，才能得到对应的对象</li>
<li>内置构造函数</li>
</ul>
</div>
<ul>
<li>
<p>内置对象</p>
<ul>
<li>可以直接被使用的对象，不需要创建和操作</li>
<li>数学对象: <a href="#math">Math</a></li>
</ul>
</li>
<li>
<p>宿主对象</p>
<ul>
<li>没有明确隶属对象的数据（变量，函数），就属于window</li>
<li>window是客户端js中的顶层对象，客户端中最大的boss</li>
<li>一般情况下，window可以被省略
<ul>
<li>特殊情况：
<ul>
<li>严格模式</li>
<li>在局部声明全局（window.a = 10;）</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="对象的操作" tabindex="-1"><a class="header-anchor" href="#对象的操作" aria-hidden="true">#</a> 对象的操作</h3>
<ul>
<li>删除对象的属性
<ul>
<li>关键字：<code v-pre>delete</code> 对象.属性名</li>
<li>最好清空 对象.属性名 = null</li>
</ul>
</li>
</ul>
<h3 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h3>
<p><strong>Math 是数学对象，提供了数学操作</strong></p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Math.round(number)</td>
<td>四舍五入</td>
</tr>
<tr>
<td>Math.random()</td>
<td>随机数</td>
</tr>
<tr>
<td>Math.abs(number)</td>
<td>绝对值</td>
</tr>
<tr>
<td>Math.ceil(number)</td>
<td>向上取整（取大的）</td>
</tr>
<tr>
<td>Math.floor(number)</td>
<td>线下取整（取小的）</td>
</tr>
<tr>
<td>Math.min(number, ...)</td>
<td>最小值（不能放数组NaN）</td>
</tr>
<tr>
<td>Math.max(number, ...)</td>
<td>最大值（不能放数组NaN）</td>
</tr>
<tr>
<td>Math.sqrt(number)</td>
<td>根号下</td>
</tr>
<tr>
<td>Math.pow(number, 几次方)</td>
<td>几次幂</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">Math属性</p>
<ul>
<li>Math.PI				                 圆周率</li>
</ul>
</div>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> Data</h3>
<p><strong>Date（需要new之后才能使用）</strong></p>
<ul>
<li>创建日期对象
<ul>
<li>
<p><code v-pre>new Date()</code></p>
</li>
<li>
<p><code v-pre>new Date(year, month, day, hour, minute, second, millisecond)</code></p>
<ul>
<li>参数：
<ul>
<li>year：年份</li>
<li>month：月份</li>
<li>day：日期</li>
<li>hour：小时</li>
<li>minute：分钟</li>
<li>second：秒</li>
<li>millisecond：毫秒</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="日期的操作" tabindex="-1"><a class="header-anchor" href="#日期的操作" aria-hidden="true">#</a> 日期的操作</h4>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>date.getFullYear()</td>
<td>获取年份（4位）</td>
</tr>
<tr>
<td>date.getMonth()</td>
<td>获取月份（0~11）</td>
</tr>
<tr>
<td>date.getDate()</td>
<td>获取日期（1~31）</td>
</tr>
<tr>
<td>date.getDay()</td>
<td>获取星期几（0~6）</td>
</tr>
<tr>
<td>date.getHours()</td>
<td>获取小时（0~23）</td>
</tr>
<tr>
<td>date.getMinutes()</td>
<td>获取分钟（0~59）</td>
</tr>
<tr>
<td>date.getSeconds()</td>
<td>获取秒（0~59）</td>
</tr>
<tr>
<td>date.getMilliseconds()</td>
<td>获取毫秒（0~999）</td>
</tr>
<tr>
<td>date.getTime()</td>
<td>获取时间戳（1970年1月1日0：0：0到此时的毫秒）</td>
</tr>
<tr>
<td>date.setFullYear(year)</td>
<td>设置年份（4位）</td>
</tr>
<tr>
<td>date.setMonth(month)</td>
<td>设置月份（0~11）</td>
</tr>
<tr>
<td>date.setDate(date)</td>
<td>设置日期（1~31）</td>
</tr>
<tr>
<td>date.setDay(day)</td>
<td>设置星期几（0~6）</td>
</tr>
<tr>
<td>date.setHours(hours)</td>
<td>设置小时（0~23）</td>
</tr>
<tr>
<td>date.setMinutes(minutes)</td>
<td>设置分钟（0~59）</td>
</tr>
<tr>
<td>date.setSeconds(seconds)</td>
<td>设置秒（0~59）</td>
</tr>
<tr>
<td>date.setMilliseconds(milliseconds)</td>
<td>设置毫秒（0~999）</td>
</tr>
<tr>
<td>date.setTime(time)</td>
<td>设置时间戳（1970年1月1日0：0：0到此时的毫秒）</td>
</tr>
</tbody>
</table>
<h5 id="获取指定日期" tabindex="-1"><a class="header-anchor" href="#获取指定日期" aria-hidden="true">#</a> 获取指定日期</h5>
<ul>
<li>给构造函数传参
<ul>
<li>一个参数（字符）
<ul>
<li>没设置的部分：清0；超出的日期：Invalid Data；月份从1开始</li>
</ul>
</li>
<li>多个参数（数值）
<ul>
<li>没设置的部分：清0；超出的日期：向前进1；月份从0开始</li>
</ul>
</li>
</ul>
</li>
<li>创建函数后，修改日期
<ul>
<li>逐部分修改
<ul>
<li>没设置的部分：以当前日期为准；超出的日期：向前进1；月份从0开始</li>
<li>set系列方法</li>
</ul>
</li>
<li>设置时间戳
<ul>
<li>设置从1970年1月1日0：0：0过去了的毫秒数</li>
<li>日期对象.setTime(毫秒数)</li>
</ul>
</li>
</ul>
</li>
<li>计算两个日期的时间差
<ul>
<li>设置两个指定的日期</li>
<li>将日期对象相减，得到毫秒数（兼容问题）</li>
<li>先获取日期对象的时间戳，在相减，得到毫秒数，转换（没有兼容问题）</li>
</ul>
</li>
</ul>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<ul>
<li>关键字，类似于变量，但并不是变量，是一个指向（指针），它的支持按必然是一个对象烈性的数据（不是对象强转对象）</li>
<li>一般存在于函数中
<ul>
<li>不在任何函数中的this，指向window</li>
</ul>
</li>
<li>this在函数中默认是没有指向的。只有在函数执行的一瞬间，才有指向</li>
<li>this指向当前所在函数的<strong>执行对象</strong>（函数被哪个对象执行，就指向哪个对象）
<ul>
<li>默认执行
<ul>
<li>函数名()</li>
<li>this指向window</li>
</ul>
</li>
<li>对象执行（事件）
<ul>
<li>对象.函数()</li>
<li>this指向对象</li>
</ul>
</li>
<li>作为回调函数使用
<ul>
<li>参数()</li>
<li>this指向window</li>
</ul>
</li>
<li>new 执行
<ul>
<li>new 函数()</li>
<li>this指向new出来的对象</li>
</ul>
</li>
</ul>
</li>
<li>this的绑定方法
<ul>
<li>默认绑定
<ul>
<li>window，没有明确隶属对象的执行执行（非严格模式）</li>
</ul>
</li>
<li>隐式绑定
<ul>
<li>通过某个对象执行函数，this就是这个对象</li>
<li>存在隐式丢失
<ul>
<li>作为回调函数传入另一个函数中执行，this指向window</li>
</ul>
</li>
</ul>
</li>
<li>强制绑定
<ul>
<li>通过bind，call，apply绑定this指向，this指向设置值</li>
</ul>
</li>
<li>new绑定
<ul>
<li>通过new执行函数，this指向new出来的函数</li>
</ul>
</li>
</ul>
</li>
<li>改变this的指向 - 锦上添花
<ul>
<li>任何情况下多可以不该变，改变之后能更方便</li>
<li>案例：事件委托的封装</li>
</ul>
</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">误区</p>
<ul>
<li>误解1：this是当前函数，×				   函数的指向</li>
<li>误解2：this在哪被定义，就是谁，×			被谁执行接指向谁</li>
<li>误解3：this是变量，×						关键字</li>
</ul>
</div>
<h2 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h2>
<div class="custom-container tip"><p class="custom-container-title">BOM</p>
<ul>
<li>浏览器的对象模型：window</li>
<li>提供了窗口与窗口之间的通信</li>
<li>用户与浏览器的交互</li>
<li>浏览器自身的信息</li>
</ul>
</div>
<h3 id="bom-window" tabindex="-1"><a class="header-anchor" href="#bom-window" aria-hidden="true">#</a> BOM - window</h3>
<div class="custom-container tip"><p class="custom-container-title">window</p>
<ul>
<li>window是js的顶层对象，涵盖了介绍所有的信息</li>
<li>window有自己的方法（内置的全局函数）</li>
<li>window有自己的事件</li>
<li>window有自己的子对象（内置的全局对象）</li>
<li>window有自己的属性（内置的全局变量）</li>
</ul>
</div>
<h3 id="window的方法" tabindex="-1"><a class="header-anchor" href="#window的方法" aria-hidden="true">#</a> window的方法</h3>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">parseInt()</td>
<td style="text-align:left">将字符串转换为整数</td>
</tr>
<tr>
<td style="text-align:left">isNaN()</td>
<td style="text-align:left">判断是否为数字</td>
</tr>
<tr>
<td style="text-align:left">open(url)</td>
<td style="text-align:left">打开新窗口</td>
</tr>
<tr>
<td style="text-align:left">close</td>
<td style="text-align:left">关闭当前窗口</td>
</tr>
<tr>
<td style="text-align:left">alert</td>
<td style="text-align:left">弹出信息框；无返回值</td>
</tr>
<tr>
<td style="text-align:left">prompt</td>
<td style="text-align:left">弹出输入框；返回输入的值，没有输入返回空字符</td>
</tr>
<tr>
<td style="text-align:left">confirm</td>
<td style="text-align:left">弹出选择框；点击确定返回true，取消返回false</td>
</tr>
<tr>
<td style="text-align:left">setInterval</td>
<td style="text-align:left">(计时器) <br/> 参数1: 函数,参数2: 毫秒数 <br/> 返回: 计时器的唯一标志<br/></td>
</tr>
<tr>
<td style="text-align:left">clearInterval</td>
<td style="text-align:left">参数: 要清除计时器的唯一标志（返回值变量）</td>
</tr>
<tr>
<td style="text-align:left">setTimeout</td>
<td style="text-align:left">(延时器) <br/> 参数1: 函数,参数2: 毫秒数 <br/> 返回: 计时器的唯一标志<br/></td>
</tr>
<tr>
<td style="text-align:left">clearTimeout</td>
<td style="text-align:left">参数: 要清除延时器的唯一标志（返回值变量）</td>
</tr>
<tr>
<td style="text-align:left">...</td>
<td style="text-align:left">...</td>
</tr>
</tbody>
</table>
<h3 id="window的事件" tabindex="-1"><a class="header-anchor" href="#window的事件" aria-hidden="true">#</a> window的事件</h3>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">扩展</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">load</td>
<td style="text-align:left">网页<strong>结构</strong>和<strong>资源</strong>都加载结束</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">resize</td>
<td style="text-align:left">窗口尺寸变化</td>
<td style="text-align:left">可视区域的宽度: <code v-pre>document.documentElement.clientWidth</code> <br/>可视区域的高度: <code v-pre>document.documentElement.clientHight</code></td>
</tr>
<tr>
<td style="text-align:left">scroll</td>
<td style="text-align:left">滚动条滚动</td>
<td style="text-align:left">滚动条距离右边的距离: <code v-pre>document.documentElement.scrollTop</code> <br/>滚动条距离左边的距离: <code v-pre>document.documentElement.scrollTop</code></td>
</tr>
</tbody>
</table>
<h3 id="window的子对象" tabindex="-1"><a class="header-anchor" href="#window的子对象" aria-hidden="true">#</a> window的子对象</h3>
<table>
  <tr>
    <th>名称</th>
    <th>属性值/方法</th>
    <th>描述</th>
  </tr>
  <tbody>
    <tr>
      <th rowspan="5">location <br/>浏览器地址</th>
      <td>href</td>
      <td>浏览器的完整地址 <br/> 可获取，可设置。设置后页面会跳转</td>
    </tr>
    <tr>
      <td>search</td>
      <td>地址栏?后的部分，表示数据查询（要向后台发送的数据）<br/> 可获取，可设置。设置后页面会跳转</td>
    </tr>
    <tr>
      <td>hash</td>
      <td>地址蓝#后的部分，表示锚点链接（哈希值）<br/> 可获取，可设置。设置后页面会跳转</td>
    </tr>
    <tr>
      <td>reload()</td>
      <td>重新加载，刷新当前页面</td>
    </tr>
    <tr>
      <td>assign(url)</td>
      <td>跳转到指定地址，url为字符类型数据，空字符，刷新</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="4">history <br/> 历史记录</th>
      <td>length</td>
      <td>历史记录的个数</td>
    </tr>
    <tr>
      <td>forward()</td>
      <td>向前一个历史记录</td>
    </tr>
    <tr>
      <td>back()</td>
      <td>向后一个历史记录</td>
    </tr>
    <tr>
      <td>go(n)</td>
      <td>正：向前走；负：先后退；0：刷新</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th>navigator <br/> 浏览器信息</th>
      <td>userAgent</td>
      <td>浏览器信息（名，内核，版本，运行系统）</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th>screen</th>
      <td></td>
      <td>视口，屏幕尺寸</td>
    </tr>
    <tr>
      <th>frames</th>
      <td></td>
      <td>框架，对应iframes的标签操作</td>
    </tr>
    <tr>
      <th>document</th>
      <td></td>
      <td>文档对象，网页</td>
    </tr>
  </tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">页面刷新的方法</p>
<ul>
<li>location.reload()</li>
<li>location.assign(&quot;&quot;)</li>
<li>history.go(0)</li>
<li>location.href = lication.href</li>
<li>location.search = location.search</li>
<li>location.hash = location.hash</li>
</ul>
</div>
<h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2>
<div class="custom-container tip"><p class="custom-container-title">介绍</p>
<ul>
<li>DOM：文档对象模型：document</li>
<li>document，网页，document其实就是网页的抽象</li>
<li>提供了所有网页的操作</li>
<li>DOM结构，参照html结构
<ul>
<li>倒树形结构，家族结构</li>
</ul>
</li>
<li>DOM的所有组成成分都叫节点，所有的节点都是对象类型
<ul>
<li>元素节点（标签）</li>
<li>文本节点（标签内的文字）</li>
<li>注释节点（注释）</li>
<li>属性节点（属性）</li>
<li>根节点（根元素）</li>
</ul>
</li>
<li>js做行为，先选中要控制的元素（选择器），交互（样式，属性，元素，内容）</li>
</ul>
</div>
<h3 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h3>
<ul>
<li>
<p>元素节点选择器</p>
<ul>
<li>直接选择
<ul>
<li>id（id名）
<ul>
<li><code v-pre>document.getElementById(&quot;id名&quot;);</code></li>
<li>单个对象，失明特性（多个id只选择第一个）</li>
</ul>
</li>
<li>class（class名）
<ul>
<li><code v-pre>document.getElementsByClassName(&quot;class名&quot;);</code></li>
<li>多个对象，返回数组，一个元素返回也是数组</li>
</ul>
</li>
<li>tagName（标签名）
<ul>
<li><code v-pre>document.getElementsByTagName(&quot;标签名&quot;);</code></li>
<li>多个对象，返回数组，</li>
</ul>
</li>
<li>name（name属性，表单类）
<ul>
<li><code v-pre>document.getElementsByName(&quot;name属性值&quot;)；</code></li>
<li>多个对象，返回数组</li>
</ul>
</li>
<li>query（css写法）单个
<ul>
<li><code v-pre>document.querySelector(&quot;css选择器&quot;);</code></li>
<li>单个对象，支持css的所有写法，返回对象</li>
</ul>
</li>
<li>queryAll（css写法）多个
<ul>
<li><code v-pre>document.querySelectorAll(&quot;css选择器&quot;);</code></li>
<li>多个对象，支持css所有写法，返回数组</li>
</ul>
</li>
</ul>
</li>
<li>关系选择
<ul>
<li>父选子元素
<ul>
<li>父选子元素节点 		<code v-pre>ele.children</code></li>
<li>子选父元素节点 		<code v-pre>ele.parentNode</code></li>
<li>兄元素节点			 <code v-pre>ele.previousElementSibling</code></li>
<li>弟元素节点			<code v-pre> ele.nextElementSibling</code></li>
<li>第一个子元素节点	    <code v-pre>ele.firstElementChild</code></li>
<li>最后一个子元素节点	   <code v-pre>ele.lastElementChild</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>其他节点选择器</p>
<ul>
<li>关系选择（没有子选父）
<ul>
<li>父选子节点			<code v-pre>ele.childNodes</code></li>
<li>兄节点			 <code v-pre>ele.previousSibling</code></li>
<li>弟节点			 <code v-pre>ele.nextSibling</code></li>
<li>第一个子节点	   <code v-pre>ele.firstChild</code></li>
<li>最后一个子节点	  <code v-pre>ele.lastChild</code></li>
</ul>
</li>
<li>属性选择
<ul>
<li><code v-pre>ele.attributes（数组）</code></li>
<li>伪数组</li>
</ul>
</li>
</ul>
</li>
<li>
<p>选中之后的内容</p>
<ul>
<li>单个对象：可以直接使用
<ul>
<li>id（id名）</li>
<li>query（css写法）</li>
<li>parentElementNode（子选父元素节点）</li>
<li>previousElementSibling（兄元素节点）</li>
<li>nextElementSibling（弟元素节点）</li>
<li>firstElementChild（第一个子元素节点）</li>
<li>lastElementChild（最后一个子元素节点）</li>
<li>previousSibling（兄元素节点）</li>
<li>nextSibling（弟元素节点）</li>
<li>firstChild（第一个子节点）</li>
<li>lastChild（最后一个子节点）</li>
</ul>
</li>
<li>数组：解析数据后才可以使用
<ul>
<li>className（class名）</li>
<li>tagName（标签名）</li>
<li>name（name属性，表单类）</li>
<li>queryALL（css写法）</li>
<li>childred（父选子元素节点）</li>
<li>childNodes（父选子节点）</li>
<li>attributes（属性节点）</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="节点的过滤" tabindex="-1"><a class="header-anchor" href="#节点的过滤" aria-hidden="true">#</a> 节点的过滤</h3>
<div class="custom-container tip"><p class="custom-container-title">节点的信息属性</p>
<ul>
<li>节点.nodeType		类型</li>
<li>节点.nodeName		名字</li>
<li>节点.nodeValue		内容</li>
</ul>
</div>
<table>
<thead>
<tr>
<th>节点</th>
<th>类型nodeType</th>
<th>名字nodeName</th>
<th>内容nodeValue</th>
</tr>
</thead>
<tbody>
<tr>
<td>元素</td>
<td>1</td>
<td>标签名（大写）</td>
<td>null</td>
</tr>
<tr>
<td>文本</td>
<td>3</td>
<td>#text</td>
<td>文本内容</td>
</tr>
<tr>
<td>注释</td>
<td>8</td>
<td>#commen</td>
<td>注释内容</td>
</tr>
<tr>
<td>属性</td>
<td>2</td>
<td>属性名</td>
<td>属性值</td>
</tr>
<tr>
<td>跟</td>
<td>9</td>
<td>#document</td>
<td>null</td>
</tr>
</tbody>
</table>
<h3 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h3>
<ul>
<li>
<p>行内样式<strong>用来设置</strong></p>
<ul>
<li>获取：<code v-pre>元素.style.css属性</code>
<ul>
<li>只可以获取行内，鲁能获取非行内</li>
</ul>
</li>
<li>设置：<code v-pre>元素.style.css属性 = &quot;值&quot;</code>
<ul>
<li><code v-pre>元素.style.cssText</code> 可以重新设置所有样式</li>
</ul>
</li>
<li>没有兼容，所有浏览器都支持</li>
<li>计算设置样式，必须找行内操作</li>
</ul>
</li>
<li>
<p>非行内样式<strong>用来获取</strong></p>
<ul>
<li>不可以设置</li>
<li>获取：<code v-pre>getComputedStyle(元素，null).css属性名</code>
<ul>
<li>
<p>既可以获取非行内样式，也可以获取行内样式</p>
</li>
<li>
<p>有兼容性（IE8几以下）</p>
<ul>
<li>IE专属属性：<code v-pre>元素.currentStyle.css属性名</code></li>
</ul>
</li>
<li>
<p>最终兼容处理</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>attr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>currentStyle<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> ele<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> ele<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom元素属性" tabindex="-1"><a class="header-anchor" href="#dom元素属性" aria-hidden="true">#</a> DOM元素属性</h3>
<ul>
<li>
<p>html属性：可以写在html标签内的属性</p>
<ul>
<li>内置
<ul>
<li>class(className),id,title,alt...</li>
<li>操作：
<ol>
<li>对象的操作方式(点语法、中括号语法)</li>
<li>系列方法
<ul>
<li>查</li>
<li><code v-pre>getAttribute()</code>		一个参数，要获取的属性名</li>
<li>增、改</li>
<li><code v-pre>setAttribute()</code>		两个参数，要设置的属性名和属性值</li>
<li>删</li>
<li><code v-pre>removeAttribute()</code>		一个参数，要删除的属性</li>
</ul>
</li>
</ol>
</li>
</ul>
</li>
<li>自定义
<ul>
<li>只要官方没有提供，强行写在html标签内的，都是自定义</li>
<li>操作</li>
<li>系列方法
<ul>
<li>查（返回查询的数据）
<ul>
<li><code v-pre>getAttribute()</code>		一个参数，要获取的属性名</li>
</ul>
</li>
<li>增、改（返回undefined）
<ul>
<li><code v-pre>setAttribute()</code>		两个参数，要设置的属性名和属性值</li>
</ul>
</li>
<li>删（返回undefined）
<ul>
<li><code v-pre>removeAttribute()</code>		一个参数，要删除的属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>js属性：没有写在HTML的标签内</p>
<ul>
<li>内置
<ul>
<li><code v-pre>innerHTML</code>(获取标签的内容，包括子元素，字符)</li>
<li><code v-pre>innerText</code>(只获取文本内容，字符)</li>
<li><code v-pre>outerHTML</code>(获取包括自己的标签内容，包括自己，子元素，字符)</li>
<li>tagName...</li>
<li>操作
<ul>
<li>对象的操作方式(点语法、中括号语法)</li>
</ul>
</li>
</ul>
</li>
<li>自定义
<ul>
<li>只要官方没提供，强行写，都是自定义</li>
<li>操作：
<ul>
<li>对象的操作方式(点语法、中括号语法)</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>本质上就是将元素作为对象使用</strong></p>
<h3 id="元素的尺寸类属性" tabindex="-1"><a class="header-anchor" href="#元素的尺寸类属性" aria-hidden="true">#</a> 元素的尺寸类属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">offsetWidth</td>
<td style="text-align:left">元素的宽度（内容+内边距+边框）</td>
</tr>
<tr>
<td style="text-align:left">offsetHeight</td>
<td style="text-align:left">元素的高度（内容+内边距+边框）</td>
</tr>
<tr>
<td style="text-align:left">clientWidth</td>
<td style="text-align:left">元素的宽度（内容+内边距）</td>
</tr>
<tr>
<td style="text-align:left">clientHeight</td>
<td style="text-align:left">元素的高度（内容+内边距）</td>
</tr>
<tr>
<td style="text-align:left">scrollWidth</td>
<td style="text-align:left">元素的宽度（内容+内边距+溢出内容）</td>
</tr>
<tr>
<td style="text-align:left">scrollHeight</td>
<td style="text-align:left">元素的高度（内容+内边距+溢出内容）</td>
</tr>
<tr>
<td style="text-align:left">offsetLeft</td>
<td style="text-align:left">元素相对于包含快的位置</td>
</tr>
<tr>
<td style="text-align:left">offsetTop</td>
<td style="text-align:left">元素相对于包含快的位置</td>
</tr>
<tr>
<td style="text-align:left">scrollLeft/scrollTop</td>
<td style="text-align:left">滚走的距离(可以设置)</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">包含块</p>
<ul>
<li>距离当前元素最近的拥有定位的父元素，如果没有，就是根元素</li>
<li>获取某个元素的根元素：<code v-pre>元素.offsetParent</code></li>
</ul>
</div>
<h3 id="元素-标签-的操作" tabindex="-1"><a class="header-anchor" href="#元素-标签-的操作" aria-hidden="true">#</a> 元素（标签）的操作</h3>
<ul>
<li>
<p>增：</p>
<ul>
<li>创建标签
<ul>
<li><code v-pre>createElement(&quot;标签名&quot;)</code></li>
</ul>
</li>
<li>插入标签
<ul>
<li><code v-pre>appendChild(创建的标签)</code>
<strong>每创建一个元素只可以插入一次</strong></li>
</ul>
</li>
</ul>
</li>
<li>
<p>删：</p>
<ul>
<li><code v-pre>元素名.remove()</code></li>
<li><code v-pre>父元素.removeChild(子元素)</code></li>
</ul>
</li>
<li>
<p>改：</p>
<ul>
<li>先使用innerHTML获取到不包括自己的内部所有内容</li>
<li>替换包裹的标签后放入变量中</li>
<li>使用outerHTML把原来的所有内容替换成新内容</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> onav <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"nav"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"&lt;span>"</span><span class="token operator">+</span> onav<span class="token punctuation">.</span>innerHTML <span class="token operator">+</span><span class="token string">"&lt;/span>"</span><span class="token punctuation">;</span>
  onav<span class="token punctuation">.</span>outerHTML <span class="token operator">=</span> str<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查：<a href="#选择器">选择器</a></li>
</ul>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<div class="custom-container tip"><p class="custom-container-title">概念</p>
<ul>
<li>事件，行为，用户和浏览器或页面交互的过程中发生的行为</li>
<li>根据用户的不同行为，执行不同的程序，响应事件</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">组成</p>
<ul>
<li>元素.on事件类型 = 函数
<ul>
<li>元素：绑定事件的元素，事件源</li>
<li>on：绑定事件的方式</li>
<li>时间类型：行为类型</li>
<li>=：赋值，on绑定事件的方式所特有的部分</li>
<li>函数：事件处理函数</li>
</ul>
</li>
</ul>
<p><strong>on是一种绑定事件的方式，并不属于事件分类的名字</strong></p>
</div>
<h3 id="事件类型的分类" tabindex="-1"><a class="header-anchor" href="#事件类型的分类" aria-hidden="true">#</a> 事件类型的分类</h3>
<h3 id="_1-鼠标类" tabindex="-1"><a class="header-anchor" href="#_1-鼠标类" aria-hidden="true">#</a> 1. 鼠标类</h3>
<ul>
<li>左键单击：click</li>
<li>左键双击：dblclick</li>
<li>右键单击：contextmenu</li>
<li>进入：mouseover（有冒泡） / mouseenter（无冒泡）</li>
<li>离开：mouseout （有冒泡）/ mouseleave（无冒泡）</li>
<li>移动：mousemove</li>
<li>按下：mousedown</li>
<li>抬起：mouseup</li>
</ul>
<h3 id="_2-键盘类" tabindex="-1"><a class="header-anchor" href="#_2-键盘类" aria-hidden="true">#</a> 2. 键盘类</h3>
<ul>
<li>按下：keydown</li>
<li>抬起：keyup</li>
<li>按下并抬起：keypress</li>
</ul>
<h3 id="_3-表单类" tabindex="-1"><a class="header-anchor" href="#_3-表单类" aria-hidden="true">#</a> 3. 表单类</h3>
<ul>
<li>失去焦点：blur</li>
<li>获取焦点：focus</li>
<li>输入：input</li>
<li>内容改变：change</li>
<li>提交：submit</li>
<li>重置：reset</li>
</ul>
<h3 id="_4-浏览器类" tabindex="-1"><a class="header-anchor" href="#_4-浏览器类" aria-hidden="true">#</a> 4. 浏览器类</h3>
<ul>
<li>加载：load</li>
<li>改变大小：resize</li>
<li>滚动：scroll</li>
</ul>
<h3 id="事件的绑定语法" tabindex="-1"><a class="header-anchor" href="#事件的绑定语法" aria-hidden="true">#</a> 事件的绑定语法</h3>
<ul>
<li><code v-pre>事件源.on事件名 = 函数</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<ol>
<li>注意当前行为</li>
<li>注意事件源</li>
<li>注意当前事件源，会不会触发当前行为</li>
<li>键盘事件不能加给不能被选中的元素
<ul>
<li>表单控件</li>
<li>document</li>
</ul>
</li>
</ol>
</div>
<h2 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h2>
<ul>
<li>自身是一个对象类型，事件按对象内，保存了当前这次事件发生过程中的相关信息</li>
<li>事件（上级安排任务，刺探敌情）</li>
<li>上级：计算机（浏览器）</li>
<li>如何完成任务：事件类型</li>
<li>任务是什么：事件处理函数</li>
<li>秘书：帮助，记录信息，事件对象</li>
</ul>
<h3 id="事件对象的特点" tabindex="-1"><a class="header-anchor" href="#事件对象的特点" aria-hidden="true">#</a> 事件对象的特点</h3>
<ul>
<li>每次事件都有不同的秘书（事件对象跟随事件变化）</li>
<li>只有事件对象发生时，才有秘书，没有事件，没有秘书（事件对象，依赖事件）</li>
<li>任务结束后，秘书会被回收（事件对象在事件结束后，被浏览器回收）</li>
<li>防止暴露信息，秘书日常隐藏，需要时主动召唤，才能使用（事件对象默认隐藏，需要主动使用）</li>
</ul>
<h3 id="如何获取事件对象" tabindex="-1"><a class="header-anchor" href="#如何获取事件对象" aria-hidden="true">#</a> 如何获取事件对象</h3>
<ul>
<li>必须要有事件</li>
<li>只能在事件处理函数中才能获取到事件对象
<ul>
<li>事件处理函数的第一个参数：正常浏览器</li>
<li>找window对象身上的event：IE</li>
<li>兼容写法</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  ele<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eve</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> e <span class="token operator">=</span> eve <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件对象的属性" tabindex="-1"><a class="header-anchor" href="#事件对象的属性" aria-hidden="true">#</a> 事件对象的属性</h3>
<h4 id="鼠标事件的事件对象" tabindex="-1"><a class="header-anchor" href="#鼠标事件的事件对象" aria-hidden="true">#</a> 鼠标事件的事件对象</h4>
<ul>
<li>当前鼠标触发事件时，在元素身上的坐标
<ul>
<li>事件对象.属性
<ul>
<li>offsetX/Y
<ul>
<li>鼠标相对于<strong>事件目标</strong>的坐标</li>
</ul>
</li>
<li>clientX/Y
<ul>
<li>鼠标相对于<strong>可视区域</strong>的坐标</li>
</ul>
</li>
<li>pageX/Y
<ul>
<li>鼠标相对于<strong>页面</strong>的坐标</li>
</ul>
</li>
<li>screenX/Y
<ul>
<li>鼠标相对与<strong>显示器</strong>的坐标</li>
</ul>
</li>
<li>button
<ul>
<li>左键：0；中键：1；右键：2；</li>
</ul>
</li>
<li>buttons
<ul>
<li>左键：1；中键：4；右键：2；</li>
</ul>
</li>
<li>type
<ul>
<li>事件类型</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="键盘事件的对象" tabindex="-1"><a class="header-anchor" href="#键盘事件的对象" aria-hidden="true">#</a> 键盘事件的对象</h4>
<ul>
<li>事件对象.属性
<ul>
<li>keyCode
<ul>
<li>对应的按键</li>
<li>有兼容
<ul>
<li>keyCode（IE）</li>
<li>which（其他）</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> k <span class="token operator">=</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">||</span> e<span class="token punctuation">.</span>which
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>ctrlKey</p>
<ul>
<li>ctrl键</li>
</ul>
</li>
<li>
<p>shiftKey</p>
<ul>
<li>shift键</li>
</ul>
</li>
<li>
<p>altKey</p>
<ul>
<li>alt键（执行一次后焦点消失）</li>
</ul>
</li>
<li>
<p>metaKey</p>
<ul>
<li>win键</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="默认事件" tabindex="-1"><a class="header-anchor" href="#默认事件" aria-hidden="true">#</a> 默认事件</h2>
<ul>
<li>概念
<ul>
<li>浏览器自带的功能，文字的选中，右键菜单，tab的切换焦点，表单的提交跳转，a的提交跳转...</li>
<li>阻止默认事件
<ul>
<li>找到事件</li>
<li>拿到事件对象</li>
<li>阻止方法</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">stopDefault</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span><span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>阻止右键菜单
<ul>
<li>找到事件源(document)右键事件</li>
<li>拿到事件对象</li>
<li>阻止</li>
</ul>
</li>
</ul>
<h2 id="事件流" tabindex="-1"><a class="header-anchor" href="#事件流" aria-hidden="true">#</a> 事件流</h2>
<h3 id="事件捕获" tabindex="-1"><a class="header-anchor" href="#事件捕获" aria-hidden="true">#</a> 事件捕获</h3>
<ul>
<li>从外向内</li>
<li>如果需要事件捕获，需要配合专用语句实现
<ul>
<li>监听式绑定事件</li>
</ul>
</li>
</ul>
<h3 id="事件目标" tabindex="-1"><a class="header-anchor" href="#事件目标" aria-hidden="true">#</a> 事件目标</h3>
<ul>
<li>
<p>事件源</p>
<ul>
<li>绑定事件的元素，可以通过this获取</li>
</ul>
</li>
<li>
<p>事件目标</p>
<ul>
<li>触发事件的元素，通过事件对象身上的属性：<code v-pre>e.target</code> / <code v-pre>e.srcElement</code>获取</li>
</ul>
</li>
<li>
<p>事件源和事件目标的区分</p>
<ul>
<li>一般情况下，事件源就是事件目标</li>
<li>当发生事件冒泡时，事件源与时间目标就不是同一个元素</li>
</ul>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我没有事件，但是可以点<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> obox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span>
    obox<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eve</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> e <span class="token operator">=</span> eve <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
        <span class="token keyword">var</span> tar <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token operator">||</span> e<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"事件源是："</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"事件目标是："</span><span class="token punctuation">,</span> tar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h3>
<ul>
<li>
<p>从里向外</p>
</li>
<li>
<p>事件的执行循序</p>
</li>
<li>
<p>浏览器默认情况下会使用事件冒泡的事件流</p>
</li>
<li>
<p><strong>如不需要冒泡，阻止冒泡，不要设置成捕获</strong></p>
<ul>
<li>事件冒泡：当触发某个元素的某个事件时，该事件执行后，会<strong>依次向上</strong>触发<strong>所有父元素</strong>的<strong>相同</strong>事件</li>
<li>按需阻止
<ul>
<li>阻止方式
<ul>
<li><code v-pre>eve.stopPropagation();</code>其他浏览器</li>
<li><code v-pre>eve.cancelBubble = true;</code>IE浏览器</li>
<li>兼容写法</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">stopBubble</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span><span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  e<span class="token punctuation">.</span>stopPropagation <span class="token operator">?</span> e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> e<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h3>
<ul>
<li>概念
<ul>
<li>利用<strong>事件冒泡原理</strong>，将绑定在<strong>多个子元素</strong>身上的<strong>相同事件</strong>绑定在页面上现存的<strong>父元素</strong>身上</li>
</ul>
</li>
<li>特点
<ul>
<li>节省性能</li>
<li>可以给页面上暂时不存在的元素绑定事件</li>
</ul>
</li>
</ul>
<h2 id="监听式绑定事件" tabindex="-1"><a class="header-anchor" href="#监听式绑定事件" aria-hidden="true">#</a> 监听式绑定事件</h2>
<h3 id="赋值式绑定" tabindex="-1"><a class="header-anchor" href="#赋值式绑定" aria-hidden="true">#</a> 赋值式绑定</h3>
<ul>
<li>DOM0级事件绑定（on绑定）</li>
<li>元素.on元素类型 = 元素处理函数
<ul>
<li><code v-pre>btn.onclick = function(){}</code></li>
</ul>
</li>
<li>没有兼容</li>
<li>无法重复绑定
<ul>
<li>本质是赋值</li>
<li>重复赋值会覆盖</li>
</ul>
</li>
</ul>
<h3 id="监听式绑定事件-1" tabindex="-1"><a class="header-anchor" href="#监听式绑定事件-1" aria-hidden="true">#</a> 监听式绑定事件</h3>
<ul>
<li>DOM2级事件绑定</li>
<li>可以添加多个监听事件</li>
<li>有兼容</li>
<li>正常浏览器
<ul>
<li>绑定事件监听
<ul>
<li>元素.addEventListener(&quot;事件类型&quot;，事件处理函数，布尔值)</li>
<li><code v-pre>btn.addEventListener(&quot;click&quot;,function(){},false)</code></li>
<li>false: 事件冒泡，默认值</li>
<li>true: 事件捕获</li>
</ul>
</li>
<li>解绑事件监听
<ul>
<li>元素.removeEventListener(&quot;使劲按类型&quot;，使劲按处理函数，布尔值)</li>
<li><code v-pre>btn.removerEventListener(&quot;click&quot;,function(){},false)</code></li>
<li><strong>清除监听是采用给函数命名的方式创建函数</strong></li>
</ul>
</li>
</ul>
</li>
<li>IE浏览器
<ul>
<li>IE浏览器只有冒泡，没有捕获</li>
<li>当一个元素绑定多个相同事件后，先执行后绑定的</li>
<li>绑定监听事件
<ul>
<li>元素.attachEvent(&quot;on&quot; + 事件类型，事件处理函数)</li>
<li><code v-pre>btn.attachEvent(&quot;onclick&quot;,function(){})</code></li>
<li>解绑监听事件
<ul>
<li>元素.detachEvent(&quot;on&quot; + 事件类型，事件处理函数)</li>
<li><code v-pre>btn.detachEvent(&quot;onclick&quot;,function)</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>监听式绑定事件的封装</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>type<span class="token punctuation">,</span>fun</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span><span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>fun<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">"on"</span><span class="token operator">+</span>type<span class="token punctuation">,</span>fun<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>监听式解绑事件的封装</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">removerEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>type<span class="token punctuation">,</span>fun</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">)</span><span class="token punctuation">{</span>
      ele<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>fun<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      ele<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">,</span>fun<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>删除的事件处理函数，必须和绑定的事件处理函数是同一个</strong></p>
<ul>
<li>为了保证绑定和删除的时候是同一个函数，最好提前给这个函数起名</li>
<li>通过函数名，找到该函数</li>
</ul>
</div>
<h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h2>
<div class="custom-container tip"><p class="custom-container-title">BOM和DOM和ECMAScript的关系</p>
<ul>
<li>BOM：提供运行平台</li>
<li>DOM：书觉得体现，传达各种视觉信息</li>
<li>ECMAScript：规定了如何在BOM中操作DOM，操作DOM在BOM中显示除什么样的效果</li>
<li>（ECMAScript规定了，准备让DOM以什么样的形式，在BOM中显示）</li>
<li>ECMAScript和DOM都时运行在浏览器中，所以，除了需要遵守自己的规定以外，还要遵守浏览器（BOM）的规定</li>
<li>DOM的对象document，也属于window</li>
</ul>
</div>
</div></template>
