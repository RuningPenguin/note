<template><div><h1 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp" aria-hidden="true">#</a> gulp</h1>
<ul>
<li><a href="https://www.gulpjs.com.cn/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>node的第三方模块</li>
<li>node的模块开发 - commonJs规范
<ul>
<li>暴露：<code v-pre>module.exports</code></li>
<li>引入：<code v-pre>require()</code></li>
</ul>
</li>
</ul>
</div>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>做前端的<strong>自动化工程</strong>，前端自动化工具</li>
<li>基于node的前端自动化工具（基于流的前端自动化工具）</li>
<li>自动将文件进行压缩、合并、编译、解析等操作</li>
<li><strong>常用的前端工具</strong>: gulp，webpack，grunt，browserify</li>
</ul>
<h2 id="gulp的使用" tabindex="-1"><a class="header-anchor" href="#gulp的使用" aria-hidden="true">#</a> gulp的使用</h2>
<ol>
<li>下载</li>
</ol>
<ul>
<li>安装全局的gulp：<code v-pre>npm i gulp -g</code></li>
<li>测试：<code v-pre>gulp -v</code>可以查看全局的gulp版本号</li>
<li>安装局部的gulp
<ul>
<li>先创建项目环境（文件夹）</li>
<li>使用命令窗口进入文件夹</li>
<li><code v-pre>npm i gulp -D</code>安装到开发环境</li>
<li>测试：<code v-pre>gulp -v</code>可以查看全局的gulp版本号</li>
</ul>
</li>
</ul>
<ol start="2">
<li>
<p>创建gulp官方指定的文件: <strong>gulpfile.js</strong></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>//   要暴露的功能
// 在执行时，通过say执行sayHello
```
- 按需执行
- 在命令窗口输入：<code v-pre>gulp 入口名</code></p>
<h2 id="gulp的常用内置方法" tabindex="-1"><a class="header-anchor" href="#gulp的常用内置方法" aria-hidden="true">#</a> gulp的常用内置方法</h2>
<ul>
<li><code v-pre>src()</code>		查找文件（参数：路径、字符串）</li>
<li><code v-pre>dest()</code>	转存文件（参数：路径、要保存的路径）</li>
<li><code v-pre>watch()</code>	监听文件的变化，执行功能（参数：路径、是个数组）</li>
<li><code v-pre>series()</code>	批量执行，同步执行（参数：要批处理的函数名）</li>
<li><code v-pre>parallel()</code> 批量执行，异步执行（参数：要批处理的函数名）
-<code v-pre> pipe()</code>	<strong>流对象的方法</strong>
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
<li>gulp插件是没有ES6转ES5这个功能的
<ul>
<li>babel才是住专门的编译工具</li>
<li>gulp只是提供了支持gulp的插件</li>
<li>最终的编译还是由bable完成</li>
</ul>
</li>
<li>安装gulp对babel支持
<ul>
<li><code v-pre>npm install gulp-babel</code></li>
</ul>
</li>
<li>安装babel对ES6的支持
<ul>
<li><code v-pre>npm install @babel/core</code></li>
</ul>
</li>
<li>安装说明，将ES6转成ES5
<ul>
<li><code v-pre>npm install @babel/preset-env</code></li>
</ul>
</li>
<li>在gulpFile中使用
<ul>
<li>引入gulp-babel</li>
</ul>
</li>
<li>定义ES6转ES5的功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">stfFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"src/js/*.js"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/env'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist/js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>stf <span class="token operator">=</span> stfFn<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器插件" tabindex="-1"><a class="header-anchor" href="#服务器插件" aria-hidden="true">#</a> 服务器插件</h2>
<ul>
<li>服务器插件
<ul>
<li>gulp-connect</li>
</ul>
</li>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>跨域插件
<ul>
<li><code v-pre>http-proxy-middleware</code></li>
<li>是一个对象，有createProxyMiddleware属性，是一个函数，跨域时使用</li>
</ul>
</li>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>有先后顺序，先有服务器插件才有跨域</strong></p>
</div></template>
