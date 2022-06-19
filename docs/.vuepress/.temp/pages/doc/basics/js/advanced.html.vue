<template><div><h1 id="js进阶" tabindex="-1"><a class="header-anchor" href="#js进阶" aria-hidden="true">#</a> js进阶</h1>
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
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
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
<h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2>
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
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
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
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
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
<h2 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h2>
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
<h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h2>
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
<h2 id="概念-2" tabindex="-1"><a class="header-anchor" href="#概念-2" aria-hidden="true">#</a> 概念</h2>
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
<h2 id="js的执行机制" tabindex="-1"><a class="header-anchor" href="#js的执行机制" aria-hidden="true">#</a> js的执行机制</h2>
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
<h3 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h3>
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
</div></template>
