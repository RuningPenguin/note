# 扩展

## 设置内容隐藏

### 占位隐藏
```css
visibility: hidden;
opacity: 0;
```

### 完全隐藏（不占位）
```css
display: none;
```

::: tip 透明度的区别
​<b>rgba</b>(背景透明，内容不受影响)

<b>​opacity</b>(背景内容一起透明)
:::



## [媒体查询](https://www.runoob.com/cssref/css3-pr-mediaquery.html)
**使网页适应多种分辨率**

```css
​@media mediatype and (mediafeature) {
  ​css语句
​}
​@media all and (min-width:1100px) {
  ​body{
  ​  background:#ccc;
  ​}
​}
```

<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>值</th>
      <th>说明</th>
    </tr>
   </thead> 
    <tbody>
      <tr>
        <th rowspan="4">mediatype<br/>设备类型</th>
        <td>all</td>
        <td>所有设备</td>
      </tr>
      <tr>
        <td>screen</td>
        <td>pc、移动端</td>
      </tr>
      <tr>
        <td>print</td>
        <td>打印机和打印预览</td>
      </tr>
      <tr>
        <td>speech</td>
        <td>屏幕阅读器等发声设备</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <th rowspan="8">mediafeature<br/>表达式</th>
        <td>width</td>
        <td>屏幕宽度等于时</td>
      </tr>
      <tr>
        <td>min-width</td>
        <td>屏幕最小宽度等于时</td>
      </tr>
      <tr>
        <td>max-width</td>
        <td>屏幕最大宽度等于时</td>
      </tr>
      <tr>
        <td>height</td>
        <td>屏幕高度等于时</td>
      </tr>
      <tr>
        <td>min-height</td>
        <td>屏幕最小高度等于时</td>
      </tr>
      <tr>
        <td>max-height</td>
        <td>屏幕最大高度等于时</td>
      </tr>
      <tr>
        <td>orientation:portrait</td>
        <td>竖屏</td>
      </tr>
      <tr>
        <td>orientation:landscape</td>
        <td>横屏</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3" style="text-align: right;">
         <a href="https://www.runoob.com/cssref/css3-pr-mediaquery.html">更多规则</a>
        </th>
      </tr>
    </tfoot>
</table>
​			


## 图片整合
::: tip 图片整合<br/>
​CSS Sprites / css精灵图 / 雪碧图<br/>
​把网页里的小图片整合到大的背景图，通过背景插入的形式和核心属性background-position移动图片的位置，来显示部分图片的内容<br/>
​好处:<br/>
​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减少图片对服务器的请求次数，可以提升网页的加载速度<br/>
​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也可以减少图片的体积<br/>
:::


## 改变鼠标指针
```css
cursor: pointer | wait | help | text | ... ;
```

<table>
  <tr>
    <th>值</th>
    <th>描述</th>
  </tr>

  <tr>
    <td><i>url</i></td>
    <td>
      <p>需使用的自定义光标的 URL。</p>
      <p>注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。</p>
    </td>
  </tr>

  <tr>
    <td>default</td>
    <td>默认光标（通常是一个箭头）</td>
  </tr>

  <tr>
    <td>auto</td>
    <td>默认。浏览器设置的光标。</td>
  </tr>

  <tr>
    <td>crosshair</td>
    <td>光标呈现为十字线。</td>
  </tr>

  <tr>
    <td>pointer</td>
    <td>光标呈现为指示链接的指针（一只手）</td>
  </tr>

  <tr>
    <td>move</td>
    <td>此光标指示某对象可被移动。</td>
  </tr>

  <tr>
    <td>e-resize</td>
    <td>此光标指示矩形框的边缘可被向右（东）移动。</td>
  </tr>

  <tr>
    <td>ne-resize</td>
    <td>此光标指示矩形框的边缘可被向上及向右移动（北/东）。</td>
  </tr>

  <tr>
    <td>nw-resize</td>
    <td>此光标指示矩形框的边缘可被向上及向左移动（北/西）。</td>
  </tr>

  <tr>
    <td>n-resize</td>
    <td>此光标指示矩形框的边缘可被向上（北）移动。</td>
  </tr>

  <tr>
    <td>se-resize</td>
    <td>此光标指示矩形框的边缘可被向下及向右移动（南/东）。</td>
  </tr>

  <tr>
  <td>sw-resize</td>
  <td>此光标指示矩形框的边缘可被向下及向左移动（南/西）。</td>
  </tr>

  <tr>
    <td>s-resize</td>
    <td>此光标指示矩形框的边缘可被向下移动（南）。</td>
  </tr>

  <tr>
    <td>w-resize</td>
    <td>此光标指示矩形框的边缘可被向左移动（西）。</td>
  </tr>

  <tr>
    <td>text</td>
    <td>此光标指示文本。</td>
  </tr>

  <tr>
    <td>wait</td>
    <td>此光标指示程序正忙（通常是一只表或沙漏）。</td>
  </tr>

  <tr>
    <td>help</td>
    <td>此光标指示可用的帮助（通常是一个问号或一个气球）。</td>
  </tr>
</table>



## 浏览器相关

| 浏览器 | 浏览器引擎 | 专属前缀 |
| :--- | :--- | :--- |
| IE | Trident | -ms- |
| Gecko | 火狐 | -moz- |
| Webkit | safari&chrome（苹果和前谷歌）2013年前 | -webkit- |
| Blink | chrome&Opera（谷歌和欧朋） | -webkit- |
| Presto | Opera(欧朋前) | -o- |

### 兼容
```css
/* 优雅降级（从大到小） */

​div {
  ​transition: all 1s;
  ​-webkit-transition: all 1s;
  ​-o-transition: all 1s;
  ​-moz-transition: all 1s;
​}

/* ​ 渐进增强（从小到大） */
​div {
  ​-webkit-transition:all 1s;
  -moz-transition:all 1s;
  ​-o-transition:all 1s;
  ​transition:all 1s;
​}

```




## 	移动端相关

### 移动端布局
1. 网格布局（栅格化布局）
2. 百分比布局，弹性盒布局（弹性盒，rem单位）
3. 等比缩放布局（vw和rem）


### 移动端的像素比设置
::: tip 
​物理像素：ps测量的像素

​逻辑像素：屏幕上显示的大小

​移动端的像素比dpr=物理像素/逻辑像素
:::

| 物理像素 | 逻辑像素 | dpr |
| :------ | :------: | :--: |
| 640 (iphone4/5)   | 320     | 2    |
| 750  (iPhone6/7/8)   | 375     | 2    |
| 1080  (ipad)  | 414     | 3    |




### 准备工作
**设置Meta标签**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- 
width = device-width：宽度等于当前设备的宽度
initial-scale： 初始的缩放比例（默认设置为1.0）
minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）
maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）
user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面） 
-->
```


**vm单位换算**
```css
/* 
物理像素: 640px; 逻辑像素: 320px; dpr: 2;
320px 
  100vw=320px;
  1vw=3.2px
  100px/3.2px=31.25vw; 
*/
html{
  font-size:100px;
  font-size:31.25vw;
}
div {
  width:1rem; /* 100px */
}
```

| 逻辑像素 | 100px => vw |
| :------ | :------: |
| 320px   | 31.25vw   |
| 375px   | 26.66vw   |
| 414px   | 24.15vw   |
| 768px   | 13vw      |
| 1024px  | 9.76vw    |


## 奇怪现象

::: tip 图片边框（IE10及以下）
问题描述：超链接包裹图片，图片会出现边框

​解决方法: `img{border: 0;}`
:::

::: tip 图片间隙（所有浏览器）
问题描述：块元素包裹图片（行内块）两个图片横着拍列也有间隙(图片下方会有3px左右的间隙)

解决方法：1. `img{display:block;}` 2. `img{vertical-align: top;}`
:::

::: tip IE双边距（IE6）
问题描述：盒子设置margin后第一个左边会出现双边距

​解决方法：块元素转换内联（加浮动后内联可以设置宽高）
:::

::: tip IE默认高度（IE6及以下）
问题描述：IE5 / 6盒子的默认高度为16px，不识别小于16px的高度

​解决方法：给盒子`{font-size: 0px;}` 或 `{overflow: hidden;}`
:::

::: tip 透明度（IE8及以下）
​问题描述：不识别`opacity`

​解决方法：使用IE写法`filter: alpha（opacity=1~100整数）`

​【注】opacity取值范围0~1, filter取值范围1~100整数, filter的opacity与值需要用=链接
:::

::: tip 表单元素对齐（所有浏览器）
​问题描述：text与submit（无value）有间隙，不对齐

​解决方法：加浮动
:::

::: tip 按钮大小（所有浏览器）
问题描述：按钮以怪异盒特性计算宽高

​解决方法：1，给按钮增加高度 或 2，转换盒子类型
:::

::: tip 文本框内容（IE8及以下）
​问题描述：text添加value后不是处置居中

​解决方法：设置`line-height`
:::

::: tip 按钮边框（IE及以下）
问题描述：按钮会有双边框

​解决方法：取消按钮边框，其他标签嵌套按钮设置边框
:::





​	

