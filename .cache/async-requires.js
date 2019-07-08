// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/joshhanson/Documents/Personal/myproject/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-404-js": () => import("/Users/joshhanson/Documents/Personal/myproject/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/joshhanson/Documents/Personal/myproject/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/joshhanson/Documents/Personal/myproject/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import("/Users/joshhanson/Documents/Personal/myproject/.cache/data.json")

