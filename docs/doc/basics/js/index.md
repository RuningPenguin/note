# javascript

a: 尖头函数、闭包





# JQuery
## 介绍
- [官网](https://jquery.com/)
- 特点
	- jQuery是一个快速，小型且功能丰富的JavaScript库。通过易于使用的API（可在多种浏览器中使用），它使HTML文档的遍历和操作，事件处理，动画和Ajax等事情变得更加简单。兼具多功能性和可扩展性，jQuery改变了数百万人编写JavaScript的方式
	- 写的更少，做的更多

## 基本选择器
- 原生DOM对象的方法不能与jq对象的方法混用
	- jq选择器返回的都是数组，但是可以在jq的方法中直接使用
- 转换
	- 原生转jq：$("ele")
		- 将原生的DOM的对象传给jq，返回值就是转换结果
	- jq转原生
		- 通过索引解析数组：$("box")[0]
		- 通过专属的方法get解析数组：$("box").get(0)
### css相关
- $()/JQuery()
	- 传字符参数
- $("#box")：id选择器（失明特征，只选择一个）
- $(".box")：class选择器
- $("div")：标签选择器
- $(".box[a=abc]")：属性选择器
- frist：第一个
- last：最后一个
- eq()：第几个（从0开始）
- even：奇数
- odd：偶数
- not()：除了此条件
- contains(txt)：内容包含txt的
- empty：内容为空
- hidden：隐藏的元素
- visible：显示的元素
- addClass：添加属性
- removeClass：删除属性

### jq特色
- find：后代  相当于css的空格
- children：子  相当于css的>
- next：下一个同级元素 	相当于css的+
- nextAll：下面所有同级	相当于css的~
- nextAllUnnitl：下面所有同级，参数为区间结束，不包括参数
- prev：上一个同级元素
- prevAll：上面所有
- prevAllUnitl()：上面所有区间，参数为区间结束，不包括参数
- has()：符合条件的后代元素
- parent：单个父级元素
- parents：所有父级元素
- parentUnitl()：父级区间，参数为区间结束，不包括参数
- siblings：除自己外所有的兄弟元素

## jq的动画
- 内置动画
	- 左上角动画（参数1：动画时间，参数2：动画执行完毕的事件）
        - hide：隐藏
            - show：显示
            - toggle：隐藏/显示
	- 上拉下拉（参数1：动画时间，参数2：动画执行完毕的事件）
		- slideUp：上拉隐藏
		- slideDown：下拉显示
		- slideToggle：上拉/下拉
	- 淡出淡入（参数1：动画时间，参数2：动画执行完毕的事件）
		- fadeOut：淡出隐藏
		- fadeIn：淡入显示
		- fadeToggle：淡出淡入
	- 透明度（参数1：动画时间，参数2：透明度，参数3：函数）

- 自定义动画
	- animate()
		- 参数1：对象（需要设置的css属性，支持字符，数值，+=：原来的参数加上设置的参数）
		- 参数2：毫秒数，可选
		- 参数3：动画执行结束后，可选

- 动画的执行顺序
	- jq中在一个动画结束后开启下一个动画的实现方法
		- 回调函数
		- 单独开启
		- 连缀执行
	- **jq中动画与动画时同步执行**
	- **jq中动画与其他方法是异步执行**
	- **queue**
		- 参数：函数
		- 将此函数作为前一方法的回调函数

- 动画的停止和延迟
	- 停止：stop()
		- 参数1：布尔值（等待中动画）
			- false：不清除列队（默认）
			- true：清除列队
		- 参数2：布尔值（当前动画）
			- false：停止当前（默认值）
			- true：直接到目标，神略动画过程
	- 延迟：delay()
		- 参数：要延迟的毫秒数
	- **动画是同步执行，同步执行事件同时开启多个，会产生队列**
	- 动画的队列
		- 当前动画正在执行
		- 后面还有等待的动画

## jq的DOM操作
### 属性操作
#### 属性
- html：标签的内容，不包括标签   相当于innerHTML
	- 无参数：获取内容
	- 参数：字符`<div>`，加结束标签的话可以直接添加内容
	- 可以解析标签
- text：标签内的文本信息    相当于innerTEXT
	- 无参数：标签内的文本内容
	- 参数：字符，要替换成的文本
	- 不能解析标签
- val：表单的内容     相当于value
	- 无参数：获取值
	- 有参数：将参数内容赋值到表单的value
- removeClass：删除元素的class
	- 只删除参数中的class，不全部删除
- addClass：添加class
	- 在原有的基础上继续增加，不覆盖
- toggleClass：自动添加或删除
	- 如果有参数的class属性就删除，没有就设置
- css：设置样式
	- 参数：
		- 一个字符：获取样式
		- 一个数组：获取样式
		- 两个字符：设置样式
		- 一个对象：设置样式
- attr：设置自定义属性
	- 参数1：属性名
	- 参数2：属性值
	- 只有一个参数时，获取
	- 支持一个对象，同时设置多个自定义参数
- removeAttr：删除自定义属性
	- 参数：要删除的属性名
- each：遍历对象
	- $.each(obj,function(index,value){
			console.log(index, value)
		})
#### 位置
- width：宽度
	- 只包含width
- innerWidth：包含内边距的宽度
	- width+padding
- outerWidth：包含宽度，内边距，边框
	- border+width+padding
- offset：元素相对于浏览器的宽度
	- 定位+margin
	- 返回一个对象，包含top，left
- position：相对于父元素偏移的距离
	- 只有定位
	- 返回一个对象，包含top，left
- scrollTop：滚动条的值
	- 无参数：获取
	- 有参数：设置
- scrollWidth：滚动条的值
	- 无参数：获取
	- 有参数：设置
#### 元素的增删改查
- 创建节点
	- `$("<p>123<p>")`
	- 直接写
- append：插入元素内最后
	- $(".box").append(p)
	- 把p插入到box
- appendTo:插入元素内最后
	- p.appendTo($(".box"))
	- 把p插入到box
- prepend：插入元素内部前
- prependTo：插入元素内部前
- after:插入指定元素后
- before：插入指定元素前
- **clone**：复制元素
	- 参数为true时复制元素的事件
	- `$('body').append($('div').clone(true))`
	- 复制一个节点添加到 HTML 
- remove：删除元素节点
- empty：删除匹配的元素集合中所有的子节点
- replaceWith：替换元素

## jq的事件
- jq的事件都是DOM2级事件绑定
### 常规绑定
- 选择器.click(function(){})
- 原生的方法没有on
- jq特有的ready事件
	- 只加载结构，不加载资源
	- `$(function(){})`
	- `$().ready(function(){})`
### on绑定
- `$().on("click.a","li",function(){})`
	- 参数1：事件，可以给后面的执行函数起名字，加载点（.）后
	- 参数2：事件委托时加，要委托的元素，（可选）
	- 参数3：事件处理函数
- 用off删除on绑定的事件
	- $().off("click.a")
- on绑定事件委托
	- `$().on("click.a","li",function(){})`
	- this指向当前事件目标
### hover绑定
- 鼠标进入和离开
- `$().hover(function(){},function(){})`
	- 参数1：鼠标进入事件
	- 参数2：鼠标离开事件
	- 封装的是mouseenter/mouseleave（没有事件冒泡）
### one绑定
- 绑定一个一次性事件

### bind绑定
- jq3删除，不可以事件委托
- `$().bind("click.a",function(){})`
	- 参数1：事件，可以给后面的执行函数起名字，加载点（.）后
	- 参数2：事件处理函数
- 用unbind删除bind绑定的事件
	- $().unbind("click.a")

### 模拟事件执行
- **trigger**:模拟事件执行
- **triggerHandler**模拟事件执行，没有事件冒泡
- 轮播图自动下一张
	```js
	$(".box").click(function(){
        console.log("切换下一张轮播图");
    })
     setInterval(() => {
        会触发事件冒泡
        $(".box").trigger("click");
    }, 2000);
    //不会触发事件冒泡
    $(".box").triggerHandler("click");
	```
	
## jq的ajajx
- ajax的返回值是一个伪promise的对象
- 可以使用promise类似的使用方法
- jq的ajax请求数据成功后会有3个返回值
	- 成功res，stat，xhr
		- 数据，状态，xhr对象
	- 失败xhr，stat，res
		- xhr对象，状态，数据


### 上层方式
- $.getJSON():获取json
- $.getScript():获取script，实现跨域
- $().load():获取html数据

### 中层方式
- $.get()：只能get
- $.post()：只能post
	```js
	var url = "http://localhost/ws2009/jq-ajax/data/data.php";

    var p = $.get(url,{
        user:"admin"
    },(res,b,c)=>{
    });

    // console.log(p);
    p.then((res,b,c)=>{
        console.log(res, b, c)
    },(code,b,c)=>{
        console.log(code, b, c)
    })
	```

### 底层方式
- $.ajax():
	- 参数：对象
		- async:true（是否异步，默认true，异步）
		- url:"data.php"（请求数据的地址）
		- type:"get/post"（传输类型）
		- data:{user:"admin"}（发送的消息）
		- success:(res,stat,xhr)=>{}（请求成功）
		- error:(xhr,stat,res)=>{}（请求失败）
		- timeout:100（超时）
		- beforeSend:()=>{}（请求之前要干什么）
		- dataTye:"jsonp"（数据转换类型，一般不用，jsonp时写）
		- jsonp:"callback"（后端返回数据的函数名，确定时写）
		- global:true（ajax的全局状态（生命周期）默认true）
- ajax的公共配置
	- $.ajaxSetup()
	- 当ajax请求数据时有重复的代码时可用
	- 例：请求同一个地址...
		```js
		$.ajaxSetup({
        url:"http://localhost/ws2009/jq-ajax/data/data.php",
        success:res=>{
            alert(res)
        }
    	})
		```

- ajax的全局状态的全局函数类型
	- ajaxStart：xhr实例创建前
	- ajaxSend：xhr创建成功，发送给服务器之前
	- ajaxSuccess：请求成功，且包含成功的状态码
	- ajaxError：请求失败，且包含失败的状态码
	- ajaxComplete：请求完毕且数据已返回
	- ajaxStop：请求结束
	```js
	$(document).ajaxStop(function(){
        alert("ajaxStop")
    })
	```
|全局函数类型|何时被触发|参数|
|-|-|-|
|ajaxStart|在jQuery AJAX函数或命令发起时，但在XHR实例被创建之前|类型被设置为ajaxStart的全局回调信息对象|
|ajaxSend|在XHR实例被创建之后，但在XHR实例被发送给服务器之前|类型被设置为ajaxSend的全局回调信息对象；XHR实例；$.ajax()函数使用的属性|
|ajaxSuccess|在请求已从服务器返回之后，并且响应包含成功状态码|类型被设置为ajaxSuccess的全局回调信息对象；XHR实例；$.ajax()函数使用的属性|
|ajaxError|在请求已从服务器返回之后，并且响应包含失败状态码|类型被设置为ajaxError的全局回调信息对象；XHR实例；$.ajax()函数使用的属性；被XHR实例返回的异常对象(如果有的话)|
|ajaxComplete|在请求已从服务器返回之后，并且在任何已声名的ajaxSuccess或ajaxError回调函数已被调用之后|类型被设置为ajaxComplete的全局回调信息对象；XHR实例；$.ajax()函数使用的属性|
|ajaxStop|在所有其他AJAX处理完成以及任何其他适用的全局回调函数已被调用之后|类型被设置为ajaxStop的全局回调信息对象|



## 表单序列化
- $(".form").serialize()
	- 将表单转换成url?后的格式
	- 必须在form标签内的input，必须有name
- $.param
	- 将对象转换成url?后的格式

## jq的插件
### 插件
- 是一种遵循一定规范的应用接口编写出来的程序
- 表示某个功能的封装

### 现有插件的使用
- 使用方式：jq的插件
	1. 先有jq（先引入jq）
	2. 再有插件（引入插件）
	3. 皮肤包或语言包
	4. 使用插件
- 表单验证插件：validate
- cookie插件：cookie
- 分页插件：pageAction

### 开发自己的插件
- 如何开发jq的插件
	1. 向jq绑定自定义方法或属性
		- $.fn:jq的DOMDOM对象所在的公共区域对象
		- extend
			- $.extend		绑定为jq的全局方法（工具方法）
			- $.fn.extend	绑定为jq的局部方法（DOM方法）
		- 对象操作
			- $.xxx = function(){}		（工具方法）
			- $.fn.xxx = function(){}	（DOM方法）
	2. 独立的js文件
		- 起名：框架名.插件名.版本号.js
		- JQuery.Banner.1.0.js
	3. 开匿名函数，前后加分号
	4. 开严格模式
	5. 美元符$的私有化
		- `(function($){})(JQuery)`
		- 将JQuery作为参数传入匿名函数，$接受
		- 防止其他js重置$
	6. 开始向jq绑定自定义方法或属性
	7. 开发功能↓
- 开发插件
	- banner插件
		- 参数处理
		- 报错处理
		- 选择器处理
		- 业务逻辑处理

# nodejs
## node的介绍
1. 后台语言，类似于php
	- php使用方法：安装apache环境，php的语言支持，php代码文件，操作系统
	- node使用方法：安装node环境，node的语言支持，node代码文件，操作系统
2. node的历史
	- V8引擎：c++搭建（谷歌开源）
	- nodejs（服务端的js）== javascript（客户端的js）
		- 只是运行环境不同，语法完全一致
3. node的易用性
	- node的服务器是php的86倍
	- node的学习成本低，js的语法
	- node的学习资源相对不多
	- 中小型企业项目后端node不多，大型公司或新项目可以采取node

## node的运行方式
1. **没有浏览器**
	- 没有BOM（window），没有DOM（document）
2. 运行在node环境中
	- 将node环境安装在计算机的操作系统内
	- 通过操作系统的命令提示框，通过命令调用node的运行环境，执行node代码，运行node文件
		- win：开始菜单->附件->命令提示符
		- mac：终端
		- linux：终端
	- 第三方软件，封装的命令提示框的入口
		- vsCode：终端
		- HB：终端
		- git：Git bash（linux的终端）
3. 执行文件（运行功能）
	- 首先在命令窗口找到要执行的node文件
		- 系统命令窗口的路径切换（系统命令）
			- 盘符切换：`盘符:`
			- 打开文件夹：`cd 文件夹名`
			- 查看当前文件夹中所肉文件：`dir`
			- 清屏：`cls`
	- 通过node命令执行文件
		- `node 文件名`
4. 命令执行（用来测试代码）
	- 打开命令窗口
	- 进入node解析器
		- `node `（node空格）
	- 写代码，回车运行

## node的语法
1. 基础语法
	- 全面支持ECMAScript6（除了ES6的模块化）
	- **没有BOM(window)，没有DOM(document)**
	- 事件
		- 不是人机交互行为事件
		- 服务端的事件：数据、加载、请求...
2. 特点语法
	- 模块↓

## node的模块化
- 模块化的使用
	- 引入：
		- require("模块所在的文件名")
	- 暴露：
		- `module.exports 要暴露的入口`
		- `exports 要暴露的入口`
### 内置模块
- 直接引入，就可以使用

### 第三方模块
- 先下载，再引入，再使用

### 自定义模块
- 先写，再暴露模块，再引入，再使用
	- 暴露关键字(属性)：exports
	```js
	//moduleA.js
	exports.rand = function(n){
    	return (Math.random()+"").substr(2,n)
	}
	```
	- 引入关键字(方法)：require()
	```js
	//mian.js
	var {rand} = require("./moduleA.js")
	for(let i =0;i<10;i++){
		console.log(rand(4))
	}
	```
	
	
## 内置模块
- node官方封装好的功能模块，直接引入，即可使用
- `const 模块入口 = require("模块名")`

### http模块
- 服务器模块，开启web服务器
	- 引入：`const http = require("http")`
	- 开启：`http.createServer((req,res)=>{}).listen("3000","localhost",()=>{})`
	- 使用：
		- 开启服务器：createServer((req,res)=>{})
			- 参数：函数，该函数可接受两个参数
				- 参数1：req，请求，前端到后台的信息
				- 参数2：res，响应，后台到前端的信息
			- 返回值是一个一个对象
		- 监听服务器：listen("3000","localhost",()=>{})
			- 开启服务器的返回值的方法（可以连缀）
			- 参数1：端口号
			- 参数2：地址（可选，默认localhost）
			- 参数3：函数，服务器开启成功执行的代码（可选）
		- 方法：
			- 前端请求的地址：req.url
			- 给前端发送的数据：res.write()
			- 结束当前请求：res.end()  必须写在最后
### fs模块
- 文件模块，提供了文件的操作
	- 引入：`const fs = require("fs")`
	- 使用:
		- 读取文件
			- fs.readFile("文件路径","utf-8",(err,data)=>{})**异步**
				- 参数1：要读取的文件路径
				- 参数2：字符编码（可选，默认buffer流）
				- 参数3：函数，该函数可以接受两个参数
					- 参数1：err，请求失败时的错误信息
					- 参数2：data，请求到的数据
			- fs.readFlieSycn("文件路径","utf-8")**同步**
				- 参数1：要读取的文件路径
				- 参数2：字符编码（可选，默认buffer流）
				- 返回值为请求到的数据
		- 写入文件
			- fs.writeFlie("文件路径",str,(err)=>{})**异步**
				- 参数1：要写入的文件路径的地址
				- 参数2：要写入的文件的内容
				- 参数3：函数，该函数接收一个参数
					- 参数：err，写入失败的错误信息
			- fs.writeFlieSycn("文件路径",str)**同步**
				- 参数1：要写入的文件路径的地址
				- 参数2：要写入的文件的内容
				- 返回值为undefined 
				
### url模块
- url模块，解析url，将url字符解析成对象
	- 引入：`const url = require("url")`
	- 使用：
		- `const urlObj = url.parse(req.url,ture)`
			- 参数1：要解析的url
			- 参数2：布尔值，是否将解析后的query转成对象
			- 返回值时一个解析后的对象
	- 返回值的属性
|属性|含义|例子|
|-|-|-|
|protocol|协议| ’http‘                                                       |
|slashes|双斜杠|true|
|auth|作者|null|
|host|服务器+端口|'localhost:8002'|
|port|端口| '8002'                                                       |
|hostname|服务器|'localhost'|
|hash|锚点（哈希）|'#title'|
|search|数据|'?username=sdfsdf&content=234234'|
|query|除了?的数据|'username=sdfsdf&content=234234'|
|pathname|文件路径|/aaa'|
|path|地址+信息|'/aaa?username=sdfsdf&content=234234'|
|href|完整地址|'http://localhost:8002/aaa?username=sdfsdf&content=234234#title'|


### querystring模块
- 解析查询数据
	- 引入：`const querystring = require("querystring")`
	- 使用：
		- querystring.parse(数据)
		- 将数据转成对象
			- 参数：要转换的数据


## node的下载工具
1. npm:命令行下载工具 - **包管理器**
	- 查看版本号：npm -v
	- 生成package.json(项目的配置信息)：npm init
	- 下载模块：npm install 模块名（npm i 模块名）
		- 下载到全局：-g
		- 下载到上线环境（运行依赖，项目依赖）：-S
		- 下载到开发环境（开发依赖）：-D
	- 卸载模块：npm uninstall 模块名（npm uni 模块名）
		- 安装到哪个位置就卸载对应位置的模块
2. npm的下载源
	- 官网下载源：https://www.npmjs.com/（服务器在国外）
		- 下载慢，不稳定，可能会被禁掉
	- npm下载源管理工具：nrm
		- 安装：npm i nrm -g
		- 查看版本号：nrm -V
		- 查看现有源列表：nrm ls
		- 切换源：nrm use 源名
		- 测试源速度：nrm test
3. npm下载常见失败解决方式：
	- 超时错误，换网
	- 下载失败：
		- 卸载
		- 清除缓存：npm clean cache -f
		- 重新下载
		- 以上还是失败：
			- 删除：C:\Users\Administrator\AppData\Roaming\npm-cacha（缓存文件）
			- 重新下载
4. 总结
	- npm init
	- npm install 模块

## 路由处理
- 路由处理
	- php服务器的使用：安装集成工具，启动apache，找到根目录，写代码，就可以了
	- node服务器的使用：自己写，自己没写的功能都不存在！！！
### 路由设计模式
- 设计路由1（假设路由）√
    ```
    http://localhost:3000/api?type=login
    http://localhost:3000/api?type=register
    http://localhost:3000/api?type=goods
    http://localhost:3000/api?type=user
    ```

- 设计路由2（假设路由）
    ```
    http://localhost:3000/login
    http://localhost:3000/register
    http://localhost:3000/goods
    http://localhost:3000/user
    ```
#### 利用node跨域
- 利用node服务器搭建代理服务器实现ajax的跨域请求
    ```js
        // 处理前端过来的url，处理成真正要请求资源的url

        // 再利用http或https模块发起请求
        https/http.get(url,(resObj)=>{
            // 解析请求到的对象，解析出数据
            resObj.on("data",(data)=>{
                // 利用当前服务器的响应头对象，将数据发给前端
                res.write(data);
                res.end()
            })
        })
    ```

# gulp
- node的第三方模块
- node的模块开发 - commonJs规范
	- 暴露：module.exports
	- 引入：require()
## 介绍
- 做前端的**自动化工程**，前端自动化工具
- 基于node的前端自动化工具（基于流的前端自动化工具）
- 自动将文件进行压缩、合并、编译、解析等操作
- 类似于将项目打包
- 官网：https://www.gulpjs.com.cn/
- **常用的前端工具**：gulp，webpack，grunt，browserify
- gulp的环境类似于工厂，项目类似于原料和产品
	- 工厂的位置是固定的
	- 原料和产品可以运输

## gulp的使用
1. 下载
	-  安装全局的gulp：`npm i gulp -g`
		- 测试：`gulp -v`可以查看全局的gulp版本号
	- 安装局部的gulp
		- 先创建项目环境（文件夹）
		- 使用命令窗口进入文件夹
		- `npm i gulp -D`安装到开发环境
		- 测试：`gulp -v`可以查看全局的gulp版本号
2. 创建gulp官方指定的文件 ：**gulpfile.js**
3. 在gulpfile.js中引入gulp模块
	
	- `const gulp = require("gulp")`
4. 配置gulpfile.js文件
	- 遵循node的模块化规范
	- 定义功能
	```js
	function sayHello(){
    console.log("hello");
	}
	```
	- 暴露模块
	```js
	//  暴露的入口名
	exports.say = sayHello;
       		//   要暴露的功能
	// 在执行时，通过say执行sayHello
	```
	- 按需执行
		- 在命令窗口输入：`gulp 入口名`

## gulp的常用内置方法
- src()		查找文件（参数：路径、字符串）
- dest()	转存文件（参数：路径、要保存的路径）
- watch()	监听文件的变化，执行功能（参数：路径、是个数组）
- series()	批量执行，同步执行（参数：要批处理的函数名）
- parallel()批量执行，异步执行（参数：要批处理的函数名）
- pipe()	**流对象的方法**
	- 管道方法，用于将流对象传入下一个操作
	- 实现连缀执行
	- 参数：要执行的方法

## 文件路径的写法
- 单个文件：直接文件全称
- 多个文件：使用数组包裹
- 当前文件夹下，所有文件：`"文件夹/*"`
- 当前文件夹下，指定扩展名文件：`"文件夹 /*.扩展名"`
- 当前文件夹下，多层子文件夹嵌套：`"文件夹 /**/*"`
- 当前文件夹下，指定多个扩展名文件：`"文件夹/*.{html,css}"`
- 当前文件夹下，除了莫格文件：`"!src/pass.txt"`(!路径)

## gulp的插件
- 实现最终的项目处理
- 下载
- 引入
- 在gulp的功能中使用插件
- **注意：gulp-uglify压缩不支持ES6语法，需要先将ES6转成ES5之后才能压缩**

## ES6转ES5
- gulp插件是没有ES6转ES5这个功能的
	- babel才是住专门的编译工具
	- gulp只是提供了支持gulp的插件
	- 最终的编译还是由bable完成
- 安装gulp对babel支持
	
	- npm install gulp-babel
- 安装babel对ES6的支持
	
	- npm install @babel/core
- 安装说明，将ES6转成ES5
	
	- npm install @babel/preset-env
- 在gulpFile中使用
	
	- 引入gulp-babel
- 定义ES6转ES5的功能
    ```js
    function stfFn(){
        return src("src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest("dist/js"))
    }
    exports.stf = stfFn;
    ```
    
## 服务器插件
- 服务器插件
	- gulp-connect
    ```js
    //转存，拷贝
    function copy(){
        return src(["./src/*"])
                .pipe(dest("dist"))
                .pipe(connect.reload())//文件转存之后，触发connect插件的刷新功能
    }
    exports.copy = copy;
    //监听文件变化，实现自动拷贝
    function autoCopy(){
        return watch("./src/index.html",copy)
    }
    exports.autoCopy = autoCopy;
    //开启服务器,服务器自动刷新
    function server(){
        connect.server({
            port:"3333",        //端口
            root:"./dist",       //根目录
            livereload:true,    //自动刷新，需要给拷贝功能开启每次拷贝都刷新
        })
    }
    xports.server = server;
    //自动刷新需要同时开启服务器与自动拷贝，所以要使用批处理，两个都是异步，所以要使用异步的parallel
    exports.autoServer = parallel(server,autoCopy)
    ```
- 跨域插件
	- http-proxy-middleware
	- 是一个对象，有createProxyMiddleware属性，是一个函数，跨域时使用
    ```js
    //跨域服务器
    function crossServer(){
        connect.server({
            port:"3333",
            root:"./dist",
            livereload:true,
            middleware:function(connect, opt){
                return [
                    //跨域模块是一个对象，它的createProxyMiddleware属性是一个函数
                    proxy.createProxyMiddleware("/api",{//接受两个参数，1：前端请求跨域的标志；2：一个对象（配置信息）
                        target: 'https://wanandroid.com/wxarticle',    //代理的目标地址
                        changeOrigin:true,
                        pathRewrite:{    //路径重写规则
                            '^/api':''
                        }
                    })
                ]
            }
        })
    }
    exports.crossServer = crossServer;
    exports.autoCross = parallel(crossServer,autoCopy)
    ```
- 有先后顺序，先有服务器插件才有跨域

# sass
## 介绍
- 高效的css预编译语言
- 但是sass没有被任何浏览器支持，所以，sass在被投入项目使用之前一定要编译成css
- sass有ruby公司开发的，sass的文件是`.sass`后缀，这种文件最大的特点是不支持花括号和分号，对前端不友好
- 所以ruby公司开发了另一种写法，是`.scss`的后缀，这种文件全面支持css语法
- 市面上的搞高效的预编译语言还有less

## 如何将sass编译成css
- 编辑器的插件（vsCode）
- 在线编译：https://www.sassmeister.com/
- 借助前端自动化工具（gulp），配置sass转css的环境
	- gulp滋自身没编译sass的功能
	- 需要借助gulp的第三方插件：gulp-sass/gulp-sass-china
- 配置gulp中的sass编译功能
	- 引入：`const sass = require("gulp-sass")`
	- 定义编译功能
    ```js
    //配置sass转css
    function stc(){
        return src("./src/**/*.scss")
        .pipe(sass().on("error",sass.logError))//sass抛出错误事件，不会在自动保存时卡掉
        .pipe(dest("dist/project-sass"))
    }
    exports.stc = stc;
    ```
    - 为了编译方便、自动化，开启监听
    ```js
    //配置sass自动转css
    function autoStc(next){
        watch("./src/**/*.scss",stc)
        next()
    }
    exports.autoStc = autoStc;
    ```

## sass的语法
1. 注释
	- `"/* */"`：多行注释，会被sass编译位css
	- `"//"`：单行注释，不会被sass编译
2. 变量 
	- **单值变量**
		
     - `$`声明变量
        ```scss
        $color:green;
        .box{
        background-color: $color;
        }
	     ```
	- **多值变量**
		
   	- `$`声明变量
     - 变量内的值索引从1开始，使用nth方法遍历变量
        ```scss
        $color:red green yellow;
        .box1{
            color: nth($color,1);
        }
        .box2{
            color: nth($color,2);
        }
        .box3{
            color: nth($color,3);
	     }
	     ```
	- **list变量**
		
	- 相当于二维数组
   	
   	- `@each in `遍历数组是的方法
   - scss方法使用时必须加@
     
        ```scss
        $arr:(box,20,30,red)(cont,10,20,green)(msg,40,50,yellow)(top,60,20,pink)(bottom,10,30,#ccc);
        @each $s,$w,$h,$c in $arr {
            .#{$s}{
                width:$w;
                height:$h;
	             color:$c;
	         }
	     }
	     ```
   - **map变量**
   	
   	- 类似于对象
   	- `@each in`遍历map变量
     - @each 键，值 in map对象
        ```scss
        $obj:(h1:10,h2:20,h3:30);
        @each $k,$v in $obj {
            #{$k}{
                font-size:$v+px;
            }
        }
        ```
3. 嵌套
	- **选择器嵌套**
		
     - &:表示当前元素（相当于this）
        ```scss
        .list{
            background:#ccc;
            li{
                border:solid 1px black;
                &:hover{//&:表示当前元素（相当于this）
                    color:red
                }
            }
            .last{
                border:none
            }
        }
	     ```
	- **属性嵌套**
   	
     - 在**复合属性**内嵌套子属性，表示该属性的全写
        ```scss
        .box{
            border:{
                left:{//表示border-left
                    style:solid;
                    width:20px;
                    color:red;
                };
                right:{//表示border-right
                    style:solid;
                    width:20px;
                    color:yellow;
                };
                top:{//表示border-top
                    style:solid;
                    width:20px;
                    color:green;
                }
            }
        }
        ```
4. 混合代码块  mixin
	- 类似于函数，没有返回值
	- 是一个方法，需要加@
		- 定义代码块`@mixin css属性名($形参){css属性名:$形参}`
	- 使用`@include+css属性名(实参（css属性值）)` 调用代码块
    ```scss
    @mixin transform ($d) {
        -webkit-transform: $d;
        -moz-transform: $d;
        -ms-transform: $d;
        -o-transform: $d;
        transform: $d;
    }
    .box1{
        @include transform(rotate(90deg));
    }
    .box2{
        @include transform(translate(100px));
    }
    .box3{
        @include transform(scale(2));
    }
    ```
5. 函数
	- 定义函数：`@function 函数名(){@return }`
	- 调用函数：`函数名()`
    ```scss
    @function getNum(){
        @return 100;
    }
    .box1{
        width:getNum()+px;
    }
    .box2{
        height:getNum()+px;
    }
    ```
6. 运算
    ```
    1rem = html标签的font-size
    1em = 父元素的font-size
    1vw = 视口宽度/100
    1vh = 视口高度/100
    ```
	- 可以实现带单位的值的运算，最后*1rem/em就会转换成需要的单位
    ```scss
    //rem
    //默认16px
    //$fz:20px;
    html{
        font-size:$fz;
    }
    @function ptr($px){
        @return $px/$fz*1rem;
    }
    .box{
        width:ptr(200px);
        height:ptr(238px);
    }
    ```
7. 继承
	- 通过关键字`@extend`实现继承
    ```scss
    .box1{
        width:100px;height:100px;
        color: yellow;
    }
    .box2{
        @extend .box1;
        color:red
    }
    ```
8. 合并scss解析成一个css文件
	- @import "路径"
	- 使用关键字`@import`引入文件
	`@import "../style.scss";`
	
# 模块化开发
## 什么是模块化开发
- 是一种项目架构模式，这种架构模式让js代码重用性变得非常的高，让项目架构的一些复杂问题全部的以解决。例如多个script标签不会再出现，我们只需要用一个script标签引入就可以了
- 模块：独立的功能，复用性，耦合低
- 模块化：将整个项目功能化
- 一般来说，每个模块独立于一个js文件

## 为什么要用模块
- 为了减少系统耦合度、提高内聚，减少资源依赖
- 便于维护，功能复用性强
- 解决独立作用域，依赖管理，api暴露，安于加载于执行，安全合并等问题

## 如何实现模块化
- 实现方式多种多样
	- 独立的作用域，独立的功能
- 一个项目团队中，出现多种模块化的方式，不利于维护，代码合并，团队协作
- 需要统一模块化开发的方式：模块化规范

## 模块化规范
- CMD规范
	- 按需加载
	- 引入：sea.js
	- 断更
- AMD规范
	- 依赖前置
	- 引入：require.js
- nodeJs的模块化：commonJs
	- 引入：require()
	- 暴露：exports
- ES6的模块化
	- 引入：import from
	- 暴露：export
	- 只能在服务器环境运行

## AMD规范的使用
- 下载规范化文件
- 引入规范化文件
- 定义模块时***不执行***任何语句
- 使用：
	- 引入模块：require()/requirejs()
	- 参数1：数组，模块的路径
		- 参数2：函数
			- 函数的参数是模块暴露的接口
			- 参数1的数组有几个就有几个参数
	```js
  require(["./module2/mB","./module2/mA"],function(name,age){})
	```
	- 定义模块（暴露模块）：define()
	- 参数1：数组，模块依赖（可选）
		- 参数2：函数
			- 函数的return是暴露模块的途径
			- 返回一个对象
    ```js
    // 定义模块
    define(function(){
        // 模块的功能
        // 暴露模块入口
        return {
            // 上面封装的功能或变量
            age:666
        }
    });
    ```
- 注意：
	- 当main文件作为主模块，使用script标签的src引入时，main文件内部的小模块的路径起始点，以**引入了main文件的html文件**开始
	- 当使用AMD模块化规范时,script标签有一个自定义属性`data-main`用来引入main文件
		- main文件内部的小模块的路径起始点，以**当前main文件**开始
		- `"<script src="libs/require.js" data-main="js/main"></script>"`
	- baseUrl配置的路径起始点，**以引入的html文件为基准**
		- 在main文件中配置
		- require.config()
			- 参数：对像
		```js
		require.config({
			baseUrl:"module",//小模块所在的文件夹
			paths:{
				jq:"http://mat1.gtimg.com/libs/jquery2/2.2.0/jquery"
			}//简化文件名
		})
		require(["jq","mA","mB"],function(j,a,b){
            console.log("123123")
            console.log(a.a)
            a.show()
        })
		```
## ES6的模块化
- script标签必须加一个属性`type = "module"`
	
	- `"<script src="js/main.js" type="module"></script>"`
- 模块暴露时不可以直接暴露变量，可以采用花括号包裹的方式
	
	- export {a};
- 引入模块时变量也必须使用花括号包裹
	
	- `import {a} from "./module/m.js";`
- 模块内部修改不需要重新引入，可以拿到修改的值（动态绑定）
- `as`可以在暴露或引入时修改变量的名字
	
	```js
	var str = "as可以改名";
	export {str as s};
	```
	```js
	import {s as str} from "./module/m.js"
	```
- 可以同时暴露或接收多个参数
	```js
	var b = 20;
	var c = 30;
	function fn1(){	
		console.log(b+c);
	}
	export {b,c,fn1};
	```
	```js
	import {b,c,fn1} from "./module/m.js"
	```
- 当模块以default暴露时可以使用一个对象来接收
	- 此时这个对象身上有模块暴露的所有属性
	- 一个模块中只可以出现一个default
	- 使用default暴露的模块接收后可以修改值
	```js
	var b = 20;
	var c = 30;
	function fn1(){	
		console.log(b+c);
	}
	export {b,c,fn1};
	export default {b,c,fn1};
	```
	```js
	import obj from "./module/m.js"
	```
- 直接使用import+路劲可以引入立即执行的js文件（例：jqyrey）
	```js
	import "./module/jquery.2.2.4.js"
	console.log($)
	```
- ` * `：通配符，可以引入模块所有暴露的接口
	- 使用*时需要用as改名
    ```js
    var b1 = 22;
    var c1 = 33;
    var fn2 = function(){
        console.log(b1+c1);
    }
    export {b1,c1,fn2};
    ```
    ```js
    import * as obj1 from "./module/m.js"
    console.log(obj1)
    ```
- 注意：
	1. export和import关键字，只能存在于顶层作用域内，不能存在局部或块级作用域
	2. 在ES6的模块化中，所有语法自动处在严格模式下
	3. export是声明关键字，声明一个对外接口
	4. export声明的接口必须和模块内部的变量建立一一对应的关系
	5. export声明的接口与对应的值是动态绑定，即可以拿到模块内部实时修改的值
	6. export和import时，都可以使用as关键字，重命名接口
	7. 使用default关键字，设置默认接口，一个模块中只允许出现一次default
	8. import在使用接口时，必须将接口放在花括号内，除非export暴露接口时使用了default关键字
	9. import加载的接口是只读的，不允许被修改，如果接口是对象，可以修改属性
	10. import具有提升效果
	11. 由于import是静态执行，所以不能使用表达式和变量
	12. 当import后没有接收接口，会执行整个模块文件
	13. 可以使用通配符*加载整个模块的接口（需要配合as使用），返回一个模块对象
	14. ES6的模块化不是对象，而是通过export输出对应的代码，再通过import输入
	15. import加载模块的输入接口是静态加载，指定接口的情况下，只加载接口部分

# 版本管理

## 介绍
- 什么是版本管理
	- 版本，不仅仅限于代码文件，任何文件，任何资源，任何数据，都存在版本
- 版本管理的优势
	- 方便查看文件的发展趋势，历史的数据，历史数据的回退
- 怎么实现
	- 传统的文件管理：拷贝副本
		- 不安全，不方便管理
	- 交给计算机工具，管理源文件，数据流
		- 安全，节省空间，方便管理
- 管理方式的方式
	- **集中式**版本的管理（SVN）：所有的版本信息，都储存在当前计算机内，可以按需选择是否上传到服务器
	- **分布式**版本管理（git）：每个客户端的版本信息，都存储在当前计算机内，可以按需选择是否上传到服务器
- 工具的使用方式
	- SVN：下一标题（SVN的使用）
	- git：下一标题（git的使用）
- ***版本管理工具的概念***
	- 工作区：正在编写文件的空间
		👇add
	- 暂存区：队列，等待上传文件所在的区域
		👇commit
	- 版本库：记录当前版本，产生一个版本库和对应的版本描述

## SVN的使用
1. 下载，安装
2. 通过右键菜单中绑定的SVN选项，实现svn操作
3. 接入svn服务器：
	- 本地：安装SVN的服务器工具，创建SVN服务器，创建独立的项目
		- 安装软件->打开软件->创建项目->设置项目名称->得到服务器地址（注意是否对外地址）->将项目地址发给要连接服务器的使用者
	- 在线：找到第三方在线仓库网站，注册账号，创建项目
4. 打开要被版本管理工具管理的项目的根目录
5. 使用`checkout`命令接入服务器
	- 会利用右键菜单的选项，判断当前项目的管理状态
	- 没有`checkout`表示，已经建立连接了
6. 开始工作...
7. 将新文件，使用 `add` 命令，先添加到暂存区
	- 利用右键菜单的选项，判断当前文件的状态
	- 有`commit`表示，文件已经在暂存区了
8. 使用 `commit` 命令，将暂存区中的文件上传到版本库
	- 利用右键菜单的选项，判断当前文件的状态
	- 有`update`表示，文件已经在版本库了
9. 正常开发项目，重复6，7，8...
10. 版本回退
	- `updata to revision+版本号`
11. 如果出现上传失败，代码冲突
	- 两个用户修改了同一处代码
	- 线下沟通解决
		- 保留要保留的代码
		- 删除要删除的代码
	- 删除代码的那一方要先更新
	- 保留代码的那一方重新上传
	- 删除代码的那一方要再更新

## git的使用
1. 下载，安装 - 右键菜单会多出git的选项（按需重启电脑）
2. 打开要被版本管理工具管理像木的根目录
3. 右键菜单选择：gti Bash，检查当前路径是否指定文件夹
	- 路径不对的话，使用`cd`切换路径
4. 初始化git项目：`git init`
5. 配置全局用户信息
	- `git config --global user.name "${用户名}"`
	- `git config --global user.email "${邮箱地址}"`
6. 开始工作...
	- 查看状态：`git status`（查看暂存区状态）
7. 将新文件用 `git add` 命令线添加到暂存区
	- `git add .`
	- `git add *`
	- `git add -A`
	- `git add --all`
	- 以上都是将工作区所有文件上传到暂存区
8. 使用 `git commit` 命令，将暂存区的所有文件上传到版本库
	- `git commit -m "这里是版本日志"`
9. 正常开发项目，重复7，8，9...
10. 查看版本日志：`git log`
	- 如果版本日志数据过多，导致被折叠显示，可以使用上下箭头显示折叠信息，使用`q`退出折叠
11. 查看操作日志：`git reflog`
12. 版本回退：`git reset --hard 版本号`
13. 上传到git仓库
	- 建立连接：`git remote add origin 仓库地址`
	- 推送版本：`git push -u origin master(分支)`
14. 输入用户名密码
15. 只有第一次上传需要建立连接，以后只需要`git push`即可
16. 刷新在线仓库可拿到版本文件和信息
17. 从仓库下载到本地
	- 完整的克隆整个项目：`git clone 仓库地址`
	- 拉取线上版本与本地版本合并：`git pull[origin][master]`
		- 中括号代表可以省略
18. 分支（branch）
	- 什么式分支？副本、备份
	- 原则上来说，每个开发者，每个功能，都因该在一个新的分支上进行，而不要执黑在项目上进行操作
	- 默认情况下，整个项目是一个分支：主分支（master）
		- 创建一个子分支（拷贝主分支）`git branch 分支名字`
		- 干活...
		- 选择分支`git checkout 分支名字`
		- 合并到主分支`git merge 主分支`（一般需要先选择主分支，然后将其他分支合并到主分支）
		- 删除子分支 `git branch -d 分支名字`
19. 标签（标志，书签，tag）
	- 存在的意义，参考现实生活中的书签
	- 需要在连接仓库的情况下才可以创建标签
	- git tag                  查看标签
    - git tag name             创建标签
    - git push origin name     上传标签
    - git tag -d name          删除标签



## git常用命令
- `git config --global user.name "${用户名}"`- 设置全局用户名
- `git config --global user.email "${邮箱地址}"`- 设置全局邮箱
- `git init`- 初始化git，生成.git文件
- `git add .`- 添加工作区所有到暂存区
- `git commit -m "这里是版本日志"`- 将暂存区所有上传到版本库
- `git log`- 查看版本日志
- `git diff ` - 查看工作区与暂存区区别
- `git status`- 查看暂存取状态
- `git reflog`- 查看操作日志
- `git reset --hard 版本号`- 版本回退
- `git remote add origin 仓库地址`- 与仓库建立连接
- `git push -u origin master(分支)`- 上传到云端仓库
- `git clone 仓库地址`- 下载所有项目文件到本地
- `git pull[origin][master]`- 更新本地版本库与仓库一致
- `git branch`- 查看分支
- `git branch 分支名字`- 创建新分支
- `git checkout 分支名字`- 选择分支
-  `git merge name`合并分支（一般需要先选择主分支，然后将其他分支合并到主分支）


- 查看差别
    - git diff                  工作区和暂存区的差别
    - git diff --cached         暂存区和版本库的差别
    - gif diff HEAD             工作区和版本库的差别


- 添加到暂存区
    - git add .
    - git add *
    - git add --all
    - git add -A


- 查看日志
    - git log --oneline
    - git log -n


- 版本回退
    - git reset --hard HEAD^
    - git reset --hard HEAD~n
    - git reset --hrad 版本号


- 撤销
    - git checkout -- 文件名    撤销工作区修改

    - git reset HEAD 文件名
    - git checkout -- 文件名    撤销暂存区修改


- 远程仓库
    - git remote add 连接别名 连接地址
    - git remote -v
    - git remote remove 连接别名


- 标签操作（需要在连接仓库的前提下）
    - git tag                  查看标签
    - git tag name             创建标签
    - git push origin name     上传标签
    - git tag -d name          删除标签


- 分支操作
    - git branch               查看分支
    - git branch -r            查看远程分支
    - git branch -a            查看所有分支
    - git branch name          创建分支
    - git checkout name        选择分支
    - git branch -b name       创建并切换分支
    - git merge name           合并分支（一般需要先选择主分支，然后将其他分支合并到主分支）
    - git branch -d name       删除分支

- 忽略指定文件夹或文件
	- .gitignore文件内，写明要忽略的文件夹或文件



## ***SVN和git的区别*
- SVN的存储需要依赖一个服务器，而git所有的东西是放在线上的。节约成本，省时省力。
- git 是分布式的，svn 是集中式。
- git 按照源数据的方式存储内容，svn 是按照文件的形式存储
- git 和 svn 中的分支不同。
- git 没有全局版本号，svn 有。
- git 内容的完整性优于 svn。






