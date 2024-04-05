import { _ as _export_sfc, c as createElementBlock, o as openBlock, a6 as createStaticVNode } from "./chunks/framework.r4j8LKyH.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"DocumenterVitepress.jl","text":"Document your code","tagline":"A Markdown backend designed to work with VitePress and Documenter.jl","image":{"src":"/logo.png","alt":"DocumenterVitepress"},"actions":[{"theme":"brand","text":"Getting Started","link":"/getting_started"},{"theme":"alt","text":"View on Github","link":"https://github.com/LuxDL/DocumenterVitepress.jl"},{"theme":"alt","text":"API Examples","link":"/api"}]},"features":[{"title":"Markdown","details":"Write in standard markdown syntax","link":"/markdown-examples"},{"title":"Literate.jl","details":"Parse scripts into markdown via Literate.jl","link":"https://github.com/fredrikekre/Literate.jl"},{"title":"VUE components","details":"Explore the possibilities with VUE components","link":"https://vuejs.org/guide/essentials/component-basics"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p style="margin-bottom:2cm;"></p><div class="vp-doc" style="width:80%;margin:auto;"><h1> What is DocumenterVitepress.jl? </h1><p>DocumenterVitepress is a Markdown backend for Documenter.jl which is designed to work with the <a href="https://vitepress.dev/" target="_blank" rel="noreferrer"><code>VitePress</code></a> site generator, which is built off <code>Vue.js</code>.</p><p>It is meant to be used in conjunction with the <code>vitepress</code> Node.js package, which is why so much customization is required!</p><h2> Basic usage </h2><p>If you copy the contents of the <code>template/</code> directory into your <code>docs/</code> and the <code>.github/Documenter.yml</code> file to your repo, you should be good to go and edit docs as usual!</p><p>Just remember to edit the navbar in <code>docs/src/.vitepress/config.mts</code>, if you want it to be different from the sidebar.</p><p>To install a logo or favicon, you can put <code>logo.png</code> and <code>favicon.ico</code> in <code>docs/src/assets</code>, and they will be automatically detected.</p></div>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
