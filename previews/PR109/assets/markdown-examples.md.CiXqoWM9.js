import { _ as _export_sfc, E as resolveComponent, c as createElementBlock, J as createVNode, w as withCtx, m as createBaseVNode, a as createTextVNode, a4 as createStaticVNode, o as openBlock } from "./chunks/framework.xtTLbn8X.js";
const __pageData = JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md","lastUpdated":null}');
const _sfc_main = { name: "markdown-examples.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="Markdown-Extension-Examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#Markdown-Extension-Examples" aria-label="Permalink to &quot;Markdown Extension Examples {#Markdown-Extension-Examples}&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="Syntax-Highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#Syntax-Highlighting" aria-label="Permalink to &quot;Syntax Highlighting {#Syntax-Highlighting}&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>```js{4}</span></span>\n<span class="line"><span>export default {</span></span>\n<span class="line"><span>  data () {</span></span>\n<span class="line"><span>    return {</span></span>\n<span class="line"><span>      msg: &#39;Highlighted!&#39;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>  }</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span>```</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="Code-groups" tabindex="-1">Code groups <a class="header-anchor" href="#Code-groups" aria-label="Permalink to &quot;Code groups {#Code-groups}&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GSoaV" id="tab-pXhEXYq" checked="checked"><label for="tab-pXhEXYq">config.js</label><input type="radio" name="group-GSoaV" id="tab-LwzsaOS"><label for="tab-LwzsaOS">config.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&#39;vitepress&#39;).UserConfig}</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UserConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span></code></pre></div></div></div><h3 id="Code-focus" tabindex="-1">Code focus <a class="header-anchor" href="#Code-focus" aria-label="Permalink to &quot;Code focus {#Code-focus}&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Focused!&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="Lists" tabindex="-1">Lists <a class="header-anchor" href="#Lists" aria-label="Permalink to &quot;Lists {#Lists}&quot;">​</a></h3><ol><li><p>a</p></li><li><p>b</p></li><li><p>c 1. d</p></li><li><p>e</p></li></ol><h2 id="Custom-Containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#Custom-Containers" aria-label="Permalink to &quot;Custom Containers {#Custom-Containers}&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="Tabs" tabindex="-1">Tabs <a class="header-anchor" href="#Tabs" aria-label="Permalink to &quot;Tabs {#Tabs}&quot;">​</a></h2>', 24);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", null, "a content", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, "b content", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, "a content 2", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("p", null, "b content 2", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "Nested-Tabs",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Nested Tabs "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#Nested-Tabs",
    "aria-label": 'Permalink to "Nested Tabs {#Nested-Tabs}"'
  }, "​")
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("p", null, "a content", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, "b content", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", null, "c content 2", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "d content 2", -1);
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<h2 id="GitHub-flavored-Alerts" tabindex="-1">GitHub-flavored Alerts <a class="header-anchor" href="#GitHub-flavored-Alerts" aria-label="Permalink to &quot;GitHub-flavored Alerts {#GitHub-flavored-Alerts}&quot;">​</a></h2><p>See: <a href="https://vitepress.dev/guide/markdown#github-flavored-alerts" target="_blank" rel="noreferrer">https://vitepress.dev/guide/markdown#github-flavored-alerts</a></p><div class="warning custom-block github-alert"><p class="custom-block-title">Critical content.</p><p></p></div><h2 id="Tables" tabindex="-1">Tables <a class="header-anchor" href="#Tables" aria-label="Permalink to &quot;Tables {#Tables}&quot;">​</a></h2><p>See: <a href="https://vitepress.dev/guide/markdown#github-style-tables" target="_blank" rel="noreferrer">https://vitepress.dev/guide/markdown#github-style-tables</a></p><table><thead><tr><th style="text-align:right;">Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td style="text-align:right;">col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td style="text-align:right;">col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td style="text-align:right;">zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="Equations" tabindex="-1">Equations <a class="header-anchor" href="#Equations" aria-label="Permalink to &quot;Equations {#Equations}&quot;">​</a></h2>', 7);
const _hoisted_41 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_42 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.486ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.345ex",
  height: "2.106ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -716 2362.6 931",
  "aria-hidden": "true"
};
const _hoisted_43 = /* @__PURE__ */ createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(806.8,0)"><path data-c="2260" d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(1862.6,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="stroke-width:3;"></path></g></g></g>', 1);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "a"),
    /* @__PURE__ */ createBaseVNode("mo", null, "≠"),
    /* @__PURE__ */ createBaseVNode("mn", null, "0")
  ])
], -1);
const _hoisted_46 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_47 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "16.403ex",
  height: "2.072ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 7250 915.9",
  "aria-hidden": "true"
};
const _hoisted_48 = /* @__PURE__ */ createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(529,0)"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(605,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1759.8,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2760,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3189,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3983.2,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4983.4,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5694.2,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(6750,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="stroke-width:3;"></path></g></g></g>', 1);
const _hoisted_49 = [
  _hoisted_48
];
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "a"),
    /* @__PURE__ */ createBaseVNode("msup", null, [
      /* @__PURE__ */ createBaseVNode("mi", null, "x"),
      /* @__PURE__ */ createBaseVNode("mn", null, "2")
    ]),
    /* @__PURE__ */ createBaseVNode("mo", null, "+"),
    /* @__PURE__ */ createBaseVNode("mi", null, "b"),
    /* @__PURE__ */ createBaseVNode("mi", null, "x"),
    /* @__PURE__ */ createBaseVNode("mo", null, "+"),
    /* @__PURE__ */ createBaseVNode("mi", null, "c"),
    /* @__PURE__ */ createBaseVNode("mo", null, "="),
    /* @__PURE__ */ createBaseVNode("mn", null, "0")
  ])
], -1);
const _hoisted_51 = {
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_52 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.575ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "20.765ex",
  height: "5.291ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -1642.5 9178 2338.5",
  "aria-hidden": "true"
};
const _hoisted_53 = /* @__PURE__ */ createStaticVNode('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(849.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(1905.6,0)"><g data-mml-node="mfrac"><g data-mml-node="mrow" transform="translate(220,676)"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(778,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1429.2,0)"><path data-c="B1" d="M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z" style="stroke-width:3;"></path></g><g data-mml-node="msqrt" transform="translate(2429.4,0)"><g transform="translate(853,0)"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(462,289) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(1087.8,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(2088,0)"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2588,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3117,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(0,106.5)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z" style="stroke-width:3;"></path></g><rect width="3550" height="60" x="853" y="846.5"></rect></g></g><g data-mml-node="mrow" transform="translate(3121.7,-686)"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(500,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g></g><rect width="7032.4" height="60" x="120" y="220"></rect></g></g></g></g>', 1);
const _hoisted_54 = [
  _hoisted_53
];
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "block",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
}, [
  /* @__PURE__ */ createBaseVNode("math", {
    xmlns: "http://www.w3.org/1998/Math/MathML",
    display: "block"
  }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "x"),
    /* @__PURE__ */ createBaseVNode("mo", null, "="),
    /* @__PURE__ */ createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
      /* @__PURE__ */ createBaseVNode("mfrac", null, [
        /* @__PURE__ */ createBaseVNode("mrow", null, [
          /* @__PURE__ */ createBaseVNode("mo", null, "−"),
          /* @__PURE__ */ createBaseVNode("mi", null, "b"),
          /* @__PURE__ */ createBaseVNode("mo", null, "±"),
          /* @__PURE__ */ createBaseVNode("msqrt", null, [
            /* @__PURE__ */ createBaseVNode("msup", null, [
              /* @__PURE__ */ createBaseVNode("mi", null, "b"),
              /* @__PURE__ */ createBaseVNode("mn", null, "2")
            ]),
            /* @__PURE__ */ createBaseVNode("mo", null, "−"),
            /* @__PURE__ */ createBaseVNode("mn", null, "4"),
            /* @__PURE__ */ createBaseVNode("mi", null, "a"),
            /* @__PURE__ */ createBaseVNode("mi", null, "c")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("mrow", null, [
          /* @__PURE__ */ createBaseVNode("mn", null, "2"),
          /* @__PURE__ */ createBaseVNode("mi", null, "a")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<p>Don&#39;t type anything after the last double dollar sign, and make sure there are no spaces after the opening double dollar sign in the display math!</p><h2 id="Footnotes-(citation-style)" tabindex="-1">Footnotes (citation-style) <a class="header-anchor" href="#Footnotes-(citation-style)" aria-label="Permalink to &quot;Footnotes (citation-style) {#Footnotes-(citation-style)}&quot;">​</a></h2><p>Here is the link for the paper of Babushka<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><h2 id="Escaping-characters" tabindex="-1">Escaping characters <a class="header-anchor" href="#Escaping-characters" aria-label="Permalink to &quot;Escaping characters {#Escaping-characters}&quot;">​</a></h2><p>The following example:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">`less`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">`greater`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt; than, and the backtick </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span></code></pre></div><p>outputs:</p><p>&lt; <code>less</code> and <code>greater</code> &gt; than, and the backtick `.</p><p>And also, this &lt;was&gt; an &lt;issue&gt; before.</p><p>Let&#39;s see if this one works:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>```</span></span>\n<span class="line"><span>sshflags=`-i &lt;keyfile&gt;`</span></span>\n<span class="line"><span>```</span></span></code></pre></div><p>it does,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sshflags=`-i &lt;keyfile&gt;`</span></span></code></pre></div><p>but within inline text it does not. Ideas for the escaping sequence?</p><p>This is the expected sequence by vitepress:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;code&gt; sshflags= `` `-i &lt;keyfile&gt; ` `` &lt;/code&gt;</span></span></code></pre></div><h2 id="More" tabindex="-1">More <a class="header-anchor" href="#More" aria-label="Permalink to &quot;More {#More}&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>This is Babushka&#39;s footnote! <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>', 20);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PluginTabsTab = resolveComponent("PluginTabsTab");
  const _component_PluginTabs = resolveComponent("PluginTabs");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "tab a" }, {
          default: withCtx(() => [
            _hoisted_25
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "tab b" }, {
          default: withCtx(() => [
            _hoisted_26
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "tab a" }, {
          default: withCtx(() => [
            _hoisted_27
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "tab b" }, {
          default: withCtx(() => [
            _hoisted_28
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _hoisted_29,
    createVNode(_component_PluginTabs, null, {
      default: withCtx(() => [
        createVNode(_component_PluginTabsTab, { label: "first one" }, {
          default: withCtx(() => [
            createVNode(_component_PluginTabs, null, {
              default: withCtx(() => [
                createVNode(_component_PluginTabsTab, { label: "tab a" }, {
                  default: withCtx(() => [
                    _hoisted_30
                  ]),
                  _: 1
                }),
                createVNode(_component_PluginTabsTab, { label: "tab b" }, {
                  default: withCtx(() => [
                    _hoisted_31
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_PluginTabsTab, { label: "second one" }, {
          default: withCtx(() => [
            createVNode(_component_PluginTabs, null, {
              default: withCtx(() => [
                createVNode(_component_PluginTabsTab, { label: "tab c" }, {
                  default: withCtx(() => [
                    _hoisted_32
                  ]),
                  _: 1
                }),
                createVNode(_component_PluginTabsTab, { label: "tab d" }, {
                  default: withCtx(() => [
                    _hoisted_33
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _hoisted_34,
    createBaseVNode("p", null, [
      createTextVNode("When "),
      createBaseVNode("mjx-container", _hoisted_41, [
        (openBlock(), createElementBlock("svg", _hoisted_42, _hoisted_44)),
        _hoisted_45
      ]),
      createTextVNode(", there are two solutions to "),
      createBaseVNode("mjx-container", _hoisted_46, [
        (openBlock(), createElementBlock("svg", _hoisted_47, _hoisted_49)),
        _hoisted_50
      ]),
      createTextVNode(" and they are")
    ]),
    createBaseVNode("mjx-container", _hoisted_51, [
      (openBlock(), createElementBlock("svg", _hoisted_52, _hoisted_54)),
      _hoisted_55
    ]),
    _hoisted_56
  ]);
}
const markdownExamples = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  markdownExamples as default
};
