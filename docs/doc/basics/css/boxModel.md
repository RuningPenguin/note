# 网页布局

# 怪异盒模型

（IE盒模型）

盒子转换	border-sizing：

​									border-box		怪异盒

​									content-box		标准盒（默认）

​		计算方式	总宽度=width（包含border和padding）

# 弹性盒

​	vertical-align / clear / float（无作用）

​	控制子元素在父元素内的排列方式

​		display：flex；

​		display：inline-flex；

​	弹性盒内的内容水平垂直居中

​		父元素：display：flex；

​		子元素：margin：auto；

​	弹性盒的子元素也叫灵活元素，如果灵活元素是内联元素的话也可以设置宽高

## 弹性盒父元素的属性

### 	定义主轴方向

​	flex-direction:	

​			x轴（顶端左边，低端右边）默认值

​						row						水平方向，在主轴顶端显示，排列效果类似左浮动

​						row-reverse			水平方向，在主轴上的底端显示排列效果类似右浮动

​			Y轴（顶端上，底端下）

​						column					垂直方向，在主轴的顶端显示，从上往下排列

​						column-reverse		垂直方向，在主轴底端显示，从下往上排列

### 	定义灵活元素换行

​		flex-wrap

​				nowrap		挤压内容，不换行（默认）

​				wrap			自动换行，如父元素有高度会自动有距离

​				wrap-reverse	自动换行，内容反转，也有距离

​		主轴方向和换行的简写

​				flex-flow：row	nowrap（默认值）

### 	设置主轴的对齐方式

​		justify-content：

​						flex-start			（主轴顶端对齐）

​						flex-end				（主轴底端对齐）

​						center					主轴居中

​						space-evenly		所有盒子平分距离

​						space-around		每个盒子左右距离一样

​						space-between	两端对齐，中间距离平分

### 	设置侧轴对齐方向

​		align-items

​					flex-start					侧轴顶端对齐

​					flex-end					侧轴底部对齐

​					center						侧轴居中

​					strecth						拉伸，拉伸方向不能设置高度，或宽度

​					baseline						基线对齐（内容对齐，侧轴是y轴才有效果）

### 	设置多行侧轴对齐方式

​		align-content

​					flex-start					取消行间距，侧轴顶部对齐

​					flex-end					取消行间距，侧轴底部对齐

​					center						取消行间距，侧轴居中

​					stretch						拉伸

​					space-around			平分行间距（上下一样）

​					space-between			两端对齐，中间自动平分

​					space-evenly				所有行间距都一样

# 弹性盒的子元素的属性

​	对灵活元素单独设置的属性

​			order	设置内容的排列顺序（值越大越往后，可以负值，默认0）

## 	设置单独灵活元素的侧轴

​			align-self

​						flex-start					单独灵活元素的侧轴顶端对齐

​						flex-end					单独灵活元素的侧轴底端对齐

​						center						单独灵活元素的侧轴居中

​						stretch						单独灵活元素的内容拉伸

​						auto							继承父元素的aling-items值

## 	分配灵活元素的空间（flex）

​		flex-grow		拉伸（X轴拉伸宽，Y轴拉伸高）

​						【注】灵活元素的宽高不能大于父元素，需要有剩余宽高，默认值0				

​		flex-shrink		收缩

​						【注】灵活元素的宽高必须大与父元素，默认值1 / auto

​							flex-shrink：0；（不收缩）

​		flex-basis		

​						重新分配灵活元素的宽或高（px / % / auto）

​							默认值auto，auto是灵活元素的本身宽高

复合属性flex：flex-grow拉伸、flex-shrink收缩、flex-basis；

默认值	flex：0 1 auto；

​		flex：1；	------》flex：1 1 0%；

​		flex：auto；		----------------》flex：1 1 auto；

​		flex：none；		--------------》flex：0 0 auto；	





## 形成grid布局

​    display:grid

划分行和列	
	grid-template-columns:
	grid-template-rows:	
	属性值（根据值的个数确定列数）：
		1：固定的数值   100px   100px   100px
		2：百分比             33.33% 33.33%  33.33%
		3：功能函数 & 关键字
			repeat() 功能函数
			fr关键字(列宽片段)
			minmax() 功能函数
			auto 关键字  自动填充

## 间距

​    行间距
​      grid-row-gap
​    列间距
​     grid-column-gap
​    

     复合写法grid-gap:

## 定义内容区域划分

   父元素
     grid-template-areas: 
                  "a1 a1 a1" 
                  "a2 a2 a3"
                  "a2 a2 a3"

   子元素 
      grid-area 


设置内容水平对齐和垂直对齐
        水平对齐
        justify-items:  
                    start
                    end
                    center
                    stretch
        垂直对齐
        align-items
                   start
                    end
                    center
                    stretch

        复合写法
            place-items： 垂直  水平 

## 子元素 

    设置单独内容的位置和占位
     
        grid-column-start属性：左边框所在的垂直网格线
        grid-column-end属性：右边框所在的垂直网格线
        grid-row-start属性：上边框所在的水平网格线
        grid-row-end属性：下边框所在的水平网格线


        简写
            grid-column: 起始  结束
            grid-row:    起始  结束
            grid-area:横纵横纵


​					