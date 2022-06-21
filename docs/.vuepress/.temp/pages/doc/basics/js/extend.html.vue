<template><div><h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h1>
<h2 id="数据交互" tabindex="-1"><a class="header-anchor" href="#数据交互" aria-hidden="true">#</a> 数据交互</h2>
<h3 id="_1-web前端-浏览器" tabindex="-1"><a class="header-anchor" href="#_1-web前端-浏览器" aria-hidden="true">#</a> 1. web前端 - 浏览器</h3>
<ul>
<li>发送
<ul>
<li>表单发送</li>
</ul>
</li>
<li>接收
<ul>
<li>浏览器默认接受</li>
</ul>
</li>
</ul>
<h3 id="_2-后端-服务器-php" tabindex="-1"><a class="header-anchor" href="#_2-后端-服务器-php" aria-hidden="true">#</a> 2. 后端 - 服务器(php)</h3>
<ul>
<li>发送
<ul>
<li>echo		  echo的速度快于print ，echo没有返回值</li>
<li>print		     print有返回值，且返回值总为1</li>
<li>print_r()		将复杂数据转成字符后发送</li>
<li>die()		     发送数据后会终止程序执行</li>
</ul>
</li>
<li>接收
<ul>
<li>$_GET		  接收get发送的表单</li>
<li>$_POST	  接收post发送的表单</li>
<li>$_REQUEST     接收get和post发送的表单</li>
</ul>
</li>
</ul>
<h3 id="_3-服务器" tabindex="-1"><a class="header-anchor" href="#_3-服务器" aria-hidden="true">#</a> 3. 服务器</h3>
<ul>
<li>提供服务的机器，也是一台计算机，超级计算机，给众多用户提供的服务能力。专门的网络、专用的机器、专人维护、永不宕机。</li>
</ul>
<h3 id="_4-获取服务器" tabindex="-1"><a class="header-anchor" href="#_4-获取服务器" aria-hidden="true">#</a> 4. 获取服务器</h3>
<ul>
<li>模拟
<ul>
<li>电脑模拟虚拟服务器（本地服务器）
<ul>
<li>工具，单独的工具</li>
<li>工具包
<ul>
<li>phpStudy
<ul>
<li>apache：默认端口是 <strong>80</strong></li>
<li>php语言包</li>
<li>数据库：mysql 默认端口是 <strong>3306</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>文件，代码，资料
<ul>
<li>放在服务器的根目录
<ul>
<li>phpStudy的是www文件夹</li>
<li>常见的根目录名字：www、web、webroot、wwwroot</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_5-如何使用本地服务器" tabindex="-1"><a class="header-anchor" href="#_5-如何使用本地服务器" aria-hidden="true">#</a> 5. 如何使用本地服务器</h3>
<ul>
<li>安装集成工具</li>
<li>启动对应的服务
<ul>
<li>apache：80</li>
<li>mysql：3306</li>
</ul>
</li>
<li>访问服务器
<ul>
<li>专用的<strong>服务器</strong>地址
<ul>
<li>默认情况下：本地服务器的地址
<ul>
<li>localhost：80</li>
<li>127.0.0.1：80</li>
</ul>
</li>
</ul>
</li>
<li>服务器的根目录
<ul>
<li>只有放在这个目录中，才能被apache找到，作为服务内容发给用户</li>
<li>可以指定，根据不同的软件，目录有所差别
<ul>
<li>phpstudy：安装路径/www</li>
</ul>
</li>
<li>只有在这个文件夹中，才能被服务器访问
<ul>
<li><strong>localhost就表示这个根目录</strong>无法使用../跳出根目录</li>
</ul>
</li>
<li>如果需要将一个网站火页面用过服务器环境运行，必须将所有内容（站点）都拷贝到服务器的根目录</li>
<li><strong>在服务器环境下不要出现中文路径</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2>
<h3 id="_1-php-写在哪" tabindex="-1"><a class="header-anchor" href="#_1-php-写在哪" aria-hidden="true">#</a> 1. php 写在哪</h3>
<ul>
<li>后端语言（服务器语言）</li>
<li>运行在服务器环境中
<ul>
<li>将文件放在服务器的根目录中</li>
</ul>
</li>
<li>创建一个php文件
<ul>
<li>后缀名：.php</li>
</ul>
</li>
</ul>
<h3 id="_2-怎么写" tabindex="-1"><a class="header-anchor" href="#_2-怎么写" aria-hidden="true">#</a> 2. 怎么写</h3>
<ul>
<li>基础结构</li>
</ul>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code>	<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
		<span class="token comment">#php代码</span>
	<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>基础语法
<ul>
<li>php的大部分语法和js相同
<ul>
<li><code v-pre>if(true){}</code></li>
<li><code v-pre>if(false){}else{}</code></li>
<li><code v-pre>switch(){}</code></li>
<li><code v-pre>for(){}</code></li>
<li><code v-pre>while(){}</code></li>
<li><code v-pre>do{}while()</code></li>
<li><code v-pre>function fn(){}</code></li>
</ul>
</li>
<li>php的变量
<ul>
<li><code v-pre>$</code>
<ul>
<li>php没有打印语句，只有发送
<ul>
<li><code v-pre>echo $a;</code></li>
<li><code v-pre>print $a;</code></li>
<li><code v-pre>print_r($a);</code> - 将复杂数据转成字符后发送</li>
</ul>
</li>
<li><code v-pre>die($a)</code> - 发送数据后会终止程序执行</li>
</ul>
</li>
<li>思想
<ul>
<li>php文件只能被服务器解析，解析之后，将数据发送到前端，前端如果没有主动接收，浏览器默认接收，也就是直接将发送到前端的数据，显示在浏览器</li>
<li>如果发送了html标签，可以直接被浏览器解析</li>
</ul>
</li>
<li>数据类型
<ul>
<li>字符，整形，浮点型，布尔，NULL</li>
<li>对象，数组，函数，资源型（数据库）</li>
<li>检测数据类型
<ul>
<li><code v-pre>var_dump($a);</code></li>
</ul>
</li>
</ul>
</li>
<li><strong>语句结束必须加分号，除非最后一行</strong></li>
<li>字符串
<ul>
<li><code v-pre>$a = &quot;hello&quot;;</code></li>
<li>支持换行写</li>
<li>连接符<code v-pre>.</code></li>
</ul>
</li>
<li>注释
<ul>
<li><code v-pre>#</code></li>
<li><code v-pre>//</code></li>
</ul>
</li>
<li>数组
<ul>
<li><strong>没有点语法，只有中括号语法</strong></li>
<li>索引数组
<ul>
<li><code v-pre>$arr = array(1,2,3,4,5);</code></li>
<li>长度的方法：<code v-pre>count($arr)</code></li>
<li>转json的方法：<code v-pre>json_encode($arr)</code></li>
<li>数组的遍历：<code v-pre>foreach($arr as $a=&gt;$b)</code></li>
<li>数组排序：
<ul>
<li><code v-pre>sort() 升序</code></li>
<li><code v-pre>rsort() 降序</code></li>
</ul>
</li>
</ul>
</li>
<li>关联数组
<ul>
<li><code v-pre>$arr = array(&quot;name&quot;=&gt;&quot;admin&quot;,&quot;age&quot;=&gt;18,&quot;arr&quot;=&gt;$arr1,&quot;o&quot;=&gt;$arr2);</code></li>
</ul>
</li>
</ul>
</li>
<li>实例和类<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">obj</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"admin"</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">name</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>var 声明属性的关键字</li>
<li>-&gt;等同于js的.</li>
</ul>
</li>
<li>作用域
<ul>
<li>不允许跨作用域拿数据，必须借助global关键字</li>
</ul>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">global</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
	<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2>
<h3 id="_1-数据库的操作" tabindex="-1"><a class="header-anchor" href="#_1-数据库的操作" aria-hidden="true">#</a> 1. 数据库的操作</h3>
<ul>
<li>建立链接</li>
<li>操作数据库：创建数据库</li>
<li>操作数据表：创建数据表
<ul>
<li>创建字段，设置数据类型</li>
</ul>
</li>
<li>操作数据：插入数据，删除数据，更新数据，查询数据</li>
</ul>
<h3 id="_2-使用编程语言操作数据库-php" tabindex="-1"><a class="header-anchor" href="#_2-使用编程语言操作数据库-php" aria-hidden="true">#</a> 2. 使用编程语言操作数据库 - <strong>php</strong></h3>
<ul>
<li>建立连接（2种方法）
<ul>
<li><code v-pre>mysqli_connect(&quot;localhost:3306&quot;,&quot;root&quot;,&quot;root&quot;,&quot;sh2009&quot;);</code></li>
<li>参数（数据库的地址和端口，用户名，密码，要选择的数据库）</li>
<li><code v-pre>new mysqli(&quot;localhost:3306&quot;,&quot;root&quot;,&quot;root&quot;,&quot;sh2009&quot;);</code></li>
</ul>
</li>
<li>选择数据库</li>
<li>数据的操作
<ul>
<li>配合mysql命令，实现数据的增删改查（字符形式）</li>
<li>增：<code v-pre>&quot;INSERT stu (userName,age) VALUES('root',19)&quot;</code></li>
<li>删：<code v-pre>&quot;DELETE FROM stu WHERE Id&gt;20&quot;</code></li>
<li>改：<code v-pre>&quot;UPDATE stu SET age=age+1&quot;</code></li>
<li>查：<code v-pre>&quot;SELECT * FROM stu&quot;;</code></li>
<li>查询：<code v-pre>mysqli_query(选中的数据库，插入的数据)</code></li>
</ul>
</li>
<li>查看数据方法
<ul>
<li>索引数组+关联数组查看数据：<code v-pre>$res-&gt;fetch_array()</code></li>
<li>索引数组查看数据：<code v-pre>$res-&gt;fetch_row();</code></li>
<li>关联数组查看数据：<code v-pre>$res-&gt;fetch_assoc(); </code>       √</li>
<li>对象方式查看数据：<code v-pre>$res-&gt;fetch_object();</code></li>
<li>以上四种方式每次执行返回一条记录的数据，可配合循环多次执行，查询所有数据</li>
</ul>
</li>
</ul>
</div></template>
