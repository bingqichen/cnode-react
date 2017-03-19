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
    const response = await axios.get('/topics', {
      params: {
        page: 1,
        tab: 'share',
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
          page: 0,
          tab: 'share',
          limit: 20,
          mdrender: true
        }
      }
    }
    
    next();
  }
};
