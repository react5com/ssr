"use strict";var e=require("react-dom/server"),r=require("react-router-dom/server"),t=require("react-router-dom"),o=require("react-router-layout"),i=require("react-helmet-async"),c=require("serialize-javascript"),n=require("react-reducer-ssr"),a=require("react/jsx-runtime"),s=require("react-router"),u=require("parseurl"),d=require("fs"),l=function(s,u,d,l,p){var v={},h=a.jsx(r.StaticRouter,{location:l.url,children:a.jsx(i.HelmetProvider,{context:v,children:a.jsx(n.RootContextProvider,{reducer:s,initialState:null==p?void 0:p.root,children:a.jsx(t.Routes,{children:o.renderRoutes(d)})})})}),m=e.renderToString(h),f="production"===process.env.NODE_ENV?'<script src="/static/js/service-worker.js" defer><\/script>':"",x=v.helmet,q=x&&x.title?x.title.toString():"",S=x&&x.meta?x.meta.toString():"";return u.replace('<div id="app"></div>','<div id="app">'.concat(m,"</div>\n      <script>\n        window.INITIAL_STATE = ").concat(c(p.root),"\n      <\/script>\n      ").concat(f)).replace("\x3c!-- META --\x3e","".concat(q,"\n      ").concat(S))};function p(e,r){e.statusCode=e.statusCode||200,e.setHeader("Content-Type","text/html; charset=UTF-8"),e.end(r)}exports.reactSsr=function(e,r,t,o){return function(i,c,a){var v=u(i),h=v?v.search:"",m=v?v.pathname:"",f=o?{services:o(i.cookies)}:{},x=n.createServerStore(r,f,{}),q=d.readFileSync(e,"utf8"),S=s.matchRoutes(t,m||"");if(!S)return c.statusCode=404,void a("Not found");var j=S.map((function(e){var r=e.route;return r.loadData?r.loadData(x.dispatch,i.cookies,h):null})).map((function(e){if(e)return new Promise((function(r){e.then(r).catch(r)}))}));Promise.all(j).then((function(){var e=l(r,q,t,i,x);p(c,e),a()})).catch((function(e){p(c,"Error happens: "+e),a()}))}},exports.renderHtml=l;
