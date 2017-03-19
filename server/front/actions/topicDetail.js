'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopicDetail = getTopicDetail;
exports.resetTopicDetail = resetTopicDetail;

var _config = require('../config');

var _constans = require('../constans');

var types = _interopRequireWildcard(_constans);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getTopicDetail(id) {
  return function (dispatch) {
    _config.axios.get('/topic/' + id).then(function (res) {
      dispatch({
        type: types.GET_TOPIC_DETAIL,
        detail: res.data
      });
    });
  };
}

function resetTopicDetail() {
  return {
    type: types.RESET_TOPIC_DETAIL
  };
}