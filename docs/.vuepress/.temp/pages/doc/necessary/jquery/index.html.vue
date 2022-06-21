<template><div><h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h1>
<h2 id="jquery的多库并存" tabindex="-1"><a class="header-anchor" href="#jquery的多库并存" aria-hidden="true">#</a> jQuery的多库并存</h2>
<ul>
<li>window.jQuery=window.$=jQuery</li>
<li>通过这句代码，向window上添加了两个变量</li>
<li>自己也可以封装一个库</li>
<li>jQuery 和 $ 这两个名字谁都可以用</li>
<li>我们自己封装的库，也向外暴露 $ 和 jQuery</li>
<li>当两个库同时引入的时候</li>
<li>谁引入在后面，以谁为准</li>
<li>问题：没有办法两个一起用</li>
<li>jQuery的封装中，可以让出控制权</li>
<li>只要在最后引入jQuery</li>
<li>执行一下让出 $ 和 jQuery变量名控制权的代码</li>
<li>你的 $ 和 jQuery就可以干别的了</li>
</ul>
<h2 id="noconflict-不矛盾冲突" tabindex="-1"><a class="header-anchor" href="#noconflict-不矛盾冲突" aria-hidden="true">#</a> $.noConflict() 不矛盾冲突</h2>
<ul>
<li>这句代码一旦执行，那么 $ 就不再代表 jQuery了</li>
<li>你之前代表的是什么还是什么</li>
</ul>
<h2 id="noconflict-true" tabindex="-1"><a class="header-anchor" href="#noconflict-true" aria-hidden="true">#</a> $.noConflict(true)</h2>
<ul>
<li>这句代码一旦执行，那么 $ 和 jQuery就都不再代表jQuery了</li>
<li>let 变量 = $.noConflict(true)</li>
<li>这句代码执行，那么你定义的这个变量是什么</li>
<li>这个变量就来代表 jQuery</li>
</ul>
<h2 id="jquery的插件扩展机制" tabindex="-1"><a class="header-anchor" href="#jquery的插件扩展机制" aria-hidden="true">#</a> jQuery的插件扩展机制</h2>
<ul>
<li>jQuery提供了一大堆的方法，但是怕不够用</li>
<li>给开放了一个借口，可以向 jQuery 里面扩展一些方法使用</li>
</ul>
<h3 id="extend-扩展给-jquery-本身" tabindex="-1"><a class="header-anchor" href="#extend-扩展给-jquery-本身" aria-hidden="true">#</a> $.extend() 扩展给 jQuery 本身</h3>
<ul>
<li>接受一个参数，是个对象</li>
<li>对象里面写要扩展的方法</li>
<li>将来使用的时候是：$.xxx()</li>
</ul>
<h3 id="fn-extend-扩展给-jquery-的元素集合" tabindex="-1"><a class="header-anchor" href="#fn-extend-扩展给-jquery-的元素集合" aria-hidden="true">#</a> $.fn.extend() 扩展给 jQuery 的元素集合</h3>
<ul>
<li>接受一个参数，是个对象</li>
<li>对象里面写要扩展的方法</li>
<li>将来使用的时候是：$(选择器).xxx()</li>
</ul>
<h2 id="jquery-实现深浅拷贝" tabindex="-1"><a class="header-anchor" href="#jquery-实现深浅拷贝" aria-hidden="true">#</a> jQuery 实现深浅拷贝</h2>
<ul>
<li>对于一个负责数据类型的操作
<ul>
<li>赋值</li>
<li>浅拷贝</li>
<li>深拷贝</li>
</ul>
</li>
<li>赋值：
<ul>
<li>相当于把一个数据的地址给到另一个地址
<ul>
<li>let a = b</li>
</ul>
</li>
</ul>
</li>
<li>浅拷贝：
<ul>
<li>把一个对象里的每一个成员都复制一份放到新的对象里面
<ul>
<li>两个对象分别是两个对象空间</li>
<li>通过 for in 循环来实现的</li>
</ul>
</li>
<li>修改第一层的属性是不会改变的</li>
<li>如果对象中的某一个成员是复杂数据类型的时候比如数组、对象，这就是第二层
<ul>
<li>你浅拷贝完毕以后，你操作的这个数据类型的成员，依旧是在操作一个内容</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> o1<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//有多少成员执行几次</span>
    <span class="token comment">//每次循环，key分别表示o1里的成员名称</span>
    <span class="token comment">//然后把他每一个成员放进o3里</span>
    o3<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token comment">// o1 里面的 hobby 存储的是一个数组的地址</span>
    <span class="token comment">// 赋值给 o3 里面的 hobby 存储的也是一个数组的地址</span>
    <span class="token comment">// 这样赋值完毕以后, o1.hobby 和 o3.hobby 是存储的同一个地址</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>深拷贝：
<ul>
<li>把一个对象里面的每一个成员都复制一份到新的对象里面
<ul>
<li>当对象里的某一个成员是复杂数据类型的时候</li>
<li>继续循环遍历这个复杂类型</li>
<li>在心的对象里面也创造一个复杂数据类型继续复制进去</li>
</ul>
</li>
<li>通过递归函数来实现深拷贝
<ul>
<li>在函数内部判断，如果是一个对象或数组</li>
<li>就再次调用函数递归这个复杂数据类型</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">//跟浅拷贝类似，只是多了循环复杂数据类型的步骤</span>
  <span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">oldO，newO</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> oldO<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//先判断一下是一个对象或者数组的话，要再循环一次</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">)</span><span class="token punctuation">{</span>
      newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token function">deepCopy</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">{</span>
      newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token function">deepCopy</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token comment">//他既不是数组也不是对象，直接赋值</span>
      newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">deepCopy</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li><strong>jQuery实现深浅拷贝</strong>
<ul>
<li>语法：<strong>$.extend()</strong>
<ul>
<li>只传递一个参数的时候，是扩展</li>
<li>传递两个及以上参数的时候，是拷贝</li>
</ul>
</li>
<li><strong>浅拷贝</strong>
<ul>
<li>语法：$.extend(新对象，旧对象1，旧对象2，...)
<ul>
<li>把从第二个参数开始的所有对象里面的数据</li>
<li>全部拷贝到第一参数对象里面</li>
</ul>
</li>
</ul>
</li>
<li><strong>深拷贝</strong>
<ul>
<li>语法：$.extend(true,新对象，旧对象1，旧对象2，...)
<ul>
<li>把从第三个参数开始的所有对象里的数据</li>
<li>全部拷贝到第二个参数里面</li>
</ul>
</li>
</ul>
</li>
<li>$.extend()进行拷贝的时候
<ul>
<li>第一个参数不写，表示浅拷贝</li>
<li>第一个参数写 true 表示深拷贝</li>
<li>注意：<strong>不能写 false</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="jquery-表单验证插件" tabindex="-1"><a class="header-anchor" href="#jquery-表单验证插件" aria-hidden="true">#</a> jQuery 表单验证插件</h2>
<ul>
<li>jquery-validate</li>
<li>专门来作表单验证</li>
<li>下载插件: 直接百度搜索 jqueryvalidate</li>
<li>使用：
<ol>
<li>导入文件</li>
</ol>
<ul>
<li>需要一个 jquery.js</li>
<li>需要一个 jquery.validate.js</li>
<li>validate 必须要引入在 jQuery 以后</li>
<li>因为他在向 jQuery 里面扩展一些内容</li>
</ul>
<ol start="2">
<li>准备一个 html 结构</li>
<li>对 form 标签开启表单验证功能</li>
</ol>
<ul>
<li>在 rules 里面进行你的规则书写</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#login'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 表示验证规则</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对有 name="username" 的 input 进行验证</span>
    <span class="token comment">// 如果只写一个验证, 那么可以直接写字符串</span>
    <span class="token comment">// 如果你要写多个验证规则, 那么就以对象的形式书写</span>
    <span class="token comment">// 给 用户名 文本框添加了一个验证规则, 是必填</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'required'</span><span class="token punctuation">,</span>

    <span class="token comment">// 对有 name="password" 的文本框进行验证</span>
    <span class="token comment">// 对象的形式表示我要书写多条规则</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 必填</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最少五个字符</span>
    <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">// 最多十个字符</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 对有 name="age" 的文本框进行验证</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token comment">// 表示最小值</span>
    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 验证失败的提示文字</span>
            <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 和规则的书写语法是一样的</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'请填写正确的用户名! @-@'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token string">'请填写正确的密码! ^_^'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token string">'你输入的还不够'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token string">'你输入的太多了'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token string">'18 岁以下请在父母陪同下观看'</span>
    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 当表单验证通过的时候</span>
            <span class="token comment">// 你点击登录或者敲击回车的时候会触发的</span>
            <span class="token function">submitHandler</span> <span class="token punctuation">(</span><span class="token parameter">form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// form 参数表示的就是这个 form 标签</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>
    <span class="token comment">// 表单提交的事件处理函数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我要提交表单了'</span><span class="token punctuation">)</span>
    <span class="token comment">// 发送 ajax 把用户名密码 提交到后端</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="jquery-入口函数" tabindex="-1"><a class="header-anchor" href="#jquery-入口函数" aria-hidden="true">#</a> jQuery 入口函数</h2>
<ul>
<li>ready()函数</li>
<li>用法: <strong>$(window).ready(function () {})</strong>
<ul>
<li>类似于 window.onload = function () {}</li>
<li>有一个简写形式
<ul>
<li><strong>$(function () {})</strong></li>
</ul>
</li>
</ul>
</li>
<li>区别：
<ul>
<li>window.onload:页面资源加载完毕</li>
<li>$(window).ready()：页面 dom 结构加载完成</li>
</ul>
</li>
<li>入口函数绝对会比window.onload更快执行</li>
<li>总结$()：
<ul>
<li>传递的参数是一个选择器的时候, 是获取元素</li>
<li>传递的参数是一个 html 格式字符串的时候, 是创建节点</li>
<li>传递的参数是一个 函数 的时候, 就是 jQuery 的 入口函数</li>
</ul>
</li>
</ul>
</div></template>
