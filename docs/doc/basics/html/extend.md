# 扩展 

### 高级表格


​	table		表格	
​	caption	表格标题
​	tr				行
​	th				标题列
​	td				内容列

#### 	表格自带属性

​		rule与特点的border属性冲突

​		rule：	
​				rows（行分割线）
​				cols（列分割线）
​				all（行分割线和列分割线）
​				none（没有线）

#### 数据行分组
​	thead		表格头部
​	tbody		表格内容
​	tfoot		表格尾部

#### 	数据列分组
```html
<col></col>

<!-- ​		需要配合rules属性（rule="groups"） -->
<!-- ​			通过span属性可以设置几列为一组 -->

<col span="1">(只能设置1列，多个默认span相加)

<colgroup span="1"></colgroup>(可以设置多列)
```

​		

#### 	表格属性（css）
```css
  border-spacing: cellspacing;    /*单元格边框与边框的距离（cellspacing）*/
  ​border-collapse: collapse;      /*合并相邻的边框线*/
  ​empty-cells: hide;              /*设置表格没有内容时隐藏（不能设置border-collaose）*/
  ​table-layout:
  ​   fixed                        /*固定表格宽，加快表格运行速度*/
  ​   auto                         /*内容越多，宽度越大*/
```
		

### 音视频插入

#### 	视频 	video
```html
​		<video src="地址"></video>
```
::: tip
支持的格式: ogg / MP4 / webm
:::

##### 属性
| 属性名 | 属性值 |
| :--- | :--- |
| src | 视频路径 |
| controls | 播放控件（必须加） |
| loop | 重复播放 |
| autoplay | 自动播放（IE支持，其他可能不支持） |
| preload | 预加载 |
| muted | 静音 |
| poster | 视频播放前显示的图片（="图片路径"）<br> 设置视频开头图片大小css object-fit：fill / cover;<br> fill	填满播放器窗口		cover	等比放大 |


#### 	音频	audio
```html
	<audio src="音频地址”></audio>
```

::: tip
支持的格式: mpeg（MP3） / ogg / wav	(.flac是无损格式音频，需要转换才能插入)
:::

##### 属性
| 属性名 | 属性值 |
| :--- | :--- |
| src | 视频路径 |
| controls | 播放控件（必须加） |
| loop | 重复播放 |
| autoplay | 自动播放（IE支持，其他可能不支持） |
| preload | 预加载 |
| muted | 静音 |


#### 	兼容
::: tip 视频
  `<video></video>` 配合 `<source></source>` 分别插入3中不同格式的文件
:::

```html
<video controls>
	<source src="videos.mp4" type="video/mp4">
  <source src="videos.ogg" type="video/ogg">
  <source src="videos.webm" type="video/webm">
</video>
```


::: tip 音频
  `<audio></audio>` 配合 `<source></source>` 分别插入3中不同格式的文件
:::

```html
<audio controls>
  <source src="audios.mp3" type="mp3">
  <source src="audios.ogg" type="ogg">
  <source src="audios.wav" type="wav">
</audio>
```










