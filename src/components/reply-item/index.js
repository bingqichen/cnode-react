import React from 'react';

import { formatTime } from '@/util';

import './style.less';

export default (props) => {
  const { replyItem } = props;

  return (
    <div className="cell reply_area reply_item">
      <div className="author_content">
        <a className="user_avatar">
          <img src={replyItem.author.avatar_url} alt={replyItem.author.loginname} />
        </a>
        <div className="user_info">
          <a className="dark reply_author">{replyItem.author.loginname}</a>
          <a className="reply_time">{formatTime(replyItem.create_at)}</a>
        </div>
      </div>

      <div className="reply_content" dangerouslySetInnerHTML={{ __html: replyItem.content }} />

      <div className="clearfix" />
    </div>
  );
};
