# CSS3

## 	属性选择器
**​通过标签的属性选择**

::: tip 属性选择器
1. `img[title]`				  	选中有title属性的img
2. `img [title="mao"]`		选中title=mao的图片
3. `img[title~="mao"]`		选择mao是词列表的img（词列表:一个属性有多个值）
4. `img[title^="mao"]`		选择开头等于mao的img
5. `img[title$="mao"]`		选中结尾等于mao的img
6. `img[title*="mao"]`		选中title属性中有mao的img
7. `img[title|="mao"]`		选中title值为mao或mao-的img
:::



## 结构伪类选择器
### 	同级下的相同标签
​	
::: tip 先找所有同级下的位置，再找标签
`​:first-chid`				选中同级下的第一个<br>
`​:last-chid`				选中统计下的最后一个<br>
`​:only-chid`				同级下只有一个时选中<br>
​`:nth-last-chid()`	倒数匹配条件内容<br>
`​:nth-chid(n)`		选中匹陪条件的内容
<div style="margin-left:80px;">​2n			even	偶数</div>
<div style="margin-left:80px;">​2n+1		odd	奇数</div>
<div style="margin-left:80px;">​	n				第几个</div>

:::

### 	同级下时不同标签
::: tip 	先找标签，再找相同相同标签下的位置
​`:first-of-type`		  选中同级下的第一个<br>
​`:last-of-type	`	  选中同级下的第二个<br>
​`:only-of-type`		同级下只有一个时选中<br>
​`:nth-last-of-type()`		倒数匹配条件内容<br>
​`:nth-of-type()`	选中匹配条件的内容<br>
<div style="margin-left:80px;">​2n			even	偶数</div>
<div style="margin-left:80px;">​2n+1		odd	奇数</div>
<div style="margin-left:80px;">​	n				第几个</div>
:::

## 伪类选择器
::: tip
`:root`		选中html
:::

::: tip 目标结构伪类选择器
匹配被url指向的元素，（必须配合锚点使用）<br>
​选中的url的盒子不能设置样式<br>
`​:target`			匹配配url选中的元素<br>
`​:target	p`	匹配被url指向的元素的后代<br>
:::

::: tip ui状态伪类选择器
`:enabled`			表单元素可用状态选中<br>
`:disabled`			表单元素禁用状态时选中<br>
​`:checked`			表单元素选中状态时选中<br>
​`::selection`		文本内容选中状态时，改变字体背景和文字颜色<br>
:::

::: tip 否定选择器
`:not(选择器)`		除了自己其他元素都选中
:::

::: tip 否定选择器
`:focus`				光标激活的样式
:::
​		

## 层级选择器
::: tip 层级选择器
​父子（后代）`>` 和空格<br>
​相邻（只能选择下面的） `+`	选择哥哥下面的第一个（同级）<br>
​通用（下面的全选） ` ~`	选择哥哥下面的全部（同级）<br>
:::



## 圆滑边框
```css
.el{border-radius: 50%;}
```

| 值 | 说明 |
| --- | --- |
| 1个值 | 全部 |
| 2个值 | 左上 右下 |
| 3个值 | 左上 右上 左下 |
| 4个值 | 左上 右上 右下 左下 |


```html
/* 正圆和椭圆 */
<div style="width:100px;height:100px;border:1px solid #000;border-radius:50%;"></div>
<div style="width:200px;height:100px;border:1px solid #000;border-radius:100%;"></div>
```
::: details 点击查看示例
<div style="width:100px;height:100px;border:1px solid #000;border-radius:50%;"></div>
<div style="width:200px;height:100px;border:1px solid #000;border-radius:100%;"></div>
:::


## 背景
**background**

```html
<!-- background-clip 样式 -->
<div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-color:yellow;"></div>


<!-- background-origin 样式 -->
<div style="width:100px;height:100px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-size:50px 50px;background-repeat: no-repeat;"></div>


<!-- background-size 样式 -->
<div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅.png);background-repeat: no-repeat;"></div>


<!-- background-image 样式 -->
<div style="width:100px;height:60px;padding:10px;border:10px dotted #000;background-image:url(/logo/企鹅-b.png),url(/logo/企鹅.png); background-position: right bottom, left top;background-repeat: no-repeat;background-size:50px 50px,40px 40px"></div>
```

<table>
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


## 文本

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


## 边框图片

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



## 多列布局	

​	设置内容分几列

## 属性

​			column-count				设置内容风为几列

​			column-gap					设置列间隔

​			column-rule					设置列边框线

​			column-fill						设置剩余空间的处理

​						auto		占满前面一列空间，剩余空间最后一行显示

​						balance		剩余空间平分（默认值）

## 设置标题位置

​				column-span

​							none			标题在第一列显示（默认）

​							all				标题在所有列上面显示

## 设置列表宽度

​				column-width（与count冲突，设置值大的）

## columns（复合属性）

​				列表宽盒列（column-width/column-count）属性冲突

# 图片整合

​	CSS Sprites / css精灵图 / 雪碧图

​	把网页里的小图片整合到大的背景图，通过背景插入的形式和核心属性background-position移动图片的位置，来显示部分图片的内容

​	好处:
​		减少图片对服务器的请求次数，可以提升网页的加载速度
​		也可以减少图片的体积

# 渐变

​	多个颜色的过渡，渐变由浏览器生成，有两种模式，标准模式 / 兼容模式

​	3种，

​			线性渐变，径向渐变，重复渐变

## 	线性渐变

​			标准和兼容

​				background:linear-gradient（to 方向，颜色1，颜色2）；

​				background:-前缀-linear-gradient（方向（相反），颜色1，颜色2）；

### 		方向

​			单一方向（上下或水平）

​				【注】标准和兼容单词方向相反

​							标准	to  left（右左）

​										to  right（左右）

​										to  top（下上）

​										to  bottom（上下）

​							兼容 left / right / top / bottom

​			多个方向（对角渐变）

​					标准	to  left  top

​								to  left bottom

​								to  right  top

​								to  right  bottom

​					 

​					兼容  和上面一样，不加to

### 		角度值（水平 / 垂直 / 对角 都可以，单位deg）

​						标准:正值，顺时针		负值逆时针

​						兼容:90deg - 标准的角度值

## 	径向渐变

​			必须加前缀

​		background:-前缀-radial-gradient（渐变的中心点，渐变的形状，渐变的大小，开始颜色，结束颜色）**形状和大小冲突，不能同时设置**

### 				中心点

​							center		默认

​							px / %

### 				形状

​						circle			正圆

​						ellipse			椭圆（默认）

### 				大小（必须有中心点）

​						closest-side		最近边

​						farthest-side		最远边

​						closest-corner		最近角

​						farthest-corner		最远角

## 	重复渐变

### 	重复线性渐变

​		background:-前缀-repeating-linear-gradient（red，yellow 10%，green 30%）；

### 	重复径向渐变

​		background:-前缀-repeating-radial-gradient（red，yellow 10%，green 30%）；

### 	如果设置一个盒子，直接两个颜色，没有渐变过渡

​	  background:linear-gradient(to left, red 50%,green 50%)；

# transition过渡		

​	必须通过事件触发

​		transition:参与过渡的属性，过渡的完成时间，延迟执行，速度动画

​			transition-property	参与过渡的属性

​			transition-duration	过渡完成的时间

​			transition-delay		过渡开始的延迟

​			transition-timing-function	速度动画

​							linear（匀速）

​							ease（逐渐变慢，默认）

​							ease-in（加速）

​							ease-out（减速）

​							ease-in-out（先加后减）

​		速度属性值:cubic-bezier()
​		贝塞尔曲线网址:http://cubic-bezier.com/

# 2D



## transform-origin:px / 单词 /%

​		设置旋转 / 缩放 位置

## 2d偏移

​	transform:translate（x轴，y轴）	

​	transform:translateX（x轴）

​	transform:translateY（y轴）

​	偏移的值可以设置% / px （百分比设相对于元素自身的宽高）

### 	水平垂直居中

​			父元素:position:relative

​			子元素:position:absolute

​								left:50%；

​								top:50%；

​								transform:translate（-50%，-50%）

## 2d缩放

​	值设置倍数，1不变，大于1变大，小于1变小，负数反向放大

​	transform:scale（x轴，y轴）

​	transform:scaleX（x轴）

​	transform:scaleY（y轴）

​				【注】缩放可以负值，是反方向缩放

## 2d旋转

​	transform:rotate（）正值顺时针，负值逆时针

​	transform:rotateX（）上下旋转

​	transform:rotateY（）左右旋转

## 2d倾斜(deg)

​	transform:skew（x轴，y轴）

​	transform:skewX（x轴）

​	transform:skewY（y轴）

# 	3D

## 创建3d空间	

​	transform-style:presereve-3d；

## 3d的偏移

​	前后偏移（正前负后）

​		transform:translate3d（x,y,z）

​		transform:translateX / Y / Z 

## 3d旋转

​	3d旋转

​					3d空间下

​	transform:rotateX（）

​								正值往后躺

​								负值往前趴

​	transform:rotateY（）

​					3d空间下

​								正值往右转

​								负值往左转

​	transform:ritateZ（）

​					3d空间下

​								正值顺时针

​								负值逆时针

## 3d缩放

​	transform:scale3d（x,y,z）

​	transform:scaleZ（z）

【注】z轴缩放需要配合其他功能函数一起使用,要写在其他效果前

# 动画

1，创建动画

​	@keyframes	动画名{

​		0%{}

​		100%{}

​	}

2执行动画

​	animation:动画名 / 动画时间 / 动画速度 / 延迟 / 执行次数 / 动画状态 / 停止位置

​				animation-name			动画名

​				animation-duration		动画时间

​				animation-timing-function		动画速度

​									linear		匀速

​									ease		逐渐变慢

​									ease-in	加速

​									ease-out	减速

​									ease-in-out	先快后慢

​									step-start		省略中间动画过程，直接跳到关键字帧开始的位置

​									step-end		省略中间动画过程，直接跳到关键帧结束的地方

​				animation-delay				延迟动画

​				animation-iteration-count	动画循环次数

​									number		直接写数字

​									infinite			无限循环

​				animation-play-state		动画的状态（单独使用）

​								paused			停止运动

​				animation-fill-mode		动画停止位置

​								none（backwards）停止在动画的第一帧，，默认

​								both（forwards）		停止在动画执行的最后一帧	

# 动画与过渡的区别

​	animation与transition

​		相同点:都是随时间改变css属性值

​		不同点:

​				transition:需要事件触发才能执行

​				animation:不需要世界触发也也可以执行动画

# 景深

​	perspective（加强2d / 3d 效果，进大远小）

父元素:每一个子元素的景深下效果都不一样

​		perspective:1200px

子元素:每一个子元素的景深效果都一样

​		prespective:1200px

# 改变鼠标指针

## cursor:

​		pointer		小手

​		wait			加载

​		help			问号

​		text			文本输入光标

​		# 浏览器的前缀

​	IE						   -ms-

​	谷歌和苹果			-webkit-

​	火狐					   -mzo-

​	欧朋					   -o-

## 书写方法

​	优雅降级（从大到小）

​		div{

​				transition:all 1s；

​				-webkit-transition:all 1s；

​				-o-transition:all 1s；

​				-moz-transition:all 1s；

​			}

​	渐进增强（从小到大）

​			div{

​					-webkit-transition:all 1s；

​					-moz-transition:all 1s;

​					-o-transition:all 1s；

​					transition:all 1s；

​					}


