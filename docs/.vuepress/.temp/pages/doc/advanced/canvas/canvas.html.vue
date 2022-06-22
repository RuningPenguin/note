<template><div><h1 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> canvas</h1>
<p><a href="https://www.runoob.com/w3cnote/html5-canvas-intro.html" target="_blank" rel="noopener noreferrer">参考文档<ExternalLinkIcon/></a></p>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<ul>
<li><code v-pre>&lt;canvas id=&quot;tutorial&quot; width=&quot;300&quot; height=&quot;300&quot;&gt;&lt;/canvas&gt;</code></li>
<li>width、height : 单位px,支Ï持css定义(不推荐)</li>
<li>获取canvas实例:<code v-pre>var canvas = document.getElementById('tutorial');</code></li>
<li>获得 2d 上下文:<code v-pre>var ctx = canvas.getContext('2d');</code></li>
<li>检测该浏览器是否支持canvas:<code v-pre>canvas.getContext</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 代码模板</span>
<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//开始代码</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标准图像" tabindex="-1"><a class="header-anchor" href="#标准图像" aria-hidden="true">#</a> 标准图像</h2>
<ul>
<li>绘制标准图像(矩形)。 图像默认颜色:<code v-pre>#000000</code>
<ol>
<li>
<p><strong>fillRect(x, y, width, height)</strong>：绘制一个Ï填充的矩形。</p>
</li>
<li>
<p><strong>strokeRect(x, y, width, height)</strong>：绘制一个矩形的边框。</p>
</li>
<li>
<p><strong>clearRect(x, y, widh, height)</strong>：清除指定的矩形区域，然后这块区域会变的完全透明。</p>
</li>
</ol>
</li>
</ul>
<blockquote>
<p><strong>x,y</strong>:指举行左上角的坐标,(相对于canvas的坐标原点)</p>
<p><strong>width,height</strong>:绘制图像的宽和高</p>
</blockquote>
<h2 id="绘制路径" tabindex="-1"><a class="header-anchor" href="#绘制路径" aria-hidden="true">#</a> 绘制路径</h2>
<ul>
<li><code v-pre>&lt;canvas&gt;</code> 只支持一种原生的图形绘制：<strong>矩形</strong>。所有其他图形都至少需要生成一种路径 (<code v-pre>path</code>)。</li>
<li>图形的基本元素是路径,一个路径必然是闭合的</li>
<li>绘制路径的步骤:
<ol>
<li>创建路径的起点 <strong>beginPath()</strong></li>
<li>调用绘制方法绘制出路径 <strong>moveTo(x, y)</strong></li>
<li>将绘制好的路径封闭 <strong>closePath()</strong></li>
<li>路径生成,通过描边或填充来渲染图形 <strong>stroke() || fill()</strong></li>
</ol>
</li>
<li>api
<ol>
<li><strong>beginPath()</strong> 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径</li>
<li><strong>moveTo(x, y)</strong> 把画笔移动到指定的坐标<code v-pre>(x, y)</code>。相当于设置路径的起始点坐标</li>
<li><strong>closePath()</strong> 闭合路径之后，图形绘制命令又重新指向到上下文中</li>
<li><strong>stroke()</strong> 通过线条来绘制图形轮廓。       <strong>fill()</strong> 通过路径填充的内容区域生成是心的圆</li>
</ol>
</li>
</ul>
<h3 id="绘制线段" tabindex="-1"><a class="header-anchor" href="#绘制线段" aria-hidden="true">#</a> 绘制线段</h3>
<ul>
<li><strong>lineTo(x,y)</strong> 绘制一条从当前位置到指定坐标(x,y)的直线</li>
</ul>
<h3 id="绘制圆弧" tabindex="-1"><a class="header-anchor" href="#绘制圆弧" aria-hidden="true">#</a> 绘制圆弧</h3>
<ul>
<li><strong>arc(x, y, r, startAngle, endAngle, anticlockwise)</strong>: 以<code v-pre>(x, y)</code> 为圆心，以<code v-pre>r</code> 为半径，从 <code v-pre>startAngle</code> 弧度开始到<code v-pre>endAngle</code>弧度结束。<code v-pre>anticlosewise</code> 是布尔值，<code v-pre>true</code> 表示逆时针，<code v-pre>false</code> 表示顺时针(默认是顺时针)。</li>
</ul>
<blockquote>
<ol>
<li>这里的度数都是弧度。</li>
<li><code v-pre>0</code> 弧度是指的 <code v-pre>x</code> 轴正方向。</li>
</ol>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>radians<span class="token operator">=</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">/</span><span class="token number">180</span><span class="token punctuation">)</span><span class="token operator">*</span>degrees   <span class="token comment">//角度转换成弧度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>arcTo(x1, y1, x2, y2, radius)</strong>: 根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。</li>
</ul>
<blockquote>
<p>第 1 条切线：起始点和控制点1决定的直线。</p>
<p>第 2 条切线：控制点1 和控制点2决定的直线。</p>
<p><strong>其实绘制的圆弧就是与这两条直线相切的圆弧。</strong></p>
</blockquote>
<h3 id="贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#贝塞尔曲线" aria-hidden="true">#</a> 贝塞尔曲线</h3>
<ul>
<li><strong>quadraticCurveTo(cp1x, cp1y, x, y)</strong> 绘制二次贝塞尔曲线</li>
</ul>
<blockquote>
<p>参数1,2: 控制点坐标</p>
<p>参数3,4: 结束点坐标</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//起始点</span>
    <span class="token keyword">var</span> cp1x <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">,</span> cp1y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>  <span class="token comment">//控制点</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// 结束点</span>
    <span class="token comment">//绘制二次贝塞尔曲线</span>
    ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>cp1x<span class="token punctuation">,</span> cp1y<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>cp1x<span class="token punctuation">,</span> cp1y<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/274915666-5b74dd8ecb2e2_articlex.png" />
</blockquote>
<ul>
<li>
<p><strong>bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)</strong> 绘制三次贝塞尔曲线</p>
<blockquote>
<p>参数 1 和 2：控制点 1 的坐标</p>
<p>参数 3 和 4：控制点 2 的坐标</p>
<p>参数 5 和 6：结束点的坐标</p>
</blockquote>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//起始点</span>
    <span class="token keyword">var</span> cp1x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> cp1y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>  <span class="token comment">//控制点1</span>
    <span class="token keyword">var</span> cp2x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> cp2y <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span>  <span class="token comment">//控制点2</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// 结束点</span>
    <span class="token comment">//绘制二次贝塞尔曲线</span>
    ctx<span class="token punctuation">.</span><span class="token function">bezierCurveTo</span><span class="token punctuation">(</span>cp1x<span class="token punctuation">,</span> cp1y<span class="token punctuation">,</span> cp2x<span class="token punctuation">,</span> cp2y<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>cp1x<span class="token punctuation">,</span> cp1y<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>cp2x<span class="token punctuation">,</span> cp2y<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/3947786617-5b74dd8ec8678_articlex.png"/>
</blockquote>
<h2 id="添加样式颜色" tabindex="-1"><a class="header-anchor" href="#添加样式颜色" aria-hidden="true">#</a> 添加样式颜色</h2>
<h3 id="设置样式" tabindex="-1"><a class="header-anchor" href="#设置样式" aria-hidden="true">#</a> 设置样式</h3>
<pre><code>-  **fillStyle = color** 设置图形的填充颜色 (background)
-  **strokeStyle = color** 设置图形轮廓的颜色 (border)
</code></pre>
<blockquote>
<p>color: 可以是css颜色字符串、渐变对象、图案对象</p>
<p>默认情况下: 线条和填充颜色都是黑色</p>
<p><strong>设置过一次样式后会改变默认样式,下次取上一次设置的样式</strong></p>
</blockquote>
<h3 id="透明度" tabindex="-1"><a class="header-anchor" href="#透明度" aria-hidden="true">#</a> 透明度</h3>
<pre><code>- **globalAlpha = transparencyValue**: 这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
</code></pre>
<blockquote>
<p><strong>影响全局的透明度</strong></p>
<p>需要绘制大量拥有相同透明度的图形时候相当高效。</p>
<p>设置单个样式rgba()设置透明度更加好一些</p>
</blockquote>
<h3 id="线条样式" tabindex="-1"><a class="header-anchor" href="#线条样式" aria-hidden="true">#</a> 线条样式</h3>
<pre><code>- **lineWidth** 线宽
</code></pre>
<blockquote>
<p>只能是正值,默认是0</p>
<p>起始点和终点的连线为中心，<strong>上下各占线宽的一半</strong></p>
</blockquote>
<ul>
<li><strong>lineCap</strong> 线条末端样式</li>
</ul>
<blockquote>
<p>可选值: <code v-pre>butt</code>  <code v-pre>round</code> <code v-pre>square</code></p>
<p><strong>butt</strong> 线条末端以方形结束</p>
<p><strong>round</strong> 线条末端以圆形结束</p>
<p><strong>square</strong> 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域</p>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/3380216230-5b74dd8e97e85_articlex.png" style="zoom:70%;" />
</blockquote>
<ul>
<li><strong>lineJoin=type</strong> 设置同一个path内,线条与线条接合处的样式</li>
</ul>
<blockquote>
<p>可选值有: <code v-pre>round</code> <code v-pre>bevel</code>  <code v-pre>miter</code></p>
<p><strong>round</strong> 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</p>
<p><strong>bevel</strong> 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</p>
<p><strong>miter</strong> (默认) 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。</p>
</blockquote>
<ul>
<li><strong>setLineDash(),lineDashOffset=0</strong> 虚线</li>
</ul>
<blockquote>
<p><code v-pre>setLineDash</code> 方法接受一个数组，来指定线段与间隙的交替</p>
<p><code v-pre>lineDashOffset</code>属性设置起始偏移量。</p>
<p><strong>getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。</strong></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [实线长度, 间隙长度]</span>
    ctx<span class="token punctuation">.</span>lineDashOffset <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/2805401035-5b74dd8e6833c_articlex.png" style="zoom:67%;" />
</blockquote>
<h2 id="绘制文本" tabindex="-1"><a class="header-anchor" href="#绘制文本" aria-hidden="true">#</a> 绘制文本</h2>
<ul>
<li><strong>fillText(text, x, y [, maxWidth])</strong>  在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的 (background)</li>
<li><strong>strokeText(text, x, y [, maxWidth])</strong>  在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的 (border)</li>
</ul>
<h3 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式" aria-hidden="true">#</a> 文本样式</h3>
<pre><code>- **font = value** 当前我们用来绘制文本的样式。这个字符串使用和 `CSS font` 属性相同的语法。 默认的字体是 `10px sans-serif`
- **textAlign = value** 文本对齐选项。 可选的值包括：`start`, `end`, `left`, `right` or `center`。 默认值是 `start`
- **textBaseline = value**  基线对齐选项，可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic`
- **direction = value**  文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit`
</code></pre>
<h2 id="绘制图片" tabindex="-1"><a class="header-anchor" href="#绘制图片" aria-hidden="true">#</a> 绘制图片</h2>
<ul>
<li>
<p>首先需要img实例(可以是img标签,也可以是new Image)</p>
<h3 id="绘制图片-1" tabindex="-1"><a class="header-anchor" href="#绘制图片-1" aria-hidden="true">#</a> 绘制图片</h3>
<blockquote>
<ol>
<li>获取(生成)图片实例(设置图片实例src)</li>
<li>绘制图片 <strong>drawImage(img,x,y)</strong></li>
</ol>
<ul>
<li><strong>我们应该保证在 <code v-pre>img</code> 绘制完成之后再 <code v-pre>drawImage</code></strong>(img.onload)</li>
</ul>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// img 标签</span>
    <span class="token comment">// let img = document.querySelector('img')</span>
    <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://img0.baidu.com/it/u=2456468987,3284231714&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg'</span>
    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缩放图片" tabindex="-1"><a class="header-anchor" href="#缩放图片" aria-hidden="true">#</a> 缩放图片</h3>
<blockquote>
<p><strong>drawImage(image, x, y, width, height)</strong></p>
<p><strong>image</strong>: 要渲染的图片实例</p>
<p><strong>x</strong>:  图片在canvas中方的坐标</p>
<p><strong>y</strong>:  图片在canvas中方的坐标</p>
<p><strong>windth</strong>: 图片在canvas中的宽度</p>
<p><strong>height</strong>: 图片在canvas中的高度</p>
</blockquote>
<h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h3>
<blockquote>
<p><strong>drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)</strong></p>
<p><strong>image</strong>: 要渲染的图片实例</p>
<p><strong>前 4 个是定义图像源的切片位置和大小，后 4 个则是定义切片的目标显示位置和大小。</strong></p>
</blockquote>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/2106688680-54566fa3d81dc_articlex.jpeg" />
</li>
</ul>
<h2 id="状态的保存和恢复" tabindex="-1"><a class="header-anchor" href="#状态的保存和恢复" aria-hidden="true">#</a> 状态的保存和恢复</h2>
<ul>
<li><strong><code v-pre>save</code> 和 <code v-pre>restore</code> 方法是用来保存和恢复 <code v-pre>canvas</code> 状态的，都没有参数</strong></li>
<li><code v-pre>Canvas</code> 的状态就是当前画面应用的所有样式和变形的一个快照。</li>
</ul>
<blockquote>
<p><strong>save</strong>: Canvas状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。</p>
<p>一个绘画的状态包括:</p>
<ol>
<li>当前应用的变形 (移动、旋转、缩放)</li>
<li><code v-pre>strokeStyle</code>, <code v-pre>fillStyle</code>, <code v-pre>globalAlpha</code>, <code v-pre>lineWidth</code>, <code v-pre>lineCap</code>, <code v-pre>lineJoin</code>, <code v-pre>miterLimit</code>, <code v-pre>shadowOffsetX</code>, <code v-pre>shadowOffsetY</code>, <code v-pre>shadowBlur</code>, <code v-pre>shadowColor</code>, <code v-pre>globalCompositeOperation </code>的值</li>
<li>当前的裁切路径（<code v-pre>clipping path</code>)</li>
</ol>
<p><strong>可以调用任意多次 <code v-pre>save</code>方法</strong>(类似数组的<code v-pre>push()</code>)。</p>
</blockquote>
<blockquote>
<p><strong>restore</strong>: 每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复(类似数组的 <code v-pre>pop()</code>)。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ctx<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 使用默认设置绘制一个矩形</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// 保存默认状态</span>
 
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'red'</span>       <span class="token comment">// 在原有配置基础上对颜色做改变</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用新的设置绘制一个矩形</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// 保存当前状态</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#FFF'</span>       <span class="token comment">// 再次改变颜色配置</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 使用新的配置绘制一个矩形</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// 重新加载之前的颜色状态</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 使用上一次的配置绘制一个矩形</span>
 
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// 加载默认颜色配置</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 使用加载的配置绘制一个矩形</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变形" tabindex="-1"><a class="header-anchor" href="#变形" aria-hidden="true">#</a> 变形</h2>
<ul>
<li><strong>translate(x,y)</strong>: 用来移动 <code v-pre>canvas</code> 的<strong>原点</strong>到指定的位置</li>
</ul>
<blockquote>
<ol>
<li>
<p><code v-pre>translate(x, y)</code></p>
</li>
<li>
<p>用来移动 <code v-pre>canvas</code> 的<strong>原点</strong>到指定的位置</p>
</li>
<li>
<p><code v-pre>translate</code> 方法接受两个参数。<code v-pre>x</code> 是左右偏移量，<code v-pre>y</code> 是上下偏移量，如右图所示。</p>
</li>
<li>
<p>在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 <code v-pre>restore</code> 方法比手动恢复原先的状态要简单得多。又如果你是在一个循环中做位移但没有保存和恢复 <code v-pre>canvas</code> 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 <code v-pre>canvas</code> 范围以外了。</p>
</li>
<li>
<p><strong>注意：<code v-pre>translate</code> 移动的是 <code v-pre>canvas</code> 的坐标原点(坐标变换)。</strong></p>
</li>
</ol>
</blockquote>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/829832336-5b74dd8e3ad9a_articlex.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ctx<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//保存坐原点平移之前的状态</span>
    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//恢复到最初状态</span>
    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>rotate(angle)</strong>: 旋转坐标轴。</li>
</ul>
<blockquote>
<ol>
<li>
<p>这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。</p>
</li>
<li>
<p>旋转的中心是坐标原点。</p>
</li>
</ol>
</blockquote>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/3322150878-5b74dd8e2b6a4_articlex.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ctx<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">180</span> <span class="token operator">*</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
  ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>scale(x, y)</strong>: 我们用它来增减图形在 <code v-pre>canvas</code> 中的像素数目，对形状，位图进行缩小或者放大。</li>
</ul>
<blockquote>
<ol>
<li>
<p><code v-pre>scale</code>方法接受两个参数。<code v-pre>x,y</code> 分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩 小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。</p>
</li>
<li>
<p>默认情况下，<code v-pre>canvas</code> 的 1 单位就是 1 个像素。举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。同理，设置为 2.0 时，1 个单位就对应变成了 2 像素，绘制的结果就是图形放大了 2 倍。</p>
</li>
</ol>
</blockquote>
<ul>
<li><strong>transform(变形矩阵)</strong>: transform(a, b, c, d, e, f)</li>
</ul>
<blockquote>
<ol>
<li>
<p><img src="https://www.runoob.com/wp-content/uploads/2018/12/2958376259-5b74dd8e15192_articlex.png" alt="img"></p>
</li>
<li>
<ul>
<li>a (m11): Horizontal scaling.</li>
</ul>
</li>
</ol>
<ul>
<li>b (m12): Horizontal skewing.</li>
<li>c (m21): Vertical skewing.</li>
<li>d (m22): Vertical scaling.</li>
<li>e (dx): Horizontal moving.</li>
<li>f (dy): Vertical moving.</li>
</ul>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ctx<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.runoob.com/wp-content/uploads/2018/12/489430190-5b74dd8e17ad2_articlex.png" style="zoom:67%;" />
<h2 id="合成" tabindex="-1"><a class="header-anchor" href="#合成" aria-hidden="true">#</a> 合成</h2>
<ul>
<li><strong>globalCompositeOperation = type</strong>:</li>
</ul>
<blockquote>
<p>在前面的所有例子中、，我们总是将一个图形画在另一个之上，对于其他更多的情况，仅仅这样是远远不够的。比如，对合成的图形来说，绘制顺序会有限制。不过，我们可以利用 globalCompositeOperation 属性来改变这种状况。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ctx<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">"source-over"</span><span class="token punctuation">;</span> <span class="token comment">//全局合成操作</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️   代码运行   ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️</p>
<img src="https://www.runoob.com/wp-content/uploads/2018/12/1858023544-5b74dd8e0813d.png">
<h3 id="type的可选值" tabindex="-1"><a class="header-anchor" href="#type的可选值" aria-hidden="true">#</a> type的可选值</h3>
<p>老图像:蓝色。 新图像:红色。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
<th>预览</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>source-in</strong></td>
<td>仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的。(包括其他的老图像区域也会透明)</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/2183873141-5b74dd8e02a4a_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>source-out</strong></td>
<td>仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明。(老图像也不显示)</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/2402253130-5b74dd8dd7621_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>source-atop</strong></td>
<td>新图像仅仅显示与老图像重叠区域。老图像仍然可以显示。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/1206278247-5b74dd8dd9036_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>destination-over</strong></td>
<td>新图像会在老图像的下面。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/2492190378-5b74dd8dca608_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>destination-in</strong></td>
<td>仅仅新老图像重叠部分的老图像被显示，其他区域全部透明。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/1617768463-5b74dd8d99843_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>destination-out</strong></td>
<td>仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/1921976761-5b74dd8daba2d_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>destination-atop</strong></td>
<td>老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/4055109887-5b74dd8db283c_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>lighter</strong></td>
<td>新老图像都显示，但是重叠区域的颜色做加处理。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/1200224117-5b74dd8d9453e_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>darken</strong></td>
<td>保留重叠部分最黑的像素。(每个颜色位进行比较，得到最小的)</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/3835256030-5b74dd8d92ba5_articlex.png" style="zoom:50%"  /></td>
<td><code v-pre>blue: #0000ff </code> <code v-pre>red: #ff0000</code> 所以重叠部分的色：<strong>#000000</strong></td>
</tr>
<tr>
<td><strong>lighten</strong></td>
<td>保证重叠部分最量的像素。(每个颜色位进行比较，得到最大的)</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/1617768463-5b74dd8d99843_articlex.png" style="zoom:50%"  /></td>
<td><code v-pre>blue: #0000ff </code> <code v-pre>red: #ff0000</code>  所以重叠部分的色：<strong>#ff00ff</strong>。</td>
</tr>
<tr>
<td><strong>xor</strong></td>
<td>重叠部分会变成透明。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/2521026104-5b74dd8d6abd6_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
<tr>
<td><strong>copy</strong></td>
<td>只有新图像会被保留，其余的全部被清除(边透明)。</td>
<td><img src="https://www.runoob.com/wp-content/uploads/2018/12/2454891415-5b74dd8d67aec_articlex.png" style="zoom:50%"  /></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="路径裁剪" tabindex="-1"><a class="header-anchor" href="#路径裁剪" aria-hidden="true">#</a> 路径裁剪</h2>
<ul>
<li><strong>clip()</strong>: 把已经创建的路径转换成裁剪路径</li>
</ul>
<blockquote>
<ol>
<li>
<p>裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏</p>
</li>
<li>
<p><strong>clip() 只能遮罩在这个方法调用之后绘制的图像，如果是 clip() 方法调用之前绘制的图像，则无法实现遮罩。</strong></p>
</li>
</ol>
</blockquote>
<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>
<ol>
<li>
<p>我们可用通过 <code v-pre>canvas</code> 的方法或者自定义的方法把图像会知道到 <code v-pre>canvas</code> 上。正常情况，我们能看到绘制的结果是在脚本执行结束之后。例如，我们不可能在一个 <code v-pre>for</code> 循环内部完成动画。</p>
</li>
<li>
<p>也就是，为了执行动画，我们需要一些可以定时执行重绘的方法。</p>
</li>
<li>
<p>一般用到下面三个方法：</p>
</li>
<li>
<ol>
<li><code v-pre>setInterval()</code></li>
<li><code v-pre>setTimeout()</code></li>
<li><code v-pre>requestAnimationFrame()</code></li>
</ol>
</li>
<li></li>
</ol>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> Api</h2>
<ul>
<li>
<p>canvas.getContext 获取上下文 @return:上下文实例  (canvas api)</p>
<blockquote>
<p>⬇️⬇️⬇️⬇️-上下文实例api-⬇️⬇️⬇️⬇️</p>
</blockquote>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">属性</th>
<th>参数</th>
<th style="text-align:left">默认值</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>fillRect</strong></td>
<td style="text-align:left"></td>
<td>x, y, width, height</td>
<td style="text-align:left"></td>
<td>绘制一个填充的矩形</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>strokeRect</strong></td>
<td style="text-align:left"></td>
<td>x, y, width, height</td>
<td style="text-align:left"></td>
<td>绘制一个矩形的边框</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>clearRect</strong></td>
<td style="text-align:left"></td>
<td>x, y, widh, height</td>
<td style="text-align:left"></td>
<td>清除指定的矩形区域，然后这块区域会变的完全透明</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>beginPath</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>moveTo</strong></td>
<td style="text-align:left"></td>
<td>x, y</td>
<td style="text-align:left"></td>
<td>把画笔移动到指定的坐标<code v-pre>(x, y)</code>。相当于设置路径的起始点坐标</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>closePath</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>闭合路径之后，图形绘制命令又重新指向到上下文中(会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>stroke</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>通过线条来绘制图形轮廓。</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>fill</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>通过路径填充的内容区域生成是心的圆</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>lineTo</strong></td>
<td style="text-align:left"></td>
<td>x,y</td>
<td style="text-align:left"></td>
<td>绘制一条从当前位置到指定坐标<code v-pre>(x, y)</code>的直线</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>arc</strong></td>
<td style="text-align:left"></td>
<td>x, y, r, startAngle, endAngle, anticlockwise</td>
<td style="text-align:left"></td>
<td>以<code v-pre>(x, y)</code> 为圆心，以<code v-pre>r</code> 为半径，从 <code v-pre>startAngle</code> 弧度开始到<code v-pre>endAngle</code>弧度结束。<code v-pre>anticlosewise</code> 是布尔值，<code v-pre>true</code> 表示逆时针，<code v-pre>false</code> 表示顺时针(默认是顺时针)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>arcTo</strong></td>
<td style="text-align:left"></td>
<td>x1, y1, x2, y2, radius</td>
<td style="text-align:left"></td>
<td>根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>quadraticCurveTo</strong></td>
<td style="text-align:left"></td>
<td>cp1x, cp1y, x, y</td>
<td style="text-align:left"></td>
<td>绘制二次贝塞尔曲线 (参数1,2: 控制点坐标;参数3,4: 结束点坐标)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>bezierCurveTo</strong></td>
<td style="text-align:left"></td>
<td>cp1x, cp1y, cp2x, cp2y, x, y</td>
<td style="text-align:left"></td>
<td>绘制三次贝塞尔曲线 (参数 1 和 2：控制点 1 的坐标;参数 3 和 4：控制点 2 的坐标;参数 5 和 6：结束点的坐标)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>fillStyle</strong></td>
<td>css Color</td>
<td style="text-align:left"></td>
<td>设置图形的填充颜色 (background)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>strokeStyle</strong></td>
<td>css Color</td>
<td style="text-align:left"></td>
<td>设置图形轮廓的颜色 (border)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>globalAlpha</strong></td>
<td>[0.0 - 1.0]</td>
<td style="text-align:left">1.0</td>
<td>这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明）</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>lineWidth</strong></td>
<td>只能是正值</td>
<td style="text-align:left">0</td>
<td>线宽</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>lineCap</strong></td>
<td>[<code v-pre>butt</code>  <code v-pre>round</code> <code v-pre>square</code>]</td>
<td style="text-align:left"></td>
<td>线条末端样式 (可选值: <code v-pre>butt</code>  <code v-pre>round</code> <code v-pre>square</code>)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>lineJoin</strong></td>
<td>[<code v-pre>round</code> <code v-pre>bevel</code>  <code v-pre>miter</code>]</td>
<td style="text-align:left"></td>
<td>设置同一个path内,线条与线条接合处的样式 (可选值有: <code v-pre>round</code> <code v-pre>bevel</code>  <code v-pre>miter</code>)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>setLineDash</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>虚线 (<code v-pre>setLineDash</code> 方法接受一个数组，来指定线段与间隙的交替;<code v-pre>lineDashOffset</code>属性设置起始偏移量。)</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>lineDashOffset</strong></td>
<td></td>
<td style="text-align:left"></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>fillText</strong></td>
<td style="text-align:left"></td>
<td>text, x, y [, maxWidth]</td>
<td style="text-align:left"></td>
<td>在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>strokeText</strong></td>
<td style="text-align:left"></td>
<td>text, x, y [, maxWidth]</td>
<td style="text-align:left"></td>
<td>在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>font</strong></td>
<td></td>
<td style="text-align:left"><code v-pre>10px sans-serif</code></td>
<td>当前我们用来绘制文本的样式。这个字符串使用和 <code v-pre>CSS font</code> 属性相同的语法。 默认的字体是 <code v-pre>10px sans-serif</code></td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>textAlign</strong></td>
<td>[<code v-pre>start</code>, <code v-pre>end</code>, <code v-pre>left</code>, <code v-pre>right</code>  <code v-pre>center</code>]</td>
<td style="text-align:left"><code v-pre>start</code></td>
<td>文本对齐选项。 可选的值包括：<code v-pre>start</code>, <code v-pre>end</code>, <code v-pre>left</code>, <code v-pre>right</code> or <code v-pre>center</code>。</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>textBaseline</strong></td>
<td>[<code v-pre>top</code>, <code v-pre>hanging</code>, <code v-pre>middle</code>, <code v-pre>alphabetic</code>, <code v-pre>ideographic</code>, <code v-pre>bottom</code>]</td>
<td style="text-align:left"><code v-pre>alphabetic</code></td>
<td>基线对齐选项，可选的值包括：<code v-pre>top</code>, <code v-pre>hanging</code>, <code v-pre>middle</code>, <code v-pre>alphabetic</code>, <code v-pre>ideographic</code>, <code v-pre>bottom</code>。</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>direction</strong></td>
<td>[<code v-pre>ltr</code>, <code v-pre>rtl</code>, <code v-pre>inherit</code>]</td>
<td style="text-align:left"><code v-pre>inherit</code></td>
<td>文本方向。可能的值包括：<code v-pre>ltr</code>, <code v-pre>rtl</code>, <code v-pre>inherit</code>。</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>drawImage</strong></td>
<td style="text-align:left"></td>
<td>image, x, y, [?width], [?height]</td>
<td style="text-align:left"></td>
<td>绘制图片 + 图片大小</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td>image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight</td>
<td style="text-align:left"></td>
<td>绘制图片 + 切片</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>save</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>保存状态</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>restore</strong></td>
<td style="text-align:left"></td>
<td></td>
<td style="text-align:left"></td>
<td>恢复状态</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>translate</strong></td>
<td style="text-align:left"></td>
<td>[<code v-pre>x</code>,<code v-pre>y</code>]</td>
<td style="text-align:left"></td>
<td>用来移动 <code v-pre>canvas</code> 的<strong>原点</strong>到指定的位置</td>
<td><code v-pre>x</code> 是左右偏移量，<code v-pre>y</code> 是上下偏移量，如右图所示</td>
</tr>
<tr>
<td style="text-align:left"><strong>rotate</strong></td>
<td style="text-align:left"></td>
<td>angle</td>
<td style="text-align:left"></td>
<td>旋转坐标轴。</td>
<td>旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值</td>
</tr>
<tr>
<td style="text-align:left"><strong>scale</strong></td>
<td style="text-align:left"></td>
<td>[<code v-pre>x</code>,<code v-pre>y</code>]</td>
<td style="text-align:left"></td>
<td>增减图形在 <code v-pre>canvas</code> 中的像素数目，对形状，位图进行缩小或者放大。</td>
<td>它们都必须是正值。值比 1.0 小表示缩 小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。</td>
</tr>
<tr>
<td style="text-align:left"><strong>transform</strong></td>
<td style="text-align:left"></td>
<td>a, b, c, d, e, f</td>
<td style="text-align:left"></td>
<td>变形矩阵</td>
<td>变形矩阵</td>
</tr>
</tbody>
</table>
</div></template>
