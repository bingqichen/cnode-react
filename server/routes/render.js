const match = require('react-router').match;
const routes = require('../front/routes').default;

module.exports = (ctx, next) => {
  if (ctx.status !== 200) {
    return next();
  }

  const body = ctx.body || {};

  match({ routes, location: ctx.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      // 500
      ctx.render('HTTP-Internal Server Error');
    } else if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      body.renderProps = renderProps;
      next();
    } else {
      // 404
      next();
    }
  });
};
