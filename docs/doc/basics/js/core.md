# js核心

## 函数
::: tip 意义
- 将组成某个功能的代码块封装起来，可以通过自身或行为执行
- 存储的是功能，代码段
- 函数自身有诸多便利性特点，为了方便使用功能
:::

::: tip 特点
- 忽略细节
- 选择使用
- 重复使用
:::

### 创建函数
- 声明式：`function fn(){}`
	- function 声明关键字
	- fn 函数名
	- () 参数
	- {} 函数体，函数的功能
- 赋值式：`var fn = function(){}`

### 执行函数
- 函数名();     立即执行，自动执行，不会等待
- 配合行为执行（事件触发）
    - 事件源.事件类型 = 函数;
    - 如：`btn.onclick = fn`
    - 如：`btn.onclick = function(){}`
    - 等待行为触发，必然是将来执行，异步

### 函数的分类（写法）
- 有名函数：function fn(){}
	- 正常函数，无特殊情况
- 无名函数：function (){}
	- 不允许直接存在，只能作为值存在
		- 作为赋值式创建函数的**值**
		- 作为匿名函数的函数体
		- 作为事件处理函数
		- 作为参数（回调函数）
		- 作为返回值（闭包）
- 匿名函数：(function(){})()
	- 自动执行
	- 创建作用域
	- 参数在后面的小括号中传递
- <a href="">箭头函数</a>

### 函数的参数
- 概念：函数的入口，负责数据的传递，影响函数内部功能的执行
- 函数定义时，接收参数：`形参`
- 函数执行时，发送参数：`实参`
- 实参和形参的关系：赋值关系
	- 形参类似于变量
	- 实参类似于数据
- 语法上，参数的数量没有限制。使用习惯上，参数最好不要太多
	- 参数之间用逗号隔开
- 实参和形参的对应关系：
    - 数量一致：一一对应
    - 形参多：多出来的形参是undefined
    - 实参多：多出来的实参找arguments
- 实参可以传入任何数据
    - 当传入另一个函数时，作为参数的函数，叫回调函数

### arguments的使用
- **函数内部**特有的对象变量，以数组的形式体现(伪数组)
- 用来保存当前函数执行时传入的所有实参
- 使用
	- 数组：索引+长度
		- 索引：从0开始
		- 长度：arguments.length
		- 中括号语法
```js
for(var i=0;i<arguments.length;i++){
  console.log(arguments[i]);
}
```

::: tip 伪数组
- 可以有索引，可以有长度
- 不能使用数组的方法（push...）
:::


### 函数的返回值
1. 概念：函数的出口
2. 函数内部的关键字：`return`
    - 返回函数内部的数据（将数据通过出口，暴露到函数外面）
    - `return 数据`
3. return的功能
    - 返回值
    - 结束函数
 - 一个函数一次执行只能执行一个return
 - 但是，一个函数中可以写多个return
    - 没有return的函数，的返回值是，undefined
4. 返回值的位置
    - 返回到哪了：函数的执行位置

5. 返回值可以返回所有数据
    - 当一个函数，返回了另一个函数时，在这个函数的嵌套中，就形成了<a href="">闭包</a>

6. 返回值的应用场景
    - 功能函数，没有必要返回值
    - 处理数据的函数，可以有返回值

### 函数的方法
::: tip 
函数的函数，将函数作为对象使用他身上的方法
:::

| 函数的方法 | 功能 | 参数 | 返回值 |
| :--- | :--- | :--- | :--- |
| bind | 改变this指向 | 不限<br/>[要改变的this指向, 传入原函数作为原函数的参数,...] | 修改this或参数后的新函数 |
| call | 改变this指向, 自动执行 | 不限<br/>[要改变的this指向, 传入原函数作为原函数的参数,...] | 原函数的返回值 |
| apply | 改变this指向, 自动执行 | 2个<br/>[要改变的this指向, [数组,会传入原函数覆盖原函数的arguments]] | 原函数的返回值 |


- 函数方法的区别：
	- bind会修改之后的新函数（不会自动执行修改后的新函数），call和apply反之
	- bind和call可以接受多个参数，从第二个开始，都会传入修改之后的新函数作为参数。
	- apply只能接受两个参数，第二个参数是数组，会传入修改之后的新函数，自动解析后，作为arguments的内容



## 作用域
1. 概念：数据作用的区域，数据生效的区域

2. 作用域的分类
    - 全局作用域：没有属于任何一个函数
    - 局部作用域：属于某个函数的区域

3. 作用域的访问规则
    - 子可以拿父
    - 父不能拿子

4. 变量的划分
    - 全局作用域下的变量（函数），叫全局变量（函数）
    - 局部作用域下的变量（函数），叫局部变量（函数）
 - 函数的形参，是当前函数的局部变量

5. 生命周期
    - 全局：跟随程序，一直存在与内存中，随时可以拿到
 - 方便
 - 占内存
    - 局部：跟随当前作用域，作用域开始的位置，被创建，作用域结束，被删除
 - 使用不方便
 - 省空间
    - 折中用法：
 - 利用匿名函数生成独立作用域，在匿名函数中进行功能开发

6. 变量的读写规则（拓展）
    - 写：
 - 先在当前作用域查找，当前作用域有，直接写，如果当前作用域没有，向上级作用域查找，直到全局，找到了，修改全局，没找到，定义成全局，再修改。（非严格模式）
    - 读：
 - 先在当前作用域查找，当前作用域有，直接使用，如果当前作用域没有，向上级作用域查找，直到全局，找到了，使用，没找到，报错。

### js的执行机制
1. js一门**解释型**的脚本语言
    - js会先通读全文，找到特定内容，提前解释（预解析，预编译）
 - 提前解释
     - 变量和函数的声明
    - 再执行解释之后的代码

2. 提前解释（预解析，预编译）
    - 变量(使用var声明的变量)
 - var声明变量的预解析（var的提升）
     - 提前声明：作用域最开始的位置
     - 原位赋值
    - 函数
 - function的整体提升，提前声明，并定义
    - 当var遇到function
 - 赋值式创建函数
     - 提升的是var的声明，function并没有提升
 - 当var的变量和function的函数名重名
     - 都提升
     - var提升的更高
     - 所以function生效
     - 本质：var会提升，在内存中声明了一个区域，function没有提升，直接使用这个区域
- **避免变量名的重复！！！**

## 递归
1. 递归介绍
    - 在函数内部，执行自己
    - 死循环
    - 利用递归的思想，解决问题
    - 但毕竟有隐患，慎用！

2. 递归的过程（原理）
    - 递：向内执行，向内调用
    - 归：向外返回，向外结束
    - 终止条件：结束递，向外归

3. 电影院找座位
    - 递归公式
    - fn(当前的座位) = fn(当前的座位-1) + 1

4. 递归计算`5*4*3*2*1`
```txt
5!
5 * 4!
    4 * 3!
 3 * 2!
     2 * 1!
         1
```
  - 假设，有一个函数fn，专门用来计算阶乘，用来计算n的阶乘
  - fn(n) = n * fn(n-1)
  - fn(1) = 1
      - 递的终点，归的起点
  - 实现fn计算阶乘的功能
```js
function fn(n) {
  if (n === 1) {
      return 1;
  }
  return n * fn(n - 1);
}
```

5. 递归计算数列的第n位是多少：1,1,2,3,5,8,13,21,34,.....
    - 从第三位开始，每一位是前两位的和
    - 假设，有一个函数fn，专门用来计算数列的第n位
    - fn(n) = fn(n-1) + fn(n-2)
    - fn(1) = 1 || fn(2) = 1
    - 递的终点，归的起点
    - 实现fn计算数列的第n位的功能
```js
function fn(n) {
  if (n === 1) {
      return 1;
  }
  if (n === 2) {
      return 1;
  }
  return fn(n - 1) + fn(n - 2);
}
```

## 数组
::: tip 概念
- 数据的组合
- 数据的集合，类似于<a href="#对象">对象</a>，但是没有键，只有索引
- 单需要操作多个数据时，程序只支持一个(数组或对象的应用场景)
:::

### 数组的创建
- 字面量
	- `var arr=[];`
- 构造函数
	- `var arr = new Array();`
- 当只有一个数字类型数据时，字面量就是一个数据，构造函数会解析成长度

### 数组的方法
| 方法 | 说明<div style="width:50px"></div> | 参数 <div style="width:210px"></div>| 返回值 | 是否改变原数据 |
| :--- | :--- | :------ | :--- | :--- |
| push | 向数组末尾添加元素| 可添加多个参数:any | 新数组长度 | 是 |
| unshift | 向数组开头添加元素 | 可添加多个参数:any | 新数组长度 | 是 |
| pop | 删除数组末尾元素 | 无参数 | 最后一次删除的数据 | 是 |
| shift | 删除数组开头元素 | 无参数 | 最后一次删除的数据 | 是 |
| slice | 截取数组 | 参数1:截取的起始位置<br/>参数2: 截取的长度 (包前不包后)<br/>不传参数: 截取所有<br/>一个参数: 从0开始截取n位 | 新数组 | 是 |
| splice | 删除并替换数组 | 参数1:删除的起始位置<br/>参数2:要删除的个数<br/>参数3:替换的数据 | 被删除的数据 | 是 |
| join | 转字符串 | 链接符 | 转换后的字符串 | 是 |
| concat | 合并数组 | 参数:要合并的数组 | 新数组 | 是 |
| reverse | 翻转数组 | 无参数 | 新数组 | 是 |
| sort | 排序 | 返回一个函数a-b从小到大，b-a从大到小 | 新数组 | 是 |
| indexOf | 查询数据所对应的索引 | [要查询的数据, ?开始查询的索引] | 查找到的索引 / -1 | 否 |
| forEach | 遍历数组 | (数据, 索引, 数组自身)=>{} | 无(undefined) | 否 |
| map | 遍历数组 | (数据, 索引, 数组自身)=>{return} <br/>return自己需要的数据 | **新数组** <br/> 回调函数每执行一次就返回一个数据 | 否 |
| filter | 遍历数组 | (数据, 索引, 数组自身)=>{return} <br/>return结果为true的数据 | **新数组**<br/>回调函数每执行一次就返回一个结果为true的数据 | 否 |
| some | 遍历数组, 根据条件查询, 返回布尔值, **一个是true最终结果就是true** | (数据, 索引, 数组自身)=>{return} <br/>return布尔值 | **布尔值**<br/>作为参数的函数的返回值只要有一次是true最终结果就是true | 否 |
| every | 遍历数组, 根据条件查询, 返回布尔值, **所有是true最终结果就是true** | (数据, 索引, 数组自身)=>{return} <br/>return布尔值 | **布尔值**<br/>作为参数的函数的返回值全部是true最终结果才是true | 否 |

::: tip 快速求和
- reduce
  - 功能：1，遍历函数（同forEach）2，并归
  - 参数：两个
    - 一，函数，函数有4个参数，
      - 1，执行第一遍时：reduce的第二个函数，或数组的第一个数据
 第二遍以后：之前执行时的返回值
      - 2，数组的数据
      - 3，索引
      - 4，数组自身
    - 二，任意数据（可省略）
  - 返回值：回调函数最后一次执行法官的返回值
  - 是否改变原数据：否
- reduceRight
  - 与reduce相同，从右开始
:::

### 数组的分类
- 数组中可以放任何数据，甚至可以放简单表达式
    - 当一个数组中的数据，全是字符时，叫字符数组
    - 当一个数组中的数据，全是数值时，叫数值数组
    - 当一个数组中的数据，全是数组时，叫数组数组（二维数组，**多维数组**）
 - 访问方式
     - 逐层解析数组
    - 当一个数组中的数据，全是对象时，叫对象数组（**json数组**）
 - 访问方式
     - 逐层解析数组和对象

     
## 字符串
::: tip 万物皆对象
- 对象才是构成js世界的本质
- 字符串也可以作为对象使用
:::

### 创建字符
- 字面量
	- `var str = "";`
- 构造函数
	- `var str = new String();`
	- 只要是构建函数方式创造的，其结果必然是对象
	- `new String()`得到字符的对象
		- 长得先对象，但是可以作为正常字符使用

### 字符串的方法
**字符串的方法都不改变原数据**

| 字符串方法 | 功能 | 参数 | 返回值 |
| :--------: | :--: | :-- | :----: |
| charAt | 根据索引查询数据 | 索引 | 该索引对应的值，索引超出返回空字符串 |
| slice | 截取指定的区域的字符 | 开始索引，截至索引 (包前不包后)<br/>参数1为负数时表示长度减去参数1，参数2比这个值大就行 | 返回截取的字符 |
| substr | 截取指定区域的字符 | 开始索引，要截取的长度<br/>当一个参数为负数时，只有一个参数，表示倒着截取参数的长度 | 返回截取的字符 |
| substring | 截取指定区域的数据 | 开始索引，结束索引(包前不包后) <br/> 参数大的是结束位置| 返回截取的字符 |
| replace | 替换 | 想要替换的字符，替换的字符 | 返回替换之后的字符串 |
| split | 分割（转数组） | 以哪个字符作为分割点，并删除该字符<br/>(当1参数在字符串中存在多个，2参数决定要显示几个) | 返回分割后的数组 |
| indexOf | 根据数据查询索引 | 数据 | 返回查找到的索引 |
| includes | 根据数据查询是否包含 | 数据 | 返回布尔值 |

### 字符串的拼接
- 引号要配对，单双引号的嵌套要交替
- 被单双引号包裹的字符不允许换行

### 字符编码
- `Unicode`:万国码，所有字符都可以转成万国码
  - `Unicode` 时以四位十六进制的形式表示的（前缀\u）
	- 必须用`\u`作为前缀，此十六进制才是`Unicode`编码
- `Unicode`和字符的转换
	- 字符转成十进制，此十进制时由`Unicode`的十六进制转换得来的
		- `String.fromCharCode(十进制或十六进制)`
			- 参数可以是十进制
			- 参数可以是十六进制（"0x"开头）
			- 转换结果时字符
		- `str.charCodeAt(索引)`
			- 转换结果是十进制，这个十进制转成十六进制后，加上\u就是Unicode编码 

### 进制的转换
- 十进制转其他-（数值转字符）
	- `num.toString(2||8||16)`
	- 要转成几进制就写几
- 其他转十进制-（字符转数值）
	- `parseInt(num,2||8||16)`
	- num是几进制就写几
- 其他转其他
	- 二进制转八进制
	- 先转十进制，再转其他



## JSON
::: tip JSON
- JSON，类似与文本文件的数据，前后端通用的数据文件（.json）
	- xml是以前的通用数据
- JSON并不属于任何一个语言，自身是一种独立的通用数据，只是在创建之初，参考了js的对象的格式
- JSON的语法
	- 必须符合js中的对象的基本要求
	- json的key必须加双引号
	- json不允许出现没有意义的逗号
	- json中不允许出现 函数、undefined、NaN
	- json在任何编程语言中都是以字符型数据体现，json文件中可以直接存在
- js中的json
	- 对象转json：要转换的数据必须符合对象要求
		- `JSON.stringify(obj)`
		- NaN转null
		- 不识别`undefined`, `function(){}`
	- json转对象：要转换的数据必须符合json的要求
		- `JSON.parse(str)`
:::

### <a href="#值传递和引用">基本数据和复杂数据</a>
- 基本数据: string、number、boolean、undefined、null
	- `值传递`的数据
- 复杂数据: object、function
	- `引用传递`的数据

### 内存中的空间划分 栈堆
- 内存中的内存颗粒可分为
	- 栈：基本数据，复杂数据的地址
		- 变量名，空间小，稳定，不可修改
		- 先进后出
	- 堆：复杂的数据结构
		- 数据，空间大，可被修改
		- 先进先出
	- 关系
		- 一栈对一堆
		- 一栈对多堆
		- 不能多对一


### 值传递和引用
- 传递：复制
- 值传递：复制的就是值（基本数据）
- 引用传递：引用就是地址，复制的是地址，不是值（复杂数据）

1. 浅拷贝：只复制复杂数据的地址，不是值，修改新数据，影响老数据
```js
  var obj = {name:"admin"};
  var obj2 = obj;
  // 将obj复制给了obj2，其实只是将obj的引用(地址)复制给了obj2，obj和obj2中保存的是同一份地址，指向的是同一个值，修改其中一个，影响另外一个
  obj2.name="张三";
  console.log(obj);
  console.log(obj2);
```

2. 深拷贝：复制值，修改新数据，不会影响老数据
	- 先解析，在拷贝<br/>

**对象的解析拷贝（深拷贝）**
```js
var obj = {a:10;b:20;c:30};
var obj2 = {};
//for-in 解析
for(var i in obj){
  obj2[i] = obj[i];
}
obj2.a = "666";
console.log(obj);
console.log(obj2);
  ```
 
**数组的解析拷贝（深拷贝）**
```js
  var arr = [3,4,5];
  var arr2 = [];
  // 循环解析
  for(var i=0;i<arr.length;i++){
    arr2[i] = arr[i];
  }
  arr2[1] = "hello";
  console.log(arr)
  console.log(arr2)
```

## 对象
::: tip Object
- 是复杂数据类型的一种，是一种数据集合
- 单个对象中只存放某类，有某种关系的数据
- 对象在显示生活中，一般用来描述事物
:::

::: tip 语法
- 属性名：属性值
- 键值对（key：value）
- 对象的标志是花括号{}
:::

### 对象的创建
- 字面量
	- `var obj = {name: "anmin"}`
- 构造函数：批量
	- `var obj = new Object();`

### 对象的使用
- 点语法
```js
  var obj = {};
  obj.name = "admin";
  console.log(obj.name);
```
- 中括号语法
```js
  var obj = {name:"0"};
  obj["name"]="admin";
  var str = "name";
  console,log(obj[str]);
```

::: tip
- 组成：键值对
- 意义：存储数据编程
- 关系
  - 任何两个对象都不相等
  - 如果相等了，就是一个对象 
:::

### 对象的分类
- 本地对象（构造函数）
	- 创建字符的对象: `String`
	- 创建数值的对象: `Number`
	- 创建日期的对象: <a href="#data">`Data`</a>
	- 创建正则的对象: `RegExp`
::: tip 
- 被new 执行之后，才能得到对应的对象
- 内置构造函数
:::

- 内置对象
	- 可以直接被使用的对象，不需要创建和操作
	- 数学对象: <a href="#math">Math</a>

- 宿主对象
	- 没有明确隶属对象的数据（变量，函数），就属于window 
	- window是客户端js中的顶层对象，客户端中最大的boss
	- 一般情况下，window可以被省略
		- 特殊情况：
			- 严格模式
			- 在局部声明全局（window.a = 10;）

### 对象的操作
- 删除对象的属性
	- 关键字：`delete` 对象.属性名
	- 最好清空 对象.属性名 = null


### Math
**Math 是数学对象，提供了数学操作**

| 方法 | 描述 |
| --- | --- |
| Math.round(number) | 四舍五入 |
| Math.random() | 随机数 |
| Math.abs(number) | 绝对值 |
| Math.ceil(number) | 向上取整（取大的） |
| Math.floor(number) | 线下取整（取小的） |
| Math.min(number, ...) | 最小值（不能放数组NaN） |
| Math.max(number, ...) | 最大值（不能放数组NaN） |
| Math.sqrt(number) | 根号下 |
| Math.pow(number, 几次方) | 几次幂 |

::: tip Math属性
- Math.PI				                 圆周率
:::

### Data
**Date（需要new之后才能使用）**
- 创建日期对象
	- `new Date()`

  - `new Date(year, month, day, hour, minute, second, millisecond)`
    - 参数：
      - year：年份
      - month：月份
      - day：日期
      - hour：小时
      - minute：分钟
      - second：秒
      - millisecond：毫秒

#### 日期的操作

| 方法 | 描述 |
| --- | --- |
| date.getFullYear() | 获取年份（4位） |
| date.getMonth() | 获取月份（0~11） |
| date.getDate() | 获取日期（1~31） |
| date.getDay() | 获取星期几（0~6） |
| date.getHours() | 获取小时（0~23） |
| date.getMinutes() | 获取分钟（0~59） |
| date.getSeconds() | 获取秒（0~59） |
| date.getMilliseconds() | 获取毫秒（0~999） |
| date.getTime() | 获取时间戳（1970年1月1日0：0：0到此时的毫秒） |
| date.setFullYear(year) | 设置年份（4位） |
| date.setMonth(month) | 设置月份（0~11） |
| date.setDate(date) | 设置日期（1~31） |
| date.setDay(day) | 设置星期几（0~6） |
| date.setHours(hours) | 设置小时（0~23） |
| date.setMinutes(minutes) | 设置分钟（0~59） |
| date.setSeconds(seconds) | 设置秒（0~59） |
| date.setMilliseconds(milliseconds) | 设置毫秒（0~999） |
| date.setTime(time) | 设置时间戳（1970年1月1日0：0：0到此时的毫秒） |

##### 获取指定日期
- 给构造函数传参
  - 一个参数（字符）
    - 没设置的部分：清0；超出的日期：Invalid Data；月份从1开始
  - 多个参数（数值）
    - 没设置的部分：清0；超出的日期：向前进1；月份从0开始
- 创建函数后，修改日期
  - 逐部分修改
    - 没设置的部分：以当前日期为准；超出的日期：向前进1；月份从0开始
    - set系列方法
  - 设置时间戳
    - 设置从1970年1月1日0：0：0过去了的毫秒数
    - 日期对象.setTime(毫秒数)
- 计算两个日期的时间差
  - 设置两个指定的日期
  - 将日期对象相减，得到毫秒数（兼容问题）
  - 先获取日期对象的时间戳，在相减，得到毫秒数，转换（没有兼容问题）





## this
- 关键字，类似于变量，但并不是变量，是一个指向（指针），它的支持按必然是一个对象烈性的数据（不是对象强转对象）
- 一般存在于函数中
	- 不在任何函数中的this，指向window
- this在函数中默认是没有指向的。只有在函数执行的一瞬间，才有指向
- this指向当前所在函数的**执行对象**（函数被哪个对象执行，就指向哪个对象）
	- 默认执行
		- 函数名()
		- this指向window
	- 对象执行（事件）
		- 对象.函数()
		- this指向对象
	- 作为回调函数使用
		- 参数()
		- this指向window
	- new 执行
		- new 函数()
		- this指向new出来的对象
- this的绑定方法
	- 默认绑定
		- window，没有明确隶属对象的执行执行（非严格模式）
	- 隐式绑定
		- 通过某个对象执行函数，this就是这个对象
		- 存在隐式丢失
			- 作为回调函数传入另一个函数中执行，this指向window
	- 强制绑定
		- 通过bind，call，apply绑定this指向，this指向设置值
	- new绑定
		- 通过new执行函数，this指向new出来的函数
- 改变this的指向 - 锦上添花
	- 任何情况下多可以不该变，改变之后能更方便
	- 案例：事件委托的封装

::: danger 误区
- 误解1：this是当前函数，×				   函数的指向
- 误解2：this在哪被定义，就是谁，×			被谁执行接指向谁
- 误解3：this是变量，×						关键字
:::


## BOM
::: tip BOM
- 浏览器的对象模型：window
- 提供了窗口与窗口之间的通信
- 用户与浏览器的交互
- 浏览器自身的信息
:::

### BOM - window
::: tip window
- window是js的顶层对象，涵盖了介绍所有的信息
- window有自己的方法（内置的全局函数）
- window有自己的事件
- window有自己的子对象（内置的全局对象）
- window有自己的属性（内置的全局变量）
:::

### window的方法

| 名称 | 描述 |
| :--- | :--- |
| parseInt() | 将字符串转换为整数 |
| isNaN() | 判断是否为数字 |
| open(url) | 打开新窗口 |
| close | 关闭当前窗口 |
| alert |	弹出信息框；无返回值 |
| prompt | 弹出输入框；返回输入的值，没有输入返回空字符 |
| confirm |	弹出选择框；点击确定返回true，取消返回false |
| setInterval |  (计时器) <br/> 参数1: 函数,参数2: 毫秒数 <br/> 返回: 计时器的唯一标志<br/> |
| clearInterval | 参数: 要清除计时器的唯一标志（返回值变量）|
| setTimeout |  (延时器) <br/> 参数1: 函数,参数2: 毫秒数 <br/> 返回: 计时器的唯一标志<br/> |
| clearTimeout | 参数: 要清除延时器的唯一标志（返回值变量）|
| ... | ... |


### window的事件

| 名称 | 描述 | 扩展 |
| :--- | :--- | :--- |
| load | 网页**结构**和**资源**都加载结束 | - |
| resize | 窗口尺寸变化 | 可视区域的宽度: `document.documentElement.clientWidth` <br/>可视区域的高度: `document.documentElement.clientHight` |
| scroll | 滚动条滚动 | 滚动条距离右边的距离: `document.documentElement.scrollTop` <br/>滚动条距离左边的距离: `document.documentElement.scrollTop` |


### window的子对象
<table>
  <tr>
    <th>名称</th>
    <th>属性值/方法</th>
    <th>描述</th>
  </tr>

  <tbody>
    <tr>
      <th rowspan="5">location <br/>浏览器地址</th>
      <td>href</td>
      <td>浏览器的完整地址 <br/> 可获取，可设置。设置后页面会跳转</td>
    </tr>
    <tr>
      <td>search</td>
      <td>地址栏?后的部分，表示数据查询（要向后台发送的数据）<br/> 可获取，可设置。设置后页面会跳转</td>
    </tr>
    <tr>
      <td>hash</td>
      <td>地址蓝#后的部分，表示锚点链接（哈希值）<br/> 可获取，可设置。设置后页面会跳转</td>
    </tr>
    <tr>
      <td>reload()</td>
      <td>重新加载，刷新当前页面</td>
    </tr>
    <tr>
      <td>assign(url)</td>
      <td>跳转到指定地址，url为字符类型数据，空字符，刷新</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="4">history <br/> 历史记录</th>
      <td>length</td>
      <td>历史记录的个数</td>
    </tr>
    <tr>
      <td>forward()</td>
      <td>向前一个历史记录</td>
    </tr>
    <tr>
      <td>back()</td>
      <td>向后一个历史记录</td>
    </tr>
    <tr>
      <td>go(n)</td>
      <td>正：向前走；负：先后退；0：刷新</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th>navigator <br/> 浏览器信息</th>
      <td>userAgent</td>
      <td>浏览器信息（名，内核，版本，运行系统）</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th>screen</th>
      <td></td>
      <td>视口，屏幕尺寸</td>
    </tr>
    <tr>
      <th>frames</th>
      <td></td>
      <td>框架，对应iframes的标签操作</td>
    </tr>
    <tr>
      <th>document</th>
      <td></td>
      <td>文档对象，网页</td>
    </tr>
  </tbody>
</table>

::: tip 页面刷新的方法
- location.reload()
- location.assign("")
- history.go(0)
- location.href = lication.href
- location.search = location.search
- location.hash = location.hash
:::

## DOM
::: tip 介绍
- DOM：文档对象模型：document
- document，网页，document其实就是网页的抽象
- 提供了所有网页的操作
- DOM结构，参照html结构
	- 倒树形结构，家族结构
- DOM的所有组成成分都叫节点，所有的节点都是对象类型
	- 元素节点（标签）
	- 文本节点（标签内的文字）
	- 注释节点（注释）
	- 属性节点（属性）
	- 根节点（根元素）
- js做行为，先选中要控制的元素（选择器），交互（样式，属性，元素，内容）
:::

### 选择器
- 元素节点选择器
	- 直接选择
		- id（id名）
			- `document.getElementById("id名");`
			- 单个对象，失明特性（多个id只选择第一个）
		- class（class名）
			- `document.getElementsByClassName("class名");`
			- 多个对象，返回数组，一个元素返回也是数组
		- tagName（标签名）
			- `document.getElementsByTagName("标签名");`
			- 多个对象，返回数组，
		- name（name属性，表单类）
			- `document.getElementsByName("name属性值")；`
			- 多个对象，返回数组
		- query（css写法）单个
			- `document.querySelector("css选择器");`
			- 单个对象，支持css的所有写法，返回对象
		- queryAll（css写法）多个
			- `document.querySelectorAll("css选择器");`
			- 多个对象，支持css所有写法，返回数组
	- 关系选择
		- 父选子元素
			- 父选子元素节点 		`ele.children`
			- 子选父元素节点 		`ele.parentNode`
			- 兄元素节点			 `ele.previousElementSibling`
			- 弟元素节点			` ele.nextElementSibling`
			- 第一个子元素节点	    `ele.firstElementChild`
			- 最后一个子元素节点	   `ele.lastElementChild`
- 其他节点选择器
	- 关系选择（没有子选父）
		- 父选子节点			`ele.childNodes`
		- 兄节点			 `ele.previousSibling`
		- 弟节点			 `ele.nextSibling`
		- 第一个子节点	   `ele.firstChild`
		- 最后一个子节点	  `ele.lastChild`
	- 属性选择
		- `ele.attributes（数组）`
	  - 伪数组
		

- 选中之后的内容
	- 单个对象：可以直接使用
		- id（id名）
		- query（css写法）
		- parentElementNode（子选父元素节点）
		- previousElementSibling（兄元素节点）
		- nextElementSibling（弟元素节点）
		- firstElementChild（第一个子元素节点）
		- lastElementChild（最后一个子元素节点）
		- previousSibling（兄元素节点）
		- nextSibling（弟元素节点）
		- firstChild（第一个子节点）
		- lastChild（最后一个子节点）
	- 数组：解析数据后才可以使用
		- className（class名）
		- tagName（标签名）
		- name（name属性，表单类）
		- queryALL（css写法）
		- childred（父选子元素节点）
		- childNodes（父选子节点）
		- attributes（属性节点）


### 节点的过滤
::: tip 节点的信息属性
- 节点.nodeType		类型
- 节点.nodeName		名字
- 节点.nodeValue		内容
:::

|节点|类型nodeType|名字nodeName|内容nodeValue|
|---|---|---|---|
|元素|1|标签名（大写）|null|
|文本|3|#text|文本内容|
|注释|8|#commen|注释内容|
|属性|2|属性名|属性值|
|跟|9|#document|null|

### 样式
- 行内样式**用来设置**
	- 获取：`元素.style.css属性`
		- 只可以获取行内，鲁能获取非行内
	- 设置：`元素.style.css属性 = "值"`
		- `元素.style.cssText` 可以重新设置所有样式
	- 没有兼容，所有浏览器都支持
	- 计算设置样式，必须找行内操作

- 非行内样式**用来获取**
	- 不可以设置
	- 获取：`getComputedStyle(元素，null).css属性名`
		- 既可以获取非行内样式，也可以获取行内样式
		- 有兼容性（IE8几以下）
			
			- IE专属属性：`元素.currentStyle.css属性名`
		- 最终兼容处理
```js
  function getStyle(ele,attr){
    if(ele.currentStyle){
      return ele.currentStyle[attr];
    }else{
      return ele.getComputedStyle(ele,null)[attr];
    }
  }
```

### DOM元素属性
- html属性：可以写在html标签内的属性
	- 内置
		- class(className),id,title,alt...
		- 操作：
			1. 对象的操作方式(点语法、中括号语法)
			2. 系列方法
				- 查
				- `getAttribute()`		一个参数，要获取的属性名
				- 增、改
				- `setAttribute()`		两个参数，要设置的属性名和属性值
				- 删
				- `removeAttribute()`		一个参数，要删除的属性
	- 自定义
		- 只要官方没有提供，强行写在html标签内的，都是自定义
		- 操作
		- 系列方法
			- 查（返回查询的数据）
			  - `getAttribute()`		一个参数，要获取的属性名
			- 增、改（返回undefined）
			  - `setAttribute()`		两个参数，要设置的属性名和属性值
			- 删（返回undefined）
			  - `removeAttribute()`		一个参数，要删除的属性

- js属性：没有写在HTML的标签内
	- 内置
		- `innerHTML`(获取标签的内容，包括子元素，字符)
		- `innerText`(只获取文本内容，字符)
		- `outerHTML`(获取包括自己的标签内容，包括自己，子元素，字符)
		- tagName...
		- 操作
			- 对象的操作方式(点语法、中括号语法)
	- 自定义
		- 只要官方没提供，强行写，都是自定义
		- 操作：
			- 对象的操作方式(点语法、中括号语法)
      
**本质上就是将元素作为对象使用**

  
### 元素的尺寸类属性

| 属性名 | 说明 |
| :--- | :--- |
| offsetWidth | 元素的宽度（内容+内边距+边框） |
| offsetHeight | 元素的高度（内容+内边距+边框） |
| clientWidth | 元素的宽度（内容+内边距） |
| clientHeight | 元素的高度（内容+内边距） |
| scrollWidth | 元素的宽度（内容+内边距+溢出内容） |
| scrollHeight | 元素的高度（内容+内边距+溢出内容） |
| offsetLeft | 元素相对于包含快的位置 |
| offsetTop | 元素相对于包含快的位置 |
| scrollLeft/scrollTop | 滚走的距离(可以设置) |

::: tip 包含块
- 距离当前元素最近的拥有定位的父元素，如果没有，就是根元素
- 获取某个元素的根元素：`元素.offsetParent`
:::

### 元素（标签）的操作
- 增：
	- 创建标签
		- `createElement("标签名")`
	- 插入标签
		- `appendChild(创建的标签)`
**每创建一个元素只可以插入一次**

- 删：
	- `元素名.remove()`
	- `父元素.removeChild(子元素)`

- 改：
	- 先使用innerHTML获取到不包括自己的内部所有内容
	- 替换包裹的标签后放入变量中
	- 使用outerHTML把原来的所有内容替换成新内容
```js
  var onav = document.querySelector("nav");
  var str = "<span>"+ onav.innerHTML +"</span>";
  onav.outerHTML = str;
```
- 查：<a href="#选择器">选择器</a>









## 事件
::: tip 概念
- 事件，行为，用户和浏览器或页面交互的过程中发生的行为
- 根据用户的不同行为，执行不同的程序，响应事件
:::

::: tip 组成
- 元素.on事件类型 = 函数
	- 元素：绑定事件的元素，事件源
	- on：绑定事件的方式
	- 时间类型：行为类型
	- =：赋值，on绑定事件的方式所特有的部分
	- 函数：事件处理函数

**on是一种绑定事件的方式，并不属于事件分类的名字**
:::

### 事件类型的分类
### 1. 鼠标类
- 左键单击：click
- 左键双击：dblclick
- 右键单击：contextmenu
- 进入：mouseover（有冒泡） / mouseenter（无冒泡）
- 离开：mouseout （有冒泡）/ mouseleave（无冒泡）
- 移动：mousemove
- 按下：mousedown
- 抬起：mouseup

### 2. 键盘类
- 按下：keydown
- 抬起：keyup
- 按下并抬起：keypress

### 3. 表单类
- 失去焦点：blur
- 获取焦点：focus
- 输入：input
- 内容改变：change
- 提交：submit
- 重置：reset

### 4. 浏览器类
- 加载：load
- 改变大小：resize
- 滚动：scroll

### 事件的绑定语法
- `事件源.on事件名 = 函数`
```js
btn.onclick = function(){}
```
::: tip 注意
1. 注意当前行为
2. 注意事件源
3. 注意当前事件源，会不会触发当前行为
4. 键盘事件不能加给不能被选中的元素
    - 表单控件
    - document
:::

## 事件对象
- 自身是一个对象类型，事件按对象内，保存了当前这次事件发生过程中的相关信息
- 事件（上级安排任务，刺探敌情）
- 上级：计算机（浏览器）
- 如何完成任务：事件类型
- 任务是什么：事件处理函数
- 秘书：帮助，记录信息，事件对象

### 事件对象的特点
- 每次事件都有不同的秘书（事件对象跟随事件变化）
- 只有事件对象发生时，才有秘书，没有事件，没有秘书（事件对象，依赖事件）
- 任务结束后，秘书会被回收（事件对象在事件结束后，被浏览器回收）
- 防止暴露信息，秘书日常隐藏，需要时主动召唤，才能使用（事件对象默认隐藏，需要主动使用）

### 如何获取事件对象
- 必须要有事件
- 只能在事件处理函数中才能获取到事件对象
	- 事件处理函数的第一个参数：正常浏览器
	- 找window对象身上的event：IE
	- 兼容写法
```js
  ele.onclick = function(eve){
    var e = eve || window.event;
  }
```

### 事件对象的属性
#### 鼠标事件的事件对象
- 当前鼠标触发事件时，在元素身上的坐标
	- 事件对象.属性
		- offsetX/Y
			- 鼠标相对于**事件目标**的坐标
		- clientX/Y
			- 鼠标相对于**可视区域**的坐标
		- pageX/Y
			- 鼠标相对于**页面**的坐标
		- screenX/Y
			- 鼠标相对与**显示器**的坐标
		- button
			- 左键：0；中键：1；右键：2；
		- buttons
			- 左键：1；中键：4；右键：2；
		- type
			- 事件类型
#### 键盘事件的对象
- 事件对象.属性
	- keyCode
		- 对应的按键
		- 有兼容
			- keyCode（IE）
			- which（其他）
  ```js
    var k = e.keyCode || e.which
  ```
	- ctrlKey
		- ctrl键

	- shiftKey
		- shift键

	- altKey
		- alt键（执行一次后焦点消失）

	- metaKey
		- win键

## 默认事件
- 概念
	- 浏览器自带的功能，文字的选中，右键菜单，tab的切换焦点，表单的提交跳转，a的提交跳转...
	- 阻止默认事件
		- 找到事件
		- 拿到事件对象
		- 阻止方法
```js
  function stopDefault(e){
    if(e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue = false;
    }
  }
```

- 阻止右键菜单
	- 找到事件源(document)右键事件
	- 拿到事件对象
	- 阻止


## 事件流
### 事件捕获
- 从外向内
- 如果需要事件捕获，需要配合专用语句实现
	- 监听式绑定事件

### 事件目标
- 事件源
	- 绑定事件的元素，可以通过this获取

- 事件目标
	- 触发事件的元素，通过事件对象身上的属性：`e.target` / `e.srcElement`获取

- 事件源和事件目标的区分
	- 一般情况下，事件源就是事件目标
	- 当发生事件冒泡时，事件源与时间目标就不是同一个元素

```html
<body>
  <div class="box">
    <input type="button" value="我没有事件，但是可以点">
  </div>
  <script>
    var obox = document.querySelector(".box")
    obox.onclick = function(eve){
        var e = eve || window.event;
        var tar = e.target || e.srcElement;
        console.log("事件源是：", this);
        console.log("事件目标是：", tar);
    }
  </script>
</body>
```

### 事件冒泡
- 从里向外
- 事件的执行循序
- 浏览器默认情况下会使用事件冒泡的事件流
- **如不需要冒泡，阻止冒泡，不要设置成捕获**
	
	- 事件冒泡：当触发某个元素的某个事件时，该事件执行后，会**依次向上**触发**所有父元素**的**相同**事件
	- 按需阻止
		- 阻止方式
			- `eve.stopPropagation();`其他浏览器
			- `eve.cancelBubble = true;`IE浏览器
			- 兼容写法
```js
  function stopBubble(e){
    if(e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
  }
```
```js
  e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
```

### 事件委托
- 概念
	- 利用**事件冒泡原理**，将绑定在**多个子元素**身上的**相同事件**绑定在页面上现存的**父元素**身上
- 特点
	- 节省性能
	- 可以给页面上暂时不存在的元素绑定事件

## 监听式绑定事件
### 赋值式绑定
- DOM0级事件绑定（on绑定）
- 元素.on元素类型 = 元素处理函数
	- `btn.onclick = function(){}`
- 没有兼容
- 无法重复绑定
	- 本质是赋值
	- 重复赋值会覆盖

### 监听式绑定事件
- DOM2级事件绑定
- 可以添加多个监听事件
- 有兼容
- 正常浏览器
	- 绑定事件监听
		- 元素.addEventListener("事件类型"，事件处理函数，布尔值)
		- `btn.addEventListener("click",function(){},false)`
      - false: 事件冒泡，默认值
      - true: 事件捕获
	- 解绑事件监听
		- 元素.removeEventListener("使劲按类型"，使劲按处理函数，布尔值)
		- `btn.removerEventListener("click",function(){},false)`
		- **清除监听是采用给函数命名的方式创建函数**
- IE浏览器
	- IE浏览器只有冒泡，没有捕获
	- 当一个元素绑定多个相同事件后，先执行后绑定的
  - 绑定监听事件
    - 元素.attachEvent("on" + 事件类型，事件处理函数)
    - `btn.attachEvent("onclick",function(){})`
	- 解绑监听事件
		- 元素.detachEvent("on" + 事件类型，事件处理函数)
		- `btn.detachEvent("onclick",function)`

**监听式绑定事件的封装**
```js
  function addEvent(ele,type,fun){
      if(ele.addEventListener){
          ele.addEventListener(type,fun,false);
      }else{
          ele.attachEvent("on"+type,fun)
      }
  }
```
**监听式解绑事件的封装**
```js
  function removerEvent(ele,type,fun){
    if(ele.removeEventListener){
      ele.removeEventListener(type,fun,false);
    }else{
      ele.detachEvent("on" + type,fun)
    }
  }
```

::: tip 
**删除的事件处理函数，必须和绑定的事件处理函数是同一个**
  - 为了保证绑定和删除的时候是同一个函数，最好提前给这个函数起名
  - 通过函数名，找到该函数
:::

## 关系
::: tip  BOM和DOM和ECMAScript的关系
- BOM：提供运行平台
- DOM：书觉得体现，传达各种视觉信息
- ECMAScript：规定了如何在BOM中操作DOM，操作DOM在BOM中显示除什么样的效果
- （ECMAScript规定了，准备让DOM以什么样的形式，在BOM中显示）
- ECMAScript和DOM都时运行在浏览器中，所以，除了需要遵守自己的规定以外，还要遵守浏览器（BOM）的规定
- DOM的对象document，也属于window
:::
