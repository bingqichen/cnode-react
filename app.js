const Koa = require('koa');
const Pug = require('koa-pug');
const router = require('./server/routes/router');
const renderRoutes = require('./server/routes/render');
const response = require('./server/modules/response');

const app = new Koa();

const pug = new Pug({
  pretty: true,
  locals: {
    title: '默认标题'
  },
  viewPath: './server/views/'
});

pug.use(app);

app.use(router.routes());
app.use(renderRoutes);

response(app);

app.listen(3002, () => {
  console.log('server listening port 3002');
});
