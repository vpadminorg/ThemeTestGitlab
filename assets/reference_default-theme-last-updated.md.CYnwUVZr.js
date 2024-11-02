import{_ as e,c as a,o as t,aT as s}from"./chunks/framework.1ERUbJUZ.js";const f=JSON.parse('{"title":"Last Updated","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-last-updated.md","filePath":"en/reference/default-theme-last-updated.md","lastUpdated":1730532675000}'),i={name:"reference/default-theme-last-updated.md"},l=s(`<h1 id="last-updated" tabindex="-1">Last Updated <a class="header-anchor" href="#last-updated" aria-label="Permalink to &quot;Last Updated&quot;">​</a></h1><p>The update time of the last content will be displayed in the lower right corner of the page. To enable it, add <code>lastUpdated</code> options to your config.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You need to commit the markdown file to see the updated time.</p></div><h2 id="site-level-config" tabindex="-1">Site-Level Config <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;Site-Level Config&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">Frontmatter Config <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Frontmatter Config&quot;">​</a></h2><p>This can be disabled per-page using the <code>lastUpdated</code> option on frontmatter:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Also refer <a href="./default-theme-config#lastupdated">Default Theme: Last Updated</a> for more details. Any truthy value at theme-level will also enable the feature unless explicitly disabled at site or page level.</p>`,9),n=[l];function d(p,o,h,r,c,k){return t(),a("div",null,n)}const g=e(i,[["render",d]]);export{f as __pageData,g as default};
