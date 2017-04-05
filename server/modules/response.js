const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Provider = require('react-redux').Provider;
const dva = require('dva');
const RouterContext = require('dva/router').RouterContext;
const createMemoryHistory = require('dva/router').createMemoryHistory;

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

      const context = createElement(RouterContext, body.renderProps);

      body.__INITIAL_STATE__ = body.store || {};

      body.bodyHtml = renderToString(app.start()({ context }));

      ctx.render(body.view, body);
    } else if (body.view) {
      ctx.render(body.view, body);
    }
  });
};
