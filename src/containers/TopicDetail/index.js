import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as topicDetailActions from '../../actions/topicDetail';

import './style.less';

class TopicDetail extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { actions, topicDetail, location } = this.props;
    const { id } = location.query;
    if (JSON.stringify(topicDetail.detail) === '{}') {
      actions.getTopicDetail(id);
    }
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.resetTopicDetail();
  }

  render() {
    const { topicDetail } = this.props;
    const { detail } = topicDetail;
    return (
      <div className="topicdetail-wrap">

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topicDetail: state.topicDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...topicDetailActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
