import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as topicDetailActions from '../../actions/topicDetail';

import './style.less';

class TopicDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { topicDetail } = this.props;
    return (
      <div className="topicslist-wrap">

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
