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
