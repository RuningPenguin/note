# node基础
::: tip
**node 是一个 基于 chromeV8 解析引擎的 javascript 运行时环境**
- 其实就是专门解析运行 JS 代码的软件
- 浏览器之所以能解析 js 文件，是因为浏览器有一个 `解析引擎`
- 解析引擎
- V8引擎：c++搭建（谷歌开源）
- 浏览器： DOM BOM ECMAScript
- node: ECMAScript, I/O, SQL
- 实际上 node 就是用 JS 这个语言来写后端
- JS 文件
- 一个 js 文件是没有区分的
- 当你实用 node 运行一个js文件
- 命令行中 `node xxx.js` 的时候
- 就是一段后端 js 代码
- 当你实用 html 文件引入一个 js 文件的时候
- 这个 js 文件就是一段前端代码
:::

## 运行方式
::: tip 
**没有BOM（window），没有DOM（document）**
:::

1. 直接在 cmd 窗口写一个指令
- **$ node**
- 直接打开 node 这个软件
- 你可以直接书写 JS 代码了
- 当你执行完毕这个指令以后，你当前的命令函就相当于是"浏览器的控制台"
- **关闭node**
- 按两次 ctrl + c / v
2. 把 JS 代码书写在一个 .js 后缀的文件里面
- 在命令行使用 node 软件去执行这个 js 文件
注意：没有BOM（window），没有DOM（document）

## 语法
1. 基础语法
- 全面支持ECMAScript6（除了ES6的模块化）
- **没有BOM(window)，没有DOM(document)**
- 事件
	- 不是人机交互行为事件
	- 服务端的事件：数据、加载、请求...
2. 特点语法
- <a href="#模块化">模块化</a>

## 模块化
1. <a href="内置模块">内置模块</a>
- 安装 Node 的时候，就自带的一些 node 写好的 JS 文件

2. 自定义模块
- 自己写一个JS文件，当做一个模块使用
- 每一个 JS 文件是一个独特的内容
- 我们使用导入导出的语法来实现页面之间数据的互相通讯
- 导出语法：在 JS 文件里书写向 `module.exports` 这个对象内添加成员
```js
// 我在自己文件里面定义一些内容
var num = 100
var str = 'hello world'
var fn = function () {
console.log('我是 export.js 文件里面的函数')
}

// 我们只要向这个 exports 对象中添加成员就可以
// 因为每一个文件默认导出的就是这个 exports 对象
module.exports.num = num
module.exports.fn = fn
console.log('export.js 文件内的打印', module.exports)
```

- 导入语法：在 JS 文件里使用 `require()` 在参数位置书写要导入的 JS 文件
```js
// 我是一个文件, 我要导入 export.js 文件
// 使用它里面的内容

// require() 时每一个 JS 文件里面自带的方法
// 专门用来导出一个 JS 文件使用
// 语法: require(要导入的 JS 文件)
// 返回值: 你导入的 JS 文件里面的 module.exports
const moduleA = require('./export.js')
console.log('---------------------')
console.log('import.js 文件内的打印', moduleA)
console.log(moduleA.num)
moduleA.fn()
```

3. 第三方模块
- 别人写好的，下载下来使用的一个 JS 文件

## 内置模块
### fs
::: tip
- fs 是 node 里面专门操作文件和文件夹的模块
- 里面封装的各种方法，都是用来操作文件和文件夹的
:::

1. 使用 fs
- 因为是内置模块，不需要我们进行导出
- 直接在需要的位置进行**导入**就可以了
  - `require('fs');`

2. 方法
- **读取文件**
  - `fs.readFile("文件路径","utf-8",(err,data)=>{})` **异步**
    - 参数1：要读取的文件路径
    - 参数2：字符编码（可选，默认buffer流）/ 'utf-8' 或者 'utf8'
    - 参数3：函数，该函数可以接受两个参数
- 参数1：err，请求失败时的错误信息
- 参数2：data，请求到的数据
```js
fs.readFile('./abc.txt', 'utf8', function (err, data) {
// 当这个函数执行的时候, 表示读取已经完成了
console.log('读取完成了')
console.log('err', err)
console.log('data', data)
})
```
  - `fs.readFileSync("文件路径","utf-8")` **同步**
    - 参数1：要读取的文件路径
    - 参数2：字符编码（可选，默认buffer流）/ 'utf-8' 或者 'utf8'
    - 返回值
- 如果读取成功，就是读取到的文件内容
- 如果读取失败，那么程序直接报错
```js
const res = fs.readFileSync('./abc123.txt', 'utf8')
console.log(res)    
```        

- **写入文件**
  - `fs.writeFile("文件路径",str,(err)=>{})` **异步**
    - 参数1：要写入的文件路径的地址
    - 参数2：要写入的文件的内容
    - 参数3：函数，该函数接收一个参数
- 参数：err，写入失败的错误信息
::: tip
- 如果文件存在，那么直接向里面写入
- 如果文件不存在，那么她会创建这个文件，向里面写入
- 不管写什么，都是完全覆盖式的写入
**不管是不是要使用回调函数，都会写一个函数占位置**
:::
```js
fs.writeFile('./abc.txt', 'hello world', () => console.log('写入完成'))
```

  - `fs.writeFileSync("文件路径",str)` **同步**
  - 规则基本同上
    - 参数1：要写入的文件路径的地址
    - 参数2：要写入的文件的内容
    - 返回值为undefined 
```js
fs.writeFileSync('./abc.txt', '你好 世界')
```

::: tip
- **appendFile()**
- 给文件里面的内容添加，而不是完全覆盖式
:::

### http
- 服务器模块，开启web服务器
	- 引入：`const http = require("http")`
	- 开启：`http.createServer((req,res)=>{}).listen("3000","localhost",()=>{})`
	- 使用：
		- 开启服务器：`createServer((req,res)=>{})`
			- 参数：函数，该函数可接受两个参数
				- 参数1：`req`，请求，前端到后台的信息
				- 参数2：`res`，响应，后台到前端的信息
			- 返回值是一个一个对象
		- 监听服务器：`listen("3000","localhost",()=>{})`
			- 开启服务器的返回值的方法（可以连缀）
			- 参数1：端口号
			- 参数2：地址（可选，默认localhost）
			- 参数3：函数，服务器开启成功执行的代码（可选）
		- 方法：
			- 前端请求的地址：`req.url`
			- 给前端发送的数据：`res.write()`
			- 结束当前请求：`res.end()`  必须写在最后
```js
// 1. 导入这个模块
const http = require('http')

// 2. createServer()
const server = http.createServer(function () {
// 只要前端有请求进来, 就会触发这个函数
console.log('有请求进来进')

// 当你前端的请求进来的时候, 我们就会执行这个函数
// 根据不同的请求来触发不同的效果
})

// 3. 监听一个端口号
server.listen(8080, () => console.log('server running at port 8080!'))
```

### url
- url模块，解析url，将url字符解析成对象
	- 引入：`const url = require("url")`
	- 使用：
		- `const urlObj = url.parse(req.url,ture)`
			- 参数1：要解析的url
			- 参数2：布尔值，是否将解析后的query转成对象
			- 返回值时一个解析后的对象

**返回值的属性**
|属性|含义|例子|
|-|-|-|
|protocol|协议| http |
|slashes|双斜杠|true |
|auth|作者|null|
|host|服务器+端口|'localhost:8002'|
|port|端口| '8002' |
|hostname|服务器|'localhost'|
|hash|锚点（哈希）|'#title'|
|search|数据|'?username=sdfsdf&content=234234'|
|query|除了?的数据|'username=sdfsdf&content=234234'|
|pathname|文件路径|/aaa'|
|path|地址+信息|'/aaa?username=sdfsdf&content=234234'|
|href|完整地址|'http://localhost:8002/aaa?username=sdfsdf&content=234234#title'|

### querystring
- 解析查询数据
	- 引入：`const querystring = require("querystring")`
	- 使用：
		- querystring.parse(数据)
		- 将数据转成对象
			- 参数：要转换的数据

## npm
::: tip
- node的下载工具
- 所有需要的 JS 相关的第三方，都可以直接在 npm 来下载
- 安装 node 的时候就安装完成了
:::

- npm 的检测
  - 打开命令行窗口
  - 输入指令 $ npm --version
  - 看到版本号就表示安装成功了

- **npm 的使用**
- 查看版本号：`npm -v`
- 生成package.json(项目的配置信息)：npm init

- 下载模块：`npm install` 模块名（npm i 模块名）
  - 指定版本号: `npm install jQuery@版本号`
  - 下载到全局：`-g`
  - 下载到上线环境（运行依赖，项目依赖）：`-S`
  - 下载到开发环境（开发依赖）：`-D`
- 卸载模块：`npm uninstall` 模块名（npm uni 模块名）
  - 安装到哪个位置就卸载对应位置的模块

- **npm 清楚缓存**
  - 软清除
    - 清除下载记录
    - 打开命令行，随便哪个目录
    - 输入指令 `npm cache clear -f`
    - 会清楚你的下载记录
  - 强力清楚
    - 打开我的电脑
    - c盘
    - users / 用户
    - 找到你电脑的名字那个文件夹
    - appData 的文件夹
      - 这个文件夹可能是个隐藏的文件夹
    - roaming 文件夹
    - 找到 npm-cache 文件夹，直接删除就行了

## 利用node跨域
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
