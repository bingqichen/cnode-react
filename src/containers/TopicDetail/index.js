import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as topicDetailActions from '@/actions/topicDetail';
import { formatTime } from '@/utils';
import { tabTypes } from '@/config';

import ReplyItem from '~/reply-item';

import './style.less';

class TopicDetail extends Component {
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
        <div id="main">
          <div id="content">
            <div className="panel">
              <div className="header topic_header">
                <span className="topic_full_title">
                  {
                    detail.top ?
                      <span className="put_top">置顶</span> : null
                  }
                  {detail.title}
                </span>
                <div className="changes">
                  <span>发布于{formatTime(detail.create_at)}</span>
                  <span>作者{detail.loginname}</span>
                  <span>{detail.visit_count}次浏览</span>
                  <span>来自{tabTypes[detail.tab]}</span>
                </div>
              </div>

              <div className="inner topic">
                <div className="topic_content" dangerouslySetInnerHTML={{ __html: detail.content }} />
              </div>
            </div>

            <div className="panel">
              <div className="header">
                <span className="col_fade">{detail.reply_count}回复</span>
              </div>
              {
                detail.replies && detail.replies.length ?
                detail.replies.map(item => (
                  <ReplyItem key={item.id} replyItem={item} />
                )) : null
              }
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topicDetail: state.topicDetail
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...topicDetailActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
