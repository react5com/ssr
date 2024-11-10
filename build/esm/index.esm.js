import{renderToString as r}from"react-dom/server";import{StaticRouter as t}from"react-router-dom/server";import{Routes as e}from"react-router-dom";import{renderRoutes as o}from"react-router-layout";import{HelmetProvider as n}from"react-helmet-async";import i from"serialize-javascript";import{RootContextProvider as a,createServerStore as c}from"react-reducer-ssr";import{I18nextProvider as u}from"react-i18next";import{jsx as l}from"react/jsx-runtime";import{matchRoutes as s,matchPath as f}from"react-router";import p from"parseurl";import m from"fs";var d=function(c,s,f,p,m){var d=function(r){var t,e,o,n,i=null===(t=r.i18n)||void 0===t||null===(t=t.languages)||void 0===t?void 0:t[0],a=null===(e=r.i18n)||void 0===e||null===(e=e.reportNamespaces)||void 0===e?void 0:e.getUsedNamespaces();return a&&(o={},null===(n=r.i18n)||void 0===n||null===(n=n.languages)||void 0===n||n.forEach((function(t){o[t]={},a.forEach((function(e){o[t][e]=r.i18n.services.resourceStore.data[t][e]}))}))),{initialLanguage:i,initialI18nStore:o}}(p),v=d.initialLanguage,y=d.initialI18nStore,b={},h=l(u,{i18n:p.i18n,children:l(t,{location:p.url,children:l(n,{context:b,children:l(a,{reducer:c,initialState:null==m?void 0:m.root,children:l(e,{children:o(f)})})})})}),g=r(h),O="production"===process.env.NODE_ENV?'<script src="/static/js/service-worker.js" defer><\/script>':"",w=b.helmet,S=w&&w.title?w.title.toString():"",j=w&&w.meta?w.meta.toString():"";return s.replace('<div id="app"></div>','<div id="app">'.concat(g,"</div>\n      <script>\n        window.INITIAL_STATE = ").concat(i(m.root),";\n        window.INITIAL_LANGUAGE = '").concat(v,"';\n        window.INITIAL_I18N_STORE = ").concat(i(y),";\n      <\/script>\n      ").concat(O)).replace("\x3c!-- META --\x3e","".concat(S,"\n      ").concat(j))};function v(r){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},v(r)}function y(r){var t=function(r,t){if("object"!=v(r)||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,t||"default");if("object"!=v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==v(t)?t:t+""}function b(r,t,e){return(t=y(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function h(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,o)}return e}function g(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){b(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var O=function(r,t,e,o){return function(n,i,a){var u=p(n),l=u?u.search:"",v=u?u.pathname:"",y=g({},n.cookies),b=g({},n.cookies),h=o?{services:o(b)}:{},O=c(t,h,{}),S=m.readFileSync(r,"utf8"),j=s(e,v||"");if(!j)return i.statusCode=404,void a("Not found");var P=j.map((function(r){var t,e=r.route;if(e.path){var o=f({path:e.path},n.url);t=null==o?void 0:o.params}var i=e;return i.loadData?i.loadData(O.dispatch,b,l,t):null})).map((function(r){if(r)return new Promise((function(t){r.then(t).catch(t)}))}));Promise.all(P).then((function(){var r=d(t,S,e,n,O),o=function(r,t){var e={};for(var o in t)r[o]!==t[o]&&(e[o]=t[o]);return e}(y,b);for(var c in o)i.cookie(c,o[c]);w(i,r),a()})).catch((function(r){w(i,"Error happens: "+r),a()}))}};function w(r,t){r.statusCode=r.statusCode||200,r.setHeader("Content-Type","text/html; charset=UTF-8"),r.setHeader("X-Powered-By","react-ssr-web"),r.end(t)}export{O as reactSsr,d as renderHtml};
