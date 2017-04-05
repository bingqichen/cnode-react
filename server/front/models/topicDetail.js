'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _topicDetail = require('../services/topicDetail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'topicDetail',

  state: {
    detail: {}
  },

  reducers: {
    getDetail: function getDetail(state, action) {
      return (0, _extends3.default)({}, state, { detail: action.detail });
    },
    reset: function reset(state) {
      return (0, _extends3.default)({}, state, { detail: {} });
    }
  },

  effects: {
    getDetail: _regenerator2.default.mark(function getDetail(action, _ref) {
      var call = _ref.call,
          put = _ref.put;
      var detail;
      return _regenerator2.default.wrap(function getDetail$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_topicDetail.getDetailData, { id: action.id });

            case 2:
              detail = _context.sent;
              _context.next = 5;
              return put({ type: 'getDetail', detail: detail });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, getDetail, this);
    }),
    reset: _regenerator2.default.mark(function reset(action, _ref2) {
      var put = _ref2.put;
      return _regenerator2.default.wrap(function reset$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return put({ type: 'reset' });

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, reset, this);
    })
  },

  subscriptions: {}
};