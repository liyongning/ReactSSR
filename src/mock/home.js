const expree = require('express')

const app = expree()

app.get('/api/course/list', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  // res.header('Content-Type', 'application/json;charset=UTF-8')
  res.json({
    code: 0,
    list: [
      { name: 'web全栈', id: 1},
      { name: 'JS高级', id: 2},
      { name: 'web小白', id: 3},
      { name: 'java架构师', id: 4},
    ]
  })
})

app.get('/api/user/infos', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  // res.header('Content-Type', 'application/json;charset=UTF-8')
  res.json({
    code: 0,
    userInfo: {
      title: 'user page'
    }
  })
})

app.listen(3001, () => {
  console.log('api server start')
})