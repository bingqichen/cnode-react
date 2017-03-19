const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Provider = require('react-redux').Provider;
const RouterContext = require('react-router').RouterContext;
const configureStore = require('../front/store').default;

module.exports = (app) => {
  app.use(async (ctx, next) => {
    await next();

    const createElement = React.createElement;
    const serverRender = ReactDOMServer.renderToString;

    const body = ctx.body;
    if (!body || body.pipe) return;

    if (body.view && body.renderProps) {
      const startTime = Date.now();
      const store = configureStore(body.store);

      const context = createElement(RouterContext, body.renderProps);
      const provider = createElement(Provider, {
        store
      }, context);

      body.__INITIAL_STATE__ = store.getState();

      body.bodyHtml = serverRender(provider);

      ctx.render(body.view, body);
    } else if (body.view) {
      ctx.render(body.view, body);
    }
  });
};
