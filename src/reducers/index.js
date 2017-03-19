import { combineReducers } from 'redux';

import app from './app.js';
import topicsList from './topicsList.js';
import topicDetail from './topicDetail.js';

export default combineReducers({
  app,
  topicsList,
  topicDetail
});
