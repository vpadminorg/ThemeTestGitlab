import{_ as a,c as s,o as t,aT as e}from"./chunks/framework.1ERUbJUZ.js";const g=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"pt/guide/frontmatter.md","filePath":"pt/guide/frontmatter.md","lastUpdated":1730532675000}'),i={name:"pt/guide/frontmatter.md"},n=e(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h1><h2 id="usage" tabindex="-1">Utilização <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Utilização {#usage}&quot;">​</a></h2><p>VitePress suporta frontmatter YAML em todos os arquivos Markdown, processando-os com <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. O frontmatter deve estar no topo do arquivo Markdown (antes de qualquer elemento, incluindo tags <code>&lt;script&gt;</code>), e deve ter a forma de um YAML válido entre linhas com traços triplos. Exemplo:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Documentação com VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Muitas opções de configuração do site ou do tema padrão têm opções correspondentes no frontmatter. Você pode usar o frontmatter para sobrepor um comportamento específico apenas para a página atual. Para mais detalhes, veja <a href="./../reference/frontmatter-config">Referência de Configuração do Frontmatter</a>.</p><p>Você também pode definir dados próprios frontmatter personalizados, para serem usados em expressões Vue dinâmicas na página.</p><h2 id="accessing-frontmatter-data" tabindex="-1">Acesso aos Dados do Frontmatter <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;Acesso aos Dados do Frontmatter {#accessing-frontmatter-data}&quot;">​</a></h2><p>Os dados do frontmatter podem ser acessados por meio da variável global especial <code>$frontmatter</code>:</p><p>Aqui está um exemplo de como você poderia usá-lo em seu arquivo Markdown:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Documentação com VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Conteúdo do guia</span></span></code></pre></div><p>Você também pode acessar os dados do frontmatter da página atual em <code>&lt;script setup&gt;</code> com o auxiliar <a href="./../reference/runtime-api#usedata"><code>useData()</code></a>.</p><h2 id="alternative-frontmatter-formats" tabindex="-1">Formatos Alternativos do Frontmatter <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;Formatos Alternativos do Frontmatter {#alternative-frontmatter-formats}&quot;">​</a></h2><p>VitePress também suporta a sintaxe frontmatter JSON, começando e terminando com chaves:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Criando blog como um hacker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;editLink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div>`,14),o=[n];function r(p,l,d,h,c,k){return t(),s("div",null,o)}const u=a(i,[["render",r]]);export{g as __pageData,u as default};
