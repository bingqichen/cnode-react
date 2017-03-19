'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopicDetail = getTopicDetail;

var _config = require('../config');

var _constans = require('../constans');

var types = _interopRequireWildcard(_constans);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getTopicDetail(params) {
  return function (dispatch) {
    _config.axios.get('/topic/' + params.id, { params: params }).then(function (res) {
      dispatch({
        type: types.GET_TOPIC_DETAIL,
        detail: res.data
      });
    });
  };
}