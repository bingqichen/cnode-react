'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constans = require('../constans');

var types = _interopRequireWildcard(_constans);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
  list: [],
  page: 1,
  tab: 'ask',
  limit: 40
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];

  switch (action.type) {
    case types.CHANGE_TOPICS_LIST_PAGE:
      return (0, _extends3.default)({}, state, {
        page: action.page
      });
    case types.GET_TOPICS_LIST:
      return (0, _extends3.default)({}, state, {
        list: action.list
      });
    case types.CHANGE_TOPICS_LIST_TAB:
      return (0, _extends3.default)({}, state, {
        tab: action.tab
      });
    case types.RESET_TOPICS_LIST:
      return (0, _extends3.default)({}, state, {
        list: [],
        page: 1,
        tab: 'ask',
        limit: 20
      });
    default:
      return state;
  }
};