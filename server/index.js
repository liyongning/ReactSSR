/**
 * Server 端,负责首屏渲染
 */
import React from 'react'
import express from 'express'
// 这里导入的App是一个虚拟DOM
// import App from '../src'
import Routes from '../src'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom'
// store
import { serverStore } from '../src/store'
const store = serverStore()
import { Provider } from 'react-redux'
// header
import Header from '../src/views/header'
// proxy
import proxy from 'express-http-proxy'
import path from 'path'
import fs from 'fs'
import config from './config'

const app = express()

// 这里的路径是相对执行位置来说的
app.use(express.static('./dist/client'))

// 拦截所有的api请求，并将请求转发到api服务器
app.use(
  '/api',
  proxy('http://localhost:3001', {
    proxyReqPathResolver: req => {
      return '/api' + req.url
    }
  })
)

app.get('*', (req, res) => {
  // 开启csr, 访问高峰期临时开启csr，可以手动开启，比如传参，配置，或者根据服务器负载情况自动开启或关闭
  if (config.csr) {
    console.log('url csr 首屏降级渲染开启')
    const content = fs.readFileSync(path.resolve(process.cwd(), './dist/client/index.csr.html'), 'utf-8')
    res.send(content)
  }

  // 根据路由拿到对应的组件，并执行loadData方法获取数据
  const promises = []
  Routes.forEach(route => {
    if (matchPath(req.path, route)) {
      route.component.loadData && promises.push(route.component.loadData(store))
    }
  })

  // 降级处理，除了finally或者将promise在包装一层强制resolve这两种方法外更好的是使用Promise.allSettled方法
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
  // 数据全部加载完成,再渲染页面
  Promise.all(promises)
    .catch(err => {
      console.log('error message', err.message)
    })
    .finally(_ => {
      const context = {
        css: []
      }
      // 在服务端将虚拟DOM渲染成HTML
      const content = renderToString(
        // 负责首屏路由
        <Provider store={store}>
          {/* 为StaticRouter传递一个空对象，子组件都会收到这个对象，可以在这个对象上做点事情，然后通过这个对象为前端返回不同的状态结果 */}
          <StaticRouter location={req.url} context={context}>
            <Header />
            <Switch>
              {Routes.map((route, index) => {
                return <Route {...route} key={index} />
              })}
            </Switch>
          </StaticRouter>
        </Provider>
      )
      // 状态切换和页面跳转
      if (context.statusCode === 404) {
        res.status(context.statusCode)
      } else if (context.action === 'REPLACE') {
        // 页面跳转，设置状态码为301，跳转到指定url
        // res.status(301)
        res.redirect(301, context.url)
      }
      const css = context.css.join('\n')
      // 向浏览器返回一段拼接好的HTML
      res.send(
        `
      <html>
        <head>
          <title>React SSR</title>
          <style>${css}</style>
        </head>
        <body>
          <div id = "root">${content}</div>
          <script>
            window.__context = ${JSON.stringify(store.getState())}
          </script>
          <script src = "/bundle.js"></script>
        </body>
      </html>
      `
      )
    })
})

app.listen(3000, () => {
  console.log('server start')
})
