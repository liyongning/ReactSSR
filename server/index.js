/**
 * Server 端,负责首屏渲染
 */
import React from 'react'
import express from 'express'
// 这里导入的App是一个虚拟DOM
// import App from '../src'
import Routes from '../src'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
// store
import {serverStore} from '../src/store'
const store = serverStore()
import { Provider } from 'react-redux'
// header
import Header from '../src/views/header'
// proxy
import proxy from 'express-http-proxy'

const app = express()

// 这里的路径是相对执行位置来说的
app.use(express.static('./dist/client'))

// 拦截所有的api请求，并将请求转发到api服务器
app.use('/api', proxy('http://localhost:3001', {
  proxyReqPathResolver: (req) => {
    return '/api' + req.url
  }
}))

app.get('*', (req, res) => {
  // 根据路由拿到对应的组件，并执行loadData方法获取数据
  const promises = []
  Routes.forEach(route => {
    if (matchPath(req.path, route)) {
      route.component.loadData && promises.push(route.component.loadData(store))
    }
  })

  // 数据全部加载完成,再渲染页面
  Promise.all(promises).then(_ => {
    // 在服务端将虚拟DOM渲染成HTML
    const content = renderToString(
      // 负责首屏路由
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header />
          {
            Routes.map(route => {
              return <Route {...route} />
            })
          }
        </StaticRouter>
      </Provider>
    )
    // 向浏览器返回一段拼接好的HTML
    res.send(
      `
      <html>
        <head>
          <title>React SSR</title>
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
  }).catch(err => {
    console.log('error', err.message)
    res.send('error page')
  })
})

app.listen(3000, () => {
  console.log('server start')
})
