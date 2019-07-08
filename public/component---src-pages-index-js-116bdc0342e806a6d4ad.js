(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(146),o=a(150);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","ecommerce","react","expressionengine","wordpress","niagara","web design"]}),r.a.createElement("main",{className:"page-content","aria-label":"Content"},r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"intro"},r.a.createElement("div",{className:"intro_Block"},r.a.createElement("p",{className:"intro_Block_Para"},"Hi there ",r.a.createElement("span",{className:"emoji","aria-label":"waving hand emoji",role:"img"},"👋")),r.a.createElement("p",{className:"intro_Block_Para"},"I'm Joshua Hanson - I work with the team ",r.a.createElement("a",{href:"http://formandaffect.com",target:"_blank",rel:"noopener noreferrer"},"@Form & Affect "),"  building brands, online stores, web apps, and digital gems ",r.a.createElement("span",{className:"emoji","aria-label":"diamond emoji",role:"img"},"💎")),r.a.createElement("p",{className:"intro_Block_Para"},"Previously I've worked for ",r.a.createElement("a",{href:"http://ncinnovation.ca",target:"_blank",rel:"noopener noreferrer"},"@Niagara College"),", and ",r.a.createElement("a",{href:"http://www.northern.co/",target:"_blank",rel:"noopener noreferrer"},"@Northern Commerce"),"."),r.a.createElement("p",null,"Things I’m currently learning/interested in: "),r.a.createElement("ul",null,r.a.createElement("li",null,"CSS Grid"),r.a.createElement("li",null,"SVG Animations"),r.a.createElement("li",null,"Fullstack Advanced React and GraphQl course ",r.a.createElement("a",{href:"https://advancedreact.com"}," ",r.a.createElement("small",null," (https://advancedreact.com/)"))," ")),r.a.createElement("br",null),r.a.createElement("p",null,"Projects I’m proud of: "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://artintheopen.ca"},"https://artintheopen.ca")," ",r.a.createElement("small",null," (React PWA)")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://theunleashed.ca"},"https://theunleashed.ca")," ",r.a.createElement("small",null," (Gatsby)")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://kooybros.com"},"https://kooybros.com"),"  ",r.a.createElement("small",null," (Magento 2)")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.cbc.ca/olympics/vr"},"http://www.cbc.ca/olympics/vr")," ",r.a.createElement("small",null," (ExpressionEngine)")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ravinevineyard.com"},"https://ravinevineyard.com")," ",r.a.createElement("small",null," (ExpressionEngine & Ecommerce)")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ontariocraftwineries.ca"},"https://ontariocraftwineries.ca")," ",r.a.createElement("small",null," (First WordPress site from scratch while in school)")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://heartofniagara.ca"},"http://heartofniagara.ca")," ",r.a.createElement("small",null," (My first client project from 2015)"))))))))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(143),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(145),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){"use strict";var n=a(147),r=a(0),l=a.n(r),o=a(4),i=a.n(o),c=a(144),s=(a(149),function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});s.propTypes={children:i.a.node.isRequired},t.a=s},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Joshua Hanson"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(151),r=a(0),l=a.n(r),o=a(4),i=a.n(o),c=a(152),s=a.n(c),m=a(144);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title;return l.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var d="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Joshua Hanson",description:"Frontend Developer, building brands, online stores, and experiences @Form & Affect",author:"@joshhanson"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-116bdc0342e806a6d4ad.js.map