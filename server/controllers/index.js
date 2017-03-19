const axios = require('../config').axios;

module.exports = {
  index: (ctx, next) => {
  ctx.body = {
    view: 'index',
    title: 'hello'
  };
    return next();
  },

  topicslist: async (ctx, next) => {
    const page = ctx.query.page || 1;
    const tab = ctx.query.tab || 'ask';
    const response = await axios.get('/topics', {
      params: {
        page,
        tab,
        limit: 20,
        mdrender: true
      }
    })

    ctx.body = {
      view: 'index',
      title: '列表页',
      store: {
        app: {},
        topicsList: {
          list: response,
          page,
          tab,
          limit: 20,
          mdrender: true
        }
      }
    }
    
    next();
  },

  topicdetail: async (ctx, next) => {
    const id = ctx.query.id;
    const response = await axios.get(`/topic/${id}`)

    ctx.body = {
      view: 'index',
      title: '详情页',
      store: {
        app: {},
        topicDetail: {
          detail: response
        }
      }
    }

    next();
  }
};
