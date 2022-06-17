<template><div><h1 id="权重" tabindex="-1"><a class="header-anchor" href="#权重" aria-hidden="true">#</a> 权重</h1>
<p><strong>对同一个元素设置相同的属性，但属性值不同，谁的权重值高设置谁。</strong></p>
<h2 id="样式表的权重" tabindex="-1"><a class="header-anchor" href="#样式表的权重" aria-hidden="true">#</a> 样式表的权重</h2>
<p>内联样式表最高</p>
<p>内部与外部和顺序有关，谁在下面谁的权重值高！</p>
<h2 id="选择器的权重" tabindex="-1"><a class="header-anchor" href="#选择器的权重" aria-hidden="true">#</a> 选择器的权重</h2>
<h3 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h3>
<div class="custom-container tip"><p class="custom-container-title">（0000）</p>
<p>内联样式表  1000 <strong>&gt;</strong> id  0100 <strong>&gt;</strong> class（伪类）  0010 <strong>&gt;</strong> 标签名  0001 <strong>&gt;</strong> *  0000</p>
</div>
<h3 id="包含选择器" tabindex="-1"><a class="header-anchor" href="#包含选择器" aria-hidden="true">#</a> 包含选择器</h3>
<div class="custom-container tip"><p class="custom-container-title">(> 空格)</p>
<p>包含选择器的权重是计算所有选择器权重之和</p>
</div>
<h3 id="群组选择器" tabindex="-1"><a class="header-anchor" href="#群组选择器" aria-hidden="true">#</a> 群组选择器</h3>
<div class="custom-container tip"><p class="custom-container-title">(,)</p>
<p>无权重高低之分</p>
</div>
</div></template>
