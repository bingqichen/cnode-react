import React from 'react';
import cx from 'classnames';

import { formatTime } from '@/utils';

import Avatar from '~/avatar';

import './style.less';

export default (props) => {
  const { className, topic } = props;

  const cls = cx('component-topics-item-wrap', className);

  return (
    <div className={cls}>
      <div className="avatar">
        <Avatar avatar={topic.author.avatar_url} />
      </div>

      {
        topic.top ? <div className="top">置顶</div> : null
      }

      {
        topic.good ? <div className="good">精华</div> : null
      }

      <div className="title">
        {topic.title}
      </div>

      <div className="other">
        <div className="last-reply">
          {formatTime(topic.last_reply_at)}
        </div>
        <div className="reply-visit">
          <span className="orange-color">{topic.reply_count}</span>／<span className="light-color">{topic.visit_count}</span>
        </div>
      </div>

    </div>
  );
};
