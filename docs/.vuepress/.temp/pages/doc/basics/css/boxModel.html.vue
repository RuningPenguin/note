<template><div><h1 id="网页布局" tabindex="-1"><a class="header-anchor" href="#网页布局" aria-hidden="true">#</a> 网页布局</h1>
<h1 id="怪异盒模型" tabindex="-1"><a class="header-anchor" href="#怪异盒模型" aria-hidden="true">#</a> 怪异盒模型</h1>
<p>（IE盒模型）</p>
<p>盒子转换	border-sizing：</p>
<p>​									border-box		怪异盒</p>
<p>​									content-box		标准盒（默认）</p>
<p>​		计算方式	总宽度=width（包含border和padding）</p>
<h1 id="弹性盒" tabindex="-1"><a class="header-anchor" href="#弹性盒" aria-hidden="true">#</a> 弹性盒</h1>
<p>​	vertical-align / clear / float（无作用）</p>
<p>​	控制子元素在父元素内的排列方式</p>
<p>​		display：flex；</p>
<p>​		display：inline-flex；</p>
<p>​	弹性盒内的内容水平垂直居中</p>
<p>​		父元素：display：flex；</p>
<p>​		子元素：margin：auto；</p>
<p>​	弹性盒的子元素也叫灵活元素，如果灵活元素是内联元素的话也可以设置宽高</p>
<h2 id="弹性盒父元素的属性" tabindex="-1"><a class="header-anchor" href="#弹性盒父元素的属性" aria-hidden="true">#</a> 弹性盒父元素的属性</h2>
<h3 id="定义主轴方向" tabindex="-1"><a class="header-anchor" href="#定义主轴方向" aria-hidden="true">#</a> 定义主轴方向</h3>
<p>​	flex-direction:</p>
<p>​			x轴（顶端左边，低端右边）默认值</p>
<p>​						row						水平方向，在主轴顶端显示，排列效果类似左浮动</p>
<p>​						row-reverse			水平方向，在主轴上的底端显示排列效果类似右浮动</p>
<p>​			Y轴（顶端上，底端下）</p>
<p>​						column					垂直方向，在主轴的顶端显示，从上往下排列</p>
<p>​						column-reverse		垂直方向，在主轴底端显示，从下往上排列</p>
<h3 id="定义灵活元素换行" tabindex="-1"><a class="header-anchor" href="#定义灵活元素换行" aria-hidden="true">#</a> 定义灵活元素换行</h3>
<p>​		flex-wrap</p>
<p>​				nowrap		挤压内容，不换行（默认）</p>
<p>​				wrap			自动换行，如父元素有高度会自动有距离</p>
<p>​				wrap-reverse	自动换行，内容反转，也有距离</p>
<p>​		主轴方向和换行的简写</p>
<p>​				flex-flow：row	nowrap（默认值）</p>
<h3 id="设置主轴的对齐方式" tabindex="-1"><a class="header-anchor" href="#设置主轴的对齐方式" aria-hidden="true">#</a> 设置主轴的对齐方式</h3>
<p>​		justify-content：</p>
<p>​						flex-start			（主轴顶端对齐）</p>
<p>​						flex-end				（主轴底端对齐）</p>
<p>​						center					主轴居中</p>
<p>​						space-evenly		所有盒子平分距离</p>
<p>​						space-around		每个盒子左右距离一样</p>
<p>​						space-between	两端对齐，中间距离平分</p>
<h3 id="设置侧轴对齐方向" tabindex="-1"><a class="header-anchor" href="#设置侧轴对齐方向" aria-hidden="true">#</a> 设置侧轴对齐方向</h3>
<p>​		align-items</p>
<p>​					flex-start					侧轴顶端对齐</p>
<p>​					flex-end					侧轴底部对齐</p>
<p>​					center						侧轴居中</p>
<p>​					strecth						拉伸，拉伸方向不能设置高度，或宽度</p>
<p>​					baseline						基线对齐（内容对齐，侧轴是y轴才有效果）</p>
<h3 id="设置多行侧轴对齐方式" tabindex="-1"><a class="header-anchor" href="#设置多行侧轴对齐方式" aria-hidden="true">#</a> 设置多行侧轴对齐方式</h3>
<p>​		align-content</p>
<p>​					flex-start					取消行间距，侧轴顶部对齐</p>
<p>​					flex-end					取消行间距，侧轴底部对齐</p>
<p>​					center						取消行间距，侧轴居中</p>
<p>​					stretch						拉伸</p>
<p>​					space-around			平分行间距（上下一样）</p>
<p>​					space-between			两端对齐，中间自动平分</p>
<p>​					space-evenly				所有行间距都一样</p>
<h1 id="弹性盒的子元素的属性" tabindex="-1"><a class="header-anchor" href="#弹性盒的子元素的属性" aria-hidden="true">#</a> 弹性盒的子元素的属性</h1>
<p>​	对灵活元素单独设置的属性</p>
<p>​			order	设置内容的排列顺序（值越大越往后，可以负值，默认0）</p>
<h2 id="设置单独灵活元素的侧轴" tabindex="-1"><a class="header-anchor" href="#设置单独灵活元素的侧轴" aria-hidden="true">#</a> 设置单独灵活元素的侧轴</h2>
<p>​			align-self</p>
<p>​						flex-start					单独灵活元素的侧轴顶端对齐</p>
<p>​						flex-end					单独灵活元素的侧轴底端对齐</p>
<p>​						center						单独灵活元素的侧轴居中</p>
<p>​						stretch						单独灵活元素的内容拉伸</p>
<p>​						auto							继承父元素的aling-items值</p>
<h2 id="分配灵活元素的空间-flex" tabindex="-1"><a class="header-anchor" href="#分配灵活元素的空间-flex" aria-hidden="true">#</a> 分配灵活元素的空间（flex）</h2>
<p>​		flex-grow		拉伸（X轴拉伸宽，Y轴拉伸高）</p>
<p>​						【注】灵活元素的宽高不能大于父元素，需要有剩余宽高，默认值0</p>
<p>​		flex-shrink		收缩</p>
<p>​						【注】灵活元素的宽高必须大与父元素，默认值1 / auto</p>
<p>​							flex-shrink：0；（不收缩）</p>
<p>​		flex-basis</p>
<p>​						重新分配灵活元素的宽或高（px / % / auto）</p>
<p>​							默认值auto，auto是灵活元素的本身宽高</p>
<p>复合属性flex：flex-grow拉伸、flex-shrink收缩、flex-basis；</p>
<p>默认值	flex：0 1 auto；</p>
<p>​		flex：1；	------》flex：1 1 0%；</p>
<p>​		flex：auto；		----------------》flex：1 1 auto；</p>
<p>​		flex：none；		--------------》flex：0 0 auto；</p>
<h2 id="形成grid布局" tabindex="-1"><a class="header-anchor" href="#形成grid布局" aria-hidden="true">#</a> 形成grid布局</h2>
<p>​    display:grid</p>
<p>划分行和列	
grid-template-columns:
grid-template-rows:	
属性值（根据值的个数确定列数）：
1：固定的数值   100px   100px   100px
2：百分比             33.33% 33.33%  33.33%
3：功能函数 &amp; 关键字
repeat() 功能函数
fr关键字(列宽片段)
minmax() 功能函数
auto 关键字  自动填充</p>
<h2 id="间距" tabindex="-1"><a class="header-anchor" href="#间距" aria-hidden="true">#</a> 间距</h2>
<p>​    行间距
​      grid-row-gap
​    列间距
​     grid-column-gap
​</p>
<pre><code> 复合写法grid-gap:
</code></pre>
<h2 id="定义内容区域划分" tabindex="-1"><a class="header-anchor" href="#定义内容区域划分" aria-hidden="true">#</a> 定义内容区域划分</h2>
<p>父元素
grid-template-areas:
&quot;a1 a1 a1&quot;
&quot;a2 a2 a3&quot;
&quot;a2 a2 a3&quot;</p>
<p>子元素
grid-area</p>
<p>设置内容水平对齐和垂直对齐
水平对齐
justify-items:<br>
start
end
center
stretch
垂直对齐
align-items
start
end
center
stretch</p>
<pre><code>    复合写法
        place-items： 垂直  水平 
</code></pre>
<h2 id="子元素" tabindex="-1"><a class="header-anchor" href="#子元素" aria-hidden="true">#</a> 子元素</h2>
<pre><code>设置单独内容的位置和占位
 
    grid-column-start属性：左边框所在的垂直网格线
    grid-column-end属性：右边框所在的垂直网格线
    grid-row-start属性：上边框所在的水平网格线
    grid-row-end属性：下边框所在的水平网格线


    简写
        grid-column: 起始  结束
        grid-row:    起始  结束
        grid-area:横纵横纵
</code></pre>
<p>​</p>
</div></template>
