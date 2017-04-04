import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import App from './routes/App';
import TopicsList from './routes/TopicsList';
import TopicDetail from './routes/TopicDetail';

export const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRedirect to="/topicslist" />
      <Route path="topicslist" component={TopicsList} />
      <Route path="topicdetail" component={TopicDetail} />
      <Route path="*" component={TopicsList} />
    </Route>
  </div>
);

export default ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/topicslist" />
      <Route path="topicslist" component={TopicsList} />
      <Route path="topicdetail" component={TopicDetail} />
      <Route path="*" component={TopicsList} />
    </Route>
  </Router>
);
