# jQuery
[jQuery官网](https://jquery.com/)
[jQuery方法大全中文网](http://jquery.cuishifeng.cn/)
::: tip
- `jQuery`是一个前端库，也是一个方法库
- 里面封装了很多方法，直接拿来使用就可以
- jQuery的优点
  - 优质的选择器和筛选器
  - 好用的隐式迭代
  - 强大的链式编程：一行代码就可以解决
:::

## 选择器和筛选器
**都是用来帮我们获取DOM元素的**


### 选择器
```js
// 按照id获取页面中的元素
const ele=jQuery("#box");
const ele=$("#box");
```
```js
// 按照类名获取页面中的元素,可以获取到一组元素
const eles=jQuery(".a");
const eles=$(".a");
```
```js
// 按照标签名获取页面中的元素，可以获取到一组元素
const lis=jQuery("li");
const lis=$("li");
```
```js
// 按照选择器获取元素，可以获取到一组元素
const eles=jQuery("ul>li");
const eles=$("ul>li");
```


### 特殊选择器
```js
// 直接找到第一个
$("li:first")
```
```js
// 直接找到最后一个
$("li:last")
```
```js
// 直接找到第几个
$("li:eq(3)")
```
```js
// 找到所有奇数个
$("li:odd")
```
```js
// 找到所有偶数个
$("li:even")
```


### 筛选器
- jQuery的筛选器就是在选择器选择到一组元素之后，对元素进行筛选，也可以对准确的某一个元素进行判断和获取

1. first()  找到所有元素中的第一个
```js
$("li").first()
```

2. last()  找到所有元素中的最后一个
```js
$("li").last()
```

3. eq(索引)  表示某一个，按照索引排列
```js
$("ul>li").eq(2);
```

4. next()  找到某一个元素的下一个兄弟元素
```js
$("li:eq(3)").next()
```

5. nextAll()  下面的所有兄弟元素
```js
$("ul>li").nextAll()
$("ul>li").nextAll(".box8") //找到后面所有兄弟元素中，类名为box8的元素
```

6. nextUntil() 找到下面的所有兄弟元素，知道哪一个元素为止
```js
$("ul>li").nextUntil(".box8");
```

7. prev() 找到某一个元素的上一个兄弟元素
```js
$("li:eq(3)").prev()
```

8. prevAll() 找到某一个元素的上面的所有兄弟元素
```js
$("li:eq(3)").prevAll()
```

9. prevUntil() 找到上面的所有兄弟元素，知道哪一个元素为止
```js
$('ul > span').prevUntil('.box3')
```

10. parent() 获取父元素
```js
$('span').parent()
```

11. parents() 找到某一个元素的所有结构父级，一直到html
```js
$('span').parents()
$('span').parents('body')
```

12. parentsUntil() 按照结构父级获取所有的元素, 直到某一个元素为止
```js
$("li:eq(3)").parentsUntil("html")
```

13. siblings() 所有的兄弟元素，不包括自己
```js
$('span').siblings()
```

14. children() 所有的子元素
```js
$("ul").children();
```

15. find() 按照指定的要求在元素集合里面进行查找
```js
$('ul').find('i')
```

16. index() 获取该元素的索引，返回值是一个数字
- 注意：不管什么元素，只数是第几个元素
```js
$('.box3').index() // 2
$('.box8').index() // 8
```

## jQuery操作文本内容
### html()
- 对应原生js里面的innerHTML
- 不传递参数的时候，就是获取元素的html结构
- 传递参数的时候，就是设置元素的html结构
```js
// 获取元素的 html 结构
$('div').html()
// 设置元素的 html 结构
$('div').html('<span>设置一个 span 标签</span>')
```
### text()
- 对应原生js里面的innerText
- 不传递参数的时候，就是获取元素的文本内容
- 传递参数的时候，就是设置元素的文本内容
```js
$('div').text()
// 设置元素的文本内容
$('div').text('我是一段新来的文本内容')
```

### val()
- 对应原生js里面的value
- 不传递参数的时候，就是获取表单元素的value属性的值
- 传递参数的时候，就是设置表单元素的value属性的值
```js
console.log($('input').val())
// 设置表单元素的 value 值
$('input').val('你好 世界')
```


## jQuery操作类名
**原先在原生js里面，操作类名使用className**

### addClass()  添加类名
- jQuery元素集合.addClass（你要添加的类名）
- 只接收一个参数，不管多长，底层封装原理
```js
$('div').addClass('box1 box2')
```

### removeClass()  移除类名
- jQuery元素集合.removeClass(你要移除的类名)
```js
$('div').removeClass('d box2')
```

### toggleClass()  切换类名
- jQuery元素集合.toggleClass(你要切换的类名)
- 注意：
- 如果本身有这个类名，就是删除
- 如果本身没有类名，就是添加
- 就相当于开关，按钮，开了关，关了开
```js
$('div').toggleClass('box')
```

### hasClass()  判断有没有某一个类名
- jQuery元素集合.hasClass(你要判断的类名)
- 返回值是一个布尔值
- 注意：这个方法的后面不能继续链式编程
```js
 console.log($('div').hasClass('box'))
 ```


## jQuery操作样式
### css()
- 能获取，能设置，能批量设置
- 通过传递不同的参数来达到不同的效果
- 传递一个参数，是一个字符串
- 获取元素的某一个样式
- 传递两个参数，第一个参数是样式名，第二个参数是样式值
- 给元素设置行内样式
- 你在书写样式值的时候，可以不写单位，默认会添加px为单位
- 传递一个参数，是一个对象数据类型
- 批量设置样式的
- 在对象内写好每一个样式名和样式值
```js
//获取元素样式
$("div").css("width")
$("div").css("height")

//设置样式
//$("div").css("background-color","skyblue")
//$("div").css("width",500)
//$("div").css("opacity",0.5)

$("div").css({
  width:200,
  height:500,
  backgroundColor:"orange"
})
```

## jQuery操作属性
- 在H5标准中，官方发布一个规范，当你书写自定义属性的时候写成data-xxx，用来专门做区分的，在标签上看一下就知道谁是自定义属性，谁不是
- 原生属性是用来修饰标签的
- 自定义属性使用在元素上记录一些内容

### data()  设置元素的属性和获取元素的属性
- 获取
- 元素集合.data(你要获取的值)
- 可以获取元素身上记录的属性
- 也可以获取标签上预存储的 H5 标准自定义属性
- 你存储的时候是什么数据类型, 获取的时候还是什么数据类型
- 你要获取元素身上data-hello 的值
- 你就直接写 data('hello')
```js
  // 可以获取元素身上的 存储属性
  // 也可以获取元素标签上预存储的 data-xxx 属性
  console.log($('div').data('hello'))
  console.log($('div').data('a'))
  console.log($('div').data('b'))
```
- 设置：
- 只能设置在元素的身上, 不能显示在标签上
- 在元素身上记录一个数据使用
```js
 // 存储以后, 不会显示在标签上, 但是会存储在元素的身上
  $('div').data('a', 100) // 存储的数据是数值类型
  $('div').data('b', true) // 存储的数据是布尔类型
```

### removeData() : 删除元素的属性
- 不能删除元素标签上的预存储属性
- 只能删除有 data 方法设置的属性
```js
$('div').removeData('a')
$('div').removeData('b')
```


### attr() 用来设置和读取元素的属性
- 获取: 元素集合.attr(属性名)
- 不管你设置的时候是什么数据类型
- 获取到的都是字符串
- 不适合存储复杂数据类型
```js
 // attr() 获取属性值
 console.log($('div').attr('abc'))

```
- 设置：元素集合.attr(属性名, 属性值)
- 我设置的值是一个复杂数据类型
- 不管你设置的是什么数据类型, 他都会自动转换成字符串给你写在标签身上
```js
//attr() 设置属性
  $('div').attr('abc', { name: 'Jack' })
```
- removeAttr(): 用来删除元素的属性的
- 删除: 元素集合.removeAttr(你要删除的属性)
```js
 // removeAttr() 删除
 $('div').removeAttr('abc')
 $('div').removeAttr('hello')
 $('div').removeAttr('class')
 $('div').removeAttr('data-hello')
```

### prop()  用来设置和读取元素的属性
- 获取：元素集合.prop(属性名, 属性值)
  - 你设置的时候是什么数据类型
  - 你获取到的还是什么数据类型
  ```js
  console.log($('div').prop('id'))
  console.log($('div').prop('abc'))
  ```

- 设置：元素集合.prop(属性名, 属性值)
  - 只有真正的原生属性才会显示在标签上
  - 一些非原生自带的属性, 不会显示在标签上, 但是能用
  ```js
   $('div').prop('id', 'box')
   $('div').prop('abc', 100)
   console.dir($('div'))
  ```

-  removeProp()
  - 删除: 元素集合.removeProp(你要删除的属性名)
  - 只能删除非纯原生属性, 对于 id class src ... 一些属性没有用
  - 你用 attr 设置的非纯原生属性删不掉
  - 能删除的只有 prop() 方法设置的非纯原生属性
  ```js
  $('div').removeProp('abc')
  ```


## jQuery的绑定事件

### on() 用来给元素绑定事件的
- 通过传递参数的不一样，可以绑定不一样的事件形式

1. 传递一个参数：给一个元素绑定多个事件
- 参数一：必须是一个对象数据类型
- 可以写多个事件同时绑定
- 对象中的key就是事件类型
- 对象中的value就是事件处理函数
```js
// 给 div 绑定三个事件
$('div').on({
click: function () { console.log('我是点击事件') },
mouseover () { console.log('我是鼠标移入事件') },
mouseout () { console.log('我是鼠标移出事件') }
})
```

2. 传递两个参数
- 参数一：事件类型
- 参数二：事件处理函数
```js
// 给 div 绑定一个基本点击事件
$('div').on('click', function () {
console.log('我被点击了')
})
```

3. 传递三个参数
- 参数一：事件类型
- 参数二：如果是字符串类型，表示事件委托
- 参数三：事件处理函数
- on("click","li",()=>{})
```js
// 绑定一个事件委托的形式
// 事件是绑定在 ul 身上
// 但是只有点击 ul 里面的 li 才会触发
$('ul').on('click', 'li', () => {
console.log('你点击的是 li')
})
```

4. 传递三个参数
- 参数一: 事件类型
- 参数二: 是一个复杂数据类型, 表示这个是给事件处理函数的参数
- 参数三: 事件处理函数
- on('click', 复杂数据类型, () => {})
- 在事件对象里面, 有一个 data 成员
- 这个 data 成员就是你写的第二个参数
```js
 ul.onclick = function (e) {
  e = e || widnow.event
  let target = e.target || e.srcElement;
  if (target.tagName === 'LI') {
    console.log('你点击的是 li')
  }
  // 给事件处理函数传递参数
  $('div').on('click', { name: 'Jack' }, (e) => {
    console.log('我被点击了')
    console.log(e.data)
  })
}
```

5. 传递四个参数
- 参数一：事件类型
- 参数二：事件委托
- 参数三：给事件处理函数传递的参数
- 参数四：事件处理函数
```js
// 事件绑定在 ul 身上
// 只有点击 ul 里面的 li 才能触发
// { name: 'Rose' }, 每一个事件触发的时候, 给事件处理函数传递的参数
$('ul').on('click', 'li', { name: 'Rose' }, (e) => {
console.log('你点击的是 li')
 console.log(e.data)
})
```

### one() 绑定事件只能执行一次
- 参数传递方式和参数类型和意义
- 都是和 on 方法一模一样
- 区别: 使用 one 方法绑定的事件只能执行一次, 就没有了
```js
$('div').one('click', function () {
    console.log('我被点击了')
  })
```

### off() 解绑事件的
1. 传递一个参数
- 参数：事件类型
- 把这个事件类型的所有事件处理函数全部解绑
-  $('div').off('click')

2. 传递两个参数
- 参数一：事件类型
- 参数二：指定解绑哪一个事件处理函数
- $('div').off('click', handlerA)

### trigger() 用来触发元素的事件的
- 会把元素的这个事件给触发一次
- 以代码的形式来完成一次行为
- $('div').trigger('click')



## jQuery的事件函数
- jQuery把一些常用的事件制作成了单独的函数
- 可以直接使用
- click()  mouseover()....
```js
$('div').click(function () {
console.log('点击事件触发')
})
 ```

- 有一个非常特殊的事件
### hover()事件
- 只有两个参数
- 参数一：鼠标移入的时候触发
- 参数二：鼠标移出的时候触发
- 注意：
- 如果只填写一个参数，就会在移入移出的时候都触发
```js
$('div').hover(
function () { console.log('移入') },
function () { console.log('移出') }
)
```


## 元素操作

### 创建元素
```javascript
var div = $('<div></div>')
```
### 插入元素
- 内部插入
#### append() 向父节点的末尾追加一个子节点
```javascript
// 向 div 元素中插入一个 p 元素，放在最后
$('div').append($('<p></p>'))
```
#### appendTo() 把一个子节点追加到父节点的末尾
```javascript
// 把 p 元素插入到 div 中去，放在最后
$('<p>hello</p>').appendTo($('div'))
```
#### prepend() 向父节点的最前面添加一个子节点
```javascript
// 向 div 元素中插入一个 p 元素，放在最前
$('div').prepend($('<p></p>'))
```
#### prepend() 把一个子节点添加到父节点的最前面
```javascript
// 把 p 元素插入到 div 中去，放在最前
$('<p>hello</p>').prependTo($('div'))
```

- 外部插入
####  after() 在 固定节点 的后面插入一个 要插入的节点
```js
// 在 div 的后面插入一个元素 p
$('div').after($('<p></p>'))
```
####  insertAfter() 把要插入的节点 放在 固定节点 的后面
```js
 // 在 div 的前面插入一个元素 p
$('div').before($('<p></p>'))
```
####  before()  在 固定节点 的前面插入一个 要插入的节点
```js
// 把 p 元素插入到 div 元素的后面
$('div').insertAfter($('<p></p>'))
```
#### insertBefore() 把要插入的节点 放在 固定节点 的前面
```js
// 把 p 元素插入到 div 元素的前面
$('div').insertBefore($('<p></p>'))
```

### 替换元素
#### replaceWith() 把旧节点替换成新节点
-  旧节点.replaceWith(新节点)
```js
$('div').replaceWith($('<p>我是新节点</p>'))
```

#### replaceAll() 用新节点去替换旧节点
- 新节点.replaceAll(旧节点)
```js
$('<p>我是新节点</p>').replaceAll($('div'))
```

### 删除元素
#### remove() 把节点移出页面
- 节点.remove()
```js
$('div').remove()
```
#### empty() 把自己变成一个空标签
- 节点.empty()
```js
$('div').empty()
```

### 克隆元素
#### clone() 克隆
- 接收两个参数
- 参数一：自身的事件要不要复制，默认false不克隆
- 参数二：是否克隆子节点身上的事件，默认是true，默认跟随第一个参数
- 注意：
- 如果第一个参数是false，那么第二个参数没有意义
- 只有第一个参数是true，第二个参数才有意义
```js
// 父节点事件克隆, 子节点事件不克隆
$('div').clone(true, false)
// 父节点事件不克隆, 子节点事件克隆, 没有意义
$('div').clone(false, true)
//我就想要克隆一个 div , 不需要子节点
$('div').clone().empty()
```


### jQuery获取元素尺寸
-  在 jQuery 里面, 获取元素尺寸, 三套方法, 四种使用方式

**width() 和 height()  获取元素内容区域的尺寸**

**innerWidth() 和 innerHeight() 获取元素 内容区域 + padding 的尺寸**

**outerWidth() 和 outerHeight() 获取元素 内容区域 + padding + border 的尺寸**

**outerWidth(true) 和 outerHeight(true)  获取元素 内容区域 + padding + border + margin 的尺寸**


```js
 console.log('width() : ' , $('div').width())
 console.log('innerWidth() : ' , $('div').innerWidth())
 console.log('outerWidth() : ' , $('div').outerWidth())
 console.log('outerWidth() : ' , $('div').outerWidth(true))
```

### 操作元素位置关系
#### offset() 
- 是一个读写的属性
- 获取
- 语法: 元素集合.offset()
- 返回值: 是一个对象, 里面记录了两个信息, 左侧偏移量和上侧偏移量
- 获取的内容: 是一个绝对坐标内容
  - 不管你用什么方法来移动盒子
  - 获取到的都是距离文档流左上角的位置关系
- 设置
- 语法: 元素集合.offset({ left: 偏移量, top: 偏移量 })
-  offset 的设置叫做绝对设置
  - 不管你有没有定位, 不管你是什么样子
  - 我都给你定位到距离文档流左上的的固定尺寸
- 注意:
  - 如果你想给父子元素都通过 offset 方法设置位置关系
  - 那么你必须要考虑先设置谁后设置谁
  - 不同的书写顺序出现不同的位置关系
```js
$('span').offset({ left: 50, top: 50 })
$('p').offset({ left: 40, top: 40 })
```

#### position()
- 只读的方法
- 获取：
- 获取的就是元素的定位关系, 根据定位父级来的位置关系
- 语法: 元素集合.position()
- 返回值: 一个对象, 里面包含两个信息, 一个左边, 一个上边
  - 不管你写的是上下左右, 都回给你计算成上边和左边


## 动画
### 标准动画
#### show() 显示动画
- 语法: 元素集合.show(时间, 运动曲线, 运动结束的回调函数)
```js
 $('div').show(1000, 'linear', () => {
      console.log('显示动画结束')
    })
```
#### hide() 隐藏动画
- 语法: 元素集合.hide(时间, 运动曲线, 运动结束的回调函数)
#### toggle() 切换动画
- 语法: 元素集合.toggle(时间, 运动曲线, 运动结束的回调函数)

### 折叠动画
#### slideDown() 下拉显示
- 语法: 元素集合.slideDown(时间, 运动曲线, 运动结束的回调函数)
### slideUp() 上拉隐藏
- 语法: 元素集合.slideUp(时间, 运动曲线, 运动结束的回调函数)
#### slideToggle() 切换显示和隐藏
- 语法: 元素集合.slideToggle(时间, 运动曲线, 运动结束的回调函数)
- 默认只能从上到下的显示


### 渐隐渐显的动画（透明度）
#### fadeIn() 渐渐地显示
- 语法: 元素集合.fadeIn(时间, 运动曲线, 运动结束的回调函数)
#### fadeOut() 渐渐地消失
- 语法: 元素集合.fadeOut(时间, 运动曲线, 运动结束的回调函数)
#### fadeToggle() 渐渐地切换
- 语法: 元素集合.fadeToggle(时间, 运动曲线, 运动结束的回调函数)
#### fadeTo() 运动到一个指定的透明度
-  语法: 元素集合.fadeTo(时间, 指定透明度, 运动曲线, 运动结束的回调函数)
- 注意：运动到指定透明度以后，就改不回来了
```js
 $('div').fadeTo(1000, 0.5, 'linear', () => console.log('运动到了指定的透明度'))
 // 有一个 style 的设置, style.opacity = 0.5

```

### 综合动画
#### animate() 
- 语法: animate(要运动的属性, 时间, 运动曲线, 运动结束的回调函数)
- 要运动的属性, 是一个对象
- 里面按照 css 书写
- 能做大部分属性的动画
- 注意：
- 颜色运动不了，transform运动不了
- 没有中间值的运动不了
```js
$('div').animate({
      // 要运动的属性
      width: 500,
      height: 500,
      borderRadius: '50%',
      left: 300,
      top: 300,
      backgroundColor: 'pink',
      transform: 'rotate(45deg)'
    }, 1000, 'linear', () => {
      // 这里是让物体，先向左，再向下
      // $('div').animate({ top: 300 }, 1000)
    })
```

### 终止动画
#### stop() 
- 当这个函数触发的时候，不管你运动到了什么地步
- 直接停在当前位置
#### finish()
- 当这个函数触发时，不管你运动到什么地步
- 直接完成当前这个动画，瞬间定位到完成状态


## jQuery的ajax
- 发送ajax是一个语言行为，并不依赖DOM结构来操作
- 语法：$.xxx()
- 代表我使用的是jQuery的方法
- jQuery里面的ajax方法-promise
- 使用的时候，可以写success回调接受结果
- 也可以写then和catch接受结果

### $.ajax()以及参数
- 接受一个参数，是一个对象

| 参数名 | 参数类型 | 描述 |
| ------ | ------- | ------ |
| url | string | 请求的地址, **必填** |
| type / method | string | 请求方式, 默认是get |
| data | string/object | 请求的数据, 默认是空对象 ,可以写成字符串(a=10)|
| async | boolean | 是否异步, 默认true |
| dataType | string | 选填， 默认**string**，表示不解析 <br/>**json**，表示解析json格式字符串<br/>**xml**，表示解析xml格式字符串 |
| cache | string | 选填，表示是否缓存，默认是true, 不缓存：_=时间戳|
| timeout | number | 选填, 表示超时时间 |
| context | object | 选填, 回调函数内部的this指向<br/>你填写的什么, 回调函数里面的this就是什么<br/>不填写: 默认是jQuery封装的ajax对象 |
| success | function | 成功的回调函数 |
| error | function | 失败的回调函数(假设请求成功了, 但是后台返回的不是一个 json 格式的字符串, 你的 datTYpe 写的又是 json，会出现解析失败) |

### $.get()
- 接受四个参数：
- 参数一：**url，必填**
- 参数二：data携带给后端的数据，选填
- 参数三：success成功的回调，选填
- 参数四：dataType是否解析返回值，选填


### $.post()
- 接受四个参数：
- 参数一：**url，必填**
- 参数二：data携带给后端的数据，选填
- 参数三：success成功的回调，选填
- 参数四：dataType是否解析返回值，选填

### promise形式的ajax
```js
$.ajax({
    url: './server/post.php',
    method: 'POST',
    data: { hello: 'world' },
    dataType: 'json'
  }).then(res => {  //成功时，要做的事情
    console.log(res)
  })
```

## jQuery解决跨域
### jsonp
- 必须把dataType="jsonp"
- 就会发送一个jsonp的请求
- jQuery发送jsonp请求默认是不缓存的
- cache默认是false
```js
$.ajax({
url: 'http://127.0.0.1:80/server/jsonp.php',
dataType: 'jsonp',
jsonp: 'cb', // 传递参数的时候, 我的 cb 这一项是表示我的准备好的函数名
jsonpCallback: 'fn'
}).then(res => {
  console.log(res)
})

function fn(res) {
console.log('我被调用了')
console.log(res)
}
```
### cors
- 只要后台开启了跨域资源共享
-我们直接请求
### 代理
- 照常配置代理
- url位置写成代理标识符
```js
// ajax请求
$.ajax({
url: '/gx',
data: { a: 100, b: 200 },
dataType: 'json'
  }).then(res => console.log(res))
// post请求
$.post('/gx', { b: 300, c: 400 }, res => console.log(res), 'json')
```

## 钩子函数
- 是ajax的生命周期函数
- 在一个完整的ajax过程之中，在不同的步骤触发的函数
- 可以定义一个ajax
- 在ajax发送之前触发一个函数
- 在ajax成功以后触发一个函数

### ajaxStart：第一个ajax发送之前触发
- $(window).ajaxStart(function(){})
- 在同一个作用域下，若干个ajax发送的时候
- 第一个ajax发送之前触发
### ajaxSend：每一个请求发送之前触发
- $(window).ajaxSend(function(){})
- 在每一个ajax请求发送之前触发
- 只要有一个ajax要准备发送出去了，就会触发一边这个函数
### ajaxSuccess：有一个请求成功触发
- $(window).ajaxSuccess(function(){})
- 只要有一个ajax请求成功了，就会触发
- 失败的时候不会触发
### ajaxError：有一个失败就会触发
- $(window).ajaxError(function(){})
- 只要有一个失败就会触发
- 成功的时候不会触发
### ajaxComplete：有一个请求完成了触发
- $(window).ajaxComplete(function(){})
- 只要有一个ajax请求完成了就会触发
- 不管成功还是失败，只要完成了就触发
### ajaxStop：最后一个完成以后触发
- $(window).ajaxStop(function(){})
- 当前作用域下，最后一个ajax完成以后触发

|全局函数类型|何时被触发|参数|
|-|-|-|
|ajaxStart|在jQuery AJAX函数或命令发起时，但在XHR实例被创建之前|类型被设置为ajaxStart的全局回调信息对象|
|ajaxSend|在XHR实例被创建之后，但在XHR实例被发送给服务器之前|类型被设置为ajaxSend的全局回调信息对象；XHR实例；$.ajax()函数使用的属性|
|ajaxSuccess|在请求已从服务器返回之后，并且响应包含成功状态码|类型被设置为ajaxSuccess的全局回调信息对象；XHR实例；$.ajax()函数使用的属性|
|ajaxError|在请求已从服务器返回之后，并且响应包含失败状态码|类型被设置为ajaxError的全局回调信息对象；XHR实例；$.ajax()函数使用的属性；被XHR实例返回的异常对象(如果有的话)|
|ajaxComplete|在请求已从服务器返回之后，并且在任何已声名的ajaxSuccess或ajaxError回调函数已被调用之后|类型被设置为ajaxComplete的全局回调信息对象；XHR实例；$.ajax()函数使用的属性|
|ajaxStop|在所有其他AJAX处理完成以及任何其他适用的全局回调函数已被调用之后|类型被设置为ajaxStop的全局回调信息对象|
