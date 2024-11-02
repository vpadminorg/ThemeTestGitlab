import{_ as s,c as a,o as i,aT as e}from"./chunks/framework.1ERUbJUZ.js";const E=JSON.parse('{"title":"푸터","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-footer.md","filePath":"ko/reference/default-theme-footer.md","lastUpdated":1730532675000}'),t={name:"ko/reference/default-theme-footer.md"},n=e(`<h1 id="footer" tabindex="-1">푸터 <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;푸터 {#footer}&quot;">​</a></h1><p>VitePress는 <code>themeConfig.footer</code>가 존재할 때 페이지 하단에 전역 푸터를 표시합니다.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Released under the MIT License.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Copyright © 2019-present Niceplugin&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 저작권 전에 표시되는 메시지.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 실제 저작권 텍스트.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  copyright</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>위의 구성은 HTML 문자열도 지원합니다. 예를 들어, 푸터 텍스트에 몇 가지 링크를 구성하고 싶다면, 다음과 같이 구성을 조정할 수 있습니다:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;a href=&quot;https://github.com/vuejs/vitepress/blob/main/LICENSE&quot;&gt;MIT 라이선스&lt;/a&gt;에 따라 릴리즈되었습니다.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;저작권 © 2019-현재 &lt;a href=&quot;https://github.com/yyx990803&quot;&gt;Evan You&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>message</code>와 <code>저작권</code>에는 <code>&lt;p&gt;</code> 요소 안에 렌더링되기 때문에 인라인 요소만 사용할 수 있습니다. 블록 요소를 추가하고 싶다면, 대신 <a href="./../guide/extending-default-theme#layout-slots"><code>layout-bottom</code></a> 슬롯을 사용하는 것을 고려하세요.</p></div><p>푸터는 <a href="./default-theme-sidebar">사이드바</a>가 보이는 경우에는 표시되지 않습니다.</p><h2 id="frontmatter-config" tabindex="-1">프론트매터 구성 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;프론트매터 구성 {#frontmatter-config}&quot;">​</a></h2><p>이 기능은 프론트매터의 <code>footer</code> 옵션을 사용하여 페이지별로 비활성화될 수 있습니다:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,11),l=[n];function p(h,k,o,r,d,c){return i(),a("div",null,l)}const y=s(t,[["render",p]]);export{E as __pageData,y as default};
