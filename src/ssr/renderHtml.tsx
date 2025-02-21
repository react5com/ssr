import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from 'react-router-dom/server'
import { Routes } from "react-router-dom";
import { renderRoutes } from "@react5/router-layout";
import { HelmetProvider } from "react-helmet-async";
import serialize from "serialize-javascript";
import { RootContextProvider } from "@react5/reducer";
import { I18nextProvider } from "react-i18next";

function getInitiali18nState(req: any) {
  const initialLanguage = req.i18n?.languages?.[0];
  let initialI18nStore: any;
  const usedNamespaces = req.i18n?.reportNamespaces?.getUsedNamespaces();

  if (usedNamespaces) {
    initialI18nStore = {};
    req.i18n?.languages?.forEach((language: string) => {
      initialI18nStore[language] = {};

      usedNamespaces.forEach((namespace: string) => {
        initialI18nStore[language][namespace] =
          req.i18n.services.resourceStore.data[language][namespace];
      });
    });
  }
  return { initialLanguage, initialI18nStore };
}

export const renderHtml = (reducers: any, htmlTemplate: string, routes: any, req: any, store: any) => {
  const { initialLanguage, initialI18nStore } = getInitiali18nState(req);
  const helmetContext: any = {};
  const contentJsx = <I18nextProvider i18n={req.i18n}>
    <Router location={req.url}>
      <HelmetProvider context={helmetContext}>
        <RootContextProvider reducer={reducers} initialState={store?.root}>
          <Routes>
            {renderRoutes(routes)}
          </Routes>
        </RootContextProvider>
      </HelmetProvider>
    </Router>
  </I18nextProvider>;
  const content = renderToString(contentJsx);

  const isProd = process.env.NODE_ENV === 'production';
  const serviceWorkerScript = isProd ? `<script src="/static/js/service-worker.js" defer></script>` : '';

  const { helmet } = helmetContext;
  const helmetTitle = (helmet && helmet.title) ? helmet.title.toString() : '';
  const helmetMeta = (helmet && helmet.meta) ? helmet.meta.toString() : '';

  const html = htmlTemplate.replace('<div id="app"></div>', `<div id="app">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.root)};
        window.INITIAL_LANGUAGE = '${initialLanguage}';
        window.INITIAL_I18N_STORE = ${serialize(initialI18nStore)};
      </script>
      ${serviceWorkerScript}`)
      .replace('<!-- META -->', `${helmetTitle}
      ${helmetMeta}`)
  return html;
};

export default renderHtml;
