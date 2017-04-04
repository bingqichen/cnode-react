import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import routes from './routes.js';

const store = configureStore(window.__INITIAL_STATE__);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);


// import dva from 'dva';
// import { browserHistory } from 'dva/router';

// import topicsListModel from './models/topicsList';
// import topicDetailModel from './models/topicDetail';
// import router from './router';

// const app = dva({
//   history: browserHistory
// });

// app.model(topicsListModel);
// app.model(topicDetailModel);
// app.router(router);
// app.start('#root');
