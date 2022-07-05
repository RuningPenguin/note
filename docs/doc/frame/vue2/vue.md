# VUE (2.X)

[官网](https://cn.vuejs.org)

::: tip
**封装**通常指一小部分通用业务逻辑，多个封装形成一个模块或者文件，多个模块或者文件就发展成为**库**或者**框架**，而**插件**是为库或者框架发布后做后期补充，可以有官网或者第三方提供的，有点外挂的意思，有时候一个模块就是一个文件，有时候一个文件里面有多个模块，把不同的文件按类别放置到不同的目录里，这个目录叫做**包**，框架改变了编码思想，库只是个工具你用或者不用不会影响你的编码思想
:::

## 前端MVC

对js分离，js业务如今比较繁杂

| 目录          | 分类      | 举例                           | 复用 |
| ------------- | --------- | ------------------------------ | ---- |
| model/xx.js   | 数据(M)   | ajax/jsonp/数据解析            | √    |
| view/xx.js    | 视图(V)   | 展示数据、创建元素，变色，运动 | √    |
| control/xx.js | 控制层(C) | 串业务,事件驱动                | ×    |

```js
//M
function readBaidu(str,callback){..拿着需求str,求数据，调用回调带数据出去.}
//V
function writeLi(data,callback){...拿着数据写页面}
//C
window.onload=function(){
  oBtn.onclick=function(){
    readBaidu('xxx',function(res){
      writeLi(res);
      winObj.close()
    })
  }
}
```

::: tip
**VUE是MVVM**，M----V----VM，M数据，V视图, VM是负责M与V相互通信
:::


## vue的使用
vue的使用，简单理解，new出来一个Vue的实例，传一堆配置参数，控制一片html

```html
<script src="vue"></script>
<body>
  <div id="app">
    要被控制的html{{key}}
  </div>
</body>
<script>
	let vm = new Vue({
    el:'#app'  //要控制的那片html代码
    data:{key:value}//数据  M
  })
</script>
```

::: tip data
初始化数据位置，元数据，是vue实例的一个实例属性，所接受的数据类型，number/string/boolean/array/json/undefined/null
:::

### 数据绑定

**插值表达式**

`{{ 数据名 }}`	mustache语法   声明式渲染

**指令**

`v-text="数据名"`

`v-html="数据"`	非转义输出(渲染html)

**属性**

`v-bind:html属性="数据"`	属性值动态化

`:html属性="数据"`  简写   

`v-bind:[属性名]="数据"`	属性名动态化

### 列表渲染

把数据指定到一些dom中去渲染，推荐操作的数据类型：变量数组、对象、字符、数字

```html
<li v-for="值 in 数据">{{值}}</li>
<li v-for="值 of 数据">{{值}}</li>
<li v-for="(值,索引) in 数组">{{值}}/{{索引}}</li>
<li v-for="(对象,索引) in/of 数组">{{对象.key}}/{{索引}}</li>
<li v-for="(值,键) in 对象">
<li v-for="(数,索引) in 数字">
<li v-for="(单字符,索引) in 字符">
```

> 空数组，null，undefined不循环



