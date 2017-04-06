import dva from 'dva';
import { browserHistory } from 'dva/router';
import { createLogger } from 'redux-logger';

import topicsListModel from './models/topicsList';
import topicDetailModel from './models/topicDetail';
import router from './router';

const opts = {
  history: browserHistory,
  initialState: window.__INITIAL_STATE__
};

if (process.env.NODE_ENV !== 'production') {
  opts.onAction = createLogger();
}

const app = dva(opts);

app.model(topicsListModel);
app.model(topicDetailModel);
app.router(router);
app.start('#root');
