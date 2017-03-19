import React from 'react';
import cx from 'classnames';

import './style.less';

export default props => {
  const { className, children } = props;
  const cls = cx('component-button-group-wrap', className);
  return (
    <div className={cls}>
      {children}
    </div>
  );
};
