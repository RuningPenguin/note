
# 标签

## 标签总结 
::: tip
标签之间可以互相嵌套<br>
【注】换行标签(块元素)可以嵌套换行标签(块元素)和不换行标签(内联元素),没有自动换行的标签(内联元素)只能嵌套同类标签(内联元素)
:::


## 换行标签（块元素） 
**标题标签：h1-h6**
```html
<h1>h1标题</h1> 
<h2>h2标题</h2> 
<h3>h3标题</h3> 
<h4>h4标题</h4> 
<h5>h5标题</h5> 
<h6>h6标题</h6> 
```

**段落标签：p**
```html
<p>我是一个段落</p> 
```

**块元素标签：div**
```html
<div></div> 
```

**水平分割线 hr**
```html
<hr> 
```

**强制换行 br**
```html
<br> 
```


## 非换行标签（内联元素） 

**加粗**
```html
<b></b> 
<strong></strong> 
```

**倾斜**
```html
<i></i> 
<em></em> 
```

**下划线** 
```html
<u></u> 
```

**删除线** 
```html
<s></s> 
```

***上标*** 
```html
<sup></sup> 
```


**下标** 
```html
<sub></sub> 
```

***文本节点标签*** 
```html
<span></span> 
```


**转义字符** 
```html
&nbsp;      一个空格
&lt;        大于号
&gt;        小于号
&copy;      版权信息
```



## 列表 (块元素)
**列表可以互相嵌套**

### 有序列表 
- ol和li 
  ```html
  <ol>
    <li></li> 
    ... 
  </ol> 
  ```
::: tip 属性：
  **type**可以改变排序的符号<br>
  1,a,A,i,I <br>
  **start**改变开始位置（从几开始）<br>
  start="数字" 
:::

### 无序列表 
- ul和li 
```html
  <ul> 
  <li></li> 
  ... 
  </ul> 
```
::: tip 属性：
  **去除列表的点    list-style:none** <br>
  **type**可以改变列表前排序的符号 <br>
  disc        实心圆（默认） <br>
  circle      空心圆 <br>
  square      实心方块 <br>
:::


### 自定义列表 
- dl和dt、dd 
```html
  <dl> 
  <dt></dt> 
  <dd></dd> 
  </dl> 
```
::: details
  常用于商品展示和介绍 
  dt图片、dd文本
::: 

## 超链接 
```html
  <a href="http://网址" target="新网页弹出方式" title="悬浮提示框"></a> 
```

### 属性
| 属性名 | 属性值 |
| :--- | :--- |
| target | _self   原网页覆盖 <br> _blank  新窗口打开  |
| title | 悬浮提示框（全局属性） |
| href | 链接的网址或路径  |

### 路径
::: tip
  同级文件    直接写文件名    ./ <br>
  打开文件夹  文件夹名/ <br>
  返回上一层  ../ <br>
:::

### 链接本地网页
```html
  <a href="网页路径"></a> 
```

### 下载功能
```html
  <a href="文件路径（后缀名不是html）"></a> 
```


## 图片 
```html
  <img src="图片的路径" alt="图片替换的文本" title="悬浮提示框"> 
```

### 属性
| 属性名 | 属性值 |
| :--- | :--- |
| src | 图片的路径 |
| alt | 若图片加载错误显示的内容  |
| title | 悬浮提示框（全局属性） |

### 网页常见图片
::: tip 
  .jpg        普通图片 <br>
  .png        透明图片 <br>
  .gif        动态图片 <br>
:::

## 表格 
```html
<caption></caption>    表格的标题 
<table>声明表格 
  <tr>行 
    <th></th>标题列 
    <td></td>列 
    ... 
  </tr> 
</table> 
```

### 属性 
| 属性名 | 属性值 |
| :--- | :--- |
| width | 宽度 |
| height | 高度 |
| border | 边框 |
| cellpadding | 边框线与内容的距离 |
| cellspacing | 边框线与边框线的距离 |
|align| 对齐方式 <br> left        左对齐 <br> center        居中对齐 <br> right        右对齐 |
|valign(tr/rd)| 对齐方式 <br> top        顶部对齐 <br> middle        中部对齐 <br> bottom        底部对齐 |
|colspan(合并后需要删除多余单元格)| 合并列数 |
|rowspan(合并后需要删除多余单元格)| 合并行数 |

::: warning
【注】单元格的宽度由内容决定，无内容想要宽度时需要给列设置宽度 
:::

## 表单 
```html
<form> 
</form> 
```

### 属性 
| 属性名 | 属性值 |
| :--- | :--- |
| action | 数据传输的地址 |
| name | 名字（传输数据时需要） |
| method | 数据的传输方式 |
| get | 不安全，传输内容小 |
| post | 安全，内容不限制 |

## 表单控件

### input 
```html
<input type="text" name="用户名" value="默认值"/> 
```

#### 属性 
| 属性名 | 属性值 |
| :--- | :--- |
| name | 名字（传输数据时需要） |
| value | 默认值 |
| type | 功能 |
|placeholder| 提示文本 |

**type**
| 值 | 功能 |
| :--- | :--- |
| text | 文本框 |
| password | 密码框  |
| submit | 提交按钮 |
| reset | 重置按钮 |
| button | 空按钮 |
| radio | 单选框 |
| checkbox | 多选框 |
| file | 上传文件 |










### 下拉列表
```html
	<select name="" id="">
​   <option value="">下拉菜单内容</option>
  ...
​  </select>
```

#### 属性
| 属性名 | 属性值 |
| :--- | :--- |
| name | 名字（传输数据时需要） |
| value(option) | 下拉列表提交的内容 |
| selected(option) | 默认选中 |
| disabled(option) | 禁用 |


### 文本域（textarea）
```html
<textarea></textarea>
```

```css
/* 取消文本域拖拽效果 */
textarea{
  ​resize:none;/* 取消文本域拖拽效果*/
  outline:none;/* 取消文本框点击激活蓝色边框的样式*/			
}
```

#### 属性 
| 属性名 | 属性值 |
| :--- | :--- |
| name | 名字（传输数据时需要） |
| value | 用户输入数据（占位） |
| placeholder | 提示信息（不占位） |
| maxlength | 控制用户输入的长度 |

​	

