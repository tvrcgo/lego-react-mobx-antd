# Lego

简单高效的Web开发规范，基于 koa 2。

## Start
两行代码启动应用
```js
// in app/index.js
const lego = require('lego')
lego.start()
```

## Framework
应用按如下目录结构组织代码，易维护和扩展
- `app`
  - `agent` 代理
  - `plugin` 插件
  - `router` 路由
  - `public` 静态资源
  - `view` 视图模板
  - `index.js` 入口文件
- `config`
  - `config.js` 其它配置
  - `mount.js` 加载配置，包括 agent, plugin, job

## Stack
- `koa` 中间件框架，koa@v2
- `React` 前端
- `Vue` 前端
- `Babel` ES6支持
- `swig` 模板渲染
- `webpack` 构建
- `browser-sync` livereload方案

## License
MIT
