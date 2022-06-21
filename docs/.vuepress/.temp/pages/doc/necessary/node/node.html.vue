<template><div><h1 id="node基础" tabindex="-1"><a class="header-anchor" href="#node基础" aria-hidden="true">#</a> node基础</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>node 是一个 基于 chromeV8 解析引擎的 javascript 运行时环境</strong></p>
<ul>
<li>其实就是专门解析运行 JS 代码的软件</li>
<li>浏览器之所以能解析 js 文件，是因为浏览器有一个 <code v-pre>解析引擎</code></li>
<li>解析引擎</li>
<li>V8引擎：c++搭建（谷歌开源）</li>
<li>浏览器： DOM BOM ECMAScript</li>
<li>node: ECMAScript, I/O, SQL</li>
<li>实际上 node 就是用 JS 这个语言来写后端</li>
<li>JS 文件</li>
<li>一个 js 文件是没有区分的</li>
<li>当你实用 node 运行一个js文件</li>
<li>命令行中 <code v-pre>node xxx.js</code> 的时候</li>
<li>就是一段后端 js 代码</li>
<li>当你实用 html 文件引入一个 js 文件的时候</li>
<li>这个 js 文件就是一段前端代码</li>
</ul>
</div>
<h2 id="运行方式" tabindex="-1"><a class="header-anchor" href="#运行方式" aria-hidden="true">#</a> 运行方式</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>没有BOM（window），没有DOM（document）</strong></p>
</div>
<ol>
<li>直接在 cmd 窗口写一个指令</li>
</ol>
<ul>
<li><strong>$ node</strong></li>
<li>直接打开 node 这个软件</li>
<li>你可以直接书写 JS 代码了</li>
<li>当你执行完毕这个指令以后，你当前的命令函就相当于是&quot;浏览器的控制台&quot;</li>
<li><strong>关闭node</strong></li>
<li>按两次 ctrl + c / v</li>
</ul>
<ol start="2">
<li>把 JS 代码书写在一个 .js 后缀的文件里面</li>
</ol>
<ul>
<li>在命令行使用 node 软件去执行这个 js 文件
注意：没有BOM（window），没有DOM（document）</li>
</ul>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<ol>
<li>基础语法</li>
</ol>
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
<ol start="2">
<li>特点语法</li>
</ol>
<ul>
<li><a href="#模块化">模块化</a></li>
</ul>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>
<ol>
<li><a href="内置模块">内置模块</a></li>
</ol>
<ul>
<li>安装 Node 的时候，就自带的一些 node 写好的 JS 文件</li>
</ul>
<ol start="2">
<li>自定义模块</li>
</ol>
<ul>
<li>自己写一个JS文件，当做一个模块使用</li>
<li>每一个 JS 文件是一个独特的内容</li>
<li>我们使用导入导出的语法来实现页面之间数据的互相通讯</li>
<li>导出语法：在 JS 文件里书写向 <code v-pre>module.exports</code> 这个对象内添加成员</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 我在自己文件里面定义一些内容</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'hello world'</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是 export.js 文件里面的函数'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我们只要向这个 exports 对象中添加成员就可以</span>
<span class="token comment">// 因为每一个文件默认导出的就是这个 exports 对象</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>num <span class="token operator">=</span> num
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>fn <span class="token operator">=</span> fn
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'export.js 文件内的打印'</span><span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>导入语法：在 JS 文件里使用 <code v-pre>require()</code> 在参数位置书写要导入的 JS 文件</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 我是一个文件, 我要导入 export.js 文件</span>
<span class="token comment">// 使用它里面的内容</span>

<span class="token comment">// require() 时每一个 JS 文件里面自带的方法</span>
<span class="token comment">// 专门用来导出一个 JS 文件使用</span>
<span class="token comment">// 语法: require(要导入的 JS 文件)</span>
<span class="token comment">// 返回值: 你导入的 JS 文件里面的 module.exports</span>
<span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./export.js'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---------------------'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'import.js 文件内的打印'</span><span class="token punctuation">,</span> moduleA<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>num<span class="token punctuation">)</span>
moduleA<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>第三方模块</li>
</ol>
<ul>
<li>别人写好的，下载下来使用的一个 JS 文件</li>
</ul>
<h2 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> 内置模块</h2>
<h3 id="fs" tabindex="-1"><a class="header-anchor" href="#fs" aria-hidden="true">#</a> fs</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>fs 是 node 里面专门操作文件和文件夹的模块</li>
<li>里面封装的各种方法，都是用来操作文件和文件夹的</li>
</ul>
</div>
<ol>
<li>使用 fs</li>
</ol>
<ul>
<li>因为是内置模块，不需要我们进行导出</li>
<li>直接在需要的位置进行<strong>导入</strong>就可以了
<ul>
<li><code v-pre>require('fs');</code></li>
</ul>
</li>
</ul>
<ol start="2">
<li>方法</li>
</ol>
<ul>
<li><strong>读取文件</strong>
<ul>
<li><code v-pre>fs.readFile(&quot;文件路径&quot;,&quot;utf-8&quot;,(err,data)=&gt;{})</code> <strong>异步</strong>
<ul>
<li>参数1：要读取的文件路径</li>
<li>参数2：字符编码（可选，默认buffer流）/ 'utf-8' 或者 'utf8'</li>
<li>参数3：函数，该函数可以接受两个参数</li>
</ul>
</li>
</ul>
</li>
<li>参数1：err，请求失败时的错误信息</li>
<li>参数2：data，请求到的数据</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./abc.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 当这个函数执行的时候, 表示读取已经完成了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'读取完成了'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'err'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>fs.readFileSync(&quot;文件路径&quot;,&quot;utf-8&quot;)</code> <strong>同步</strong>
<ul>
<li>参数1：要读取的文件路径</li>
<li>参数2：字符编码（可选，默认buffer流）/ 'utf-8' 或者 'utf8'</li>
<li>返回值</li>
</ul>
</li>
<li>如果读取成功，就是读取到的文件内容</li>
<li>如果读取失败，那么程序直接报错</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./abc123.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>写入文件</strong>
<ul>
<li><code v-pre>fs.writeFile(&quot;文件路径&quot;,str,(err)=&gt;{})</code> <strong>异步</strong>
<ul>
<li>参数1：要写入的文件路径的地址</li>
<li>参数2：要写入的文件的内容</li>
<li>参数3：函数，该函数接收一个参数</li>
</ul>
</li>
</ul>
</li>
<li>参数：err，写入失败的错误信息</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>如果文件存在，那么直接向里面写入</li>
<li>如果文件不存在，那么她会创建这个文件，向里面写入</li>
<li>不管写什么，都是完全覆盖式的写入
<strong>不管是不是要使用回调函数，都会写一个函数占位置</strong></li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./abc.txt'</span><span class="token punctuation">,</span> <span class="token string">'hello world'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'写入完成'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>fs.writeFileSync(&quot;文件路径&quot;,str)</code> <strong>同步</strong></li>
<li>规则基本同上
<ul>
<li>参数1：要写入的文件路径的地址</li>
<li>参数2：要写入的文件的内容</li>
<li>返回值为undefined</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">'./abc.txt'</span><span class="token punctuation">,</span> <span class="token string">'你好 世界'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li><strong>appendFile()</strong></li>
<li>给文件里面的内容添加，而不是完全覆盖式</li>
</ul>
</div>
<h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h3>
<ul>
<li>服务器模块，开启web服务器
<ul>
<li>引入：<code v-pre>const http = require(&quot;http&quot;)</code></li>
<li>开启：<code v-pre>http.createServer((req,res)=&gt;{}).listen(&quot;3000&quot;,&quot;localhost&quot;,()=&gt;{})</code></li>
<li>使用：
<ul>
<li>开启服务器：<code v-pre>createServer((req,res)=&gt;{})</code>
<ul>
<li>参数：函数，该函数可接受两个参数
<ul>
<li>参数1：<code v-pre>req</code>，请求，前端到后台的信息</li>
<li>参数2：<code v-pre>res</code>，响应，后台到前端的信息</li>
</ul>
</li>
<li>返回值是一个一个对象</li>
</ul>
</li>
<li>监听服务器：<code v-pre>listen(&quot;3000&quot;,&quot;localhost&quot;,()=&gt;{})</code>
<ul>
<li>开启服务器的返回值的方法（可以连缀）</li>
<li>参数1：端口号</li>
<li>参数2：地址（可选，默认localhost）</li>
<li>参数3：函数，服务器开启成功执行的代码（可选）</li>
</ul>
</li>
<li>方法：
<ul>
<li>前端请求的地址：<code v-pre>req.url</code></li>
<li>给前端发送的数据：<code v-pre>res.write()</code></li>
<li>结束当前请求：<code v-pre>res.end()</code>  必须写在最后</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 导入这个模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>

<span class="token comment">// 2. createServer()</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 只要前端有请求进来, 就会触发这个函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'有请求进来进'</span><span class="token punctuation">)</span>

<span class="token comment">// 当你前端的请求进来的时候, 我们就会执行这个函数</span>
<span class="token comment">// 根据不同的请求来触发不同的效果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 监听一个端口号</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'server running at port 8080!'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h3>
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
</ul>
</li>
</ul>
<p><strong>返回值的属性</strong></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>含义</th>
<th>例子</th>
</tr>
</thead>
<tbody>
<tr>
<td>protocol</td>
<td>协议</td>
<td>http</td>
</tr>
<tr>
<td>slashes</td>
<td>双斜杠</td>
<td>true</td>
</tr>
<tr>
<td>auth</td>
<td>作者</td>
<td>null</td>
</tr>
<tr>
<td>host</td>
<td>服务器+端口</td>
<td>'localhost:8002'</td>
</tr>
<tr>
<td>port</td>
<td>端口</td>
<td>'8002'</td>
</tr>
<tr>
<td>hostname</td>
<td>服务器</td>
<td>'localhost'</td>
</tr>
<tr>
<td>hash</td>
<td>锚点（哈希）</td>
<td>'#title'</td>
</tr>
<tr>
<td>search</td>
<td>数据</td>
<td>'?username=sdfsdf&amp;content=234234'</td>
</tr>
<tr>
<td>query</td>
<td>除了?的数据</td>
<td>'username=sdfsdf&amp;content=234234'</td>
</tr>
<tr>
<td>pathname</td>
<td>文件路径</td>
<td>/aaa'</td>
</tr>
<tr>
<td>path</td>
<td>地址+信息</td>
<td>'/aaa?username=sdfsdf&amp;content=234234'</td>
</tr>
<tr>
<td>href</td>
<td>完整地址</td>
<td>'http://localhost:8002/aaa?username=sdfsdf&amp;content=234234#title'</td>
</tr>
</tbody>
</table>
<h3 id="querystring" tabindex="-1"><a class="header-anchor" href="#querystring" aria-hidden="true">#</a> querystring</h3>
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
<h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>node的下载工具</li>
<li>所有需要的 JS 相关的第三方，都可以直接在 npm 来下载</li>
<li>安装 node 的时候就安装完成了</li>
</ul>
</div>
<ul>
<li>
<p>npm 的检测</p>
<ul>
<li>打开命令行窗口</li>
<li>输入指令 $ npm --version</li>
<li>看到版本号就表示安装成功了</li>
</ul>
</li>
<li>
<p><strong>npm 的使用</strong></p>
</li>
<li>
<p>查看版本号：<code v-pre>npm -v</code></p>
</li>
<li>
<p>生成package.json(项目的配置信息)：npm init</p>
</li>
<li>
<p>下载模块：<code v-pre>npm install</code> 模块名（npm i 模块名）</p>
<ul>
<li>指定版本号: <code v-pre>npm install jQuery@版本号</code></li>
<li>下载到全局：<code v-pre>-g</code></li>
<li>下载到上线环境（运行依赖，项目依赖）：<code v-pre>-S</code></li>
<li>下载到开发环境（开发依赖）：<code v-pre>-D</code></li>
</ul>
</li>
<li>
<p>卸载模块：<code v-pre>npm uninstall</code> 模块名（npm uni 模块名）</p>
<ul>
<li>安装到哪个位置就卸载对应位置的模块</li>
</ul>
</li>
<li>
<p><strong>npm 清楚缓存</strong></p>
<ul>
<li>软清除
<ul>
<li>清除下载记录</li>
<li>打开命令行，随便哪个目录</li>
<li>输入指令 <code v-pre>npm cache clear -f</code></li>
<li>会清楚你的下载记录</li>
</ul>
</li>
<li>强力清楚
<ul>
<li>打开我的电脑</li>
<li>c盘</li>
<li>users / 用户</li>
<li>找到你电脑的名字那个文件夹</li>
<li>appData 的文件夹
<ul>
<li>这个文件夹可能是个隐藏的文件夹</li>
</ul>
</li>
<li>roaming 文件夹</li>
<li>找到 npm-cache 文件夹，直接删除就行了</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="利用node跨域" tabindex="-1"><a class="header-anchor" href="#利用node跨域" aria-hidden="true">#</a> 利用node跨域</h2>
<ul>
<li>利用node服务器搭建代理服务器实现ajax的跨域请求</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 处理前端过来的url，处理成真正要请求资源的url</span>

<span class="token comment">// 再利用http或https模块发起请求</span>
https<span class="token operator">/</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">resObj</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 解析请求到的对象，解析出数据</span>
    resObj<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">// 利用当前服务器的响应头对象，将数据发给前端</span>
        res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
