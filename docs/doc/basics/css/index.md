#### 	设置内容隐藏

### 					占位隐藏

​					1，visibility：hidden；（占位隐藏）

​					2，opacity：0；

### 					完全隐藏（不占位）

​					display：none；

### 		透明度的区别

​					rgba（背景透明，内容不受影响）

​					opacity（背景内容一起透明）


# 媒体查询

## 作用

​			使网页适应多种分辨率

## 格式

​			@media 设备 and （询问表达式） {

​						css语句

​			}

​			@media all and (min-width:1100px) {

​						body{

​								backgroun:#ccc;

​								}

​				}

## 关键字

​			all		所有设备

​			screen		pc、移动端

## 定义横竖屏

​		orientation:portrait					竖屏

​		orientation:landscape				横屏
