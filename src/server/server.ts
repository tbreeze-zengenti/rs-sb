import { path as appRootPath } from 'app-root-path';
import ZengentiAppServer from '@zengenti/contensis-react-base';
import ReactApp from '~/App';

import routes from '~/routes';
import withReducers from '~/redux/reducers';
import withSagas from '~/redux/sagas';
import withEvents from '~/routes/withEvents';

import ServerFeatures from './features/configure';
import packagejson from '-/package.json';

ZengentiAppServer.start(
  ReactApp,
  {
    appRootPath,
    routes,
    stateType: 'js',
    withReducers,
    withSagas,
    withEvents,
    disableSsrRedux: DISABLE_SSR_REDUX /* global DISABLE_SSR_REDUX */,
    reverseProxyPaths: Object.values(
      REVERSE_PROXY_PATHS /* global REVERSE_PROXY_PATHS */
    ),
    // Some information about the project and the build to pass to the start config
    packagejson,
    scripts: { startup: `startup-${packagejson.version}.js` },
    staticFolderPath: STATIC_PATH /* global STATIC_PATH */,
    staticRoutePath: STATIC_PATH,
    // The HTML templates we will render the app into
    templates: {
      html: 'dist/index.html',
      static: 'dist/index_static.html',
      fragment: 'dist/index_fragment.html',
    },
  },
  // Configure any server-side features such as sitemap or REST api's
  ServerFeatures
);

const app = ZengentiAppServer.app;

app.emit('ready');

export { app };
