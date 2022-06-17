

# HTML基础

## 介绍
  html：（Hyper Text Markup Language）超文本标记语言 
  xhtml：（EXtensible HyperText Markup Language）可扩展的超文本标记语言 
  html5：html的第5 个版本 

## web的组成 
|  组成  |                 | 说明              |
| :---: | ----------------| ---------------- |
| 结构   | html/xhtml      |(W3C规范)   标记语言|
| 样式   | css             |(W3C规范)     样式表|
| 行为   | javascript(js)  |(ECAM规范)   脚本语言|


## 项目的命名规范 
::: tip 建议
  字母、数字、下划线组成 <br>
  不能使用中文，特殊字符和空格 <br>
  开头最好小写 <br>
:::



## html基本语法 
  **用尖括号 `<>` 包裹的英文单词叫做标记**


## 标记分为两种 
单标记(空标记)和双标记
  - 单标记: `<标记名 属性="属性值" 属性="属性值"/> `
  - 双标记: `<标记名 属性="属性值"></标记名> `


## html的基本结构 
```html
<!-- 声明文档类型为html --> 
<!doctype html> 
<!-- 标记语言 --> 
<html> 
  <!-- 网页的头部 --> 
  <head> 
    <!-- 设置编码类型为utf-8 --> 
    <meta charest="utf-8"> 
    <title>网页名字</title> 
  </head> 

  <!-- 网页的身体 --> 
  <body> 
  </body> 

</html> 
```

