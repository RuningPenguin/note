# 字体 

## 字体大小 
```css
.el{font-size: 10px;}
```

::: tip
浏览器默认大小是16px <br>
如果自己没有font-size，以父元素的为准，如果自己有，以自己的为准<br>
字体大小单位为px，可以设置百分比，如：50%;(px,pt,em)
:::


## 字体颜色 
```css
.el{color: #333;}
```

::: tip
color 的值可以是:单词、16进制、rgb(,,)、rgba(,,,)  <br>
:::

## 字体粗细 
```css
.el{font-weight: bold;}
```

| 值 | 描述 |
| :-: | :-: |
| bold | 粗体 |
| bolder | 更粗 |
| normal | 取消加粗（默认） |
|100--900| 数字100--900（500是正常粗细） |


## 字体样式 
```css
.el{font-family: 'Courier New', Courier, monospace;}
```

::: tip
默认宋体或新宋体  中文和多个英文单词用 
:::

## 字体倾斜 
```css
.el{font-style: normal;}
```
| 值 | 描述 |
| :-: | :-: |
| normal | 取消倾斜（默认） |
| italic | 倾斜 |
| oblique | 更倾斜 |


## 字体大小写 
```css
.el{font-variant: none;}
```

| 值 | 描述 |
| :-: | :-: |
| normal/none | 取消大小写（默认） |
| small-caps | 小型大写字母 |
| capitalize | 首字母大写 |
| uppercase | 大写 |
| lowercase | 小写 |


## font的简写 
::: tip
加粗    倾斜    小型大写字母    大小    字体样式（后面的两位固定） 
:::

```css
.el{font: bold italic small-caps 12px/1.5 'Courier New', Courier, monospace;}
```

