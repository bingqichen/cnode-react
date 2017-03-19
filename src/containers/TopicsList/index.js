import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as topicsListActions from '../../actions/topicsList';

import TopicsItem from '~/topics-item';
import Button from '~/button';

import './style.less';

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.handleGetTopicsList = this.handleGetTopicsList.bind(this);
  }

  componentDidMount() {
    const { list } = this.props.topicsList;
    if (!list.length) {
      this.handleGetTopicsList();
    }
  }

  handleGetTopicsList() {
    const { actions, topicsList } = this.props;
    const { page, tab, limit, mdrender } = topicsList;
    const params = {
      page: page + 1,
      tab,
      limit,
      mdrender
    };
    actions.getTopicsList(params);
  }
  render() {
    const { list } = this.props.topicsList;
    return (
      <div className="topicslist-wrap">
        <div className="topics-list">
          {
            list.map((item) => (
              <TopicsItem key={item.id} topic={item} />
            ))
          }
        </div>
        <div className="load-more">
          <Button onClick={this.handleGetTopicsList}>加载更多</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topicsList: state.topicsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...topicsListActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
