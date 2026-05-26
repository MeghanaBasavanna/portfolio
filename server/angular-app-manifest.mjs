
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1922, hash: 'e8c43c34ff8c0b40eab602d15237d188aa300413561460ca085979f4dcebdf99', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 973, hash: 'e3c5914e61781b9407d1d753989f9ded3c229cdfa270524ca724596850d90406', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33386, hash: 'feda67ef63f11a9fe65100dcacf8a1cbdcb2dc63ae6226430be4c6572105e18c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZIGNUPNC.css': {size: 4991, hash: 'Sd8Q+Gqp9ls', text: () => import('./assets-chunks/styles-ZIGNUPNC_css.mjs').then(m => m.default)}
  },
};
