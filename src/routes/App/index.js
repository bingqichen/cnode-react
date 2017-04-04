import React from 'react';

import './style.less';

export default (props) => {
  const { children } = props;
  return (
    <div className="app-wrap">{children}</div>
  );
};
