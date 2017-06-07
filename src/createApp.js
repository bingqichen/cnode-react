import dva from 'dva';
import createLoading from 'dva-loading';

import topicsListModel from './models/topicsList';
import topicDetailModel from './models/topicDetail';

export default (opts) => {
  const app = dva(opts);

  app.use(createLoading());

  app.model(topicsListModel);
  app.model(topicDetailModel);

  return app;
};
