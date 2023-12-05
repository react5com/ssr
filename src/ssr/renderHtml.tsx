import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from 'react-router-dom/server'
import { Routes } from "react-router-dom";
import { renderRoutes } from "react-router-layout";
import { HelmetProvider } from "react-helmet-async";
import serialize from "serialize-javascript";
import { RootContextProvider } from "react-reducer-ssr";

export const renderHtml = (reducers: any, htmlTemplate: string, routes: any, req: any, store: any) => {
  const helmetContext: any = {};
  const contentJsx = <Router location={req.url}>
    <HelmetProvider context={helmetContext}>
      <RootContextProvider reducer={reducers} initialState={store?.root}>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </RootContextProvider>
    </HelmetProvider>
  </Router>;
  const content = renderToString(contentJsx);

  const isProd = process.env.NODE_ENV === 'production';
  const serviceWorkerScript = isProd ? `<script src="/service-worker.js" defer></script>` : '';

  const { helmet } = helmetContext;
  const helmetTitle = (helmet && helmet.title) ? helmet.title.toString() : '';
  const helmetMeta = (helmet && helmet.meta) ? helmet.meta.toString() : '';

  const html = htmlTemplate.replace('<div id="app"></div>', `<div id="app">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.root)}
      </script>
      ${serviceWorkerScript}`)
      .replace('<!-- META -->', `${helmetTitle}
      ${helmetMeta}`)
  return html;
};

export default renderHtml;
