
  ## gulp
  - 写一个项目
    - 项目源码的一个文件夹
      - xiaomi/
        - views / pages / html 文件夹 -- 存放 html 文件
        - css 文件夹  --  存放css文件(自己写的css)
        - js 文件夹  --  存放 js 文件(我自己写的js)
        - images / img / image 文件夹  --  存放图片
        - videos 文件夹  --  视频文件
        - audios 文件夹  --  音频文件
        - assets 文件夹  --  静态资源
        - 第三方文件
          - sass 文件夹  --  存放的都是 scss 文件
    - 当你开发完毕
      - 这个文件是**不能直接上线的**
        - 因为里面的 换行 和 空格 太多
        - es6 语法没有转换成 es5
        - css 有些应该添加前缀的，但是我们没有添加
        - 加入我们是用 sass 进行编写，需要自己执行一个 sass 工具编译
      - **gulp 就是来帮助我们吧代码压缩编译的**
        - 代码的压缩
        - 代码的编译
        - css 自动添加前缀
        - 文件修改名称
        - ...
      - 在整个过程中
        - 我们的源码文件夹，是用来进行开发的
        - 我们的最终使用 gulp 整理后出现的一个新的文件夹，是用来部署上线的，
        - 我们管这两个文件夹有自己的命名
          - **源码文件夹叫做 src/**
          - **管处理后的文件夹叫做 dist/**
          - 在**开发中**的代码叫作 **开发环境**
          - **打包上线以后**的代码叫做 **生产环境**
    - gulp 是一个什么东西 
      - 可以叫做 自动化打包构建工具
        - 打包：对代码进行压缩编译转码
        - 构建：对项目进行初始化构建过程
      - 目前市场上流行的打包构建工具
        - gulp
        - webpack(三阶段会讲)
    - gulp 的安装
      - 也是一个 JS 相关的工具(软件)
      - 可以使用 npm 进行安装
      - 指令 $ npm install --global gulp
        - 简写 $ npm i -g gulp
    - gulp 的检测
      - 输入指令 $ gulp --version
      - 注意：gulp 分成两个版本，gulp3 gulp4
        - gulp3 出现的版本号就是 gulp 3.x.x (@3.9.1)
        - gulp4 出现的版本号是 gulp-cli 版本 2.x.x
    - gulp 的卸载
      - 输入指令卸载 $ npm unistall --global gulp
        - 简写 $ npm un -g gulp
    - gulp 全局安装完毕以后
      - 我们可以在命令行使用 gulp xxx 的指令来进行项目打包了
      - 注意：**gulp 全局包就是给我买提供一个可以在命令行执行 gulp xxx 的指令的能力**


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






