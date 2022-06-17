<template><div><h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h1>
<h3 id="高级表格" tabindex="-1"><a class="header-anchor" href="#高级表格" aria-hidden="true">#</a> 高级表格</h3>
<p>​	table		表格	
​	caption	表格标题
​	tr				行
​	th				标题列
​	td				内容列</p>
<h4 id="表格自带属性" tabindex="-1"><a class="header-anchor" href="#表格自带属性" aria-hidden="true">#</a> 表格自带属性</h4>
<p>​		rule与特点的border属性冲突</p>
<p>​		rule：	
​				rows（行分割线）
​				cols（列分割线）
​				all（行分割线和列分割线）
​				none（没有线）</p>
<h4 id="数据行分组" tabindex="-1"><a class="header-anchor" href="#数据行分组" aria-hidden="true">#</a> 数据行分组</h4>
<p>​	thead		表格头部
​	tbody		表格内容
​	tfoot		表格尾部</p>
<h4 id="数据列分组" tabindex="-1"><a class="header-anchor" href="#数据列分组" aria-hidden="true">#</a> 数据列分组</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>col</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- ​		需要配合rules属性（rule="groups"） --></span>
<span class="token comment">&lt;!-- ​			通过span属性可以设置几列为一组 --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>(只能设置1列，多个默认span相加)

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>colgroup</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>colgroup</span><span class="token punctuation">></span></span>(可以设置多列)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<h4 id="表格属性-css" tabindex="-1"><a class="header-anchor" href="#表格属性-css" aria-hidden="true">#</a> 表格属性（css）</h4>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token property">border-spacing</span><span class="token punctuation">:</span> cellspacing<span class="token punctuation">;</span>    <span class="token comment">/*单元格边框与边框的距离（cellspacing）*/</span>
  <span class="token property">​border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>      <span class="token comment">/*合并相邻的边框线*/</span>
  <span class="token property">​empty-cells</span><span class="token punctuation">:</span> hide<span class="token punctuation">;</span>              <span class="token comment">/*设置表格没有内容时隐藏（不能设置border-collaose）*/</span>
  <span class="token property">​table-layout</span><span class="token punctuation">:</span>
  ​   fixed                        <span class="token comment">/*固定表格宽，加快表格运行速度*/</span>
  ​   auto                         <span class="token comment">/*内容越多，宽度越大*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音视频插入" tabindex="-1"><a class="header-anchor" href="#音视频插入" aria-hidden="true">#</a> 音视频插入</h3>
<h4 id="视频-video" tabindex="-1"><a class="header-anchor" href="#视频-video" aria-hidden="true">#</a> 视频 	video</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>​		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>地址<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>支持的格式: ogg / MP4 / webm</p>
</div>
<h5 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h5>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">视频路径</td>
</tr>
<tr>
<td style="text-align:left">controls</td>
<td style="text-align:left">播放控件（必须加）</td>
</tr>
<tr>
<td style="text-align:left">loop</td>
<td style="text-align:left">重复播放</td>
</tr>
<tr>
<td style="text-align:left">autoplay</td>
<td style="text-align:left">自动播放（IE支持，其他可能不支持）</td>
</tr>
<tr>
<td style="text-align:left">preload</td>
<td style="text-align:left">预加载</td>
</tr>
<tr>
<td style="text-align:left">muted</td>
<td style="text-align:left">静音</td>
</tr>
<tr>
<td style="text-align:left">poster</td>
<td style="text-align:left">视频播放前显示的图片（=&quot;图片路径&quot;）<br> 设置视频开头图片大小css object-fit：fill / cover;<br> fill	填满播放器窗口		cover	等比放大</td>
</tr>
</tbody>
</table>
<h4 id="音频audio" tabindex="-1"><a class="header-anchor" href="#音频audio" aria-hidden="true">#</a> 音频	audio</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>	&lt;audio src="音频地址”><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>支持的格式: mpeg（MP3） / ogg / wav	(.flac是无损格式音频，需要转换才能插入)</p>
</div>
<h5 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h5>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">视频路径</td>
</tr>
<tr>
<td style="text-align:left">controls</td>
<td style="text-align:left">播放控件（必须加）</td>
</tr>
<tr>
<td style="text-align:left">loop</td>
<td style="text-align:left">重复播放</td>
</tr>
<tr>
<td style="text-align:left">autoplay</td>
<td style="text-align:left">自动播放（IE支持，其他可能不支持）</td>
</tr>
<tr>
<td style="text-align:left">preload</td>
<td style="text-align:left">预加载</td>
</tr>
<tr>
<td style="text-align:left">muted</td>
<td style="text-align:left">静音</td>
</tr>
</tbody>
</table>
<h4 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h4>
<div class="custom-container tip"><p class="custom-container-title">视频</p>
<p><code v-pre>&lt;video&gt;&lt;/video&gt;</code> 配合 <code v-pre>&lt;source&gt;&lt;/source&gt;</code> 分别插入3中不同格式的文件</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/ogg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">音频</p>
<p><code v-pre>&lt;audio&gt;&lt;/audio&gt;</code> 配合 <code v-pre>&lt;source&gt;&lt;/source&gt;</code> 分别插入3中不同格式的文件</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audios.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audios.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ogg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audios.wav<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
