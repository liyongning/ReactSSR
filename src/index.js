/**
 * React 组件
 */
import React from 'react'
import {Route} from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
import User from './views/user'

// 这里导出的就是一个虚拟DOM
// export default (
//   <div>
//     <Route path = "/" exact component = {Home} />
//     <Route path = "/about" exact component = {About} />
//   </div>
// )

// 将这里的路由代码变成像vue router一样的配置
export default [
  {
    path: '/',
    exact: true,
    component: Home,
    key: 'home'
  },
  {
    path: '/about',
    exact: true,
    component: About,
    key: 'about'
  },
  {
    path: '/user',
    exact: true,
    component: User,
    key: 'user'
  },
]
