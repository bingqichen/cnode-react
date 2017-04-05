'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _topicsList = require('../services/topicsList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'topicsList',

  state: {
    list: [],
    page: 1,
    tab: 'all',
    limit: 40
  },

  reducers: {
    changePage: function changePage(state, action) {
      return (0, _extends3.default)({}, state, { page: action.page });
    },
    getListSuccess: function getListSuccess(state, action) {
      return (0, _extends3.default)({}, state, { list: action.list });
    },
    changeTab: function changeTab(state, action) {
      return (0, _extends3.default)({}, state, { tab: action.tab });
    },
    reset: function reset(state) {
      return (0, _extends3.default)({}, state, {
        list: [],
        page: 1,
        tab: 'all',
        limit: 40
      });
    }
  },

  effects: {
    getList: _regenerator2.default.mark(function getList(action, _ref) {
      var call = _ref.call,
          put = _ref.put;
      var list;
      return _regenerator2.default.wrap(function getList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_topicsList.getListData, { params: action.params });

            case 2:
              list = _context.sent;
              _context.next = 5;
              return put({ type: 'getListSuccess', list: list });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, getList, this);
    })
  },

  subscriptions: {}
};