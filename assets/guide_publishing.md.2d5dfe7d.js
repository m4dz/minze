import{_ as n,c as a,o as s,a as t}from"./app.94d8410b.js";const g='{"title":"Publishing","description":"","frontmatter":{},"headers":[{"level":2,"title":"npm","slug":"npm"},{"level":2,"title":"Using","slug":"using"},{"level":3,"title":"npm","slug":"npm-1"},{"level":3,"title":"CDN","slug":"cdn"}],"relativePath":"guide/publishing.md"}',e={},p=t(`<h1 id="publishing" tabindex="-1">Publishing <a class="header-anchor" href="#publishing" aria-hidden="true">#</a></h1><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><p>If you set up an environment via the <code>create-minze</code> CLI, you can publish your components to npm in two simple steps.</p><p><strong>1. Build</strong></p><blockquote><p>This command creates a dist directory with an <code>es</code> build, a <code>CDN</code> build and Type Declarations (If you selected the TypeScript template).</p></blockquote><div class="language-bash"><pre><code><span class="token comment"># npm</span>
$ <span class="token function">npm</span> run build

<span class="token comment"># yarn</span>
$ <span class="token function">yarn</span> build

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> run build
</code></pre></div><p><strong>2. Publish</strong></p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> publish
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a default npm command refer to the npm <a href="https://docs.npmjs.com/cli/v8/commands/npm-publish" target="_blank" rel="noopener noreferrer">docs</a> for more information.</p></div><h2 id="using" tabindex="-1">Using <a class="header-anchor" href="#using" aria-hidden="true">#</a></h2><p>To use your package in a project simply install <code>minze</code> plus your package.</p><blockquote><p>Let&#39;s assume you published your library under the name <code>my-awesome-package</code></p></blockquote><h3 id="npm-1" tabindex="-1">npm <a class="header-anchor" href="#npm-1" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span> minze my-awesome-package
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> Minze <span class="token keyword">from</span> <span class="token string">&#39;minze&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyAwesomeElement<span class="token punctuation">,</span> MyAwesomeElementTwo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my-awesome-package&#39;</span>

Minze<span class="token punctuation">.</span><span class="token function">defineAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>MyAwesomeElement<span class="token punctuation">,</span> MyAwesomeElementTwo<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-awesome-element</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-awesome-element</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-awesome-element-two</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-awesome-element-two</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h3><p>If you have published your package to npm, you can also load it via a CDN link from <code>unpkg</code> or <code>jsdelivr</code>. Pick one of the following:</p><p><strong>unpkg</strong></p><ul><li><code>//unpkg.com/my-awesome-package@latest</code> for latest version</li><li><code>//unpkg.com/my-awesome-package@1.0.0</code> pin to specific version</li></ul><p><strong>jsdelivr</strong></p><ul><li><code>//cdn.jsdelivr.net/npm/my-awesome-package@latest</code> for latest version</li><li><code>//cdn.jsdelivr.net/npm/my-awesome-package@1.0.0</code> pin to specific version</li></ul><p><strong>Example</strong></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- custom components --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-awesome-element</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-awesome-element</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-awesome-element-two</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-awesome-element-two</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- cdn link --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/my-awesome-package@latest<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,24),o=[p];function c(l,i,u,k,r,m){return s(),a("div",null,o)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
