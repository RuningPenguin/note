<template><div><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javascript</h1>
<h2 id="js基础" tabindex="-1"><a class="header-anchor" href="#js基础" aria-hidden="true">#</a> js基础</h2>
<h3 id="js的组成" tabindex="-1"><a class="header-anchor" href="#js的组成" aria-hidden="true">#</a> js的组成</h3>
<ul>
<li>ECMAScript：语法</li>
<li>DOM：文档对象模型：提供了页面的操作：document</li>
<li>BOM：浏览器对象模型：提供了浏览器的操作：window</li>
</ul>
<h3 id="js写在哪" tabindex="-1"><a class="header-anchor" href="#js写在哪" aria-hidden="true">#</a> js写在哪</h3>
<ul>
<li>外部：
<ul>
<li>script的src属性引入</li>
<li>自动执行</li>
<li>先写的执行</li>
<li>一般放在head或body的最后</li>
</ul>
</li>
<li>内部：
<ul>
<li>script标签包裹</li>
<li>自动执行</li>
<li>先写的执行</li>
<li>一般放在head或body的最后</li>
</ul>
</li>
<li>内联：
<ul>
<li>作为html属性值存在（行为相关属性）</li>
<li>配合行为使用</li>
<li>不建议使用</li>
</ul>
</li>
</ul>
<h3 id="js写什么" tabindex="-1"><a class="header-anchor" href="#js写什么" aria-hidden="true">#</a> js写什么</h3>
<h4 id="js的打印语句" tabindex="-1"><a class="header-anchor" href="#js的打印语句" aria-hidden="true">#</a> js的打印语句</h4>
<ul>
<li>弹出信息框：<code v-pre>alert()</code>
<ul>
<li>BOM，阻塞程序执行，有隐士类型转换</li>
</ul>
</li>
<li>打印到页面：<code v-pre>document.write()</code>
<ul>
<li>DOM，影响页面布局，有隐士类型转换</li>
</ul>
</li>
<li>打印到控制台：<code v-pre>console.log()</code>     √
<ul>
<li>BOM（浏览器的V8引擎），不影响页面布局，不阻塞程序执行，没有隐士类型转换</li>
</ul>
</li>
</ul>
<h4 id="js中的数据类型" tabindex="-1"><a class="header-anchor" href="#js中的数据类型" aria-hidden="true">#</a> js中的数据类型</h4>
<ul>
<li>基本类型：字符string，数值number，布尔boolean，undefined，null</li>
<li>复杂类型：对象object，函数function</li>
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
<li>只能使用字母，下划线，$开头</li>
<li>不允许使用，关键字和保留字
<ul>
<li>关键字：官方已经赋予了功能的单词</li>
<li>保留字：官方暂时没有赋予功能，但是将来可能会赋予功能</li>
<li>技巧：加前缀
<ul>
<li>数据类型的缩写</li>
<li>功能的缩写</li>
<li>页面的缩写</li>
<li>公司名的缩写</li>
<li>自己名字的缩写</li>
</ul>
</li>
</ul>
</li>
<li>尽量语义化，词必达意</li>
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
<h4 id="进制的介绍" tabindex="-1"><a class="header-anchor" href="#进制的介绍" aria-hidden="true">#</a> 进制的介绍</h4>
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
<h4 id="js如何操作页面中的元素-输入框和按钮" tabindex="-1"><a class="header-anchor" href="#js如何操作页面中的元素-输入框和按钮" aria-hidden="true">#</a> js如何操作页面中的元素 - 输入框和按钮</h4>
<ul>
<li>页面上有许多元素</li>
<li>要操作哪个？选中！js的选择器</li>
<li>要操作什么？属性！</li>
<li>哪个属性？value属性</li>
<li>哪个属性？onclick属性</li>
</ul>
<h3 id="数据的类型转换" tabindex="-1"><a class="header-anchor" href="#数据的类型转换" aria-hidden="true">#</a> 数据的类型转换</h3>
<h4 id="为什么要对数据进行类型的转换" tabindex="-1"><a class="header-anchor" href="#为什么要对数据进行类型的转换" aria-hidden="true">#</a> 为什么要对数据进行类型的转换</h4>
<ul>
<li>因为直接得到的数据，可能不符合目前的程序要求，需要转成指定数据之后，才能使用</li>
<li>如：从页面获取的内容，都是字符</li>
</ul>
<h4 id="转换方式" tabindex="-1"><a class="header-anchor" href="#转换方式" aria-hidden="true">#</a> 转换方式</h4>
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
<h3 id="js的三大特殊数据" tabindex="-1"><a class="header-anchor" href="#js的三大特殊数据" aria-hidden="true">#</a> js的三大特殊数据</h3>
<ol>
<li>null</li>
<li>undefined</li>
<li>NaN</li>
</ol>
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
<li>
<p>实现</p>
<ul>
<li>分支语句
<ul>
<li>单分支：if<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    条件为<span class="token boolean">true</span>，执行代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>双分支：if-else<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    条件为<span class="token boolean">true</span>，执行代码<span class="token number">1</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    条件为<span class="token boolean">false</span>，执行代码<span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>多分支：switch<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>要判断的值或变量<span class="token punctuation">)</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>默认情况下，case语句判断成功后，就不再向下判断了，形成了穿透特性
<ul>
<li>阻止穿透：break</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>应用</p>
<ul>
<li>
<p>分支语句的嵌套</p>
</li>
<li>
<p>if和switch的区别</p>
<ul>
<li>if语句更擅长判断范围
<ul>
<li>有隐式类型转换</li>
</ul>
</li>
<li>switch语句更擅长判断具体的值
<ul>
<li>没有隐式类型转换</li>
</ul>
</li>
</ul>
</li>
<li>
<p>隐式类型转换</p>
<ul>
<li>if有</li>
<li>switch没有</li>
</ul>
</li>
</ul>
</li>
<li>
<p>补充</p>
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
</li>
<li>
<p>注意</p>
<ul>
<li>单词别写错</li>
<li>括号要配对</li>
<li>条件的书写：多个条件之间，使用逻辑运算符连接</li>
<li>if-else-if-else...的缩写语法</li>
<li>三目表达式的语法格式和应用场景</li>
<li>逻辑短路利用了隐示类型转换和逻辑运算符
<ul>
<li>注意语法和场景</li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="循环的语句" tabindex="-1"><a class="header-anchor" href="#循环的语句" aria-hidden="true">#</a> 循环的语句</h3>
<ul>
<li>while<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    初始化计数器
    <span class="token keyword">while</span><span class="token punctuation">(</span>执行条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
        要重复执行的代码
        改变计数器
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>do-while：无论如何都会至少执行一次<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    初始化计数器
    <span class="token keyword">do</span><span class="token punctuation">{</span>
        要重复执行的代码
        改变计数器
    <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>执行条件<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>for<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">for</span><span class="token punctuation">(</span>循环的三要素：初始化计数器<span class="token punctuation">;</span>执行条件<span class="token punctuation">;</span>计数器的改变<span class="token punctuation">)</span><span class="token punctuation">{</span>
        要重复执行的代码
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="循环的简单应用" tabindex="-1"><a class="header-anchor" href="#循环的简单应用" aria-hidden="true">#</a> 循环的简单应用</h4>
<ul>
<li>循环语句自身没有难度</li>
<li>要重复执行的内容</li>
<li>执行循环的条件</li>
<li>计数器改变的步长</li>
<li>单层循环</li>
</ul>
<h4 id="循环的控制关键字" tabindex="-1"><a class="header-anchor" href="#循环的控制关键字" aria-hidden="true">#</a> 循环的控制关键字</h4>
<ul>
<li>主动控制循环的执行</li>
<li>10包子：编号，0~9
<ul>
<li>吃5个，饱了：提前结束
<ul>
<li>break：结束当前循环，后面没执行完的，都不再执行了</li>
</ul>
</li>
<li>吃5个，有XXX，丢掉，后面的继续吃：跳过
<ul>
<li>continue：跳过本次循环，继续执行，后面的次数</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="死循环" tabindex="-1"><a class="header-anchor" href="#死循环" aria-hidden="true">#</a> 死循环</h4>
<ul>
<li>无法通过自身控制结束的循环</li>
<li>消耗大量的内存，浪费性能，影响程序执行</li>
<li>但是，可以利用死循环的思想，配合循环的控制关键字，解决问题</li>
</ul>
<h4 id="循环的嵌套" tabindex="-1"><a class="header-anchor" href="#循环的嵌套" aria-hidden="true">#</a> 循环的嵌套</h4>
<ol>
<li>
<p>嵌套</p>
<ul>
<li>两个套起来</li>
<li>多行多列的计算结构</li>
</ul>
</li>
<li>
<p>规律</p>
<ul>
<li>
<p>外层循环控制行</p>
</li>
<li>
<p>内层循环控制列</p>
</li>
</ul>
</li>
</ol>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<h3 id="函数的意义" tabindex="-1"><a class="header-anchor" href="#函数的意义" aria-hidden="true">#</a> 函数的意义</h3>
<pre><code>- 将组成某个功能的代码块封装起来，可以通过自身或行为执行
- 存储的是功能，代码段
- 函数自身有诸多便利性特点，为了方便使用功能
</code></pre>
<h3 id="函数的特点" tabindex="-1"><a class="header-anchor" href="#函数的特点" aria-hidden="true">#</a> 函数的特点</h3>
<pre><code>- 忽略细节
- 选择使用
- 重复使用
</code></pre>
<h3 id="函数的创建和执行" tabindex="-1"><a class="header-anchor" href="#函数的创建和执行" aria-hidden="true">#</a> 函数的创建和执行</h3>
<h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h4>
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
<h4 id="执行" tabindex="-1"><a class="header-anchor" href="#执行" aria-hidden="true">#</a> 执行</h4>
<ul>
<li>函数名();     立即执行，自动执行，不会等待
<ul>
<li>配合行为执行（事件触发）
<ul>
<li>事件源.事件类型 = 函数;</li>
<li>如：<code v-pre>btn.onclick = fn</code></li>
<li>如：<code v-pre>btn.onclick = function(){}</code></li>
<li>等待行为触发，必然是将来执行，异步</li>
</ul>
</li>
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
<li>箭头函数</li>
</ul>
<h3 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h3>
<ul>
<li>概念：函数的入口，负责数据的传递，影响函数内部功能的执行</li>
<li>函数定义时，接收参数：形参</li>
<li>函数执行时，发送参数：实参</li>
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
<li><strong>函数内部</strong>特有的对象变量，以数组的形式体现（伪数组）</li>
<li>用来保存当前函数执行时传入的所有实参</li>
<li>使用
<ul>
<li>数组：索引+长度
<ul>
<li>索引：从0开始</li>
<li>长度：arguments.length</li>
<li>中括号语法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="函数的应用" tabindex="-1"><a class="header-anchor" href="#函数的应用" aria-hidden="true">#</a> 函数的应用</h3>
<ul>
<li>封装思想
<ul>
<li>为什么要封装函数</li>
<li>为什么要穿参</li>
<li>为什么要处理参数
<ul>
<li>默认值</li>
<li>类型</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h3>
<ol>
<li>
<p>概念：函数的出口</p>
</li>
<li>
<p>函数内部的关键字：return</p>
<ul>
<li>返回函数内部的数据（将数据通过出口，暴露到函数外面）</li>
<li><code v-pre>return 数据</code></li>
</ul>
</li>
<li>
<p>return的功能</p>
<ul>
<li>返回值</li>
<li>结束函数
<ul>
<li>一个函数一次执行只能执行一个return</li>
<li>但是，一个函数中可以写多个return</li>
</ul>
</li>
<li>没有return的函数，的返回值是，undefined</li>
</ul>
</li>
<li>
<p>返回值的位置</p>
<ul>
<li>返回到哪了：函数的执行位置</li>
</ul>
</li>
<li>
<p>返回值可以返回所有数据</p>
<ul>
<li>当一个函数，返回了另一个函数时，在这个函数的嵌套中，就形成了闭包</li>
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
<li>局部作用域下的变量（函数），叫局部变量（函数）
<ul>
<li>函数的形参，是当前函数的局部变量</li>
</ul>
</li>
</ul>
</li>
<li>
<p>生命周期</p>
<ul>
<li>全局：跟随程序，一直存在与内存中，随时可以拿到
<ul>
<li>方便</li>
<li>占内存</li>
</ul>
</li>
<li>局部：跟随当前作用域，作用域开始的位置，被创建，作用域结束，被删除
<ul>
<li>使用不方便</li>
<li>省空间</li>
</ul>
</li>
<li>折中用法：
<ul>
<li>利用匿名函数生成独立作用域，在匿名函数中进行功能开发</li>
</ul>
</li>
</ul>
</li>
<li>
<p>变量的读写规则（拓展）</p>
<ul>
<li>写：
<ul>
<li>先在当前作用域查找，当前作用域有，直接写，如果当前作用域没有，向上级作用域查找，直到全局，找到了，修改全局，没找到，定义成全局，再修改。（非严格模式）</li>
</ul>
</li>
<li>读：
<ul>
<li>先在当前作用域查找，当前作用域有，直接使用，如果当前作用域没有，向上级作用域查找，直到全局，找到了，使用，没找到，报错。</li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="js的执行机制" tabindex="-1"><a class="header-anchor" href="#js的执行机制" aria-hidden="true">#</a> js的执行机制</h3>
<ol>
<li>
<p>js一门<strong>解释型</strong>的脚本语言</p>
<ul>
<li>js会先通读全文，找到特定内容，提前解释（预解析，预编译）
<ul>
<li>提前解释
<ul>
<li>变量和函数的声明</li>
</ul>
</li>
</ul>
</li>
<li>再执行解释之后的代码</li>
</ul>
</li>
<li>
<p>提前解释（预解析，预编译）</p>
<ul>
<li>变量(使用var声明的变量)
<ul>
<li>var声明变量的预解析（var的提升）
<ul>
<li>提前声明：作用域最开始的位置</li>
<li>原位赋值</li>
</ul>
</li>
</ul>
</li>
<li>函数
<ul>
<li>function的整体提升，提前声明，并定义</li>
</ul>
</li>
<li>当var遇到function
<ul>
<li>
<p>赋值式创建函数</p>
<ul>
<li>提升的是var的声明，function并没有提升</li>
</ul>
</li>
<li>
<p>当var的变量和function的函数名重名</p>
<ul>
<li>
<p>都提升</p>
</li>
<li>
<p>var提升的更高</p>
</li>
<li>
<p>所以function生效</p>
</li>
<li>
<p>本质：var会提升，在内存中声明了一个区域，function没有提升，直接使用这个区域</p>
</li>
</ul>
</li>
<li>
<p><strong>避免变量名的重复！！！</strong></p>
</li>
</ul>
</li>
</ul>
</li>
</ol>
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
</li>
<li>
<p>递归计算数列的第n位是多少：1,1,2,3,5,8,13,21,34,.....</p>
<ul>
<li>
<p>从第三位开始，每一位是前两位的和</p>
</li>
<li>
<p>假设，有一个函数fn，专门用来计算数列的第n位</p>
</li>
<li>
<p>fn(n) = fn(n-1) + fn(n-2)</p>
</li>
<li>
<p>fn(1) = 1 || fn(2) = 1</p>
<ul>
<li>递的终点，归的起点</li>
</ul>
</li>
<li>
<p>实现fn计算数列的第n位的功能</p>
</li>
</ul>
</li>
</ol>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>数据的组合</li>
<li>数据的集合，类似于对象，但是没有键，只有索引</li>
</ul>
<h3 id="数组或对象的应用场景" tabindex="-1"><a class="header-anchor" href="#数组或对象的应用场景" aria-hidden="true">#</a> 数组或对象的应用场景</h3>
<ul>
<li>单需要操作多个数据时，程序只支持一个</li>
</ul>
<h3 id="数组的创建" tabindex="-1"><a class="header-anchor" href="#数组的创建" aria-hidden="true">#</a> 数组的创建</h3>
<ul>
<li>字面量
<ul>
<li>var arr=[];</li>
</ul>
</li>
<li>构造函数
<ul>
<li>avr arr = new Array();</li>
</ul>
</li>
<li>当只有一个数字类型数据时，字面量就是一个数据，构造函数会解析成长度</li>
</ul>
<h3 id="数组的使用" tabindex="-1"><a class="header-anchor" href="#数组的使用" aria-hidden="true">#</a> 数组的使用</h3>
<ul>
<li>索引+长度</li>
<li>方法，功能，某个对象的功能，属于某个对象的函数
<ul>
<li>push		最后新增（可添加多个参数）返回值是新数组长度</li>
<li>unshift	开始新增（可添加多个参数）返回值是新数组长度</li>
<li>pop		最后删除（无参数）返回值是最后一次删除的数据</li>
<li>shift		开始删除（无参数）返回值是最后一次删除的数据</li>
<li>slice		截取（截取参数1~2的数据，返回新数组，包前不包后）</li>
<li>splice	删除并替换（参数1：删除的起始位置，参数2：要删除的个数，参数3：替换的数据）返回值是删除的数据</li>
<li>join		转字符（将字符变成字符串输出，参数时链接符，默认逗号）</li>
<li>concat	合并（要合并的数组）</li>
<li>reverse	翻转（无参数）</li>
<li>sort		排序（返回一个函数a-b从小到大，b-a从大到小）</li>
</ul>
</li>
</ul>
<h3 id="数组的分类" tabindex="-1"><a class="header-anchor" href="#数组的分类" aria-hidden="true">#</a> 数组的分类</h3>
<ul>
<li>数组中可以放任何数据，甚至可以放简单表达式
<ul>
<li>当一个数组中的数据，全是字符时，叫字符数组</li>
<li>当一个数组中的数据，全是数值时，叫数值数组</li>
<li>当一个数组中的数据，全是数组时，叫数组数组（二维数组，<strong>多维数组</strong>）
<ul>
<li>访问方式
<ul>
<li>逐层解析数组</li>
</ul>
</li>
</ul>
</li>
<li>当一个数组中的数据，全是对象时，叫对象数组（<strong>json数组</strong>）
<ul>
<li>访问方式
<ul>
<li>逐层解析数组和对象</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3>
<ul>
<li>json独立的通用数据，与任何编程语言无关，只是因为其格式参考了js的对象</li>
<li>所以，在js中有时也将对象成为json</li>
<li>所以，全是对象的数组，也可以称为json数组</li>
</ul>
<h3 id="基本数据和复杂数据" tabindex="-1"><a class="header-anchor" href="#基本数据和复杂数据" aria-hidden="true">#</a> 基本数据和复杂数据</h3>
<ul>
<li>基本数据：string、number、boolean、undefined、null
<ul>
<li>值传递，的数据</li>
</ul>
</li>
<li>复杂数据
<ul>
<li>引用传递，的数据</li>
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
<li>引用传递：引用就是地址，复制的是地址，不是值（复杂数据）
<ul>
<li>浅拷贝：只复制复杂数据的地址，不是值，修改新数据，影响老数据<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj<span class="token punctuation">;</span>
	<span class="token comment">// 将obj复制给了obj2，其实只是将obj的引用(地址)复制给了obj2，obj和obj2中保存的是同一份地址，指向的是同一个值，修改其中一个，影响另外一个</span>
	obj2<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">"张三"</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>深拷贝：复制值，修改新数据，不会影响老数据
<ul>
<li>
<p>先解析，在拷贝</p>
<ul>
<li>对象的解析拷贝（深拷贝）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">;</span>b<span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">;</span>c<span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//for-in 解析</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    obj2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    obj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">"666"</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>数组的解析拷贝（深拷贝）
<code v-pre>js         var arr = [3,4,5];         var arr2 = [];         // 循环解析         for(var i=0;i&lt;arr.length;i++){         arr2[i] = arr[i];         }         arr2[1] = &quot;hello&quot;;         console.log(arr)         console.log(arr2)     </code></p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<ul>
<li>万物皆对象
<ul>
<li>对象才是构成js世界的本质</li>
</ul>
</li>
<li>字符串也可以作为对象使用</li>
</ul>
<h3 id="创建字符" tabindex="-1"><a class="header-anchor" href="#创建字符" aria-hidden="true">#</a> 创建字符</h3>
<ul>
<li>字面量
<ul>
<li>var str = &quot;&quot;;</li>
</ul>
</li>
<li>构造函数
<ul>
<li>var str = new String();</li>
<li>只要是构建函数方式创造的，其结果必然是对象</li>
<li>new String()得到字符的对象
<ul>
<li>长得先对象，但是可以作为正常字符使用</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="字符串的方法" tabindex="-1"><a class="header-anchor" href="#字符串的方法" aria-hidden="true">#</a> 字符串的方法</h3>
<ul>
<li>（类似于数组的操作）</li>
<li>索引加长度（index+length）</li>
<li>方法（字符串的方法都不改变原数据）
<ul>
<li>indexOF	<strong>查询单个字符的索引</strong>
<ul>
<li>功能：查询字符串中单个字符的索引，如有重复，返回第一个</li>
<li>参数：2个 1，要查询的字符；2，开始查询的位置</li>
<li>返回值：该数据的索引，没查询到返回-1</li>
</ul>
</li>
<li>lastindexOf	<strong>反向查询单个字符的索引</strong>
<ul>
<li>功能：查询字符串中单个字符的索引，如有重复，返回第一个</li>
<li>参数：2个 1，要查询的字符；2，反向开始查询的位置</li>
<li>返回值：该数据的索引，没查询到返回-1</li>
</ul>
</li>
<li>charAt	<strong>根据索引查询数据</strong>
<ul>
<li>功能：根据索引查询字符串的数据</li>
<li>参数：字符串的索引</li>
<li>返回值：该索引对应的值，索引超出返回空字符串<code v-pre>&quot;&quot;</code></li>
</ul>
</li>
<li>slice		<strong>截取（包前不包后）</strong>
<ul>
<li>功能：截取指定的区域的字符</li>
<li>参数：2个 1，开始的区域；2，截至的区域（可以负数，表示倒着截取）参数1为负数时表示长度减去参数1，参数2比这个值大就行</li>
<li>返回值：返回截取的字符（包前不包后）</li>
</ul>
</li>
<li>substr	<strong>截取索引对应的值（截取多长写多长）</strong>
<ul>
<li>功能：截取指定区域的字符</li>
<li>参数：2个 1，开始的索引；，2，要截取的长度
<ul>
<li>当一个参数为负数时，只有一个参数，表示倒着截取参数的长度</li>
</ul>
</li>
<li>返回值：返回截取的字符</li>
</ul>
</li>
<li>substring		<strong>截取指定区域的数据（包前不包后）</strong>
<ul>
<li>功能：截取指定区域的字符串</li>
<li>参数：2个 1，开始索引；2，结束索引</li>
<li>返回值：截取的字符串</li>
<li>参数大的是结束位置</li>
</ul>
</li>
<li>replace	<strong>替换</strong>
<ul>
<li>功能：替换指定的字符，只替换一次</li>
<li>参数：2个 1，想要替换的字符；2，替换的字符</li>
<li>返回值：替换之后的字符串</li>
</ul>
</li>
<li>split		<strong>分割（转数组）</strong>
<ul>
<li>功能：分割字符串形成数组</li>
<li>参数：2个 1，以哪个字符作为分割点，并删除该字符；
- 2，（可忽略）当1参数在字符串中存在多个，2参数决定要显示几个
- 当参数为&quot;&quot;时，一个字符一个分割</li>
<li>返回值：返回分割后的数组</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="字符串的拼接" tabindex="-1"><a class="header-anchor" href="#字符串的拼接" aria-hidden="true">#</a> 字符串的拼接</h3>
<ul>
<li>引号要配对，单双引号的嵌套要交替</li>
<li>被单双引号包裹的字符不允许换行</li>
</ul>
<h3 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h3>
<ul>
<li>Unicode:万国码，所有字符都可以转成万国码</li>
<li>Unicode时以四位十六进制的形式表示的（前缀\u）
<ul>
<li>必须用\u作为前缀，此十六进制才是Unicode编码</li>
</ul>
</li>
<li>Unicode和字符的转换
<ul>
<li>字符转成十进制，此十进制时由Unicode的十六进制转换得来的
<ul>
<li>String.fromCharCode(十进制或十六进制)
<ul>
<li>参数可以是十进制</li>
<li>参数可以是十六进制（&quot;0x&quot;开头）</li>
<li>转换结果时字符</li>
</ul>
</li>
<li>str.charCodeAt(索引)
<ul>
<li>转换结果是十进制，这个十进制转成十六进制后，加上\u就是Unicode编码</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="进制的转换" tabindex="-1"><a class="header-anchor" href="#进制的转换" aria-hidden="true">#</a> 进制的转换</h2>
<ul>
<li>十进制转其他-（数值转字符）
<ul>
<li>num.toString(2||8||16)</li>
<li>要转成几进制就写几</li>
</ul>
</li>
<li>其他转十进制-（字符转数值）
<ul>
<li>parseInt(num,2||8||16)</li>
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
<h1 id="es5的新增" tabindex="-1"><a class="header-anchor" href="#es5的新增" aria-hidden="true">#</a> ES5的新增</h1>
<h2 id="es5" tabindex="-1"><a class="header-anchor" href="#es5" aria-hidden="true">#</a> ES5：</h2>
<ul>
<li>ECMAScript 5</li>
</ul>
<h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2>
<ul>
<li>在ES5中，新增了一种编写代码的模式：严格模式</li>
<li>为了消除代码中的不合理，不严谨和隐患之处</li>
<li>体现了更好的发展方向</li>
<li>提升了代码的执行率</li>
</ul>
<h2 id="如何开启" tabindex="-1"><a class="header-anchor" href="#如何开启" aria-hidden="true">#</a> 如何开启</h2>
<ul>
<li>在作用域的第一行放置一行字符串：&quot;use strict&quot;</li>
<li>配合匿名函数，开启<strong>伪全局</strong>严格模式</li>
</ul>
<h2 id="开启严格模式的变更" tabindex="-1"><a class="header-anchor" href="#开启严格模式的变更" aria-hidden="true">#</a> 开启严格模式的变更</h2>
<ul>
<li>变量必须先声明后使用</li>
<li>函数的形参不允许重复</li>
<li>函数的arguments保存实参，不会受到形参的改变而影响</li>
<li>函数的arguments不允许使用callee（会严格模式下arguments.callee是函数自身）</li>
<li>没有明确隶属对的函数的this，不指向window，指向undefined</li>
<li>0开头的8进制被禁止了</li>
<li>with语句被禁止使用</li>
<li>...</li>
</ul>
<h2 id="数组的排序" tabindex="-1"><a class="header-anchor" href="#数组的排序" aria-hidden="true">#</a> 数组的排序</h2>
<ul>
<li>sort：简单排序（数值，字符，不能排对象）</li>
<li>自定义功能：自定义实现</li>
<li>排序算法
<ul>
<li>比较规则：比较大小</li>
<li>提升程序的执行性能，让程序更稳定</li>
</ul>
</li>
<li>冒泡排序：
<ul>
<li>原理：拿到数组的内一个数据，两两比较，大的放前面（后面）</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 排序之前</span>
      <span class="token comment">// 比较次数的结构：多行多列</span>
      <span class="token comment">// 0-1,1-2,2-3,3-4      length-1 - 0行 次</span>
      <span class="token comment">// 0-1,1-2,2-3          length-1 - 1行 次</span>
      <span class="token comment">// 0-1,1-2              length-1 - 2行 次</span>
      <span class="token comment">// 0-1                  length-1 - 3行 次</span>
  <span class="token comment">// 行：arr.length-1 次</span>

      <span class="token comment">// 控制一共经过几轮比较，每轮比较，会得到一个最大值，放在了最后</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">// 确定每轮比较时，要比较哪些数据，因为上一轮会确定一个最大值，放在了最后，所以，每新的一轮比较，都可以比上一轮少比一次</span>
          <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token comment">// 比较</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  <span class="token comment">// 交换</span>
                  <span class="token keyword">var</span> ls <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                  arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                  arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> ls<span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 排序之后</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li>
<li>选择排序：
<ul>
<li>原理：拿到数组的每一个数，从左向右依次使用每一个数据，和前面所有的数据比较得到最小的，交换</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token comment">// 冒泡，每次比较都有可能交换一次，交互意味着在操作数组</span>
      <span class="token comment">// 0-1,1-2,2-3,3-4</span>
      
  <span class="token comment">// 选择，每次比较，绝对不交换，只是在记录最小值，一轮结束后，再做交换，将最小值和第一位交换</span>

      <span class="token comment">// 比较次数的结构：多行多列</span>
      <span class="token comment">// 0-1,0-2,0-3,0-4      0行~length-1</span>
      <span class="token comment">// 1-2,1-3,1-4          1行~length-1</span>
      <span class="token comment">// 2-3,2-4              2行~length-1</span>
      <span class="token comment">// 3-4                  3行~length-1</span>
  <span class="token comment">// 行：length-1   4 次</span>

      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">// 每轮开始之前，将当前位数据保存到临时变量，同时存储索引</span>
          <span class="token comment">// 假设这个临时变量中保存的是最小值</span>
          <span class="token keyword">var</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
          <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token comment">// 验证,临时变量中保存的是否是最小值</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>min <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  <span class="token comment">// 修改临时变量,让他保存真正的最小值</span>
                  min <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                  <span class="token comment">// 同时记录最小值的索引</span>
                  minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 一轮结束后,交换数组中的数据</span>
          <span class="token comment">// 一定要先将当前位数据,放在最小值的位置</span>
          arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token comment">// 再将最小值,放在当前位</span>
          arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> min<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h2 id="es5新增数组的方法" tabindex="-1"><a class="header-anchor" href="#es5新增数组的方法" aria-hidden="true">#</a> ES5新增数组的方法</h2>
<ul>
<li>方法：属于某个对象的函数</li>
<li>数组的方法
<ul>
<li>
<p>indexOf	<strong>查询数组中数据所在的位置</strong></p>
<ul>
<li>功能：查询数据所对应的索引</li>
<li>参数：1，要查询的数据；2，从哪个索引开始查询（可省略）</li>
<li>返回值:数据的索引
<ul>
<li>没有查询到数据：返回-1</li>
<li>重复的数据：返回第一次出现的索引</li>
</ul>
</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>
<p>forEach	<strong>遍历数组，得到数组的数据，索引，数组自身</strong></p>
<ul>
<li>功能：遍历数组</li>
<li>参数：函数，函数有三个参数 1，数据；2，索引；3，数组自身；</li>
<li>返回值：undefined（没有返回值）</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>
<p>map	<strong>批量操作数组数据（都+10）</strong></p>
<ul>
<li>功能：1，遍历数组（同forEach）2，返回一个新数组，可实现数组的深拷贝</li>
<li>参数：函数，函数有三个参数 1，数据；2，索引；3，数组自身
<ul>
<li>函数可有return，返回自己需要的数据</li>
</ul>
</li>
<li>返回值：返回一个新的数组，回调函数每执行一次就返回一个值</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>
<p>filter	<strong>判断数组中是否有符合条件的数据（&gt;5）</strong></p>
<ul>
<li>功能：1，遍历数组（同forEach）2，过滤数组，返回一个新数组</li>
<li>参数：函数，函数有三个参数 1，数据；2，索引；3，数组自身
<ul>
<li>函数可有return，返回结果为true的数据</li>
</ul>
</li>
<li>返回值：返回一个新数组，回调函数每执行一次，返回一个结果为true的数据</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>
<p>some	<strong>判断数组中是否有某个数据（是否有10）</strong></p>
<ul>
<li>功能：1，遍历数组（同forEach）2，根据条件查询，返回布尔值，一个是true最终结果就是true</li>
<li>参数：函数，函数有三个参数 1，数据；2，索引；3，数组自身
<ul>
<li>函数有return，返回值为布尔值</li>
</ul>
</li>
<li>返回值：布尔值，作为参数的函数的返回值只要有一次是true最终结果就是true</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>
<p>every	<strong>怕不断数组的数据是否为同一类型</strong></p>
<ul>
<li>功能：1，遍历数组（同forEach）2，根据条件查询，得到布尔值，全部为true最终结果才是ture</li>
<li>参数：函数，函数有三个参数 1，数据；2，索引；3，数组自身
<ul>
<li>函数有return，返回值为布尔值</li>
</ul>
</li>
<li>返回值：返回布尔值，作为参数的函数的返回值全部是true最终结果才是true</li>
<li>是否改变原数据：否</li>
</ul>
</li>
<li>
<p>reduce	<strong>快速求和</strong></p>
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
<li>
<p>reduceRight</p>
<ul>
<li>与reduce相同，从右开始</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="函数的方法" tabindex="-1"><a class="header-anchor" href="#函数的方法" aria-hidden="true">#</a> 函数的方法</h2>
<ul>
<li>函数的函数，将函数作为对象使用他身上的方法</li>
<li>函数的方法
<ul>
<li>bind	<strong>改变this指向，返回函数</strong>
<ul>
<li>功能：改变this的指向，返回了改变之后的函数</li>
<li>参数：不限
<ul>
<li>参数1：要改变的this指向</li>
<li>参数2+：会传入原函数，作为原函数的参数</li>
</ul>
</li>
<li>返回值：修改this或参数后的新函数</li>
</ul>
</li>
<li>call	<strong>改变this指向，自动执行，返回原函数返回值</strong>
<ul>
<li>功能：改变this的指向后，自动执行改变后的函数</li>
<li>参数：不限
<ul>
<li>参数1：要改变的this的指向</li>
<li>参数2+：传入原函数作为原函数的参数</li>
</ul>
</li>
<li>返回值：原函数的返回值</li>
</ul>
</li>
<li>apply	<strong>改变this指向，自动执行，返回原函数返回值</strong>
<ul>
<li>功能：改变this指向之后，置动执行改变之后的函数</li>
<li>参数：2个
<ul>
<li>参数1：要改变的this的指向</li>
<li>参数2：数组，会传入原函数覆盖原函数的arguments</li>
</ul>
</li>
<li>返回值：原函数的返回值</li>
</ul>
</li>
</ul>
</li>
<li>函数方法的区别：
<ul>
<li>bind会修改之后的新函数（不会自动执行修改后的新函数），call和apply反之</li>
<li>bind和call可以接受多个参数，从第二个开始，都会传入修改之后的新函数作为参数。</li>
<li>apply只能接受两个参数，第二个参数是数组，会传入修改之后的新函数，自动解析后，作为arguments的内容</li>
</ul>
</li>
</ul>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<ul>
<li>当前函数的<strong>执行</strong>对象
<ul>
<li>关键字，表示一个指向，只有在函数执行时才有，必须指向对象</li>
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
<h2 id="json-1" tabindex="-1"><a class="header-anchor" href="#json-1" aria-hidden="true">#</a> JSON</h2>
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
<li>JSON.stringify(obj)</li>
<li>NaN转null</li>
<li>不识别undefined，function(){}</li>
</ul>
</li>
<li>json转对象：要转换的数据必须符合json的要求
<ul>
<li>JSON.parse(str)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h1>
<h2 id="对象的概念" tabindex="-1"><a class="header-anchor" href="#对象的概念" aria-hidden="true">#</a> 对象的概念</h2>
<ul>
<li>是复杂数据类型的一种，是一种数据集合</li>
<li>单个对象中只存放某类，有某种关系的数据</li>
<li>对象在显示生活中，一般用来描述事物</li>
</ul>
<h2 id="对象的语法" tabindex="-1"><a class="header-anchor" href="#对象的语法" aria-hidden="true">#</a> 对象的语法</h2>
<ul>
<li>属性名：属性值</li>
<li>键值对（key：value）</li>
<li>对象的标志是花括号{}</li>
</ul>
<h2 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h2>
<ul>
<li>字面量
<ul>
<li>var obj = {name：&quot;anmin&quot;}</li>
</ul>
</li>
<li>构造函数：批量
<ul>
<li>var obj = new Object（）；</li>
</ul>
</li>
</ul>
<h2 id="对象的使用" tabindex="-1"><a class="header-anchor" href="#对象的使用" aria-hidden="true">#</a> 对象的使用</h2>
<ul>
<li>点语法<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"admin"</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>中括号语法<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"0"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"admin"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"name"</span><span class="token punctuation">;</span>
    console<span class="token punctuation">,</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="对象的组成和意义" tabindex="-1"><a class="header-anchor" href="#对象的组成和意义" aria-hidden="true">#</a> 对象的组成和意义</h2>
<ul>
<li>组成：键值对</li>
<li>意义：存储数据编程</li>
</ul>
<h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h2>
<ul>
<li>任何两个对象都不相等</li>
<li>如果相等了，就是一个对象</li>
</ul>
<h2 id="对象的分类" tabindex="-1"><a class="header-anchor" href="#对象的分类" aria-hidden="true">#</a> 对象的分类</h2>
<ul>
<li>本地对象（构造函数）
<ul>
<li>创建字符的对象：String</li>
<li>创建数值的对象：Number</li>
<li>...</li>
<li>创建日期的对象：Data</li>
<li>创建正则的对象：RegExp</li>
<li>...</li>
<li>被new 执行之后，才能得到对应的对象</li>
<li>内置构造函数</li>
</ul>
</li>
<li>内置对象
<ul>
<li>可以直接被使用的对象，不需要创建和操作</li>
<li>数学对象：Math</li>
</ul>
</li>
<li>宿主对象
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
<h2 id="this-1" tabindex="-1"><a class="header-anchor" href="#this-1" aria-hidden="true">#</a> this</h2>
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
<li>误解1：this是当前函数，×				   函数的指向</li>
<li>误解2：this在哪被定义，就是谁，×			被谁执行接指向谁</li>
<li>误解3：this是变量，×						关键字</li>
</ul>
<h2 id="对象的操作" tabindex="-1"><a class="header-anchor" href="#对象的操作" aria-hidden="true">#</a> 对象的操作</h2>
<ul>
<li>删除对象的属性
<ul>
<li>关键字：delete 对象.属性名</li>
<li>最好清空 对象.属性名 = null</li>
</ul>
</li>
</ul>
<h2 id="内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象" aria-hidden="true">#</a> 内置对象</h2>
<ul>
<li>Math 是数学对象，提供了数学操作
<ul>
<li>
<p>方法</p>
<ul>
<li>Math.round(数字)               四舍五入</li>
<li>Math.random()			   	 随机数</li>
<li>Math.abs(数字)			  	 绝对值</li>
<li>Math.ceil(数字)			   	 向上取整（取大的）</li>
<li>Math.floor(数字)			       线下取整（取小的）</li>
<li>Math.min(数字1，...)		   最小值（不能放数组NaN）</li>
<li>Math.max(数字1，...)		   最大值（不能放数组NaN）</li>
<li>Math.sqrt(数字)			    	根号下</li>
<li>Math.pow(数字，几次方)     几次幂</li>
</ul>
</li>
<li>
<p>属性</p>
<ul>
<li>Math.PI				                 圆周率</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="本地对象" tabindex="-1"><a class="header-anchor" href="#本地对象" aria-hidden="true">#</a> 本地对象</h2>
<ul>
<li>Date（需要new之后才能使用）</li>
<li>创建日期对象
<ul>
<li>new Date()</li>
</ul>
</li>
<li>获取日期
<ul>
<li>get系列方法
<ul>
<li>getFullYear()			年</li>
<li>getMonth()			月0~11</li>
<li>getDate()				日</li>
<li>getDay()				星期0~6</li>
<li>getHours()			时</li>
<li>getminutes()			分</li>
<li>getSeconds()			秒</li>
<li>getMilliseconds()		毫秒（100毫秒==1秒）</li>
<li>getTime()				获取时间戳（1970年1月1日0：0：0到此时的毫秒）</li>
</ul>
</li>
</ul>
</li>
<li>获取指定日期
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
</li>
</ul>
<h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1>
<h2 id="bom的介绍" tabindex="-1"><a class="header-anchor" href="#bom的介绍" aria-hidden="true">#</a> BOM的介绍</h2>
<ul>
<li>浏览器的对象模型：window</li>
<li>提供了窗口与窗口之间的通信</li>
<li>用户与浏览器的交互</li>
<li>浏览器自身的信息</li>
</ul>
<h2 id="bom和dom和ecmascript的关系" tabindex="-1"><a class="header-anchor" href="#bom和dom和ecmascript的关系" aria-hidden="true">#</a> BOM和DOM和ECMAScript的关系</h2>
<ul>
<li>BOM：提供运行平台</li>
<li>DOM：书觉得体现，传达各种视觉信息</li>
<li>ECMAScript：规定了如何在BOM中操作DOM，操作DOM在BOM中显示除什么样的效果</li>
<li>（ECMAScript规定了，准备让DOM以什么样的形式，在BOM中显示）</li>
<li>ECMAScript和DOM都时运行在浏览器中，所以，除了需要遵守自己的规定以外，还要遵守浏览器（BOM）的规定</li>
<li>DOM的对象document，也属于window</li>
</ul>
<h2 id="bom-window" tabindex="-1"><a class="header-anchor" href="#bom-window" aria-hidden="true">#</a> BOM-window</h2>
<ul>
<li>window是js的顶层对象，涵盖了介绍所有的信息</li>
<li>window有自己的方法（内置的全局函数）</li>
<li>window有自己的事件</li>
<li>window有自己的子对象（内置的全局对象）</li>
<li>window有自己的属性（内置的全局变量）</li>
</ul>
<h2 id="window的方法" tabindex="-1"><a class="header-anchor" href="#window的方法" aria-hidden="true">#</a> window的方法</h2>
<ul>
<li>全局函数
<ul>
<li>parseInt()</li>
<li>isNaN()</li>
<li>...</li>
<li>open(url)打开新窗口
<ul>
<li>直接使用会被当做广告拦截</li>
</ul>
</li>
<li>close()关闭当前窗口</li>
<li>弹出框三兄弟
<ul>
<li>alert()		弹出信息框；无返回值</li>
<li>prompt()		弹出输入框；返回输入的值，没有输入返回空字符</li>
<li>confirm()		弹出选择框；点击确定返回true，取消返回false</li>
</ul>
</li>
<li>定时器
<ul>
<li>计时器
<ul>
<li>开（重复执行）
<ul>
<li>setlInterval(参数1,参数2)</li>
<li>参数1：函数</li>
<li>参数2：毫秒数</li>
</ul>
</li>
<li>关（清除计数器）
<ul>
<li>clearInterval(参数)
<ul>
<li>参数：要清除的计时器的唯一标志（返回值变量）</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>延时器
<ul>
<li>开（延迟执行）
<ul>
<li>setTimeout(参数1,参数2)
<ul>
<li>参数1：函数</li>
<li>参数2：毫秒数</li>
</ul>
</li>
</ul>
</li>
<li>关（清除延时器）
<ul>
<li>clearTimeout(参数)
<ul>
<li>参数：要清除延时器的唯一标志（返回值变量）</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="window的事件" tabindex="-1"><a class="header-anchor" href="#window的事件" aria-hidden="true">#</a> window的事件</h2>
<ul>
<li>load
<ul>
<li><strong>结构</strong>和<strong>资源</strong>都加载结束</li>
</ul>
</li>
<li>resize
<ul>
<li>可视区域的尺寸
<ul>
<li>document.documentElement.clienWidth//可视区域的宽度</li>
<li>document.documentElement.clienHight//可视区域的高度</li>
</ul>
</li>
</ul>
</li>
<li>scroll
<ul>
<li>滚走的距离
<ul>
<li>document.documentElement.scrollTop//滚动条距离右边的距离</li>
<li>document.documentElement.scrollLeft//滚动条距离左边的距离</li>
<li>（高频事件可能不会被浏览器快速捕捉，正常现象）</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="window的子对象" tabindex="-1"><a class="header-anchor" href="#window的子对象" aria-hidden="true">#</a> window的子对象</h2>
<ul>
<li>location：浏览器的地址栏，url
<ul>
<li>herf：浏览器的完整地址
<ul>
<li>可获取，可设置。设置后页面会跳转</li>
</ul>
</li>
<li>search：地址栏?后的部分，表示数据查询（要向后台发送的数据）
<ul>
<li>可获取，可设置。设置后页面会跳转</li>
</ul>
</li>
<li>hash：地址蓝#后的部分，表示锚点链接（哈希值）
<ul>
<li>可获取，可设置。设置后页面会跳转</li>
</ul>
</li>
<li>reload()：重新加载，刷新当前页面</li>
<li>assign(url)：跳转到指定地址，url为字符类型数据，空字符，刷新</li>
</ul>
</li>
<li>history：历史记录，浏览器的前进后退键
<ul>
<li>length：历史记录的个数</li>
<li>forward()：向前一个历史记录</li>
<li>back()；向后一个历史记录</li>
<li>go(n)：正：向前走；负：先后退；0：刷新</li>
</ul>
</li>
<li>navigator：浏览器信息
<ul>
<li>userAgent：浏览器信息（名，内核，版本，运行系统）</li>
</ul>
</li>
<li>screen：视口，屏幕尺寸</li>
<li>frames：框架，对应iframes的标签操作</li>
<li>document：文档对象，网页</li>
</ul>
<h3 id="页面刷新的方法" tabindex="-1"><a class="header-anchor" href="#页面刷新的方法" aria-hidden="true">#</a> 页面刷新的方法</h3>
<ul>
<li>location.reload()</li>
<li>location.assign(&quot;&quot;)</li>
<li>history.go(0)</li>
<li>location.href = lication.href</li>
<li>location.search = location.search</li>
<li>location.hash = location.hash</li>
</ul>
<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
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
<h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2>
<ul>
<li>元素节点选择器
<ul>
<li>直接选择
<ul>
<li>id（id名）
<ul>
<li>document.getElementById(&quot;id名&quot;);</li>
<li>单个对象，失明特性（多个id只选择第一个）换hi对象</li>
</ul>
</li>
<li>class（class名）
<ul>
<li>document.getElementsByClassName(&quot;class名&quot;);</li>
<li>多个对象，返回数组，一个元素返回也是数组</li>
</ul>
</li>
<li>tagName（标签名）
<ul>
<li>document.getElementsByTagNamr(&quot;标签名&quot;);</li>
<li>多个对象，返回数组，</li>
</ul>
</li>
<li>name（name属性，表单类）
<ul>
<li>document.getElementsByName(&quot;name属性值&quot;)；</li>
<li>多个对象，返回数组</li>
</ul>
</li>
<li>query（css写法）单个
<ul>
<li>document.querySelector(&quot;css选择器&quot;);</li>
<li>单个对象，支持css的所有写法，返回对象</li>
</ul>
</li>
<li>queryAll（css写法）多个
<ul>
<li>document.querySelectorAll(&quot;css选择器&quot;);</li>
<li>多个对象，支持css所有写法，返回数组</li>
</ul>
</li>
</ul>
</li>
<li>关系选择
<ul>
<li>父选子元素
<ul>
<li>父选子元素节点 		ele.children</li>
<li>子选父元素节点 		ele.parentNode</li>
<li>兄元素节点			 ele.previousElementSibling</li>
<li>弟元素节点			 ele.nextElementSibling</li>
<li>第一个子元素节点	    ele.firstElementChild</li>
<li>最后一个子元素节点	   ele.lastElementChild</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>其他节点选择器
<ul>
<li>关系选择（没有子选父）
<ul>
<li>父选子节点			ele.childNodes</li>
<li>兄节点			 ele.previousSibling</li>
<li>弟节点			 ele.nextSibling</li>
<li>第一个子节点	   ele.firstChild</li>
<li>最后一个子节点	  ele.lastChild</li>
</ul>
</li>
<li>属性选择
<ul>
<li>ele.attributes（数组）</li>
</ul>
</li>
<li>伪数组
<ul>
<li>可以有索引，可以有长度</li>
<li>不能使用数组的方法（push...）</li>
</ul>
</li>
</ul>
</li>
<li>选中之后的内容
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
<h2 id="节点的过滤" tabindex="-1"><a class="header-anchor" href="#节点的过滤" aria-hidden="true">#</a> 节点的过滤</h2>
<ul>
<li>节点的信息属性
<ul>
<li>节点.nodeType		类型</li>
<li>节点.nodeName		名字</li>
<li>节点.nodeValue		内容
|节点|类型nodeType|名字nodeName|内容nodeValue|
|-|-|-|-|
|元素|1|标签名（大写）|null|
|文本|3|#text|文本内容|
|注释|8|#commen|注释内容|
|属性|2|属性名|属性值|
|跟|9|#document|null|</li>
</ul>
</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>
<ul>
<li>行内样式<strong>用来设置</strong>
<ul>
<li>获取：元素.style.css属性
<ul>
<li>只可以获取行内，鲁能获取非行内</li>
</ul>
</li>
<li>设置：元素.style.css属性 = &quot;值&quot;
<ul>
<li>元素.style.cssText 可以重新设置所有样式</li>
</ul>
</li>
<li>没有兼容，所有浏览器都支持</li>
<li>计算设置样式，必须找行内操作</li>
</ul>
</li>
<li>非行内样式<strong>用来获取</strong>
<ul>
<li>不可以设置</li>
<li>获取：getComputedStyle(元素，null).css属性名
<ul>
<li>
<p>既可以获取非行内样式，也可以获取行内样式</p>
</li>
<li>
<p>有兼容性（IE8几以下）</p>
<ul>
<li>IE专属属性：元素.currentStyle.css属性名</li>
</ul>
</li>
<li>
<p>最终兼容处理</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>attr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>currentStyle<span class="token punctuation">)</span><span class="token punctuation">{</span>
  		<span class="token keyword">return</span> ele<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  		<span class="token keyword">return</span> ele<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="dom元素属性" tabindex="-1"><a class="header-anchor" href="#dom元素属性" aria-hidden="true">#</a> DOM元素属性</h2>
<ul>
<li>html属性：可以写在html标签内的属性
<ul>
<li>内置
<ul>
<li>class(className),id,title,alt...</li>
<li>操作：
<ul>
<li>对象的操作方式</li>
<li>系列方法
<ul>
<li>查</li>
<li>getAttribute()		一个参数，要获取的属性名</li>
<li>增、改</li>
<li>setAttribute()		两个参数，要设置的属性名和属性值</li>
<li>删</li>
<li>removeAttribute()		一个参数，要删除的属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>自定义
<ul>
<li>只要官方没有提供，强行写在html标签内的，都是自定义</li>
<li>操作</li>
<li>系列方法
<ul>
<li>查（返回查询的数据）</li>
<li>getAttribute()		一个参数，要获取的属性名</li>
<li>增、改（返回undefined）</li>
<li>setAttribute()		两个参数，要设置的属性名和属性值</li>
<li>删（返回undefined）</li>
<li>removeAttribute()		一个参数，要删除的属性</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>js属性：没有写在HTML的标签内
<ul>
<li>内置
<ul>
<li>innerHTML(获取标签的内容，包括子元素，字符)</li>
<li>innerText(只获取文本内容，字符)</li>
<li>outerHTML(获取包括自己的标签内容，包括自己，子元素，字符)</li>
<li>tagName...</li>
<li>操作
<ul>
<li>对象的操作方式</li>
</ul>
</li>
</ul>
</li>
<li>自定义
<ul>
<li>只要官方没提供，强行写，都是自定义</li>
<li>操作：
<ul>
<li>对象的操作方式
<strong>本质上就是将元素作为对象使用</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="元素的尺寸类属性" tabindex="-1"><a class="header-anchor" href="#元素的尺寸类属性" aria-hidden="true">#</a> 元素的尺寸类属性</h2>
<ul>
<li>offsetWidth/Height(内容+内边距+边框)
<ul>
<li>cont + padding + border</li>
</ul>
</li>
<li>clientWidth/Height(内容+内边距)
<ul>
<li>cont + padding</li>
</ul>
</li>
<li>scrollWidth/Height(内容+内边距+溢出内容)
<ul>
<li>cont + padding + 溢出内容</li>
</ul>
</li>
<li>offsetLeft/Top(相对于包含快的位置)
<ul>
<li>相对于包含快的位置</li>
</ul>
</li>
<li>scrollLeft/Top(只有这个可以设置)
<ul>
<li>滚走的距离（可以设置）</li>
</ul>
</li>
<li>包含块
<ul>
<li>距离当前元素最近的拥有定位的父元素，如果没有，就是根元素</li>
<li>获取某个元素的根元素：元素.offsetParent</li>
</ul>
</li>
</ul>
<h2 id="元素-标签-的操作" tabindex="-1"><a class="header-anchor" href="#元素-标签-的操作" aria-hidden="true">#</a> 元素（标签）的操作</h2>
<ul>
<li>增：
<ul>
<li>创建标签
<ul>
<li>createElement(&quot;标签名&quot;)</li>
</ul>
</li>
<li>插入标签
<ul>
<li>appendChild(创建的标签)</li>
</ul>
</li>
<li><strong>每创建一个元素只可以插入一次</strong></li>
</ul>
</li>
<li>删：
<ul>
<li>元素名.remove()</li>
<li>父元素.removeChild(子元素)</li>
</ul>
</li>
<li>改：
<ul>
<li>先使用innerHTML获取到不包括自己的内部所有内容</li>
<li>替换包裹的标签后放入变量中</li>
<li>使用outerHTML把原来的所有内容替换成新内容</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">var</span> onav <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"nav"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"&lt;span>"</span><span class="token operator">+</span> onav<span class="token punctuation">.</span>innerHTML <span class="token operator">+</span><span class="token string">"&lt;/span>"</span><span class="token punctuation">;</span>
	onav<span class="token punctuation">.</span>outerHTML <span class="token operator">=</span> str<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>查：选择器</li>
</ul>
<h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h1>
<h2 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h2>
<ul>
<li>事件，行为，用户和浏览器或页面交互的过程中发生的行为</li>
<li>根据用户的不同行为，执行不同的程序，响应事件</li>
</ul>
<h2 id="组成" tabindex="-1"><a class="header-anchor" href="#组成" aria-hidden="true">#</a> 组成</h2>
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
<h2 id="事件类型的分类" tabindex="-1"><a class="header-anchor" href="#事件类型的分类" aria-hidden="true">#</a> 事件类型的分类</h2>
<ul>
<li>on是一种绑定事件的方式，并不属于事件分类的名字</li>
</ul>
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
<li>
<p><code v-pre>事件源.on事件名 = 函数</code></p>
<ul>
<li><code v-pre>btn.onclick = function(){}</code></li>
</ul>
</li>
<li>
<p>注意：</p>
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
<li>...</li>
</ol>
</li>
</ul>
<h2 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h2>
<ul>
<li>自身是一个对象类型，事件按对象内，保存了当前这次事件发生过程中的相关信息</li>
<li>事件（上级安排任务，刺探敌情）</li>
<li>上级：计算机（浏览器）</li>
<li>如何完成任务：塑件类型</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	ele<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eve</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">var</span> e <span class="token operator">=</span> eve <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="事件对象的属性" tabindex="-1"><a class="header-anchor" href="#事件对象的属性" aria-hidden="true">#</a> 事件对象的属性</h3>
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
<li>
<p>keyCode</p>
<ul>
<li>对应的按键</li>
<li>有兼容
<ul>
<li>keyCode（IE）</li>
<li>which（其他）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">var</span> k <span class="token operator">=</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">||</span> e<span class="token punctuation">.</span>which
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">stopDefault</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span><span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			e<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
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
<li>下一知识点</li>
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
<li>触发事件的元素，通过事件对象身上的属性：e.target / e.srcElement获取</li>
</ul>
</li>
<li>
<p>事件源和事件目标的区分</p>
<ul>
<li>一般情况下，事件源就是事件目标</li>
<li>当发生事件冒泡时，事件源与时间目标就不是同一个元素</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h3>
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
<li>eve.stopPropagation();其他浏览器</li>
<li>eve.cancelBubble = true;IE浏览器</li>
<li>兼容写法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">stopBubble</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span><span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			e<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    e<span class="token punctuation">.</span>stopPropagation <span class="token operator">?</span> e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> e<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2>
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
<li>
<p>DOM2级事件绑定</p>
</li>
<li>
<p>可以添加多个监听事件</p>
</li>
<li>
<p>有兼容</p>
</li>
<li>
<p>正常浏览器</p>
<ul>
<li>绑定事件监听
<ul>
<li>元素.addEventListener(&quot;事件类型&quot;，事件处理函数，布尔值)</li>
<li><code v-pre>btn.addEventListener(&quot;click&quot;,function(){},false)</code>
<ul>
<li>false:事件冒泡，默认值
<ul>
<li>true：事件捕获</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>解绑事件监听
<ul>
<li>元素.removeEventListener(&quot;使劲按类型&quot;，使劲按处理函数，布尔值)</li>
<li><code v-pre>btn.removerEventListener(&quot;click&quot;,function(){},flase)</code></li>
<li><strong>清除监听是采用给函数命名的方式创建函数</strong></li>
</ul>
</li>
</ul>
</li>
<li>
<p>IE浏览器</p>
<ul>
<li>IE浏览器只有冒泡，没有捕获</li>
<li>当一个元素绑定多个相同事件后，先执行后绑定的</li>
<li>绑定监听事件
- 元素.attachEvent(&quot;on&quot; + 事件类型，事件处理函数)
- <code v-pre>btn.attachEvent(&quot;onclick&quot;,function(){})</code>
<ul>
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
<li>
<p>监听式绑定事件的封装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>type<span class="token punctuation">,</span>fun</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span><span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>fun<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">"on"</span><span class="token operator">+</span>type<span class="token punctuation">,</span>fun<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>监听式解绑事件的封装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">removerEvent</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>type<span class="token punctuation">,</span>fun</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">{</span>
			ele<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>fun<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			ele<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span><span class="token string">"on"</span> <span class="token operator">+</span> type<span class="token punctuation">,</span>fun<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>删除的事件处理函数，必须和绑定的事件处理函数是同一个</strong></p>
<ul>
<li>为了保证绑定和删除的时候是同一个函数，最好提前给这个函数起名
<ul>
<li>通过函数名，找到该函数</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="函数的封装思想" tabindex="-1"><a class="header-anchor" href="#函数的封装思想" aria-hidden="true">#</a> 函数的封装思想</h1>
<h2 id="入口和出口的处理" tabindex="-1"><a class="header-anchor" href="#入口和出口的处理" aria-hidden="true">#</a> 入口和出口的处理</h2>
<ul>
<li>入口处理
<ul>
<li>参数的处理
<ul>
<li>默认参数的处理（考虑用户可能用到的情况）</li>
</ul>
</li>
</ul>
</li>
<li>出口的处理
<ul>
<li>在数据处理完后，不要帮用户做更多的决定</li>
<li>将处理好的数据，打包成通用数据，返回（数组或列表）</li>
</ul>
</li>
</ul>
<h1 id="正则" tabindex="-1"><a class="header-anchor" href="#正则" aria-hidden="true">#</a> 正则</h1>
<h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>正则：正确的规则，描述了字符串的规则，正则自身是一个<strong>表达式</strong>也可以作为<strong>值</strong>存在，这个字本身就是一个<strong>对象类型</strong>的数据，正则也被称为：<strong>正则表达式，正则对象</strong></li>
<li>正则式用来造作字符串的</li>
</ul>
<h2 id="意义" tabindex="-1"><a class="header-anchor" href="#意义" aria-hidden="true">#</a> 意义</h2>
<ul>
<li>验证字符</li>
<li>数量使用的情况下，极大的提高工作效率</li>
<li>从一串杂乱的字符串中取出所有的数字-原生js<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"asd256asd834as5da38sd512zcacas"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> linshi<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">>=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;=</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            linshi <span class="token operator">+=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>linshi <span class="token operator">!=</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>linshi<span class="token punctuation">)</span>
                linshi <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>从一串杂乱的字符串中取出所有的数字-正则表达式<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"asd256asd834as5da38sd512zcacas"</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="创建正则" tabindex="-1"><a class="header-anchor" href="#创建正则" aria-hidden="true">#</a> 创建正则</h2>
<ul>
<li>正则的标志：//</li>
<li>字面量
<ul>
<li>var reg  = /正则内容/;</li>
</ul>
</li>
<li>构造函数
<ul>
<li>var reg = new RegExp(变量，修饰符);</li>
<li>变量的值必须是字符</li>
</ul>
</li>
</ul>
<h2 id="正则的使用" tabindex="-1"><a class="header-anchor" href="#正则的使用" aria-hidden="true">#</a> 正则的使用</h2>
<ul>
<li>
<p>正则的主要功能：<strong>验证</strong>test，<strong>替换</strong>replace，<strong>查询</strong>match</p>
</li>
<li>
<p>正则的方法</p>
<ul>
<li>reg.test(str)：测试，验证（返回布尔值）</li>
<li>reg.exec(str)：查找
<ul>
<li>将查询到的信息返回到数组里，数组包含多个信息</li>
<li>每次只能查询一个</li>
<li>属性lastindex是上一次查询完索引所在的位置</li>
<li>查询到最后一次是返回null，下次从头开始查找</li>
<li>在exec中()是要查询的子集，解析后放到数组中</li>
</ul>
</li>
</ul>
</li>
<li>
<p>字符的方法</p>
<ul>
<li>srt.replace(reg,newStr)：替换，根据指定正则，替换成指定字符（返回替换之后的字符串，不该改变原字符串）</li>
<li>str.match(reg)：查找，符合正则的字符，放在一个数组中（返回数组）</li>
<li>str.search(reg)：查找
<ul>
<li>数据第一次出现的索引</li>
</ul>
</li>
</ul>
</li>
<li>
<p>test的默认验证规则</p>
<ul>
<li>只要被验证的字符串的局部，符合正则，就返回true</li>
<li>如需整体验证，在正则开始时加^,结尾时加$</li>
</ul>
</li>
</ul>
<h2 id="正则的符号" tabindex="-1"><a class="header-anchor" href="#正则的符号" aria-hidden="true">#</a> 正则的符号</h2>
<ul>
<li>修饰符
<ul>
<li><code v-pre>g</code>：全局匹配</li>
<li><code v-pre>i</code>：忽略大小写</li>
</ul>
</li>
<li>量词
<ul>
<li><code v-pre>+</code>：表示1个或以上</li>
<li><code v-pre>*</code>：表示0个或以上</li>
<li><code v-pre>?</code>：表示0个或1个</li>
<li><code v-pre>{n}</code>：表示指定n位</li>
<li><code v-pre>{n,}</code>：表示至少n位，上不封顶</li>
<li><code v-pre>{n,m}</code>：表示至少n位，至多m位</li>
</ul>
</li>
<li>特殊字符
<ul>
<li><code v-pre>|</code>：或</li>
<li><code v-pre>()</code>；整合成一个部分</li>
<li><code v-pre>[]</code>：中元符，表示一位，中元符内的内容时或的关系</li>
<li><code v-pre>[^]</code>：表示非，除了中元符内的内容</li>
</ul>
</li>
<li>转义字符
<ul>
<li><code v-pre>\d</code>：表示所有的数字，等同于<code v-pre>[0-9]</code></li>
<li><code v-pre>\w</code>：表示字母数字下划线，等同于<code v-pre>[0-9a-zA-Z_]</code></li>
<li><code v-pre>\s</code>：表示空格，等同于<code v-pre> </code></li>
<li><code v-pre>\D</code>：表示非数字，等同于<code v-pre>[^0-9]</code></li>
<li><code v-pre>\W</code>：表示非字母数字下划线，等同于<code v-pre>[^0-9a-zA-Z_]</code>(特殊字符)</li>
<li><code v-pre>\S</code>表示非空格，等同于<code v-pre>[^ ]</code></li>
<li><code v-pre>\</code>：表示转义符，将正则中有含义的符号，转成没含义的字符</li>
</ul>
</li>
<li>通配符
<ul>
<li><code v-pre>.</code>：通配符，表示所有</li>
</ul>
</li>
</ul>
<h2 id="正则的读" tabindex="-1"><a class="header-anchor" href="#正则的读" aria-hidden="true">#</a> 正则的读</h2>
<ul>
<li>根据写好的正则，读出规则，写出相应的字符</li>
<li>正则只能验证格式的合法，不能验证内容的合法</li>
</ul>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>
<ul>
<li>exec：每次只能查询一个，多次执行查询多个
<ul>
<li>lastindex，下一次查询的下标，可获取可设置</li>
</ul>
</li>
<li>search：查询符合正则的字符的索引</li>
<li>match：全局查询下，将查询出来的数据放在数组中</li>
</ul>
<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1>
<h2 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>ES6  就是ECMAScript 6（ECMAscript2015）</li>
<li>暂时没有得到所有浏览器的支持，但是所有浏览器的新版本都支持</li>
</ul>
<h2 id="声明变量的关键字" tabindex="-1"><a class="header-anchor" href="#声明变量的关键字" aria-hidden="true">#</a> 声明变量的关键字</h2>
<ul>
<li>let：声明变量</li>
<li>const：声明变量（常量）</li>
<li>class：声明类</li>
<li>import：模块化中引入模块</li>
<li>export：模块化中暴露模块</li>
<li>let和var的区别
<ul>
<li>没有提升</li>
<li>不允许重复</li>
<li>块级作用域</li>
<li>全局变量不会绑定到window</li>
<li>暂时性死区</li>
</ul>
</li>
<li>const与let的区别
<ul>
<li>let有的，const都有</li>
<li>const是常量，声明之后不允许被修改
<ul>
<li>实质：const不允许修改的是地址，不是值</li>
<li>注意复杂数据</li>
</ul>
</li>
</ul>
</li>
<li>如非特殊情况var全部换成let或const</li>
</ul>
<h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2>
<ul>
<li>是一种赋值方式，解构，解析结构</li>
<li>主要用来解构复杂数据
<ul>
<li>对象</li>
<li>按照键名一一对应，不存在的键是undefined<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">"男"</span><span class="token punctuation">}</span>
	<span class="token keyword">let</span><span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex<span class="token punctuation">,</span>d<span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>数组</li>
<li>按顺序一一对应，不存在的索引位置是undefined<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hi"</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">"hi"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>字符</li>
<li>按顺序一一对应，不存在的索引位置是undefined<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">]</span> <span class="token operator">=</span> str<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>巧用解构赋值</li>
</ul>
<ol>
<li>
<p>快速交换两个变量的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>b<span class="token punctuation">,</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>快速解构函数的参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">,</span>
<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>快速解构函数的返回值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
<span class="token literal-property property">year</span><span class="token operator">:</span><span class="token number">2020</span><span class="token punctuation">,</span>
<span class="token literal-property property">month</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span>
<span class="token literal-property property">date</span><span class="token operator">:</span><span class="token number">28</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span>year<span class="token punctuation">,</span>month<span class="token punctuation">,</span>date<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="字符的新增" tabindex="-1"><a class="header-anchor" href="#字符的新增" aria-hidden="true">#</a> 字符的新增</h2>
<ul>
<li>Unicode编码
<ul>
<li>五位十六进制</li>
<li>\u{20bb6}</li>
</ul>
</li>
<li>方法
<ul>
<li>字符转u编码（新老版本通用）
<ul>
<li>str.codePointAt()</li>
<li>&quot;𠮶&quot;.codePointAt()</li>
</ul>
</li>
<li>u编码转字符（新老版本通用）
<ul>
<li>String.fromCodePoint(十进制/u编码)</li>
<li>String.fromCodePoint(134070)</li>
</ul>
</li>
<li>查询是否以指定字符开头
<ul>
<li>str.statrtsWith(&quot;查询的字符&quot;)</li>
<li>str.startsWith(&quot;e&quot;)</li>
</ul>
</li>
<li>查询是否以指定字符结尾
<ul>
<li>str.endsWith(&quot;查询的字符&quot;)</li>
<li>str.endsWith(&quot;l&quot;)</li>
</ul>
</li>
<li>查询是否包含
<ul>
<li>str.includes(&quot;查询的字符&quot;)</li>
<li>str.includes(&quot;s&quot;)</li>
</ul>
</li>
<li>重复字符
<ul>
<li>str.repeat(重复次数)</li>
<li>str.repeat(5)</li>
</ul>
</li>
</ul>
</li>
<li>拼接
<ul>
<li>字符串模板</li>
<li>支持反引号字符:<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>在反引号中支持：{$变量}
<ul>
<li>支持简单表达式</li>
<li>支持执行函数</li>
<li>反引号中支持换行</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="函数-1" tabindex="-1"><a class="header-anchor" href="#函数-1" aria-hidden="true">#</a> 函数</h2>
<ul>
<li>箭头函数：=&gt;</li>
<li>类似于无名函数，只能作为值存在，不允许直接使用</li>
<li><code v-pre>()=&gt;{}</code><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">"hello"</span><span class="token operator">+</span>a<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//箭头函数</span>
	<span class="token keyword">let</span> fun <span class="token parameter">a</span><span class="token operator">=></span><span class="token string">"hello"</span><span class="token operator">+</span>a<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>特点
<ol>
<li>极简 - 语法简单</li>
<li>当箭头函数的参数，有且仅有一个时，可以省略小括号</li>
<li>当箭头函数的函数体，有且仅有返回值（返回值不是对象）时，可以省略花括号和return（只要省略了花括号自动将箭头后的内容返回）</li>
<li>当返回值是对象时如果省略花括号和return，需要用小括号将对象括起来</li>
<li>箭头函数没有自己的this，自动绑定上层的this</li>
<li>不能作为构造函数使用，不能new执行</li>
<li>极简 - 伤害代码的可读性（正则）</li>
</ol>
</li>
<li>应用场景
<ul>
<li>参数</li>
<li>返回值</li>
<li><strong>不建议作为事件处理函数使用</strong>
<ul>
<li>没有this</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="展开运算符" tabindex="-1"><a class="header-anchor" href="#展开运算符" aria-hidden="true">#</a> 展开运算符</h2>
<ul>
<li><strong>...</strong></li>
<li>可以展开复杂数据</li>
<li>【注】展开位置，要在<strong>能接收展开之后数据</strong>的位置展开</li>
</ul>
<h2 id="symbol类型" tabindex="-1"><a class="header-anchor" href="#symbol类型" aria-hidden="true">#</a> symbol类型</h2>
<ul>
<li>
<p>shi</p>
</li>
<li>
<p>非常像字符，表示一个标记，记号</p>
</li>
<li>
<p>创建：let s = Symbol();</p>
</li>
<li>
<p>任何两个symbol都不相等</p>
</li>
<li>
<p>用来限制字典量的验证</p>
<ul>
<li>标记，记号，状态</li>
</ul>
</li>
<li>
<p>Symbol函数会生成一个唯一的值可以理解为Symbol类型跟字符串是接近的 但每次生成唯一的值，也就是每次都不相等，至于它等于多少，并不重要 这对于一些字典变量，比较有用</p>
</li>
</ul>
<h2 id="数据的集合-set和map" tabindex="-1"><a class="header-anchor" href="#数据的集合-set和map" aria-hidden="true">#</a> 数据的集合 set和map</h2>
<ul>
<li>不是新的数据类型，还是对象，仅仅是数据的打包形式不一样</li>
<li>数组：数据的有序集合，索引0~length-1</li>
<li>对象：数据的无序集合，没有索引，键值对</li>
<li>set：数据的无重复集合
<ul>
<li>去重</li>
<li>new Set();</li>
<li>没有索引</li>
<li>键和值是同一个</li>
<li>方法
<ul>
<li>add()添加的值</li>
<li>keys()键</li>
<li>values()值</li>
<li>enteries()键和值</li>
</ul>
</li>
</ul>
</li>
<li>map：数据的无需集合，键值对，语法与对对象不同
<ul>
<li>new Map();</li>
<li>键值对（name=&gt;&quot;admin&quot;）</li>
<li>方法
<ul>
<li>set()添加或修改值</li>
<li>keys()键</li>
<li>values()值</li>
<li>enteries()键和值</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1>
<h2 id="理论" tabindex="-1"><a class="header-anchor" href="#理论" aria-hidden="true">#</a> 理论</h2>
<h3 id="什么是面向对象" tabindex="-1"><a class="header-anchor" href="#什么是面向对象" aria-hidden="true">#</a> 什么是面向对象</h3>
<ul>
<li>面向
<ul>
<li>对着，面朝</li>
<li>以...为主</li>
</ul>
</li>
<li>对象
<ul>
<li><strong>信息打包之后形成对象</strong>
<ul>
<li>优势：
<ul>
<li>提升信息的<strong>查找速度</strong></li>
<li>提升信息的<strong>传输速度</strong></li>
</ul>
</li>
<li>对象被创建后被创建后如需要批量赋值，造成信息的冗余
<ul>
<li>先将对象抽象化，<strong>抽象成类</strong></li>
<li>在根据特性的不同，将类中的抽象<strong>具象化出对象</strong></li>
<li>根据特性的不同，将类中的抽象划分成：<strong>属性和方法</strong>
<ul>
<li>属性会随着具体的对象而变化</li>
<li>方法不会随着具体的对象变化</li>
</ul>
</li>
</ul>
</li>
<li><strong>同一个类创建的对象，可能具有同一个方法</strong></li>
</ul>
</li>
</ul>
</li>
<li>面向对象（OO）- <strong>大规模的分工，紧密的协作</strong>
<ul>
<li>OOA：面向对象的分析
<ul>
<li>将需求不断地细节化，不断地拆分，拆分成能直接实现的需求</li>
</ul>
</li>
<li>OOD：面向对象的设计 - <strong>高内聚，低耦合</strong>
<ul>
<li>将拆分后的需求，使用分工协作的方式搭建结构</li>
<li>每个需求之间都会有千丝万缕的关系</li>
</ul>
</li>
</ul>
</li>
<li>面向对象和面向过程的区别
<ul>
<li>面向对象：
<ul>
<li><strong>功能化编程，只关注结果，不关注过程</strong></li>
</ul>
</li>
<li>面向过程：
<ul>
<li><strong>不关注功能，只关注过程和结果</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="面向对象编程的特点" tabindex="-1"><a class="header-anchor" href="#面向对象编程的特点" aria-hidden="true">#</a> 面向对象编程的特点</h3>
<ul>
<li><strong>封装：比函数更大的封装</strong></li>
<li><strong>继承：从父类继承出子类</strong></li>
<li><strong>多态：对象的多种形态</strong></li>
</ul>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<h3 id="面向对象的语法" tabindex="-1"><a class="header-anchor" href="#面向对象的语法" aria-hidden="true">#</a> 面向对象的语法</h3>
<ul>
<li><strong>OOP：面向对象编程</strong></li>
<li>填充具体的实例，编程</li>
<li>创建对象
<ul>
<li>
<p>字面量（单体/单例对象）：</p>
<ul>
<li>var obj = {}；</li>
</ul>
</li>
<li>
<p>构造函数：</p>
<ul>
<li>构造内置函数：new Object();</li>
<li><strong>构造自定义函数</strong>：new Fn();
<ul>
<li>构造函数的命名方式采用大驼峰（首字母大写）</li>
<li>构造自定义函数创建对象，属于内置的工厂模式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li>
</ul>
<p>function CreatePeople(n,a,s){
this.name = n;
this.sex = s;
this.age = a;
this.say = function(){
console.log(this.name);
}
}
var p1 = new CreatePeople(&quot;张三&quot;,18,&quot;1&quot;);
console.log(p1);
p1.say();
```</p>
</li>
</ul>
</li>
<li>面向对象的思想
<ul>
<li>抽象</li>
<li>属性</li>
<li>功能继承</li>
</ul>
</li>
</ul>
<h2 id="new的原理" tabindex="-1"><a class="header-anchor" href="#new的原理" aria-hidden="true">#</a> new的原理</h2>
<ol>
<li>创建了一个新对象</li>
<li>将原函数中的this指向了第一步创建的对象</li>
<li>将第一步创建的对象的<strong>proto</strong>指向了原函数的<strong>prototype</strong></li>
<li>检查原函数是否主动返回对象，如果没有，返回以上3步处理之后的新对象</li>
</ol>
<h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3>
<ul>
<li>类：是一种抽象出来的类别
<ul>
<li>实例：是根据类，具象出的实际的对象</li>
<li>实例 === 对象</li>
</ul>
</li>
</ul>
<h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2>
<h3 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> prototype</h3>
<ul>
<li>专属于函数（箭头函数除外）的一个属性</li>
<li>原型对象，显示原型，用来给将来函数被new出来的实例做父级使用</li>
<li>将方法写在prototype内，以供将来所有new出来的实例使用</li>
</ul>
<h3 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> <code v-pre>__proto__</code></h3>
<ul>
<li>所有数据类型都具有这个属性</li>
<li>原型对象，隐式原型，用来指向构造函数当前实例的构造函数的（父级的）prototype</li>
<li>该属性在使用过程中可以省略，可以直接找到指向构造函数的prototype身上的属性或方法</li>
<li>原型对象，任何一个数据，都具有这个属性。表示自身来自于哪个父类</li>
</ul>
<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3>
<ul>
<li>表示当前所在的对象，所属的函数</li>
<li>专属于prototype，表示当前prototype所属的构造函数</li>
</ul>
<h3 id="对象的属性或方法的读写规则" tabindex="-1"><a class="header-anchor" href="#对象的属性或方法的读写规则" aria-hidden="true">#</a> 对象的属性或方法的读写规则</h3>
<ul>
<li>(默认情况下)</li>
<li>读：使用。先在自身查找，有，就使用，同时停止查找，没有，顺着proto向上级查找，没有继续顺着proto查找，直到顶层（Object的prototype），找不到就抛出undefined</li>
<li>写：设置或赋值。先在自身查找，有，写，同时停止查找，没有，直接设置</li>
</ul>
<h2 id="面向对象的常用语法之一" tabindex="-1"><a class="header-anchor" href="#面向对象的常用语法之一" aria-hidden="true">#</a> 面向对象的常用语法之一</h2>
<ul>
<li>将属性写在构造函数内</li>
<li>将方法写在构造函数的原型内（默认的constructor会被覆盖，要设置）</li>
<li>原型身上的方法的this和构造函数内的this都指向将来的实例<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">CreatePeople</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span>a<span class="token punctuation">,</span>s</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> a<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">CreatePeople</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreatePeople</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p1<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2>
<p><strong>ES6新增</strong></p>
<ul>
<li>js中class的介绍
<ul>
<li>面向对象编程，有类的概念，但是js中没有类，通过函数模拟类的思想</li>
<li>哪怕ES6中提供了class关键字，其本质也只是老版本中函数实现类的思想的有一层封装，并不是真正的类</li>
</ul>
</li>
<li>class的语法结构<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">class</span> <span class="token class-name">Fun</span><span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">// 等同于老语法中的构造函数</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 等同于老语法中的原型</span>
        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> f2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fun</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    f2<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>js内置工厂模式的语法<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1>
<h2 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h2>
<ul>
<li>利用作用域的嵌套，将函数内部的变量，进化成<strong>自由/私有</strong>变量的<strong>环境</strong>，叫闭包</li>
<li>可以在全局作用域内，操作原本的局部变量</li>
</ul>
<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2>
<ul>
<li>比较消耗性能：原本会随着局部作用域被释放的变量现在又被保存了起来</li>
<li>低版本浏览器会造成内存泄漏</li>
<li>可以减少在全局变量的命名污染</li>
<li>可以在外部操作内部的变量，方便/不安全（需要的值可能会被修改）</li>
<li>可以将原本要删除的值，临时保存起来，方便再次使用</li>
</ul>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2>
<ul>
<li>表现：作用域套作用域</li>
<li>本质：
<ul>
<li>函数定义的区域：函数定义的作用域</li>
<li>函数执行的区域：函数执行的作用域</li>
<li>关系：
<ul>
<li>函数在执行时自身可以拿到定义作用域的所有变量</li>
</ul>
</li>
</ul>
</li>
<li>垃圾回收机制：
<ul>
<li>计算机的垃圾回收机制（硬盘）：
<ul>
<li>要删除的数据，不立即删除，暂存在某个临时区域，如果需要使用，可以回收再利用，真正不用了在清空</li>
</ul>
</li>
<li>内存的垃圾回收机制：
<ul>
<li>要删除的数据，直接删除</li>
</ul>
</li>
</ul>
</li>
<li><strong>利用作用域的嵌套，触发了计算机的垃圾回收机制，将原本要删除的变量，临时保存到作用域中</strong></li>
</ul>
<h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2>
<ul>
<li>循环内绑定事件中要使用循环内的变量</li>
<li>给不能串参的函数传参：事件处理函数</li>
<li>循环中的事件</li>
<li>事件处理函数的传参</li>
<li>计时器的回调函数传参</li>
</ul>
<h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h1>
<h2 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h2>
<ul>
<li>让一个原本没有某个方法或功能的对象或类，具有另一个对象或类的功能或方法</li>
</ul>
<h2 id="方式" tabindex="-1"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式</h2>
<ul>
<li>子承父业：原型的继承</li>
<li>授权使用：改变this的指向继承</li>
</ul>
<h2 id="原型-this相关" tabindex="-1"><a class="header-anchor" href="#原型-this相关" aria-hidden="true">#</a> 原型/this相关</h2>
<ul>
<li>原型
<ul>
<li>显示原型：函数的prototype
<ul>
<li>给将来的实例做父级使用</li>
</ul>
</li>
<li>隐式原型：实例的<code v-pre>__proto__</code>
<ul>
<li>用来指向自身的父级</li>
</ul>
</li>
</ul>
</li>
<li>this
<ul>
<li>当前函数的执行对象</li>
<li>强行修改
<ul>
<li>函数的方法：call，apply，bind</li>
</ul>
</li>
<li>new之后的实例</li>
</ul>
</li>
</ul>
<h2 id="继承的方式" tabindex="-1"><a class="header-anchor" href="#继承的方式" aria-hidden="true">#</a> 继承的方式</h2>
<ul>
<li>改变this的指向继承
<ul>
<li>方便</li>
<li>多继承</li>
<li>只能继承构造函数内部的内容</li>
<li>不能继承原型上的内容</li>
</ul>
</li>
<li>原型继承
<ul>
<li>拷贝继承
<ul>
<li>注意深浅拷贝</li>
<li>多继承</li>
<li>只能继承原型</li>
<li>不能继承构造函数</li>
</ul>
</li>
<li>改变原型指向（原型链继承）
<ul>
<li>能继承原型</li>
<li>能继承构造函数</li>
<li>不方便传参数</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>原型指针：
// 默认情况
    // p实例.__proto__ -> Parent构造函数.prototype
// 原型链继承之后
    // c实例.__proto__ -> Child构造函数.prototype -> p实例.__proto__ -> Parent构造函数.prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>借助方法(Object.create)
<ul>
<li>ES6提供的Object.create</li>
<li>根据传入的参数对象，创建新对象，新对象的原型指向参数对象</li>
</ul>
</li>
</ul>
</li>
<li>组合（混合）继承
<ul>
<li>二合一
<ul>
<li>改变this指向 + 原型（常用继承方式之一）
<ul>
<li>改变this指向+原型继承</li>
<li>既可以继承构造函数的属性和方法</li>
<li>也可以继承原型身上的属性和方法</li>
<li>方便传参</li>
</ul>
</li>
</ul>
</li>
<li>官方提供（extends  super）Es6的class语法
<ul>
<li>继承中的角色
<ul>
<li>父类</li>
<li>子类</li>
<li>父类是子类的超类（super）</li>
</ul>
</li>
<li>实质：改变this指向 + 原型链继承</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">class</span> <span class="token class-name">Parent</span><span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span><span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

   <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token string">"校长"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   p<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">"主任"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   c<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="继承的应用场景" tabindex="-1"><a class="header-anchor" href="#继承的应用场景" aria-hidden="true">#</a> 继承的应用场景</h2>
<ul>
<li>面向对象功能的复用性</li>
<li>提升程序的性能，降低内存的消耗</li>
</ul>
<h1 id="原型-1" tabindex="-1"><a class="header-anchor" href="#原型-1" aria-hidden="true">#</a> 原型</h1>
<h2 id="对象中的-prot" tabindex="-1"><a class="header-anchor" href="#对象中的-prot" aria-hidden="true">#</a> 对象中的<code v-pre>__prot__</code></h2>
<ul>
<li>js中万物皆对象，每个数据都会有一个<code v-pre>__prot__</code>的属性，这个属性叫<strong>隐式原型</strong>，一个对象（obj）的隐式原型（<code v-pre>__prot__</code>）指向构造该对象（obj）的构造函数（Object()）的原型属性（object.prototype），这样做的原因是为了能够保证实例（obj）能够访问到在构造函数（object）的原型属性（object.prototype）中定义的属性和方法</li>
</ul>
<h2 id="函数中的protyoe" tabindex="-1"><a class="header-anchor" href="#函数中的protyoe" aria-hidden="true">#</a> 函数中的protyoe</h2>
<ul>
<li>函数是一个特殊的对象，除了和其他对象一样有上述的<code v-pre>__prot__</code>属性外，还有自己特有的属性--原型（prototype）这个属性被描述成指针，它指向一个对象类型的数据这个对象的用途就是包含所有将来使用该函数构造出来的可被共享的属性和方法（我们把这个对象叫做<strong>原型对象</strong>）</li>
<li>原型对象中也有一个属性，叫做constructor，这个属性包含了一个指针，指回原函数，（类似于arguments.callee。但是arguments只能在函数内部获得，而函数原型对象内的constructor属性，可以在任何能访问到这个函数的位置使用）</li>
</ul>
<h2 id="关系-1" tabindex="-1"><a class="header-anchor" href="#关系-1" aria-hidden="true">#</a> 关系</h2>
<ul>
<li>构造函数，原型，实例之间的关系
<ol>
<li>构造函数Fn身上有属性prototype为原型对象，原型对象内有constructor属性，指向当前prototype所在的构造函数Fn</li>
<li>在new执行构造函数Fn时，创造了一个实例对象f，实例对象f的<code v-pre>__proto__</code>指向构造函数Fn的原型prototype</li>
<li>因为实例对象f的<code v-pre>__proto__</code>指向构造函数Fn的原型prototype，所以实例对象f可以间接访问到Fn原型prototype的方法</li>
</ol>
</li>
</ul>
<h2 id="检查实例与构造函数的关系" tabindex="-1"><a class="header-anchor" href="#检查实例与构造函数的关系" aria-hidden="true">#</a> 检查实例与构造函数的关系</h2>
<ul>
<li>查看实例对象f是否有指针指向构造函数Fn的原型
<ul>
<li>isPrototypeOf()
<ul>
<li>用于检测两个对象之间似乎否存在这种关系</li>
<li>Fn.prototype.isPrototypeOf(f) //查看 Fn 的 prototype 对象，是否是 f 原型</li>
</ul>
</li>
<li>instanceof
<ul>
<li>console.log(f instanceof Fn)//查看f对象是否是构造函数Fn的实例</li>
<li>console.log(f instanceof Object)</li>
</ul>
</li>
</ul>
</li>
<li>两种方法都是：如果是返回true，如果不是返回false</li>
<li>【注】：instanceof运算符右侧是构造函数，并且js中所有原型都来自Object构造函数</li>
</ul>
<h2 id="js解析器访问属性顺序" tabindex="-1"><a class="header-anchor" href="#js解析器访问属性顺序" aria-hidden="true">#</a> js解析器访问属性顺序</h2>
<ul>
<li>当访问实例f的属性或方法时，会先在当前实例对象f中查找，去过没有找到，则沿着<code v-pre>__peoto__</code>继续向上寻找，如果找到最顶头的Object还是找不到，则会抛出undefined。如果在实例中找到，或某层原型中找到，就会读取当前值并执行，同时停止向上寻找</li>
<li>由此可见，解析器的解析顺序遵循就近原则，如故在最近的位置发现属性的存在，便不会向上寻找</li>
</ul>
<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h2 id="概念-4" tabindex="-1"><a class="header-anchor" href="#概念-4" aria-hidden="true">#</a> 概念</h2>
<ul>
<li>是一套经过反复使用，多人知晓，经过分类的，代码设计经验的总结</li>
<li>为什么要使用设计模式？
<ul>
<li>为了代码的可重用性，让代码更容易被他人理解，保证代码的可靠性，设计模式使代码的编写真正的工程化</li>
</ul>
</li>
</ul>
<h2 id="常用设计模式" tabindex="-1"><a class="header-anchor" href="#常用设计模式" aria-hidden="true">#</a> 常用设计模式</h2>
<ul>
<li>构造器模式、模块化模式、暴露模块化模式、单例模式、工厂模式、中介则模式、原型模式、命令模式、外观模式、Mixin模式、装饰模式、哼元（Flyweight）模式、组合模式、适配器模式、外观模式、观察者模式、迭代器模式、惰性初始模式、代理模式、建造则模式、MV*模式（MVC、MVP、MVVM）</li>
<li>设计模式实在面向对象编程中使用
<ul>
<li>面向对象：内功</li>
<li>设计模式：招式</li>
</ul>
</li>
</ul>
<h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2>
<ul>
<li>批量创建对象</li>
<li>特点：原料对象，属性或方法的加工，返回</li>
<li>语法
<ul>
<li>构造函数创建对象</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"admin"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>封装成函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    	obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"admin"</span><span class="token punctuation">;</span>
    	<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2>
<ul>
<li>
<p>只能创建单个对象，和工厂模式相对</p>
</li>
<li>
<p>特点：每次创建的都是同一个对象</p>
</li>
<li>
<p>单个对象</p>
<ul>
<li><code v-pre>var obj = {}</code></li>
</ul>
</li>
<li>
<p>构造函数实现单例模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Fn<span class="token punctuation">.</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//判断构造函数内是否有obj</span>
		Fn<span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token comment">//没有就创建一个</span>
	<span class="token punctuation">}</span>
	Fn<span class="token punctuation">.</span>obj <span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">"李四"</span><span class="token comment">//给创建的对象设置一个属性name</span>
    <span class="token keyword">return</span> Fn<span class="token punctuation">.</span>obj <span class="token comment">//返回自己的对象（每次返回的都是自己的对象）</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h2>
<ul>
<li>将类或对象按照一定的关系组合起来，可以实现批量执行的功能</li>
<li>一般应用在<strong>动态</strong>html结构上</li>
<li>组合成树状结构，对象节点
<ul>
<li>根对象</li>
<li>枝对象：具有子对象节点</li>
<li>叶对象：不具有子对象节点</li>
</ul>
</li>
<li>节省操作、性能消耗大</li>
<li>先创建一个组合器
<ul>
<li>在组合对象</li>
</ul>
</li>
</ul>
<h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2>
<ul>
<li>适配器：将原本不符合接口的数据或信息，包装成符合的数据接口或信息，这个包装就叫适配器</li>
<li>手机，平板（非通话）
<ul>
<li>只有一个测试部门</li>
<li>按照最全的功能测试
<ul>
<li>手机：打电话，玩游戏，听音乐
<ul>
<li>平板：玩游戏，听音乐</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>适配器的意义：
<ul>
<li>多数应用在系统接口使用，也就是别人提供了一个功能，但要求传入一个A类型的参数，我们手里的数据是B类型的，如果想使用，有2个方法</li>
</ul>
<ol>
<li>把自己的源代码修改，让B类型改为A类型（不合适）</li>
<li>我们把B类型的数据进行包装，让他看起来符合A类型，这个包装函数，就是适配器</li>
</ol>
</li>
</ul>
<h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<ul>
<li>观察者模式也叫发布订阅者模式</li>
<li>订阅者（观察方，接收对象）：接收信息</li>
<li>发布者（被观察方，主体对象）：发布信息</li>
<li>js中的监听式事件绑定</li>
</ul>
<h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2>
<ul>
<li>代理，委托</li>
<li>系统功能A，系统调用，会产生数据的传输</li>
<li>给系统功能A做个代理，让系统调用代理</li>
<li>代理功能自定义完成，截获，另做他用，另行加工</li>
<li>事件委托</li>
<li>服务器代理</li>
</ul>
<h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2>
<ul>
<li>功能的执行方式</li>
<li>策略，战术，计划</li>
<li>提前将可能发生的情况多考虑到，并给出对应的解决方案</li>
<li>场景：
<ul>
<li>轮播图的中的左右按钮的区分</li>
<li>左右移动方向的确定</li>
<li>小标被点击时的方向</li>
</ul>
</li>
</ul>
<h2 id="mvc模式" tabindex="-1"><a class="header-anchor" href="#mvc模式" aria-hidden="true">#</a> MVC模式</h2>
<ul>
<li>M：model	模型，数据</li>
<li>V：view	视图</li>
<li>C：ctrl	控制器</li>
<li>执行顺序
<ol>
<li>用户/系统调用控制器发起指令</li>
<li>控制器接受指令,根据指令调用对应的模型</li>
<li>模型返回数据，控制器保存数据</li>
<li>控制器根据指令，调用对应的视图</li>
<li>将保存的数据，发给视图</li>
<li>视图做数据的渲染</li>
</ol>
</li>
</ul>
<h1 id="交互" tabindex="-1"><a class="header-anchor" href="#交互" aria-hidden="true">#</a> 交互</h1>
<h2 id="前后端交互" tabindex="-1"><a class="header-anchor" href="#前后端交互" aria-hidden="true">#</a> 前后端交互</h2>
<h3 id="_1-web前端-浏览器" tabindex="-1"><a class="header-anchor" href="#_1-web前端-浏览器" aria-hidden="true">#</a> 1. web前端 - 浏览器</h3>
<ul>
<li>发送
<ul>
<li>表单发送</li>
</ul>
</li>
<li>接收
<ul>
<li>浏览器默认接受</li>
</ul>
</li>
</ul>
<h3 id="_2-后端-服务器" tabindex="-1"><a class="header-anchor" href="#_2-后端-服务器" aria-hidden="true">#</a> 2. 后端 - 服务器</h3>
<ul>
<li>发送
<ul>
<li>echo		  echo的速度快于print ，echo没有返回值</li>
<li>print		     print有返回值，且返回值总为1</li>
<li>print_r()		将复杂数据转成字符后发送</li>
<li>die()		     发送数据后会终止程序执行</li>
</ul>
</li>
<li>接收
<ul>
<li>$_GET		  接收get发送的表单</li>
<li>$_POST	  接收post发送的表单</li>
<li>$_REQUEST     接收get和post发送的表单</li>
</ul>
</li>
</ul>
<h3 id="_3-服务器" tabindex="-1"><a class="header-anchor" href="#_3-服务器" aria-hidden="true">#</a> 3. 服务器-</h3>
<ul>
<li>提供服务的机器，也是一台计算机，超级计算机，给众多用户提供的服务能力。专门的网络、专用的机器、专人维护、永不宕机。</li>
</ul>
<h3 id="_4-获取服务器" tabindex="-1"><a class="header-anchor" href="#_4-获取服务器" aria-hidden="true">#</a> 4. 获取服务器</h3>
<ul>
<li>买
<ul>
<li>真实服务器：成本高</li>
<li>虚拟服务器：云服务器，组别人的服务器</li>
</ul>
</li>
<li>模拟
<ul>
<li>电脑模拟虚拟服务器（本地服务器）
<ul>
<li>工具，单独的工具</li>
<li>工具包
<ul>
<li>phpstudy
<ul>
<li>apache：默认端口是 <strong>80</strong></li>
<li>php语言包</li>
<li>数据库：mysql 默认端口是 <strong>3306</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>文件，代码，资料
<ul>
<li>放在服务器的根目录
<ul>
<li>phpstudy的是www文件夹</li>
<li>常见的根目录名字：www、web、webroot、wwwroot</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_5-如何使用本地服务器" tabindex="-1"><a class="header-anchor" href="#_5-如何使用本地服务器" aria-hidden="true">#</a> 5. 如何使用本地服务器</h3>
<ul>
<li>安装集成工具</li>
<li>启动对应的服务
<ul>
<li>apache：80</li>
<li>mysql：3306</li>
</ul>
</li>
<li>访问服务器
<ul>
<li>专用的<strong>服务器</strong>地址
<ul>
<li>默认情况下：本地服务器的地址
<ul>
<li>localhost：80</li>
<li>127.0.0.1：80</li>
</ul>
</li>
</ul>
</li>
<li>服务器的根目录
<ul>
<li>只有放在这个目录中，才能被apache找到，作为服务内容发给用户</li>
<li>可以指定，根据不同的软件，目录有所差别
<ul>
<li>phpstudy：安装路径/www</li>
</ul>
</li>
<li>只有在这个文件夹中，才能被服务器访问
<ul>
<li><strong>localhost就表示这个根目录</strong>无法使用../跳出根目录</li>
</ul>
</li>
<li>如果需要将一个网站火页面用过服务器环境运行，必须将所有内容（站点）都拷贝到服务器的根目录</li>
<li><strong>在服务器环境下不要出现中文路径</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_6-后端程序如何编写" tabindex="-1"><a class="header-anchor" href="#_6-后端程序如何编写" aria-hidden="true">#</a> 6. 后端程序如何编写</h3>
<ul>
<li>准备好平台（对应服务器）</li>
<li>php</li>
</ul>
<h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2>
<h3 id="_1-php-写在哪" tabindex="-1"><a class="header-anchor" href="#_1-php-写在哪" aria-hidden="true">#</a> 1. php 写在哪</h3>
<ul>
<li>后端语言（服务器语言）</li>
<li>运行在服务器环境中
<ul>
<li>将文件放在服务器的根目录中</li>
</ul>
</li>
<li>创建一个php文件
<ul>
<li>后缀名：.php</li>
</ul>
</li>
</ul>
<h3 id="_2-怎么写" tabindex="-1"><a class="header-anchor" href="#_2-怎么写" aria-hidden="true">#</a> 2. 怎么写</h3>
<ul>
<li>基础结构<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code>	<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
		<span class="token comment">#php代码</span>
	<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>基础语法
<ul>
<li>php的大部分语法和js相同
<ul>
<li>if(true){}
<ul>
<li>if(false){}else{}</li>
<li>switch(){}</li>
<li>for(){}</li>
<li>while(){}</li>
<li>do{}while()</li>
<li>function fn(){}</li>
</ul>
</li>
</ul>
</li>
<li>php的变量
<ul>
<li><code v-pre>$</code>
<ul>
<li>php没有打印语句，只有发送</li>
<li>echo $a;</li>
<li>print $a;</li>
<li>print_r($a); - 将复杂数据转成字符后发送</li>
<li>die($a) - 发送数据后会终止程序执行</li>
</ul>
</li>
<li>思想
<ul>
<li>php文件只能被服务器解析，解析之后，将数据发送到前端，前端如果没有主动接收，浏览器默认接收，也就是直接将发送到前端的数据，显示在浏览器</li>
<li>如果发送了html标签，可以直接被浏览器解析</li>
</ul>
</li>
<li>数据类型
<ul>
<li>字符，整形，浮点型，布尔，NULL</li>
<li>对象，数组，函数，资源型（数据库）</li>
<li>检测数据类型
<ul>
<li>var_dump($a);</li>
</ul>
</li>
</ul>
</li>
<li><strong>语句结束必须加分号，除非最后一行</strong></li>
<li>字符串
<ul>
<li>$a = &quot;hello&quot;;</li>
<li>支持换行写</li>
<li>连接符<code v-pre>.</code></li>
</ul>
</li>
<li>注释
<ul>
<li>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
</li>
<li>//</li>
</ul>
</li>
<li>数组
<ul>
<li><strong>没有点语法，只有中括号语法</strong></li>
<li>索引数组
<ul>
<li>$arr = array(1,2,3,4,5);</li>
<li>长度的方法：count($arr)</li>
<li>转json的方法：json_encode($arr)</li>
<li>数组的遍历：foreach($arr as $a=&gt;$b)</li>
<li>数组排序：
<ul>
<li>sort() 升序</li>
<li>rsort() 降序</li>
</ul>
</li>
</ul>
</li>
<li>关联数组
<ul>
<li>$arr = array(&quot;name&quot;=&gt;&quot;admin&quot;,&quot;age&quot;=&gt;18,&quot;arr&quot;=&gt;$arr1,&quot;o&quot;=&gt;$arr2);</li>
</ul>
</li>
</ul>
</li>
<li>实例和类
<ul>
<li>class obj{
var $name = &quot;admin&quot;;
function(){
echo $this-&gt;name;
}
}</li>
<li>var 声明属性的关键字</li>
<li>-&gt;等同于js的.</li>
</ul>
</li>
<li>作用域
<ul>
<li>不允许跨作用域拿数据，必须借助global关键字</li>
</ul>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">global</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
	<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2>
<h3 id="_1-数据库的操作" tabindex="-1"><a class="header-anchor" href="#_1-数据库的操作" aria-hidden="true">#</a> 1. 数据库的操作</h3>
<ul>
<li>建立链接</li>
<li>操作数据库：创建数据库</li>
<li>操作数据表：创建数据表
<ul>
<li>创建字段，设置数据类型</li>
</ul>
</li>
<li>操作数据：插入数据，删除数据，更新数据，查询数据</li>
</ul>
<h3 id="_2-使用编程语言操作数据库-php" tabindex="-1"><a class="header-anchor" href="#_2-使用编程语言操作数据库-php" aria-hidden="true">#</a> 2. 使用编程语言操作数据库 - <strong>php</strong></h3>
<ul>
<li>建立连接（2种方法）
<ul>
<li>mysqli_connect(&quot;localhost:3306&quot;,&quot;root&quot;,&quot;root&quot;,&quot;sh2009&quot;);</li>
<li>参数（数据库的地址和端口，用户名，密码，要选择的数据库）</li>
<li>new mysqli(&quot;localhost:3306&quot;,&quot;root&quot;,&quot;root&quot;,&quot;sh2009&quot;)；</li>
</ul>
</li>
<li>选择数据库</li>
<li>数据的操作
<ul>
<li>配合mysql命令，实现数据的增删改查（字符形式）</li>
<li>增：&quot;INSERT stu (userName,age) VALUES('root',19)&quot;</li>
<li>删：&quot;DELETE FROM stu WHERE Id&gt;20&quot;</li>
<li>改：&quot;UPDATE stu SET age=age+1&quot;</li>
<li>查：&quot;SELECT * FROM stu&quot;;</li>
<li>查询：mysqli_query(选中的数据库，插入的数据)</li>
</ul>
</li>
<li>查看数据方法
<ul>
<li>索引数组+关联数组查看数据：$res-&gt;fetch_array()
<ul>
<li>索引数组查看数据：$res-&gt;fetch_row();
<ul>
<li>关联数组查看数据：$res-&gt;fetch_assoc();        √</li>
<li>对象方式查看数据：$res-&gt;fetch_object();</li>
<li>以上四种方式每次执行返回一条记录的数据，可配合循环多次执行，查询所有数据</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="js的执行机制-1" tabindex="-1"><a class="header-anchor" href="#js的执行机制-1" aria-hidden="true">#</a> js的执行机制</h2>
<h3 id="_1-同步和异步" tabindex="-1"><a class="header-anchor" href="#_1-同步和异步" aria-hidden="true">#</a> 1. 同步和异步</h3>
<ul>
<li>生活中的同步异步：
<ul>
<li>生活中的同步：同时执行，一起执行（两人三足）</li>
<li>生活中的异步：不同时执行，一个接一个（接力跑）</li>
</ul>
</li>
<li>程序中的同步异步<strong>与生活中完全相反</strong>
<ul>
<li>同步：不一起执行（大部分都是同步执行）</li>
<li>异步：一起执行（计时器，事件，ajax）</li>
</ul>
</li>
</ul>
<h3 id="_2-程序" tabindex="-1"><a class="header-anchor" href="#_2-程序" aria-hidden="true">#</a> 2. 程序</h3>
<ul>
<li>表示一个功能</li>
</ul>
<h3 id="_3-进程" tabindex="-1"><a class="header-anchor" href="#_3-进程" aria-hidden="true">#</a> 3. 进程</h3>
<ul>
<li>一个功能从开始执行到执行结束</li>
</ul>
<h3 id="_4-线程" tabindex="-1"><a class="header-anchor" href="#_4-线程" aria-hidden="true">#</a> 4. 线程</h3>
<ul>
<li>一个功能从开始执行到执行结束的过程中，有几个执行分支，每个分支就是一个线程，线程越多，执行速度越快，但是消耗的性能也高</li>
</ul>
<h3 id="_5-js的执行机制-单线程的异步执行程序" tabindex="-1"><a class="header-anchor" href="#_5-js的执行机制-单线程的异步执行程序" aria-hidden="true">#</a> 5. js的执行机制：单线程的异步执行程序</h3>
<ul>
<li>先执行宏任务，后执行微任务，微任务必然在宏任务完全结束后，才能执行</li>
<li>宏任务</li>
<li>微任务</li>
</ul>
<h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h2>
<h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h3>
<ul>
<li>是前后端交互的重要手段</li>
<li>a：Asynchronous 异步</li>
<li>j：javascript</li>
<li>a：and</li>
<li>x：服务端的数据（json，xml，html，txt...）</li>
<li>ajax不是单一的技术，而是一组技术的组合
<ul>
<li>异步的js：ajax自身的事件，（加载事件）</li>
<li>xhr：XMLHttpRequest，载体，用来连接前后端，进行信息传输</li>
<li>其他js：</li>
<li>服务端的数据：json，xml，html，txt...</li>
</ul>
</li>
<li>ajax的特点：
<ul>
<li>在不中断浏览器的其他任务的情况下加载新数据（无刷新加载数据）</li>
<li>提升了页面的初始加载速度</li>
<li>无法通过浏览器的前近后退按钮，拿到曾经的数据</li>
<li>ajax请求的数据，无法被搜索爬虫检索，破坏了网站的SEO（搜索引擎优化）</li>
</ul>
</li>
<li>ajax的引用场景
<ul>
<li>需要前后端交互</li>
<li>有前端</li>
<li>有后端
<ul>
<li>运行在服务器环境中</li>
<li>ajax也需要运行在服务器环境中</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_2-ajax的使用" tabindex="-1"><a class="header-anchor" href="#_2-ajax的使用" aria-hidden="true">#</a> 2. ajax的使用</h3>
<ul>
<li>创建载体：<code v-pre>var xhr = new </code></li>
<li>
<ul>
<li>有兼容:<code v-pre>var xhr = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)</code>  IE5</li>
</ul>
</li>
<li>连接前后端：<code v-pre>xhr.open(&quot;get&quot;,url,true)</code>
<ul>
<li>参数1：传输方式；参数2：传输地址；参数3：同步或异步（t：同步；f：异步）</li>
</ul>
</li>
<li>等待连接：onreadystatechange（事件）
<ul>
<li>xhr.readyState  ajax的执行状态（0，1，2，3，4）</li>
<li>xhr.status      http协议的状态（200表示连接成功）</li>
<li>xhr.responseText 接受到的数据</li>
</ul>
</li>
<li>发送数据：send()</li>
</ul>
<h3 id="_3-封装" tabindex="-1"><a class="header-anchor" href="#_3-封装" aria-hidden="true">#</a> 3. 封装</h3>
<pre><code>```js
    function ajax(ops){
        let {url,type=&quot;get&quot;,data={},success,error}=ops;
        let ajax = new XMLHttpRequest();
        str = &quot;&quot;;
        for(let i in data){
            str += `${i}=${data[i]}&amp;`;
        }
        url = type === &quot;get&quot; ? url + &quot;?&quot; + str + &quot;__wxt&quot; + Date.now() : url;
        ajax.open(type,url,true);
        ajax.onload = function(){
            if(ajax.status === 200){
                success(ajax.responseText);
            }else{
                error &amp;&amp; error(ajax.status);
            }
        }
        if(type === &quot;get&quot;){
            ajax.send();
        }else if(type === &quot;post&quot;){
            ajax.setRequestHeader(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);
            ajax.send(str.slice(0,str.length-1));
        }
    }
```
</code></pre>
<h3 id="_4-get请求" tabindex="-1"><a class="header-anchor" href="#_4-get请求" aria-hidden="true">#</a> 4. get请求</h3>
<ul>
<li>会触发浏览器的缓存</li>
<li>缓存：缓冲储存，临时储存</li>
<li>浏览器打开网页时会将一些资源下载到本地，以提升<strong>下次打开同一个地址</strong>时的速度
<ul>
<li>缺点：有可能无法拿到最新数据</li>
</ul>
</li>
<li>如何绕过缓存
<ul>
<li>走缓存的原因：下次打开同一个地址</li>
<li>保证每次打开的都不是同一个地址就不会走缓存
<ul>
<li>在url后加时间戳（Date.new()  获取事件戳）</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_5-post-请求" tabindex="-1"><a class="header-anchor" href="#_5-post-请求" aria-hidden="true">#</a> 5. post 请求</h3>
<ul>
<li>post请求不会被浏览器缓存</li>
<li>post请求的数据不在url后拼接，在xhr对象的send方法中发送</li>
<li>send之前要修改数据被解析的格式
<ul>
<li><code v-pre>ajax.setRequestHeader(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);</code></li>
</ul>
</li>
</ul>
<h3 id="_6-ajax存在的问题" tabindex="-1"><a class="header-anchor" href="#_6-ajax存在的问题" aria-hidden="true">#</a> 6. ajax存在的问题</h3>
<ul>
<li>跨域
<ul>
<li>浏览器的安全策略：同源策略
<ul>
<li>浏览器认为：请求源和请求目标必须出现在同一源下，不在同一源下，浏览器会阻止这次请求，因为浏览器认为不安全</li>
<li>同源策略：同协议，同域名，同端口</li>
</ul>
</li>
<li>当请求的资源与请求目标不在同一协议、域名、端口称作跨域</li>
<li>在请求的目标资源，没有明确允许的情况下，会被浏览器<strong>限制ajax，没有限制html标签的请求</strong></li>
</ul>
</li>
<li>程序员在与浏览器的安全策略左斗争的过程中发明了一种跨域的方式：jsonp
<ul>
<li>原理：利用script标签可以实现跨域的特性，请求资源
<ul>
<li>并不是所有标签都能请求，a是跳转，img是图片，link是引入css文件</li>
<li>script是引入js，js逻辑，处理编程</li>
</ul>
</li>
</ul>
</li>
<li>script标签
<ul>
<li>可以跨域</li>
<li>将引入的资源自动作为js代码执行</li>
</ul>
</li>
<li>jsonp
<ul>
<li>php会被服务器解析，解析之后，php返回的字符，才会被script标签作为js代码解析</li>
<li>利用前端定义的函数，在后端资源中被返回js的执行语句，又使用script标签加载后端资源，script标签会将后端返回的字符作为js解析，最终在后端执行了前端定义的函数，并通过传参实现跨域数据的传输</li>
<li>的封装</li>
</ul>
</li>
</ul>
<h3 id="_7-数据的来源-api" tabindex="-1"><a class="header-anchor" href="#_7-数据的来源-api" aria-hidden="true">#</a> 7. 数据的来源 - API</h3>
<ul>
<li>数据库</li>
<li>接口（API）：后台提供的可以请求的接口
<ul>
<li>自己写的接口
<ul>
<li>后台，数据库</li>
<li>处理数据库的数据</li>
<li>返回给前端</li>
</ul>
</li>
<li>别人写好的接口
<ul>
<li>读接口文档
<ul>
<li>根据接口要求，使用接口，解析数据</li>
</ul>
</li>
<li>没有主动权</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_8-跨域的解决方法" tabindex="-1"><a class="header-anchor" href="#_8-跨域的解决方法" aria-hidden="true">#</a> 8. <strong>跨域的解决方法</strong></h3>
<ul>
<li>
<p>前端解决跨域的方法：<strong>isonp</strong></p>
<ul>
<li>缺点：需要后台配合</li>
</ul>
</li>
<li>
<p>后台解决跨域的方法：<strong>CORS</strong></p>
<ul>
<li>给后端资源设置允许请求</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>header('Access-Control-Allow-Origin:*');//允许所有来源访问
header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>服务器请求数据</strong></p>
<ul>
<li>服务器代理</li>
<li>原理：
<ul>
<li>客户端a，请求服务端B的数据，跨域</li>
<li>自己搭建一个服务器A，请求服务端B的数据
<ul>
<li>没有经过浏览器，没有跨域，直接拿到数据</li>
<li>数据保存在服务器A中</li>
</ul>
</li>
<li>客户端a，请求自己的服务器A，没有跨域</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="promise-承诺" tabindex="-1"><a class="header-anchor" href="#promise-承诺" aria-hidden="true">#</a> Promise - 承诺</h2>
<ul>
<li>ES6新增的本地对象，需要new之后才能使用</li>
</ul>
<h3 id="意义-1" tabindex="-1"><a class="header-anchor" href="#意义-1" aria-hidden="true">#</a> 意义</h3>
<ul>
<li>异步套异步的程序称之为回调地狱
<ul>
<li>回调地狱可以解决异步中存在的异步的问题
<ul>
<li>有递归的逻辑，极其的消耗性能</li>
<li>不方便维护</li>
<li>伤害了代码的可读性</li>
</ul>
</li>
<li>promise是ES6中提出的解决回调地狱的方案</li>
</ul>
</li>
</ul>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3>
<pre><code>```js
	var p = new promise((resolve,reject)=&gt;{
		//promose已完成，由then的第一个参数传递
		//reject未完成，由catch的参数或then的第二个参数传递
	})
	p.then(()=&gt;{})//处理成功
	p.catch(()=&gt;[])//处理失败
```
</code></pre>
<h3 id="promise的方法" tabindex="-1"><a class="header-anchor" href="#promise的方法" aria-hidden="true">#</a> promise的方法</h3>
<ul>
<li>then和catch是promise实例的方法
<ul>
<li>then和catch的回调函数，返回值可以是一个新的promise对象</li>
<li>如果返回值是新的promise对象，可以在当前then或catch后继续连缀处理新的promise对象的状态</li>
</ul>
</li>
<li>all和race是promise构造函数的批处理方法，执行结果也是promise对象，可以被then或catch处理成功或失败的状态
<ul>
<li>all：全部请求结束，参数是数组</li>
<li>race：只要有一个请求结束，参数是数组</li>
</ul>
</li>
<li>promise的作用<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token comment">//开启承诺</span>
		<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token comment">//正在进行（异步程序）</span>
		<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token comment">//正在进行（异步程序）</span>
		
		promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//批处理成功</span>
		promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//批处理失败</span>
		
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//处理成功</span>
	p<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//处理失败</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储" aria-hidden="true">#</a> 本地存储</h2>
<h3 id="概念-5" tabindex="-1"><a class="header-anchor" href="#概念-5" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>本地：非服务器</li>
<li>存储：存数据</li>
<li>并不是所有数据都需要存在服务器，如果非要存在服务器，会增加服务器的负担，也可以将数据存在客户端（本地存储技术）</li>
<li>本地存储技术
<ul>
<li>cookie</li>
<li>localstorage</li>
<li>sessionstorage</li>
</ul>
</li>
</ul>
<h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3>
<ol>
<li>
<p>cookie产生的原因</p>
<ul>
<li>通信协议
<ul>
<li>Ip：用来识别接入互联网的每台机器的唯一标识</li>
<li>TCP/UDP：传输底层的数据包
<ul>
<li>TCP：可靠的传输协议，三次握手协议，面向连接的协议</li>
<li>UDP：不可靠的协议，面向数据包的协议</li>
</ul>
</li>
<li>FTP：用来传输文件，客户端向服务器上传/下载文件</li>
<li>HTTP：传输网页的协议，超文本传输协议，无状态协议
<ul>
<li>无状态：没有记忆</li>
<li>会话跟踪技术：用来记录每次会话话期间产生的所有需要记录的信息
<ul>
<li>cookie</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>cookie</p>
<ul>
<li>会话跟踪技术：用来记录每次会话期间所产生的所有需要记录的信息</li>
<li>数据记录到哪
<ul>
<li>客户端的浏览器的缓存中</li>
<li>会随着http协议发往服务器</li>
</ul>
</li>
</ul>
</li>
<li>
<p>cookie数据的特点</p>
<ul>
<li>只可以文本（字符）</li>
<li>大小限制：4k~</li>
<li>数量限制：50条~</li>
<li>不允许跨域，不允许跨路径</li>
<li>时间限制：默认是会话级，可以指定时间</li>
<li>建议：真实项目中，不要在cookie中直接存储铭感信息。安全原则</li>
</ul>
</li>
<li>
<p>cookie的使用</p>
<ul>
<li>document.cookie
<ul>
<li>字符型数据</li>
<li>一次只能存一条</li>
<li>数据中包含名字和值，和配置信息</li>
<li><code v-pre>document.cookie = &quot;key=val;path=路径;expires=&quot;+时间对象+&quot;;domian=服务器（127.0.0.1）&quot;</code></li>
</ul>
</li>
<li><strong>注</strong>：本地储存可以不依赖服务器，但是因为cookie会默认发往服务器，所以cookie最好在服务器环境下使用</li>
</ul>
</li>
<li>
<p>cookie的封装</p>
<ul>
<li>设置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>val<span class="token punctuation">,</span>ops<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> expires <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ops<span class="token punctuation">.</span>expires<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            d<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>ops<span class="token punctuation">.</span>expires<span class="token punctuation">)</span>
            expires <span class="token operator">=</span> <span class="token string">";expires=`"</span><span class="token operator">+</span>d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> path <span class="token operator">=</span> ops<span class="token punctuation">.</span>path <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">;path=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ops<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expires<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>获取</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"; "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"="</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">===</span>key<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"="</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>删除</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>ops<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ops<span class="token punctuation">.</span>expires <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token function">setCookie</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>ops<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> storage</h3>
<ol>
<li>特点
<ul>
<li>只可以文本（字符）</li>
<li>大小限制：2M~</li>
<li>数量限制：50+~</li>
<li>时间限制：
<ul>
<li>localStorage：永久级</li>
<li>sessionStorage：会话级</li>
</ul>
</li>
</ul>
</li>
<li>localStorage</li>
</ol>
<ul>
<li>永久级，没有时间，不能设置时间</li>
<li>HTMl5新增的API
<ul>
<li>localStorage是window的子对象</li>
<li>自身可以作为对象使用，键值对</li>
<li>window.localStorage</li>
<li>window.localStorage.user = &quot;admin&quot;</li>
<li>window.localStorage[&quot;pass&quot;] = &quot;123&quot;</li>
</ul>
</li>
<li>localstorage自带的方法
<ul>
<li>localStorage.setItem(&quot;a&quot;,&quot;10&quot;);	添加</li>
<li>localStorage.getItem(&quot;a&quot;);		获取</li>
<li>locolStorage.removeItem(&quot;a&quot;);		删除</li>
<li>localstorage.clear();				清除所有</li>
</ul>
</li>
</ul>
<ol start="3">
<li>sessionStorage</li>
</ol>
<ul>
<li>会话级，没有时间，不能设置时间
<ul>
<li>HTMl5新增的API</li>
<li>sessionStorage是window的子对象</li>
<li>自身可以作为对象使用，键值对</li>
<li>window.sessionStorage</li>
<li>window.sessionStorage.user = &quot;admin&quot;</li>
<li>window.sessionStorage[&quot;pass&quot;] = &quot;123&quot;</li>
</ul>
</li>
<li>sessionstorage自带的方法
<ul>
<li>sessionStorage.setItem(&quot;a&quot;,&quot;10&quot;);	添加</li>
<li>sessionStorage.getItem(&quot;a&quot;);		    获取</li>
<li>sessionStorage.removeItem(&quot;a&quot;);	 删除</li>
<li>sessionStorage.clear();				      清除所有</li>
</ul>
</li>
</ul>
<ol start="4">
<li>storage事件</li>
</ol>
<ul>
<li>浏览器（window）的事件</li>
<li>检测storage的变化</li>
<li>不会触发当前页面的事件，触发的是别的页面的事件</li>
<li>有兼容，兼容运行环境，只能在服务器中运行</li>
</ul>
<h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> JQuery</h1>
<h2 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></li>
<li>特点
<ul>
<li>jQuery是一个快速，小型且功能丰富的JavaScript库。通过易于使用的API（可在多种浏览器中使用），它使HTML文档的遍历和操作，事件处理，动画和Ajax等事情变得更加简单。兼具多功能性和可扩展性，jQuery改变了数百万人编写JavaScript的方式</li>
<li>写的更少，做的更多</li>
</ul>
</li>
</ul>
<h2 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h2>
<ul>
<li>原生DOM对象的方法不能与jq对象的方法混用
<ul>
<li>jq选择器返回的都是数组，但是可以在jq的方法中直接使用</li>
</ul>
</li>
<li>转换
<ul>
<li>原生转jq：$(&quot;ele&quot;)
<ul>
<li>将原生的DOM的对象传给jq，返回值就是转换结果</li>
</ul>
</li>
<li>jq转原生
<ul>
<li>通过索引解析数组：$(&quot;box&quot;)[0]</li>
<li>通过专属的方法get解析数组：$(&quot;box&quot;).get(0)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="css相关" tabindex="-1"><a class="header-anchor" href="#css相关" aria-hidden="true">#</a> css相关</h3>
<ul>
<li>$()/JQuery()
<ul>
<li>传字符参数</li>
</ul>
</li>
<li>$(&quot;#box&quot;)：id选择器（失明特征，只选择一个）</li>
<li>$(&quot;.box&quot;)：class选择器</li>
<li>$(&quot;div&quot;)：标签选择器</li>
<li>$(&quot;.box[a=abc]&quot;)：属性选择器</li>
<li>frist：第一个</li>
<li>last：最后一个</li>
<li>eq()：第几个（从0开始）</li>
<li>even：奇数</li>
<li>odd：偶数</li>
<li>not()：除了此条件</li>
<li>contains(txt)：内容包含txt的</li>
<li>empty：内容为空</li>
<li>hidden：隐藏的元素</li>
<li>visible：显示的元素</li>
<li>addClass：添加属性</li>
<li>removeClass：删除属性</li>
</ul>
<h3 id="jq特色" tabindex="-1"><a class="header-anchor" href="#jq特色" aria-hidden="true">#</a> jq特色</h3>
<ul>
<li>find：后代  相当于css的空格</li>
<li>children：子  相当于css的&gt;</li>
<li>next：下一个同级元素 	相当于css的+</li>
<li>nextAll：下面所有同级	相当于css的~</li>
<li>nextAllUnnitl：下面所有同级，参数为区间结束，不包括参数</li>
<li>prev：上一个同级元素</li>
<li>prevAll：上面所有</li>
<li>prevAllUnitl()：上面所有区间，参数为区间结束，不包括参数</li>
<li>has()：符合条件的后代元素</li>
<li>parent：单个父级元素</li>
<li>parents：所有父级元素</li>
<li>parentUnitl()：父级区间，参数为区间结束，不包括参数</li>
<li>siblings：除自己外所有的兄弟元素</li>
</ul>
<h2 id="jq的动画" tabindex="-1"><a class="header-anchor" href="#jq的动画" aria-hidden="true">#</a> jq的动画</h2>
<ul>
<li>
<p>内置动画</p>
<ul>
<li>左上角动画（参数1：动画时间，参数2：动画执行完毕的事件）
<ul>
<li>hide：隐藏
<ul>
<li>show：显示</li>
<li>toggle：隐藏/显示</li>
</ul>
</li>
</ul>
</li>
<li>上拉下拉（参数1：动画时间，参数2：动画执行完毕的事件）
<ul>
<li>slideUp：上拉隐藏</li>
<li>slideDown：下拉显示</li>
<li>slideToggle：上拉/下拉</li>
</ul>
</li>
<li>淡出淡入（参数1：动画时间，参数2：动画执行完毕的事件）
<ul>
<li>fadeOut：淡出隐藏</li>
<li>fadeIn：淡入显示</li>
<li>fadeToggle：淡出淡入</li>
</ul>
</li>
<li>透明度（参数1：动画时间，参数2：透明度，参数3：函数）</li>
</ul>
</li>
<li>
<p>自定义动画</p>
<ul>
<li>animate()
<ul>
<li>参数1：对象（需要设置的css属性，支持字符，数值，+=：原来的参数加上设置的参数）</li>
<li>参数2：毫秒数，可选</li>
<li>参数3：动画执行结束后，可选</li>
</ul>
</li>
</ul>
</li>
<li>
<p>动画的执行顺序</p>
<ul>
<li>jq中在一个动画结束后开启下一个动画的实现方法
<ul>
<li>回调函数</li>
<li>单独开启</li>
<li>连缀执行</li>
</ul>
</li>
<li><strong>jq中动画与动画时同步执行</strong></li>
<li><strong>jq中动画与其他方法是异步执行</strong></li>
<li><strong>queue</strong>
<ul>
<li>参数：函数</li>
<li>将此函数作为前一方法的回调函数</li>
</ul>
</li>
</ul>
</li>
<li>
<p>动画的停止和延迟</p>
<ul>
<li>停止：stop()
<ul>
<li>参数1：布尔值（等待中动画）
<ul>
<li>false：不清除列队（默认）</li>
<li>true：清除列队</li>
</ul>
</li>
<li>参数2：布尔值（当前动画）
<ul>
<li>false：停止当前（默认值）</li>
<li>true：直接到目标，神略动画过程</li>
</ul>
</li>
</ul>
</li>
<li>延迟：delay()
<ul>
<li>参数：要延迟的毫秒数</li>
</ul>
</li>
<li><strong>动画是同步执行，同步执行事件同时开启多个，会产生队列</strong></li>
<li>动画的队列
<ul>
<li>当前动画正在执行</li>
<li>后面还有等待的动画</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="jq的dom操作" tabindex="-1"><a class="header-anchor" href="#jq的dom操作" aria-hidden="true">#</a> jq的DOM操作</h2>
<h3 id="属性操作" tabindex="-1"><a class="header-anchor" href="#属性操作" aria-hidden="true">#</a> 属性操作</h3>
<h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4>
<ul>
<li>html：标签的内容，不包括标签   相当于innerHTML
<ul>
<li>无参数：获取内容</li>
<li>参数：字符<code v-pre>&lt;div&gt;</code>，加结束标签的话可以直接添加内容</li>
<li>可以解析标签</li>
</ul>
</li>
<li>text：标签内的文本信息    相当于innerTEXT
<ul>
<li>无参数：标签内的文本内容</li>
<li>参数：字符，要替换成的文本</li>
<li>不能解析标签</li>
</ul>
</li>
<li>val：表单的内容     相当于value
<ul>
<li>无参数：获取值</li>
<li>有参数：将参数内容赋值到表单的value</li>
</ul>
</li>
<li>removeClass：删除元素的class
<ul>
<li>只删除参数中的class，不全部删除</li>
</ul>
</li>
<li>addClass：添加class
<ul>
<li>在原有的基础上继续增加，不覆盖</li>
</ul>
</li>
<li>toggleClass：自动添加或删除
<ul>
<li>如果有参数的class属性就删除，没有就设置</li>
</ul>
</li>
<li>css：设置样式
<ul>
<li>参数：
<ul>
<li>一个字符：获取样式</li>
<li>一个数组：获取样式</li>
<li>两个字符：设置样式</li>
<li>一个对象：设置样式</li>
</ul>
</li>
</ul>
</li>
<li>attr：设置自定义属性
<ul>
<li>参数1：属性名</li>
<li>参数2：属性值</li>
<li>只有一个参数时，获取</li>
<li>支持一个对象，同时设置多个自定义参数</li>
</ul>
</li>
<li>removeAttr：删除自定义属性
<ul>
<li>参数：要删除的属性名</li>
</ul>
</li>
<li>each：遍历对象
<ul>
<li>$.each(obj,function(index,value){
console.log(index, value)
})</li>
</ul>
</li>
</ul>
<h4 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h4>
<ul>
<li>width：宽度
<ul>
<li>只包含width</li>
</ul>
</li>
<li>innerWidth：包含内边距的宽度
<ul>
<li>width+padding</li>
</ul>
</li>
<li>outerWidth：包含宽度，内边距，边框
<ul>
<li>border+width+padding</li>
</ul>
</li>
<li>offset：元素相对于浏览器的宽度
<ul>
<li>定位+margin</li>
<li>返回一个对象，包含top，left</li>
</ul>
</li>
<li>position：相对于父元素偏移的距离
<ul>
<li>只有定位</li>
<li>返回一个对象，包含top，left</li>
</ul>
</li>
<li>scrollTop：滚动条的值
<ul>
<li>无参数：获取</li>
<li>有参数：设置</li>
</ul>
</li>
<li>scrollWidth：滚动条的值
<ul>
<li>无参数：获取</li>
<li>有参数：设置</li>
</ul>
</li>
</ul>
<h4 id="元素的增删改查" tabindex="-1"><a class="header-anchor" href="#元素的增删改查" aria-hidden="true">#</a> 元素的增删改查</h4>
<ul>
<li>创建节点
<ul>
<li><code v-pre>$(&quot;&lt;p&gt;123&lt;p&gt;&quot;)</code></li>
<li>直接写</li>
</ul>
</li>
<li>append：插入元素内最后
<ul>
<li>$(&quot;.box&quot;).append(p)</li>
<li>把p插入到box</li>
</ul>
</li>
<li>appendTo:插入元素内最后
<ul>
<li>p.appendTo($(&quot;.box&quot;))</li>
<li>把p插入到box</li>
</ul>
</li>
<li>prepend：插入元素内部前</li>
<li>prependTo：插入元素内部前</li>
<li>after:插入指定元素后</li>
<li>before：插入指定元素前</li>
<li><strong>clone</strong>：复制元素
<ul>
<li>参数为true时复制元素的事件</li>
<li><code v-pre>$('body').append($('div').clone(true))</code></li>
<li>复制一个节点添加到 HTML</li>
</ul>
</li>
<li>remove：删除元素节点</li>
<li>empty：删除匹配的元素集合中所有的子节点</li>
<li>replaceWith：替换元素</li>
</ul>
<h2 id="jq的事件" tabindex="-1"><a class="header-anchor" href="#jq的事件" aria-hidden="true">#</a> jq的事件</h2>
<ul>
<li>jq的事件都是DOM2级事件绑定</li>
</ul>
<h3 id="常规绑定" tabindex="-1"><a class="header-anchor" href="#常规绑定" aria-hidden="true">#</a> 常规绑定</h3>
<ul>
<li>选择器.click(function(){})</li>
<li>原生的方法没有on</li>
<li>jq特有的ready事件
<ul>
<li>只加载结构，不加载资源</li>
<li><code v-pre>$(function(){})</code></li>
<li><code v-pre>$().ready(function(){})</code></li>
</ul>
</li>
</ul>
<h3 id="on绑定" tabindex="-1"><a class="header-anchor" href="#on绑定" aria-hidden="true">#</a> on绑定</h3>
<ul>
<li><code v-pre>$().on(&quot;click.a&quot;,&quot;li&quot;,function(){})</code>
<ul>
<li>参数1：事件，可以给后面的执行函数起名字，加载点（.）后</li>
<li>参数2：事件委托时加，要委托的元素，（可选）</li>
<li>参数3：事件处理函数</li>
</ul>
</li>
<li>用off删除on绑定的事件
<ul>
<li>$().off(&quot;click.a&quot;)</li>
</ul>
</li>
<li>on绑定事件委托
<ul>
<li><code v-pre>$().on(&quot;click.a&quot;,&quot;li&quot;,function(){})</code></li>
<li>this指向当前事件目标</li>
</ul>
</li>
</ul>
<h3 id="hover绑定" tabindex="-1"><a class="header-anchor" href="#hover绑定" aria-hidden="true">#</a> hover绑定</h3>
<ul>
<li>鼠标进入和离开</li>
<li><code v-pre>$().hover(function(){},function(){})</code>
<ul>
<li>参数1：鼠标进入事件</li>
<li>参数2：鼠标离开事件</li>
<li>封装的是mouseenter/mouseleave（没有事件冒泡）</li>
</ul>
</li>
</ul>
<h3 id="one绑定" tabindex="-1"><a class="header-anchor" href="#one绑定" aria-hidden="true">#</a> one绑定</h3>
<ul>
<li>绑定一个一次性事件</li>
</ul>
<h3 id="bind绑定" tabindex="-1"><a class="header-anchor" href="#bind绑定" aria-hidden="true">#</a> bind绑定</h3>
<ul>
<li>jq3删除，不可以事件委托</li>
<li><code v-pre>$().bind(&quot;click.a&quot;,function(){})</code>
<ul>
<li>参数1：事件，可以给后面的执行函数起名字，加载点（.）后</li>
<li>参数2：事件处理函数</li>
</ul>
</li>
<li>用unbind删除bind绑定的事件
<ul>
<li>$().unbind(&quot;click.a&quot;)</li>
</ul>
</li>
</ul>
<h3 id="模拟事件执行" tabindex="-1"><a class="header-anchor" href="#模拟事件执行" aria-hidden="true">#</a> 模拟事件执行</h3>
<ul>
<li><strong>trigger</strong>:模拟事件执行</li>
<li><strong>triggerHandler</strong>模拟事件执行，没有事件冒泡</li>
<li>轮播图自动下一张<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"切换下一张轮播图"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    会触发事件冒泡
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//不会触发事件冒泡</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">triggerHandler</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="jq的ajajx" tabindex="-1"><a class="header-anchor" href="#jq的ajajx" aria-hidden="true">#</a> jq的ajajx</h2>
<ul>
<li>ajax的返回值是一个伪promise的对象</li>
<li>可以使用promise类似的使用方法</li>
<li>jq的ajax请求数据成功后会有3个返回值
<ul>
<li>成功res，stat，xhr
<ul>
<li>数据，状态，xhr对象</li>
</ul>
</li>
<li>失败xhr，stat，res
<ul>
<li>xhr对象，状态，数据</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="上层方式" tabindex="-1"><a class="header-anchor" href="#上层方式" aria-hidden="true">#</a> 上层方式</h3>
<ul>
<li>$.getJSON():获取json</li>
<li>$.getScript():获取script，实现跨域</li>
<li>$().load():获取html数据</li>
</ul>
<h3 id="中层方式" tabindex="-1"><a class="header-anchor" href="#中层方式" aria-hidden="true">#</a> 中层方式</h3>
<ul>
<li>$.get()：只能get</li>
<li>$.post()：只能post<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"http://localhost/ws2009/jq-ajax/data/data.php"</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">"admin"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// console.log(p);</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="底层方式" tabindex="-1"><a class="header-anchor" href="#底层方式" aria-hidden="true">#</a> 底层方式</h3>
<ul>
<li>
<p>$.ajax():</p>
<ul>
<li>参数：对象
<ul>
<li>async:true（是否异步，默认true，异步）</li>
<li>url:&quot;data.php&quot;（请求数据的地址）</li>
<li>type:&quot;get/post&quot;（传输类型）</li>
<li>data:{user:&quot;admin&quot;}（发送的消息）</li>
<li>success:(res,stat,xhr)=&gt;{}（请求成功）</li>
<li>error:(xhr,stat,res)=&gt;{}（请求失败）</li>
<li>timeout:100（超时）</li>
<li>beforeSend:()=&gt;{}（请求之前要干什么）</li>
<li>dataTye:&quot;jsonp&quot;（数据转换类型，一般不用，jsonp时写）</li>
<li>jsonp:&quot;callback&quot;（后端返回数据的函数名，确定时写）</li>
<li>global:true（ajax的全局状态（生命周期）默认true）</li>
</ul>
</li>
</ul>
</li>
<li>
<p>ajax的公共配置</p>
<ul>
<li>$.ajaxSetup()</li>
<li>当ajax请求数据时有重复的代码时可用</li>
<li>例：请求同一个地址...<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajaxSetup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"http://localhost/ws2009/jq-ajax/data/data.php"</span><span class="token punctuation">,</span>
<span class="token function-variable function">success</span><span class="token operator">:</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>ajax的全局状态的全局函数类型</p>
<ul>
<li>ajaxStart：xhr实例创建前</li>
<li>ajaxSend：xhr创建成功，发送给服务器之前</li>
<li>ajaxSuccess：请求成功，且包含成功的状态码</li>
<li>ajaxError：请求失败，且包含失败的状态码</li>
<li>ajaxComplete：请求完毕且数据已返回</li>
<li>ajaxStop：请求结束</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ajaxStop</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"ajaxStop"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
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
<h2 id="表单序列化" tabindex="-1"><a class="header-anchor" href="#表单序列化" aria-hidden="true">#</a> 表单序列化</h2>
<ul>
<li>$(&quot;.form&quot;).serialize()
<ul>
<li>将表单转换成url?后的格式</li>
<li>必须在form标签内的input，必须有name</li>
</ul>
</li>
<li>$.param
<ul>
<li>将对象转换成url?后的格式</li>
</ul>
</li>
</ul>
<h2 id="jq的插件" tabindex="-1"><a class="header-anchor" href="#jq的插件" aria-hidden="true">#</a> jq的插件</h2>
<h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3>
<ul>
<li>是一种遵循一定规范的应用接口编写出来的程序</li>
<li>表示某个功能的封装</li>
</ul>
<h3 id="现有插件的使用" tabindex="-1"><a class="header-anchor" href="#现有插件的使用" aria-hidden="true">#</a> 现有插件的使用</h3>
<ul>
<li>使用方式：jq的插件
<ol>
<li>先有jq（先引入jq）</li>
<li>再有插件（引入插件）</li>
<li>皮肤包或语言包</li>
<li>使用插件</li>
</ol>
</li>
<li>表单验证插件：validate</li>
<li>cookie插件：cookie</li>
<li>分页插件：pageAction</li>
</ul>
<h3 id="开发自己的插件" tabindex="-1"><a class="header-anchor" href="#开发自己的插件" aria-hidden="true">#</a> 开发自己的插件</h3>
<ul>
<li>如何开发jq的插件
<ol>
<li>向jq绑定自定义方法或属性
<ul>
<li>$.fn:jq的DOMDOM对象所在的公共区域对象</li>
<li>extend
<ul>
<li>$.extend		绑定为jq的全局方法（工具方法）</li>
<li>$.fn.extend	绑定为jq的局部方法（DOM方法）</li>
</ul>
</li>
<li>对象操作
<ul>
<li>$.xxx = function(){}		（工具方法）</li>
<li>$.fn.xxx = function(){}	（DOM方法）</li>
</ul>
</li>
</ul>
</li>
<li>独立的js文件
<ul>
<li>起名：框架名.插件名.版本号.js</li>
<li>JQuery.Banner.1.0.js</li>
</ul>
</li>
<li>开匿名函数，前后加分号</li>
<li>开严格模式</li>
<li>美元符$的私有化
<ul>
<li><code v-pre>(function($){})(JQuery)</code></li>
<li>将JQuery作为参数传入匿名函数，$接受</li>
<li>防止其他js重置$</li>
</ul>
</li>
<li>开始向jq绑定自定义方法或属性</li>
<li>开发功能↓</li>
</ol>
</li>
<li>开发插件
<ul>
<li>banner插件
<ul>
<li>参数处理</li>
<li>报错处理</li>
<li>选择器处理</li>
<li>业务逻辑处理</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h1>
<h2 id="node的介绍" tabindex="-1"><a class="header-anchor" href="#node的介绍" aria-hidden="true">#</a> node的介绍</h2>
<ol>
<li>后台语言，类似于php
<ul>
<li>php使用方法：安装apache环境，php的语言支持，php代码文件，操作系统</li>
<li>node使用方法：安装node环境，node的语言支持，node代码文件，操作系统</li>
</ul>
</li>
<li>node的历史
<ul>
<li>V8引擎：c++搭建（谷歌开源）</li>
<li>nodejs（服务端的js）== javascript（客户端的js）
<ul>
<li>只是运行环境不同，语法完全一致</li>
</ul>
</li>
</ul>
</li>
<li>node的易用性
<ul>
<li>node的服务器是php的86倍</li>
<li>node的学习成本低，js的语法</li>
<li>node的学习资源相对不多</li>
<li>中小型企业项目后端node不多，大型公司或新项目可以采取node</li>
</ul>
</li>
</ol>
<h2 id="node的运行方式" tabindex="-1"><a class="header-anchor" href="#node的运行方式" aria-hidden="true">#</a> node的运行方式</h2>
<ol>
<li><strong>没有浏览器</strong>
<ul>
<li>没有BOM（window），没有DOM（document）</li>
</ul>
</li>
<li>运行在node环境中
<ul>
<li>将node环境安装在计算机的操作系统内</li>
<li>通过操作系统的命令提示框，通过命令调用node的运行环境，执行node代码，运行node文件
<ul>
<li>win：开始菜单-&gt;附件-&gt;命令提示符</li>
<li>mac：终端</li>
<li>linux：终端</li>
</ul>
</li>
<li>第三方软件，封装的命令提示框的入口
<ul>
<li>vsCode：终端</li>
<li>HB：终端</li>
<li>git：Git bash（linux的终端）</li>
</ul>
</li>
</ul>
</li>
<li>执行文件（运行功能）
<ul>
<li>首先在命令窗口找到要执行的node文件
<ul>
<li>系统命令窗口的路径切换（系统命令）
<ul>
<li>盘符切换：<code v-pre>盘符:</code></li>
<li>打开文件夹：<code v-pre>cd 文件夹名</code></li>
<li>查看当前文件夹中所肉文件：<code v-pre>dir</code></li>
<li>清屏：<code v-pre>cls</code></li>
</ul>
</li>
</ul>
</li>
<li>通过node命令执行文件
<ul>
<li><code v-pre>node 文件名</code></li>
</ul>
</li>
</ul>
</li>
<li>命令执行（用来测试代码）
<ul>
<li>打开命令窗口</li>
<li>进入node解析器
<ul>
<li><code v-pre>node </code>（node空格）</li>
</ul>
</li>
<li>写代码，回车运行</li>
</ul>
</li>
</ol>
<h2 id="node的语法" tabindex="-1"><a class="header-anchor" href="#node的语法" aria-hidden="true">#</a> node的语法</h2>
<ol>
<li>基础语法
<ul>
<li>全面支持ECMAScript6（除了ES6的模块化）</li>
<li><strong>没有BOM(window)，没有DOM(document)</strong></li>
<li>事件
<ul>
<li>不是人机交互行为事件</li>
<li>服务端的事件：数据、加载、请求...</li>
</ul>
</li>
</ul>
</li>
<li>特点语法
<ul>
<li>模块↓</li>
</ul>
</li>
</ol>
<h2 id="node的模块化" tabindex="-1"><a class="header-anchor" href="#node的模块化" aria-hidden="true">#</a> node的模块化</h2>
<ul>
<li>模块化的使用
<ul>
<li>引入：
<ul>
<li>require(&quot;模块所在的文件名&quot;)</li>
</ul>
</li>
<li>暴露：
<ul>
<li><code v-pre>module.exports 要暴露的入口</code></li>
<li><code v-pre>exports 要暴露的入口</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> 内置模块</h3>
<ul>
<li>直接引入，就可以使用</li>
</ul>
<h3 id="第三方模块" tabindex="-1"><a class="header-anchor" href="#第三方模块" aria-hidden="true">#</a> 第三方模块</h3>
<ul>
<li>先下载，再引入，再使用</li>
</ul>
<h3 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> 自定义模块</h3>
<ul>
<li>先写，再暴露模块，再引入，再使用
<ul>
<li>暴露关键字(属性)：exports</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//moduleA.js</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">rand</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>引入关键字(方法)：require()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//mian.js</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span>rand<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./moduleA.js"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="内置模块-1" tabindex="-1"><a class="header-anchor" href="#内置模块-1" aria-hidden="true">#</a> 内置模块</h2>
<ul>
<li>node官方封装好的功能模块，直接引入，即可使用</li>
<li><code v-pre>const 模块入口 = require(&quot;模块名&quot;)</code></li>
</ul>
<h3 id="http模块" tabindex="-1"><a class="header-anchor" href="#http模块" aria-hidden="true">#</a> http模块</h3>
<ul>
<li>服务器模块，开启web服务器
<ul>
<li>引入：<code v-pre>const http = require(&quot;http&quot;)</code></li>
<li>开启：<code v-pre>http.createServer((req,res)=&gt;{}).listen(&quot;3000&quot;,&quot;localhost&quot;,()=&gt;{})</code></li>
<li>使用：
<ul>
<li>开启服务器：createServer((req,res)=&gt;{})
<ul>
<li>参数：函数，该函数可接受两个参数
<ul>
<li>参数1：req，请求，前端到后台的信息</li>
<li>参数2：res，响应，后台到前端的信息</li>
</ul>
</li>
<li>返回值是一个一个对象</li>
</ul>
</li>
<li>监听服务器：listen(&quot;3000&quot;,&quot;localhost&quot;,()=&gt;{})
<ul>
<li>开启服务器的返回值的方法（可以连缀）</li>
<li>参数1：端口号</li>
<li>参数2：地址（可选，默认localhost）</li>
<li>参数3：函数，服务器开启成功执行的代码（可选）</li>
</ul>
</li>
<li>方法：
<ul>
<li>前端请求的地址：req.url</li>
<li>给前端发送的数据：res.write()</li>
<li>结束当前请求：res.end()  必须写在最后</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="fs模块" tabindex="-1"><a class="header-anchor" href="#fs模块" aria-hidden="true">#</a> fs模块</h3>
<ul>
<li>文件模块，提供了文件的操作
<ul>
<li>引入：<code v-pre>const fs = require(&quot;fs&quot;)</code></li>
<li>使用:
<ul>
<li>读取文件
<ul>
<li>fs.readFile(&quot;文件路径&quot;,&quot;utf-8&quot;,(err,data)=&gt;{})<strong>异步</strong>
<ul>
<li>参数1：要读取的文件路径</li>
<li>参数2：字符编码（可选，默认buffer流）</li>
<li>参数3：函数，该函数可以接受两个参数
<ul>
<li>参数1：err，请求失败时的错误信息</li>
<li>参数2：data，请求到的数据</li>
</ul>
</li>
</ul>
</li>
<li>fs.readFlieSycn(&quot;文件路径&quot;,&quot;utf-8&quot;)<strong>同步</strong>
<ul>
<li>参数1：要读取的文件路径</li>
<li>参数2：字符编码（可选，默认buffer流）</li>
<li>返回值为请求到的数据</li>
</ul>
</li>
</ul>
</li>
<li>写入文件
<ul>
<li>fs.writeFlie(&quot;文件路径&quot;,str,(err)=&gt;{})<strong>异步</strong>
<ul>
<li>参数1：要写入的文件路径的地址</li>
<li>参数2：要写入的文件的内容</li>
<li>参数3：函数，该函数接收一个参数
<ul>
<li>参数：err，写入失败的错误信息</li>
</ul>
</li>
</ul>
</li>
<li>fs.writeFlieSycn(&quot;文件路径&quot;,str)<strong>同步</strong>
<ul>
<li>参数1：要写入的文件路径的地址</li>
<li>参数2：要写入的文件的内容</li>
<li>返回值为undefined</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="url模块" tabindex="-1"><a class="header-anchor" href="#url模块" aria-hidden="true">#</a> url模块</h3>
<ul>
<li>url模块，解析url，将url字符解析成对象
<ul>
<li>引入：<code v-pre>const url = require(&quot;url&quot;)</code></li>
<li>使用：
<ul>
<li><code v-pre>const urlObj = url.parse(req.url,ture)</code>
<ul>
<li>参数1：要解析的url</li>
<li>参数2：布尔值，是否将解析后的query转成对象</li>
<li>返回值时一个解析后的对象</li>
</ul>
</li>
</ul>
</li>
<li>返回值的属性
|属性|含义|例子|
|-|-|-|
|protocol|协议| ’http‘                                                       |
|slashes|双斜杠|true|
|auth|作者|null|
|host|服务器+端口|'localhost:8002'|
|port|端口| '8002'                                                       |
|hostname|服务器|'localhost'|
|hash|锚点（哈希）|'#title'|
|search|数据|'?username=sdfsdf&amp;content=234234'|
|query|除了?的数据|'username=sdfsdf&amp;content=234234'|
|pathname|文件路径|/aaa'|
|path|地址+信息|'/aaa?username=sdfsdf&amp;content=234234'|
|href|完整地址|'http://localhost:8002/aaa?username=sdfsdf&amp;content=234234#title'|</li>
</ul>
</li>
</ul>
<h3 id="querystring模块" tabindex="-1"><a class="header-anchor" href="#querystring模块" aria-hidden="true">#</a> querystring模块</h3>
<ul>
<li>解析查询数据
<ul>
<li>引入：<code v-pre>const querystring = require(&quot;querystring&quot;)</code></li>
<li>使用：
<ul>
<li>querystring.parse(数据)</li>
<li>将数据转成对象
<ul>
<li>参数：要转换的数据</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="node的下载工具" tabindex="-1"><a class="header-anchor" href="#node的下载工具" aria-hidden="true">#</a> node的下载工具</h2>
<ol>
<li>npm:命令行下载工具 - <strong>包管理器</strong>
<ul>
<li>查看版本号：npm -v</li>
<li>生成package.json(项目的配置信息)：npm init</li>
<li>下载模块：npm install 模块名（npm i 模块名）
<ul>
<li>下载到全局：-g</li>
<li>下载到上线环境（运行依赖，项目依赖）：-S</li>
<li>下载到开发环境（开发依赖）：-D</li>
</ul>
</li>
<li>卸载模块：npm uninstall 模块名（npm uni 模块名）
<ul>
<li>安装到哪个位置就卸载对应位置的模块</li>
</ul>
</li>
</ul>
</li>
<li>npm的下载源
<ul>
<li>官网下载源：https://www.npmjs.com/（服务器在国外）
<ul>
<li>下载慢，不稳定，可能会被禁掉</li>
</ul>
</li>
<li>npm下载源管理工具：nrm
<ul>
<li>安装：npm i nrm -g</li>
<li>查看版本号：nrm -V</li>
<li>查看现有源列表：nrm ls</li>
<li>切换源：nrm use 源名</li>
<li>测试源速度：nrm test</li>
</ul>
</li>
</ul>
</li>
<li>npm下载常见失败解决方式：
<ul>
<li>超时错误，换网</li>
<li>下载失败：
<ul>
<li>卸载</li>
<li>清除缓存：npm clean cache -f</li>
<li>重新下载</li>
<li>以上还是失败：
<ul>
<li>删除：C:\Users\Administrator\AppData\Roaming\npm-cacha（缓存文件）</li>
<li>重新下载</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>总结
<ul>
<li>npm init</li>
<li>npm install 模块</li>
</ul>
</li>
</ol>
<h2 id="路由处理" tabindex="-1"><a class="header-anchor" href="#路由处理" aria-hidden="true">#</a> 路由处理</h2>
<ul>
<li>路由处理
<ul>
<li>php服务器的使用：安装集成工具，启动apache，找到根目录，写代码，就可以了</li>
<li>node服务器的使用：自己写，自己没写的功能都不存在！！！</li>
</ul>
</li>
</ul>
<h3 id="路由设计模式" tabindex="-1"><a class="header-anchor" href="#路由设计模式" aria-hidden="true">#</a> 路由设计模式</h3>
<ul>
<li>
<p>设计路由1（假设路由）√</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost:3000/api?type=login
http://localhost:3000/api?type=register
http://localhost:3000/api?type=goods
http://localhost:3000/api?type=user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设计路由2（假设路由）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost:3000/login
http://localhost:3000/register
http://localhost:3000/goods
http://localhost:3000/user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="利用node跨域" tabindex="-1"><a class="header-anchor" href="#利用node跨域" aria-hidden="true">#</a> 利用node跨域</h4>
<ul>
<li>利用node服务器搭建代理服务器实现ajax的跨域请求<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 处理前端过来的url，处理成真正要请求资源的url</span>

    <span class="token comment">// 再利用http或https模块发起请求</span>
    https<span class="token operator">/</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">resObj</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">// 解析请求到的对象，解析出数据</span>
        resObj<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token comment">// 利用当前服务器的响应头对象，将数据发给前端</span>
            res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp" aria-hidden="true">#</a> gulp</h1>
<ul>
<li>node的第三方模块</li>
<li>node的模块开发 - commonJs规范
<ul>
<li>暴露：module.exports</li>
<li>引入：require()</li>
</ul>
</li>
</ul>
<h2 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>做前端的<strong>自动化工程</strong>，前端自动化工具</li>
<li>基于node的前端自动化工具（基于流的前端自动化工具）</li>
<li>自动将文件进行压缩、合并、编译、解析等操作</li>
<li>类似于将项目打包</li>
<li>官网：https://www.gulpjs.com.cn/</li>
<li><strong>常用的前端工具</strong>：gulp，webpack，grunt，browserify</li>
<li>gulp的环境类似于工厂，项目类似于原料和产品
<ul>
<li>工厂的位置是固定的</li>
<li>原料和产品可以运输</li>
</ul>
</li>
</ul>
<h2 id="gulp的使用" tabindex="-1"><a class="header-anchor" href="#gulp的使用" aria-hidden="true">#</a> gulp的使用</h2>
<ol>
<li>
<p>下载</p>
<ul>
<li>安装全局的gulp：<code v-pre>npm i gulp -g</code>
<ul>
<li>测试：<code v-pre>gulp -v</code>可以查看全局的gulp版本号</li>
</ul>
</li>
<li>安装局部的gulp
<ul>
<li>先创建项目环境（文件夹）</li>
<li>使用命令窗口进入文件夹</li>
<li><code v-pre>npm i gulp -D</code>安装到开发环境</li>
<li>测试：<code v-pre>gulp -v</code>可以查看全局的gulp版本号</li>
</ul>
</li>
</ul>
</li>
<li>
<p>创建gulp官方指定的文件 ：<strong>gulpfile.js</strong></p>
</li>
<li>
<p>在gulpfile.js中引入gulp模块</p>
<ul>
<li><code v-pre>const gulp = require(&quot;gulp&quot;)</code></li>
</ul>
</li>
<li>
<p>配置gulpfile.js文件</p>
<ul>
<li>遵循node的模块化规范</li>
<li>定义功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>暴露模块</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  暴露的入口名</span>
exports<span class="token punctuation">.</span>say <span class="token operator">=</span> sayHello<span class="token punctuation">;</span>
   		<span class="token comment">//   要暴露的功能</span>
<span class="token comment">// 在执行时，通过say执行sayHello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>按需执行
<ul>
<li>在命令窗口输入：<code v-pre>gulp 入口名</code></li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 id="gulp的常用内置方法" tabindex="-1"><a class="header-anchor" href="#gulp的常用内置方法" aria-hidden="true">#</a> gulp的常用内置方法</h2>
<ul>
<li>src()		查找文件（参数：路径、字符串）</li>
<li>dest()	转存文件（参数：路径、要保存的路径）</li>
<li>watch()	监听文件的变化，执行功能（参数：路径、是个数组）</li>
<li>series()	批量执行，同步执行（参数：要批处理的函数名）</li>
<li>parallel()批量执行，异步执行（参数：要批处理的函数名）</li>
<li>pipe()	<strong>流对象的方法</strong>
<ul>
<li>管道方法，用于将流对象传入下一个操作</li>
<li>实现连缀执行</li>
<li>参数：要执行的方法</li>
</ul>
</li>
</ul>
<h2 id="文件路径的写法" tabindex="-1"><a class="header-anchor" href="#文件路径的写法" aria-hidden="true">#</a> 文件路径的写法</h2>
<ul>
<li>单个文件：直接文件全称</li>
<li>多个文件：使用数组包裹</li>
<li>当前文件夹下，所有文件：<code v-pre>&quot;文件夹/*&quot;</code></li>
<li>当前文件夹下，指定扩展名文件：<code v-pre>&quot;文件夹 /*.扩展名&quot;</code></li>
<li>当前文件夹下，多层子文件夹嵌套：<code v-pre>&quot;文件夹 /**/*&quot;</code></li>
<li>当前文件夹下，指定多个扩展名文件：<code v-pre>&quot;文件夹/*.{html,css}&quot;</code></li>
<li>当前文件夹下，除了莫格文件：<code v-pre>&quot;!src/pass.txt&quot;</code>(!路径)</li>
</ul>
<h2 id="gulp的插件" tabindex="-1"><a class="header-anchor" href="#gulp的插件" aria-hidden="true">#</a> gulp的插件</h2>
<ul>
<li>实现最终的项目处理</li>
<li>下载</li>
<li>引入</li>
<li>在gulp的功能中使用插件</li>
<li><strong>注意：gulp-uglify压缩不支持ES6语法，需要先将ES6转成ES5之后才能压缩</strong></li>
</ul>
<h2 id="es6转es5" tabindex="-1"><a class="header-anchor" href="#es6转es5" aria-hidden="true">#</a> ES6转ES5</h2>
<ul>
<li>
<p>gulp插件是没有ES6转ES5这个功能的</p>
<ul>
<li>babel才是住专门的编译工具</li>
<li>gulp只是提供了支持gulp的插件</li>
<li>最终的编译还是由bable完成</li>
</ul>
</li>
<li>
<p>安装gulp对babel支持</p>
<ul>
<li>npm install gulp-babel</li>
</ul>
</li>
<li>
<p>安装babel对ES6的支持</p>
<ul>
<li>npm install @babel/core</li>
</ul>
</li>
<li>
<p>安装说明，将ES6转成ES5</p>
<ul>
<li>npm install @babel/preset-env</li>
</ul>
</li>
<li>
<p>在gulpFile中使用</p>
<ul>
<li>引入gulp-babel</li>
</ul>
</li>
<li>
<p>定义ES6转ES5的功能</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">stfFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"src/js/*.js"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/env'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist/js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>stf <span class="token operator">=</span> stfFn<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="服务器插件" tabindex="-1"><a class="header-anchor" href="#服务器插件" aria-hidden="true">#</a> 服务器插件</h2>
<ul>
<li>服务器插件
<ul>
<li>gulp-connect</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//转存，拷贝</span>
<span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>connect<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//文件转存之后，触发connect插件的刷新功能</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>copy <span class="token operator">=</span> copy<span class="token punctuation">;</span>
<span class="token comment">//监听文件变化，实现自动拷贝</span>
<span class="token keyword">function</span> <span class="token function">autoCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">"./src/index.html"</span><span class="token punctuation">,</span>copy<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>autoCopy <span class="token operator">=</span> autoCopy<span class="token punctuation">;</span>
<span class="token comment">//开启服务器,服务器自动刷新</span>
<span class="token keyword">function</span> <span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    connect<span class="token punctuation">.</span><span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token string">"3333"</span><span class="token punctuation">,</span>        <span class="token comment">//端口</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span><span class="token string">"./dist"</span><span class="token punctuation">,</span>       <span class="token comment">//根目录</span>
        <span class="token literal-property property">livereload</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">//自动刷新，需要给拷贝功能开启每次拷贝都刷新</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xports<span class="token punctuation">.</span>server <span class="token operator">=</span> server<span class="token punctuation">;</span>
<span class="token comment">//自动刷新需要同时开启服务器与自动拷贝，所以要使用批处理，两个都是异步，所以要使用异步的parallel</span>
exports<span class="token punctuation">.</span>autoServer <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span>autoCopy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>跨域插件
<ul>
<li>http-proxy-middleware</li>
<li>是一个对象，有createProxyMiddleware属性，是一个函数，跨域时使用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//跨域服务器</span>
<span class="token keyword">function</span> <span class="token function">crossServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    connect<span class="token punctuation">.</span><span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token string">"3333"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span><span class="token string">"./dist"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">livereload</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">middleware</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">connect<span class="token punctuation">,</span> opt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>
                <span class="token comment">//跨域模块是一个对象，它的createProxyMiddleware属性是一个函数</span>
                proxy<span class="token punctuation">.</span><span class="token function">createProxyMiddleware</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token comment">//接受两个参数，1：前端请求跨域的标志；2：一个对象（配置信息）</span>
                    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://wanandroid.com/wxarticle'</span><span class="token punctuation">,</span>    <span class="token comment">//代理的目标地址</span>
                    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span>    <span class="token comment">//路径重写规则</span>
                        <span class="token string-property property">'^/api'</span><span class="token operator">:</span><span class="token string">''</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>crossServer <span class="token operator">=</span> crossServer<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>autoCross <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>crossServer<span class="token punctuation">,</span>autoCopy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>有先后顺序，先有服务器插件才有跨域</li>
</ul>
<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h1>
<h2 id="介绍-5" tabindex="-1"><a class="header-anchor" href="#介绍-5" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>高效的css预编译语言</li>
<li>但是sass没有被任何浏览器支持，所以，sass在被投入项目使用之前一定要编译成css</li>
<li>sass有ruby公司开发的，sass的文件是<code v-pre>.sass</code>后缀，这种文件最大的特点是不支持花括号和分号，对前端不友好</li>
<li>所以ruby公司开发了另一种写法，是<code v-pre>.scss</code>的后缀，这种文件全面支持css语法</li>
<li>市面上的搞高效的预编译语言还有less</li>
</ul>
<h2 id="如何将sass编译成css" tabindex="-1"><a class="header-anchor" href="#如何将sass编译成css" aria-hidden="true">#</a> 如何将sass编译成css</h2>
<ul>
<li>编辑器的插件（vsCode）</li>
<li>在线编译：https://www.sassmeister.com/</li>
<li>借助前端自动化工具（gulp），配置sass转css的环境
<ul>
<li>gulp滋自身没编译sass的功能</li>
<li>需要借助gulp的第三方插件：gulp-sass/gulp-sass-china</li>
</ul>
</li>
<li>配置gulp中的sass编译功能
<ul>
<li>引入：<code v-pre>const sass = require(&quot;gulp-sass&quot;)</code></li>
<li>定义编译功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//配置sass转css</span>
<span class="token keyword">function</span> <span class="token function">stc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./src/**/*.scss"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">sass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span>sass<span class="token punctuation">.</span>logError<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//sass抛出错误事件，不会在自动保存时卡掉</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist/project-sass"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>stc <span class="token operator">=</span> stc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>为了编译方便、自动化，开启监听</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//配置sass自动转css</span>
<span class="token keyword">function</span> <span class="token function">autoStc</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">"./src/**/*.scss"</span><span class="token punctuation">,</span>stc<span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>autoStc <span class="token operator">=</span> autoStc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="sass的语法" tabindex="-1"><a class="header-anchor" href="#sass的语法" aria-hidden="true">#</a> sass的语法</h2>
<ol>
<li>注释
<ul>
<li><code v-pre>&quot;/* */&quot;</code>：多行注释，会被sass编译位css</li>
<li><code v-pre>&quot;//&quot;</code>：单行注释，不会被sass编译</li>
</ul>
</li>
<li>变量
<ul>
<li>
<p><strong>单值变量</strong></p>
</li>
<li>
<p><code v-pre>$</code>声明变量</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>多值变量</strong></p>
</li>
<li>
<p><code v-pre>$</code>声明变量</p>
</li>
<li>
<p>变量内的值索引从1开始，使用nth方法遍历变量</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red green yellow<span class="token punctuation">;</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box3</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>list变量</strong></p>
</li>
<li>
<p>相当于二维数组</p>
</li>
<li>
<p><code v-pre>@each in </code>遍历数组是的方法</p>
</li>
<li>
<p>scss方法使用时必须加@</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$arr</span></span><span class="token punctuation">:</span><span class="token punctuation">(</span>box<span class="token punctuation">,</span>20<span class="token punctuation">,</span>30<span class="token punctuation">,</span>red<span class="token punctuation">)</span><span class="token punctuation">(</span>cont<span class="token punctuation">,</span>10<span class="token punctuation">,</span>20<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span>40<span class="token punctuation">,</span>50<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span>60<span class="token punctuation">,</span>20<span class="token punctuation">,</span>pink<span class="token punctuation">)</span><span class="token punctuation">(</span>bottom<span class="token punctuation">,</span>10<span class="token punctuation">,</span>30<span class="token punctuation">,</span>#ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$s</span>,<span class="token variable">$w</span>,<span class="token variable">$h</span>,<span class="token variable">$c</span> in <span class="token variable">$arr</span> </span><span class="token punctuation">{</span>
    <span class="token selector">.<span class="token variable">#{$s}</span></span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">$w</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$h</span><span class="token punctuation">;</span>
         <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">$c</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 ```
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>map变量</strong></p>
</li>
<li>
<p>类似于对象</p>
</li>
<li>
<p><code v-pre>@each in</code>遍历map变量</p>
</li>
<li>
<p>@each 键，值 in map对象</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$obj</span></span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span>10<span class="token punctuation">,</span><span class="token property">h2</span><span class="token punctuation">:</span>20<span class="token punctuation">,</span><span class="token property">h3</span><span class="token punctuation">:</span>30<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$k</span>,<span class="token variable">$v</span> in <span class="token variable">$obj</span> </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token variable">#{$k}</span></span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span><span class="token variable">$v</span>+px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>嵌套
<ul>
<li>
<p><strong>选择器嵌套</strong></p>
</li>
<li>
<p>&amp;:表示当前元素（相当于this）</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.list</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token selector">li</span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span>solid 1px black<span class="token punctuation">;</span>
        &amp;<span class="token punctuation">:</span>hover<span class="token punctuation">{</span><span class="token comment">//&amp;:表示当前元素（相当于this）</span>
            <span class="token property">color</span><span class="token punctuation">:</span>red
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.last</span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span>none
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>属性嵌套</strong></p>
</li>
<li>
<p>在<strong>复合属性</strong>内嵌套子属性，表示该属性的全写</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token selector">border:</span><span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token comment">//表示border-left</span>
            <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token comment">//表示border-right</span>
            <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token comment">//表示border-top</span>
            <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>混合代码块  mixin
<ul>
<li>类似于函数，没有返回值</li>
<li>是一个方法，需要加@
<ul>
<li>定义代码块<code v-pre>@mixin css属性名($形参){css属性名:$形参}</code></li>
</ul>
</li>
<li>使用<code v-pre>@include+css属性名(实参（css属性值）)</code> 调用代码块</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> transform <span class="token punctuation">(</span><span class="token variable">$d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box3</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>函数
<ul>
<li>定义函数：<code v-pre>@function 函数名(){@return }</code></li>
<li>调用函数：<code v-pre>函数名()</code></li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>+px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>+px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>运算<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1rem = html标签的font-size
1em = 父元素的font-size
1vw = 视口宽度/100
1vh = 视口高度/100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以实现带单位的值的运算，最后*1rem/em就会转换成需要的单位</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">//rem</span>
<span class="token comment">//默认16px</span>
<span class="token comment">//$fz:20px;</span>
<span class="token selector">html</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span><span class="token variable">$fz</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@function</span> <span class="token function">ptr</span><span class="token punctuation">(</span><span class="token variable">$px</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> <span class="token variable">$px</span>/<span class="token variable">$fz</span>*1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token function">ptr</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span><span class="token function">ptr</span><span class="token punctuation">(</span>238px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>继承
<ul>
<li>通过关键字<code v-pre>@extend</code>实现继承</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .box1<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>合并scss解析成一个css文件
<ul>
<li>@import &quot;路径&quot;</li>
<li>使用关键字<code v-pre>@import</code>引入文件
<code v-pre>@import &quot;../style.scss&quot;;</code></li>
</ul>
</li>
</ol>
<h1 id="模块化开发" tabindex="-1"><a class="header-anchor" href="#模块化开发" aria-hidden="true">#</a> 模块化开发</h1>
<h2 id="什么是模块化开发" tabindex="-1"><a class="header-anchor" href="#什么是模块化开发" aria-hidden="true">#</a> 什么是模块化开发</h2>
<ul>
<li>是一种项目架构模式，这种架构模式让js代码重用性变得非常的高，让项目架构的一些复杂问题全部的以解决。例如多个script标签不会再出现，我们只需要用一个script标签引入就可以了</li>
<li>模块：独立的功能，复用性，耦合低</li>
<li>模块化：将整个项目功能化</li>
<li>一般来说，每个模块独立于一个js文件</li>
</ul>
<h2 id="为什么要用模块" tabindex="-1"><a class="header-anchor" href="#为什么要用模块" aria-hidden="true">#</a> 为什么要用模块</h2>
<ul>
<li>为了减少系统耦合度、提高内聚，减少资源依赖</li>
<li>便于维护，功能复用性强</li>
<li>解决独立作用域，依赖管理，api暴露，安于加载于执行，安全合并等问题</li>
</ul>
<h2 id="如何实现模块化" tabindex="-1"><a class="header-anchor" href="#如何实现模块化" aria-hidden="true">#</a> 如何实现模块化</h2>
<ul>
<li>实现方式多种多样
<ul>
<li>独立的作用域，独立的功能</li>
</ul>
</li>
<li>一个项目团队中，出现多种模块化的方式，不利于维护，代码合并，团队协作</li>
<li>需要统一模块化开发的方式：模块化规范</li>
</ul>
<h2 id="模块化规范" tabindex="-1"><a class="header-anchor" href="#模块化规范" aria-hidden="true">#</a> 模块化规范</h2>
<ul>
<li>CMD规范
<ul>
<li>按需加载</li>
<li>引入：sea.js</li>
<li>断更</li>
</ul>
</li>
<li>AMD规范
<ul>
<li>依赖前置</li>
<li>引入：require.js</li>
</ul>
</li>
<li>nodeJs的模块化：commonJs
<ul>
<li>引入：require()</li>
<li>暴露：exports</li>
</ul>
</li>
<li>ES6的模块化
<ul>
<li>引入：import from</li>
<li>暴露：export</li>
<li>只能在服务器环境运行</li>
</ul>
</li>
</ul>
<h2 id="amd规范的使用" tabindex="-1"><a class="header-anchor" href="#amd规范的使用" aria-hidden="true">#</a> AMD规范的使用</h2>
<ul>
<li>下载规范化文件</li>
<li>引入规范化文件</li>
<li>定义模块时<em><strong>不执行</strong></em>任何语句</li>
<li>使用：
<ul>
<li>引入模块：require()/requirejs()</li>
<li>参数1：数组，模块的路径
<ul>
<li>参数2：函数
<ul>
<li>函数的参数是模块暴露的接口</li>
<li>参数1的数组有几个就有几个参数</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"./module2/mB"</span><span class="token punctuation">,</span><span class="token string">"./module2/mA"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>定义模块（暴露模块）：define()</li>
<li>参数1：数组，模块依赖（可选）
<ul>
<li>参数2：函数
<ul>
<li>函数的return是暴露模块的途径</li>
<li>返回一个对象</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义模块</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 模块的功能</span>
    <span class="token comment">// 暴露模块入口</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 上面封装的功能或变量</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">666</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>注意：
<ul>
<li>当main文件作为主模块，使用script标签的src引入时，main文件内部的小模块的路径起始点，以<strong>引入了main文件的html文件</strong>开始</li>
<li>当使用AMD模块化规范时,script标签有一个自定义属性<code v-pre>data-main</code>用来引入main文件
<ul>
<li>main文件内部的小模块的路径起始点，以<strong>当前main文件</strong>开始</li>
<li><code v-pre>&quot;&lt;script src=&quot;libs/require.js&quot; data-main=&quot;js/main&quot;&gt;&lt;/script&gt;&quot;</code></li>
</ul>
</li>
<li>baseUrl配置的路径起始点，<strong>以引入的html文件为基准</strong>
<ul>
<li>在main文件中配置</li>
<li>require.config()
<ul>
<li>参数：对像</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>require<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">baseUrl</span><span class="token operator">:</span><span class="token string">"module"</span><span class="token punctuation">,</span><span class="token comment">//小模块所在的文件夹</span>
	<span class="token literal-property property">paths</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">jq</span><span class="token operator">:</span><span class="token string">"http://mat1.gtimg.com/libs/jquery2/2.2.0/jquery"</span>
	<span class="token punctuation">}</span><span class="token comment">//简化文件名</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"jq"</span><span class="token punctuation">,</span><span class="token string">"mA"</span><span class="token punctuation">,</span><span class="token string">"mB"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">j<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"123123"</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h2 id="es6的模块化" tabindex="-1"><a class="header-anchor" href="#es6的模块化" aria-hidden="true">#</a> ES6的模块化</h2>
<ul>
<li>
<p>script标签必须加一个属性<code v-pre>type = &quot;module&quot;</code></p>
<ul>
<li><code v-pre>&quot;&lt;script src=&quot;js/main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;&quot;</code></li>
</ul>
</li>
<li>
<p>模块暴露时不可以直接暴露变量，可以采用花括号包裹的方式</p>
<ul>
<li>export {a};</li>
</ul>
</li>
<li>
<p>引入模块时变量也必须使用花括号包裹</p>
<ul>
<li><code v-pre>import {a} from &quot;./module/m.js&quot;;</code></li>
</ul>
</li>
<li>
<p>模块内部修改不需要重新引入，可以拿到修改的值（动态绑定）</p>
</li>
<li>
<p><code v-pre>as</code>可以在暴露或引入时修改变量的名字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"as可以改名"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>str <span class="token keyword">as</span> s<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>s <span class="token keyword">as</span> str<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>可以同时暴露或接收多个参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token operator">+</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>当模块以default暴露时可以使用一个对象来接收</p>
<ul>
<li>此时这个对象身上有模块暴露的所有属性</li>
<li>一个模块中只可以出现一个default</li>
<li>使用default暴露的模块接收后可以修改值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token operator">+</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>直接使用import+路劲可以引入立即执行的js文件（例：jqyrey）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./module/jquery.2.2.4.js"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>*</code>：通配符，可以引入模块所有暴露的接口</p>
<ul>
<li>使用*时需要用as改名</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b1 <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c1 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b1<span class="token operator">+</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b1<span class="token punctuation">,</span>c1<span class="token punctuation">,</span>fn2<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj1 <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意：</p>
<ol>
<li>export和import关键字，只能存在于顶层作用域内，不能存在局部或块级作用域</li>
<li>在ES6的模块化中，所有语法自动处在严格模式下</li>
<li>export是声明关键字，声明一个对外接口</li>
<li>export声明的接口必须和模块内部的变量建立一一对应的关系</li>
<li>export声明的接口与对应的值是动态绑定，即可以拿到模块内部实时修改的值</li>
<li>export和import时，都可以使用as关键字，重命名接口</li>
<li>使用default关键字，设置默认接口，一个模块中只允许出现一次default</li>
<li>import在使用接口时，必须将接口放在花括号内，除非export暴露接口时使用了default关键字</li>
<li>import加载的接口是只读的，不允许被修改，如果接口是对象，可以修改属性</li>
<li>import具有提升效果</li>
<li>由于import是静态执行，所以不能使用表达式和变量</li>
<li>当import后没有接收接口，会执行整个模块文件</li>
<li>可以使用通配符*加载整个模块的接口（需要配合as使用），返回一个模块对象</li>
<li>ES6的模块化不是对象，而是通过export输出对应的代码，再通过import输入</li>
<li>import加载模块的输入接口是静态加载，指定接口的情况下，只加载接口部分</li>
</ol>
</li>
</ul>
<h1 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h1>
<h2 id="介绍-6" tabindex="-1"><a class="header-anchor" href="#介绍-6" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>什么是版本管理
<ul>
<li>版本，不仅仅限于代码文件，任何文件，任何资源，任何数据，都存在版本</li>
</ul>
</li>
<li>版本管理的优势
<ul>
<li>方便查看文件的发展趋势，历史的数据，历史数据的回退</li>
</ul>
</li>
<li>怎么实现
<ul>
<li>传统的文件管理：拷贝副本
<ul>
<li>不安全，不方便管理</li>
</ul>
</li>
<li>交给计算机工具，管理源文件，数据流
<ul>
<li>安全，节省空间，方便管理</li>
</ul>
</li>
</ul>
</li>
<li>管理方式的方式
<ul>
<li><strong>集中式</strong>版本的管理（SVN）：所有的版本信息，都储存在当前计算机内，可以按需选择是否上传到服务器</li>
<li><strong>分布式</strong>版本管理（git）：每个客户端的版本信息，都存储在当前计算机内，可以按需选择是否上传到服务器</li>
</ul>
</li>
<li>工具的使用方式
<ul>
<li>SVN：下一标题（SVN的使用）</li>
<li>git：下一标题（git的使用）</li>
</ul>
</li>
<li><em><strong>版本管理工具的概念</strong></em>
<ul>
<li>工作区：正在编写文件的空间
👇add</li>
<li>暂存区：队列，等待上传文件所在的区域
👇commit</li>
<li>版本库：记录当前版本，产生一个版本库和对应的版本描述</li>
</ul>
</li>
</ul>
<h2 id="svn的使用" tabindex="-1"><a class="header-anchor" href="#svn的使用" aria-hidden="true">#</a> SVN的使用</h2>
<ol>
<li>下载，安装</li>
<li>通过右键菜单中绑定的SVN选项，实现svn操作</li>
<li>接入svn服务器：
<ul>
<li>本地：安装SVN的服务器工具，创建SVN服务器，创建独立的项目
<ul>
<li>安装软件-&gt;打开软件-&gt;创建项目-&gt;设置项目名称-&gt;得到服务器地址（注意是否对外地址）-&gt;将项目地址发给要连接服务器的使用者</li>
</ul>
</li>
<li>在线：找到第三方在线仓库网站，注册账号，创建项目</li>
</ul>
</li>
<li>打开要被版本管理工具管理的项目的根目录</li>
<li>使用<code v-pre>checkout</code>命令接入服务器
<ul>
<li>会利用右键菜单的选项，判断当前项目的管理状态</li>
<li>没有<code v-pre>checkout</code>表示，已经建立连接了</li>
</ul>
</li>
<li>开始工作...</li>
<li>将新文件，使用 <code v-pre>add</code> 命令，先添加到暂存区
<ul>
<li>利用右键菜单的选项，判断当前文件的状态</li>
<li>有<code v-pre>commit</code>表示，文件已经在暂存区了</li>
</ul>
</li>
<li>使用 <code v-pre>commit</code> 命令，将暂存区中的文件上传到版本库
<ul>
<li>利用右键菜单的选项，判断当前文件的状态</li>
<li>有<code v-pre>update</code>表示，文件已经在版本库了</li>
</ul>
</li>
<li>正常开发项目，重复6，7，8...</li>
<li>版本回退
<ul>
<li><code v-pre>updata to revision+版本号</code></li>
</ul>
</li>
<li>如果出现上传失败，代码冲突
<ul>
<li>两个用户修改了同一处代码</li>
<li>线下沟通解决
<ul>
<li>保留要保留的代码</li>
<li>删除要删除的代码</li>
</ul>
</li>
<li>删除代码的那一方要先更新</li>
<li>保留代码的那一方重新上传</li>
<li>删除代码的那一方要再更新</li>
</ul>
</li>
</ol>
<h2 id="git的使用" tabindex="-1"><a class="header-anchor" href="#git的使用" aria-hidden="true">#</a> git的使用</h2>
<ol>
<li>下载，安装 - 右键菜单会多出git的选项（按需重启电脑）</li>
<li>打开要被版本管理工具管理像木的根目录</li>
<li>右键菜单选择：gti Bash，检查当前路径是否指定文件夹
<ul>
<li>路径不对的话，使用<code v-pre>cd</code>切换路径</li>
</ul>
</li>
<li>初始化git项目：<code v-pre>git init</code></li>
<li>配置全局用户信息
<ul>
<li><code v-pre>git config --global user.name &quot;${用户名}&quot;</code></li>
<li><code v-pre>git config --global user.email &quot;${邮箱地址}&quot;</code></li>
</ul>
</li>
<li>开始工作...
<ul>
<li>查看状态：<code v-pre>git status</code>（查看暂存区状态）</li>
</ul>
</li>
<li>将新文件用 <code v-pre>git add</code> 命令线添加到暂存区
<ul>
<li><code v-pre>git add .</code></li>
<li><code v-pre>git add *</code></li>
<li><code v-pre>git add -A</code></li>
<li><code v-pre>git add --all</code></li>
<li>以上都是将工作区所有文件上传到暂存区</li>
</ul>
</li>
<li>使用 <code v-pre>git commit</code> 命令，将暂存区的所有文件上传到版本库
<ul>
<li><code v-pre>git commit -m &quot;这里是版本日志&quot;</code></li>
</ul>
</li>
<li>正常开发项目，重复7，8，9...</li>
<li>查看版本日志：<code v-pre>git log</code>
<ul>
<li>如果版本日志数据过多，导致被折叠显示，可以使用上下箭头显示折叠信息，使用<code v-pre>q</code>退出折叠</li>
</ul>
</li>
<li>查看操作日志：<code v-pre>git reflog</code></li>
<li>版本回退：<code v-pre>git reset --hard 版本号</code></li>
<li>上传到git仓库
<ul>
<li>建立连接：<code v-pre>git remote add origin 仓库地址</code></li>
<li>推送版本：<code v-pre>git push -u origin master(分支)</code></li>
</ul>
</li>
<li>输入用户名密码</li>
<li>只有第一次上传需要建立连接，以后只需要<code v-pre>git push</code>即可</li>
<li>刷新在线仓库可拿到版本文件和信息</li>
<li>从仓库下载到本地
<ul>
<li>完整的克隆整个项目：<code v-pre>git clone 仓库地址</code></li>
<li>拉取线上版本与本地版本合并：<code v-pre>git pull[origin][master]</code>
<ul>
<li>中括号代表可以省略</li>
</ul>
</li>
</ul>
</li>
<li>分支（branch）
<ul>
<li>什么式分支？副本、备份</li>
<li>原则上来说，每个开发者，每个功能，都因该在一个新的分支上进行，而不要执黑在项目上进行操作</li>
<li>默认情况下，整个项目是一个分支：主分支（master）
<ul>
<li>创建一个子分支（拷贝主分支）<code v-pre>git branch 分支名字</code></li>
<li>干活...</li>
<li>选择分支<code v-pre>git checkout 分支名字</code></li>
<li>合并到主分支<code v-pre>git merge 主分支</code>（一般需要先选择主分支，然后将其他分支合并到主分支）</li>
<li>删除子分支 <code v-pre>git branch -d 分支名字</code></li>
</ul>
</li>
</ul>
</li>
<li>标签（标志，书签，tag）
<ul>
<li>存在的意义，参考现实生活中的书签</li>
<li>需要在连接仓库的情况下才可以创建标签</li>
<li>git tag                  查看标签</li>
<li>git tag name             创建标签</li>
<li>git push origin name     上传标签</li>
<li>git tag -d name          删除标签</li>
</ul>
</li>
</ol>
<h2 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> git常用命令</h2>
<ul>
<li>
<p><code v-pre>git config --global user.name &quot;${用户名}&quot;</code>- 设置全局用户名</p>
</li>
<li>
<p><code v-pre>git config --global user.email &quot;${邮箱地址}&quot;</code>- 设置全局邮箱</p>
</li>
<li>
<p><code v-pre>git init</code>- 初始化git，生成.git文件</p>
</li>
<li>
<p><code v-pre>git add .</code>- 添加工作区所有到暂存区</p>
</li>
<li>
<p><code v-pre>git commit -m &quot;这里是版本日志&quot;</code>- 将暂存区所有上传到版本库</p>
</li>
<li>
<p><code v-pre>git log</code>- 查看版本日志</p>
</li>
<li>
<p><code v-pre>git diff </code> - 查看工作区与暂存区区别</p>
</li>
<li>
<p><code v-pre>git status</code>- 查看暂存取状态</p>
</li>
<li>
<p><code v-pre>git reflog</code>- 查看操作日志</p>
</li>
<li>
<p><code v-pre>git reset --hard 版本号</code>- 版本回退</p>
</li>
<li>
<p><code v-pre>git remote add origin 仓库地址</code>- 与仓库建立连接</p>
</li>
<li>
<p><code v-pre>git push -u origin master(分支)</code>- 上传到云端仓库</p>
</li>
<li>
<p><code v-pre>git clone 仓库地址</code>- 下载所有项目文件到本地</p>
</li>
<li>
<p><code v-pre>git pull[origin][master]</code>- 更新本地版本库与仓库一致</p>
</li>
<li>
<p><code v-pre>git branch</code>- 查看分支</p>
</li>
<li>
<p><code v-pre>git branch 分支名字</code>- 创建新分支</p>
</li>
<li>
<p><code v-pre>git checkout 分支名字</code>- 选择分支</p>
</li>
<li>
<p><code v-pre>git merge name</code>合并分支（一般需要先选择主分支，然后将其他分支合并到主分支）</p>
</li>
<li>
<p>查看差别</p>
<ul>
<li>git diff                  工作区和暂存区的差别</li>
<li>git diff --cached         暂存区和版本库的差别</li>
<li>gif diff HEAD             工作区和版本库的差别</li>
</ul>
</li>
<li>
<p>添加到暂存区</p>
<ul>
<li>git add .</li>
<li>git add *</li>
<li>git add --all</li>
<li>git add -A</li>
</ul>
</li>
<li>
<p>查看日志</p>
<ul>
<li>git log --oneline</li>
<li>git log -n</li>
</ul>
</li>
<li>
<p>版本回退</p>
<ul>
<li>git reset --hard HEAD^</li>
<li>git reset --hard HEAD~n</li>
<li>git reset --hrad 版本号</li>
</ul>
</li>
<li>
<p>撤销</p>
<ul>
<li>
<p>git checkout -- 文件名    撤销工作区修改</p>
</li>
<li>
<p>git reset HEAD 文件名</p>
</li>
<li>
<p>git checkout -- 文件名    撤销暂存区修改</p>
</li>
</ul>
</li>
<li>
<p>远程仓库</p>
<ul>
<li>git remote add 连接别名 连接地址</li>
<li>git remote -v</li>
<li>git remote remove 连接别名</li>
</ul>
</li>
<li>
<p>标签操作（需要在连接仓库的前提下）</p>
<ul>
<li>git tag                  查看标签</li>
<li>git tag name             创建标签</li>
<li>git push origin name     上传标签</li>
<li>git tag -d name          删除标签</li>
</ul>
</li>
<li>
<p>分支操作</p>
<ul>
<li>git branch               查看分支</li>
<li>git branch -r            查看远程分支</li>
<li>git branch -a            查看所有分支</li>
<li>git branch name          创建分支</li>
<li>git checkout name        选择分支</li>
<li>git branch -b name       创建并切换分支</li>
<li>git merge name           合并分支（一般需要先选择主分支，然后将其他分支合并到主分支）</li>
<li>git branch -d name       删除分支</li>
</ul>
</li>
<li>
<p>忽略指定文件夹或文件</p>
<ul>
<li>.gitignore文件内，写明要忽略的文件夹或文件</li>
</ul>
</li>
</ul>
<h2 id="svn和git的区别" tabindex="-1"><a class="header-anchor" href="#svn和git的区别" aria-hidden="true">#</a> **<em>SVN和git的区别</em></h2>
<ul>
<li>SVN的存储需要依赖一个服务器，而git所有的东西是放在线上的。节约成本，省时省力。</li>
<li>git 是分布式的，svn 是集中式。</li>
<li>git 按照源数据的方式存储内容，svn 是按照文件的形式存储</li>
<li>git 和 svn 中的分支不同。</li>
<li>git 没有全局版本号，svn 有。</li>
<li>git 内容的完整性优于 svn。</li>
</ul>
</div></template>
