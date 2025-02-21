import{renderToString as r}from"react-dom/server";import{StaticRouter as t}from"react-router-dom/server";import{Routes as e}from"react-router-dom";import{renderRoutes as o}from"@react5/router-layout";import{HelmetProvider as n}from"react-helmet-async";import i from"serialize-javascript";import{RootContextProvider as c,createServerStore as a}from"@react5/reducer";import{I18nextProvider as u}from"react-i18next";import{jsx as l}from"react/jsx-runtime";import{matchRoutes as s,matchPath as p}from"react-router";import f from"parseurl";import m from"fs";var d=function(a,s,p,f,m){var d=function(r){var t,e,o,n,i=null===(t=r.i18n)||void 0===t||null===(t=t.languages)||void 0===t?void 0:t[0],c=null===(e=r.i18n)||void 0===e||null===(e=e.reportNamespaces)||void 0===e?void 0:e.getUsedNamespaces();return c&&(o={},null===(n=r.i18n)||void 0===n||null===(n=n.languages)||void 0===n||n.forEach((function(t){o[t]={},c.forEach((function(e){o[t][e]=r.i18n.services.resourceStore.data[t][e]}))}))),{initialLanguage:i,initialI18nStore:o}}(f),v=d.initialLanguage,y=d.initialI18nStore,b={},h=l(u,{i18n:f.i18n,children:l(t,{location:f.url,children:l(n,{context:b,children:l(c,{reducer:a,initialState:null==m?void 0:m.root,children:l(e,{children:o(p)})})})})}),g=r(h),O="production"===process.env.NODE_ENV?'<script src="/static/js/service-worker.js" defer><\/script>':"",w=b.helmet,S=w&&w.title?w.title.toString():"",j=w&&w.meta?w.meta.toString():"";return s.replace('<div id="app"></div>','<div id="app">'.concat(g,"</div>\n      <script>\n        window.INITIAL_STATE = ").concat(i(m.root),";\n        window.INITIAL_LANGUAGE = '").concat(v,"';\n        window.INITIAL_I18N_STORE = ").concat(i(y),";\n      <\/script>\n      ").concat(O)).replace("\x3c!-- META --\x3e","".concat(S,"\n      ").concat(j))};function v(r){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},v(r)}function y(r){var t=function(r,t){if("object"!=v(r)||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,t);if("object"!=v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==v(t)?t:t+""}function b(r,t,e){return(t=y(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function h(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,o)}return e}function g(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){b(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var O=function(r,t,e,o){return function(n,i,c){var u=f(n),l=u?u.search:"",v=u?u.pathname:"",y=g(g({},n.cookies),{},{setCookies:i.cookie.bind(i)}),b=o?{services:o(y)}:{},h=a(t,b,null),O=m.readFileSync(r,"utf8"),S=s(e,v||"");if(!S)return i.statusCode=404,void c("Not found");var j=S.map((function(r){var t,e=r.route;if(e.path){var o=p({path:e.path},n.url);t=null==o?void 0:o.params}var i=e;return i.loadData?i.loadData(h.dispatch,y,l,t):null})).map((function(r){if(r)return new Promise((function(t){r.then(t).catch(t)}))}));Promise.all(j).then((function(){var r=d(t,O,e,n,h);w(i,r),c()})).catch((function(r){w(i,"Error happens: "+r),c()}))}};function w(r,t){r.statusCode=r.statusCode||200,r.setHeader("Content-Type","text/html; charset=UTF-8"),r.setHeader("X-Powered-By","react-ssr-web"),r.end(t)}export{O as reactSsr,d as renderHtml};
