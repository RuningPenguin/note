# js进阶

## ES5
::: tip 
ECMAScript 5
:::

### 严格模式
- 在ES5中，新增了一种编写代码的模式：严格模式
- 为了消除代码中的不合理，不严谨和隐患之处
- 体现了更好的发展方向
- 提升了代码的执行率
::: tip 如何开启
- 在作用域的第一行放置一行字符串："use strict"
- 配合匿名函数，开启**伪全局**严格模式
:::

::: tip 开启严格模式的变更
- 变量必须先声明后使用
- 函数的形参不允许重复
- 函数的arguments保存实参，不会受到形参的改变而影响
- 函数的arguments不允许使用callee（会严格模式下arguments.callee是函数自身）
- 没有明确隶属对的函数的this，不指向window，指向undefined
- 0开头的8进制被禁止了
- with语句被禁止使用
:::


### 数组的排序
- sort: 简单排序（数值，字符，不能排对象）

- 排序算法
	- 比较规则: 比较大小
	- 提升程序的执行性能, 让程序更稳定
- **冒泡排序**
	- 原理：拿到数组的内一个数据，两两比较，大的放前面（后面）
```js
var arr = [5,4,3,2,1];
console.log(arr);       // 排序之前
// 比较次数的结构：多行多列
// 0-1,1-2,2-3,3-4      length-1 - 0行 次
// 0-1,1-2,2-3          length-1 - 1行 次
// 0-1,1-2              length-1 - 2行 次
// 0-1                  length-1 - 3行 次
// 行：arr.length-1 次

// 控制一共经过几轮比较，每轮比较，会得到一个最大值，放在了最后
for(var i=0;i<arr.length-1;i++){
		// 确定每轮比较时，要比较哪些数据，因为上一轮会确定一个最大值，放在了最后，所以，每新的一轮比较，都可以比上一轮少比一次
		for(var j=0;j<arr.length-1-i;j++){
				// 比较
				if(arr[j] > arr[j+1]){
						// 交换
						var ls = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = ls;
				}
		}
}
console.log(arr);       // 排序之后
```

- **选择排序**
	- 原理：拿到数组的每一个数，从左向右依次使用每一个数据，和前面所有的数据比较得到最小的，交换
```js
var arr = [1,3,5,4,2];
// 冒泡，每次比较都有可能交换一次，交互意味着在操作数组
// 0-1,1-2,2-3,3-4
		
// 选择，每次比较，绝对不交换，只是在记录最小值，一轮结束后，再做交换，将最小值和第一位交换

		// 比较次数的结构：多行多列
		// 0-1,0-2,0-3,0-4      0行~length-1
		// 1-2,1-3,1-4          1行~length-1
		// 2-3,2-4              2行~length-1
		// 3-4                  3行~length-1
// 行：length-1   4 次

for(var i=0;i<arr.length-1;i++){
		// 每轮开始之前，将当前位数据保存到临时变量，同时存储索引
		// 假设这个临时变量中保存的是最小值
		var min = arr[i];
		var minIndex = i;
		for(var j=i+1;j<arr.length;j++){
				// 验证,临时变量中保存的是否是最小值
				if(min > arr[j]){
						// 修改临时变量,让他保存真正的最小值
						min = arr[j];
						// 同时记录最小值的索引
						minIndex = j;
				}
		}
		// 一轮结束后,交换数组中的数据
		// 一定要先将当前位数据,放在最小值的位置
		arr[minIndex] = arr[i];
		// 再将最小值,放在当前位
		arr[i] = min;
}
console.log(arr);
```

### 函数的封装思想
::: tip
- 入口处理
	- 参数的处理
		- 默认参数的处理（考虑用户可能用到的情况）
- 出口的处理
	- 在数据处理完后，不要帮用户做更多的决定
	- 将处理好的数据，打包成通用数据，返回（数组或列表）
:::


## 正则
::: tip 介绍
- 正则：正确的规则，描述了字符串的规则，正则自身是一个**表达式**也可以作为**值**存在，这个字本身就是一个**对象类型**的数据，正则也被称为：**正则表达式，正则对象**
- 正则式用来造作字符串的
:::

::: tip 意义
- 验证字符
- 数量使用的情况下，极大的提高工作效率
:::

**从一串杂乱的字符串中取出所有的数字 - 原生js**
```js
var str = "asd256asd834as5da38sd512zcacas";
var linshi='';
var arr=[];
for(var i = 0; i < str.length; i++){
		if(str[i]>=0 && str[i]<=9){
				linshi += str[i];
		}else{
				if(linshi != ''){
						arr.push(linshi)
						linshi = '';
				}
		}
}
console.log(arr);
```

**从一串杂乱的字符串中取出所有的数字 - 正则表达式**
```js
var str = "asd256asd834as5da38sd512zcacas";
		var arr = str.match(/\d+/g);
		console.log(arr);
```


### 创建正则
- 正则的标志: `//`
- 字面量
	- `var reg  = /正则内容/;`
- 构造函数
	- `var reg = new RegExp(变量，修饰符);`
	- 变量的值必须是字符

### 正则的使用
- 正则的主要功能：**验证**: `test`, **替换**: `replace`, **查询**: `match`
- 正则的方法
	- `reg.test(str)`：测试，验证（返回布尔值）
	- `reg.exec(str)`：查找
		- 将查询到的信息返回到数组里，数组包含多个信息
		- 每次只能查询一个
		- 属性lastIndex是上一次查询完索引所在的位置
		- 查询到最后一次是返回null，下次从头开始查找
		- 在exec中()是要查询的子集，解析后放到数组中
	
- 字符的方法
	- `srt.replace(reg,newStr)`: 替换，根据指定正则，替换成指定字符（返回替换之后的字符串，不该改变原字符串）
	- `str.match(reg)`: 查找，符合正则的字符，放在一个数组中（返回数组）
	- `str.search(reg)`: 查找
		- 数据第一次出现的索引
- test的默认验证规则
	- 只要被验证的字符串的局部，符合正则，就返回true
	- 如需整体验证，在正则开始时加^,结尾时加$

### 正则的符号
<table>
	<tr>
		<th>分类</th>
		<th>符号</th>
		<th>说明</th>
		<th>示例</th>
	</tr>
	<tbody>
		<tr>
			<th rowspan="2">修饰符</th>
			<td>g</td>
			<td>全局匹配</td>
			<td><b>/\d/g</b></td>
		</tr>
		<tr>
			<td>i</td>
			<td>忽略大小写</td>
			<td><b>/\d/i</b></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th rowspan="6">量词</th>
			<td>+</td>
			<td>表示1个或以上</td>
			<td><b>/\d+/</b></td>
		</tr>
		<tr>
			<td>*</td>
			<td>表示0个或以上</td>
			<td><b>/\d*/</b></td>
		</tr>
		<tr>
			<td>?</td>
			<td>表示0个或1个</td>
			<td><b>/\d?/</b></td>
		</tr>
		<tr>
			<td>{n}</td>
			<td>表示指定n位</td>
			<td><b>/\d{1}/</b></td>
		</tr>
		<tr>
			<td>{n,}</td>
			<td>表示至少n位，上不封顶</td>
			<td><b>/\d{1,}/</b></td>
		</tr>
		<tr>
			<td>{n,m}</td>
			<td>表示至少n位，至多m位</td>
			<td><b>/\d{1,3}/</b></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th rowspan="4">特殊字符</th>
			<td>|</td>
			<td>或</td>
			<td><b>/1|2/</b></td>
		</tr>
		<tr>
			<td>()</td>
			<td>整合成一个部分</td>
			<td><b>/(1|2)/</b></td>
		</tr>
		<tr>
			<td>[]</td>
			<td>中元符，表示一位，中元符内的内容时或的关系</td>
			<td><b>/[1|2]/</b></td>
		</tr>
		<tr>
			<td>[^]</td>
			<td>表示非，除了中元符内的内容</td>
			<td><b>/[^1]/</b></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th rowspan="7">转义字符</th>
			<td>\d</td>
			<td>表示所有的数字，等同于<b>[0-9]</b></td>
			<td><b>/\d/</b></td>
		</tr>
		<tr>
			<td>\w</td>
			<td>表示字母数字下划线，等同于<b>[0-9a-zA-Z_]</b></td>
			<td><b>/\w/</b></td>
		</tr>
		<tr>
			<td>\s</td>
			<td>表示空格，等同于<b>` `</b></td>
			<td><b>/\s/</b></td>
		</tr>
		<tr>
			<td>\D</td>
			<td>表示非数字，等同于<b>[^0-9]</b></td>
			<td><b>/\D/</b></td>
		</tr>
		<tr>
			<td>\W</td>
			<td>表示非字母数字下划线(特殊字符)，等同于<b>[^0-9a-zA-Z_]</b></td>
			<td><b>/\W/</b></td>
		</tr>
		<tr>
			<td>\S</td>
			<td>表示非空格，等同于<b>[^ ]</b></td>
			<td><b>/\S/</b></td>
		</tr>
		<tr>
			<td>\</td>
			<td>表示转义符，将正则中有含义的符号，转成没含义的字符</td>
			<td><b>/\\d/</b></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th>通配符</th>
			<td>.</td>
			<td>通配符，表示所有 </td>
			<td><b>/./</b></td>
		</tr>
	</tbody>
</table>

::: tip 正则的读
- 根据写好的正则，读出规则，写出相应的字符
- 正则只能验证格式的合法，不能验证内容的合法
:::

::: tip 补充
- exec：每次只能查询一个，多次执行查询多个
	- lastIndex，下一次查询的下标，可获取可设置
- search：查询符合正则的字符的索引
- match：全局查询下，将查询出来的数据放在数组中
:::

## ES6
::: tip 介绍
- ES6  就是ECMAScript 6（ECMAscript2015）
- 暂时没有得到所有浏览器的支持，但是所有浏览器的新版本都支持
:::

### 声明变量的关键字
| 关键字 | 说明 |
| --- | --- |
| let | 声明变量 |
| const | 声明变量（常量）|
| class | 声明类 |
| import | 模块化中引入模块 |
| export | 模块化中暴露模块 |

- let和var的区别
	- 没有提升
	- 不允许重复
	- 块级作用域
	- 全局变量不会绑定到window
	- 暂时性死区
- const与let的区别
	- let有的，const都有
	- const是常量，声明之后不允许被修改
		- 实质：const不允许修改的是地址，不是值
		- 注意复杂数据
- 如非特殊情况var全部换成let或const

### 解构赋值
::: tip
- 是一种赋值方式，解构，解析结构
- 主要用来解构复杂数据
:::

- 对象
- 按照键名一一对应，不存在的键是undefined
	```js
		let obj = {name:"admin",age:18,sex:"男"}
		let{name,age,sex,d} = obj;
	```
- 数组
- 按顺序一一对应，不存在的索引位置是undefined
	```js
		let arr = ["hi",123,true,{name:"a"},"hi"];
		let [a,b,c,d,e,f] = arr;
	```
- 字符
- 按顺序一一对应，不存在的索引位置是undefined
	```js
		let str = "hello";
		let [a,b,c,d,e,f] = str;
	```


1. 快速交换两个变量的值
```js
let a = 10;
let b = 20;
[b,a] = [a,b];
```
2. 快速解构函数的参数
```js
function fn({name,age}){
console.log(name)
console.log(age)
}
fn({
	name:"admin",
	age:18
})
```
    
3. 快速解构函数的返回值
```js
function fn(){
	return {
	year:2020,
	month:8,
	date:28
	};
}
var {year,month,date} = fn();
```

### 字符的新增
- Unicode编码
	- 五位十六进制
	- \u{20bb6}
- 方法
	- 字符转u编码（新老版本通用）
		- str.codePointAt()
		- "𠮶".codePointAt()
	- u编码转字符（新老版本通用）
		- String.fromCodePoint(十进制/u编码)
		- String.fromCodePoint(134070)
	- 查询是否以指定字符开头
		- str.statrtsWith("查询的字符")
		- str.startsWith("e")
	- 查询是否以指定字符结尾
		- str.endsWith("查询的字符")
		- str.endsWith("l")
	- 查询是否包含
		- str.includes("查询的字符")
		- str.includes("s")
	- 重复字符
		- str.repeat(重复次数)
		- str.repeat(5)
- 拼接
	- 字符串模板
	- 支持反引号字符:
		```js
			let str = `hello`;
		```
	- 在反引号中支持：{$变量}
		- 支持简单表达式
		- 支持执行函数
		- 反引号中支持换行

### 箭头函数
::: tip
- 箭头函数：=>
- 类似于无名函数，只能作为值存在，不允许直接使用
- `()=>{}`
:::

```js
let fn = function(a){
	return "hello"+a;
}
console.log(fn("admin"));
//箭头函数
let fun a=>"hello"+a;
console.log(fun("root"));
```

::: tip 特点
1. 极简 - 语法简单
2. 当箭头函数的参数，有且仅有一个时，可以省略小括号 
3. 当箭头函数的函数体，有且仅有返回值（返回值不是对象）时，可以省略花括号和return（只要省略了花括号自动将箭头后的内容返回）
4. 当返回值是对象时如果省略花括号和return，需要用小括号将对象括起来
5. 箭头函数没有自己的this，自动绑定上层的this
6. 不能作为构造函数使用，不能new执行
7. 极简 - 伤害代码的可读性（正则）
:::

::: tip 应用场景
- 参数
- 返回值
- **不建议作为事件处理函数使用**
	- 没有this
:::

### 展开运算符
::: tip ...
- `...`
- 可以展开复杂数据
- 【注】展开位置，要在**能接收展开之后数据**的位置展开
:::

### symbol类型
::: tip symbol
- 非常像字符，表示一个标记，记号
- 创建：`let s = Symbol();`
- 任何两个symbol都不相等
- 用来限制字典量的验证
	- 标记，记号，状态
- Symbol函数会生成一个唯一的值可以理解为Symbol类型跟字符串是接近的 但每次生成唯一的值，也就是每次都不相等，至于它等于多少，并不重要 这对于一些字典变量，比较有用
:::

### set和map
::: tip 数据的集合 
- 不是新的数据类型，还是对象，仅仅是数据的打包形式不一样
- 数组：数据的有序集合，索引0~length-1
- 对象：数据的无序集合，没有索引，键值对
:::

- set：数据的无重复集合
	- 去重
	- `new Set();`
	- 没有索引
	- 键和值是同一个
	- 方法
        - add()添加的值
        - keys()键
        - values()值
        - enteries()键和值

- map：数据的无需集合，键值对，语法与对对象不同(Map集合,即映射)
	- `new Map();`
	- 键值对（name=>"admin"）
	- 方法
		- set()添加或修改值
		- get()获取值
		- keys()键
        - values()值
        - entries()键和值


## 面向对象
::: tip 什么是面向对象
- 面向
	- 对着，面朝
	- 以...为主
- 对象
	- **信息打包之后形成对象**
		- 优势：
			- 提升信息的**查找速度**
			- 提升信息的**传输速度**
		- 对象被创建后被创建后如需要批量赋值，造成信息的冗余
			- 先将对象抽象化，**抽象成类**
			- 在根据特性的不同，将类中的抽象**具象化出对象**
			- 根据特性的不同，将类中的抽象划分成：**属性和方法**
				- 属性会随着具体的对象而变化
				- 方法不会随着具体的对象变化
		- **同一个类创建的对象，可能具有同一个方法**
- 面向对象（OO）- **大规模的分工，紧密的协作**
	- OOA：面向对象的分析
		- 将需求不断地细节化，不断地拆分，拆分成能直接实现的需求
	- OOD：面向对象的设计 - **高内聚，低耦合**
		- 将拆分后的需求，使用分工协作的方式搭建结构
		- 每个需求之间都会有千丝万缕的关系
- 面向对象和面向过程的区别
	- 面向对象：
		- **功能化编程，只关注结果，不关注过程**
	- 面向过程：
		- **不关注功能，只关注过程和结果**
:::

::: tip 面向对象的三大特性
- **封装：比函数更大的封装**
- **继承：从父类继承出子类**
- **多态：对象的多种形态**
:::

### 语法
- **OOP：面向对象编程**
- 填充具体的实例，编程
- 创建对象
	- 字面量（单体/单例对象）:
		- `var obj = {};`

	- 构造函数：
		- 构造内置函数：`new Object();`
		- **构造自定义函数**：`new Fn();`
			- 构造函数的命名方式采用大驼峰（首字母大写）
			- 构造自定义函数创建对象，属于内置的工厂模式
```js
function CreatePeople(n,a,s){
		this.name = n;
		this.sex = s;
		this.age = a;
		this.say = function(){
		console.log(this.name);
	}
}
var p1 = new CreatePeople("张三",18,"1");
console.log(p1);
p1.say();
```

::: tip 面向对象的思想
- 抽象
- 属性
- 功能继承
:::

### new的原理
::: tip new的原理
1. 创建了一个新对象
2. 将原函数中的this指向了第一步创建的对象
3. 将第一步创建的对象的**proto**指向了原函数的**prototype**
4. 检查原函数是否主动返回对象，如果没有，返回以上3步处理之后的新对象
:::


### 类
::: tip
- 类：是一种抽象出来的类别
	- 实例：是根据类，具象出的实际的对象
	- 实例 === 对象
:::

### 原型
::: tip prototype
- 专属于函数（箭头函数除外）的一个属性
- 原型对象，显示原型，用来给将来函数被new出来的实例做父级使用
- 将方法写在prototype内，以供将来所有new出来的实例使用
:::

::: tip __proto__
- 所有数据类型都具有这个属性
- 原型对象，隐式原型，用来指向构造函数当前实例的构造函数的（父级的）prototype
- 该属性在使用过程中可以省略，可以直接找到指向构造函数的prototype身上的属性或方法
- 原型对象，任何一个数据，都具有这个属性。表示自身来自于哪个父类
:::

::: tip constructor
- 表示当前所在的对象，所属的函数
- 专属于prototype，表示当前prototype所属的构造函数
:::

### 读写规则
- 对象的属性或方法的读写规则(默认情况下)
- 读：使用。先在自身查找，有，就使用，同时停止查找，没有，顺着proto向上级查找，没有继续顺着proto查找，直到顶层（Object的prototype），找不到就抛出undefined
- 写：设置或赋值。先在自身查找，有，写，同时停止查找，没有，直接设置

### 常用语法
- 将属性写在构造函数内
- 将方法写在构造函数的原型内（默认的constructor会被覆盖，要设置）
- 原型身上的方法的this和构造函数内的this都指向将来的实例
```js
function CreatePeople(n,a,s){
	this.name = n;
	this.age = a;
	this.sex = s;
}
CreatePeople.prototype.show = function(){
	console.log(this.name);
}
var p1 = new CreatePeople("张三",18,1);
p1.show();
```

## class
**ES6新增**
::: tip 介绍
- 面向对象编程，有类的概念，但是js中没有类，通过函数模拟类的思想
- 哪怕ES6中提供了class关键字，其本质也只是老版本中函数实现类的思想的有一层封装，并不是真正的类
:::

**语法结构**
```js
class Fun{
	constructor(n){     // 等同于老语法中的构造函数
			this.name = n;
	}
	// 等同于老语法中的原型
	init(){
			console.log(this.name);
	}
}
var f2 = new Fun("root");
f2.init();
console.log(f2.name);
console.log(f2);
```

**工厂模式的语法**
```js
function Fn(n){
	this.name = n;
}
Fn.prototype.init = function(){
	console.log(this.name);
}
var f = new Fn("admin")
f.init();
console.log(f.name);
console.log(f);
```

## 闭包
### 概念
- 利用作用域的嵌套，将函数内部的变量，进化成**自由/私有**变量的**环境**，叫闭包
- 可以在全局作用域内，操作原本的局部变量

### 特点
- 比较消耗性能：原本会随着局部作用域被释放的变量现在又被保存了起来
- 低版本浏览器会造成内存泄漏
- 可以减少在全局变量的命名污染
- 可以在外部操作内部的变量，方便/不安全（需要的值可能会被修改）
- 可以将原本要删除的值，临时保存起来，方便再次使用

### 原理
- 表现：作用域套作用域
- 本质：
	- 函数定义的区域：函数定义的作用域
	- 函数执行的区域：函数执行的作用域
	- 关系：
		- 函数在执行时自身可以拿到定义作用域的所有变量
- 垃圾回收机制：
	- 计算机的垃圾回收机制（硬盘）：
		- 要删除的数据，不立即删除，暂存在某个临时区域，如果需要使用，可以回收再利用，真正不用了在清空
	- 内存的垃圾回收机制：
		- 要删除的数据，直接删除
- **利用作用域的嵌套，触发了计算机的垃圾回收机制，将原本要删除的变量，临时保存到作用域中**

### 应用
- 循环内绑定事件中要使用循环内的变量
- 给不能串参的函数传参：事件处理函数
- 循环中的事件
- 事件处理函数的传参
- 计时器的回调函数传参

## 继承
### 概念
- 让一个原本没有某个方法或功能的对象或类，具有另一个对象或类的功能或方法

### 方式
- 子承父业：原型的继承
- 授权使用：改变this的指向继承

### 原型/this相关
- 原型
	- 显示原型：函数的prototype
		- 给将来的实例做父级使用
	- 隐式原型：实例的`__proto__`
		- 用来指向自身的父级
- this
	- 当前函数的执行对象
	- 强行修改
		- 函数的方法：call，apply，bind
	- new之后的实例

### 继承的方式
- 改变this的指向继承
	- 方便
	- 多继承
	- 只能继承构造函数内部的内容
	- 不能继承原型上的内容
- 原型继承
	- 拷贝继承
		- 注意深浅拷贝
		- 多继承
		- 只能继承原型
		- 不能继承构造函数
	- 改变原型指向（原型链继承）
		- 能继承原型
		- 能继承构造函数
		- 不方便传参数
	```text
	原型指针:
		默认情况: p实例.__proto__ -> Parent构造函数.prototype
		原型链继承之后: c实例.__proto__ -> Child构造函数.prototype -> p实例.__proto__ -> Parent构造函数.prototype
	```
	- 借助方法(Object.create)
		- ES6提供的Object.create
		- 根据传入的参数对象，创建新对象，新对象的原型指向参数对象
- 组合（混合）继承
	- 二合一
		- 改变this指向 + 原型（常用继承方式之一）
			- 改变this指向+原型继承
			- 既可以继承构造函数的属性和方法
			- 也可以继承原型身上的属性和方法
			- 方便传参
	- 官方提供（extends  super）Es6的class语法
		- 继承中的角色
			- 父类
			- 子类
			- 父类是子类的超类（super）
		- 实质：改变this指向 + 原型链继承
```js
class Parent{
	constructor(n){
		this.name = n;
	}
	show(){
		console.log(1)
		console.log(this.name)
	}
}
class Child extends Parent{
	constructor(n){
			super(n)
	}
}

var p = new Parent("校长");
p.show();
var c = new Child("主任");
c.show();
```
    
### 继承的应用场景
- 面向对象功能的复用性
- 提升程序的性能，降低内存的消耗

## 原型
### 对象中的`__proto__`
- js中万物皆对象，每个数据都会有一个`__proto__`的属性，这个属性叫**隐式原型**，一个对象（obj）的隐式原型（`__proto__`）指向构造该对象（obj）的构造函数（Object()）的原型属性（object.prototype），这样做的原因是为了能够保证实例（obj）能够访问到在构造函数（object）的原型属性（object.prototype）中定义的属性和方法

### 函数中的prototype
- 函数是一个特殊的对象，除了和其他对象一样有上述的`__proto__`属性外，还有自己特有的属性--原型（prototype）这个属性被描述成指针，它指向一个对象类型的数据这个对象的用途就是包含所有将来使用该函数构造出来的可被共享的属性和方法（我们把这个对象叫做**原型对象**）
- 原型对象中也有一个属性，叫做constructor，这个属性包含了一个指针，指回原函数，（类似于arguments.callee。但是arguments只能在函数内部获得，而函数原型对象内的constructor属性，可以在任何能访问到这个函数的位置使用）

### 关系
- 构造函数，原型，实例之间的关系
	1. 构造函数Fn身上有属性prototype为原型对象，原型对象内有constructor属性，指向当前prototype所在的构造函数Fn
	2. 在new执行构造函数Fn时，创造了一个实例对象f，实例对象f的`__proto__`指向构造函数Fn的原型prototype
	3. 因为实例对象f的`__proto__`指向构造函数Fn的原型prototype，所以实例对象f可以间接访问到Fn原型prototype的方法
	
### 检查实例与构造函数的关系
- 查看实例对象f是否有指针指向构造函数Fn的原型
	- isPrototypeOf()
		- 用于检测两个对象之间似乎否存在这种关系
		- Fn.prototype.isPrototypeOf(f) //查看 Fn 的 prototype 对象，是否是 f 原型
	- instanceof
		- console.log(f instanceof Fn)//查看f对象是否是构造函数Fn的实例
		- console.log(f instanceof Object)
- 两种方法都是：如果是返回true，如果不是返回false
- 【注】：instanceof运算符右侧是构造函数，并且js中所有原型都来自Object构造函数

### js解析器访问属性顺序
- 当访问实例f的属性或方法时，会先在当前实例对象f中查找，去过没有找到，则沿着`__proto__`继续向上寻找，如果找到最顶头的Object还是找不到，则会抛出undefined。如果在实例中找到，或某层原型中找到，就会读取当前值并执行，同时停止向上寻找
- 由此可见，解析器的解析顺序遵循就近原则，如故在最近的位置发现属性的存在，便不会向上寻找



## <RouterLink to="/doc/basics/js/eventLoop.md">js的执行机制</RouterLink>
- 生活中的同步异步：
	- 生活中的同步：同时执行，一起执行（两人三足）
	- 生活中的异步：不同时执行，一个接一个（接力跑）
- 程序中的同步异步**与生活中完全相反**
	- 同步：不一起执行（大部分都是同步执行）
	- 异步：一起执行（计时器，事件，ajax）

::: tip
程序: 表示一个功能<br/>
进程: 一个功能从开始执行到执行结束<br/>
线程: 一个功能从开始执行到执行结束的过程中，有几个执行分支，每个分支就是一个线程，线程越多，执行速度越快，但是消耗的性能也高
:::

::: tip js的执行机制: 单线程的异步执行程序
- 先执行宏任务，后执行微任务，微任务必然在宏任务完全结束后，才能执行
- 宏任务
- 微任务
:::



## Ajax
### 介绍
- 是前后端交互的重要手段
- a：Asynchronous 异步
- j：javascript
- a：and
- x：服务端的数据（json，xml，html，txt...）
- ajax不是单一的技术，而是一组技术的组合
	- 异步的js：ajax自身的事件，（加载事件）
	- xhr：XMLHttpRequest，载体，用来连接前后端，进行信息传输
	- 其他js：
	- 服务端的数据：json，xml，html，txt...
- ajax的特点：
	- 在不中断浏览器的其他任务的情况下加载新数据（无刷新加载数据）
	- 提升了页面的初始加载速度
	- 无法通过浏览器的前近后退按钮，拿到曾经的数据
	- ajax请求的数据，无法被搜索爬虫检索，破坏了网站的SEO（搜索引擎优化）
- ajax的引用场景
	- 需要前后端交互
	- 有前端
	- 有后端
		- 运行在服务器环境中
		- ajax也需要运行在服务器环境中

### ajax的使用
- 创建载体：`var xhr = new `
	- 有兼容:`var xhr = new ActiveXObject("Microsoft.XMLHTTP")`  IE5
- 连接前后端：`xhr.open("get",url,true)`
	- 参数1：传输方式；参数2：传输地址；参数3：同步或异步（t：同步；f：异步）
- 等待连接：onreadystatechange（事件）
	- `xhr.readyState`  ajax的执行状态（0，1，2，3，4）
	- `xhr.status`      http协议的状态（200表示连接成功）
	- `xhr.responseText` 接受到的数据
- 发送数据：`send()`

### 封装
```js
function ajax(ops){
	let {url,type="get",data={},success,error}=ops;
	let ajax = new XMLHttpRequest();
	str = "";
	for(let i in data){
			str += `${i}=${data[i]}&`;
	}
	url = type === "get" ? url + "?" + str + "__wxt" + Date.now() : url;
	ajax.open(type,url,true);
	ajax.onload = function(){
		if(ajax.status === 200){
				success(ajax.responseText);
		}else{
				error && error(ajax.status);
		}
	}
	if(type === "get"){
			ajax.send();
	}else if(type === "post"){
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(str.slice(0,str.length-1));
	}
}
```

### get请求
- 会触发浏览器的缓存
- 缓存：缓冲储存，临时储存
- 浏览器打开网页时会将一些资源下载到本地，以提升**下次打开同一个地址**时的速度
	- 缺点：有可能无法拿到最新数据
- 如何绕过缓存
	- 走缓存的原因：下次打开同一个地址
	- 保证每次打开的都不是同一个地址就不会走缓存
		- 在url后加时间戳（Date.new()  获取事件戳）
		- 在url后加随机数（Math.random()）
		 
### post 请求
- post请求不会被浏览器缓存
- post请求的数据不在url后拼接，在xhr对象的send方法中发送
- send之前要修改数据被解析的格式
	- `ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");`

### ajax存在的问题
- 跨域
	- 浏览器的安全策略：同源策略
		- 浏览器认为：请求源和请求目标必须出现在同一源下，不在同一源下，浏览器会阻止这次请求，因为浏览器认为不安全
		- 同源策略：同协议，同域名，同端口
	- 当请求的资源与请求目标不在同一协议、域名、端口称作跨域
	- 在请求的目标资源，没有明确允许的情况下，会被浏览器**限制ajax，没有限制html标签的请求**
- 程序员在与浏览器的安全策略左斗争的过程中发明了一种跨域的方式：`jsonp`
	- 原理：利用script标签可以实现跨域的特性，请求资源
		- 并不是所有标签都能请求，a是跳转，img是图片，link是引入css文件
		- script是引入js，js逻辑，处理编程
- script标签
	- 可以跨域
	- 将引入的资源自动作为js代码执行
- jsonp
	- php会被服务器解析，解析之后，php返回的字符，才会被script标签作为js代码解析
	- 利用前端定义的函数，在后端资源中被返回js的执行语句，又使用script标签加载后端资源，script标签会将后端返回的字符作为js解析，最终在后端执行了前端定义的函数，并通过传参实现跨域数据的传输

### 跨域的解决方法
- 前端解决跨域的方法：**isonp**
	- 缺点：需要后台配合
- 后台解决跨域的方法：**CORS**
	- 给后端资源设置允许请求
```js
	header('Access-Control-Allow-Origin:*');//允许所有来源访问
	header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
```

- 服务器请求数据
	- 服务器代理
	- 原理：
		- 客户端a，请求服务端B的数据，跨域
		- 自己搭建一个服务器A，请求服务端B的数据
			- 没有经过浏览器，没有跨域，直接拿到数据
			- 数据保存在服务器A中
		- 客户端a，请求自己的服务器A，没有跨域


## <a href="https://www.jianshu.com/p/c0ff0aa57b6a" target="_blank">Promise</a>
::: tip
- ES6新增的本地对象，需要new之后才能使用
- 异步套异步的程序称之为回调地狱
	- 回调地狱可以解决异步中存在的异步的问题
		- 有递归的逻辑，极其的消耗性能
		- 不方便维护
		- 伤害了代码的可读性
	- promise是ES6中提出的解决回调地狱的方案
:::

### 语法
```js
var p = new promise((resolve,reject)=>{
	//promose已完成，由then的第一个参数传递
	//reject未完成，由catch的参数或then的第二个参数传递
})
p.then(()=>{})//处理成功
p.catch(()=>[])//处理失败
```

### promise的方法
- `then`和`catch`是promise实例的方法
	- then和catch的回调函数，返回值可以是一个新的promise对象
	- 如果返回值是新的promise对象，可以在当前then或catch后继续连缀处理新的promise对象的状态
- `all`和`race`是promise构造函数的批处理方法，执行结果也是promise对象，可以被then或catch处理成功或失败的状态
	- all：全部请求结束，参数是数组
	- race：只要有一个请求结束，参数是数组
- promise的作用
```js
var p = new promise(()=>{//开启承诺
	var p1 = ajax(url)//正在进行（异步程序）
	var p2 = ajax(url)//正在进行（异步程序）
	
	promise.all([p1,p2]).then(()=>{})//批处理成功
	promise.all([p1,p2]).catch(()=>{})//批处理失败
	
})
p.then(()=>{})//处理成功
p.catch(()=>{})//处理失败
```
	
## 本地存储
### 概念
- 本地：非服务器
- 存储：存数据
- 并不是所有数据都需要存在服务器，如果非要存在服务器，会增加服务器的负担，也可以将数据存在客户端（本地存储技术）
- 本地存储技术
	- <a href="#cookie">cookie</a>
	- <a href="#storage">localStorage</a>
	- <a href="#storage">sessionStorage</a>

### cookie
1. cookie产生的原因
	- 通信协议
		- Ip：用来识别接入互联网的每台机器的唯一标识
		- TCP/UDP：传输底层的数据包
			- TCP：可靠的传输协议，三次握手协议，面向连接的协议
			- UDP：不可靠的协议，面向数据包的协议
		- FTP：用来传输文件，客户端向服务器上传/下载文件
		- HTTP：传输网页的协议，超文本传输协议，无状态协议
			- 无状态：没有记忆
			- 会话跟踪技术：用来记录每次会话话期间产生的所有需要记录的信息
				- cookie
2. cookie
	- 会话跟踪技术：用来记录每次会话期间所产生的所有需要记录的信息
	- 数据记录到哪
		- 客户端的浏览器的缓存中
		- 会随着http协议发往服务器
3. cookie数据的特点
	- 只可以文本（字符）
	- 大小限制：4k~
	- 数量限制：50条~
	- 不允许跨域，不允许跨路径
	- 时间限制：默认是会话级，可以指定时间
	- 建议：真实项目中，不要在cookie中直接存储铭感信息。安全原则
4. cookie的使用
	- document.cookie
		- 字符型数据
		- 一次只能存一条
		- 数据中包含名字和值，和配置信息
		- `document.cookie = "key=val;path=路径;expires="+时间对象+";domian=服务器（127.0.0.1）"`
	- **注**：本地储存可以不依赖服务器，但是因为cookie会默认发往服务器，所以cookie最好在服务器环境下使用
	
5. cookie的封装
**设置**
```js
function setCookie(key,val,ops={}){
	var expires = "";
	if(ops.expires){
			var d = new Date();
			d.setDate(d.getDate()+ops.expires)
			expires = ";expires=`"+d;
	}
	var path = ops.path ? `;path=${ops.path}` : "";
	document.cookie = `${key}=${val}${path}${expires}`;
}
```
**获取**
```js
function getCookie(key){
	var data = document.cookie.split("; ");
	for(var i = 0;i<data.length;i++){
			if(data[i].split("=")[0]===key){
					return data[i].split("=")[1];
			}
	}
	return "";
}
```
**删除**
```js
function removeCookie(key,ops={}){
	ops.expires = -1;
	setCookie(key,null,ops);
}
```

### storage
1. 特点
	- 只可以文本（字符）
	- 大小限制：2M~
	- 数量限制：50+~
	- 时间限制：
		- localStorage：永久级
		- sessionStorage：会话级
2. localStorage
  - 永久级，没有时间，不能设置时间
  - HTMl5新增的API
  	- localStorage是window的子对象
  	- 自身可以作为对象使用，键值对
  	- `window.localStorage`
  	- `window.localStorage.user = "admin"`
  	- `window.localStorage["pass"] = "123"`
  - localStorage
  	- `localStorage.setItem("a","10");`	添加
  	- `localStorage.getItem("a");`		获取
  	- `localStorage.removeItem("a");`		删除
  	- `localStorage.clear();	`			清除所有
3. sessionStorage
  - 会话级，没有时间，不能设置时间
  	- HTMl5新增的API
  	- sessionStorage是window的子对象
  	- 自身可以作为对象使用，键值对
  	- `window.sessionStorage`
  	- `window.sessionStorage.user = "admin"`
  	- `window.sessionStorage["pass"] = "123"`
  - sessionStorage自带的方法
  	- `sessionStorage.setItem("a","10");`	添加
  	- `sessionStorage.getItem("a");`		    获取
  	- `sessionStorage.removeItem("a");`	 删除
  	- `sessionStorage.clear();`				      清除所有
4. storage事件
  - 浏览器（window）的事件
  - 检测storage的变化
  - 不会触发当前页面的事件，触发的是别的页面的事件
  - 有兼容，兼容运行环境，只能在服务器中运行






## 设计模式
::: tip 概念
- 是一套经过反复使用，多人知晓，经过分类的，代码设计经验的总结
- 为什么要使用设计模式？
	- 为了代码的可重用性，让代码更容易被他人理解，保证代码的可靠性，设计模式使代码的编写真正的工程化
:::

### 常用设计模式
- <a href="#策略模式">策略模式</a>、构造器模式、模块化模式、暴露模块化模式、<a href="#单例模式">单例模式</a>、<a href="#工厂模式">工厂模式</a>、中介则模式、原型模式、命令模式、外观模式、Mixin模式、装饰模式、哼元（Flyweight）模式、<a href="#组合模式">组合模式</a>、<a href="#适配器模式">适配器模式</a>、外观模式、<a href="#观察者模式">观察者模式</a>、迭代器模式、惰性初始模式、<a href="#代理模式">代理模式</a>、建造则模式、MV*模式（<a href="#mvc模式">MVC模式</a>、MVP、MVVM）
- 设计模式实在面向对象编程中使用
	- 面向对象：内功
	- 设计模式：招式

### 工厂模式
- 批量创建对象
- 特点：原料对象，属性或方法的加工，返回
- 语法
	- 构造函数创建对象
	```js
		function Fn(){
				this.name = "admin"
			}
			var f = new Fn();
	```
	- 封装成函数
	```js
		function fn(){
				var obj = {};
				obj.name = "admin";
				return obj;
		}
		var f = fn();
	```

### 单例模式
- 只能创建单个对象，和工厂模式相对
- 特点：每次创建的都是同一个对象
- 单个对象
	
	- `var obj = {}`
- 构造函数实现单例模式
	```js
	function Fn(){
		if(!Fn.obj){//判断构造函数内是否有obj
			Fn.obj = {}//没有就创建一个
		}
		Fn.obj .name="李四"//给创建的对象设置一个属性name
		return Fn.obj //返回自己的对象（每次返回的都是自己的对象）
	}
	```

### 组合模式
- 将类或对象按照一定的关系组合起来，可以实现批量执行的功能
- 一般应用在**动态**html结构上
- 组合成树状结构，对象节点
	- 根对象
	- 枝对象：具有子对象节点
	- 叶对象：不具有子对象节点
- 节省操作、性能消耗大
- 先创建一个组合器
	- 在组合对象

### 适配器模式
- 适配器：将原本不符合接口的数据或信息，包装成符合的数据接口或信息，这个包装就叫适配器
- 手机，平板（非通话）
	- 只有一个测试部门
	- 按照最全的功能测试
        - 手机：打电话，玩游戏，听音乐
            - 平板：玩游戏，听音乐
- 适配器的意义：
	- 多数应用在系统接口使用，也就是别人提供了一个功能，但要求传入一个A类型的参数，我们手里的数据是B类型的，如果想使用，有2个方法
	1. 把自己的源代码修改，让B类型改为A类型（不合适）
	2. 我们把B类型的数据进行包装，让他看起来符合A类型，这个包装函数，就是适配器

### 观察者模式
- 观察者模式也叫发布订阅者模式
- 订阅者（观察方，接收对象）：接收信息
- 发布者（被观察方，主体对象）：发布信息
- js中的监听式事件绑定

### 代理模式
- 代理，委托
- 系统功能A，系统调用，会产生数据的传输
- 给系统功能A做个代理，让系统调用代理
- 代理功能自定义完成，截获，另做他用，另行加工
- 事件委托
- 服务器代理

### 策略模式
- 功能的执行方式
- 策略，战术，计划
- 提前将可能发生的情况多考虑到，并给出对应的解决方案
- 场景：
	- 轮播图的中的左右按钮的区分
	- 左右移动方向的确定
	- 小标被点击时的方向

### MVC模式
- M：model	模型，数据
- V：view	视图
- C：ctrl	控制器
- 执行顺序
	1. 用户/系统调用控制器发起指令
	2. 控制器接受指令,根据指令调用对应的模型
	3. 模型返回数据，控制器保存数据
	4. 控制器根据指令，调用对应的视图
	5. 将保存的数据，发给视图
	6. 视图做数据的渲染

