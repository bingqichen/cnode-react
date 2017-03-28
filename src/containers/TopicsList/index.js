import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as topicsListActions from '@/actions/topicsList';
import { tabTypes } from '@/config';

import TopicsItem from '~/topics-item';
import Button from '~/button';
import ButtonGroup from '~/button/ButtonGroup';

import './style.less';

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    const { actions, topicsList } = this.props;
    const { list, page, tab, limit } = topicsList;
    if (!list.length) {
      const params = {
        page: page + 1,
        tab,
        limit
      };
      actions.getTopicsList(params);
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextTopicsList = nextProps.topicsList;
    const prevTopicsList = this.props.topicsList;
    if (nextTopicsList.page !== prevTopicsList.page || nextTopicsList.tab !== prevTopicsList.tab) {
      this.context.router.push(`/topicslist?page=${nextTopicsList.page}&tab=${nextTopicsList.tab}`);
    }
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.resetTopicsList();
  }

  handleChangeTab(tab) {
    const { actions, topicsList } = this.props;
    const { limit } = topicsList;
    const params = {
      page: 1,
      tab,
      limit
    };
    actions.changeTopicsListTab(tab);
    actions.getTopicsList(params);
  }

  handleChangePage(pager) {
    const { actions, topicsList } = this.props;
    const { page, tab, limit } = topicsList;
    const newPage = pager ? Number(page) + 1 : Number(page) - 1
    const params = {
      page: newPage,
      tab,
      limit
    };
    actions.changeTopicsListPage(newPage);
    actions.getTopicsList(params);
  }

  render() {
    const { list, page, tab } = this.props.topicsList;
    return (
      <div className="topicslist-wrap">
        <div className="tab">
          <ButtonGroup>
            <Button
              disabled={tab === 'all' ? 'disabled' : ''}
              onClick={() => this.handleChangeTab('all')}
            >{tabTypes.all}</Button>
            <Button
              disabled={tab === 'ask' ? 'disabled' : ''}
              onClick={() => this.handleChangeTab('ask')}
            >{tabTypes.ask}</Button>
            <Button
              disabled={tab === 'share' ? 'disabled' : ''}
              onClick={() => this.handleChangeTab('share')}
            >{tabTypes.share}</Button>
            <Button
              disabled={tab === 'job' ? 'disabled' : ''}
              onClick={() => this.handleChangeTab('job')}
            >{tabTypes.job}</Button>
            <Button
              disabled={tab === 'good' ? 'disabled' : ''}
              onClick={() => this.handleChangeTab('good')}
            >{tabTypes.good}</Button>
          </ButtonGroup>
        </div>
        <div className="topics-list">
          {
            list.map((item) => (
              <Link to={`/topicdetail?id=${item.id}`} key={item.id}>
                <TopicsItem topic={item} />
              </Link>
            ))
          }
        </div>
        <div className="pager">
          <ButtonGroup>
            <Button
              disabled={page < 2}
              onClick={() => this.handleChangePage(false)}
            >上一页</Button>
            <Button
              onClick={() => this.handleChangePage(true)}
            >下一页</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

TopicsList.contextTypes = {
  router: PropTypes.object.isRequired
};

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
