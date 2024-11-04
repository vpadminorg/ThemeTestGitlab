import{_ as s,c as i,o as a,aT as e}from"./chunks/framework.1ERUbJUZ.js";const g=JSON.parse('{"title":"Iniciando","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/getting-started.md","filePath":"es/guide/getting-started.md","lastUpdated":1730532675000}'),n={name:"es/guide/getting-started.md"},t=e(`<h1 id="getting-started" tabindex="-1">Iniciando <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Iniciando {#getting-started}&quot;">​</a></h1><h2 id="try-it-online" tabindex="-1">Experimente Online <a class="header-anchor" href="#try-it-online" aria-label="Permalink to &quot;Experimente Online {#try-it-online}&quot;">​</a></h2><p>Puede experimentar VitePress directamente en su navegador en <a href="https://vitepress.new" target="_blank" rel="noreferrer">StackBlitz</a>.</p><h2 id="installation" tabindex="-1">Instalación <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Instalación {#installation}&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerrequisitos <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerrequisitos {#prerequisites}&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> versión 18 o superior.</li><li>Terminal para acessar VitePress a través de su interfaz de linea de comando (CLI).</li><li>Editor de texto con soporte a sintaxis <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>. <ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> es recomendado, junto con la <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">extensión oficial Vue</a>.</li></ul></li></ul><p>VitePress puede ser usado solo, o ser instalado en un proyecto ya existente. En ambos casos, puede instalarlo con:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NqlsZ" id="tab-3k6RD1Y" checked><label for="tab-3k6RD1Y">npm</label><input type="radio" name="group-NqlsZ" id="tab-wekNlw_"><label for="tab-wekNlw_">pnpm</label><input type="radio" name="group-NqlsZ" id="tab-mPdRGWc"><label for="tab-mPdRGWc">yarn</label><input type="radio" name="group-NqlsZ" id="tab-f7eOKdI"><label for="tab-f7eOKdI">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div></div></div><p>::: detalles recibiendo avisos sobre dependencias ausentes? Si usa PNPM, percibirá un aviso de ausencia de <code>@docsearch/js</code>. Esto no evita que VitePress funcione. Si desea eliminar este aviso, adicione lo siguiente en su <code>package.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;peerDependencyRules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignoreMissing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;@algolia/client-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;search-insights&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>:::</p><div class="tip custom-block"><p class="custom-block-title">NOTA</p><p>VitePress es un paquete apenas para ESM. No use <code>require()</code> para importarlo, y asegurese de que el <code>package.json</code> más cercano contiene <code>&quot;type&quot;: &quot;module&quot;</code>, o cambie la extensión de archivo de sus archivos relevantes como <code>.vitepress/config.js</code> a <code>.mjs</code>/<code>.mts</code>. Consulte la <a href="http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only" target="_blank" rel="noreferrer">Guía de resolución de problemas Vite</a> para más detalles. Además de eso, dentro de contextos de JavaScript asíncronos, puede usar <code>await import(&#39;vitepress&#39;)</code>.</p></div><h3 id="setup-wizard" tabindex="-1">Asistente de Instalación <a class="header-anchor" href="#setup-wizard" aria-label="Permalink to &quot;Asistente de Instalación {#setup-wizard}&quot;">​</a></h3><p>VitePress tiene embutido un asistente de instalación por linea de comando que ayudará a construir un proyecto básico. Después de la instalación, inicie el asistente ejecutando:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cS5iF" id="tab-rSdSnFm" checked><label for="tab-rSdSnFm">npm</label><input type="radio" name="group-cS5iF" id="tab-AHnzgJA"><label for="tab-AHnzgJA">pnpm</label><input type="radio" name="group-cS5iF" id="tab-TYXdScr"><label for="tab-TYXdScr">yarn</label><input type="radio" name="group-cS5iF" id="tab-IrKrOTP"><label for="tab-IrKrOTP">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div></div></div><p>Será saludado con algunas preguntas simples:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">┌</span><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  Welcome to VitePress!</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ./docs</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site title:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  My Awesome Project</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site description:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  A VitePress Site</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">◆</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Theme:</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">  ●</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Default Theme </span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">(Out of the box, good-looking docs)</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Default Theme + Customization</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Custom Theme</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">└</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Vue como Dependencia Correspondiente</p><p>Si tiene la intención de realizar una personalización que usa componentes Vue o APIs, debe instalar explicitamente <code>vue</code> como una dependencia correspondiente.</p></div><h2 id="file-structure" tabindex="-1">Estrutura de Archivos <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;Estrutura de Archivos {#file-structure}&quot;">​</a></h2><p>Se está construyendo un sitio VitePress individual, puede desarrollar su sitio en el directorio actual (<code>./</code>). Sin embargo, si está instalando VitePress en un proyecto existente junto con otro código fuente, es recomendado construir el sitio en un directorio anidado (e.g. <code>./docs</code>) para que esté separado del resto de su proyecto.</p><p>Asumiendo la opción de desarrollar el proyecto VitePress en <code>./docs</code>, la estructura de archivos generada debe parecerse a la siguiente:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>El directorio <code>docs</code> es considerado la <strong>raiz del proyecto</strong> de su sitio VitePress. El directorio <code>.vitepress</code> es un lugar reservado para archivos de configuración VitePress, caché del servidor de desarrollo, resultado del build, y código de personalización de tema opcional.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Por defecto, VitePress almacena el caché del servidor de desarrollo en <code>.vitepress/cache</code>, y el resultado del build de producción en <code>.vitepress/dist</code>. Se usa Git, debe adicionarlos a su archivo <code>.gitignore</code>. Estas ubicaciones también pueden ser <a href="./../reference/site-config#outdir">configuradas</a>.</p></div><h3 id="the-config-file" tabindex="-1">El archivo de configuración <a class="header-anchor" href="#the-config-file" aria-label="Permalink to &quot;El archivo de configuración {#the-config-file}&quot;">​</a></h3><p>El archivo de configuración (<code>.vitepress/config.js</code>) permite que personalice vários aspectos de su sitio VitePress, con las opciones más básicas siendo el titulo y la descripción del sitio:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // opciones a nivel del sitio</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;VitePress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Solo una broma.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // opciones a nivel del tema</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Puede también configurar el comportamiento del tema a través de la opción <code>themeConfig</code>. Consulte la <a href="./../reference/site-config">Referencia de Configuración</a> para detaller completos sobre todas las opciones de configuración.</p><h3 id="source-files" tabindex="-1">Archivos fuente <a class="header-anchor" href="#source-files" aria-label="Permalink to &quot;Archivos fuente {#source-files}&quot;">​</a></h3><p>Archivos Markdown fuera del directorio <code>.vitepress</code> son considerados <strong>archivos fuente</strong>.</p><p>VitePress usa <strong>enrutamiento basado en archivos</strong>: cada archivo <code>.md</code> es compilado en un archivo <code>.html</code> correspondiente con el mismo path. Por ejemplo, <code>index.md</code> será compilado en <code>index.html</code>, y puede ser visitado en el path raiz <code>/</code> del sitio VitePress resultante.</p><p>VitePress también proporciona la habilidad de generar URLs limpias, retambém fornece a habilidade de gerar URLs limpas, reescribir paths, y generare páginas dinámicamente. Estos serán tratados en la <a href="./routing">Guía de Enrutamiento</a>.</p><h2 id="up-and-running" tabindex="-1">Instalado y Funcionando <a class="header-anchor" href="#up-and-running" aria-label="Permalink to &quot;Instalado y Funcionando {#up-and-running}&quot;">​</a></h2><p>La herramienta debe tener también inyectado los siguientes scripts npm en su <code>package.json</code> si permitió esto durante el proceso de instalación:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>El script <code>docs:dev</code> iniciará un servidor de desarrollo local con actualizaciones instantáneas. Ejecutelo con el siguiente comando:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vmhnc" id="tab-bz-CnUq" checked><label for="tab-bz-CnUq">npm</label><input type="radio" name="group-vmhnc" id="tab-pbBsqBo"><label for="tab-pbBsqBo">pnpm</label><input type="radio" name="group-vmhnc" id="tab-GU6HHAM"><label for="tab-GU6HHAM">yarn</label><input type="radio" name="group-vmhnc" id="tab-yofqYDC"><label for="tab-yofqYDC">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div></div></div><p>En vez de scripts npm, también puede invocar VitePress directamente con:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hOBkq" id="tab-Ve2zrI4" checked><label for="tab-Ve2zrI4">npm</label><input type="radio" name="group-hOBkq" id="tab-QbCm5oN"><label for="tab-QbCm5oN">pnpm</label><input type="radio" name="group-hOBkq" id="tab-5J9ZWkN"><label for="tab-5J9ZWkN">yarn</label><input type="radio" name="group-hOBkq" id="tab-eu6cN8P"><label for="tab-eu6cN8P">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div></div></div><p>Más usos de la linea de comandos están documaentados en la <a href="./../reference/cli">Referencia CLI</a>.</p><p>El servidor de desarrollo debe estar corriendo en <code>http://localhost:5173</code>. Visite la URL en su navegador para ver su nuevo sitio en acción!</p><h2 id="what-s-next" tabindex="-1">Qué viene después? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;Qué viene después? {#what-s-next}&quot;">​</a></h2><ul><li><p>Para entender mejor cómo archivos Markdown son mapeados en HTML, consulte la <a href="./routing">Guía de Enrutamiento</a>.</p></li><li><p>Para descubrir más sobre lo que puede hacer en una página, cómo escribir contenido markdown o usar un componente Vue, consulte la sección &quot;Escribiendo&quot; de la guía. Un optimo lugar para comenzar sería aprendiendo más sobre <a href="./markdown">Extensiones Markdown</a>.</p></li><li><p>Para explorar las funcionalidades proporcionadas por el tema por defecto de la documentación, consulte la <a href="./../reference/default-theme-config">Referencia de Configuración del Tema por Defecto</a>.</p></li><li><p>Se quiere profundizar la personalización de la apariencia de su sitio, explore tanto <a href="./extending-default-theme">Extienda el Tema por Defecto</a> como <a href="./custom-theme">Construya un Tema Personalizado</a>.</p></li><li><p>Una vez que su documentación tome forma, asegurese de leer la <a href="./deploy">Guia de Despliegue</a>.</p></li></ul>`,43),l=[t];function p(d,o,h,r,c,k){return a(),i("div",null,l)}const b=s(n,[["render",p]]);export{g as __pageData,b as default};