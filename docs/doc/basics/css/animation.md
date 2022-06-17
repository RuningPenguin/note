# 高级效果


## 渐变
​ **多个颜色的过渡，渐变由浏览器生成，有两种模式，标准模式 / 兼容模式**

<style>
  .gradient {
    width: 100px;
    height: 100px;
    border: 1px solid #333;
  }
</style>

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


### 线性渐变
```css:no-line-numbers
语法:
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```
<table class="reference">
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

**标准和兼容单词方向相反**<br />

单一方向（上下或水平）
| 方向 | 标准 | 兼容 |
| :--- | :--- | :--- |
| 右左 | to left | right |
| 左右 | to right | left |
| 下上 | to top | bottom |
| 上下 | to bottom | top |

多个方向（对角渐变）<br />
| 方向 | 标准 | 兼容 |
| :--- | :--- | :--- |
| 右上,左下 | to left bottom | right top |
| 右下,左上 | to left top | right bottom |
| 左下,右上 | to right top | left bottom |
| 左上,右下 | to right bottom | left top |

**角度值（水平 / 垂直 / 对角 都可以，单位deg）**<br />
​标准: 正值，顺时针 负值逆时针 <br />
​兼容: 90deg - 标准的角度值<br />


### 径向渐变
```css:no-line-numbers
语法:
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```
<table class="reference">
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



### 重复线性渐变
```css:no-line-numbers
语法:
background-image: repeating-linear-gradient(angle | to side-or-corner, color-stop1, color-stop2, ...);
```
<table class="reference">
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


### 重复径向渐变
```css:no-line-numbers
语法:
background-image: repeating-radial-gradient(shape size at position, start-color, ..., last-color);
```
<table class="reference">
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



### 设置一个盒子，两种颜色，没有渐变过渡
```css:no-line-numbers
background-image: linear-gradient(to left, red 50%,green 50%);
```

::: details 点击查看示例
<div class="gradient" style="background-image: linear-gradient(to left, red 50%,green 50%);"></div>
:::



## 过渡(transition)
​ **必须通过事件触发**

```css:no-line-numbers
transition: property duration timing-function delay;

/* ​transition:参与过渡的属性 过渡的完成时间 延迟执行 速度动画 */
```

| 属性 | 描述 |
| :--- | :--- |
| property | 可以是任何属性，如：width、height、background-color、opacity、transform、color、font-size等。 |
| duration | 过渡时间，单位为秒。 |
| timing-function | 过渡动画的速度曲线。 |
| delay | 过渡延迟，单位为秒。 |

::: tip timing-function 可以是以下值：
linear（匀速）<br />
​ease（逐渐变慢，默认）<br />
​ease-in（加速）<br />
​ease-out（减速）<br />
​ease-in-out（先加后减）<br />
:::

### 贝塞尔曲线
速度属性值:`cubic-bezier()` [贝塞尔曲线网址](http://cubic-bezier.com/)


## 2D/3D

### transform
```css:no-line-numbers
语法:
transform: none|transform-functions;
3D:创建3d空间(使用3d属性)
transform-style:presereve-3d;
```

<table class="reference">
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

::: details 点击查看示例
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

<div :style="'width:120px;height:100px;background-color:yellow;border:1px solid black;transform:'+tDeg+';'">HELLO</div>
Rotate: <br>
<input type="range" min="-360" max="360" value="0" @change="rotate" /><br>
transform: rotate(<span>{{deg}}</span>);
:::

### transform-origin
**设置旋转元素的基点位置**
```css:no-line-numbers
语法:
transform-origin: x-axis y-axis z-axis;
```
<table class="reference">
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




### 水平垂直居中
```:no-line-numbers
​ 父元素:position:relative;
​ 子元素:position:absolute;
​ left:50%;
​ top:50%;
​ transform:translate(-50%,-50%);
```
::: details 点击查看示例
<div style="width:200px;height:200px;position:relative;border:1px solid #333;">
  <div style="width:100px;height:100px;position:absolute;left:50%;top:50%;border:1px solid #333;transform: translate(-50%, -50%);">1</div>
</div>
:::


::: tip
[Css3 Transform 各种变形旋转](https://c.runoob.com/codedemo/3391/)<br>
[Transform-Origin](https://www.runoob.com/try/try.php?filename=trycss3_transform-origin_inuse)<br />
:::

## 动画

### 创建动画
```css:no-line-numbers
语法:
@keyframes animationname {keyframes-selector {css-styles;}}

/* 例子 */
@keyframes mymove{
  0%   {top:0px;}
  25%  {top:200px;}
  50%  {top:100px;}
  75%  {top:200px;}
  100% {top:0px;}
}
```
<table class="reference">
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


### 执行动画
```css:no-line-numbers
语法:
animation: name  duration timing-function delay iteration-count direction fill-mode play-state;

​animation: 动画名  动画时间      动画速度     延迟       执行次数     轮流反向播放  停止位置   动画状态
```
<table class="reference">
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


#### animation-timing-function 设置动画将如何完成一个周期
```css:no-line-numbers
语法:
animation-timing-function: value;
```
**animation-timing-function使用的数学函数，称为三次贝塞尔曲线，速度曲线。使用此函数，可以使用您自己的值，或使用预先定义的值之一：**
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

#### animation-direction 指定是否应该轮流反向播放动画。
```css:no-line-numbers
语法:
animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;
```
<table class="reference notranslate">
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

#### animation-fill-mode 规定当动画不播放时要应用到元素的样式
```css:no-line-numbers
语法:
animation-fill-mode: none|forwards|backwards|both|initial|inherit;
```
<table class="reference notranslate">
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



## 动画与过渡的区别
::: tip 动画与过渡的区别<br/>
​`animation`与`transition`的区别:<br/>
相同点: **都是随时间改变css属性值**<br/>
​不同点:<br/>
`​transition`: 需要事件触发才能执行<br/>
`​animation`: 不需要世界触发也也可以执行动画<br/>
:::

## 景深
```css:no-line-numbers
.el{ perspective:1200px; /* 元素距离视图的距离，以像素计 */}
```
::: tip perspective
**​perspective(加强2d / 3d 效果，进大远小)**<br/>
父元素:每一个子元素的景深下效果都不一样

​perspective:1200px

子元素:每一个子元素的景深效果都一样

​ perspective:1200px
:::

::: details 点击查看示例
<div style="width:200px;height:200px;border:1px solid #333;perspective:500px">
  <div style="width:200px;height:200px;border:1px solid #333;background:red;transform: rotateX(45deg);"></div>
</div>
:::




