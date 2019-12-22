/**
 * client端,一个React应用
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../src'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// store
import { clientStore } from '../src/store'
import { Provider } from 'react-redux'
// header
import Header from '../src/views/header'

/**
 * render和hydrate的作用对比:
 * 相同点: 都有初始化DOM和事件处理程序的作用,
 * 不同点:
 *     render: 尊选客户端渲染的原则, 会保证DOM的以执行, 在初始化DOM时如果发现DOM出现不一致现象的话会修改DOM结构
 *     hydrate: 不会修改DOM结构,它会尽可能的复用ReactDOMServer渲染的DOM结构, 只做 为已存在标记附加事件监听器的工作
 */

const Page = (
  <Provider store={clientStore()}>
    <BrowserRouter>
      <Header />
      <Switch>
        {Routes.map((route, index) => {
          return <Route {...route} key={index} />
        })}
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(Page, document.getElementById('root'))
