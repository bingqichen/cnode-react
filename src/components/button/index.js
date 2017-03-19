import React from 'react';
import cx from 'classnames';

import './style.less';

export default (props) => {
  const { className, children, disabled = false, onClick = () => {} } = props;

  const cls = cx('component-button-wrap', className);

  return (
    <button
      className={cls}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  );
};
