/**
 * Server 端,负责首屏渲染
 */
import express from 'express'
// 这里导入的App是一个虚拟DOM
import App from '../src'
import { renderToString } from 'react-dom/server'

const app = express()

// 这里的路径是相对执行位置来说的
app.use(express.static('./dist/client'))

app.get('/', (req, res) => {
  // 在服务端将虚拟DOM渲染成HTML
  const content = renderToString(App)
  // 向浏览器返回一段拼接好的HTML
  res.send(
    `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id = "root">${content}</div>
        <script src = "/bundle.js"></script>
      </body>
    </html>
    `
  )
})

app.listen(3000, () => {
  console.log('server start')
})
