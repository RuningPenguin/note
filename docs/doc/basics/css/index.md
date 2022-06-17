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


# 图片整合

​	CSS Sprites / css精灵图 / 雪碧图

​	把网页里的小图片整合到大的背景图，通过背景插入的形式和核心属性background-position移动图片的位置，来显示部分图片的内容

​	好处:
​		减少图片对服务器的请求次数，可以提升网页的加载速度
​		也可以减少图片的体积


# 改变鼠标指针

## cursor:

​ pointer 小手

​ wait 加载

​ help 问号

​ text 文本输入光标

​ # 浏览器的前缀

​ IE -ms-

​ 谷歌和苹果 -webkit-

​ 火狐 -mzo-

​ 欧朋 -o-

## 书写方法

​ 优雅降级（从大到小）

​ div{

​ transition:all 1s；

​ -webkit-transition:all 1s；

​ -o-transition:all 1s；

​ -moz-transition:all 1s；

​ }

​ 渐进增强（从小到大）

​ div{

​ -webkit-transition:all 1s；

​ -moz-transition:all 1s;

​ -o-transition:all 1s；

​ transition:all 1s；

​ }