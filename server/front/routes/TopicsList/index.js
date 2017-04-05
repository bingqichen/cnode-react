'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _dva = require('dva');

var _config = require('../../config');

var _topicsItem = require('../../components/topics-item');

var _topicsItem2 = _interopRequireDefault(_topicsItem);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _ButtonGroup = require('../../components/button/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicsList = function (_Component) {
  (0, _inherits3.default)(TopicsList, _Component);

  function TopicsList(props) {
    (0, _classCallCheck3.default)(this, TopicsList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopicsList.__proto__ || (0, _getPrototypeOf2.default)(TopicsList)).call(this, props));

    _this.handleChangeTab = _this.handleChangeTab.bind(_this);
    _this.handleChangePage = _this.handleChangePage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TopicsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          topicsList = _props.topicsList;
      var list = topicsList.list,
          page = topicsList.page,
          tab = topicsList.tab,
          limit = topicsList.limit;

      if (!list.length) {
        var params = {
          page: page,
          tab: tab,
          limit: limit
        };
        dispatch({ type: 'topicsList/getList', params: params });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextTopicsList = nextProps.topicsList;
      var prevTopicsList = this.props.topicsList;
      if (nextTopicsList.page !== prevTopicsList.page || nextTopicsList.tab !== prevTopicsList.tab) {
        this.context.router.push('/topicslist?page=' + nextTopicsList.page + '&tab=' + nextTopicsList.tab);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      dispatch({ type: 'topicsList/reset' });
    }
  }, {
    key: 'handleChangeTab',
    value: function handleChangeTab(tab) {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          topicsList = _props2.topicsList;
      var limit = topicsList.limit;

      var params = {
        page: 1,
        tab: tab,
        limit: limit
      };
      dispatch({ type: 'topicsList/changeTab', tab: tab });
      dispatch({ type: 'topicsList/getList', params: params });
    }
  }, {
    key: 'handleChangePage',
    value: function handleChangePage(pager) {
      var _props3 = this.props,
          dispatch = _props3.dispatch,
          topicsList = _props3.topicsList;
      var page = topicsList.page,
          tab = topicsList.tab,
          limit = topicsList.limit;

      var newPage = pager ? Number(page) + 1 : Number(page) - 1;
      var params = {
        page: newPage,
        tab: tab,
        limit: limit
      };
      dispatch({ type: 'topicsList/changePage', page: newPage });
      dispatch({ type: 'topicsList/getList', params: params });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$topicsList = this.props.topicsList,
          list = _props$topicsList.list,
          page = _props$topicsList.page,
          tab = _props$topicsList.tab;

      return _react2.default.createElement(
        'div',
        { className: 'topicslist-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'tab' },
          _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(
              _button2.default,
              {
                disabled: tab === 'all' ? 'disabled' : '',
                onClick: function onClick() {
                  return _this2.handleChangeTab('all');
                }
              },
              _config.tabTypes.all
            ),
            _react2.default.createElement(
              _button2.default,
              {
                disabled: tab === 'ask' ? 'disabled' : '',
                onClick: function onClick() {
                  return _this2.handleChangeTab('ask');
                }
              },
              _config.tabTypes.ask
            ),
            _react2.default.createElement(
              _button2.default,
              {
                disabled: tab === 'share' ? 'disabled' : '',
                onClick: function onClick() {
                  return _this2.handleChangeTab('share');
                }
              },
              _config.tabTypes.share
            ),
            _react2.default.createElement(
              _button2.default,
              {
                disabled: tab === 'job' ? 'disabled' : '',
                onClick: function onClick() {
                  return _this2.handleChangeTab('job');
                }
              },
              _config.tabTypes.job
            ),
            _react2.default.createElement(
              _button2.default,
              {
                disabled: tab === 'good' ? 'disabled' : '',
                onClick: function onClick() {
                  return _this2.handleChangeTab('good');
                }
              },
              _config.tabTypes.good
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'topics-list' },
          list && list.length ? list.map(function (item) {
            return _react2.default.createElement(
              _router.Link,
              { to: '/topicdetail?id=' + item.id, key: item.id },
              _react2.default.createElement(_topicsItem2.default, { topic: item })
            );
          }) : null
        ),
        _react2.default.createElement(
          'div',
          { className: 'pager' },
          _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(
              _button2.default,
              {
                disabled: page < 2,
                onClick: function onClick() {
                  return _this2.handleChangePage(false);
                }
              },
              '\u4E0A\u4E00\u9875'
            ),
            _react2.default.createElement(
              _button2.default,
              {
                onClick: function onClick() {
                  return _this2.handleChangePage(true);
                }
              },
              '\u4E0B\u4E00\u9875'
            )
          )
        )
      );
    }
  }]);
  return TopicsList;
}(_react.Component);

TopicsList.contextTypes = {
  router: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicsList: state.topicsList
  };
};

exports.default = (0, _dva.connect)(mapStateToProps)(TopicsList);