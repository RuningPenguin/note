# 选择器 

## 类型选择符
::: tip 
标记选择符/html选择器 <br>
选择标签名 
:::

```html
<style>
div { } 
</style>
<div></div> 
```

## id选择器(#) 
::: tip
id名只可以存在一个，不可以重复使用 <br>
id用#表示 
:::

```html
<style>
#box { } 
</style>
<div id="box"></div> 
```


## class选择器(.) 
::: tip
可以存在多个<br>
class用.表示 <br>
**【注】class名可以设置多个（用空格隔开）相同属性不同值，权重冲突，后面的权重值高**
:::

```html
<style>
.box { } 
.size { }
</style>
<div class="box size"></div> 
```


## 通配符选择器(*)
::: tip
网页的所有内容（一般用来清除内容自带边距） 
:::

```css
*{margin:"0" padding:"0"} 
```


## 群组选择器(,)
::: tip
用逗号链接不同的内容 <br>
可以设置不同元素的相同样式 
:::

```css
.nav,#box{} 
```

## 父子选择器(>隔开)
::: tip
父元素>子元素 
:::

```html
<style>
  .father > .son { } 
</style>

<div class="father">
  <div class="son"></div>
</div>
```

## 后代选择器(空格隔开)
::: tip
只要是包含关系都可以 
:::

```html
<style>
  .father span { } 
</style>

<div class="father">
  <div class="son">
    <span></span>
    <span></span>
  </div>
</div>
```


## 伪类选择器(a:) 
::: tip
想要a标签4个格式显示都正常必须按照顺序写 <br>
a:link-->a:visited-->a:hover-->a:active 
:::

| 伪类名称 | 作用 |
| :--: | :--: |
| :link | 超链接初始状态（一般超链接使用） |
| :visited | 超链接访问后状态（ 一般超链接使用） |
| :hover | 鼠标移入状态  |
| :active | 鼠标点击状态  |
