import{R as i}from"./chunks/theme.JE-kG8nG.js";import{U as o,aU as u,aV as l,aW as c,aX as f,aY as d,aZ as m,a_ as h,a$ as g,b0 as A,b1 as b,d as y,u as P,y as v,x as w,b2 as C,b3 as R,b4 as E,aG as S}from"./chunks/framework.1ERUbJUZ.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=y({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return v(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),R(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function x(){return g(T)}function D(){let e=o,a;return A(t=>{let n=b(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{_ as createApp};
