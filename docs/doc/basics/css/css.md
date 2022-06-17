

# css基础

## 语法（选择器和声明） 
::: tip 语法
  选择器{ 属性：值； 属性：值；} 
:::


## css创建方式（css样式表） 

### 内部样式表 
**在`<head>`内加style标签**
```html
<style> 
p { 
  color : blue ; 
} 
 </style>
```


### 外部样式表 
**创建css文件   link导入外部css文件** 
```html
<link  rel = "stylesheet"  href = "css/style.css" > 
```

### 外部导入样式表 
```html
<!-- 创建css文件  -->
<style> 
 @import  url ( css/style.css ); 
 </style> 
```


### 内联样式表 
**在标签内直接设置style**
```html
<p  style = "color:yellow" >
``` 

::: tip @import和link的区别 
  1、link是标签，@import是css提供的一种方式 <br>
  2、link同时加载html和css <br>
  3、@import先加载html后加载css <br>
  4、link的兼容性好，@import要IE5以上才能支持 <br>
  5、link可以支持js的dom，@import不支持<br>
:::

 




