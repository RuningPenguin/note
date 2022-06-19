# 网页布局

## 怪异盒模型
**（IE盒模型）**
| 属性 | 值 | 计算方式 |
| :--: | :--: | :--: |
| border-sizing | border-box(怪异盒) | 总宽度=width（包含border和padding） |
| border-sizing | content-box(标准盒 默认) | 总宽度=width |


## [弹性盒(flex)](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
**元素为flex时 vertical-align / clear / float（无作用）**

::: tip 
控制子元素在父元素内的排列方式<br/>
​display: flex;<br/>
​display: inline-flex;<br/>
​弹性盒内的内容水平垂直居中<br/>
​父元素: display: flex;<br/>
​子元素: margin: auto;<br/>
​弹性盒的子元素也叫灵活元素，如果灵活元素是内联元素的话也可以设置宽高<br/>
:::

### 弹性盒父元素的属性
<table>
  <tr>
    <th>属性</th>
    <th>值</th>
    <th>说明</th>
  </tr>
  <tbody>
    <tr>
      <th rowspan="4">flex-direction<br/>定义主轴方向</th>
      <td>row	</td>
      <td>水平方向，在主轴顶端显示，排列效果类似左浮动</td>
    </tr>
    <tr>
      <td>row-reverse	</td>
      <td>水平方向，在主轴上的底端显示排列效果类似右浮动</td>
    </tr>
    <tr>
      <td>column</td>
      <td>垂直方向，在主轴的顶端显示，从上往下排列</td>
    </tr>
    <tr>
      <td>column-reverse</td>
      <td>垂直方向，在主轴底端显示，从下往上排列</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="4">flex-wrap<br/>定义灵活元素换行</th>
      <td>nowrap	</td>
      <td>挤压内容，不换行（默认）</td>
    </tr>
    <tr>
      <td>wrap	</td>
      <td>自动换行，如父元素有高度会自动有距离</td>
    </tr>
    <tr>
      <td>wrap-reverse</td>
      <td>自动换行，内容反转，也有距离</td>
    </tr>
    <tr>
      <th>flex-flow：row	nowrap（默认值）</th>
      <th>主轴方向和换行的简写</th>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="6">justify-content<br/>设置主轴的对齐方式</th>
      <td>flex-start	</td>
      <td>主轴顶端对齐</td>
    </tr>
    <tr>
      <td>flex-end	</td>
      <td>主轴底端对齐</td>
    </tr>
    <tr>
      <td>center</td>
      <td>主轴居中</td>
    </tr>
    <tr>
      <td>space-evenly</td>
      <td>所有盒子平分距离</td>
    </tr>
    <tr>
      <td>space-around</td>
      <td>每个盒子左右距离一样</td>
    </tr>
    <tr>
      <td>space-between</td>
      <td>两端对齐，中间距离平</td>
    </tr>
  </tbody>
  
  <tbody>
    <tr>
      <th rowspan="5">align-items<br/>设置侧轴对齐方向</th>
      <td>flex-start	</td>
      <td>侧轴顶端对齐</td>
    </tr>
    <tr>
      <td>flex-end	</td>
      <td>侧轴底部对齐</td>
    </tr>
    <tr>
      <td>center</td>
      <td>侧轴居中</td>
    </tr>
    <tr>
      <td>stretch</td>
      <td>拉伸，拉伸方向不能设置高度，或宽度</td>
    </tr>
    <tr>
      <td>baseline</td>
      <td>基线对齐（内容对齐，侧轴是y轴才有效果）</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="7">align-content<br/>设置多行侧轴对齐方式</th>
      <td>flex-start	</td>
      <td>取消行间距，侧轴顶部对齐</td>
    </tr>
    <tr>
      <td>flex-end	</td>
      <td>取消行间距，侧轴底部对齐</td>
    </tr>
    <tr>
      <td>center</td>
      <td>取消行间距，侧轴居中</td>
    </tr>
    <tr>
      <td>stretch</td>
      <td>拉伸</td>
    </tr>
    <tr>
      <td>space-around</td>
      <td>平分行间距（上下一样）</td>
    </tr>
    <tr>
      <td>space-between</td>
      <td>两端对齐，中间自动平分</td>
    </tr>
    <tr>
      <td>space-evenly</td>
      <td>所有行间距都一样</td>
    </tr>
  </tbody>
</table>



### 弹性盒的子元素的属性
**对灵活元素单独设置的属性**

<table>
  <tr>
    <th>属性</th>
    <th>值</th>
    <th>说明</th>
  </tr>
  <tbody>
    <tr>
      <th>order<br/>设置内容的排列顺序</th>
      <td><b>n</b>: 数字	</td>
      <td>值越大越往后，可以负值，默认0</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="5">align-self<br/>设置单独灵活元素的侧轴</th>
      <td>flex-start</td>
      <td>单独灵活元素的侧轴顶端对齐</td>
    </tr>
    <tr>
      <td>flex-end</td>
      <td>单独灵活元素的侧轴底端对齐</td>
    </tr>
    <tr>
      <td>center</td>
      <td>单独灵活元素的侧轴居中</td>
    </tr>
    <tr>
      <td>stretch</td>
      <td>单独灵活元素的内容拉伸</td>
    </tr>
    <tr>
      <td>auto</td>
      <td>继承父元素的align-items值</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="4">flex<br/>分配灵活元素的空间</th>
      <td><b>flex: flex-grow flex-shrink flex-basis;</b> 复合属性</td>
      <td>默认值	flex: 0 1 auto;<br/>flex: 1; => flex: 1 1 0%;<br/>flex: auto; => flex: 1 1 auto;<br/>flex: none; => flex: 0 0 auto;</td>
    </tr>
    <tr>
      <td>flex-grow</td>
      <td>拉伸（X轴拉伸宽，Y轴拉伸高）<br/>【注】灵活元素的宽高不能大于父元素，需要有剩余宽高，默认值0		</td>
    </tr>
    <tr>
      <td>flex-shrink</td>
      <td>收缩 flex-shrink: 0;（不收缩）<br/>【注】灵活元素的宽高必须大与父元素, 默认值1 / auto</td>
    </tr>
    <tr>
      <td>flex-basis</td>
      <td>重新分配灵活元素的宽或高（px / % / auto）.br.>	默认值auto，auto是灵活元素的本身宽高</td>
    </tr>
  </tbody>

</table>


## [网格布局(grid)](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

::: tip
声明布局格式为网格布局
display:grid
:::

### 网格布局父元素的属性
<table>
  <tr>
    <th>属性</th>
    <th>值</th>
    <th>说明</th>
  </tr>
  <tbody>
    <tr>
      <th><a href="#grid-template-columns">grid-template-rows<br/>划分行(必须的)</a></th>
      <td>	1：固定的数值   100px   100px   100px<br/>2：百分比<br/>3：功能函数 & 关键字<br/> repeat() 功能函数
			fr关键字(列宽片段)
			minmax() 功能函数
			auto 关键字  自动填充           	</td>
      <td>属性值（根据值的个数确定行数）</td>
    </tr>
    <tr>
      <th><a href="#grid-template-columns">grid-template-columns<br/>划分列(必须的)</a></th>
      <td>	1：固定的数值   100px   100px   100px<br/>2：百分比<br/>3：功能函数 & 关键字<br/> repeat() 功能函数
			fr关键字(列宽片段)
			minmax() 功能函数
			auto 关键字  自动填充           	</td>
      <td>属性值（根据值的个数确定列数）</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th>grid-row-gap<br/>行间距</th>
      <td><b>n</b>数字 单位(px)</td>
      <td>行间距</td>
    </tr>
    <tr>
      <th>grid-column-gap<br/>列间距</th>
      <td><b>n</b>数字 单位(px)</td>
      <td>列间距</td>
    </tr>
    <tr>
      <th></th>
      <th>grid-gap:行间距 列间距 <br/>复合写法</th>
      <td><b>n</b>数字 单位(px)</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th><a href="#grid-template-areas">grid-template-areas<br/>定义内容区域划分</a></th>
      <td><b> "a1 a1 a1" <br/>"a2 a2 a3"<br/>"a2 a2 a3"</b></td>
      <td> 子元素通过<b>grid-area: a1</b>使用</td>
    </tr>
    <tr>
      <th>grid-column-gap<br/>列间距</th>
      <td><b>n</b>数字 单位(px)</td>
      <td>列间距</td>
    </tr>
    <tr>
      <th></th>
      <th>grid-gap:行间距 列间距 <br/>复合写法</th>
      <td><b>n</b>数字 单位(px)</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th rowspan="5">justify-items/align-items<br/>水平对齐/垂直对齐</th>
      <td>start</td>
      <td>对齐单元格的起始边缘</td>
    </tr>
    <tr>
      <td>end</td>
      <td>对齐单元格的结束边缘</td>
    </tr>
    <tr>
      <td>center</td>
      <td>单元格内部居中</td>
    </tr>
    <tr>
      <td>stretch</td>
      <td>拉伸，占满单元格的整个宽度（默认值）</td>
    </tr>
     <tr>
      <th>place-items: 垂直  水平</th>
      <td>复合写法</td>
    </tr>
  </tbody>


</table>


#### grid-template-columns
**划分行和列`grid-template-columns/grid-template-rows`**
- 属性值（根据值的个数确定列数）:
  1. 固定的数值   100px   100px   100px
  2. 百分比             33.33% 33.33%  33.33%
  3. 功能函数 & 关键字
      - repeat() 功能函数
      - fr关键字(列宽片段)
      - minmax() 功能函数
      - auto 关键字  自动填充




#### grid-template-areas
- 父元素
  - grid-template-areas: 
    - "a1 a1 a1" 
    - "a2 a2 a3"
    - "a2 a2 a3"
- 子元素 (使用)
  - grid-area : a1


### 网格布局子元素的属性
**设置单独内容的位置和占位**
<table>
  <tr>
    <th>属性</th>
    <th>值</th>
    <th>说明</th>
  </tr>
  <tbody>
    <tr>
      <th>grid-area</th>
      <td>父元素的<b>grid-template-areas</b>的一个值</td>
      <td>指定项目放在哪一个区域</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th>grid-column-start</th>
      <td><b>n</b>网格线序号</td>
      <td>左边框所在的垂直网格线</td>
    </tr>
    <tr>
      <th>grid-column-end</th>
      <td><b>n</b>网格线序号</td>
      <td>右边框所在的垂直网格线</td>
    </tr>
    <tr>
      <th></th>
      <th>grid-column: 起始  结束</th>
      <td>grid-column-start/grid-column-end 的合并简写形式</td>
    </tr>
  </tbody>

  <tbody>
    <tr>
      <th>grid-row-start</th>
      <td><b>n</b>网格线序号</td>
      <td>上边框所在的水平网格线</td>
    </tr>
    <tr>
      <th>grid-row-end</th>
      <td><b>n</b>网格线序号</td>
      <td>下边框所在的水平网格线</td>
    </tr>
    <tr>
      <th></th>
      <th>grid-row: 起始  结束</th>
      <td>grid-row-start/grid-row-end 的合并简写形式</td>
    </tr>
  </tbody>
</table>



​					