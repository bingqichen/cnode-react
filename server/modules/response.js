const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const dva = require('dva').default;
const RouterContext = require('dva/router').RouterContext;
const createMemoryHistory = require('dva/router').createMemoryHistory;
const topicsListModel = require('../front/models/topicsList').default;
const topicDetailModel = require('../front/models/topicDetail').default;

module.exports = (app) => {
  app.use(async (ctx, next) => {
    await next();

    const createElement = React.createElement;

    const body = ctx.body;
    if (!body || body.pipe) return;

    if (body.view && body.renderProps) {

      const app = dva({
        history: createMemoryHistory(),
        initialState: body.store || {}
      });

      app.model(topicsListModel);
      app.model(topicDetailModel);

      app.router(({ renderProps }) => (
        createElement(RouterContext, renderProps)
      ));

      body.__INITIAL_STATE__ = body.store || {};

      body.bodyHtml = renderToString(app.start()({ renderProps: body.renderProps }));

      ctx.render(body.view, body);
    } else if (body.view) {
      ctx.render(body.view, body);
    }
  });
};
