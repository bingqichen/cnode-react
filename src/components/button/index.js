import React from 'react';
import cx from 'classnames';

import './style.less';

export default (props) => {
  const { className, children, onClick = () => {} } = props;

  const cls = cx('component-button-wrap', className);

  return (
    <button
      className={cls}
      onClick={onClick}
    >{children}</button>
  );
};
