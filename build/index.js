"use strict";var e=require("react-dom/server"),r=require("react-router-dom/server"),t=require("react-router-dom"),o=require("react-router-layout"),n=require("react-helmet-async"),i=require("serialize-javascript"),c=require("react-reducer-ssr"),a=require("react/jsx-runtime"),u=require("react-router"),s=require("parseurl"),d=require("fs"),l=function(u,s,d,l,p){var v={},h=a.jsx(r.StaticRouter,{location:l.url,children:a.jsx(n.HelmetProvider,{context:v,children:a.jsx(c.RootContextProvider,{reducer:u,initialState:null==p?void 0:p.root,children:a.jsx(t.Routes,{children:o.renderRoutes(d)})})})}),m=e.renderToString(h),f="production"===process.env.NODE_ENV?'<script src="/service-worker.js" defer><\/script>':"",x=v.helmet,q=x&&x.title?x.title.toString():"",S=x&&x.meta?x.meta.toString():"";return s.replace('<div id="app"></div>','<div id="app">'.concat(m,"</div>\n      <script>\n        window.INITIAL_STATE = ").concat(i(p.root),"\n      <\/script>\n      ").concat(f)).replace("\x3c!-- META --\x3e","".concat(q,"\n      ").concat(S))};function p(e,r){e.statusCode=e.statusCode||200,e.setHeader("Content-Type","text/html; charset=UTF-8"),e.end(r)}exports.reactSsr=function(e,r,t){return function(o,n,i){var a=s(o),v=a?a.search:"",h=a?a.pathname:"",m=c.createServerStore(r,{}),f=d.readFileSync(e,"utf8"),x=u.matchRoutes(t,h||"");if(!x)return n.statusCode=404,void i("Not found");var q=x.map((function(e){var r=e.route;return r.loadData?r.loadData(m.dispatch,o.cookies,v):null})).map((function(e){if(e)return new Promise((function(r){e.then(r).catch(r)}))}));Promise.all(q).then((function(){var e=l(r,f,t,o,m);p(n,e),i()})).catch((function(e){p(n,"Error happens: "+e),i()}))}},exports.renderHtml=l;
