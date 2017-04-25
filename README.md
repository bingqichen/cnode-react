# cnode app with React && dva && SSR
使用 [cnode](https://cnodejs.org/api) 社区的公开接口，主要在数据管理上实践了 [dva](https://github.com/dvajs/dva) 的使用，简化redux的开发体验，同时结合了服务端渲染。

## 运行
- 请先安装 `pm2`


- Npm
`npm install` && `npm run server` && `npm run dev`


- Yarn
`yarn` && `yarn server` && `yarn dev`


## 结构划分
```bash
├── docs/
├── server/
│   ├── config/
│   ├── controllers/  # ctrl
│   ├── front/        # 前端代码
│   ├── modules/
│   ├── routes/       # 路由
│   └── views/        # 模版
├── src/              # 前端代码
│   ├── components/   # 项目组件
│   ├── config/
│   ├── models/       # 数据模型
│   ├── routes/       # 路由组件（页面维度）
│   ├── services/     # 数据接口
│   ├── utils/        # 工具函数
│   ├── app.js        # 入口文件
│   └── router.js     # 路由配置
├── test/
├── app.js            # koa入口文件
├── gulpfile.js       # 编译文件
├── webpack.config.dev.js
```
