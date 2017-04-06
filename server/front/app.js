'use strict';

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

var _router = require('dva/router');

var _reduxLogger = require('redux-logger');

var _dvaLoading = require('dva-loading');

var _dvaLoading2 = _interopRequireDefault(_dvaLoading);

var _topicsList = require('./models/topicsList');

var _topicsList2 = _interopRequireDefault(_topicsList);

var _topicDetail = require('./models/topicDetail');

var _topicDetail2 = _interopRequireDefault(_topicDetail);

var _router2 = require('./router');

var _router3 = _interopRequireDefault(_router2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
  history: _router.browserHistory,
  initialState: window.__INITIAL_STATE__
};

if (process.env.NODE_ENV !== 'production') {
  opts.onAction = (0, _reduxLogger.createLogger)();
}

var app = (0, _dva2.default)(opts);

app.use((0, _dvaLoading2.default)());
app.model(_topicsList2.default);
app.model(_topicDetail2.default);
app.router(_router3.default);
app.start('#root');