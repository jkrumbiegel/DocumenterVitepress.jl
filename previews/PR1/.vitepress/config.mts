import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";
import path from 'path'

// console.log(process.env)

function getBaseRepository(base: string): string {
  if (!base || base === '/') return '/';
  const parts = base.split('/').filter(Boolean);
  return parts.length > 0 ? `/${parts[0]}/` : '/';
}

const baseTemp = {
  base: '/DocumenterVitepress.jl/_/',// TODO: replace this in makedocs!
}

const navTemp = {
  nav: [
{ text: 'Manual', collapsed: false, items: [
{ text: 'Get Started', link: '/manual/get_started' },
{ text: 'Updating to DocumenterVitepress', link: '/manual/documenter_to_vitepress_docs_example' },
{ text: 'Code', link: '/manual/code_example' },
{ text: 'Markdown', link: '/manual/markdown-examples' },
{ text: 'MIME output', link: '/manual/mime_examples' },
{ text: 'DocumenterCitations integration', link: '/manual/citations' },
{ text: 'CSS Styling', link: '/manual/style_css' },
{ text: 'Authors\' badge', link: '/manual/author_badge' },
{ text: 'GitHub Icon with Stars', link: '/manual/repo_stars' }]
 },
{ text: 'Developers\' documentation', collapsed: false, items: [
{ text: 'The rendering process', link: '/devs/render_pipeline' },
{ text: 'Internal API', link: '/devs/internal_api' }]
 },
{ text: 'Public API', link: '/api' }
]
,
}

const nav = [
  ...navTemp.nav,
  {
    component: 'VersionPicker',
  }
]
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/DocumenterVitepress.jl/_/', // TODO: replace this in makedocs!
  title: 'DocumenterVitepress',
  description: 'Documentation for DocumenterVitepress.jl',
  lastUpdated: true,
  cleanUrls: true,
  outDir: '../final_sites/_', // This is required for MarkdownVitepress to work correctly...
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {src: `${getBaseRepository(baseTemp.base)}versions.js`}],
    // ['script', {src: '/versions.js'], for custom domains, I guess if deploy_url is available.
    ['script', {src: `${baseTemp.base}siteinfo.js`}]
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../components')
      }
    },
    build: {
      assetsInlineLimit: 0, // so we can tell whether we have created inlined images or not, we don't let vite inline them
    },
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ], 
    },
  },

  markdown: {
    math: true,
    config(md) {
      md.use(tabsMarkdownPlugin),
      md.use(mathjax3),
      md.use(footnote)
    },
    theme: {
      light: "github-light",
      dark: "github-dark"
    },
  },
  themeConfig: {
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', width: 24, height: 24},
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav,
    sidebar: [
{ text: 'Manual', collapsed: false, items: [
{ text: 'Get Started', link: '/manual/get_started' },
{ text: 'Updating to DocumenterVitepress', link: '/manual/documenter_to_vitepress_docs_example' },
{ text: 'Code', link: '/manual/code_example' },
{ text: 'Markdown', link: '/manual/markdown-examples' },
{ text: 'MIME output', link: '/manual/mime_examples' },
{ text: 'DocumenterCitations integration', link: '/manual/citations' },
{ text: 'CSS Styling', link: '/manual/style_css' },
{ text: 'Authors\' badge', link: '/manual/author_badge' },
{ text: 'GitHub Icon with Stars', link: '/manual/repo_stars' }]
 },
{ text: 'Developers\' documentation', collapsed: false, items: [
{ text: 'The rendering process', link: '/devs/render_pipeline' },
{ text: 'Internal API', link: '/devs/internal_api' }]
 },
{ text: 'Public API', link: '/api' }
]
,
    editLink: { pattern: "https://github.com/LuxDL/DocumenterVitepress.jl/edit/master/docs/src/:path" },
    socialLinks: [
      { icon: 'slack', link: 'https://julialang.org/slack/' }
    ],
    footer: {
      message: 'Made with <a href="https://documenter.juliadocs.org/stable/" target="_blank"><strong>Documenter.jl</strong></a>, <a href="https://vitepress.dev" target="_blank"><strong>VitePress</strong></a> and <a href="https://luxdl.github.io/DocumenterVitepress.jl/stable/" target="_blank"><strong>DocumenterVitepress.jl</strong></a> <br>',
      copyright: `© Copyright ${new Date().getUTCFullYear()}.`
    }
  }
})
