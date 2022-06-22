# canvas

[参考文档](https://www.runoob.com/w3cnote/html5-canvas-intro.html)

##  基本使用

- `<canvas id="tutorial" width="300" height="300"></canvas>`
- width、height : 单位px,支Ï持css定义(不推荐)
- 获取canvas实例:`var canvas = document.getElementById('tutorial');`
- 获得 2d 上下文:`var ctx = canvas.getContext('2d');`
- 检测该浏览器是否支持canvas:`canvas.getContext`

```js
// 代码模板
function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      //开始代码
}
draw();
```

## 标准图像

- 绘制标准图像(矩形)。 图像默认颜色:`#000000`
  1. **fillRect(x, y, width, height)**：绘制一个Ï填充的矩形。

  2. **strokeRect(x, y, width, height)**：绘制一个矩形的边框。

  3. **clearRect(x, y, widh, height)**：清除指定的矩形区域，然后这块区域会变的完全透明。

> **x,y**:指举行左上角的坐标,(相对于canvas的坐标原点)
>
> **width,height**:绘制图像的宽和高



## 绘制路径

- `<canvas>` 只支持一种原生的图形绘制：**矩形**。所有其他图形都至少需要生成一种路径 (`path`)。
- 图形的基本元素是路径,一个路径必然是闭合的
- 绘制路径的步骤:
  1. 创建路径的起点 **beginPath()**
  2. 调用绘制方法绘制出路径 **moveTo(x, y)**
  3. 将绘制好的路径封闭 **closePath()**
  4. 路径生成,通过描边或填充来渲染图形 **stroke() || fill()**
- api
  1. **beginPath()** 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
  2. **moveTo(x, y)** 把画笔移动到指定的坐标`(x, y)`。相当于设置路径的起始点坐标
  3. **closePath()** 闭合路径之后，图形绘制命令又重新指向到上下文中
  4. **stroke()** 通过线条来绘制图形轮廓。       **fill()** 通过路径填充的内容区域生成是心的圆

### 绘制线段

- **lineTo(x,y)** 绘制一条从当前位置到指定坐标(x,y)的直线

### 绘制圆弧

- **arc(x, y, r, startAngle, endAngle, anticlockwise)**: 以`(x, y)` 为圆心，以`r` 为半径，从 `startAngle` 弧度开始到`endAngle`弧度结束。`anticlosewise` 是布尔值，`true` 表示逆时针，`false` 表示顺时针(默认是顺时针)。

>1. 这里的度数都是弧度。
>2. `0` 弧度是指的 `x` 轴正方向。

```js
radians=(Math.PI/180)*degrees   //角度转换成弧度
```



- **arcTo(x1, y1, x2, y2, radius)**: 根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。

>第 1 条切线：起始点和控制点1决定的直线。
>
>第 2 条切线：控制点1 和控制点2决定的直线。
>
>**其实绘制的圆弧就是与这两条直线相切的圆弧。**

### 贝塞尔曲线

- **quadraticCurveTo(cp1x, cp1y, x, y)** 绘制二次贝塞尔曲线 

>参数1,2: 控制点坐标
>
>参数3,4: 结束点坐标

```js
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 200); //起始点
    var cp1x = 40, cp1y = 100;  //控制点
    var x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();
 
    ctx.beginPath();
    ctx.rect(10, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();
 
}
draw();
```



><img src="https://www.runoob.com/wp-content/uploads/2018/12/274915666-5b74dd8ecb2e2_articlex.png" />

- **bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)** 绘制三次贝塞尔曲线

  >参数 1 和 2：控制点 1 的坐标
  >
  >参数 3 和 4：控制点 2 的坐标
  >
  >参数 5 和 6：结束点的坐标

```js
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(40, 200); //起始点
    var cp1x = 20, cp1y = 100;  //控制点1
    var cp2x = 100, cp2y = 120;  //控制点2
    var x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();
 
    ctx.beginPath();
    ctx.rect(40, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(cp2x, cp2y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();
 
}
draw();
```

><img src="https://www.runoob.com/wp-content/uploads/2018/12/3947786617-5b74dd8ec8678_articlex.png"/>



## 添加样式颜色

### 设置样式

	-  **fillStyle = color** 设置图形的填充颜色 (background)
	-  **strokeStyle = color** 设置图形轮廓的颜色 (border)

>color: 可以是css颜色字符串、渐变对象、图案对象
>
>默认情况下: 线条和填充颜色都是黑色
>
>**设置过一次样式后会改变默认样式,下次取上一次设置的样式**

### 透明度

	- **globalAlpha = transparencyValue**: 这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。

>**影响全局的透明度**
>
>需要绘制大量拥有相同透明度的图形时候相当高效。
>
>设置单个样式rgba()设置透明度更加好一些

### 线条样式

	- **lineWidth** 线宽

> 只能是正值,默认是0
>
> 起始点和终点的连线为中心，**上下各占线宽的一半**

- **lineCap** 线条末端样式

>可选值: `butt`  `round` `square`
>
>**butt** 线条末端以方形结束
>
>**round** 线条末端以圆形结束
>
>**square** 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
>
><img src="https://www.runoob.com/wp-content/uploads/2018/12/3380216230-5b74dd8e97e85_articlex.png" style="zoom:70%;" />



- **lineJoin=type** 设置同一个path内,线条与线条接合处的样式 

>可选值有: `round` `bevel`  `miter`
>
>**round** 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
>
>**bevel** 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
>
>**miter** (默认) 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。



- **setLineDash(),lineDashOffset=0** 虚线

>`setLineDash` 方法接受一个数组，来指定线段与间隙的交替
>
>`lineDashOffset`属性设置起始偏移量。
>
>**getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。**

```js
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
 
    ctx.setLineDash([20, 5]);  // [实线长度, 间隙长度]
    ctx.lineDashOffset = -0;
    ctx.strokeRect(50, 50, 210, 210);
}
draw();
```

><img src="https://www.runoob.com/wp-content/uploads/2018/12/2805401035-5b74dd8e6833c_articlex.png" style="zoom:67%;" />





## 绘制文本

- **fillText(text, x, y [, maxWidth])**  在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的 (background)
- **strokeText(text, x, y [, maxWidth])**  在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的 (border)



### 文本样式

	- **font = value** 当前我们用来绘制文本的样式。这个字符串使用和 `CSS font` 属性相同的语法。 默认的字体是 `10px sans-serif`
	- **textAlign = value** 文本对齐选项。 可选的值包括：`start`, `end`, `left`, `right` or `center`。 默认值是 `start`
	- **textBaseline = value**  基线对齐选项，可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic`
	- **direction = value**  文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit`



## 绘制图片

- 首先需要img实例(可以是img标签,也可以是new Image)

  ### 绘制图片

  >1. 获取(生成)图片实例(设置图片实例src)
  >2. 绘制图片 **drawImage(img,x,y)**
  >   - **我们应该保证在 `img` 绘制完成之后再 `drawImage`**(img.onload)

  ```js
    function draw() {
      let canvas = document.getElementById('tutorial');
      if (!canvas.getContext) return;
      let ctx = canvas.getContext("2d");
      // img 标签
      // let img = document.querySelector('img')
      let img = new Image()
      img.src = 'https://img0.baidu.com/it/u=2456468987,3284231714&fm=26&fmt=auto&gp=0.jpg'
      img.onload = function () {
        ctx.drawImage(img, 0, 0)
      }
   }
  ```

  ### 缩放图片

  >**drawImage(image, x, y, width, height)**
  >
  >**image**: 要渲染的图片实例
  >
  >**x**:  图片在canvas中方的坐标
  >
  >**y**:  图片在canvas中方的坐标
  >
  >**windth**: 图片在canvas中的宽度
  >
  >**height**: 图片在canvas中的高度

  ### 切片

  >**drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)**
  >
  >**image**: 要渲染的图片实例
  >
  >**前 4 个是定义图像源的切片位置和大小，后 4 个则是定义切片的目标显示位置和大小。**

  <img src="https://www.runoob.com/wp-content/uploads/2018/12/2106688680-54566fa3d81dc_articlex.jpeg" />

## 状态的保存和恢复

- **`save` 和 `restore` 方法是用来保存和恢复 `canvas` 状态的，都没有参数**
- `Canvas` 的状态就是当前画面应用的所有样式和变形的一个快照。

>**save**: Canvas状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。
>
>一个绘画的状态包括:
>
>	1. 当前应用的变形 (移动、旋转、缩放)
> 	2. `strokeStyle`, `fillStyle`, `globalAlpha`, `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`, `globalCompositeOperation `的值
> 	3. 当前的裁切路径（`clipping path`)
>
>**可以调用任意多次 `save`方法**(类似数组的`push()`)。

>**restore**: 每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复(类似数组的 `pop()`)。

```js
var ctx;
function draw(){
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
 
    ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
    ctx.save();                  // 保存默认状态
 
    ctx.fillStyle = 'red'       // 在原有配置基础上对颜色做改变
    ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
 
    ctx.save();                  // 保存当前状态
    ctx.fillStyle = '#FFF'       // 再次改变颜色配置
    ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形
 
    ctx.restore();               // 重新加载之前的颜色状态
    ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形
 
    ctx.restore();               // 加载默认颜色配置
    ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
}
draw();
```



## 变形

- **translate(x,y)**: 用来移动 `canvas` 的**原点**到指定的位置

>1. `translate(x, y)`
>
>2. 用来移动 `canvas` 的**原点**到指定的位置
>
>3. `translate` 方法接受两个参数。`x` 是左右偏移量，`y` 是上下偏移量，如右图所示。
>
>4. 在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 `restore` 方法比手动恢复原先的状态要简单得多。又如果你是在一个循环中做位移但没有保存和恢复 `canvas` 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 `canvas` 范围以外了。
>
>5. **注意：`translate` 移动的是 `canvas` 的坐标原点(坐标变换)。**

<img src="https://www.runoob.com/wp-content/uploads/2018/12/829832336-5b74dd8e3ad9a_articlex.png" />



```js
var ctx;
function draw(){
    var canvas = document.getElementById('tutorial1');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.save(); //保存坐原点平移之前的状态
    ctx.translate(100, 100);
    ctx.strokeRect(0, 0, 100, 100)
    ctx.restore(); //恢复到最初状态
    ctx.translate(220, 220);
    ctx.fillRect(0, 0, 100, 100)
}
draw();
```



- **rotate(angle)**: 旋转坐标轴。

>1. 这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
>
>2.  旋转的中心是坐标原点。

<img src="https://www.runoob.com/wp-content/uploads/2018/12/3322150878-5b74dd8e2b6a4_articlex.png" />

```js
var ctx;
function draw(){
  var canvas = document.getElementById('tutorial1');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");
 
  ctx.fillStyle = "red";
  ctx.save();
 
  ctx.translate(100, 100);
  ctx.rotate(Math.PI / 180 * 45);
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 100, 100);
  ctx.restore();
 
  ctx.save();
  ctx.translate(0, 0);
  ctx.fillRect(0, 0, 50, 50)
  ctx.restore();
}
draw();
```



- **scale(x, y)**: 我们用它来增减图形在 `canvas` 中的像素数目，对形状，位图进行缩小或者放大。

>1. `scale`方法接受两个参数。`x,y` 分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩 小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。
>
>2.  默认情况下，`canvas` 的 1 单位就是 1 个像素。举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。同理，设置为 2.0 时，1 个单位就对应变成了 2 像素，绘制的结果就是图形放大了 2 倍。



- **transform(变形矩阵)**: transform(a, b, c, d, e, f)

>
>
>1. ![img](https://www.runoob.com/wp-content/uploads/2018/12/2958376259-5b74dd8e15192_articlex.png)
>
>2. - a (m11): Horizontal scaling.
>   - b (m12): Horizontal skewing.
>   - c (m21): Vertical skewing.
>   - d (m22): Vertical scaling.
>   - e (dx): Horizontal moving.
>   - f (dy): Vertical moving.

```js
var ctx;
function draw(){
    var canvas = document.getElementById('tutorial1');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.transform(1, 1, 0, 1, 0, 0);
    ctx.fillRect(0, 0, 100, 100);
}
draw();
```



<img src="https://www.runoob.com/wp-content/uploads/2018/12/489430190-5b74dd8e17ad2_articlex.png" style="zoom:67%;" />



## 合成

- **globalCompositeOperation = type**: 

>在前面的所有例子中、，我们总是将一个图形画在另一个之上，对于其他更多的情况，仅仅这样是远远不够的。比如，对合成的图形来说，绘制顺序会有限制。不过，我们可以利用 globalCompositeOperation 属性来改变这种状况。

```js
var ctx;
function draw(){
    var canvas = document.getElementById('tutorial1');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
 
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 200, 200);
 
    ctx.globalCompositeOperation = "source-over"; //全局合成操作
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 200, 200);
}
draw();
```

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️   代码运行   ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

<img src="https://www.runoob.com/wp-content/uploads/2018/12/1858023544-5b74dd8e0813d.png">

### type的可选值

老图像:蓝色。 新图像:红色。

| 值                   | 说明                                                         | 预览                                                         | 备注                                                         |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **source-in**        | 仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的。(包括其他的老图像区域也会透明) | <img src="https://www.runoob.com/wp-content/uploads/2018/12/2183873141-5b74dd8e02a4a_articlex.png" style="zoom:50%"  /> |                                                              |
| **source-out**       | 仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明。(老图像也不显示) | <img src="https://www.runoob.com/wp-content/uploads/2018/12/2402253130-5b74dd8dd7621_articlex.png" style="zoom:50%"  /> |                                                              |
| **source-atop**      | 新图像仅仅显示与老图像重叠区域。老图像仍然可以显示。         | <img src="https://www.runoob.com/wp-content/uploads/2018/12/1206278247-5b74dd8dd9036_articlex.png" style="zoom:50%"  /> |                                                              |
| **destination-over** | 新图像会在老图像的下面。                                     | <img src="https://www.runoob.com/wp-content/uploads/2018/12/2492190378-5b74dd8dca608_articlex.png" style="zoom:50%"  /> |                                                              |
| **destination-in**   | 仅仅新老图像重叠部分的老图像被显示，其他区域全部透明。       | <img src="https://www.runoob.com/wp-content/uploads/2018/12/1617768463-5b74dd8d99843_articlex.png" style="zoom:50%"  /> |                                                              |
| **destination-out**  | 仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域。 | <img src="https://www.runoob.com/wp-content/uploads/2018/12/1921976761-5b74dd8daba2d_articlex.png" style="zoom:50%"  /> |                                                              |
| **destination-atop** | 老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面。     | <img src="https://www.runoob.com/wp-content/uploads/2018/12/4055109887-5b74dd8db283c_articlex.png" style="zoom:50%"  /> |                                                              |
| **lighter**          | 新老图像都显示，但是重叠区域的颜色做加处理。                 | <img src="https://www.runoob.com/wp-content/uploads/2018/12/1200224117-5b74dd8d9453e_articlex.png" style="zoom:50%"  /> |                                                              |
| **darken**           | 保留重叠部分最黑的像素。(每个颜色位进行比较，得到最小的)     | <img src="https://www.runoob.com/wp-content/uploads/2018/12/3835256030-5b74dd8d92ba5_articlex.png" style="zoom:50%"  /> | `blue: #0000ff ` `red: #ff0000` 所以重叠部分的色：**#000000** |
| **lighten**          | 保证重叠部分最量的像素。(每个颜色位进行比较，得到最大的)     | <img src="https://www.runoob.com/wp-content/uploads/2018/12/1617768463-5b74dd8d99843_articlex.png" style="zoom:50%"  /> | `blue: #0000ff ` `red: #ff0000`  所以重叠部分的色：**#ff00ff**。 |
| **xor**              | 重叠部分会变成透明。                                         | <img src="https://www.runoob.com/wp-content/uploads/2018/12/2521026104-5b74dd8d6abd6_articlex.png" style="zoom:50%"  /> |                                                              |
| **copy**             | 只有新图像会被保留，其余的全部被清除(边透明)。               | <img src="https://www.runoob.com/wp-content/uploads/2018/12/2454891415-5b74dd8d67aec_articlex.png" style="zoom:50%"  /> |                                                              |



## 路径裁剪

- **clip()**: 把已经创建的路径转换成裁剪路径

>1. 裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏
>
>2. **clip() 只能遮罩在这个方法调用之后绘制的图像，如果是 clip() 方法调用之前绘制的图像，则无法实现遮罩。**





## 动画

1. 我们可用通过 `canvas` 的方法或者自定义的方法把图像会知道到 `canvas` 上。正常情况，我们能看到绘制的结果是在脚本执行结束之后。例如，我们不可能在一个 `for` 循环内部完成动画。

2. 也就是，为了执行动画，我们需要一些可以定时执行重绘的方法。

3. 一般用到下面三个方法：

4. 1. `setInterval()`
   2. `setTimeout()`
   3. `requestAnimationFrame()`

5. 





## Api

- canvas.getContext 获取上下文 @return:上下文实例  (canvas api)

  >⬇️⬇️⬇️⬇️-上下文实例api-⬇️⬇️⬇️⬇️


| 方法                 | 属性               | 参数                                                         | 默认值            | 说明                                                         | 备注                                                         |
| :------------------- | :----------------- | ------------------------------------------------------------ | :---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **fillRect**         |                    | x, y, width, height                                          |                   | 绘制一个填充的矩形                                           |                                                              |
| **strokeRect**       |                    | x, y, width, height                                          |                   | 绘制一个矩形的边框                                           |                                                              |
| **clearRect**        |                    | x, y, widh, height                                           |                   | 清除指定的矩形区域，然后这块区域会变的完全透明               |                                                              |
| **beginPath**        |                    |                                                              |                   | 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径 |                                                              |
| **moveTo**           |                    | x, y                                                         |                   | 把画笔移动到指定的坐标`(x, y)`。相当于设置路径的起始点坐标   |                                                              |
| **closePath**        |                    |                                                              |                   | 闭合路径之后，图形绘制命令又重新指向到上下文中(会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做) |                                                              |
| **stroke**           |                    |                                                              |                   | 通过线条来绘制图形轮廓。                                     |                                                              |
| **fill**             |                    |                                                              |                   | 通过路径填充的内容区域生成是心的圆                           |                                                              |
| **lineTo**           |                    | x,y                                                          |                   | 绘制一条从当前位置到指定坐标`(x, y)`的直线                   |                                                              |
| **arc**              |                    | x, y, r, startAngle, endAngle, anticlockwise                 |                   | 以`(x, y)` 为圆心，以`r` 为半径，从 `startAngle` 弧度开始到`endAngle`弧度结束。`anticlosewise` 是布尔值，`true` 表示逆时针，`false` 表示顺时针(默认是顺时针) |                                                              |
| **arcTo**            |                    | x1, y1, x2, y2, radius                                       |                   | 根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点 |                                                              |
| **quadraticCurveTo** |                    | cp1x, cp1y, x, y                                             |                   | 绘制二次贝塞尔曲线 (参数1,2: 控制点坐标;参数3,4: 结束点坐标) |                                                              |
| **bezierCurveTo**    |                    | cp1x, cp1y, cp2x, cp2y, x, y                                 |                   | 绘制三次贝塞尔曲线 (参数 1 和 2：控制点 1 的坐标;参数 3 和 4：控制点 2 的坐标;参数 5 和 6：结束点的坐标) |                                                              |
|                      | **fillStyle**      | css Color                                                    |                   | 设置图形的填充颜色 (background)                              |                                                              |
|                      | **strokeStyle**    | css Color                                                    |                   | 设置图形轮廓的颜色 (border)                                  |                                                              |
|                      | **globalAlpha**    | [0.0 - 1.0]                                                  | 1.0               | 这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明） |                                                              |
|                      | **lineWidth**      | 只能是正值                                                   | 0                 | 线宽                                                         |                                                              |
|                      | **lineCap**        | [`butt`  `round` `square`]                                   |                   | 线条末端样式 (可选值: `butt`  `round` `square`)              |                                                              |
|                      | **lineJoin**       | [`round` `bevel`  `miter`]                                   |                   | 设置同一个path内,线条与线条接合处的样式 (可选值有: `round` `bevel`  `miter`) |                                                              |
| **setLineDash**      |                    |                                                              |                   | 虚线 (`setLineDash` 方法接受一个数组，来指定线段与间隙的交替;`lineDashOffset`属性设置起始偏移量。) |                                                              |
|                      | **lineDashOffset** |                                                              |                   |                                                              |                                                              |
| **fillText**         |                    | text, x, y [, maxWidth]                                      |                   | 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的    |                                                              |
| **strokeText**       |                    | text, x, y [, maxWidth]                                      |                   | 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的      |                                                              |
|                      | **font**           |                                                              | `10px sans-serif` | 当前我们用来绘制文本的样式。这个字符串使用和 `CSS font` 属性相同的语法。 默认的字体是 `10px sans-serif` |                                                              |
|                      | **textAlign**      | [`start`, `end`, `left`, `right`  `center`]                  | `start`           | 文本对齐选项。 可选的值包括：`start`, `end`, `left`, `right` or `center`。 |                                                              |
|                      | **textBaseline**   | [`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`] | `alphabetic`      | 基线对齐选项，可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。 |                                                              |
|                      | **direction**      | [`ltr`, `rtl`, `inherit`]                                    | `inherit`         | 文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。            |                                                              |
| **drawImage**        |                    | image, x, y, [?width], [?height]                             |                   | 绘制图片 + 图片大小                                          |                                                              |
|                      |                    | image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight      |                   | 绘制图片 + 切片                                              |                                                              |
| **save**             |                    |                                                              |                   | 保存状态                                                     |                                                              |
| **restore**          |                    |                                                              |                   | 恢复状态                                                     |                                                              |
| **translate**        |                    | [`x`,`y`]                                                    |                   | 用来移动 `canvas` 的**原点**到指定的位置                     | `x` 是左右偏移量，`y` 是上下偏移量，如右图所示               |
| **rotate**           |                    | angle                                                        |                   | 旋转坐标轴。                                                 | 旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值        |
| **scale**            |                    | [`x`,`y`]                                                    |                   | 增减图形在 `canvas` 中的像素数目，对形状，位图进行缩小或者放大。 | 它们都必须是正值。值比 1.0 小表示缩 小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。 |
| **transform**        |                    | a, b, c, d, e, f                                             |                   | 变形矩阵                                                     | 变形矩阵                                                     |




