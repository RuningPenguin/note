<template><div><h1 id="css3" tabindex="-1"><a class="header-anchor" href="#css3" aria-hidden="true">#</a> CSS3</h1>
<h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2>
<p><strong>​通过标签的属性选择</strong></p>
<div class="custom-container tip"><p class="custom-container-title">属性选择器</p>
<ol>
<li><code v-pre>img[title]</code>				  	选中有title属性的img</li>
<li><code v-pre>img [title=&quot;mao&quot;]</code>		选中title=mao的图片</li>
<li><code v-pre>img[title~=&quot;mao&quot;]</code>		选择mao是词列表的img（词列表:一个属性有多个值）</li>
<li><code v-pre>img[title^=&quot;mao&quot;]</code>		选择开头等于mao的img</li>
<li><code v-pre>img[title$=&quot;mao&quot;]</code>		选中结尾等于mao的img</li>
<li><code v-pre>img[title*=&quot;mao&quot;]</code>		选中title属性中有mao的img</li>
<li><code v-pre>img[title|=&quot;mao&quot;]</code>		选中title值为mao或mao-的img</li>
</ol>
</div>
<h2 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器" aria-hidden="true">#</a> 结构伪类选择器</h2>
<h3 id="同级下的相同标签" tabindex="-1"><a class="header-anchor" href="#同级下的相同标签" aria-hidden="true">#</a> 同级下的相同标签</h3>
<p>​</p>
<div class="custom-container tip"><p class="custom-container-title">先找所有同级下的位置，再找标签</p>
<p><code v-pre>​:first-chid</code>				选中同级下的第一个<br>
<code v-pre>​:last-chid</code>				选中统计下的最后一个<br>
<code v-pre>​:only-chid</code>				同级下只有一个时选中<br>
​<code v-pre>:nth-last-chid()</code>	倒数匹配条件内容<br>
<code v-pre>​:nth-chid(n)</code>		选中匹陪条件的内容</p>
<div style="margin-left:80px;">​2n			even	偶数</div>
<div style="margin-left:80px;">​2n+1		odd	奇数</div>
<div style="margin-left:80px;">​	n				第几个</div>
</div>
<h3 id="同级下时不同标签" tabindex="-1"><a class="header-anchor" href="#同级下时不同标签" aria-hidden="true">#</a> 同级下时不同标签</h3>
<div class="custom-container tip"><p class="custom-container-title">先找标签，再找相同相同标签下的位置</p>
<p>​<code v-pre>:first-of-type</code>		  选中同级下的第一个<br>
​<code v-pre>:last-of-type	</code>	  选中同级下的第二个<br>
​<code v-pre>:only-of-type</code>		同级下只有一个时选中<br>
​<code v-pre>:nth-last-of-type()</code>		倒数匹配条件内容<br>
​<code v-pre>:nth-of-type()</code>	选中匹配条件的内容<br></p>
<div style="margin-left:80px;">​2n			even	偶数</div>
<div style="margin-left:80px;">​2n+1		odd	奇数</div>
<div style="margin-left:80px;">​	n				第几个</div>
</div>
<h2 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code v-pre>:root</code>		选中html</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">目标结构伪类选择器</p>
<p>匹配被url指向的元素，（必须配合锚点使用）<br>
​选中的url的盒子不能设置样式<br>
<code v-pre>​:target</code>			匹配配url选中的元素<br>
<code v-pre>​:target	p</code>	匹配被url指向的元素的后代<br></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">ui状态伪类选择器</p>
<p><code v-pre>:enabled</code>			表单元素可用状态选中<br>
<code v-pre>:disabled</code>			表单元素禁用状态时选中<br>
​<code v-pre>:checked</code>			表单元素选中状态时选中<br>
​<code v-pre>::selection</code>		文本内容选中状态时，改变字体背景和文字颜色<br></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">否定选择器</p>
<p><code v-pre>:not(选择器)</code>		除了自己其他元素都选中</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">否定选择器</p>
<p><code v-pre>:focus</code>				光标激活的样式</p>
</div>
<p>​</p>
<h2 id="层级选择器" tabindex="-1"><a class="header-anchor" href="#层级选择器" aria-hidden="true">#</a> 层级选择器</h2>
<div class="custom-container tip"><p class="custom-container-title">层级选择器</p>
<p>​父子（后代）<code v-pre>&gt;</code> 和空格<br>
​相邻（只能选择下面的） <code v-pre>+</code>	选择哥哥下面的第一个（同级）<br>
​通用（下面的全选） <code v-pre> ~</code>	选择哥哥下面的全部（同级）<br></p>
</div>
<h2 id="圆滑边框" tabindex="-1"><a class="header-anchor" href="#圆滑边框" aria-hidden="true">#</a> 圆滑边框</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>1个值</td>
<td>全部</td>
</tr>
<tr>
<td>2个值</td>
<td>左上 右下</td>
</tr>
<tr>
<td>3个值</td>
<td>左上 右上 左下</td>
</tr>
<tr>
<td>4个值</td>
<td>左上 右上 右下 左下</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>/* 正圆和椭圆 */
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>1px solid #000<span class="token punctuation">;</span><span class="token property">border-radius</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>1px solid #000<span class="token punctuation">;</span><span class="token property">border-radius</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看示例</summary>
<div style="width:100px;height:100px;border:1px solid #000;border-radius:50%;"></div>
<div style="width:200px;height:100px;border:1px solid #000;border-radius:100%;"></div>
</details>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p><strong>background</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- background-clip 样式 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>10px dotted #000<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


<span class="token comment">&lt;!-- background-origin 样式 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>10px dotted #000<span class="token punctuation">;</span><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo/企鹅.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token property">background-size</span><span class="token punctuation">:</span>50px 50px<span class="token punctuation">;</span><span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


<span class="token comment">&lt;!-- background-size 样式 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>10px dotted #000<span class="token punctuation">;</span><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo/企鹅.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>


<span class="token comment">&lt;!-- background-image 样式 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>10px dotted #000<span class="token punctuation">;</span><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo/企鹅-b.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo/企鹅.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token property">background-position</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">,</span> left top<span class="token punctuation">;</span><span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span><span class="token property">background-size</span><span class="token punctuation">:</span>50px 50px<span class="token punctuation">,</span>40px 40px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
  <tr>
    <th>属性名</th>
    <th>属性值</th>
    <th>说明</th>
    <th>预览</th>
  </tr>
  <tbody>
    <tr>
      <th rowspan="3">background-clip<br> 设置背景颜色的范围（背景剪裁）</th>
      <td>border-box 	<br>默认值。背景绘制在边框方框内（剪切成边框方框）</td> 
      <td rowspan="3">设置背景图像的剪切方式</td>
      <td>
        <div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-color:yellow;background-clip:border-box;"></div>
      </td>
    </tr>
    <tr>
      <td>padding-box 	<br>背景绘制在衬距方框内（剪切成衬距方框）</td> 
      <td>
        <div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-color:yellow;background-clip:padding-box;"></div>
      </td>
    </tr>
    <tr>
      <td>content-box 	<br>背景绘制在内容方框内（剪切成内容方框）</td> 
      <td>
        <div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-color:yellow;background-clip:content-box;"></div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="3">background-origin<br>设置背景图片的范围（背景原点）</th>
      <td>border-box 	<br>背景图像填充框的相对位置</td> 
      <td rowspan="3">设置背景图片的范围</td>
      <td>
        <div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-size:50px 50px;background-repeat: no-repeat;background-origin:border-box;">企鹅的学习笔记企鹅的学习笔记企鹅的学习笔记</div>
      </td>
    </tr>
    <tr>
      <td>padding-box 	<br>默认值 背景图像边界框的相对位置</td> 
      <td>
        <div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-size:50px 50px;background-repeat: no-repeat;background-origin:padding-box;">企鹅的学习笔记企鹅的学习笔记企鹅的学习笔记</div>
      </td>
    </tr>
    <tr>
      <td>content-box 	<br>背景图像的相对位置的内容框</td> 
      <td>
        <div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-size:50px 50px;background-repeat: no-repeat;background-origin:content-box;">企鹅的学习笔记企鹅的学习笔记企鹅的学习笔记</div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="5">background-size<br>背景图片大小</th>
      <td>100%	100%		<br>填满盒子，图片完整显示，会变形</td> 
      <td rowspan="5">设置背景图像的大小</td>
      <td>
        <div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-repeat: no-repeat;background-size:100% 100%;"></div>
      </td>
    </tr>
    <tr>
      <td>100%	auto 	<br>宽度占满，高度自适应</td> 
      <td>
        <div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-repeat: no-repeat;background-size:100%	auto;"></div>
      </td>
    </tr>
    <tr>
      <td>auto	100% 	<br>高度占满，宽度自适应</td> 
      <td>
        <div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-repeat: no-repeat;background-size:auto	100%;"></div>
      </td>
    </tr>
    <tr>
      <td>cover 	<br>填满盒子，等比缩放，图片不能完全显示</td> 
      <td>
        <div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-repeat: no-repeat;background-size:cover;"></div>
      </td>
    </tr>
    <tr>
      <td>contain 	<br>等比缩放，图片完整显示，不能填满盒子</td> 
      <td>
        <div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-repeat: no-repeat;background-size:contain;"></div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th>background-image<br>背景图片大小</th>
      <td> url(),url()	</td> 
      <td>一个盒子可以插入多个背景图片，但是需要逗号隔开，设置背景颜色时不可以加在第一个图片里</td>
      <td>
        <div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅-b.png),url(/logo/企鹅.png); background-position: right bottom, left top;background-repeat: no-repeat;background-size:50px 50px,40px 40px"></div>
      </td>
    </tr>
  </tbody>
</table>
<h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h2>
<table>
  <tr>
    <th>属性名</th>
    <th>属性值</th>
    <th>示例</th>
  </tr>
  <tr>
    <th>text-shadow  <br/> 文本阴影（不占位） </th>
    <td>水平位置	垂直位置	模糊度	颜色 <br/>水平（正右负左）垂直（正下负上）模糊度没有负值，多个用逗号隔开</td>
    <td>
      <div style="width:100px;height:60px;padding:10px;border:1px solid #000;text-shadow:3px 3px 2px #000;">企鹅</div>
    </td>
  </tr>
  <tr>
    <th>box-shadow  <br/> 盒子阴影（不占位） </th>
    <td>水平位置	垂直位置	模糊度	大小	颜色	内阴影（inset） <br/>内阴影	水平（正左负右）	垂直（正上负下）<br/>外阴影	水平（正右负左）	垂直（正下负上）</td>
    <td>
      <div style="width:100px;height:60px;padding:10px;border:1px solid #000;box-shadow:0px 0px 5px 5px #ccc;">企鹅</div>
    </td>
  </tr>
  <tr>
    <th>word-wrap  <br/> 文本换行 智能换行 </th>
    <td>break-word <br/>先尝试把显示不下的内容放到第二行，如果第二行放不下就换行</td>
    <td>
      <div style="width:100px;height:60px;padding:10px;border:1px solid #000;word-wrap:break-word;">https://github.com/RuningPenguin</div>
    </td>
  </tr>
  <tr>
    <th>word-break  <br/> 文本换行 粗暴换行 </th>
    <td>break-all <br/>内容在第一行末尾，显示不下直接换行</td>
    <td>
      <div style="width:100px;height:60px;padding:10px;border:1px solid #000;word-break:break-all;">https://github.com/RuningPenguin</div>
    </td>
  </tr>
</table>
<h2 id="边框图片" tabindex="-1"><a class="header-anchor" href="#边框图片" aria-hidden="true">#</a> 边框图片</h2>
<table>
  <tr>
    <th>属性名</th>
    <th>属性值</th>
    <th>示例</th>
  </tr>
  <tr>
    <th  rowspan="5">border-image  <br/> 边框图片(复合属性) </th>
    <td>border-image: source slice width outset repeat|initial|inherit; </td>
    <td>
      <div>原始图片</div>
      <img style="width:50px;height:50px;" src="/image/border.png"/>
    </td>
  </tr>
  <tr>
    <td>border-image-source:url <br/>用于指定要用于绘制边框的图像的位置</td>
    <td>
      <div style="width:100px;height:60px;background:#ccc;border: 10px solid transparent;border-image-source:url(/image/border.png)"></div>
    </td>
  </tr>
  <tr>
    <td>border-image-slice:数字（不加单位） <br/>图像边界向内偏移</td>
    <td>
      <div style="width:100px;height:60px;background:#ccc;border: 10px solid transparent;border-image-source:url(/image/border.png);border-image-slice:30"></div>
    </td>
  </tr>
  <tr>
    <td>border-image-outset:数字（不加单位） <br/>图片向外偏移（单独设置，倍数）</td>
    <td>
      <div style="width:100px;height:60px;background:#ccc;border: 10px solid transparent;border-image-source:url(/image/border.png);border-image-outset:1"></div>
    </td>
  </tr>
  <tr>
    <td>border-image-repeat: repeat(平铺) | round(铺满) | stretch(拉伸)<br/>设置平铺方式</td>
    <td>
      <div style="width:100px;height:60px;background:#ccc;border: 10px solid transparent;border-image-source:url(/image/border.png);border-image-slice:30;border-image-repeat:round"></div>
    </td>
  </tr>
</table>
<h2 id="多列布局" tabindex="-1"><a class="header-anchor" href="#多列布局" aria-hidden="true">#</a> 多列布局</h2>
<p>​	设置内容分几列</p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p>​			column-count				设置内容风为几列</p>
<p>​			column-gap					设置列间隔</p>
<p>​			column-rule					设置列边框线</p>
<p>​			column-fill						设置剩余空间的处理</p>
<p>​						auto		占满前面一列空间，剩余空间最后一行显示</p>
<p>​						balance		剩余空间平分（默认值）</p>
<h2 id="设置标题位置" tabindex="-1"><a class="header-anchor" href="#设置标题位置" aria-hidden="true">#</a> 设置标题位置</h2>
<p>​				column-span</p>
<p>​							none			标题在第一列显示（默认）</p>
<p>​							all				标题在所有列上面显示</p>
<h2 id="设置列表宽度" tabindex="-1"><a class="header-anchor" href="#设置列表宽度" aria-hidden="true">#</a> 设置列表宽度</h2>
<p>​				column-width（与count冲突，设置值大的）</p>
<h2 id="columns-复合属性" tabindex="-1"><a class="header-anchor" href="#columns-复合属性" aria-hidden="true">#</a> columns（复合属性）</h2>
<p>​				列表宽盒列（column-width/column-count）属性冲突</p>
<h1 id="图片整合" tabindex="-1"><a class="header-anchor" href="#图片整合" aria-hidden="true">#</a> 图片整合</h1>
<p>​	CSS Sprites / css精灵图 / 雪碧图</p>
<p>​	把网页里的小图片整合到大的背景图，通过背景插入的形式和核心属性background-position移动图片的位置，来显示部分图片的内容</p>
<p>​	好处:
​		减少图片对服务器的请求次数，可以提升网页的加载速度
​		也可以减少图片的体积</p>
<h1 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h1>
<p>​	多个颜色的过渡，渐变由浏览器生成，有两种模式，标准模式 / 兼容模式</p>
<p>​	3种，</p>
<p>​			线性渐变，径向渐变，重复渐变</p>
<h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2>
<p>​			标准和兼容</p>
<p>​				background:linear-gradient（to 方向，颜色1，颜色2）；</p>
<p>​				background:-前缀-linear-gradient（方向（相反），颜色1，颜色2）；</p>
<h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3>
<p>​			单一方向（上下或水平）</p>
<p>​				【注】标准和兼容单词方向相反</p>
<p>​							标准	to  left（右左）</p>
<p>​										to  right（左右）</p>
<p>​										to  top（下上）</p>
<p>​										to  bottom（上下）</p>
<p>​							兼容 left / right / top / bottom</p>
<p>​			多个方向（对角渐变）</p>
<p>​					标准	to  left  top</p>
<p>​								to  left bottom</p>
<p>​								to  right  top</p>
<p>​								to  right  bottom</p>
<p>​</p>
<p>​					兼容  和上面一样，不加to</p>
<h3 id="角度值-水平-垂直-对角-都可以-单位deg" tabindex="-1"><a class="header-anchor" href="#角度值-水平-垂直-对角-都可以-单位deg" aria-hidden="true">#</a> 角度值（水平 / 垂直 / 对角 都可以，单位deg）</h3>
<p>​						标准:正值，顺时针		负值逆时针</p>
<p>​						兼容:90deg - 标准的角度值</p>
<h2 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h2>
<p>​			必须加前缀</p>
<p>​		background:-前缀-radial-gradient（渐变的中心点，渐变的形状，渐变的大小，开始颜色，结束颜色）<strong>形状和大小冲突，不能同时设置</strong></p>
<h3 id="中心点" tabindex="-1"><a class="header-anchor" href="#中心点" aria-hidden="true">#</a> 中心点</h3>
<p>​							center		默认</p>
<p>​							px / %</p>
<h3 id="形状" tabindex="-1"><a class="header-anchor" href="#形状" aria-hidden="true">#</a> 形状</h3>
<p>​						circle			正圆</p>
<p>​						ellipse			椭圆（默认）</p>
<h3 id="大小-必须有中心点" tabindex="-1"><a class="header-anchor" href="#大小-必须有中心点" aria-hidden="true">#</a> 大小（必须有中心点）</h3>
<p>​						closest-side		最近边</p>
<p>​						farthest-side		最远边</p>
<p>​						closest-corner		最近角</p>
<p>​						farthest-corner		最远角</p>
<h2 id="重复渐变" tabindex="-1"><a class="header-anchor" href="#重复渐变" aria-hidden="true">#</a> 重复渐变</h2>
<h3 id="重复线性渐变" tabindex="-1"><a class="header-anchor" href="#重复线性渐变" aria-hidden="true">#</a> 重复线性渐变</h3>
<p>​		background:-前缀-repeating-linear-gradient（red，yellow 10%，green 30%）；</p>
<h3 id="重复径向渐变" tabindex="-1"><a class="header-anchor" href="#重复径向渐变" aria-hidden="true">#</a> 重复径向渐变</h3>
<p>​		background:-前缀-repeating-radial-gradient（red，yellow 10%，green 30%）；</p>
<h3 id="如果设置一个盒子-直接两个颜色-没有渐变过渡" tabindex="-1"><a class="header-anchor" href="#如果设置一个盒子-直接两个颜色-没有渐变过渡" aria-hidden="true">#</a> 如果设置一个盒子，直接两个颜色，没有渐变过渡</h3>
<p>​	  background:linear-gradient(to left, red 50%,green 50%)；</p>
<h1 id="transition过渡" tabindex="-1"><a class="header-anchor" href="#transition过渡" aria-hidden="true">#</a> transition过渡</h1>
<p>​	必须通过事件触发</p>
<p>​		transition:参与过渡的属性，过渡的完成时间，延迟执行，速度动画</p>
<p>​			transition-property	参与过渡的属性</p>
<p>​			transition-duration	过渡完成的时间</p>
<p>​			transition-delay		过渡开始的延迟</p>
<p>​			transition-timing-function	速度动画</p>
<p>​							linear（匀速）</p>
<p>​							ease（逐渐变慢，默认）</p>
<p>​							ease-in（加速）</p>
<p>​							ease-out（减速）</p>
<p>​							ease-in-out（先加后减）</p>
<p>​		速度属性值:cubic-bezier()
​		贝塞尔曲线网址:http://cubic-bezier.com/</p>
<h1 id="_2d" tabindex="-1"><a class="header-anchor" href="#_2d" aria-hidden="true">#</a> 2D</h1>
<h2 id="transform-origin-px-单词" tabindex="-1"><a class="header-anchor" href="#transform-origin-px-单词" aria-hidden="true">#</a> transform-origin:px / 单词 /%</h2>
<p>​		设置旋转 / 缩放 位置</p>
<h2 id="_2d偏移" tabindex="-1"><a class="header-anchor" href="#_2d偏移" aria-hidden="true">#</a> 2d偏移</h2>
<p>​	transform:translate（x轴，y轴）</p>
<p>​	transform:translateX（x轴）</p>
<p>​	transform:translateY（y轴）</p>
<p>​	偏移的值可以设置% / px （百分比设相对于元素自身的宽高）</p>
<h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3>
<p>​			父元素:position:relative</p>
<p>​			子元素:position:absolute</p>
<p>​								left:50%；</p>
<p>​								top:50%；</p>
<p>​								transform:translate（-50%，-50%）</p>
<h2 id="_2d缩放" tabindex="-1"><a class="header-anchor" href="#_2d缩放" aria-hidden="true">#</a> 2d缩放</h2>
<p>​	值设置倍数，1不变，大于1变大，小于1变小，负数反向放大</p>
<p>​	transform:scale（x轴，y轴）</p>
<p>​	transform:scaleX（x轴）</p>
<p>​	transform:scaleY（y轴）</p>
<p>​				【注】缩放可以负值，是反方向缩放</p>
<h2 id="_2d旋转" tabindex="-1"><a class="header-anchor" href="#_2d旋转" aria-hidden="true">#</a> 2d旋转</h2>
<p>​	transform:rotate（）正值顺时针，负值逆时针</p>
<p>​	transform:rotateX（）上下旋转</p>
<p>​	transform:rotateY（）左右旋转</p>
<h2 id="_2d倾斜-deg" tabindex="-1"><a class="header-anchor" href="#_2d倾斜-deg" aria-hidden="true">#</a> 2d倾斜(deg)</h2>
<p>​	transform:skew（x轴，y轴）</p>
<p>​	transform:skewX（x轴）</p>
<p>​	transform:skewY（y轴）</p>
<h1 id="_3d" tabindex="-1"><a class="header-anchor" href="#_3d" aria-hidden="true">#</a> 3D</h1>
<h2 id="创建3d空间" tabindex="-1"><a class="header-anchor" href="#创建3d空间" aria-hidden="true">#</a> 创建3d空间</h2>
<p>​	transform-style:presereve-3d；</p>
<h2 id="_3d的偏移" tabindex="-1"><a class="header-anchor" href="#_3d的偏移" aria-hidden="true">#</a> 3d的偏移</h2>
<p>​	前后偏移（正前负后）</p>
<p>​		transform:translate3d（x,y,z）</p>
<p>​		transform:translateX / Y / Z</p>
<h2 id="_3d旋转" tabindex="-1"><a class="header-anchor" href="#_3d旋转" aria-hidden="true">#</a> 3d旋转</h2>
<p>​	3d旋转</p>
<p>​					3d空间下</p>
<p>​	transform:rotateX（）</p>
<p>​								正值往后躺</p>
<p>​								负值往前趴</p>
<p>​	transform:rotateY（）</p>
<p>​					3d空间下</p>
<p>​								正值往右转</p>
<p>​								负值往左转</p>
<p>​	transform:ritateZ（）</p>
<p>​					3d空间下</p>
<p>​								正值顺时针</p>
<p>​								负值逆时针</p>
<h2 id="_3d缩放" tabindex="-1"><a class="header-anchor" href="#_3d缩放" aria-hidden="true">#</a> 3d缩放</h2>
<p>​	transform:scale3d（x,y,z）</p>
<p>​	transform:scaleZ（z）</p>
<p>【注】z轴缩放需要配合其他功能函数一起使用,要写在其他效果前</p>
<h1 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h1>
<p>1，创建动画</p>
<p>​	@keyframes	动画名{</p>
<p>​		0%{}</p>
<p>​		100%{}</p>
<p>​	}</p>
<p>2执行动画</p>
<p>​	animation:动画名 / 动画时间 / 动画速度 / 延迟 / 执行次数 / 动画状态 / 停止位置</p>
<p>​				animation-name			动画名</p>
<p>​				animation-duration		动画时间</p>
<p>​				animation-timing-function		动画速度</p>
<p>​									linear		匀速</p>
<p>​									ease		逐渐变慢</p>
<p>​									ease-in	加速</p>
<p>​									ease-out	减速</p>
<p>​									ease-in-out	先快后慢</p>
<p>​									step-start		省略中间动画过程，直接跳到关键字帧开始的位置</p>
<p>​									step-end		省略中间动画过程，直接跳到关键帧结束的地方</p>
<p>​				animation-delay				延迟动画</p>
<p>​				animation-iteration-count	动画循环次数</p>
<p>​									number		直接写数字</p>
<p>​									infinite			无限循环</p>
<p>​				animation-play-state		动画的状态（单独使用）</p>
<p>​								paused			停止运动</p>
<p>​				animation-fill-mode		动画停止位置</p>
<p>​								none（backwards）停止在动画的第一帧，，默认</p>
<p>​								both（forwards）		停止在动画执行的最后一帧</p>
<h1 id="动画与过渡的区别" tabindex="-1"><a class="header-anchor" href="#动画与过渡的区别" aria-hidden="true">#</a> 动画与过渡的区别</h1>
<p>​	animation与transition</p>
<p>​		相同点:都是随时间改变css属性值</p>
<p>​		不同点:</p>
<p>​				transition:需要事件触发才能执行</p>
<p>​				animation:不需要世界触发也也可以执行动画</p>
<h1 id="景深" tabindex="-1"><a class="header-anchor" href="#景深" aria-hidden="true">#</a> 景深</h1>
<p>​	perspective（加强2d / 3d 效果，进大远小）</p>
<p>父元素:每一个子元素的景深下效果都不一样</p>
<p>​		perspective:1200px</p>
<p>子元素:每一个子元素的景深效果都一样</p>
<p>​		prespective:1200px</p>
<h1 id="改变鼠标指针" tabindex="-1"><a class="header-anchor" href="#改变鼠标指针" aria-hidden="true">#</a> 改变鼠标指针</h1>
<h2 id="cursor" tabindex="-1"><a class="header-anchor" href="#cursor" aria-hidden="true">#</a> cursor:</h2>
<p>​		pointer		小手</p>
<p>​		wait			加载</p>
<p>​		help			问号</p>
<p>​		text			文本输入光标</p>
<p>​		# 浏览器的前缀</p>
<p>​	IE						   -ms-</p>
<p>​	谷歌和苹果			-webkit-</p>
<p>​	火狐					   -mzo-</p>
<p>​	欧朋					   -o-</p>
<h2 id="书写方法" tabindex="-1"><a class="header-anchor" href="#书写方法" aria-hidden="true">#</a> 书写方法</h2>
<p>​	优雅降级（从大到小）</p>
<p>​		div{</p>
<p>​				transition:all 1s；</p>
<p>​				-webkit-transition:all 1s；</p>
<p>​				-o-transition:all 1s；</p>
<p>​				-moz-transition:all 1s；</p>
<p>​			}</p>
<p>​	渐进增强（从小到大）</p>
<p>​			div{</p>
<p>​					-webkit-transition:all 1s；</p>
<p>​					-moz-transition:all 1s;</p>
<p>​					-o-transition:all 1s；</p>
<p>​					transition:all 1s；</p>
<p>​					}</p>
</div></template>
