<template><div><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javascript</h1>
<p>a: 尖头函数、闭包</p>
<h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> JQuery</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></li>
<li>特点
<ul>
<li>jQuery是一个快速，小型且功能丰富的JavaScript库。通过易于使用的API（可在多种浏览器中使用），它使HTML文档的遍历和操作，事件处理，动画和Ajax等事情变得更加简单。兼具多功能性和可扩展性，jQuery改变了数百万人编写JavaScript的方式</li>
<li>写的更少，做的更多</li>
</ul>
</li>
</ul>
<h2 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h2>
<ul>
<li>原生DOM对象的方法不能与jq对象的方法混用
<ul>
<li>jq选择器返回的都是数组，但是可以在jq的方法中直接使用</li>
</ul>
</li>
<li>转换
<ul>
<li>原生转jq：$(&quot;ele&quot;)
<ul>
<li>将原生的DOM的对象传给jq，返回值就是转换结果</li>
</ul>
</li>
<li>jq转原生
<ul>
<li>通过索引解析数组：$(&quot;box&quot;)[0]</li>
<li>通过专属的方法get解析数组：$(&quot;box&quot;).get(0)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="css相关" tabindex="-1"><a class="header-anchor" href="#css相关" aria-hidden="true">#</a> css相关</h3>
<ul>
<li>$()/JQuery()
<ul>
<li>传字符参数</li>
</ul>
</li>
<li>$(&quot;#box&quot;)：id选择器（失明特征，只选择一个）</li>
<li>$(&quot;.box&quot;)：class选择器</li>
<li>$(&quot;div&quot;)：标签选择器</li>
<li>$(&quot;.box[a=abc]&quot;)：属性选择器</li>
<li>frist：第一个</li>
<li>last：最后一个</li>
<li>eq()：第几个（从0开始）</li>
<li>even：奇数</li>
<li>odd：偶数</li>
<li>not()：除了此条件</li>
<li>contains(txt)：内容包含txt的</li>
<li>empty：内容为空</li>
<li>hidden：隐藏的元素</li>
<li>visible：显示的元素</li>
<li>addClass：添加属性</li>
<li>removeClass：删除属性</li>
</ul>
<h3 id="jq特色" tabindex="-1"><a class="header-anchor" href="#jq特色" aria-hidden="true">#</a> jq特色</h3>
<ul>
<li>find：后代  相当于css的空格</li>
<li>children：子  相当于css的&gt;</li>
<li>next：下一个同级元素 	相当于css的+</li>
<li>nextAll：下面所有同级	相当于css的~</li>
<li>nextAllUnnitl：下面所有同级，参数为区间结束，不包括参数</li>
<li>prev：上一个同级元素</li>
<li>prevAll：上面所有</li>
<li>prevAllUnitl()：上面所有区间，参数为区间结束，不包括参数</li>
<li>has()：符合条件的后代元素</li>
<li>parent：单个父级元素</li>
<li>parents：所有父级元素</li>
<li>parentUnitl()：父级区间，参数为区间结束，不包括参数</li>
<li>siblings：除自己外所有的兄弟元素</li>
</ul>
<h2 id="jq的动画" tabindex="-1"><a class="header-anchor" href="#jq的动画" aria-hidden="true">#</a> jq的动画</h2>
<ul>
<li>
<p>内置动画</p>
<ul>
<li>左上角动画（参数1：动画时间，参数2：动画执行完毕的事件）
<ul>
<li>hide：隐藏
<ul>
<li>show：显示</li>
<li>toggle：隐藏/显示</li>
</ul>
</li>
</ul>
</li>
<li>上拉下拉（参数1：动画时间，参数2：动画执行完毕的事件）
<ul>
<li>slideUp：上拉隐藏</li>
<li>slideDown：下拉显示</li>
<li>slideToggle：上拉/下拉</li>
</ul>
</li>
<li>淡出淡入（参数1：动画时间，参数2：动画执行完毕的事件）
<ul>
<li>fadeOut：淡出隐藏</li>
<li>fadeIn：淡入显示</li>
<li>fadeToggle：淡出淡入</li>
</ul>
</li>
<li>透明度（参数1：动画时间，参数2：透明度，参数3：函数）</li>
</ul>
</li>
<li>
<p>自定义动画</p>
<ul>
<li>animate()
<ul>
<li>参数1：对象（需要设置的css属性，支持字符，数值，+=：原来的参数加上设置的参数）</li>
<li>参数2：毫秒数，可选</li>
<li>参数3：动画执行结束后，可选</li>
</ul>
</li>
</ul>
</li>
<li>
<p>动画的执行顺序</p>
<ul>
<li>jq中在一个动画结束后开启下一个动画的实现方法
<ul>
<li>回调函数</li>
<li>单独开启</li>
<li>连缀执行</li>
</ul>
</li>
<li><strong>jq中动画与动画时同步执行</strong></li>
<li><strong>jq中动画与其他方法是异步执行</strong></li>
<li><strong>queue</strong>
<ul>
<li>参数：函数</li>
<li>将此函数作为前一方法的回调函数</li>
</ul>
</li>
</ul>
</li>
<li>
<p>动画的停止和延迟</p>
<ul>
<li>停止：stop()
<ul>
<li>参数1：布尔值（等待中动画）
<ul>
<li>false：不清除列队（默认）</li>
<li>true：清除列队</li>
</ul>
</li>
<li>参数2：布尔值（当前动画）
<ul>
<li>false：停止当前（默认值）</li>
<li>true：直接到目标，神略动画过程</li>
</ul>
</li>
</ul>
</li>
<li>延迟：delay()
<ul>
<li>参数：要延迟的毫秒数</li>
</ul>
</li>
<li><strong>动画是同步执行，同步执行事件同时开启多个，会产生队列</strong></li>
<li>动画的队列
<ul>
<li>当前动画正在执行</li>
<li>后面还有等待的动画</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="jq的dom操作" tabindex="-1"><a class="header-anchor" href="#jq的dom操作" aria-hidden="true">#</a> jq的DOM操作</h2>
<h3 id="属性操作" tabindex="-1"><a class="header-anchor" href="#属性操作" aria-hidden="true">#</a> 属性操作</h3>
<h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4>
<ul>
<li>html：标签的内容，不包括标签   相当于innerHTML
<ul>
<li>无参数：获取内容</li>
<li>参数：字符<code v-pre>&lt;div&gt;</code>，加结束标签的话可以直接添加内容</li>
<li>可以解析标签</li>
</ul>
</li>
<li>text：标签内的文本信息    相当于innerTEXT
<ul>
<li>无参数：标签内的文本内容</li>
<li>参数：字符，要替换成的文本</li>
<li>不能解析标签</li>
</ul>
</li>
<li>val：表单的内容     相当于value
<ul>
<li>无参数：获取值</li>
<li>有参数：将参数内容赋值到表单的value</li>
</ul>
</li>
<li>removeClass：删除元素的class
<ul>
<li>只删除参数中的class，不全部删除</li>
</ul>
</li>
<li>addClass：添加class
<ul>
<li>在原有的基础上继续增加，不覆盖</li>
</ul>
</li>
<li>toggleClass：自动添加或删除
<ul>
<li>如果有参数的class属性就删除，没有就设置</li>
</ul>
</li>
<li>css：设置样式
<ul>
<li>参数：
<ul>
<li>一个字符：获取样式</li>
<li>一个数组：获取样式</li>
<li>两个字符：设置样式</li>
<li>一个对象：设置样式</li>
</ul>
</li>
</ul>
</li>
<li>attr：设置自定义属性
<ul>
<li>参数1：属性名</li>
<li>参数2：属性值</li>
<li>只有一个参数时，获取</li>
<li>支持一个对象，同时设置多个自定义参数</li>
</ul>
</li>
<li>removeAttr：删除自定义属性
<ul>
<li>参数：要删除的属性名</li>
</ul>
</li>
<li>each：遍历对象
<ul>
<li>$.each(obj,function(index,value){
console.log(index, value)
})</li>
</ul>
</li>
</ul>
<h4 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h4>
<ul>
<li>width：宽度
<ul>
<li>只包含width</li>
</ul>
</li>
<li>innerWidth：包含内边距的宽度
<ul>
<li>width+padding</li>
</ul>
</li>
<li>outerWidth：包含宽度，内边距，边框
<ul>
<li>border+width+padding</li>
</ul>
</li>
<li>offset：元素相对于浏览器的宽度
<ul>
<li>定位+margin</li>
<li>返回一个对象，包含top，left</li>
</ul>
</li>
<li>position：相对于父元素偏移的距离
<ul>
<li>只有定位</li>
<li>返回一个对象，包含top，left</li>
</ul>
</li>
<li>scrollTop：滚动条的值
<ul>
<li>无参数：获取</li>
<li>有参数：设置</li>
</ul>
</li>
<li>scrollWidth：滚动条的值
<ul>
<li>无参数：获取</li>
<li>有参数：设置</li>
</ul>
</li>
</ul>
<h4 id="元素的增删改查" tabindex="-1"><a class="header-anchor" href="#元素的增删改查" aria-hidden="true">#</a> 元素的增删改查</h4>
<ul>
<li>创建节点
<ul>
<li><code v-pre>$(&quot;&lt;p&gt;123&lt;p&gt;&quot;)</code></li>
<li>直接写</li>
</ul>
</li>
<li>append：插入元素内最后
<ul>
<li>$(&quot;.box&quot;).append(p)</li>
<li>把p插入到box</li>
</ul>
</li>
<li>appendTo:插入元素内最后
<ul>
<li>p.appendTo($(&quot;.box&quot;))</li>
<li>把p插入到box</li>
</ul>
</li>
<li>prepend：插入元素内部前</li>
<li>prependTo：插入元素内部前</li>
<li>after:插入指定元素后</li>
<li>before：插入指定元素前</li>
<li><strong>clone</strong>：复制元素
<ul>
<li>参数为true时复制元素的事件</li>
<li><code v-pre>$('body').append($('div').clone(true))</code></li>
<li>复制一个节点添加到 HTML</li>
</ul>
</li>
<li>remove：删除元素节点</li>
<li>empty：删除匹配的元素集合中所有的子节点</li>
<li>replaceWith：替换元素</li>
</ul>
<h2 id="jq的事件" tabindex="-1"><a class="header-anchor" href="#jq的事件" aria-hidden="true">#</a> jq的事件</h2>
<ul>
<li>jq的事件都是DOM2级事件绑定</li>
</ul>
<h3 id="常规绑定" tabindex="-1"><a class="header-anchor" href="#常规绑定" aria-hidden="true">#</a> 常规绑定</h3>
<ul>
<li>选择器.click(function(){})</li>
<li>原生的方法没有on</li>
<li>jq特有的ready事件
<ul>
<li>只加载结构，不加载资源</li>
<li><code v-pre>$(function(){})</code></li>
<li><code v-pre>$().ready(function(){})</code></li>
</ul>
</li>
</ul>
<h3 id="on绑定" tabindex="-1"><a class="header-anchor" href="#on绑定" aria-hidden="true">#</a> on绑定</h3>
<ul>
<li><code v-pre>$().on(&quot;click.a&quot;,&quot;li&quot;,function(){})</code>
<ul>
<li>参数1：事件，可以给后面的执行函数起名字，加载点（.）后</li>
<li>参数2：事件委托时加，要委托的元素，（可选）</li>
<li>参数3：事件处理函数</li>
</ul>
</li>
<li>用off删除on绑定的事件
<ul>
<li>$().off(&quot;click.a&quot;)</li>
</ul>
</li>
<li>on绑定事件委托
<ul>
<li><code v-pre>$().on(&quot;click.a&quot;,&quot;li&quot;,function(){})</code></li>
<li>this指向当前事件目标</li>
</ul>
</li>
</ul>
<h3 id="hover绑定" tabindex="-1"><a class="header-anchor" href="#hover绑定" aria-hidden="true">#</a> hover绑定</h3>
<ul>
<li>鼠标进入和离开</li>
<li><code v-pre>$().hover(function(){},function(){})</code>
<ul>
<li>参数1：鼠标进入事件</li>
<li>参数2：鼠标离开事件</li>
<li>封装的是mouseenter/mouseleave（没有事件冒泡）</li>
</ul>
</li>
</ul>
<h3 id="one绑定" tabindex="-1"><a class="header-anchor" href="#one绑定" aria-hidden="true">#</a> one绑定</h3>
<ul>
<li>绑定一个一次性事件</li>
</ul>
<h3 id="bind绑定" tabindex="-1"><a class="header-anchor" href="#bind绑定" aria-hidden="true">#</a> bind绑定</h3>
<ul>
<li>jq3删除，不可以事件委托</li>
<li><code v-pre>$().bind(&quot;click.a&quot;,function(){})</code>
<ul>
<li>参数1：事件，可以给后面的执行函数起名字，加载点（.）后</li>
<li>参数2：事件处理函数</li>
</ul>
</li>
<li>用unbind删除bind绑定的事件
<ul>
<li>$().unbind(&quot;click.a&quot;)</li>
</ul>
</li>
</ul>
<h3 id="模拟事件执行" tabindex="-1"><a class="header-anchor" href="#模拟事件执行" aria-hidden="true">#</a> 模拟事件执行</h3>
<ul>
<li><strong>trigger</strong>:模拟事件执行</li>
<li><strong>triggerHandler</strong>模拟事件执行，没有事件冒泡</li>
<li>轮播图自动下一张<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"切换下一张轮播图"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    会触发事件冒泡
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//不会触发事件冒泡</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">triggerHandler</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="jq的ajajx" tabindex="-1"><a class="header-anchor" href="#jq的ajajx" aria-hidden="true">#</a> jq的ajajx</h2>
<ul>
<li>ajax的返回值是一个伪promise的对象</li>
<li>可以使用promise类似的使用方法</li>
<li>jq的ajax请求数据成功后会有3个返回值
<ul>
<li>成功res，stat，xhr
<ul>
<li>数据，状态，xhr对象</li>
</ul>
</li>
<li>失败xhr，stat，res
<ul>
<li>xhr对象，状态，数据</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="上层方式" tabindex="-1"><a class="header-anchor" href="#上层方式" aria-hidden="true">#</a> 上层方式</h3>
<ul>
<li>$.getJSON():获取json</li>
<li>$.getScript():获取script，实现跨域</li>
<li>$().load():获取html数据</li>
</ul>
<h3 id="中层方式" tabindex="-1"><a class="header-anchor" href="#中层方式" aria-hidden="true">#</a> 中层方式</h3>
<ul>
<li>$.get()：只能get</li>
<li>$.post()：只能post<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"http://localhost/ws2009/jq-ajax/data/data.php"</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">"admin"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// console.log(p);</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="底层方式" tabindex="-1"><a class="header-anchor" href="#底层方式" aria-hidden="true">#</a> 底层方式</h3>
<ul>
<li>
<p>$.ajax():</p>
<ul>
<li>参数：对象
<ul>
<li>async:true（是否异步，默认true，异步）</li>
<li>url:&quot;data.php&quot;（请求数据的地址）</li>
<li>type:&quot;get/post&quot;（传输类型）</li>
<li>data:{user:&quot;admin&quot;}（发送的消息）</li>
<li>success:(res,stat,xhr)=&gt;{}（请求成功）</li>
<li>error:(xhr,stat,res)=&gt;{}（请求失败）</li>
<li>timeout:100（超时）</li>
<li>beforeSend:()=&gt;{}（请求之前要干什么）</li>
<li>dataTye:&quot;jsonp&quot;（数据转换类型，一般不用，jsonp时写）</li>
<li>jsonp:&quot;callback&quot;（后端返回数据的函数名，确定时写）</li>
<li>global:true（ajax的全局状态（生命周期）默认true）</li>
</ul>
</li>
</ul>
</li>
<li>
<p>ajax的公共配置</p>
<ul>
<li>$.ajaxSetup()</li>
<li>当ajax请求数据时有重复的代码时可用</li>
<li>例：请求同一个地址...<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajaxSetup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"http://localhost/ws2009/jq-ajax/data/data.php"</span><span class="token punctuation">,</span>
<span class="token function-variable function">success</span><span class="token operator">:</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>ajax的全局状态的全局函数类型</p>
<ul>
<li>ajaxStart：xhr实例创建前</li>
<li>ajaxSend：xhr创建成功，发送给服务器之前</li>
<li>ajaxSuccess：请求成功，且包含成功的状态码</li>
<li>ajaxError：请求失败，且包含失败的状态码</li>
<li>ajaxComplete：请求完毕且数据已返回</li>
<li>ajaxStop：请求结束</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ajaxStop</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"ajaxStop"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<table>
<thead>
<tr>
<th>全局函数类型</th>
<th>何时被触发</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>ajaxStart</td>
<td>在jQuery AJAX函数或命令发起时，但在XHR实例被创建之前</td>
<td>类型被设置为ajaxStart的全局回调信息对象</td>
</tr>
<tr>
<td>ajaxSend</td>
<td>在XHR实例被创建之后，但在XHR实例被发送给服务器之前</td>
<td>类型被设置为ajaxSend的全局回调信息对象；XHR实例；$.ajax()函数使用的属性</td>
</tr>
<tr>
<td>ajaxSuccess</td>
<td>在请求已从服务器返回之后，并且响应包含成功状态码</td>
<td>类型被设置为ajaxSuccess的全局回调信息对象；XHR实例；$.ajax()函数使用的属性</td>
</tr>
<tr>
<td>ajaxError</td>
<td>在请求已从服务器返回之后，并且响应包含失败状态码</td>
<td>类型被设置为ajaxError的全局回调信息对象；XHR实例；$.ajax()函数使用的属性；被XHR实例返回的异常对象(如果有的话)</td>
</tr>
<tr>
<td>ajaxComplete</td>
<td>在请求已从服务器返回之后，并且在任何已声名的ajaxSuccess或ajaxError回调函数已被调用之后</td>
<td>类型被设置为ajaxComplete的全局回调信息对象；XHR实例；$.ajax()函数使用的属性</td>
</tr>
<tr>
<td>ajaxStop</td>
<td>在所有其他AJAX处理完成以及任何其他适用的全局回调函数已被调用之后</td>
<td>类型被设置为ajaxStop的全局回调信息对象</td>
</tr>
</tbody>
</table>
<h2 id="表单序列化" tabindex="-1"><a class="header-anchor" href="#表单序列化" aria-hidden="true">#</a> 表单序列化</h2>
<ul>
<li>$(&quot;.form&quot;).serialize()
<ul>
<li>将表单转换成url?后的格式</li>
<li>必须在form标签内的input，必须有name</li>
</ul>
</li>
<li>$.param
<ul>
<li>将对象转换成url?后的格式</li>
</ul>
</li>
</ul>
<h2 id="jq的插件" tabindex="-1"><a class="header-anchor" href="#jq的插件" aria-hidden="true">#</a> jq的插件</h2>
<h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3>
<ul>
<li>是一种遵循一定规范的应用接口编写出来的程序</li>
<li>表示某个功能的封装</li>
</ul>
<h3 id="现有插件的使用" tabindex="-1"><a class="header-anchor" href="#现有插件的使用" aria-hidden="true">#</a> 现有插件的使用</h3>
<ul>
<li>使用方式：jq的插件
<ol>
<li>先有jq（先引入jq）</li>
<li>再有插件（引入插件）</li>
<li>皮肤包或语言包</li>
<li>使用插件</li>
</ol>
</li>
<li>表单验证插件：validate</li>
<li>cookie插件：cookie</li>
<li>分页插件：pageAction</li>
</ul>
<h3 id="开发自己的插件" tabindex="-1"><a class="header-anchor" href="#开发自己的插件" aria-hidden="true">#</a> 开发自己的插件</h3>
<ul>
<li>如何开发jq的插件
<ol>
<li>向jq绑定自定义方法或属性
<ul>
<li>$.fn:jq的DOMDOM对象所在的公共区域对象</li>
<li>extend
<ul>
<li>$.extend		绑定为jq的全局方法（工具方法）</li>
<li>$.fn.extend	绑定为jq的局部方法（DOM方法）</li>
</ul>
</li>
<li>对象操作
<ul>
<li>$.xxx = function(){}		（工具方法）</li>
<li>$.fn.xxx = function(){}	（DOM方法）</li>
</ul>
</li>
</ul>
</li>
<li>独立的js文件
<ul>
<li>起名：框架名.插件名.版本号.js</li>
<li>JQuery.Banner.1.0.js</li>
</ul>
</li>
<li>开匿名函数，前后加分号</li>
<li>开严格模式</li>
<li>美元符$的私有化
<ul>
<li><code v-pre>(function($){})(JQuery)</code></li>
<li>将JQuery作为参数传入匿名函数，$接受</li>
<li>防止其他js重置$</li>
</ul>
</li>
<li>开始向jq绑定自定义方法或属性</li>
<li>开发功能↓</li>
</ol>
</li>
<li>开发插件
<ul>
<li>banner插件
<ul>
<li>参数处理</li>
<li>报错处理</li>
<li>选择器处理</li>
<li>业务逻辑处理</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> nodejs</h1>
<h2 id="node的介绍" tabindex="-1"><a class="header-anchor" href="#node的介绍" aria-hidden="true">#</a> node的介绍</h2>
<ol>
<li>后台语言，类似于php
<ul>
<li>php使用方法：安装apache环境，php的语言支持，php代码文件，操作系统</li>
<li>node使用方法：安装node环境，node的语言支持，node代码文件，操作系统</li>
</ul>
</li>
<li>node的历史
<ul>
<li>V8引擎：c++搭建（谷歌开源）</li>
<li>nodejs（服务端的js）== javascript（客户端的js）
<ul>
<li>只是运行环境不同，语法完全一致</li>
</ul>
</li>
</ul>
</li>
<li>node的易用性
<ul>
<li>node的服务器是php的86倍</li>
<li>node的学习成本低，js的语法</li>
<li>node的学习资源相对不多</li>
<li>中小型企业项目后端node不多，大型公司或新项目可以采取node</li>
</ul>
</li>
</ol>
<h2 id="node的运行方式" tabindex="-1"><a class="header-anchor" href="#node的运行方式" aria-hidden="true">#</a> node的运行方式</h2>
<ol>
<li><strong>没有浏览器</strong>
<ul>
<li>没有BOM（window），没有DOM（document）</li>
</ul>
</li>
<li>运行在node环境中
<ul>
<li>将node环境安装在计算机的操作系统内</li>
<li>通过操作系统的命令提示框，通过命令调用node的运行环境，执行node代码，运行node文件
<ul>
<li>win：开始菜单-&gt;附件-&gt;命令提示符</li>
<li>mac：终端</li>
<li>linux：终端</li>
</ul>
</li>
<li>第三方软件，封装的命令提示框的入口
<ul>
<li>vsCode：终端</li>
<li>HB：终端</li>
<li>git：Git bash（linux的终端）</li>
</ul>
</li>
</ul>
</li>
<li>执行文件（运行功能）
<ul>
<li>首先在命令窗口找到要执行的node文件
<ul>
<li>系统命令窗口的路径切换（系统命令）
<ul>
<li>盘符切换：<code v-pre>盘符:</code></li>
<li>打开文件夹：<code v-pre>cd 文件夹名</code></li>
<li>查看当前文件夹中所肉文件：<code v-pre>dir</code></li>
<li>清屏：<code v-pre>cls</code></li>
</ul>
</li>
</ul>
</li>
<li>通过node命令执行文件
<ul>
<li><code v-pre>node 文件名</code></li>
</ul>
</li>
</ul>
</li>
<li>命令执行（用来测试代码）
<ul>
<li>打开命令窗口</li>
<li>进入node解析器
<ul>
<li><code v-pre>node </code>（node空格）</li>
</ul>
</li>
<li>写代码，回车运行</li>
</ul>
</li>
</ol>
<h2 id="node的语法" tabindex="-1"><a class="header-anchor" href="#node的语法" aria-hidden="true">#</a> node的语法</h2>
<ol>
<li>基础语法
<ul>
<li>全面支持ECMAScript6（除了ES6的模块化）</li>
<li><strong>没有BOM(window)，没有DOM(document)</strong></li>
<li>事件
<ul>
<li>不是人机交互行为事件</li>
<li>服务端的事件：数据、加载、请求...</li>
</ul>
</li>
</ul>
</li>
<li>特点语法
<ul>
<li>模块↓</li>
</ul>
</li>
</ol>
<h2 id="node的模块化" tabindex="-1"><a class="header-anchor" href="#node的模块化" aria-hidden="true">#</a> node的模块化</h2>
<ul>
<li>模块化的使用
<ul>
<li>引入：
<ul>
<li>require(&quot;模块所在的文件名&quot;)</li>
</ul>
</li>
<li>暴露：
<ul>
<li><code v-pre>module.exports 要暴露的入口</code></li>
<li><code v-pre>exports 要暴露的入口</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> 内置模块</h3>
<ul>
<li>直接引入，就可以使用</li>
</ul>
<h3 id="第三方模块" tabindex="-1"><a class="header-anchor" href="#第三方模块" aria-hidden="true">#</a> 第三方模块</h3>
<ul>
<li>先下载，再引入，再使用</li>
</ul>
<h3 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> 自定义模块</h3>
<ul>
<li>先写，再暴露模块，再引入，再使用
<ul>
<li>暴露关键字(属性)：exports</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//moduleA.js</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">rand</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>引入关键字(方法)：require()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//mian.js</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span>rand<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./moduleA.js"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="内置模块-1" tabindex="-1"><a class="header-anchor" href="#内置模块-1" aria-hidden="true">#</a> 内置模块</h2>
<ul>
<li>node官方封装好的功能模块，直接引入，即可使用</li>
<li><code v-pre>const 模块入口 = require(&quot;模块名&quot;)</code></li>
</ul>
<h3 id="http模块" tabindex="-1"><a class="header-anchor" href="#http模块" aria-hidden="true">#</a> http模块</h3>
<ul>
<li>服务器模块，开启web服务器
<ul>
<li>引入：<code v-pre>const http = require(&quot;http&quot;)</code></li>
<li>开启：<code v-pre>http.createServer((req,res)=&gt;{}).listen(&quot;3000&quot;,&quot;localhost&quot;,()=&gt;{})</code></li>
<li>使用：
<ul>
<li>开启服务器：createServer((req,res)=&gt;{})
<ul>
<li>参数：函数，该函数可接受两个参数
<ul>
<li>参数1：req，请求，前端到后台的信息</li>
<li>参数2：res，响应，后台到前端的信息</li>
</ul>
</li>
<li>返回值是一个一个对象</li>
</ul>
</li>
<li>监听服务器：listen(&quot;3000&quot;,&quot;localhost&quot;,()=&gt;{})
<ul>
<li>开启服务器的返回值的方法（可以连缀）</li>
<li>参数1：端口号</li>
<li>参数2：地址（可选，默认localhost）</li>
<li>参数3：函数，服务器开启成功执行的代码（可选）</li>
</ul>
</li>
<li>方法：
<ul>
<li>前端请求的地址：req.url</li>
<li>给前端发送的数据：res.write()</li>
<li>结束当前请求：res.end()  必须写在最后</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="fs模块" tabindex="-1"><a class="header-anchor" href="#fs模块" aria-hidden="true">#</a> fs模块</h3>
<ul>
<li>文件模块，提供了文件的操作
<ul>
<li>引入：<code v-pre>const fs = require(&quot;fs&quot;)</code></li>
<li>使用:
<ul>
<li>读取文件
<ul>
<li>fs.readFile(&quot;文件路径&quot;,&quot;utf-8&quot;,(err,data)=&gt;{})<strong>异步</strong>
<ul>
<li>参数1：要读取的文件路径</li>
<li>参数2：字符编码（可选，默认buffer流）</li>
<li>参数3：函数，该函数可以接受两个参数
<ul>
<li>参数1：err，请求失败时的错误信息</li>
<li>参数2：data，请求到的数据</li>
</ul>
</li>
</ul>
</li>
<li>fs.readFlieSycn(&quot;文件路径&quot;,&quot;utf-8&quot;)<strong>同步</strong>
<ul>
<li>参数1：要读取的文件路径</li>
<li>参数2：字符编码（可选，默认buffer流）</li>
<li>返回值为请求到的数据</li>
</ul>
</li>
</ul>
</li>
<li>写入文件
<ul>
<li>fs.writeFlie(&quot;文件路径&quot;,str,(err)=&gt;{})<strong>异步</strong>
<ul>
<li>参数1：要写入的文件路径的地址</li>
<li>参数2：要写入的文件的内容</li>
<li>参数3：函数，该函数接收一个参数
<ul>
<li>参数：err，写入失败的错误信息</li>
</ul>
</li>
</ul>
</li>
<li>fs.writeFlieSycn(&quot;文件路径&quot;,str)<strong>同步</strong>
<ul>
<li>参数1：要写入的文件路径的地址</li>
<li>参数2：要写入的文件的内容</li>
<li>返回值为undefined</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="url模块" tabindex="-1"><a class="header-anchor" href="#url模块" aria-hidden="true">#</a> url模块</h3>
<ul>
<li>url模块，解析url，将url字符解析成对象
<ul>
<li>引入：<code v-pre>const url = require(&quot;url&quot;)</code></li>
<li>使用：
<ul>
<li><code v-pre>const urlObj = url.parse(req.url,ture)</code>
<ul>
<li>参数1：要解析的url</li>
<li>参数2：布尔值，是否将解析后的query转成对象</li>
<li>返回值时一个解析后的对象</li>
</ul>
</li>
</ul>
</li>
<li>返回值的属性
|属性|含义|例子|
|-|-|-|
|protocol|协议| ’http‘                                                       |
|slashes|双斜杠|true|
|auth|作者|null|
|host|服务器+端口|'localhost:8002'|
|port|端口| '8002'                                                       |
|hostname|服务器|'localhost'|
|hash|锚点（哈希）|'#title'|
|search|数据|'?username=sdfsdf&amp;content=234234'|
|query|除了?的数据|'username=sdfsdf&amp;content=234234'|
|pathname|文件路径|/aaa'|
|path|地址+信息|'/aaa?username=sdfsdf&amp;content=234234'|
|href|完整地址|'http://localhost:8002/aaa?username=sdfsdf&amp;content=234234#title'|</li>
</ul>
</li>
</ul>
<h3 id="querystring模块" tabindex="-1"><a class="header-anchor" href="#querystring模块" aria-hidden="true">#</a> querystring模块</h3>
<ul>
<li>解析查询数据
<ul>
<li>引入：<code v-pre>const querystring = require(&quot;querystring&quot;)</code></li>
<li>使用：
<ul>
<li>querystring.parse(数据)</li>
<li>将数据转成对象
<ul>
<li>参数：要转换的数据</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="node的下载工具" tabindex="-1"><a class="header-anchor" href="#node的下载工具" aria-hidden="true">#</a> node的下载工具</h2>
<ol>
<li>npm:命令行下载工具 - <strong>包管理器</strong>
<ul>
<li>查看版本号：npm -v</li>
<li>生成package.json(项目的配置信息)：npm init</li>
<li>下载模块：npm install 模块名（npm i 模块名）
<ul>
<li>下载到全局：-g</li>
<li>下载到上线环境（运行依赖，项目依赖）：-S</li>
<li>下载到开发环境（开发依赖）：-D</li>
</ul>
</li>
<li>卸载模块：npm uninstall 模块名（npm uni 模块名）
<ul>
<li>安装到哪个位置就卸载对应位置的模块</li>
</ul>
</li>
</ul>
</li>
<li>npm的下载源
<ul>
<li>官网下载源：https://www.npmjs.com/（服务器在国外）
<ul>
<li>下载慢，不稳定，可能会被禁掉</li>
</ul>
</li>
<li>npm下载源管理工具：nrm
<ul>
<li>安装：npm i nrm -g</li>
<li>查看版本号：nrm -V</li>
<li>查看现有源列表：nrm ls</li>
<li>切换源：nrm use 源名</li>
<li>测试源速度：nrm test</li>
</ul>
</li>
</ul>
</li>
<li>npm下载常见失败解决方式：
<ul>
<li>超时错误，换网</li>
<li>下载失败：
<ul>
<li>卸载</li>
<li>清除缓存：npm clean cache -f</li>
<li>重新下载</li>
<li>以上还是失败：
<ul>
<li>删除：C:\Users\Administrator\AppData\Roaming\npm-cacha（缓存文件）</li>
<li>重新下载</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>总结
<ul>
<li>npm init</li>
<li>npm install 模块</li>
</ul>
</li>
</ol>
<h2 id="路由处理" tabindex="-1"><a class="header-anchor" href="#路由处理" aria-hidden="true">#</a> 路由处理</h2>
<ul>
<li>路由处理
<ul>
<li>php服务器的使用：安装集成工具，启动apache，找到根目录，写代码，就可以了</li>
<li>node服务器的使用：自己写，自己没写的功能都不存在！！！</li>
</ul>
</li>
</ul>
<h3 id="路由设计模式" tabindex="-1"><a class="header-anchor" href="#路由设计模式" aria-hidden="true">#</a> 路由设计模式</h3>
<ul>
<li>
<p>设计路由1（假设路由）√</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost:3000/api?type=login
http://localhost:3000/api?type=register
http://localhost:3000/api?type=goods
http://localhost:3000/api?type=user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设计路由2（假设路由）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost:3000/login
http://localhost:3000/register
http://localhost:3000/goods
http://localhost:3000/user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="利用node跨域" tabindex="-1"><a class="header-anchor" href="#利用node跨域" aria-hidden="true">#</a> 利用node跨域</h4>
<ul>
<li>利用node服务器搭建代理服务器实现ajax的跨域请求<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 处理前端过来的url，处理成真正要请求资源的url</span>

    <span class="token comment">// 再利用http或https模块发起请求</span>
    https<span class="token operator">/</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">resObj</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">// 解析请求到的对象，解析出数据</span>
        resObj<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token comment">// 利用当前服务器的响应头对象，将数据发给前端</span>
            res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp" aria-hidden="true">#</a> gulp</h1>
<ul>
<li>node的第三方模块</li>
<li>node的模块开发 - commonJs规范
<ul>
<li>暴露：module.exports</li>
<li>引入：require()</li>
</ul>
</li>
</ul>
<h2 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>做前端的<strong>自动化工程</strong>，前端自动化工具</li>
<li>基于node的前端自动化工具（基于流的前端自动化工具）</li>
<li>自动将文件进行压缩、合并、编译、解析等操作</li>
<li>类似于将项目打包</li>
<li>官网：https://www.gulpjs.com.cn/</li>
<li><strong>常用的前端工具</strong>：gulp，webpack，grunt，browserify</li>
<li>gulp的环境类似于工厂，项目类似于原料和产品
<ul>
<li>工厂的位置是固定的</li>
<li>原料和产品可以运输</li>
</ul>
</li>
</ul>
<h2 id="gulp的使用" tabindex="-1"><a class="header-anchor" href="#gulp的使用" aria-hidden="true">#</a> gulp的使用</h2>
<ol>
<li>
<p>下载</p>
<ul>
<li>安装全局的gulp：<code v-pre>npm i gulp -g</code>
<ul>
<li>测试：<code v-pre>gulp -v</code>可以查看全局的gulp版本号</li>
</ul>
</li>
<li>安装局部的gulp
<ul>
<li>先创建项目环境（文件夹）</li>
<li>使用命令窗口进入文件夹</li>
<li><code v-pre>npm i gulp -D</code>安装到开发环境</li>
<li>测试：<code v-pre>gulp -v</code>可以查看全局的gulp版本号</li>
</ul>
</li>
</ul>
</li>
<li>
<p>创建gulp官方指定的文件 ：<strong>gulpfile.js</strong></p>
</li>
<li>
<p>在gulpfile.js中引入gulp模块</p>
<ul>
<li><code v-pre>const gulp = require(&quot;gulp&quot;)</code></li>
</ul>
</li>
<li>
<p>配置gulpfile.js文件</p>
<ul>
<li>遵循node的模块化规范</li>
<li>定义功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>暴露模块</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  暴露的入口名</span>
exports<span class="token punctuation">.</span>say <span class="token operator">=</span> sayHello<span class="token punctuation">;</span>
   		<span class="token comment">//   要暴露的功能</span>
<span class="token comment">// 在执行时，通过say执行sayHello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>按需执行
<ul>
<li>在命令窗口输入：<code v-pre>gulp 入口名</code></li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 id="gulp的常用内置方法" tabindex="-1"><a class="header-anchor" href="#gulp的常用内置方法" aria-hidden="true">#</a> gulp的常用内置方法</h2>
<ul>
<li>src()		查找文件（参数：路径、字符串）</li>
<li>dest()	转存文件（参数：路径、要保存的路径）</li>
<li>watch()	监听文件的变化，执行功能（参数：路径、是个数组）</li>
<li>series()	批量执行，同步执行（参数：要批处理的函数名）</li>
<li>parallel()批量执行，异步执行（参数：要批处理的函数名）</li>
<li>pipe()	<strong>流对象的方法</strong>
<ul>
<li>管道方法，用于将流对象传入下一个操作</li>
<li>实现连缀执行</li>
<li>参数：要执行的方法</li>
</ul>
</li>
</ul>
<h2 id="文件路径的写法" tabindex="-1"><a class="header-anchor" href="#文件路径的写法" aria-hidden="true">#</a> 文件路径的写法</h2>
<ul>
<li>单个文件：直接文件全称</li>
<li>多个文件：使用数组包裹</li>
<li>当前文件夹下，所有文件：<code v-pre>&quot;文件夹/*&quot;</code></li>
<li>当前文件夹下，指定扩展名文件：<code v-pre>&quot;文件夹 /*.扩展名&quot;</code></li>
<li>当前文件夹下，多层子文件夹嵌套：<code v-pre>&quot;文件夹 /**/*&quot;</code></li>
<li>当前文件夹下，指定多个扩展名文件：<code v-pre>&quot;文件夹/*.{html,css}&quot;</code></li>
<li>当前文件夹下，除了莫格文件：<code v-pre>&quot;!src/pass.txt&quot;</code>(!路径)</li>
</ul>
<h2 id="gulp的插件" tabindex="-1"><a class="header-anchor" href="#gulp的插件" aria-hidden="true">#</a> gulp的插件</h2>
<ul>
<li>实现最终的项目处理</li>
<li>下载</li>
<li>引入</li>
<li>在gulp的功能中使用插件</li>
<li><strong>注意：gulp-uglify压缩不支持ES6语法，需要先将ES6转成ES5之后才能压缩</strong></li>
</ul>
<h2 id="es6转es5" tabindex="-1"><a class="header-anchor" href="#es6转es5" aria-hidden="true">#</a> ES6转ES5</h2>
<ul>
<li>
<p>gulp插件是没有ES6转ES5这个功能的</p>
<ul>
<li>babel才是住专门的编译工具</li>
<li>gulp只是提供了支持gulp的插件</li>
<li>最终的编译还是由bable完成</li>
</ul>
</li>
<li>
<p>安装gulp对babel支持</p>
<ul>
<li>npm install gulp-babel</li>
</ul>
</li>
<li>
<p>安装babel对ES6的支持</p>
<ul>
<li>npm install @babel/core</li>
</ul>
</li>
<li>
<p>安装说明，将ES6转成ES5</p>
<ul>
<li>npm install @babel/preset-env</li>
</ul>
</li>
<li>
<p>在gulpFile中使用</p>
<ul>
<li>引入gulp-babel</li>
</ul>
</li>
<li>
<p>定义ES6转ES5的功能</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">stfFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"src/js/*.js"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/env'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist/js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>stf <span class="token operator">=</span> stfFn<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="服务器插件" tabindex="-1"><a class="header-anchor" href="#服务器插件" aria-hidden="true">#</a> 服务器插件</h2>
<ul>
<li>服务器插件
<ul>
<li>gulp-connect</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//转存，拷贝</span>
<span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>connect<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//文件转存之后，触发connect插件的刷新功能</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>copy <span class="token operator">=</span> copy<span class="token punctuation">;</span>
<span class="token comment">//监听文件变化，实现自动拷贝</span>
<span class="token keyword">function</span> <span class="token function">autoCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">"./src/index.html"</span><span class="token punctuation">,</span>copy<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>autoCopy <span class="token operator">=</span> autoCopy<span class="token punctuation">;</span>
<span class="token comment">//开启服务器,服务器自动刷新</span>
<span class="token keyword">function</span> <span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    connect<span class="token punctuation">.</span><span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token string">"3333"</span><span class="token punctuation">,</span>        <span class="token comment">//端口</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span><span class="token string">"./dist"</span><span class="token punctuation">,</span>       <span class="token comment">//根目录</span>
        <span class="token literal-property property">livereload</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">//自动刷新，需要给拷贝功能开启每次拷贝都刷新</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xports<span class="token punctuation">.</span>server <span class="token operator">=</span> server<span class="token punctuation">;</span>
<span class="token comment">//自动刷新需要同时开启服务器与自动拷贝，所以要使用批处理，两个都是异步，所以要使用异步的parallel</span>
exports<span class="token punctuation">.</span>autoServer <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span>autoCopy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>跨域插件
<ul>
<li>http-proxy-middleware</li>
<li>是一个对象，有createProxyMiddleware属性，是一个函数，跨域时使用</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//跨域服务器</span>
<span class="token keyword">function</span> <span class="token function">crossServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    connect<span class="token punctuation">.</span><span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token string">"3333"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span><span class="token string">"./dist"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">livereload</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">middleware</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">connect<span class="token punctuation">,</span> opt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>
                <span class="token comment">//跨域模块是一个对象，它的createProxyMiddleware属性是一个函数</span>
                proxy<span class="token punctuation">.</span><span class="token function">createProxyMiddleware</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token comment">//接受两个参数，1：前端请求跨域的标志；2：一个对象（配置信息）</span>
                    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://wanandroid.com/wxarticle'</span><span class="token punctuation">,</span>    <span class="token comment">//代理的目标地址</span>
                    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span>    <span class="token comment">//路径重写规则</span>
                        <span class="token string-property property">'^/api'</span><span class="token operator">:</span><span class="token string">''</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>crossServer <span class="token operator">=</span> crossServer<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>autoCross <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>crossServer<span class="token punctuation">,</span>autoCopy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>有先后顺序，先有服务器插件才有跨域</li>
</ul>
<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h1>
<h2 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>高效的css预编译语言</li>
<li>但是sass没有被任何浏览器支持，所以，sass在被投入项目使用之前一定要编译成css</li>
<li>sass有ruby公司开发的，sass的文件是<code v-pre>.sass</code>后缀，这种文件最大的特点是不支持花括号和分号，对前端不友好</li>
<li>所以ruby公司开发了另一种写法，是<code v-pre>.scss</code>的后缀，这种文件全面支持css语法</li>
<li>市面上的搞高效的预编译语言还有less</li>
</ul>
<h2 id="如何将sass编译成css" tabindex="-1"><a class="header-anchor" href="#如何将sass编译成css" aria-hidden="true">#</a> 如何将sass编译成css</h2>
<ul>
<li>编辑器的插件（vsCode）</li>
<li>在线编译：https://www.sassmeister.com/</li>
<li>借助前端自动化工具（gulp），配置sass转css的环境
<ul>
<li>gulp滋自身没编译sass的功能</li>
<li>需要借助gulp的第三方插件：gulp-sass/gulp-sass-china</li>
</ul>
</li>
<li>配置gulp中的sass编译功能
<ul>
<li>引入：<code v-pre>const sass = require(&quot;gulp-sass&quot;)</code></li>
<li>定义编译功能</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//配置sass转css</span>
<span class="token keyword">function</span> <span class="token function">stc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">"./src/**/*.scss"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">sass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span>sass<span class="token punctuation">.</span>logError<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//sass抛出错误事件，不会在自动保存时卡掉</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">"dist/project-sass"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>stc <span class="token operator">=</span> stc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>为了编译方便、自动化，开启监听</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//配置sass自动转css</span>
<span class="token keyword">function</span> <span class="token function">autoStc</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">"./src/**/*.scss"</span><span class="token punctuation">,</span>stc<span class="token punctuation">)</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>autoStc <span class="token operator">=</span> autoStc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="sass的语法" tabindex="-1"><a class="header-anchor" href="#sass的语法" aria-hidden="true">#</a> sass的语法</h2>
<ol>
<li>注释
<ul>
<li><code v-pre>&quot;/* */&quot;</code>：多行注释，会被sass编译位css</li>
<li><code v-pre>&quot;//&quot;</code>：单行注释，不会被sass编译</li>
</ul>
</li>
<li>变量
<ul>
<li>
<p><strong>单值变量</strong></p>
</li>
<li>
<p><code v-pre>$</code>声明变量</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>多值变量</strong></p>
</li>
<li>
<p><code v-pre>$</code>声明变量</p>
</li>
<li>
<p>变量内的值索引从1开始，使用nth方法遍历变量</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>red green yellow<span class="token punctuation">;</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box3</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>list变量</strong></p>
</li>
<li>
<p>相当于二维数组</p>
</li>
<li>
<p><code v-pre>@each in </code>遍历数组是的方法</p>
</li>
<li>
<p>scss方法使用时必须加@</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$arr</span></span><span class="token punctuation">:</span><span class="token punctuation">(</span>box<span class="token punctuation">,</span>20<span class="token punctuation">,</span>30<span class="token punctuation">,</span>red<span class="token punctuation">)</span><span class="token punctuation">(</span>cont<span class="token punctuation">,</span>10<span class="token punctuation">,</span>20<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span>40<span class="token punctuation">,</span>50<span class="token punctuation">,</span>yellow<span class="token punctuation">)</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span>60<span class="token punctuation">,</span>20<span class="token punctuation">,</span>pink<span class="token punctuation">)</span><span class="token punctuation">(</span>bottom<span class="token punctuation">,</span>10<span class="token punctuation">,</span>30<span class="token punctuation">,</span>#ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$s</span>,<span class="token variable">$w</span>,<span class="token variable">$h</span>,<span class="token variable">$c</span> in <span class="token variable">$arr</span> </span><span class="token punctuation">{</span>
    <span class="token selector">.<span class="token variable">#{$s}</span></span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">$w</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$h</span><span class="token punctuation">;</span>
         <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">$c</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 ```
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>map变量</strong></p>
</li>
<li>
<p>类似于对象</p>
</li>
<li>
<p><code v-pre>@each in</code>遍历map变量</p>
</li>
<li>
<p>@each 键，值 in map对象</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$obj</span></span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span>10<span class="token punctuation">,</span><span class="token property">h2</span><span class="token punctuation">:</span>20<span class="token punctuation">,</span><span class="token property">h3</span><span class="token punctuation">:</span>30<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$k</span>,<span class="token variable">$v</span> in <span class="token variable">$obj</span> </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token variable">#{$k}</span></span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span><span class="token variable">$v</span>+px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>嵌套
<ul>
<li>
<p><strong>选择器嵌套</strong></p>
</li>
<li>
<p>&amp;:表示当前元素（相当于this）</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.list</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token selector">li</span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span>solid 1px black<span class="token punctuation">;</span>
        &amp;<span class="token punctuation">:</span>hover<span class="token punctuation">{</span><span class="token comment">//&amp;:表示当前元素（相当于this）</span>
            <span class="token property">color</span><span class="token punctuation">:</span>red
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.last</span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span>none
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>属性嵌套</strong></p>
</li>
<li>
<p>在<strong>复合属性</strong>内嵌套子属性，表示该属性的全写</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token selector">border:</span><span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token comment">//表示border-left</span>
            <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token comment">//表示border-right</span>
            <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token comment">//表示border-top</span>
            <span class="token property">style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>混合代码块  mixin
<ul>
<li>类似于函数，没有返回值</li>
<li>是一个方法，需要加@
<ul>
<li>定义代码块<code v-pre>@mixin css属性名($形参){css属性名:$形参}</code></li>
</ul>
</li>
<li>使用<code v-pre>@include+css属性名(实参（css属性值）)</code> 调用代码块</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@mixin</span> transform <span class="token punctuation">(</span><span class="token variable">$d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token variable">$d</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box3</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>函数
<ul>
<li>定义函数：<code v-pre>@function 函数名(){@return }</code></li>
<li>调用函数：<code v-pre>函数名()</code></li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>+px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>+px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>运算<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1rem = html标签的font-size
1em = 父元素的font-size
1vw = 视口宽度/100
1vh = 视口高度/100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以实现带单位的值的运算，最后*1rem/em就会转换成需要的单位</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">//rem</span>
<span class="token comment">//默认16px</span>
<span class="token comment">//$fz:20px;</span>
<span class="token selector">html</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span><span class="token variable">$fz</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@function</span> <span class="token function">ptr</span><span class="token punctuation">(</span><span class="token variable">$px</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">@return</span> <span class="token variable">$px</span>/<span class="token variable">$fz</span>*1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span><span class="token function">ptr</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span><span class="token function">ptr</span><span class="token punctuation">(</span>238px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>继承
<ul>
<li>通过关键字<code v-pre>@extend</code>实现继承</li>
</ul>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.box1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .box1<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>合并scss解析成一个css文件
<ul>
<li>@import &quot;路径&quot;</li>
<li>使用关键字<code v-pre>@import</code>引入文件
<code v-pre>@import &quot;../style.scss&quot;;</code></li>
</ul>
</li>
</ol>
<h1 id="模块化开发" tabindex="-1"><a class="header-anchor" href="#模块化开发" aria-hidden="true">#</a> 模块化开发</h1>
<h2 id="什么是模块化开发" tabindex="-1"><a class="header-anchor" href="#什么是模块化开发" aria-hidden="true">#</a> 什么是模块化开发</h2>
<ul>
<li>是一种项目架构模式，这种架构模式让js代码重用性变得非常的高，让项目架构的一些复杂问题全部的以解决。例如多个script标签不会再出现，我们只需要用一个script标签引入就可以了</li>
<li>模块：独立的功能，复用性，耦合低</li>
<li>模块化：将整个项目功能化</li>
<li>一般来说，每个模块独立于一个js文件</li>
</ul>
<h2 id="为什么要用模块" tabindex="-1"><a class="header-anchor" href="#为什么要用模块" aria-hidden="true">#</a> 为什么要用模块</h2>
<ul>
<li>为了减少系统耦合度、提高内聚，减少资源依赖</li>
<li>便于维护，功能复用性强</li>
<li>解决独立作用域，依赖管理，api暴露，安于加载于执行，安全合并等问题</li>
</ul>
<h2 id="如何实现模块化" tabindex="-1"><a class="header-anchor" href="#如何实现模块化" aria-hidden="true">#</a> 如何实现模块化</h2>
<ul>
<li>实现方式多种多样
<ul>
<li>独立的作用域，独立的功能</li>
</ul>
</li>
<li>一个项目团队中，出现多种模块化的方式，不利于维护，代码合并，团队协作</li>
<li>需要统一模块化开发的方式：模块化规范</li>
</ul>
<h2 id="模块化规范" tabindex="-1"><a class="header-anchor" href="#模块化规范" aria-hidden="true">#</a> 模块化规范</h2>
<ul>
<li>CMD规范
<ul>
<li>按需加载</li>
<li>引入：sea.js</li>
<li>断更</li>
</ul>
</li>
<li>AMD规范
<ul>
<li>依赖前置</li>
<li>引入：require.js</li>
</ul>
</li>
<li>nodeJs的模块化：commonJs
<ul>
<li>引入：require()</li>
<li>暴露：exports</li>
</ul>
</li>
<li>ES6的模块化
<ul>
<li>引入：import from</li>
<li>暴露：export</li>
<li>只能在服务器环境运行</li>
</ul>
</li>
</ul>
<h2 id="amd规范的使用" tabindex="-1"><a class="header-anchor" href="#amd规范的使用" aria-hidden="true">#</a> AMD规范的使用</h2>
<ul>
<li>下载规范化文件</li>
<li>引入规范化文件</li>
<li>定义模块时<em><strong>不执行</strong></em>任何语句</li>
<li>使用：
<ul>
<li>引入模块：require()/requirejs()</li>
<li>参数1：数组，模块的路径
<ul>
<li>参数2：函数
<ul>
<li>函数的参数是模块暴露的接口</li>
<li>参数1的数组有几个就有几个参数</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"./module2/mB"</span><span class="token punctuation">,</span><span class="token string">"./module2/mA"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>定义模块（暴露模块）：define()</li>
<li>参数1：数组，模块依赖（可选）
<ul>
<li>参数2：函数
<ul>
<li>函数的return是暴露模块的途径</li>
<li>返回一个对象</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义模块</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 模块的功能</span>
    <span class="token comment">// 暴露模块入口</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 上面封装的功能或变量</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">666</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>注意：
<ul>
<li>当main文件作为主模块，使用script标签的src引入时，main文件内部的小模块的路径起始点，以<strong>引入了main文件的html文件</strong>开始</li>
<li>当使用AMD模块化规范时,script标签有一个自定义属性<code v-pre>data-main</code>用来引入main文件
<ul>
<li>main文件内部的小模块的路径起始点，以<strong>当前main文件</strong>开始</li>
<li><code v-pre>&quot;&lt;script src=&quot;libs/require.js&quot; data-main=&quot;js/main&quot;&gt;&lt;/script&gt;&quot;</code></li>
</ul>
</li>
<li>baseUrl配置的路径起始点，<strong>以引入的html文件为基准</strong>
<ul>
<li>在main文件中配置</li>
<li>require.config()
<ul>
<li>参数：对像</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>require<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">baseUrl</span><span class="token operator">:</span><span class="token string">"module"</span><span class="token punctuation">,</span><span class="token comment">//小模块所在的文件夹</span>
	<span class="token literal-property property">paths</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">jq</span><span class="token operator">:</span><span class="token string">"http://mat1.gtimg.com/libs/jquery2/2.2.0/jquery"</span>
	<span class="token punctuation">}</span><span class="token comment">//简化文件名</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"jq"</span><span class="token punctuation">,</span><span class="token string">"mA"</span><span class="token punctuation">,</span><span class="token string">"mB"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">j<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"123123"</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h2 id="es6的模块化" tabindex="-1"><a class="header-anchor" href="#es6的模块化" aria-hidden="true">#</a> ES6的模块化</h2>
<ul>
<li>
<p>script标签必须加一个属性<code v-pre>type = &quot;module&quot;</code></p>
<ul>
<li><code v-pre>&quot;&lt;script src=&quot;js/main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;&quot;</code></li>
</ul>
</li>
<li>
<p>模块暴露时不可以直接暴露变量，可以采用花括号包裹的方式</p>
<ul>
<li>export {a};</li>
</ul>
</li>
<li>
<p>引入模块时变量也必须使用花括号包裹</p>
<ul>
<li><code v-pre>import {a} from &quot;./module/m.js&quot;;</code></li>
</ul>
</li>
<li>
<p>模块内部修改不需要重新引入，可以拿到修改的值（动态绑定）</p>
</li>
<li>
<p><code v-pre>as</code>可以在暴露或引入时修改变量的名字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"as可以改名"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>str <span class="token keyword">as</span> s<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>s <span class="token keyword">as</span> str<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>可以同时暴露或接收多个参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token operator">+</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>当模块以default暴露时可以使用一个对象来接收</p>
<ul>
<li>此时这个对象身上有模块暴露的所有属性</li>
<li>一个模块中只可以出现一个default</li>
<li>使用default暴露的模块接收后可以修改值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token operator">+</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>fn1<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>直接使用import+路劲可以引入立即执行的js文件（例：jqyrey）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./module/jquery.2.2.4.js"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>*</code>：通配符，可以引入模块所有暴露的接口</p>
<ul>
<li>使用*时需要用as改名</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> b1 <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c1 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b1<span class="token operator">+</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b1<span class="token punctuation">,</span>c1<span class="token punctuation">,</span>fn2<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj1 <span class="token keyword">from</span> <span class="token string">"./module/m.js"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意：</p>
<ol>
<li>export和import关键字，只能存在于顶层作用域内，不能存在局部或块级作用域</li>
<li>在ES6的模块化中，所有语法自动处在严格模式下</li>
<li>export是声明关键字，声明一个对外接口</li>
<li>export声明的接口必须和模块内部的变量建立一一对应的关系</li>
<li>export声明的接口与对应的值是动态绑定，即可以拿到模块内部实时修改的值</li>
<li>export和import时，都可以使用as关键字，重命名接口</li>
<li>使用default关键字，设置默认接口，一个模块中只允许出现一次default</li>
<li>import在使用接口时，必须将接口放在花括号内，除非export暴露接口时使用了default关键字</li>
<li>import加载的接口是只读的，不允许被修改，如果接口是对象，可以修改属性</li>
<li>import具有提升效果</li>
<li>由于import是静态执行，所以不能使用表达式和变量</li>
<li>当import后没有接收接口，会执行整个模块文件</li>
<li>可以使用通配符*加载整个模块的接口（需要配合as使用），返回一个模块对象</li>
<li>ES6的模块化不是对象，而是通过export输出对应的代码，再通过import输入</li>
<li>import加载模块的输入接口是静态加载，指定接口的情况下，只加载接口部分</li>
</ol>
</li>
</ul>
<h1 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h1>
<h2 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>什么是版本管理
<ul>
<li>版本，不仅仅限于代码文件，任何文件，任何资源，任何数据，都存在版本</li>
</ul>
</li>
<li>版本管理的优势
<ul>
<li>方便查看文件的发展趋势，历史的数据，历史数据的回退</li>
</ul>
</li>
<li>怎么实现
<ul>
<li>传统的文件管理：拷贝副本
<ul>
<li>不安全，不方便管理</li>
</ul>
</li>
<li>交给计算机工具，管理源文件，数据流
<ul>
<li>安全，节省空间，方便管理</li>
</ul>
</li>
</ul>
</li>
<li>管理方式的方式
<ul>
<li><strong>集中式</strong>版本的管理（SVN）：所有的版本信息，都储存在当前计算机内，可以按需选择是否上传到服务器</li>
<li><strong>分布式</strong>版本管理（git）：每个客户端的版本信息，都存储在当前计算机内，可以按需选择是否上传到服务器</li>
</ul>
</li>
<li>工具的使用方式
<ul>
<li>SVN：下一标题（SVN的使用）</li>
<li>git：下一标题（git的使用）</li>
</ul>
</li>
<li><em><strong>版本管理工具的概念</strong></em>
<ul>
<li>工作区：正在编写文件的空间
👇add</li>
<li>暂存区：队列，等待上传文件所在的区域
👇commit</li>
<li>版本库：记录当前版本，产生一个版本库和对应的版本描述</li>
</ul>
</li>
</ul>
<h2 id="svn的使用" tabindex="-1"><a class="header-anchor" href="#svn的使用" aria-hidden="true">#</a> SVN的使用</h2>
<ol>
<li>下载，安装</li>
<li>通过右键菜单中绑定的SVN选项，实现svn操作</li>
<li>接入svn服务器：
<ul>
<li>本地：安装SVN的服务器工具，创建SVN服务器，创建独立的项目
<ul>
<li>安装软件-&gt;打开软件-&gt;创建项目-&gt;设置项目名称-&gt;得到服务器地址（注意是否对外地址）-&gt;将项目地址发给要连接服务器的使用者</li>
</ul>
</li>
<li>在线：找到第三方在线仓库网站，注册账号，创建项目</li>
</ul>
</li>
<li>打开要被版本管理工具管理的项目的根目录</li>
<li>使用<code v-pre>checkout</code>命令接入服务器
<ul>
<li>会利用右键菜单的选项，判断当前项目的管理状态</li>
<li>没有<code v-pre>checkout</code>表示，已经建立连接了</li>
</ul>
</li>
<li>开始工作...</li>
<li>将新文件，使用 <code v-pre>add</code> 命令，先添加到暂存区
<ul>
<li>利用右键菜单的选项，判断当前文件的状态</li>
<li>有<code v-pre>commit</code>表示，文件已经在暂存区了</li>
</ul>
</li>
<li>使用 <code v-pre>commit</code> 命令，将暂存区中的文件上传到版本库
<ul>
<li>利用右键菜单的选项，判断当前文件的状态</li>
<li>有<code v-pre>update</code>表示，文件已经在版本库了</li>
</ul>
</li>
<li>正常开发项目，重复6，7，8...</li>
<li>版本回退
<ul>
<li><code v-pre>updata to revision+版本号</code></li>
</ul>
</li>
<li>如果出现上传失败，代码冲突
<ul>
<li>两个用户修改了同一处代码</li>
<li>线下沟通解决
<ul>
<li>保留要保留的代码</li>
<li>删除要删除的代码</li>
</ul>
</li>
<li>删除代码的那一方要先更新</li>
<li>保留代码的那一方重新上传</li>
<li>删除代码的那一方要再更新</li>
</ul>
</li>
</ol>
<h2 id="git的使用" tabindex="-1"><a class="header-anchor" href="#git的使用" aria-hidden="true">#</a> git的使用</h2>
<ol>
<li>下载，安装 - 右键菜单会多出git的选项（按需重启电脑）</li>
<li>打开要被版本管理工具管理像木的根目录</li>
<li>右键菜单选择：gti Bash，检查当前路径是否指定文件夹
<ul>
<li>路径不对的话，使用<code v-pre>cd</code>切换路径</li>
</ul>
</li>
<li>初始化git项目：<code v-pre>git init</code></li>
<li>配置全局用户信息
<ul>
<li><code v-pre>git config --global user.name &quot;${用户名}&quot;</code></li>
<li><code v-pre>git config --global user.email &quot;${邮箱地址}&quot;</code></li>
</ul>
</li>
<li>开始工作...
<ul>
<li>查看状态：<code v-pre>git status</code>（查看暂存区状态）</li>
</ul>
</li>
<li>将新文件用 <code v-pre>git add</code> 命令线添加到暂存区
<ul>
<li><code v-pre>git add .</code></li>
<li><code v-pre>git add *</code></li>
<li><code v-pre>git add -A</code></li>
<li><code v-pre>git add --all</code></li>
<li>以上都是将工作区所有文件上传到暂存区</li>
</ul>
</li>
<li>使用 <code v-pre>git commit</code> 命令，将暂存区的所有文件上传到版本库
<ul>
<li><code v-pre>git commit -m &quot;这里是版本日志&quot;</code></li>
</ul>
</li>
<li>正常开发项目，重复7，8，9...</li>
<li>查看版本日志：<code v-pre>git log</code>
<ul>
<li>如果版本日志数据过多，导致被折叠显示，可以使用上下箭头显示折叠信息，使用<code v-pre>q</code>退出折叠</li>
</ul>
</li>
<li>查看操作日志：<code v-pre>git reflog</code></li>
<li>版本回退：<code v-pre>git reset --hard 版本号</code></li>
<li>上传到git仓库
<ul>
<li>建立连接：<code v-pre>git remote add origin 仓库地址</code></li>
<li>推送版本：<code v-pre>git push -u origin master(分支)</code></li>
</ul>
</li>
<li>输入用户名密码</li>
<li>只有第一次上传需要建立连接，以后只需要<code v-pre>git push</code>即可</li>
<li>刷新在线仓库可拿到版本文件和信息</li>
<li>从仓库下载到本地
<ul>
<li>完整的克隆整个项目：<code v-pre>git clone 仓库地址</code></li>
<li>拉取线上版本与本地版本合并：<code v-pre>git pull[origin][master]</code>
<ul>
<li>中括号代表可以省略</li>
</ul>
</li>
</ul>
</li>
<li>分支（branch）
<ul>
<li>什么式分支？副本、备份</li>
<li>原则上来说，每个开发者，每个功能，都因该在一个新的分支上进行，而不要执黑在项目上进行操作</li>
<li>默认情况下，整个项目是一个分支：主分支（master）
<ul>
<li>创建一个子分支（拷贝主分支）<code v-pre>git branch 分支名字</code></li>
<li>干活...</li>
<li>选择分支<code v-pre>git checkout 分支名字</code></li>
<li>合并到主分支<code v-pre>git merge 主分支</code>（一般需要先选择主分支，然后将其他分支合并到主分支）</li>
<li>删除子分支 <code v-pre>git branch -d 分支名字</code></li>
</ul>
</li>
</ul>
</li>
<li>标签（标志，书签，tag）
<ul>
<li>存在的意义，参考现实生活中的书签</li>
<li>需要在连接仓库的情况下才可以创建标签</li>
<li>git tag                  查看标签</li>
<li>git tag name             创建标签</li>
<li>git push origin name     上传标签</li>
<li>git tag -d name          删除标签</li>
</ul>
</li>
</ol>
<h2 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> git常用命令</h2>
<ul>
<li>
<p><code v-pre>git config --global user.name &quot;${用户名}&quot;</code>- 设置全局用户名</p>
</li>
<li>
<p><code v-pre>git config --global user.email &quot;${邮箱地址}&quot;</code>- 设置全局邮箱</p>
</li>
<li>
<p><code v-pre>git init</code>- 初始化git，生成.git文件</p>
</li>
<li>
<p><code v-pre>git add .</code>- 添加工作区所有到暂存区</p>
</li>
<li>
<p><code v-pre>git commit -m &quot;这里是版本日志&quot;</code>- 将暂存区所有上传到版本库</p>
</li>
<li>
<p><code v-pre>git log</code>- 查看版本日志</p>
</li>
<li>
<p><code v-pre>git diff </code> - 查看工作区与暂存区区别</p>
</li>
<li>
<p><code v-pre>git status</code>- 查看暂存取状态</p>
</li>
<li>
<p><code v-pre>git reflog</code>- 查看操作日志</p>
</li>
<li>
<p><code v-pre>git reset --hard 版本号</code>- 版本回退</p>
</li>
<li>
<p><code v-pre>git remote add origin 仓库地址</code>- 与仓库建立连接</p>
</li>
<li>
<p><code v-pre>git push -u origin master(分支)</code>- 上传到云端仓库</p>
</li>
<li>
<p><code v-pre>git clone 仓库地址</code>- 下载所有项目文件到本地</p>
</li>
<li>
<p><code v-pre>git pull[origin][master]</code>- 更新本地版本库与仓库一致</p>
</li>
<li>
<p><code v-pre>git branch</code>- 查看分支</p>
</li>
<li>
<p><code v-pre>git branch 分支名字</code>- 创建新分支</p>
</li>
<li>
<p><code v-pre>git checkout 分支名字</code>- 选择分支</p>
</li>
<li>
<p><code v-pre>git merge name</code>合并分支（一般需要先选择主分支，然后将其他分支合并到主分支）</p>
</li>
<li>
<p>查看差别</p>
<ul>
<li>git diff                  工作区和暂存区的差别</li>
<li>git diff --cached         暂存区和版本库的差别</li>
<li>gif diff HEAD             工作区和版本库的差别</li>
</ul>
</li>
<li>
<p>添加到暂存区</p>
<ul>
<li>git add .</li>
<li>git add *</li>
<li>git add --all</li>
<li>git add -A</li>
</ul>
</li>
<li>
<p>查看日志</p>
<ul>
<li>git log --oneline</li>
<li>git log -n</li>
</ul>
</li>
<li>
<p>版本回退</p>
<ul>
<li>git reset --hard HEAD^</li>
<li>git reset --hard HEAD~n</li>
<li>git reset --hrad 版本号</li>
</ul>
</li>
<li>
<p>撤销</p>
<ul>
<li>
<p>git checkout -- 文件名    撤销工作区修改</p>
</li>
<li>
<p>git reset HEAD 文件名</p>
</li>
<li>
<p>git checkout -- 文件名    撤销暂存区修改</p>
</li>
</ul>
</li>
<li>
<p>远程仓库</p>
<ul>
<li>git remote add 连接别名 连接地址</li>
<li>git remote -v</li>
<li>git remote remove 连接别名</li>
</ul>
</li>
<li>
<p>标签操作（需要在连接仓库的前提下）</p>
<ul>
<li>git tag                  查看标签</li>
<li>git tag name             创建标签</li>
<li>git push origin name     上传标签</li>
<li>git tag -d name          删除标签</li>
</ul>
</li>
<li>
<p>分支操作</p>
<ul>
<li>git branch               查看分支</li>
<li>git branch -r            查看远程分支</li>
<li>git branch -a            查看所有分支</li>
<li>git branch name          创建分支</li>
<li>git checkout name        选择分支</li>
<li>git branch -b name       创建并切换分支</li>
<li>git merge name           合并分支（一般需要先选择主分支，然后将其他分支合并到主分支）</li>
<li>git branch -d name       删除分支</li>
</ul>
</li>
<li>
<p>忽略指定文件夹或文件</p>
<ul>
<li>.gitignore文件内，写明要忽略的文件夹或文件</li>
</ul>
</li>
</ul>
<h2 id="svn和git的区别" tabindex="-1"><a class="header-anchor" href="#svn和git的区别" aria-hidden="true">#</a> **<em>SVN和git的区别</em></h2>
<ul>
<li>SVN的存储需要依赖一个服务器，而git所有的东西是放在线上的。节约成本，省时省力。</li>
<li>git 是分布式的，svn 是集中式。</li>
<li>git 按照源数据的方式存储内容，svn 是按照文件的形式存储</li>
<li>git 和 svn 中的分支不同。</li>
<li>git 没有全局版本号，svn 有。</li>
<li>git 内容的完整性优于 svn。</li>
</ul>
</div></template>
