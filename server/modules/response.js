const React = require('react');
const { renderToString } = require('react-dom/server');
const { RouterContext } = require('dva/router');
const { createMemoryHistory } = require('dva/router');

const createApp = require('../front/createApp').default;

module.exports = (app) => {
  app.use(async (ctx, next) => {
    await next();

    const createElement = React.createElement;

    const body = ctx.body;
    if (!body || body.pipe) return;

    if (body.view && body.renderProps) {

      const app = createApp({
        history: createMemoryHistory(),
        initialState: body.store || {}
      });

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
