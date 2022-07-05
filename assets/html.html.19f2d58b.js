import{_ as a,o as n,c as t,f as s}from"./app.3651876a.js";const e={},l=s(`<h1 id="html\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#html\u57FA\u7840" aria-hidden="true">#</a> HTML\u57FA\u7840</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>html\uFF1A\uFF08Hyper Text Markup Language\uFF09\u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00 xhtml\uFF1A\uFF08EXtensible HyperText Markup Language\uFF09\u53EF\u6269\u5C55\u7684\u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00 html5\uFF1Ahtml\u7684\u7B2C5 \u4E2A\u7248\u672C</p><h2 id="web\u7684\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#web\u7684\u7EC4\u6210" aria-hidden="true">#</a> web\u7684\u7EC4\u6210</h2><table><thead><tr><th style="text-align:center;">\u7EC4\u6210</th><th></th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">\u7ED3\u6784</td><td>html/xhtml</td><td>(W3C\u89C4\u8303) \u6807\u8BB0\u8BED\u8A00</td></tr><tr><td style="text-align:center;">\u6837\u5F0F</td><td>css</td><td>(W3C\u89C4\u8303) \u6837\u5F0F\u8868</td></tr><tr><td style="text-align:center;">\u884C\u4E3A</td><td>javascript(js)</td><td>(ECAM\u89C4\u8303) \u811A\u672C\u8BED\u8A00</td></tr></tbody></table><h2 id="\u9879\u76EE\u7684\u547D\u540D\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7684\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a> \u9879\u76EE\u7684\u547D\u540D\u89C4\u8303</h2><div class="custom-container tip"><p class="custom-container-title">\u5EFA\u8BAE</p><p>\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u7EC4\u6210 <br> \u4E0D\u80FD\u4F7F\u7528\u4E2D\u6587\uFF0C\u7279\u6B8A\u5B57\u7B26\u548C\u7A7A\u683C <br> \u5F00\u5934\u6700\u597D\u5C0F\u5199 <br></p></div><h2 id="html\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#html\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> html\u57FA\u672C\u8BED\u6CD5</h2><p><strong>\u7528\u5C16\u62EC\u53F7 <code>&lt;&gt;</code> \u5305\u88F9\u7684\u82F1\u6587\u5355\u8BCD\u53EB\u505A\u6807\u8BB0</strong></p><h2 id="\u6807\u8BB0\u5206\u4E3A\u4E24\u79CD" tabindex="-1"><a class="header-anchor" href="#\u6807\u8BB0\u5206\u4E3A\u4E24\u79CD" aria-hidden="true">#</a> \u6807\u8BB0\u5206\u4E3A\u4E24\u79CD</h2><p>\u5355\u6807\u8BB0(\u7A7A\u6807\u8BB0)\u548C\u53CC\u6807\u8BB0</p><ul><li>\u5355\u6807\u8BB0: <code>&lt;\u6807\u8BB0\u540D \u5C5E\u6027=&quot;\u5C5E\u6027\u503C&quot; \u5C5E\u6027=&quot;\u5C5E\u6027\u503C&quot;/&gt; </code></li><li>\u53CC\u6807\u8BB0: <code>&lt;\u6807\u8BB0\u540D \u5C5E\u6027=&quot;\u5C5E\u6027\u503C&quot;&gt;&lt;/\u6807\u8BB0\u540D&gt; </code></li></ul><h2 id="html\u7684\u57FA\u672C\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#html\u7684\u57FA\u672C\u7ED3\u6784" aria-hidden="true">#</a> html\u7684\u57FA\u672C\u7ED3\u6784</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u58F0\u660E\u6587\u6863\u7C7B\u578B\u4E3Ahtml --&gt;</span> 
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span> 
<span class="token comment">&lt;!-- \u6807\u8BB0\u8BED\u8A00 --&gt;</span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span> 
  <span class="token comment">&lt;!-- \u7F51\u9875\u7684\u5934\u90E8 --&gt;</span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span> 
    <span class="token comment">&lt;!-- \u8BBE\u7F6E\u7F16\u7801\u7C7B\u578B\u4E3Autf-8 --&gt;</span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\u7F51\u9875\u540D\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span> 

  <span class="token comment">&lt;!-- \u7F51\u9875\u7684\u8EAB\u4F53 --&gt;</span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[l];function p(i,o){return n(),t("div",null,c)}var u=a(e,[["render",p],["__file","html.html.vue"]]);export{u as default};