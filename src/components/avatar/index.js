import React from 'react';
import cx from 'classnames';

import './style.less';

export default (props) => {
  const { className, avatar } = props;

  const cls = cx('component-avatar-wrap', className);

  return (
    <div className={cls} style={{ backgroundImage: `url(${avatar})` }} />
  );
};
