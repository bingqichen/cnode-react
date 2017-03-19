import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './containers/App';
import TopicsList from './containers/TopicsList';
import TopicDetail from './containers/TopicDetail';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/topicslist" />
      <Route path="topicslist" component={TopicsList} />
      <Route path="topicdetail" component={TopicDetail} />
      <Route path="*" component={TopicsList} />
    </Route>
  </Router>
);
