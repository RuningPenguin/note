<!-- 
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
- 有先后顺序，先有服务器插件才有跨域 -->
