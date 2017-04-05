import dva from 'dva';
import { browserHistory } from 'dva/router';

import topicsListModel from './models/topicsList';
import topicDetailModel from './models/topicDetail';
import router from './router';

const app = dva({
  history: browserHistory,
  initialState: window.__INITIAL_STATE__
});

app.model(topicsListModel);
app.model(topicDetailModel);
app.router(router);
app.start('#root');
