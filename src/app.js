import { browserHistory } from 'dva/router';
import { createLogger } from 'redux-logger';

import createApp from './createApp.js';

import router from './router';

const opts = {
  history: browserHistory,
  initialState: window.__INITIAL_STATE__
};

if (process.env.NODE_ENV !== 'production') {
  opts.onAction = createLogger();
}

const app = createApp(opts);
app.router(router);
app.start('#root');
