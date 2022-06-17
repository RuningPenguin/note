<template><div><h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1>
<h2 id="类型选择符" tabindex="-1"><a class="header-anchor" href="#类型选择符" aria-hidden="true">#</a> 类型选择符</h2>
<p>标记选择符/html选择器</p>
<p>选择标签名</p>
<h2 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h2>
<p>1、语义化，词必达意</p>
<p>2、字母、数字、下划线和-组成，开头不能是数字，不能中文、空格、特殊字符</p>
<p>3、不使用关键字命名</p>
<h2 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器(#)</h2>
<p>id名只可以使用一次，不可以重复使用</p>
<p>id用#表示</p>
<div id="box"></div> 
#{ 
<p>}</p>
<h2 id="class选择器" tabindex="-1"><a class="header-anchor" href="#class选择器" aria-hidden="true">#</a> class选择器(.)</h2>
<p>可以重复使用</p>
<p>【注】class名可以设置多个（用空格隔开）相同属性不同值，权重冲突，后面的权重值高</p>
<p>class用.表示</p>
<div class="box size"></div> 
.{ 
<p>}</p>
<h2 id="通配符选择器" tabindex="-1"><a class="header-anchor" href="#通配符选择器" aria-hidden="true">#</a> *通配符选择器</h2>
<p>网页的所有内容（一般用来清除内容自带边距）</p>
<p>*{margin:&quot;0&quot; padding:&quot;0&quot;}</p>
<h2 id="群组选择器" tabindex="-1"><a class="header-anchor" href="#群组选择器" aria-hidden="true">#</a> 群组选择器</h2>
<p>用逗号链接不同的内容</p>
<p>.nav,#box{}</p>
<p>可以设置不同元素的相同样式</p>
<h2 id="包含选择器" tabindex="-1"><a class="header-anchor" href="#包含选择器" aria-hidden="true">#</a> 包含选择器</h2>
<h3 id="父子选择器-隔开" tabindex="-1"><a class="header-anchor" href="#父子选择器-隔开" aria-hidden="true">#</a> 父子选择器（&gt;隔开）</h3>
<p>父元素&gt;子元素</p>
<h3 id="后代选择器-空格隔开" tabindex="-1"><a class="header-anchor" href="#后代选择器-空格隔开" aria-hidden="true">#</a> 后代选择器（空格隔开）</h3>
<p>只要是包含关系都可以</p>
<h2 id="伪类选择器-a" tabindex="-1"><a class="header-anchor" href="#伪类选择器-a" aria-hidden="true">#</a> 伪类选择器（a:）</h2>
<p>【注】想要a标签4个格式显示都正常必须按照顺序写</p>
<p>a:link--&gt;a:visited--&gt;a:hover--&gt;a:active</p>
<p>:link             超链接初始状态                         （一般超链接使用）</p>
<p>:visited        超链接访问后状态                      （ 一般超链接使用）</p>
<p>:hover         鼠标移入状态</p>
<p>:active         鼠标点击状态</p>
<h1 id="权重" tabindex="-1"><a class="header-anchor" href="#权重" aria-hidden="true">#</a> 权重</h1>
<p>对同一个元素设置相同的属性，但属性值不同，谁的权重值高设置谁。</p>
<h2 id="样式表的权重" tabindex="-1"><a class="header-anchor" href="#样式表的权重" aria-hidden="true">#</a> 样式表的权重</h2>
<p>内联样式表最高</p>
<p>内部与外部和顺序有关，谁在下面谁的权重值高！</p>
<h2 id="选择器的权重" tabindex="-1"><a class="header-anchor" href="#选择器的权重" aria-hidden="true">#</a> 选择器的权重</h2>
<h3 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h3>
<p>（0000）</p>
<p>内联样式表  1000 <strong>&gt;</strong> id  0100 <strong>&gt;</strong> class（伪类）  0010 <strong>&gt;</strong> 标签名  0001 <strong>&gt;</strong> *  0000</p>
<h3 id="包含选择器-1" tabindex="-1"><a class="header-anchor" href="#包含选择器-1" aria-hidden="true">#</a> 包含选择器</h3>
<p>包含选择器的权重是计算所有选择器权重之和</p>
<h3 id="群组选择器-1" tabindex="-1"><a class="header-anchor" href="#群组选择器-1" aria-hidden="true">#</a> 群组选择器</h3>
<p>无权重高低之分</p>
<h1 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h1>
<h2 id="字体大小" tabindex="-1"><a class="header-anchor" href="#字体大小" aria-hidden="true">#</a> 字体大小</h2>
<p>font-size</p>
<p>浏览器默认大小是16px</p>
<p>px</p>
<p>pt</p>
<p>em（如果自己没有font-size，以父元素的为准，如果自己有，以自己的为准）</p>
<h2 id="字体颜色" tabindex="-1"><a class="header-anchor" href="#字体颜色" aria-hidden="true">#</a> 字体颜色</h2>
<p>color</p>
<p>单词</p>
<p>16进制</p>
<p>rgb(,,);</p>
<p>rgba(,,,);(透明度 a的值0-1)</p>
<h2 id="字体粗细" tabindex="-1"><a class="header-anchor" href="#字体粗细" aria-hidden="true">#</a> 字体粗细</h2>
<p>font-weight</p>
<p>bold    粗</p>
<p>boleer    更粗</p>
<p>normal    取消加粗（默认）</p>
<p>数字100--900（500是正常粗细）</p>
<h2 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h2>
<p>font-family</p>
<p>默认宋体或新宋体  中文和多个英文单词用</p>
<h2 id="字体倾斜" tabindex="-1"><a class="header-anchor" href="#字体倾斜" aria-hidden="true">#</a> 字体倾斜</h2>
<p>font-style</p>
<p>normal    取消倾斜（默认）</p>
<p>italic    倾斜</p>
<p>oblique    更倾斜</p>
<h2 id="字体大小写" tabindex="-1"><a class="header-anchor" href="#字体大小写" aria-hidden="true">#</a> 字体大小写</h2>
<p>font-variant</p>
<p>小型大写字母</p>
<p>small-caps</p>
<p>text-transform</p>
<p>none    默认</p>
<p>uppercase    大写</p>
<p>lowercase    小写</p>
<p>capitalize    首字母大写</p>
<h2 id="font的简写" tabindex="-1"><a class="header-anchor" href="#font的简写" aria-hidden="true">#</a> font的简写</h2>
<p>加粗    倾斜    小型大写字母    大小    字体样式（后面的两位固定）</p>
<h2 id="水平对齐-只对块元素起作用" tabindex="-1"><a class="header-anchor" href="#水平对齐-只对块元素起作用" aria-hidden="true">#</a> 水平对齐（只对块元素起作用）</h2>
<p>设置的是块元素的内容</p>
<p>text-align</p>
<p>left    左对齐</p>
<p>right  右对齐</p>
<p>center  水平居中</p>
<p>justify   两端对齐（一般字母和中文混合时使用）</p>
<h2 id="行高" tabindex="-1"><a class="header-anchor" href="#行高" aria-hidden="true">#</a> 行高</h2>
<p>line-height</p>
<p>有3种用法</p>
<p>1、单行文本垂直居中（行高等于盒子的高度）</p>
<p>2、清除自带的行间距（行高等于字体的大小）</p>
<p>3、可以设置多行内容的行间距(行高和字体大小同时测量)</p>
<h2 id="线条修饰" tabindex="-1"><a class="header-anchor" href="#线条修饰" aria-hidden="true">#</a> 线条修饰</h2>
<p>text-decoration</p>
<p>none    没有修饰</p>
<p>underline  添加下划线</p>
<p>overline    添加上划线</p>
<p>line-through  添加删除线</p>
<h2 id="首行缩进" tabindex="-1"><a class="header-anchor" href="#首行缩进" aria-hidden="true">#</a> 首行缩进</h2>
<p>text-indent</p>
<p>（首行缩进可以设置负值）</p>
<h2 id="字间距" tabindex="-1"><a class="header-anchor" href="#字间距" aria-hidden="true">#</a> 字间距</h2>
<p>letter-spacing</p>
<h2 id="词间距-英文空格的内容" tabindex="-1"><a class="header-anchor" href="#词间距-英文空格的内容" aria-hidden="true">#</a> 词间距（英文空格的内容）</h2>
<p>letter-spacing</p>
<h1 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h1>
<p>改变块元素的排列方式，让内容变成水平排列</p>
<p>【注】1、浮动元素会脱离文档流，不占位，盒子会重叠，内容不重叠</p>
<p>2、如果想要内容都水平排列，需要所有的盒子都浮动</p>
<p>3、浮动的宽大于 父元素显示不下，就会掉下来第二行显示</p>
<p><strong>浮动的不占位只会在同级之间产生（只往下影响，不影响上面的）</strong></p>
<h2 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h2>
<p>float</p>
<p>left    左浮动</p>
<p>right  右浮动</p>
<p>none  不浮动</p>
<h2 id="清除浮动-往上清除" tabindex="-1"><a class="header-anchor" href="#清除浮动-往上清除" aria-hidden="true">#</a> 清除浮动（往上清除）</h2>
<p>clear</p>
<p>left    清除左浮动</p>
<p>right   清除右浮动</p>
<p>both   清除所有浮动</p>
<h1 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h1>
<p>4条边框</p>
<p>border：粗细 样式 颜色；</p>
<p>单一的边框需要设置方向（3个值）</p>
<p>border-top</p>
<p>border-bottom</p>
<p>border-left</p>
<p>border-right</p>
<h2 id="取消边框" tabindex="-1"><a class="header-anchor" href="#取消边框" aria-hidden="true">#</a> 取消边框</h2>
<p>border：none/0；</p>
<p>border-top</p>
<p>border-bottom</p>
<p>border-left</p>
<p>border-right</p>
<h2 id="边框粗细" tabindex="-1"><a class="header-anchor" href="#边框粗细" aria-hidden="true">#</a> 边框粗细</h2>
<p>border-width</p>
<p>1个值  四个方向</p>
<p>2个值  上下    左右</p>
<p>3个值   上   作业   下</p>
<p>4个值   上   右   下   左</p>
<h2 id="边框样式" tabindex="-1"><a class="header-anchor" href="#边框样式" aria-hidden="true">#</a> 边框样式</h2>
<p>border-style（也可以4个值，同上）</p>
<p>solid    实线</p>
<p>dotted   点线</p>
<p>dashed  虚线</p>
<p>double   双线</p>
<h2 id="边框颜色" tabindex="-1"><a class="header-anchor" href="#边框颜色" aria-hidden="true">#</a> 边框颜色</h2>
<p>border-color</p>
<h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1>
<h2 id="复合属性" tabindex="-1"><a class="header-anchor" href="#复合属性" aria-hidden="true">#</a> 复合属性</h2>
<p>background：颜色  图片  平铺   固定 位置 /大小（大小和位置必须在一块用/隔开）</p>
<h2 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h2>
<p>background-color</p>
<h2 id="背景图片" tabindex="-1"><a class="header-anchor" href="#背景图片" aria-hidden="true">#</a> 背景图片</h2>
<p>background-image：url（图片路径）；</p>
<h2 id="背景图的平铺方式" tabindex="-1"><a class="header-anchor" href="#背景图的平铺方式" aria-hidden="true">#</a> 背景图的平铺方式</h2>
<p>background-repeat</p>
<p>repeat    铺满  （默认）</p>
<p>repeat-x   x轴铺满</p>
<p>repeat-y   y轴铺满</p>
<p>no-repeat   不平铺</p>
<h2 id="背景图片的位置" tabindex="-1"><a class="header-anchor" href="#背景图片的位置" aria-hidden="true">#</a> 背景图片的位置</h2>
<p><strong>background-position：（水平  垂直）</strong></p>
<h3 id="单词" tabindex="-1"><a class="header-anchor" href="#单词" aria-hidden="true">#</a> 单词：</h3>
<p>默认值（left，top）</p>
<p>水平</p>
<p>left</p>
<p>right</p>
<p>center</p>
<p>垂直</p>
<p>top</p>
<p>bottom</p>
<p>center</p>
<h3 id="px-相对于盒子" tabindex="-1"><a class="header-anchor" href="#px-相对于盒子" aria-hidden="true">#</a> px（相对于盒子）</h3>
<p>默认值（0，0）两个值</p>
<p>水平位置（正右，负左）</p>
<p>垂直位置（正下，负上）</p>
<h3 id="相对于图片" tabindex="-1"><a class="header-anchor" href="#相对于图片" aria-hidden="true">#</a> %（相对于图片）</h3>
<p>两个值</p>
<p>图片宽度的%   图片高度的%</p>
<h2 id="背景图片固定" tabindex="-1"><a class="header-anchor" href="#背景图片固定" aria-hidden="true">#</a> 背景图片固定</h2>
<p>background-attachment：fixed；</p>
<p>（默认值scroll）不固定</p>
<h2 id="背景图片的大小" tabindex="-1"><a class="header-anchor" href="#背景图片的大小" aria-hidden="true">#</a> 背景图片的大小</h2>
<p>background-size：</p>
<p>px/%</p>
<h1 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出" aria-hidden="true">#</a> 文本溢出</h1>
<p>设置单行文本溢出4部</p>
<p>1.定义显示的范围（width）</p>
<p>2.强制内容一行显示</p>
<p>white-space：</p>
<p>nowrap（强制内容不换行，只识别一个空格）</p>
<p>pre（强制内容不换行，可识别多个空格）</p>
<p>3.设置超出内容隐藏</p>
<p>overflow：hidden</p>
<p>4.设置隐藏文本转换成省略号</p>
<p>text-overflow：ellipsis</p>
<h2 id="设置空白空间" tabindex="-1"><a class="header-anchor" href="#设置空白空间" aria-hidden="true">#</a> 设置空白空间</h2>
<p>white-space</p>
<p>normal   默认效果（什么都没有）</p>
<p>nowrap 设置内容不换行，多个空格识别一个</p>
<p>pre    设置内容不换行，识别多个空格</p>
<p>pre-line  换行，多个空格识别一个，但是可以识别换行</p>
<p>inherit  继承父元素的white-space</p>
<h2 id="设置内容超出" tabindex="-1"><a class="header-anchor" href="#设置内容超出" aria-hidden="true">#</a> 设置内容超出</h2>
<p>overflow：</p>
<p>visible  默认值</p>
<p>hidden  隐藏超出内容</p>
<p>scroll   内容会有滚动条（没有内容也有滚动条组件）</p>
<p>auto    超出才有滚动条</p>
<p>inherit  继承父元素的overflow</p>
<p>设置单向滚动条</p>
<p>overflow-x（默认aotu）</p>
<p>overflow-y</p>
<h2 id="设置隐藏内容变成省略号" tabindex="-1"><a class="header-anchor" href="#设置隐藏内容变成省略号" aria-hidden="true">#</a> 设置隐藏内容变成省略号</h2>
<p>text-overflow：</p>
<p>ellipsis    变成省略号</p>
<p>clip    剪裁超出部分</p>
<h2 id="设置多行文本溢出隐藏" tabindex="-1"><a class="header-anchor" href="#设置多行文本溢出隐藏" aria-hidden="true">#</a> 设置多行文本溢出隐藏</h2>
<p>display: -webkit-box;           把内容转换成弹性盒子（老版本弹性盒）</p>
<p>-webkit-box-orient: vertical;   设置内容排列方式，垂直排列</p>
<p>-webkit-line-clamp: 3;          设置内容隐藏的行数</p>
<p>overflow: hidden;              把超出的内容隐藏</p>
<h1 id="元素类型" tabindex="-1"><a class="header-anchor" href="#元素类型" aria-hidden="true">#</a> 元素类型</h1>
<h2 id="块元素-div-p-h1-h6-ol-ul-li-dt-dd-form-hr" tabindex="-1"><a class="header-anchor" href="#块元素-div-p-h1-h6-ol-ul-li-dt-dd-form-hr" aria-hidden="true">#</a> 块元素（div/p/h1~h6/ol/ul/li/dt/dd/form/hr）</h2>
<p>1、可以自动换行、且独占一行</p>
<p>2、可以设置宽高</p>
<p>3、块元素可以包裹块元素和内联元素（p，h1~h6，dt特殊，嵌套内联）</p>
<p>4、块元素可以设置4个方向的padding和margin</p>
<h2 id="内联元素-b-strong-i-em-s-a-span-br" tabindex="-1"><a class="header-anchor" href="#内联元素-b-strong-i-em-s-a-span-br" aria-hidden="true">#</a> 内联元素（b/strong/i/em/s/a/span/br）</h2>
<p>1、一行显示多个，识别不了宽高</p>
<p>2、宽高由内容撑开</p>
<p>3、内联只能嵌套内联</p>
<p>4、内联只能设置左右的padding和margin</p>
<h3 id="行内块元素-属于内联img-input" tabindex="-1"><a class="header-anchor" href="#行内块元素-属于内联img-input" aria-hidden="true">#</a> 行内块元素（属于内联img/input）</h3>
<p>1、可以设置宽高</p>
<p>2、水平显示</p>
<p>3、行内块元素只能嵌套内联元素</p>
<p>4、可以设置4个方向的margin和padding</p>
<h2 id="元素类型的转换-display" tabindex="-1"><a class="header-anchor" href="#元素类型的转换-display" aria-hidden="true">#</a> 元素类型的转换（display）</h2>
<p>display：</p>
<p>block（块元素）</p>
<p>inline（内联元素）</p>
<p>inline-block（行内块元素）</p>
<p>none（元素消失，不占位）</p>
<p>list-item（li的display值）</p>
<h2 id="元素类型受浮动的影响" tabindex="-1"><a class="header-anchor" href="#元素类型受浮动的影响" aria-hidden="true">#</a> 元素类型受浮动的影响</h2>
<h3 id="块元素" tabindex="-1"><a class="header-anchor" href="#块元素" aria-hidden="true">#</a> 块元素</h3>
<p>不设置宽高的话，宽是父元素的宽，浮动以后宽度由内容撑开</p>
<h3 id="内联元素" tabindex="-1"><a class="header-anchor" href="#内联元素" aria-hidden="true">#</a> 内联元素</h3>
<p>浮动后1.可以设置宽高</p>
<p>2.可以设置4个方向的padding和margin</p>
<p>3.空格的间隙也能取消</p>
<h1 id="设置内容垂居中" tabindex="-1"><a class="header-anchor" href="#设置内容垂居中" aria-hidden="true">#</a> 设置内容垂居中</h1>
<p>vertical-align：</p>
<p>top</p>
<p>bottom</p>
<p>middle</p>
<p>（只能设置行内块元素，必须有参照物）</p>
<p>设置垂直居中的方法</p>
<p>（一）</p>
<p>1.设置元素为行内块元素</p>
<p>2.设置参照物</p>
<p>img（vertical-align：middle）</p>
<p>参照物</p>
<p>span{</p>
<p>display：inline-block；</p>
<p>vertical-align：middle；</p>
<p>height：100%；</p>
<p>}</p>
<p>（二）</p>
<p>把内容转换成表格类型，设置内容占满父元素，vaetical-align也有效果</p>
<p>父元素</p>
<p>转换元素类型display:table;</p>
<p>子元素</p>
<p>转换元素类型display：table-cell；</p>
<p>垂直居中 vertical-align：middle；</p>
<h1 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h1>
<p>四个方向（top/right/bottom/left）</p>
<p>一个层级关系(z-index)</p>
<h2 id="相对定位position-relative" tabindex="-1"><a class="header-anchor" href="#相对定位position-relative" aria-hidden="true">#</a> 相对定位position：relative</h2>
<p>1，元素占位</p>
<p>2，位置移动是相对于自己的原位置</p>
<p>3，相对定位可以使用定位触发5个属性</p>
<h2 id="绝对定位position-absolute" tabindex="-1"><a class="header-anchor" href="#绝对定位position-absolute" aria-hidden="true">#</a> 绝对定位position：absolute</h2>
<p>1，绝对定位不占位</p>
<p>2，绝对定位的位置先找有定位的父元素（包含块）</p>
<p>没有定位父元素找浏览器窗口为参照物</p>
<p>3，绝对定位可以使用定位触发5个属性</p>
<h2 id="固定定位position-fixed" tabindex="-1"><a class="header-anchor" href="#固定定位position-fixed" aria-hidden="true">#</a> 固定定位position:fixed</h2>
<p>1,不占位</p>
<p>2，始终以浏览器窗口为参照移动位置</p>
<p>3，可以触发5个属性</p>
<h2 id="粘性定位position-sticky" tabindex="-1"><a class="header-anchor" href="#粘性定位position-sticky" aria-hidden="true">#</a> 粘性定位position:sticky</h2>
<p>1，不移动滚动条，内容占位，移动滚动条，内容不占位（固定类型）</p>
<p>2，默认不移动位置，划过内容，位置相对于浏览器</p>
<p>3，必须设置移动位置（top/right/bottom/left）</p>
<h2 id="取消定位position-static" tabindex="-1"><a class="header-anchor" href="#取消定位position-static" aria-hidden="true">#</a> 取消定位position：static</h2>
<p>设置static后，元素变成普通元素</p>
<h1 id="宽高自适应" tabindex="-1"><a class="header-anchor" href="#宽高自适应" aria-hidden="true">#</a> 宽高自适应</h1>
<h2 id="宽度自适应" tabindex="-1"><a class="header-anchor" href="#宽度自适应" aria-hidden="true">#</a> 宽度自适应</h2>
<p>1，不设置宽度（元素类型不受不占位影响，不脱离文档流）</p>
<p>2，设置宽为100%（元素类型受不占位影响，浮动，固定定位，绝对定位）</p>
<p>cac（）函数  可以动态计算素质值</p>
<h2 id="高度自适应" tabindex="-1"><a class="header-anchor" href="#高度自适应" aria-hidden="true">#</a> 高度自适应</h2>
<p>不设置高（height：auto；）</p>
<p>最小高</p>
<p>min-height：；</p>
<p>在内容不够最小高的时候识别最小高，内容超过最小高时高度自动被撑大</p>
<p>【注】IE5/6不识别min-height</p>
<p><em>height（过滤器（</em>），只有IE5/6识别）</p>
<h2 id="高度塌陷" tabindex="-1"><a class="header-anchor" href="#高度塌陷" aria-hidden="true">#</a> 高度塌陷</h2>
<p>父元素不设置高，或者设置最小高，高度由内容撑开，一旦内容浮动，父元素识别不了内容的高度，就会出现高度塌陷</p>
<p>解决方法</p>
<p>1，高度塌陷父元素设置overflow：hidden；</p>
<p>overflow可以触发BFC（一个独立渲染的区域，浮动元素也参与高度计算）</p>
<p>2，给浮动元素下加一个空盒子，清除浮动，把父元素撑开</p>
<p>3，万能清楚法</p>
<p>给塌陷的父元素添加一个：：after content必须有设置元素类型block，清除浮动</p>
<p>.class::after</p>
<p>{</p>
<p>content:&quot;&quot; ；</p>
<p>display:block;</p>
<p>clear:both;</p>
<p>}</p>
<h1 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h1>
<p>​	BFC是一个独立渲染的区域，规定块元素的布局规则（只有块元素才能参与）</p>
<h2 id="布局规则" tabindex="-1"><a class="header-anchor" href="#布局规则" aria-hidden="true">#</a> 布局规则</h2>
<p>1，块元素独占一行</p>
<p>2，同一个BFC，两个块元素上下margin会重叠</p>
<p>3，盒子左边的边框会和外边距接触</p>
<p>4，浮动区域和BFC区域不会重叠（自适应两栏布局）</p>
<p>5，每一个BFC区域都是独立的，相互之间不会影响</p>
<p>6，BFC计算高度时，浮动区域也参于高度计算</p>
<h2 id="触发条件" tabindex="-1"><a class="header-anchor" href="#触发条件" aria-hidden="true">#</a> 触发条件</h2>
<p>1，html（根元素）</p>
<p>2，浮动：left	right</p>
<p>3，定位：absolute（绝对定位）fixed（固定定位）</p>
<p>4，display：inline-block / table-cell / table-caption / flex（弹性盒）/ inline-flex（老版弹性盒）</p>
<p>5，overflow：hidden / scroll / auto</p>
<h2 id="bfc解决的问题" tabindex="-1"><a class="header-anchor" href="#bfc解决的问题" aria-hidden="true">#</a> BFC解决的问题</h2>
<p>1，浮动产生的高度塌陷（6规则，BFC计算高度时，浮动区域也参与计算）</p>
<p>2，自适应两栏布局（4规则，浮动区域和BFC区域不会重叠）</p>
<p>3，BFC解决margin的重叠问题（5规则，每一个BFC区域都是独立的，相互之间不影响）</p>
</div></template>
