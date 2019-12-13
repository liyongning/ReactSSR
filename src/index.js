/**
 * React 组件
 */
import React from 'react'
import {Route} from 'react-router-dom'
import Home from './views/home'
import About from './views/about'

// 这里导出的就是一个虚拟DOM
export default (
  <div>
    <Route path = "/" exact component = {Home} />
    <Route path = "/about" exact component = {About} />
  </div>
)
