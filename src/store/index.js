import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

let finialStore;
if (process.env.NODE_ENV === 'production' || process.env.NODE_SERVER) {
  finialStore = compose(
    applyMiddleware(thunk)
  )(createStore);
} else {
  finialStore = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk, createLogger())
  )(createStore);
}

export default function (initState) {
  return finialStore(rootReducer, initState);
}
