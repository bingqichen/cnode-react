import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import { formatTime } from '@/utils';
import { tabTypes } from '@/config';

import Button from '~/button';
import ReplyItem from '~/reply-item';

import './style.less';

class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  componentDidMount() {
    const { dispatch, topicDetail, location } = this.props;
    const { id } = location.query;
    if (JSON.stringify(topicDetail.detail) === '{}') {
      dispatch({ type: 'topicDetail/getDetail', id });
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: 'topicDetail/reset' });
  }

  handleGoBack() {
    this.context.router.goBack();
  }

  render() {
    const { topicDetail } = this.props;
    const { detail } = topicDetail;
    return (
      <div className="topicdetail-wrap">
        <Button onClick={this.handleGoBack}>返回</Button>
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

TopicDetail.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  topicDetail: state.topicDetail
});

export default connect(mapStateToProps)(TopicDetail);
