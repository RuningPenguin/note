import{_ as n,o as s,c as a,f as e}from"./app.3651876a.js";const l={},t=e(`<h1 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h1><h2 id="jquery\u7684\u591A\u5E93\u5E76\u5B58" tabindex="-1"><a class="header-anchor" href="#jquery\u7684\u591A\u5E93\u5E76\u5B58" aria-hidden="true">#</a> jQuery\u7684\u591A\u5E93\u5E76\u5B58</h2><ul><li><code>window.jQuery=window.$=jQuery</code></li><li>\u901A\u8FC7\u8FD9\u53E5\u4EE3\u7801\uFF0C\u5411window\u4E0A\u6DFB\u52A0\u4E86\u4E24\u4E2A\u53D8\u91CF</li><li>\u81EA\u5DF1\u4E5F\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E2A\u5E93</li><li>jQuery \u548C $ \u8FD9\u4E24\u4E2A\u540D\u5B57\u8C01\u90FD\u53EF\u4EE5\u7528</li><li>\u6211\u4EEC\u81EA\u5DF1\u5C01\u88C5\u7684\u5E93\uFF0C\u4E5F\u5411\u5916\u66B4\u9732 $ \u548C jQuery</li><li>\u5F53\u4E24\u4E2A\u5E93\u540C\u65F6\u5F15\u5165\u7684\u65F6\u5019</li><li>\u8C01\u5F15\u5165\u5728\u540E\u9762\uFF0C\u4EE5\u8C01\u4E3A\u51C6</li><li>\u95EE\u9898\uFF1A\u6CA1\u6709\u529E\u6CD5\u4E24\u4E2A\u4E00\u8D77\u7528</li><li>jQuery\u7684\u5C01\u88C5\u4E2D\uFF0C\u53EF\u4EE5\u8BA9\u51FA\u63A7\u5236\u6743</li><li>\u53EA\u8981\u5728\u6700\u540E\u5F15\u5165jQuery</li><li>\u6267\u884C\u4E00\u4E0B\u8BA9\u51FA $ \u548C jQuery\u53D8\u91CF\u540D\u63A7\u5236\u6743\u7684\u4EE3\u7801</li><li>\u4F60\u7684 $ \u548C jQuery\u5C31\u53EF\u4EE5\u5E72\u522B\u7684\u4E86</li></ul><h2 id="noconflict-\u4E0D\u77DB\u76FE\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#noconflict-\u4E0D\u77DB\u76FE\u51B2\u7A81" aria-hidden="true">#</a> $.noConflict() \u4E0D\u77DB\u76FE\u51B2\u7A81</h2><ul><li>\u8FD9\u53E5\u4EE3\u7801\u4E00\u65E6\u6267\u884C\uFF0C\u90A3\u4E48 $ \u5C31\u4E0D\u518D\u4EE3\u8868 jQuery\u4E86</li><li>\u4F60\u4E4B\u524D\u4EE3\u8868\u7684\u662F\u4EC0\u4E48\u8FD8\u662F\u4EC0\u4E48</li></ul><h2 id="noconflict-true" tabindex="-1"><a class="header-anchor" href="#noconflict-true" aria-hidden="true">#</a> $.noConflict(true)</h2><ul><li>\u8FD9\u53E5\u4EE3\u7801\u4E00\u65E6\u6267\u884C\uFF0C\u90A3\u4E48 $ \u548C jQuery\u5C31\u90FD\u4E0D\u518D\u4EE3\u8868jQuery\u4E86</li><li>let \u53D8\u91CF = $.noConflict(true)</li><li>\u8FD9\u53E5\u4EE3\u7801\u6267\u884C\uFF0C\u90A3\u4E48\u4F60\u5B9A\u4E49\u7684\u8FD9\u4E2A\u53D8\u91CF\u662F\u4EC0\u4E48</li><li>\u8FD9\u4E2A\u53D8\u91CF\u5C31\u6765\u4EE3\u8868 jQuery</li></ul><h2 id="jquery\u7684\u63D2\u4EF6\u6269\u5C55\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#jquery\u7684\u63D2\u4EF6\u6269\u5C55\u673A\u5236" aria-hidden="true">#</a> jQuery\u7684\u63D2\u4EF6\u6269\u5C55\u673A\u5236</h2><ul><li>jQuery\u63D0\u4F9B\u4E86\u4E00\u5927\u5806\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F\u6015\u4E0D\u591F\u7528</li><li>\u7ED9\u5F00\u653E\u4E86\u4E00\u4E2A\u501F\u53E3\uFF0C\u53EF\u4EE5\u5411 jQuery \u91CC\u9762\u6269\u5C55\u4E00\u4E9B\u65B9\u6CD5\u4F7F\u7528</li></ul><h3 id="extend-\u6269\u5C55\u7ED9-jquery-\u672C\u8EAB" tabindex="-1"><a class="header-anchor" href="#extend-\u6269\u5C55\u7ED9-jquery-\u672C\u8EAB" aria-hidden="true">#</a> $.extend() \u6269\u5C55\u7ED9 jQuery \u672C\u8EAB</h3><ul><li>\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u662F\u4E2A\u5BF9\u8C61</li><li>\u5BF9\u8C61\u91CC\u9762\u5199\u8981\u6269\u5C55\u7684\u65B9\u6CD5</li><li>\u5C06\u6765\u4F7F\u7528\u7684\u65F6\u5019\u662F\uFF1A$.xxx()</li></ul><h3 id="fn-extend-\u6269\u5C55\u7ED9-jquery-\u7684\u5143\u7D20\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#fn-extend-\u6269\u5C55\u7ED9-jquery-\u7684\u5143\u7D20\u96C6\u5408" aria-hidden="true">#</a> $.fn.extend() \u6269\u5C55\u7ED9 jQuery \u7684\u5143\u7D20\u96C6\u5408</h3><ul><li>\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u662F\u4E2A\u5BF9\u8C61</li><li>\u5BF9\u8C61\u91CC\u9762\u5199\u8981\u6269\u5C55\u7684\u65B9\u6CD5</li><li>\u5C06\u6765\u4F7F\u7528\u7684\u65F6\u5019\u662F\uFF1A$(\u9009\u62E9\u5668).xxx()</li></ul><h2 id="jquery-\u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#jquery-\u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> jQuery \u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D</h2><ul><li>\u5BF9\u4E8E\u4E00\u4E2A\u8D1F\u8D23\u6570\u636E\u7C7B\u578B\u7684\u64CD\u4F5C <ul><li>\u8D4B\u503C</li><li>\u6D45\u62F7\u8D1D</li><li>\u6DF1\u62F7\u8D1D</li></ul></li><li>\u8D4B\u503C\uFF1A <ul><li>\u76F8\u5F53\u4E8E\u628A\u4E00\u4E2A\u6570\u636E\u7684\u5730\u5740\u7ED9\u5230\u53E6\u4E00\u4E2A\u5730\u5740 <ul><li>let a = b</li></ul></li></ul></li><li>\u6D45\u62F7\u8D1D\uFF1A <ul><li>\u628A\u4E00\u4E2A\u5BF9\u8C61\u91CC\u7684\u6BCF\u4E00\u4E2A\u6210\u5458\u90FD\u590D\u5236\u4E00\u4EFD\u653E\u5230\u65B0\u7684\u5BF9\u8C61\u91CC\u9762 <ul><li>\u4E24\u4E2A\u5BF9\u8C61\u5206\u522B\u662F\u4E24\u4E2A\u5BF9\u8C61\u7A7A\u95F4</li><li>\u901A\u8FC7 for in \u5FAA\u73AF\u6765\u5B9E\u73B0\u7684</li></ul></li><li>\u4FEE\u6539\u7B2C\u4E00\u5C42\u7684\u5C5E\u6027\u662F\u4E0D\u4F1A\u6539\u53D8\u7684</li><li>\u5982\u679C\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E00\u4E2A\u6210\u5458\u662F\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\u6BD4\u5982\u6570\u7EC4\u3001\u5BF9\u8C61\uFF0C\u8FD9\u5C31\u662F\u7B2C\u4E8C\u5C42 <ul><li>\u4F60\u6D45\u62F7\u8D1D\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u4F60\u64CD\u4F5C\u7684\u8FD9\u4E2A\u6570\u636E\u7C7B\u578B\u7684\u6210\u5458\uFF0C\u4F9D\u65E7\u662F\u5728\u64CD\u4F5C\u4E00\u4E2A\u5185\u5BB9</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> o1<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u6709\u591A\u5C11\u6210\u5458\u6267\u884C\u51E0\u6B21</span>
    <span class="token comment">//\u6BCF\u6B21\u5FAA\u73AF\uFF0Ckey\u5206\u522B\u8868\u793Ao1\u91CC\u7684\u6210\u5458\u540D\u79F0</span>
    <span class="token comment">//\u7136\u540E\u628A\u4ED6\u6BCF\u4E00\u4E2A\u6210\u5458\u653E\u8FDBo3\u91CC</span>
    o3<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token comment">// o1 \u91CC\u9762\u7684 hobby \u5B58\u50A8\u7684\u662F\u4E00\u4E2A\u6570\u7EC4\u7684\u5730\u5740</span>
    <span class="token comment">// \u8D4B\u503C\u7ED9 o3 \u91CC\u9762\u7684 hobby \u5B58\u50A8\u7684\u4E5F\u662F\u4E00\u4E2A\u6570\u7EC4\u7684\u5730\u5740</span>
    <span class="token comment">// \u8FD9\u6837\u8D4B\u503C\u5B8C\u6BD5\u4EE5\u540E, o1.hobby \u548C o3.hobby \u662F\u5B58\u50A8\u7684\u540C\u4E00\u4E2A\u5730\u5740</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>\u6DF1\u62F7\u8D1D\uFF1A <ul><li>\u628A\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A\u6210\u5458\u90FD\u590D\u5236\u4E00\u4EFD\u5230\u65B0\u7684\u5BF9\u8C61\u91CC\u9762 <ul><li>\u5F53\u5BF9\u8C61\u91CC\u7684\u67D0\u4E00\u4E2A\u6210\u5458\u662F\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019</li><li>\u7EE7\u7EED\u5FAA\u73AF\u904D\u5386\u8FD9\u4E2A\u590D\u6742\u7C7B\u578B</li><li>\u5728\u5FC3\u7684\u5BF9\u8C61\u91CC\u9762\u4E5F\u521B\u9020\u4E00\u4E2A\u590D\u6742\u6570\u636E\u7C7B\u578B\u7EE7\u7EED\u590D\u5236\u8FDB\u53BB</li></ul></li><li>\u901A\u8FC7\u9012\u5F52\u51FD\u6570\u6765\u5B9E\u73B0\u6DF1\u62F7\u8D1D <ul><li>\u5728\u51FD\u6570\u5185\u90E8\u5224\u65AD\uFF0C\u5982\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61\u6216\u6570\u7EC4</li><li>\u5C31\u518D\u6B21\u8C03\u7528\u51FD\u6570\u9012\u5F52\u8FD9\u4E2A\u590D\u6742\u6570\u636E\u7C7B\u578B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">//\u8DDF\u6D45\u62F7\u8D1D\u7C7B\u4F3C\uFF0C\u53EA\u662F\u591A\u4E86\u5FAA\u73AF\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u6B65\u9AA4</span>
  <span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">oldO\uFF0CnewO</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> oldO<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//\u5148\u5224\u65AD\u4E00\u4E0B\u662F\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u7684\u8BDD\uFF0C\u8981\u518D\u5FAA\u73AF\u4E00\u6B21</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">)</span><span class="token punctuation">{</span>
      newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token function">deepCopy</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span><span class="token punctuation">{</span>
      newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token function">deepCopy</span><span class="token punctuation">(</span>oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token comment">//\u4ED6\u65E2\u4E0D\u662F\u6570\u7EC4\u4E5F\u4E0D\u662F\u5BF9\u8C61\uFF0C\u76F4\u63A5\u8D4B\u503C</span>
      newO<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> oldO<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">deepCopy</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><strong>jQuery\u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D</strong><ul><li>\u8BED\u6CD5\uFF1A<strong>$.extend()</strong><ul><li>\u53EA\u4F20\u9012\u4E00\u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u662F\u6269\u5C55</li><li>\u4F20\u9012\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u662F\u62F7\u8D1D</li></ul></li><li><strong>\u6D45\u62F7\u8D1D</strong><ul><li>\u8BED\u6CD5\uFF1A$.extend(\u65B0\u5BF9\u8C61\uFF0C\u65E7\u5BF9\u8C611\uFF0C\u65E7\u5BF9\u8C612\uFF0C...) <ul><li>\u628A\u4ECE\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5F00\u59CB\u7684\u6240\u6709\u5BF9\u8C61\u91CC\u9762\u7684\u6570\u636E</li><li>\u5168\u90E8\u62F7\u8D1D\u5230\u7B2C\u4E00\u53C2\u6570\u5BF9\u8C61\u91CC\u9762</li></ul></li></ul></li><li><strong>\u6DF1\u62F7\u8D1D</strong><ul><li>\u8BED\u6CD5\uFF1A$.extend(true,\u65B0\u5BF9\u8C61\uFF0C\u65E7\u5BF9\u8C611\uFF0C\u65E7\u5BF9\u8C612\uFF0C...) <ul><li>\u628A\u4ECE\u7B2C\u4E09\u4E2A\u53C2\u6570\u5F00\u59CB\u7684\u6240\u6709\u5BF9\u8C61\u91CC\u7684\u6570\u636E</li><li>\u5168\u90E8\u62F7\u8D1D\u5230\u7B2C\u4E8C\u4E2A\u53C2\u6570\u91CC\u9762</li></ul></li></ul></li><li>$.extend()\u8FDB\u884C\u62F7\u8D1D\u7684\u65F6\u5019 <ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E0D\u5199\uFF0C\u8868\u793A\u6D45\u62F7\u8D1D</li><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u5199 true \u8868\u793A\u6DF1\u62F7\u8D1D</li><li>\u6CE8\u610F\uFF1A<strong>\u4E0D\u80FD\u5199 false</strong></li></ul></li></ul></li></ul><h2 id="jquery-\u8868\u5355\u9A8C\u8BC1\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#jquery-\u8868\u5355\u9A8C\u8BC1\u63D2\u4EF6" aria-hidden="true">#</a> jQuery \u8868\u5355\u9A8C\u8BC1\u63D2\u4EF6</h2><ul><li>jquery-validate</li><li>\u4E13\u95E8\u6765\u4F5C\u8868\u5355\u9A8C\u8BC1</li><li>\u4E0B\u8F7D\u63D2\u4EF6: \u76F4\u63A5\u767E\u5EA6\u641C\u7D22 jqueryvalidate</li><li>\u4F7F\u7528\uFF1A <ol><li>\u5BFC\u5165\u6587\u4EF6</li></ol><ul><li>\u9700\u8981\u4E00\u4E2A jquery.js</li><li>\u9700\u8981\u4E00\u4E2A jquery.validate.js</li><li>validate \u5FC5\u987B\u8981\u5F15\u5165\u5728 jQuery \u4EE5\u540E</li><li>\u56E0\u4E3A\u4ED6\u5728\u5411 jQuery \u91CC\u9762\u6269\u5C55\u4E00\u4E9B\u5185\u5BB9</li></ul><ol start="2"><li>\u51C6\u5907\u4E00\u4E2A html \u7ED3\u6784</li><li>\u5BF9 form \u6807\u7B7E\u5F00\u542F\u8868\u5355\u9A8C\u8BC1\u529F\u80FD</li></ol><ul><li>\u5728 rules \u91CC\u9762\u8FDB\u884C\u4F60\u7684\u89C4\u5219\u4E66\u5199</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u8868\u793A\u9A8C\u8BC1\u89C4\u5219</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u6709 name=&quot;username&quot; \u7684 input \u8FDB\u884C\u9A8C\u8BC1</span>
    <span class="token comment">// \u5982\u679C\u53EA\u5199\u4E00\u4E2A\u9A8C\u8BC1, \u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u5199\u5B57\u7B26\u4E32</span>
    <span class="token comment">// \u5982\u679C\u4F60\u8981\u5199\u591A\u4E2A\u9A8C\u8BC1\u89C4\u5219, \u90A3\u4E48\u5C31\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u4E66\u5199</span>
    <span class="token comment">// \u7ED9 \u7528\u6237\u540D \u6587\u672C\u6846\u6DFB\u52A0\u4E86\u4E00\u4E2A\u9A8C\u8BC1\u89C4\u5219, \u662F\u5FC5\u586B</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;required&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5BF9\u6709 name=&quot;password&quot; \u7684\u6587\u672C\u6846\u8FDB\u884C\u9A8C\u8BC1</span>
    <span class="token comment">// \u5BF9\u8C61\u7684\u5F62\u5F0F\u8868\u793A\u6211\u8981\u4E66\u5199\u591A\u6761\u89C4\u5219</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5C11\u4E94\u4E2A\u5B57\u7B26</span>
    <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">// \u6700\u591A\u5341\u4E2A\u5B57\u7B26</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u5BF9\u6709 name=&quot;age&quot; \u7684\u6587\u672C\u6846\u8FDB\u884C\u9A8C\u8BC1</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u793A\u6700\u5C0F\u503C</span>
    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u9A8C\u8BC1\u5931\u8D25\u7684\u63D0\u793A\u6587\u5B57</span>
            <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u548C\u89C4\u5219\u7684\u4E66\u5199\u8BED\u6CD5\u662F\u4E00\u6837\u7684</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7528\u6237\u540D! @-@&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u586B\u5199\u6B63\u786E\u7684\u5BC6\u7801! ^_^&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token string">&#39;\u4F60\u8F93\u5165\u7684\u8FD8\u4E0D\u591F&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token string">&#39;\u4F60\u8F93\u5165\u7684\u592A\u591A\u4E86&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token string">&#39;18 \u5C81\u4EE5\u4E0B\u8BF7\u5728\u7236\u6BCD\u966A\u540C\u4E0B\u89C2\u770B&#39;</span>
    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u5F53\u8868\u5355\u9A8C\u8BC1\u901A\u8FC7\u7684\u65F6\u5019</span>
            <span class="token comment">// \u4F60\u70B9\u51FB\u767B\u5F55\u6216\u8005\u6572\u51FB\u56DE\u8F66\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u7684</span>
            <span class="token function">submitHandler</span> <span class="token punctuation">(</span><span class="token parameter">form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// form \u53C2\u6570\u8868\u793A\u7684\u5C31\u662F\u8FD9\u4E2A form \u6807\u7B7E</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>
    <span class="token comment">// \u8868\u5355\u63D0\u4EA4\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u8981\u63D0\u4EA4\u8868\u5355\u4E86&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u53D1\u9001 ajax \u628A\u7528\u6237\u540D\u5BC6\u7801 \u63D0\u4EA4\u5230\u540E\u7AEF</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="jquery-\u5165\u53E3\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#jquery-\u5165\u53E3\u51FD\u6570" aria-hidden="true">#</a> jQuery \u5165\u53E3\u51FD\u6570</h2><ul><li>ready()\u51FD\u6570</li><li>\u7528\u6CD5: <strong>$(window).ready(function () {})</strong><ul><li>\u7C7B\u4F3C\u4E8E window.onload = function () {}</li><li>\u6709\u4E00\u4E2A\u7B80\u5199\u5F62\u5F0F <ul><li><strong>$(function () {})</strong></li></ul></li></ul></li><li>\u533A\u522B\uFF1A <ul><li>window.onload:\u9875\u9762\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6BD5</li><li>$(window).ready()\uFF1A\u9875\u9762 dom \u7ED3\u6784\u52A0\u8F7D\u5B8C\u6210</li></ul></li><li>\u5165\u53E3\u51FD\u6570\u7EDD\u5BF9\u4F1A\u6BD4window.onload\u66F4\u5FEB\u6267\u884C</li><li>\u603B\u7ED3$()\uFF1A <ul><li>\u4F20\u9012\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u9009\u62E9\u5668\u7684\u65F6\u5019, \u662F\u83B7\u53D6\u5143\u7D20</li><li>\u4F20\u9012\u7684\u53C2\u6570\u662F\u4E00\u4E2A html \u683C\u5F0F\u5B57\u7B26\u4E32\u7684\u65F6\u5019, \u662F\u521B\u5EFA\u8282\u70B9</li><li>\u4F20\u9012\u7684\u53C2\u6570\u662F\u4E00\u4E2A \u51FD\u6570 \u7684\u65F6\u5019, \u5C31\u662F jQuery \u7684 \u5165\u53E3\u51FD\u6570</li></ul></li></ul>`,19),i=[t];function p(o,c){return s(),a("div",null,i)}var r=n(l,[["render",p],["__file","extend.html.vue"]]);export{r as default};