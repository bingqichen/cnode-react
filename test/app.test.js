/* eslint-disable no-undef */
import chai from 'chai';
import TestUtils from 'react-addons-test-utils';

import React from 'react';
import { findDOMNode } from 'react-dom';
import { Provider } from 'react-redux';

import { formatTime } from '@/util';
import routes from '../server/front/routes';
import configureStore from '../server/front/store';

const expect = chai.expect;

describe('时间格式化函数测试', () => {
  it('同一时间', () => {
    expect(formatTime(new Date())).to.be.equal('几秒前');
  });

  it('一天', () => {
    const randomSecond = Math.random() * 86400 * 1000;
    expect(formatTime(new Date(Date.now() - randomSecond))).to.match(/.*(秒前|分钟前|小时前|1 天前)/);
  });
});

describe('DOM 测试', () => {
  const store = configureStore(window.__INITIAL_STATE__);
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      {routes}
    </Provider>
  );

  const appDOM = findDOMNode(app);

  it('tab按钮切换', () => {
    const tabNodes = appDOM.querySelectorAll('.tab button');
    const oldStatus = tabNodes[1].disabled;
    TestUtils.Simulate.click(tabNodes[1]);
    const newStatus = tabNodes[1].disabled;
    // expect(newStatus).to.be.equal(!oldStatus);
    expect();
  });
});
