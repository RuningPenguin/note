<template><div><h1 id="高级效果" tabindex="-1"><a class="header-anchor" href="#高级效果" aria-hidden="true">#</a> 高级效果</h1>
<h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2>
<p>​ <strong>多个颜色的过渡，渐变由浏览器生成，有两种模式，标准模式 / 兼容模式</strong></p>
<table>
  <tr>
    <th width="100px">
      <RouterLink to="https://www.runoob.com/css3/css3-gradients.html">渐变</RouterLink>
    </th>
    <th>说明</th>
    <th>示例</th>
  </tr>
  <tbody>
    <tr>
      <th rowspan="2">
        <RouterLink to="https://www.runoob.com/cssref/func-linear-gradient.html">线性渐变</RouterLink>
      </th>
      <td>
        单一方向（上下或水平）<br>
        标准:background-image:linear-gradient（to 方向，颜色1，颜色2,...）;<br />
        兼容:background-image:-前缀-linear-gradient（方向（相反），颜色1，颜色2,...);<br />
      </td>
      <td>
        <div class="gradient" style="background-image: linear-gradient(to bottom, red, blue);"></div>
      </td>
    </tr>
    <tr>
      <td>
        多个方向（对角渐变）<br>
        标准:background:linear-gradient（to 方向，颜色1，颜色2）;<br />
        兼容:background:-前缀-linear-gradient（方向（相反），颜色1，颜色2);<br />
      </td>
      <td>
        <div class="gradient" style="background-image: linear-gradient(to  left bottom, red, blue);"></div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="2">
        <RouterLink to="https://www.runoob.com/cssref/func-radial-gradient.html">径向渐变</RouterLink>
      </th>
      <td>
        background-image: radial-gradient(渐变的形状 渐变的大小 渐变的位置, 开始颜色, ..., 结束颜色);<br />
      </td>
      <td>
        <div class="gradient" style="background-image: radial-gradient(circle farthest-side at top, red, yellow);">
        </div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="2">
        <RouterLink to="https://www.runoob.com/cssref/func-repeating-linear-gradient.html">重复线性渐变</RouterLink>
      </th>
      <td>
        background-image: repeating-linear-gradient(定义渐变的角度方向 | to 指定线性渐变的起始位置, 颜色, ...);<br />
      </td>
      <td>
        <div class="gradient" style="background-image: repeating-linear-gradient(red, yellow 10%, green 20%);"></div>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th rowspan="2">
        <RouterLink to="https://www.runoob.com/cssref/func-repeating-radial-gradient.html">重复径向渐变</RouterLink>
      </th>
      <td>
        background-image: repeating-radial-gradient(渐变的形状 边缘轮廓的具体位置 at 圆心位置, 开始颜色, ..., 结束颜色);<br />
      </td>
      <td>
        <div class="gradient" style="background-image: repeating-radial-gradient(red, yellow 10%, green 15%);"></div>
      </td>
    </tr>
  </tbody>
</table>
<h3 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>direction<span class="token punctuation">,</span> color-stop1<span class="token punctuation">,</span> color-stop2<span class="token punctuation">,</span> ...<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table class="reference">
  <tbody>
    <tr>
      <th style="width:20%">值</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><i>direction</i></td>
      <td>用角度值指定渐变的方向（或角度）。</td>
    </tr>
    <tr>
      <td><em>color-stop1, color-stop2,...</em></td>
      <td>用于指定渐变的起止颜色。</td>
    </tr>
  </tbody>
</table>
<p><strong>标准和兼容单词方向相反</strong><br /></p>
<p>单一方向（上下或水平）</p>
<table>
<thead>
<tr>
<th style="text-align:left">方向</th>
<th style="text-align:left">标准</th>
<th style="text-align:left">兼容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">右左</td>
<td style="text-align:left">to left</td>
<td style="text-align:left">right</td>
</tr>
<tr>
<td style="text-align:left">左右</td>
<td style="text-align:left">to right</td>
<td style="text-align:left">left</td>
</tr>
<tr>
<td style="text-align:left">下上</td>
<td style="text-align:left">to top</td>
<td style="text-align:left">bottom</td>
</tr>
<tr>
<td style="text-align:left">上下</td>
<td style="text-align:left">to bottom</td>
<td style="text-align:left">top</td>
</tr>
</tbody>
</table>
<p>多个方向（对角渐变）<br /></p>
<table>
<thead>
<tr>
<th style="text-align:left">方向</th>
<th style="text-align:left">标准</th>
<th style="text-align:left">兼容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">右上,左下</td>
<td style="text-align:left">to left bottom</td>
<td style="text-align:left">right top</td>
</tr>
<tr>
<td style="text-align:left">右下,左上</td>
<td style="text-align:left">to left top</td>
<td style="text-align:left">right bottom</td>
</tr>
<tr>
<td style="text-align:left">左下,右上</td>
<td style="text-align:left">to right top</td>
<td style="text-align:left">left bottom</td>
</tr>
<tr>
<td style="text-align:left">左上,右下</td>
<td style="text-align:left">to right bottom</td>
<td style="text-align:left">left top</td>
</tr>
</tbody>
</table>
<p><strong>角度值（水平 / 垂直 / 对角 都可以，单位deg）</strong><br />
​标准: 正值，顺时针 负值逆时针 <br />
​兼容: 90deg - 标准的角度值<br /></p>
<h3 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>shape size at position<span class="token punctuation">,</span> start-color<span class="token punctuation">,</span> ...<span class="token punctuation">,</span> last-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table class="reference">
  <tbody>
    <tr>
      <th style="width:20%">值</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><i>shape</i></td>
      <td>确定圆的类型:
        <ul>
          <li>ellipse (默认): 指定椭圆形的径向渐变。</li>
          <li>circle ：指定圆形的径向渐变</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>size</em></td>
      <td>定义渐变的大小，可能值：
        <ul>
          <li>farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角</li>
          <li>closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边</li>
          <li>closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角</li>
          <li>farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>position</em></td>
      <td>定义渐变的位置。可能值：
        <ul>
          <li>
            <strong>center</strong>（默认）：设置中间为径向渐变圆心的纵坐标值。
          </li>
          <li>
            <strong>top</strong>：设置顶部为径向渐变圆心的纵坐标值。
          </li>
          <li>
            <strong>bottom</strong>：设置底部为径向渐变圆心的纵坐标值。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>start-color, ..., last-color</em></td>
      <td>用于指定渐变的起止颜色。</td>
    </tr>
  </tbody>
</table>
<h3 id="重复线性渐变" tabindex="-1"><a class="header-anchor" href="#重复线性渐变" aria-hidden="true">#</a> 重复线性渐变</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">repeating-linear-gradient</span><span class="token punctuation">(</span>angle | to side-or-corner<span class="token punctuation">,</span> color-stop1<span class="token punctuation">,</span> color-stop2<span class="token punctuation">,</span> ...<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table class="reference">
  <tbody>
    <tr>
      <th style="width:20%">Value</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><em>angle</em></td>
      <td>定义渐变的角度方向。从 0deg 到 360deg，默认为 180deg。</td>
    </tr>
    <tr>
      <td><em>side-or-corner</em></td>
      <td>指定线性渐变的起始位置。由两个关键字组成：第一个为指定水平位置(left 或 right)，第二个为指定垂直位置（top 或bottom）。 顺序是随意的，每个关键字都是可选的。</td>
    </tr>
    <tr>
      <td><em>color-stop1, color-stop2,...</em></td>
      <td>指定渐变的起止颜色，由颜色值、停止位置（可选，使用百分比指定）组成。</td>
    </tr>
  </tbody>
</table>
<h3 id="重复径向渐变" tabindex="-1"><a class="header-anchor" href="#重复径向渐变" aria-hidden="true">#</a> 重复径向渐变</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">repeating-radial-gradient</span><span class="token punctuation">(</span>shape size at position<span class="token punctuation">,</span> start-color<span class="token punctuation">,</span> ...<span class="token punctuation">,</span> last-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table class="reference">
  <tbody>
    <tr>
      <th style="width:20%">值</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><i>shape</i></td>
      <td>定义渐变的形状。可以是:
        <ul>
          <li>ellipse (默认)：指定椭圆形的径向渐变</li>
          <li>circle：指定圆形的径向渐变</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>size</em></td>
      <td>边缘轮廓的具体位置。可以是以下值：
        <ul>
          <li>farthest-corner (默认)：指定径向渐变的半径长度为从圆心到离圆心最远的角。</li>
          <li>closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边。</li>
          <li>closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角。</li>
          <li>farthest-side：与 closest-side 相反，指定径向渐变的半径长度为从圆心到离圆心最远的边。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>position</em></td>
      <td>圆心位置，类似 on与 background-position 或者 transform-origin。默认为 "center"</td>
    </tr>
    <tr>
      <td><em>start-color, ..., last-color</em></td>
      <td> 用于指定渐变的起止颜色，可以使用 长度值或百分比来指定起止色位置，但不允许负值。</td>
    </tr>
  </tbody>
</table>
<h3 id="设置一个盒子-两种颜色-没有渐变过渡" tabindex="-1"><a class="header-anchor" href="#设置一个盒子-两种颜色-没有渐变过渡" aria-hidden="true">#</a> 设置一个盒子，两种颜色，没有渐变过渡</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span> red 50%<span class="token punctuation">,</span>green 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><details class="custom-container details"><summary>点击查看示例</summary>
<div class="gradient" style="background-image: linear-gradient(to left, red 50%,green 50%);"></div>
</details>
<h2 id="过渡-transition" tabindex="-1"><a class="header-anchor" href="#过渡-transition" aria-hidden="true">#</a> 过渡(transition)</h2>
<p>​ <strong>必须通过事件触发</strong></p>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> property duration timing-function delay<span class="token punctuation">;</span>

<span class="token comment">/* ​transition:参与过渡的属性 过渡的完成时间 延迟执行 速度动画 */</span>
</code></pre></div><table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">property</td>
<td style="text-align:left">可以是任何属性，如：width、height、background-color、opacity、transform、color、font-size等。</td>
</tr>
<tr>
<td style="text-align:left">duration</td>
<td style="text-align:left">过渡时间，单位为秒。</td>
</tr>
<tr>
<td style="text-align:left">timing-function</td>
<td style="text-align:left">过渡动画的速度曲线。</td>
</tr>
<tr>
<td style="text-align:left">delay</td>
<td style="text-align:left">过渡延迟，单位为秒。</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">timing-function 可以是以下值：</p>
<p>linear（匀速）<br />
​ease（逐渐变慢，默认）<br />
​ease-in（加速）<br />
​ease-out（减速）<br />
​ease-in-out（先加后减）<br /></p>
</div>
<h3 id="贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#贝塞尔曲线" aria-hidden="true">#</a> 贝塞尔曲线</h3>
<p>速度属性值:<code v-pre>cubic-bezier()</code> <a href="http://cubic-bezier.com/" target="_blank" rel="noopener noreferrer">贝塞尔曲线网址<ExternalLinkIcon/></a></p>
<h2 id="_2d-3d" tabindex="-1"><a class="header-anchor" href="#_2d-3d" aria-hidden="true">#</a> 2D/3D</h2>
<h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">transform</span><span class="token punctuation">:</span> none|transform-functions<span class="token punctuation">;</span>
3D<span class="token punctuation">:</span>创建3d空间<span class="token punctuation">(</span>使用3d属性<span class="token punctuation">)</span>
<span class="token property">transform-style</span><span class="token punctuation">:</span>presereve-3d<span class="token punctuation">;</span>
</code></pre></div><table class="reference">
  <tbody>
    <tr>
      <th style="width:25%">值</th>
      <th>描述</th>
    </tr>
    <tr>
      <td>none</td>
      <td>定义不进行转换。</td>
    </tr>
    <tr>
      <td>matrix(<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>)</td>
      <td>定义 2D 转换，使用六个值的矩阵。</td>
    </tr>
    <tr>
      <td>
        matrix3d(<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>)
      </td>
      <td>定义 3D 转换，使用 16 个值的 4x4 矩阵。</td>
    </tr>
    <tr>
      <td>translate(<i>x</i>,<i>y</i>)</td>
      <td>定义 2D 转换。</td>
    </tr>
    <tr>
      <td>translate3d(<i>x</i>,<i>y</i>,<i>z</i>)</td>
      <td>定义 3D 转换。</td>
    </tr>
    <tr>
      <td>translateX(<i>x</i>)</td>
      <td>定义转换，只是用 X 轴的值。</td>
    </tr>
    <tr>
      <td>translateY(<i>y</i>)</td>
      <td>定义转换，只是用 Y 轴的值。</td>
    </tr>
    <tr>
      <td>translateZ(<i>z</i>)</td>
      <td>定义 3D 转换，只是用 Z 轴的值。</td>
    </tr>
    <tr>
      <td>scale(<i>x</i>[,<i>y</i>]?) </td>
      <td>定义 2D 缩放转换。</td>
    </tr>
    <tr>
      <td>scale3d(<i>x</i>,<i>y</i>,<i>z</i>)</td>
      <td>定义 3D 缩放转换。</td>
    </tr>
    <tr>
      <td>scaleX(<i>x</i>)</td>
      <td>通过设置 X 轴的值来定义缩放转换。</td>
    </tr>
    <tr>
      <td>scaleY(<i>y</i>)</td>
      <td>通过设置 Y 轴的值来定义缩放转换。</td>
    </tr>
    <tr>
      <td>scaleZ(<i>z</i>)</td>
      <td>通过设置 Z 轴的值来定义 3D 缩放转换。</td>
    </tr>
    <tr>
      <td>rotate(<i>angle</i>)</td>
      <td>定义 2D 旋转，在参数中规定角度。</td>
    </tr>
    <tr>
      <td>rotate3d(<i>x</i>,<i>y</i>,<i>z</i>,<i>angle</i>)</td>
      <td>定义 3D 旋转。</td>
    </tr>
    <tr>
      <td>rotateX(<i>angle</i>)</td>
      <td>定义沿着 X 轴的 3D 旋转。</td>
    </tr>
    <tr>
      <td>rotateY(<i>angle</i>)</td>
      <td>定义沿着 Y 轴的 3D 旋转。</td>
    </tr>
    <tr>
      <td>rotateZ(<i>angle</i>)</td>
      <td>定义沿着 Z 轴的 3D 旋转。</td>
    </tr>
    <tr>
      <td>skew(<i>x-angle</i>,<i>y-angle</i>)</td>
      <td>定义沿着 X 和 Y 轴的 2D 倾斜转换。</td>
    </tr>
    <tr>
      <td>skewX(<i>angle</i>)</td>
      <td>定义沿着 X 轴的 2D 倾斜转换。</td>
    </tr>
    <tr>
      <td>skewY(<i>angle</i>)</td>
      <td>定义沿着 Y 轴的 2D 倾斜转换。</td>
    </tr>
    <tr>
      <td>perspective(<i>n</i>)</td>
      <td>为 3D 转换元素定义透视视图。</td>
    </tr>
  </tbody>
</table>
<details class="custom-container details"><summary>点击查看示例</summary>
<div :style="'width:120px;height:100px;background-color:yellow;border:1px solid black;transform:'+tDeg+';'">HELLO</div>
Rotate: <br>
<input type="range" min="-360" max="360" value="0" @change="rotate" /><br>
transform: rotate(<span>{{deg}}</span>);
</details>
<h3 id="transform-origin" tabindex="-1"><a class="header-anchor" href="#transform-origin" aria-hidden="true">#</a> transform-origin</h3>
<p><strong>设置旋转元素的基点位置</strong></p>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> x-axis y-axis z-axis<span class="token punctuation">;</span>
</code></pre></div><table class="reference">
  <tbody>
    <tr>
      <th>值</th>
      <th>描述</th>
    </tr>
    <tr>
      <td>x-axis</td>
      <td>
        <p>定义视图被置于 X 轴的何处。可能的值：</p>
        <ul class="listintable">
          <li>left</li>
          <li>center</li>
          <li>right</li>
          <li><i>length</i></li>
          <li><i>%</i></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>y-axis</td>
      <td>
        <p>定义视图被置于 Y 轴的何处。可能的值：</p>
        <ul class="listintable">
          <li>top</li>
          <li>center</li>
          <li>bottom</li>
          <li><i>length</i></li>
          <li><i>%</i></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>z-axis</td>
      <td>
        <p>定义视图被置于 Z 轴的何处。可能的值：</p>
        <ul class="listintable">
          <li><i>length</i></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>​ 父元素:position:relative;
​ 子元素:position:absolute;
​ left:50%;
​ top:50%;
​ transform:translate(-50%,-50%);
</code></pre></div><details class="custom-container details"><summary>点击查看示例</summary>
<div style="width:200px;height:200px;position:relative;border:1px solid #333;">
  <div style="width:100px;height:100px;position:absolute;left:50%;top:50%;border:1px solid #333;transform: translate(-50%, -50%);">1</div>
</div>
</details>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><a href="https://c.runoob.com/codedemo/3391/" target="_blank" rel="noopener noreferrer">Css3 Transform 各种变形旋转<ExternalLinkIcon/></a><br>
<a href="https://www.runoob.com/try/try.php?filename=trycss3_transform-origin_inuse" target="_blank" rel="noopener noreferrer">Transform-Origin<ExternalLinkIcon/></a><br /></p>
</div>
<h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>
<h3 id="创建动画" tabindex="-1"><a class="header-anchor" href="#创建动画" aria-hidden="true">#</a> 创建动画</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animationname</span> <span class="token punctuation">{</span><span class="token selector">keyframes-selector</span> <span class="token punctuation">{</span>css-styles<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">/* 例子 */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> mymove</span><span class="token punctuation">{</span>
  <span class="token selector">0%</span>   <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">25%</span>  <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">50%</span>  <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">75%</span>  <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table class="reference">
  <tbody><tr>
    <th align="left" width="20%">值</th>
    <th align="left" width="80%">说明</th>
  </tr>  
  <tr>
    <td><i>animationname</i></td>
    <td>必需的。定义animation的名称。</td>
  </tr>
  <tr>
    <td><i>keyframes-selector</i></td>
    <td>必需的。动画持续时间的百分比。<p>合法值：</p><p>0-100%<br>
	from (和0%相同)<br>
	to (和100%相同)</p><p><b>注意：</b> 您可以用一个动画keyframes-selectors。</p></td>
  </tr>
  <tr>
    <td><i>css-styles</i></td>
    <td>必需的。一个或多个合法的CSS样式属性</td>
  </tr>
  </tbody>
</table>
<h3 id="执行动画" tabindex="-1"><a class="header-anchor" href="#执行动画" aria-hidden="true">#</a> 执行动画</h3>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">animation</span><span class="token punctuation">:</span> name  duration timing-function delay iteration-count direction fill-mode play-state<span class="token punctuation">;</span>

<span class="token property">​animation</span><span class="token punctuation">:</span> 动画名  动画时间      动画速度     延迟       执行次数     轮流反向播放  停止位置   动画状态
</code></pre></div><table class="reference">
  <thead><a href="https://www.runoob.com/cssref/css3-pr-animation.html" target="_black">animation(执行动画)</a></thead>
  <tbody>
  <tr>
    <th width="30%" align="left">值</th>
    <th width="70%" align="left">说明</th>
  </tr>  
  <tr>
    <td>animation-name</td>
    <td>动画名: @keyframes 使用</td>
  </tr>
	<tr>
    <td>animation-duration</td>
    <td>动画时间: 默认值为 0，意味着没有动画效果。</td>
  </tr>
	<tr>
    <td><a href="#animation-timing-function">animation-timing-function</a></td>
    <td>动画速度: <b>linear</b> 匀速 | <b>ease</b> 逐渐变慢 | <b>ease-in</b> 加速 | <b>ease-out</b> 减速 | <b>ease-in-out</b> 先快后慢 | <b>step-start</b> 省略中间动画过程，直接跳到关键字帧开始的位置 | <b>step-end</b> 省略中间动画过程，直接跳到关键帧结束的地方</td>
  </tr>
	<tr>
    <td>animation-delay</td>
    <td>延迟: 可选 以秒或毫秒计 默认值为0</td>
  </tr>
	<tr>
    <td>animation-iteration-count</td>
    <td>执行次数: <b>n(数字)</b> 播放多少次动画 | <b>infinite</b>无限循环</td>
  </tr>
	<tr>
    <td><a href="#animation-direction">animation-direction</a></td>
    <td>是否轮流反向播放: <b>normal</b>正常播放默认值 | <b>reverse</b>动画反向播放 | <b>alternate</b>动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放 | <b>alternate-reverse</b>动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放</td>
  </tr>
  <tr>
    <td><a href="#animation-fill-mode">animation-fill-mode</a></td>
    <td>停止位置: 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。</td>
  </tr>
  <tr>
    <td>animation-play-state</td>
    <td>动画状态: <b>paused</b>指定暂停动画 | <b>running</b>指定正在运行的动画</td>
  </tr>
  </tbody>
</table>
<h4 id="animation-timing-function-设置动画将如何完成一个周期" tabindex="-1"><a class="header-anchor" href="#animation-timing-function-设置动画将如何完成一个周期" aria-hidden="true">#</a> animation-timing-function 设置动画将如何完成一个周期</h4>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> value<span class="token punctuation">;</span>
</code></pre></div><p><strong>animation-timing-function使用的数学函数，称为三次贝塞尔曲线，速度曲线。使用此函数，可以使用您自己的值，或使用预先定义的值之一：</strong></p>
<table class="reference">
<tbody><tr>
<th style="width:25%">值</th>
<th>描述</th>
</tr>
<tr>
<td>linear</td>
<td>动画从头到尾的速度是相同的。</td>
</tr>
<tr>
<td>ease</td>
<td>默认。动画以低速开始，然后加快，在结束前变慢。</td>
</tr>
<tr>
<td>ease-in</td>
<td>动画以低速开始。</td>
</tr>
<tr>
<td>ease-out</td>
<td>动画以低速结束。</td>
</tr>
<tr>
<td>ease-in-out</td>
<td>动画以低速开始和结束。</td>
</tr>
<tr>
<td>steps(int,start|end)</td>
<td> <p>指定了时间函数中的间隔数量（步长）。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。含义分别如下：</p>
<ul><li>
start：表示直接开始。</li><li>
end：默认值，表示戛然而止。</li></ul>
</td>
</tr>
<tr>
<td><a href="#贝塞尔曲线">cubic-bezier(<i>n</i>,<i>n</i>,<i>n</i>,<i>n</i>)</a></td>
<td>在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。</td>
</tr>
</tbody>
</table>
<h4 id="animation-direction-指定是否应该轮流反向播放动画。" tabindex="-1"><a class="header-anchor" href="#animation-direction-指定是否应该轮流反向播放动画。" aria-hidden="true">#</a> animation-direction 指定是否应该轮流反向播放动画。</h4>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">animation-direction</span><span class="token punctuation">:</span> normal|reverse|alternate|alternate-reverse|initial|inherit<span class="token punctuation">;</span>
</code></pre></div><table class="reference notranslate">
  <tbody><tr>
    <th style="width:20%">值</th>
    <th style="width:68%">描述</th> 
  </tr>  
  <tr>
    <td>normal</td>
    <td>默认值。动画按正常播放。</td>
  </tr>
  <tr>
    <td>reverse</td>
    <td>动画反向播放。</td>	
  </tr>
  <tr>
    <td>alternate</td>
    <td>动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。</td>
  </tr>
  <tr>
    <td>alternate-reverse</td>
    <td>动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。</td>
  </tr>
  </tbody>
</table>
<h4 id="animation-fill-mode-规定当动画不播放时要应用到元素的样式" tabindex="-1"><a class="header-anchor" href="#animation-fill-mode-规定当动画不播放时要应用到元素的样式" aria-hidden="true">#</a> animation-fill-mode 规定当动画不播放时要应用到元素的样式</h4>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token property">语法</span><span class="token punctuation">:</span>
<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none|forwards|backwards|both|initial|inherit<span class="token punctuation">;</span>
</code></pre></div><table class="reference notranslate">
  <tbody><tr>
    <th style="width:20%">值</th>
    <th>描述</th>
  </tr>  
  <tr>
    <td>none</td>
    <td>默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。</td>
  </tr>
  <tr>
    <td>forwards</td>
    <td>在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。</td>
  </tr>
  <tr>
    <td>backwards</td>
    <td>动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）。</td>
  </tr>
  <tr>
    <td>both</td>
    <td>动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。</td>
  </tr>
	<tr>
    <td>initial</td>
    <td>设置该属性为它的默认值。请参阅 <a href="/cssref/css-initial.html"><em>initial</em></a>。</td>
    </tr>
	<tr>
    <td>inherit</td>
    <td>从父元素继承该属性。请参阅 <a href="/cssref/css-inherit.html"><em>inherit</em></a>。</td>
    </tr>
  </tbody>
</table>
​ 
<h2 id="动画与过渡的区别" tabindex="-1"><a class="header-anchor" href="#动画与过渡的区别" aria-hidden="true">#</a> 动画与过渡的区别</h2>
<div class="custom-container tip"><p class="custom-container-title">动画与过渡的区别<br/></p>
<p>​<code v-pre>animation</code>与<code v-pre>transition</code>的区别:<br/>
相同点: <strong>都是随时间改变css属性值</strong><br/>
​不同点:<br/>
<code v-pre>​transition</code>: 需要事件触发才能执行<br/>
<code v-pre>​animation</code>: 不需要世界触发也也可以执行动画<br/></p>
</div>
<h2 id="景深" tabindex="-1"><a class="header-anchor" href="#景深" aria-hidden="true">#</a> 景深</h2>
<div class="language-css ext-css"><pre v-pre class="language-css"><code><span class="token selector">.el</span><span class="token punctuation">{</span> <span class="token property">perspective</span><span class="token punctuation">:</span>1200px<span class="token punctuation">;</span> <span class="token comment">/* 元素距离视图的距离，以像素计 */</span><span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">perspective</p>
<p><strong>​perspective(加强2d / 3d 效果，进大远小)</strong><br/>
父元素:每一个子元素的景深下效果都不一样</p>
<p>​perspective:1200px</p>
<p>子元素:每一个子元素的景深效果都一样</p>
<p>​ perspective:1200px</p>
</div>
<details class="custom-container details"><summary>点击查看示例</summary>
<div style="width:200px;height:200px;border:1px solid #333;perspective:500px">
  <div style="width:200px;height:200px;border:1px solid #333;background:red;transform: rotateX(45deg);"></div>
</div>
</details>
</div></template>

<style>
  .gradient {
    width: 100px;
    height: 100px;
    border: 1px solid #333;
  }
</style>

<script>
  export default {
    data() {
      return { deg: '0', tDeg: 'rotate(7deg)' }
    },
    methods: {
      rotate(event) {
        let value = event.target.value
        this.tDeg = "rotate(" + value + "deg)";
        this.deg = value + "deg";
      }
    },
  }
</script>
