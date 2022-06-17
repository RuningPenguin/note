<template><div><h1 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h1>
<h2 id="字体大小" tabindex="-1"><a class="header-anchor" href="#字体大小" aria-hidden="true">#</a> 字体大小</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>浏览器默认大小是16px <br>
如果自己没有font-size，以父元素的为准，如果自己有，以自己的为准<br>
字体大小单位为px，可以设置百分比，如：50%;(px,pt,em)</p>
</div>
<h2 id="字体颜色" tabindex="-1"><a class="header-anchor" href="#字体颜色" aria-hidden="true">#</a> 字体颜色</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>color 的值可以是:单词、16进制、rgb(,,)、rgba(,,,)  <br></p>
</div>
<h2 id="字体粗细" tabindex="-1"><a class="header-anchor" href="#字体粗细" aria-hidden="true">#</a> 字体粗细</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">值</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">bold</td>
<td style="text-align:center">粗体</td>
</tr>
<tr>
<td style="text-align:center">bolder</td>
<td style="text-align:center">更粗</td>
</tr>
<tr>
<td style="text-align:center">normal</td>
<td style="text-align:center">取消加粗（默认）</td>
</tr>
<tr>
<td style="text-align:center">100--900</td>
<td style="text-align:center">数字100--900（500是正常粗细）</td>
</tr>
</tbody>
</table>
<h2 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Courier New'</span><span class="token punctuation">,</span> Courier<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>默认宋体或新宋体  中文和多个英文单词用</p>
</div>
<h2 id="字体倾斜" tabindex="-1"><a class="header-anchor" href="#字体倾斜" aria-hidden="true">#</a> 字体倾斜</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">值</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">normal</td>
<td style="text-align:center">取消倾斜（默认）</td>
</tr>
<tr>
<td style="text-align:center">italic</td>
<td style="text-align:center">倾斜</td>
</tr>
<tr>
<td style="text-align:center">oblique</td>
<td style="text-align:center">更倾斜</td>
</tr>
</tbody>
</table>
<h2 id="字体大小写" tabindex="-1"><a class="header-anchor" href="#字体大小写" aria-hidden="true">#</a> 字体大小写</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">font-variant</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">值</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">normal/none</td>
<td style="text-align:center">取消大小写（默认）</td>
</tr>
<tr>
<td style="text-align:center">small-caps</td>
<td style="text-align:center">小型大写字母</td>
</tr>
<tr>
<td style="text-align:center">capitalize</td>
<td style="text-align:center">首字母大写</td>
</tr>
<tr>
<td style="text-align:center">uppercase</td>
<td style="text-align:center">大写</td>
</tr>
<tr>
<td style="text-align:center">lowercase</td>
<td style="text-align:center">小写</td>
</tr>
</tbody>
</table>
<h2 id="font的简写" tabindex="-1"><a class="header-anchor" href="#font的简写" aria-hidden="true">#</a> font的简写</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>加粗    倾斜    小型大写字母    大小    字体样式（后面的两位固定）</p>
</div>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span><span class="token property">font</span><span class="token punctuation">:</span> bold italic small-caps 12px/1.5 <span class="token string">'Courier New'</span><span class="token punctuation">,</span> Courier<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
