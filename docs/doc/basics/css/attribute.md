
# 常用属性

## 水平对齐（只对块元素起作用） 
``` css
.el{text-align: left | right | center | justify | inherit;}
```

| 值 | 功能 |
| :--- | :--- |
| left | 左对齐 |
| right | 右对齐 |
| center | 水平居中 |
| justify | 两端对齐（一般字母和中文混合时使用） |


## 行高 
 
``` css
.el{line-height : 1;}
```

::: tip
1、单行文本垂直居中（行高等于盒子的高度） 

2、清除自带的行间距（行高等于字体的大小） 

3、可以设置多行内容的行间距(行高和字体大小同时测量) 
:::

## 线条修饰 
```css
.el{ text-decoration: none | underline | line-through | blink | inherit;}
```

| 值 | 功能 |
| :--- | :--- |
| none | 无修饰 |
| underline | 下划线 |
| overline | 上划线 |
| line-through | 删除线 |


## 首行缩进 
```css
.el{ text-decoration: 2em;}
```

::: tip
2em 为缩进2个字符<br>
首行缩进可以设置负值
:::


## 字间距
```css
.el{ letter-spacing: 0;}
``` 

::: tip
字间距/词间距（英文空格的内容） <br>
定义字符间的固定空间（允许使用负值）
:::



## 边框 
::: tip
4条边框 

border：粗细 样式 颜色； 
:::



**单一的边框需要设置方向（3个值）** 

border-top /
border-bottom /
border-left /
border-right 

### 取消边框 
```css
.el{ border: none | 0;}
```

### 边框粗细 
```css
.el{ border-width: 1px;}
```

| 值 | 功能 |
| :--- | :--- |
| 1个值 | 四个方向  |
| 2个值 | 上下    左右 |
| 3个值 | 上   左右   下  |
| 4个值 | 上   右   下   左  |


### 边框样式 
```css
.el{ border-style: solid | dashed | dotted | double;}
```

| 值 | 功能 |
| :--- | :--- |
| solid | 实线 |
| dotted | 点线 |
| dashed | 虚线 |
| double | 双线 |

### 边框颜色 
```css
.el{ border-color: #fff;}
```

## 背景 

### 复合属性 
```css
.el{ background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;}
```
<!-- background: 要使用的背景颜色  背景图片  背景图像的位置/背景图片的大小(大小和位置必须在一块用/隔开）  如何重复背景图像  指定背景图像的定位区域  指定背景图像的绘画区域  设置背景图像是否固定或者随着页面的其余部分滚动  -->
| 值 | 示例 | 功能 | 
| :--- | :--- | :--- |
| bg-color | background-color:#fff | 背景颜色 |
| bg-image | background-image: url(img.jpg) | 背景图片 |
| bg-position | background-position: left(水平) top(垂直); <br>[[left(默认值),right,center],[top(默认值),bottom,center]] | 背景图片的位置 |
| bg-size | background-size: 100px(水平) 100px(垂直); <br>{px:相对于盒子的位置,%:相对于图片的位置}| 背景图片的大小 |
| bg-repeat | background-repeat: repeat; <br>[repeat(铺满,默认值),repeat-x(x轴铺满),repeat-y(y轴铺满),no-repeat(不平铺)] | 如何重复背景图像 |
| bg-origin | background-origin: left top | 指定背景图像的定位区域 |
| bg-clip | background-clip: content-box | 指定背景图像的绘画区域 |
| bg-attachment | background-attachment: fixed;<br>[scroll(不固定,默认值),fixed(背景图片固定)] | 设置背景图像是否固定或者随着页面的其余部分滚动 |



## 文本溢出 

<table>
  <tr>
    <th>属性</th>
    <th>可选值</th>
    <th>功能</th>
  </tr>
  <tr>
    <th>white-space</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>normal</td>
          <td>默认效果（什么都没有）</td>
        </tr>
        <tr>
          <td>nowrap</td>
          <td>设置内容不换行，多个空格识别一个</td>
        </tr>
        <tr>
          <td>pre</td>
          <td>设置内容不换行，识别多个空格</td>
        </tr>
        <tr>
          <td>pre-line</td>
          <td>换行，多个空格识别一个，但是可以识别换行 </td>
        </tr>
        <tr>
          <td>inherit</td>
          <td>继承父元素的white-space </td>
        </tr>
      </table>
    </td>
    <td>设置空白空间 </td>
  </tr>

  <tr>
    <th>overflow</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>visible</td>
          <td>默认值</td>
        </tr>
        <tr>
          <td>hidden</td>
          <td>隐藏超出内容</td>
        </tr>
        <tr>
          <td>scroll</td>
          <td>内容会有滚动条（没有内容也有滚动条组件）</td>
        </tr>
        <tr>
          <td>auto</td>
          <td>超出才有滚动条 </td>
        </tr>
        <tr>
          <td>inherit</td>
          <td>继承父元素的overflow-space </td>
        </tr>
      </table>
    </td>
    <td>设置内容超出</td>
  </tr>

  <tr>
    <th>overflow-x</th>
    <td>
      同overflow
    </td>
    <td>设置单向滚动条(x轴)</td>
  </tr>

  <tr>
    <th>overflow-y</th>
    <td>
      同overflow
    </td>
    <td>设置单向滚动条(y轴)</td>
  </tr>

   <tr>
    <th>text-overflow</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>ellipsis</td>
          <td>变成省略号</td>
        </tr>
        <tr>
          <td>clip</td>
          <td>剪裁超出部分</td>
        </tr>
      </table>
    </td>
    <td>设置隐藏内容变成省略号</td>
  </tr>

</table>
  

### 设置单行文本溢出 
```css
.el{ 
  /* 定义显示的范围（width）  */
  width:200px; 
  /* 强制内容不换行，只识别一个空格 */
  white-space: nowrap;
  /* 设置超出内容隐藏  */
  overflow: hidden;
  /* 设置隐藏文本转换成省略号 */
  text-overflow: ellipsis;
}
```

::: details 点击查看示例
<style>
.el{ 
  margin: 10px 0 0 0;
  width:200px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<div class="el">单行文本溢出单行文本溢出单行文本溢出单行文本溢出</div>
:::


### 设置多行文本溢出隐藏 
```css
.el{ 
  /*  把内容转换成弹性盒子（老版本弹性盒）  */
  display: -webkit-box;
  /*  设置内容排列方式，垂直排列 */
  -webkit-box-orient: vertical;
  /* 设置内容隐藏的行数  */
  -webkit-line-clamp: 2;
  /* 把超出的内容隐藏 */
  overflow: hidden;
}
```

::: details 点击查看示例
<style>
.el1{ 
  margin: 10px 0 0 0;
  width:200px; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
<div class="el1">多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出多行文本溢出</div>
:::



## 元素类型 

### 块元素
::: tip 块元素
div / p / h1~h6 / ol / ul / li / dt / dd / form / hr / fieldset / legend / address / blockquote / figure / figcaption / details / summary
:::

1. 可以自动换行、且独占一行 
2. 可以设置宽高 
3. 块元素可以包裹块元素和内联元素（p，h1~h6，dt特殊，嵌套内联） 
4. 块元素可以设置4个方向的padding和margin 

### 内联元素
::: tip 内联元素
b / strong / i / em / s / a / span / br / sub / sup / u / code / time 
:::
1. 一行显示多个，识别不了宽高 
2. 宽高由内容撑开 
3. 内联只能嵌套内联 
4. 内联只能设置左右的padding和margin 

### 行内块元素
::: tip
img / input / select / textarea / button / label 
:::

1. 可以设置宽高 
2. 水平显示 
3. 行内块元素只能嵌套内联元素 
4. 可以设置4个方向的margin和padding 

### 元素类型的转换
::: tip display
转换元素类型
:::

| 属性值 | 描述 |
| :--- | :--- |
| block | 块元素 |
| inline | 内联元素 |
| inline-block | 行内块元素 |
| none | 元素消失，不占位 |
| list-item | li的display值 |
| flex | 弹性盒子 |
| grid | 网格 |



## 浮动 
::: tip
改变块元素的排列方式，让内容变成水平排列 <br>
1. 浮动元素会脱离文档流，不占位，盒子会重叠，内容不重叠 
2. 如果想要内容都水平排列，需要所有的盒子都浮动 
3. 浮动的宽大于 父元素显示不下，就会掉下来第二行显示 <br>
**浮动的不占位只会在同级之间产生（只往下影响，不影响上面的）** 
:::

<table>
  <tr>
    <th>属性</th>
    <th>可选值</th>
    <th>功能</th>
  </tr>
  <tr>
    <th>float</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>left</td>
          <td>左浮动</td>
        </tr>
        <tr>
          <td>right</td>
          <td>右浮动</td>
        </tr>
        <tr>
          <td>none</td>
          <td>不浮动</td>
        </tr>
      </table>
    </td>
    <td>元素浮动</td>
  </tr>

  <tr>
    <th>clear</th>
    <td style="padding:0;">
      <table style="margin:0;">
        <tr>
          <td>left</td>
          <td>清除左浮动</td>
        </tr>
        <tr>
          <td>right</td>
          <td>清除右浮动</td>
        </tr>
        <tr>
          <td>both</td>
          <td>清除所有浮动</td>
        </tr>
      </table>
    </td>
    <td>清除浮动（往上清除）</td>
  </tr>
</table>

**万能清除法**
```css
.class::after {
  content:"" ；
  display:block;
  clear:both;
}
```
 

### 元素类型受浮动的影响 
| 元素类型 | 影响效果 |
| :--- | :--- |
| 块元素 | 不设置宽高的话，宽是父元素的宽，浮动以后宽度由内容撑开  |
| 内联元素 | 1. 可以设置宽高<br> 2. 可以设置4个方向的padding和margin<br> 3. 空格的间隙也能取消   |



## 定位 
::: tip 定位(position)
四个方向（top/right/bottom/left） 
一个层级关系(z-index) 
:::

```css
.el{ position: absolute | relative | fixed | sticky | static; }
```

| 属性值 | 功能 | 详细信息 |
| :--- | :--- | :--- |
| relative | 相对定位 | 1. 元素占位 <br>2. 位置移动是相对于自己的原位置 <br>3. 相对定位可以使用定位触发5个属性  |
| absolute | 绝对定位 | 1. 绝对定位不占位 <br>2. 绝对定位的位置先找有定位的父元素（包含块） <br> 3. 没有定位父元素找浏览器窗口为参照物 <br> 4. 绝对定位可以使用定位触发5个属性  |
| fixed | 固定定位 | 1. 不占位 <br> 2. 始终以浏览器窗口为参照移动位置 <br> 3. 可以触发5个属性  |
| sticky | 可变定位(粘性定位) | 1. 不移动滚动条，内容占位，移动滚动条，内容不占位（固定类型） <br> 2. 默认不移动位置，划过内容，位置相对于浏览器 <br> 3. 必须设置移动位置（top/right/bottom/left）  |
| static | 静态定位(取消定位) | 设置static后，元素变成普通元素 |




## 宽高自适应 

### 宽度自适应
::: tip 宽度自适应(width)
1. 不设置宽度（元素类型不受不占位影响，不脱离文档流） 
2. 设置宽为100%（元素类型受不占位影响，浮动，固定定位，绝对定位） 
3. cac（）函数  可以动态计算素质值 
:::

### 高度自适应 
::: tip 高度自适应(height)
1. 不设置高（height：auto；） 
2. 最小高: `min-height: 100px;` 在内容不够最小高的时候识别最小高，内容超过最小高时高度自动被撑大 (IE5/6不识别min-height )
3. _ (过滤器): `_height: 100px;` 只有IE5/6识别 
:::


## 内容垂直居中 
::: tip 内容垂直居中(vertical-align)
只能设置行内块元素，必须有参照物
1. 不设置（默认居中）
2. 居中：`vertical-align: middle;`
3. 底部：`vertical-align: bottom;`
4. 顶部：`vertical-align: top;`
:::

### 方法一
```css
.el2{
  /* 设置元素为行内块元素  */
  display: inline-block;
  vertical-align：middle
}
/* 设置参照物  */
span{ 
  display：inline-block； 
  vertical-align：middle； 
  height：100%； 
} 
```

::: details 点击查看示例
<style>
  .el2{
  vertical-align:middle;
  width:100px;
  height:100px;
}
.sp{ 
  display:inline-block;
  vertical-align:middle;
  height:100%;
} 
</style>
<div style="width:200px;height:200px;border:1px solid #000">
  <img class="el2" src="/logo/企鹅.png"/>
  <span class="sp"></span>
</div>
:::



### 方法二 
::: tip 
把内容转换成表格类型, 设置内容占满父元素, vertical-align也有效果<br>
父元素: `display:table;`
子元素: `display:table-cell;vertical-align:middle;height:100%;`
:::

::: details 点击查看示例
<div style="width:200px;height:200px;border:1px solid #000;display:table;">
  <div style="display:table-cell;vertical-align:middle;height:100%;">
    <img style="width:100px;height:100px;" src="/logo/企鹅.png"/>
  </div>  
</div>
:::



## 高度塌陷 
::: danger 高度塌陷
父元素不设置高，或者设置最小高，高度由内容撑开，一旦内容浮动，父元素识别不了内容的高度，就会出现高度塌陷 
:::

::: tip 解决方法
1. 高度塌陷父元素设置overflow: hidden;<br>
overflow可以触发BFC（一个独立渲染的区域，浮动元素也参与高度计算） 
2. 给浮动元素下加一个空盒子，清除浮动，把父元素撑开 
3. 万能清除法 <br>
给塌陷的父元素添加一个::after、 content必须有设置元素类型block, 清除浮动 
```css
.class::after { 
  content:"" ；
  display:block; 
  clear:both; 
}
```
:::

## BFC
​	***BFC是一个独立渲染的区域，规定块元素的布局规则（只有块元素才能参与）***

### 	布局规则
1. 块元素独占一行
2. 同一个BFC，两个块元素上下margin会重叠
3. 盒子左边的边框会和外边距接触
4. 浮动区域和BFC区域不会重叠（自适应两栏布局）
5. 每一个BFC区域都是独立的，相互之间不会影响
6. BFC计算高度时，浮动区域也参于高度计算


### 	触发条件
1. html（根元素）
2. 浮动: left	right
3. 定位: absolute（绝对定位）fixed（固定定位）
4. display: inline-block / table-cell / table-caption / flex（弹性盒）/ inline-flex（老版弹性盒）
5. overflow: hidden / scroll / auto


### BFC解决的问题
1. 浮动产生的高度塌陷（6规则，BFC计算高度时，浮动区域也参与计算）
2. 自适应两栏布局（4规则，浮动区域和BFC区域不会重叠）
3. BFC解决margin的重叠问题（5规则，每一个BFC区域都是独立的，相互之间不影响）


