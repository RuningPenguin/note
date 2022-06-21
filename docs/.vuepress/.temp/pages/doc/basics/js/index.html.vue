<template><div><h2 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp" aria-hidden="true">#</a> gulp</h2>
<ul>
<li>写一个项目
<ul>
<li>项目源码的一个文件夹
<ul>
<li>xiaomi/
<ul>
<li>views / pages / html 文件夹 -- 存放 html 文件</li>
<li>css 文件夹  --  存放css文件(自己写的css)</li>
<li>js 文件夹  --  存放 js 文件(我自己写的js)</li>
<li>images / img / image 文件夹  --  存放图片</li>
<li>videos 文件夹  --  视频文件</li>
<li>audios 文件夹  --  音频文件</li>
<li>assets 文件夹  --  静态资源</li>
<li>第三方文件
<ul>
<li>sass 文件夹  --  存放的都是 scss 文件</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>当你开发完毕
<ul>
<li>这个文件是<strong>不能直接上线的</strong>
<ul>
<li>因为里面的 换行 和 空格 太多</li>
<li>es6 语法没有转换成 es5</li>
<li>css 有些应该添加前缀的，但是我们没有添加</li>
<li>加入我们是用 sass 进行编写，需要自己执行一个 sass 工具编译</li>
</ul>
</li>
<li><strong>gulp 就是来帮助我们吧代码压缩编译的</strong>
<ul>
<li>代码的压缩</li>
<li>代码的编译</li>
<li>css 自动添加前缀</li>
<li>文件修改名称</li>
<li>...</li>
</ul>
</li>
<li>在整个过程中
<ul>
<li>我们的源码文件夹，是用来进行开发的</li>
<li>我们的最终使用 gulp 整理后出现的一个新的文件夹，是用来部署上线的，</li>
<li>我们管这两个文件夹有自己的命名
<ul>
<li><strong>源码文件夹叫做 src/</strong></li>
<li><strong>管处理后的文件夹叫做 dist/</strong></li>
<li>在<strong>开发中</strong>的代码叫作 <strong>开发环境</strong></li>
<li><strong>打包上线以后</strong>的代码叫做 <strong>生产环境</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>gulp 是一个什么东西
<ul>
<li>可以叫做 自动化打包构建工具
<ul>
<li>打包：对代码进行压缩编译转码</li>
<li>构建：对项目进行初始化构建过程</li>
</ul>
</li>
<li>目前市场上流行的打包构建工具
<ul>
<li>gulp</li>
<li>webpack(三阶段会讲)</li>
</ul>
</li>
</ul>
</li>
<li>gulp 的安装
<ul>
<li>也是一个 JS 相关的工具(软件)</li>
<li>可以使用 npm 进行安装</li>
<li>指令 $ npm install --global gulp
<ul>
<li>简写 $ npm i -g gulp</li>
</ul>
</li>
</ul>
</li>
<li>gulp 的检测
<ul>
<li>输入指令 $ gulp --version</li>
<li>注意：gulp 分成两个版本，gulp3 gulp4
<ul>
<li>gulp3 出现的版本号就是 gulp 3.x.x (@3.9.1)</li>
<li>gulp4 出现的版本号是 gulp-cli 版本 2.x.x</li>
</ul>
</li>
</ul>
</li>
<li>gulp 的卸载
<ul>
<li>输入指令卸载 $ npm unistall --global gulp
<ul>
<li>简写 $ npm un -g gulp</li>
</ul>
</li>
</ul>
</li>
<li>gulp 全局安装完毕以后
<ul>
<li>我们可以在命令行使用 gulp xxx 的指令来进行项目打包了</li>
<li>注意：<strong>gulp 全局包就是给我买提供一个可以在命令行执行 gulp xxx 的指令的能力</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
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
<h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2>
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
