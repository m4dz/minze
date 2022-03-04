import{_ as n,c as s,o as a,a as t}from"./app.94d8410b.js";const g='{"title":"Registration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components-registration.md"}',e={},o=t(`<h1 id="registration" tabindex="-1">Registration <a class="header-anchor" href="#registration" aria-hidden="true">#</a></h1><p>The quickest way to register a component is to use the <code>define</code> method of the respective component.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Alternatively, you can register multiple components at once by using the <code>defineAll</code> method of the <code>Minze</code> class. See the <a href="/api/#defineall">API Reference</a> for more information.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Your component class name has to be either in <code>PascalCase</code> or <code>camelCase</code> when using this registration method.</p></div><p><strong>Example</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MinzeElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;minze&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">MinzeElement</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// automatic naming based on the class name</span>
MyElement<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// manual naming</span>
MyElement<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;my-custom-element&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-element</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-element</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-custom-element</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-custom-element</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>Shorthand Example</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MinzeElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;minze&#39;</span>

<span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">MinzeElement</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-element</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-element</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,10),p=[o];function c(l,i,u,k,r,m){return a(),s("div",null,p)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
